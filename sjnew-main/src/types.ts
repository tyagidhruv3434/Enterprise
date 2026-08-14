export interface Service {
  id: string;
  title: string;
  category: 'fabrication' | 'machining' | 'trading' | 'equipment' | 'specialized';
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  keyFeatures: string[];
  capacityOrSpecs?: string;
  commonApplications: string[];
  imageUrl: string;
}

export interface Project {
  id: string;
  name: string;
  category: string;
  categorySlug: 'vessels' | 'boilers' | 'machining' | 'fabrication' | 'supply' | 'specialized';
  clientName?: string;
  description: string;
  engineeringHighlights: string[];
  servicesUsed: string[];
  mainImageUrl: string;
  additionalImages?: string[];
  materialsUsed?: string;
  completionYear?: string;
}

export interface Client {
  id: string;
  name: string;
  groupNote?: string;
  industry: string;
  location?: string;
  workDone: string;
  logoBgColor?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Fabrication' | 'Machining' | 'Pressure Vessels' | 'Boilers' | 'Material Supply' | 'Industrial Equipment' | 'Workshop' | 'Completed Projects' | 'Quality Control' | 'Specialized Equipment';
  imageUrl: string;
  description: string;
  specs?: string;
}

export interface QuoteFormData {
  companyName: string;
  contactPerson: string;
  phone: string;
  email: string;
  projectType: string;
  requirement: string;
  estimatedTimeline?: string;
  drawingFile?: File | null;
  drawingFileName?: string;
}

export interface ContactInfo {
  companyName: string;
  ownerName: string;
  managedBy: string;
  phone: string;
  phoneRaw: string;
  email: string;
  address: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
  };
  googleMapsUrl: string;
  whatsappNumber: string;
}
