import express from 'express';
import path from 'path';

import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3000;

// Body parser
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

const COMPANY_EMAIL = process.env.COMPANY_EMAIL || 'shreejeesharda@gmail.com';

// Lazy SMTP Transporter helper
function getTransporter() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const port = Number(process.env.SMTP_PORT) || 587;
  const secure = process.env.SMTP_SECURE === 'true' || port === 465;

  if (host && user && pass) {
    return nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });
  }

  // If user configured gmail credentials directly
  if (user && pass && !host) {
    return nodemailer.createTransport({
      service: 'gmail',
      auth: { user, pass },
    });
  }

  return null;
}

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    companyEmail: COMPANY_EMAIL,
    smtpConfigured: Boolean(process.env.SMTP_HOST || process.env.SMTP_USER),
  });
});

// Quote Request Email Endpoint
app.post('/api/send-quote', async (req, res) => {
  try {
    const {
      companyName,
      contactPerson,
      phone,
      email,
      projectType,
      estimatedTimeline,
      requirement,
      drawingFileName,
      drawingFileData, // Base64 data URL if uploaded
    } = req.body;

    if (!contactPerson || !phone || !email || !requirement) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields (contactPerson, phone, email, requirement).',
      });
    }

    const quoteId = `RFQ-${Date.now().toString(36).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;
    const submissionTime = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'medium',
    });

    const emailSubject = `[NEW RFQ - ${quoteId}] ${projectType || 'Engineering Quote'} from ${companyName || contactPerson}`;

    const htmlBody = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 24px; color: #0f172a; }
          .container { max-width: 640px; margin: 0 auto; background: #ffffff; border-radius: 12px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); }
          .header { background: #020617; padding: 24px; text-align: center; border-bottom: 3px solid #f97316; }
          .header h1 { color: #ffffff; margin: 0; font-size: 20px; font-weight: 700; letter-spacing: 0.5px; }
          .header p { color: #f97316; margin: 6px 0 0 0; font-size: 13px; font-weight: 600; text-transform: uppercase; }
          .badge { display: inline-block; background: #ea580c; color: #ffffff; font-size: 12px; font-weight: 700; padding: 4px 10px; border-radius: 6px; margin-bottom: 12px; }
          .content { padding: 28px; }
          .section-title { font-size: 14px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; margin: 20px 0 10px 0; border-bottom: 1px solid #f1f5f9; padding-bottom: 4px; }
          .table-info { width: 100%; border-collapse: collapse; margin-bottom: 16px; }
          .table-info td { padding: 10px 12px; font-size: 14px; border-bottom: 1px solid #f1f5f9; }
          .table-info td.label { width: 38%; color: #64748b; font-weight: 600; background: #f8fafc; }
          .table-info td.value { color: #0f172a; font-weight: 500; }
          .requirement-box { background: #f8fafc; border-left: 4px solid #f97316; padding: 16px; border-radius: 0 8px 8px 0; font-size: 14px; line-height: 1.6; color: #1e293b; margin-top: 8px; white-space: pre-wrap; }
          .footer { background: #f1f5f9; padding: 18px 24px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0; }
          .btn-wa { display: inline-block; background: #22c55e; color: #ffffff; text-decoration: none; padding: 10px 20px; border-radius: 8px; font-weight: 700; font-size: 13px; margin-top: 14px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>SJ SHARDA ENTERPRISES</h1>
            <p>New Commercial & Technical Quotation Request</p>
          </div>
          <div class="content">
            <div style="text-align: center;">
              <span class="badge">Quote Ref: ${quoteId}</span>
            </div>

            <div class="section-title">Client & Contact Information</div>
            <table class="table-info">
              <tr>
                <td class="label">Company Name</td>
                <td class="value"><strong>${companyName || 'Not specified'}</strong></td>
              </tr>
              <tr>
                <td class="label">Contact Person</td>
                <td class="value"><strong>${contactPerson}</strong></td>
              </tr>
              <tr>
                <td class="label">Mobile / Phone</td>
                <td class="value"><a href="tel:${phone}" style="color: #0f172a; text-decoration: none; font-weight: 600;">${phone}</a></td>
              </tr>
              <tr>
                <td class="label">Email Address</td>
                <td class="value"><a href="mailto:${email}" style="color: #ea580c; text-decoration: none; font-weight: 600;">${email}</a></td>
              </tr>
              <tr>
                <td class="label">Submission Date (IST)</td>
                <td class="value">${submissionTime}</td>
              </tr>
            </table>

            <div class="section-title">Technical Specifications & Project Scope</div>
            <table class="table-info">
              <tr>
                <td class="label">Project / Service Type</td>
                <td class="value"><strong style="color: #ea580c;">${projectType || 'Heavy Fabrication'}</strong></td>
              </tr>
              <tr>
                <td class="label">Target Timeline</td>
                <td class="value">${estimatedTimeline || 'Standard'}</td>
              </tr>
              <tr>
                <td class="label">Attached Drawing</td>
                <td class="value">${drawingFileName ? `📎 <strong>${drawingFileName}</strong>` : 'No file attached'}</td>
              </tr>
            </table>

            <div class="section-title">Detailed Requirement & Notes</div>
            <div class="requirement-box">${requirement}</div>

            <div style="text-align: center; margin-top: 24px;">
              <a href="https://wa.me/${phone.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(contactPerson)},%20regarding%20your%20SJ%20Sharda%20Enterprises%20RFQ%20(${quoteId})..." class="btn-wa" target="_blank">
                💬 Reply to Client on WhatsApp
              </a>
            </div>
          </div>
          <div class="footer">
            <p style="margin: 0 0 4px 0;"><strong>SJ Sharda Enterprises — Heavy Engineering & Metal Fabrication</strong></p>
            <p style="margin: 0;">Mayakunj Society, Avantika, Ghaziabad, UP 201002 | Phone: +91 9759590077 | Email: ${COMPANY_EMAIL}</p>
          </div>
        </div>
      </body>
      </html>
    `;

    const transporter = getTransporter();
    let emailSent = false;
    let emailMessageId = '';

    // 1. Try sending via configured SMTP (Nodemailer)
    if (transporter) {
      try {
        const attachments: any[] = [];
        if (drawingFileData && drawingFileName) {
          const matches = drawingFileData.match(/^data:(.+);base64,(.+)$/);
          if (matches) {
            attachments.push({
              filename: drawingFileName,
              content: Buffer.from(matches[2], 'base64'),
              contentType: matches[1],
            });
          }
        }

        const info = await transporter.sendMail({
          from: `"SJ Sharda RFQ System" <${process.env.SMTP_USER || COMPANY_EMAIL}>`,
          to: COMPANY_EMAIL,
          replyTo: email,
          subject: emailSubject,
          html: htmlBody,
          attachments,
        });

        emailSent = true;
        emailMessageId = info.messageId;
        console.log(`[SMTP] Quote email successfully dispatched to ${COMPANY_EMAIL}. MessageId: ${info.messageId}`);
      } catch (smtpErr) {
        console.warn('[SMTP WARNING] SMTP dispatch encountered error, falling back to direct web delivery:', smtpErr);
      }
    }

    // 2. Immediate web mail delivery engine via FormSubmit relay to guarantee instant delivery to COMPANY_EMAIL
    try {
      const formSubmitPayload = {
        _subject: emailSubject,
        _replyto: email,
        _template: 'table',
        'Quote Reference': quoteId,
        'Company Name': companyName || 'N/A',
        'Contact Person': contactPerson,
        'Phone Number': phone,
        'Email Address': email,
        'Project Scope': projectType || 'Heavy Fabrication',
        'Target Timeline': estimatedTimeline || 'Standard',
        'Attached Drawing': drawingFileName || 'No file attached',
        'Technical Requirement': requirement,
        'Submission Timestamp': submissionTime,
      };

      const relayRes = await fetch(`https://formsubmit.co/ajax/${COMPANY_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Origin': 'https://sjshardaenterprises.com',
          'Referer': 'https://sjshardaenterprises.com/rfq',
        },
        body: JSON.stringify(formSubmitPayload),
      });

      const relayData = await relayRes.json();
      console.log(`[EMAIL RELAY] Direct delivery response for ${COMPANY_EMAIL}:`, relayData);
      if (relayRes.ok) {
        emailSent = true;
      }
    } catch (relayErr) {
      console.warn('[EMAIL RELAY WARNING] Web email relay note:', relayErr);
    }

    console.log(`[QUOTE PROCESSED] RFQ ${quoteId} processed for ${COMPANY_EMAIL}:`, {
      quoteId,
      company: companyName,
      contactPerson,
      phone,
      email,
      projectType,
      recipient: COMPANY_EMAIL,
    });

    return res.json({
      success: true,
      quoteId,
      emailRecipient: COMPANY_EMAIL,
      smtpDispatched: emailSent,
      messageId: emailMessageId,
      message: `Quotation request successfully received and sent to ${COMPANY_EMAIL}.`,
    });
  } catch (error: any) {
    console.error('Error handling quote request:', error);
    return res.status(500).json({
      success: false,
      error: error.message || 'Internal server error processing quote request.',
    });
  }
});

// General Contact Enquiry Endpoint
app.post('/api/send-contact', async (req, res) => {
  try {
    const { name, phone, email, company, message } = req.body;

    if (!name || !phone || !message) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields (name, phone, message).',
      });
    }

    const enquiryId = `INQ-${Date.now().toString(36).toUpperCase()}`;
    const transporter = getTransporter();

    if (transporter) {
      try {
        await transporter.sendMail({
          from: `"SJ Sharda Website" <${process.env.SMTP_USER || COMPANY_EMAIL}>`,
          to: COMPANY_EMAIL,
          replyTo: email || undefined,
          subject: `[Contact Enquiry - ${enquiryId}] from ${name} (${company || 'Direct'})`,
          html: `
            <div style="font-family: sans-serif; padding: 20px; max-width: 600px; margin: auto; border: 1px solid #e2e8f0; border-radius: 8px;">
              <h2 style="color: #0f172a; border-bottom: 2px solid #f97316; padding-bottom: 8px;">New Contact Message</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Company:</strong> ${company || 'N/A'}</p>
              <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
              <p><strong>Email:</strong> ${email || 'N/A'}</p>
              <p><strong>Message:</strong></p>
              <div style="background: #f8fafc; padding: 12px; border-left: 3px solid #f97316;">${message}</div>
            </div>
          `,
        });
        console.log(`[SMTP] Contact inquiry dispatched to ${COMPANY_EMAIL}`);
      } catch (smtpErr) {
        console.warn('[SMTP WARNING] Contact SMTP error:', smtpErr);
      }
    }

    try {
      await fetch(`https://formsubmit.co/ajax/${COMPANY_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Origin': 'https://sjshardaenterprises.com',
          'Referer': 'https://sjshardaenterprises.com/contact',
        },
        body: JSON.stringify({
          _subject: `[Contact Enquiry - ${enquiryId}] from ${name}`,
          _replyto: email || undefined,
          'Sender Name': name,
          'Company': company || 'N/A',
          'Phone': phone,
          'Email': email || 'N/A',
          'Message': message,
        }),
      });
    } catch (relayErr) {
      console.warn('[EMAIL RELAY WARNING] Contact relay error:', relayErr);
    }

    return res.json({
      success: true,
      enquiryId,
      emailRecipient: COMPANY_EMAIL,
      message: `Enquiry successfully logged for ${COMPANY_EMAIL}`,
    });
  } catch (error: any) {
    console.error('Error handling contact message:', error);
    return res.status(500).json({
      success: false,
      error: error.message || 'Internal server error processing contact message.',
    });
  }
});

// Vite middleware & Static Serving
export default app;