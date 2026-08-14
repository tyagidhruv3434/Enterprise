import { Service, Project, Client, GalleryItem, ContactInfo } from '../types';

// Key Industrial Workshop & Product Images
import heroFactoryImg from '../assets/images/hero_workshop_factory_1786704606696.jpg';
import pressureVesselImg from '../assets/images/pressure_vessel_fabrication_1786704623576.jpg';
import vtlLatheMachiningImg from '../assets/images/vtl_lathe_machining_1786704637168.jpg';
import heavySteelBaseFrameImg from '../assets/images/heavy_steel_base_frame_1786704649966.jpg';
import industrialSteelStockyardImg from '../assets/images/industrial_steel_stockyard_1786704664504.jpg';
import boilerTubeBundleImg from '../assets/images/boiler_tube_bundle_1786704677245.jpg';
import qualityVernierCaliperImg from '../assets/images/quality_vernier_caliper_1786704701052.jpg';
import heavyFlangeMachiningImg from '../assets/images/heavy_flange_machining_1786704714950.jpg';
import storageTankFabricationImg from '../assets/images/storage_tank_fabrication_1786704732656.jpg';

// 28 Original Workshop & Logistics Gallery Photos
import gallery01 from '../assets/Galleryimages/WhatsApp Image 2026-07-30 at 2.54.34 AM (1).jpeg';
import gallery02 from '../assets/Galleryimages/WhatsApp Image 2026-07-30 at 2.54.34 AM.jpeg';
import gallery03 from '../assets/Galleryimages/WhatsApp Image 2026-07-30 at 2.54.35 AM (1).jpeg';
import gallery04 from '../assets/Galleryimages/WhatsApp Image 2026-07-30 at 2.54.35 AM.jpeg';
import gallery05 from '../assets/Galleryimages/WhatsApp Image 2026-07-30 at 2.54.36 AM (1).jpeg';
import gallery06 from '../assets/Galleryimages/WhatsApp Image 2026-07-30 at 2.54.36 AM (2).jpeg';
import gallery07 from '../assets/Galleryimages/WhatsApp Image 2026-07-30 at 2.54.36 AM.jpeg';
import gallery08 from '../assets/Galleryimages/WhatsApp Image 2026-07-30 at 2.54.39 AM (1).jpeg';
import gallery09 from '../assets/Galleryimages/WhatsApp Image 2026-07-30 at 2.54.39 AM (2).jpeg';
import gallery10 from '../assets/Galleryimages/WhatsApp Image 2026-07-30 at 2.54.39 AM.jpeg';
import gallery11 from '../assets/Galleryimages/WhatsApp Image 2026-07-30 at 2.54.40 AM (1).jpeg';
import gallery12 from '../assets/Galleryimages/WhatsApp Image 2026-07-30 at 2.54.40 AM (2).jpeg';
import gallery13 from '../assets/Galleryimages/WhatsApp Image 2026-07-30 at 2.54.40 AM.jpeg';
import gallery14 from '../assets/Galleryimages/WhatsApp Image 2026-07-30 at 2.54.41 AM (1).jpeg';
import gallery15 from '../assets/Galleryimages/WhatsApp Image 2026-07-30 at 2.54.41 AM (2).jpeg';
import gallery16 from '../assets/Galleryimages/WhatsApp Image 2026-07-30 at 2.54.41 AM.jpeg';
import gallery17 from '../assets/Galleryimages/WhatsApp Image 2026-07-30 at 2.54.42 AM (1).jpeg';
import gallery18 from '../assets/Galleryimages/WhatsApp Image 2026-07-30 at 2.54.42 AM (2).jpeg';
import gallery19 from '../assets/Galleryimages/WhatsApp Image 2026-07-30 at 2.54.42 AM (3).jpeg';
import gallery20 from '../assets/Galleryimages/WhatsApp Image 2026-07-30 at 2.54.42 AM.jpeg';
import gallery21 from '../assets/Galleryimages/WhatsApp Image 2026-07-30 at 2.54.43 AM (1).jpeg';
import gallery22 from '../assets/Galleryimages/WhatsApp Image 2026-07-30 at 2.54.43 AM (2).jpeg';
import gallery23 from '../assets/Galleryimages/WhatsApp Image 2026-07-30 at 2.54.43 AM.jpeg';
import gallery24 from '../assets/Galleryimages/WhatsApp Image 2026-07-30 at 2.54.44 AM (1).jpeg';
import gallery25 from '../assets/Galleryimages/WhatsApp Image 2026-07-30 at 2.54.44 AM (2).jpeg';
import gallery26 from '../assets/Galleryimages/WhatsApp Image 2026-07-30 at 2.54.44 AM.jpeg';
import gallery27 from '../assets/Galleryimages/WhatsApp Image 2026-07-30 at 2.54.45 AM (1).jpeg';
import gallery28 from '../assets/Galleryimages/WhatsApp Image 2026-07-30 at 2.54.45 AM.jpeg';

// Legacy alias mappings for backwards compatibility with Projects & Services
const heavyMachiningImg = vtlLatheMachiningImg;
const vtlFlangeInspectionImg = heavyFlangeMachiningImg;
const orangePressureVesselImg = storageTankFabricationImg;
const wplSteelBaseFrameImg = heavySteelBaseFrameImg;
const boilerVesselCraneImg = boilerTubeBundleImg;
const zincPipesSupplyImg = industrialSteelStockyardImg;
const amrishSsDishedHeadImg = qualityVernierCaliperImg;
const sewerStorageTanksImg = storageTankFabricationImg;
const processColumnVesselsImg = pressureVesselImg;
const turnedSsDiscPillarsImg = heavyFlangeMachiningImg;
const stackedBoxStiffenersImg = heavySteelBaseFrameImg;
const truckCarryingLoadsImg = industrialSteelStockyardImg;
const warehouseTradingCraneImg = industrialSteelStockyardImg;
const foilWrappedVesselImg = boilerTubeBundleImg;

export const COMPANY_CONTACT: ContactInfo = {
  companyName: 'SJ Sharda Enterprises',
  ownerName: 'Asha Tyagi',
  managedBy: 'Amrish Tyagi',
  phone: '+91 9759590077',
  phoneRaw: '919759590077',
  email: 'shreejeesharda@gmail.com',
  address: {
    line1: 'Mayakunj Society, Avantika',
    line2: 'Avantika, Sector 1',
    city: 'Ghaziabad',
    state: 'Uttar Pradesh',
    pincode: '201002',
    country: 'India',
  },
  googleMapsUrl: 'https://maps.google.com/?q=Avantika+Ghaziabad+Uttar+Pradesh+201002',
  whatsappNumber: '919759590077',
};

export const COMPANY_STATS = [
  { value: '10+', label: 'Years Industry Expertise', subtext: 'Decade of hands-on engineering excellence' },
  { value: '100+', label: 'Industrial Jobs Delivered', subtext: 'Heavy fabrication, machining & raw material supplies' },
  { value: '8+', label: 'Major Corporate Clients', subtext: 'Serving tier-1 energy, filtration & EPC companies' },
  { value: '100%', label: 'Quality & Safety Commitment', subtext: 'Rigorous NDT testing, hydro testing & ISO standards' },
];

export const SERVICES: Service[] = [
  {
    id: 'heavy-fabrication',
    title: 'Heavy Fabrication',
    category: 'fabrication',
    shortDesc: 'Heavy structural and process equipment fabrication conforming to stringent industrial design standards.',
    fullDesc: 'SJ Sharda Enterprises specializes in custom heavy structural steel fabrication for power plants, refineries, chemical plants, and heavy engineering projects. Equipped with heavy overhead cranes, sub-arc welding, and precision assembly bays.',
    iconName: 'Factory',
    keyFeatures: ['Submerged Arc & TIG/MIG Welding', 'Heavy Plate Bending & Cutting', 'Structural Frames & Skids', 'Nondestructive Testing (NDT) Ready'],
    capacityOrSpecs: 'Handling assemblies up to 30 Tons unit weight',
    commonApplications: ['Base Frames', 'Heavy Columns', 'Industrial Skids', 'Structural Support Systems'],
    imageUrl: heroFactoryImg,
  },
  {
    id: 'precision-machining',
    title: 'Precision Machining',
    category: 'machining',
    shortDesc: 'High-accuracy lathe, milling, and grinding operations for complex engineering components.',
    fullDesc: 'State-of-the-art machining capabilities delivering tight tolerances (+/- 0.01mm) on tough alloys, cast irons, forged steels, and stainless steel grades for high-load industrial machinery.',
    iconName: 'Cpu',
    keyFeatures: ['Micron-level Tolerances', 'Surface Finish up to Ra 0.4', 'Intricate Geometry Machining', 'Hardened Alloy Steel Processing'],
    capacityOrSpecs: 'Precision tolerance up to +/- 0.01mm',
    commonApplications: ['Turbine Components', 'Flanges & Shafts', 'Bearing Housings', 'Heavy Gear Blanks'],
    imageUrl: vtlFlangeInspectionImg,
  },
  {
    id: 'vtl-machining',
    title: 'Vertical Turning Lathe (VTL) Machining',
    category: 'machining',
    shortDesc: 'Specialized VTL operations ranging from 1.5 Meter up to 5 Meter swing capacity.',
    fullDesc: 'One of our core flagship capabilities: heavy vertical turning for large diameter rings, heavy cast valve bodies, turbine casings, and flange rings requiring large swing dimensions from 1.5m up to 5.0m.',
    iconName: 'Disc',
    keyFeatures: ['Swing Diameter: 1.5m to 5.0m', 'Heavy Job Weight Handling', 'Facing, Grooving, Bore Turning', 'High Torque Heavy Cutting'],
    capacityOrSpecs: 'Max Swing 5,000 mm | Turning Height up to 2,500 mm',
    commonApplications: ['Large Flanges', 'Slew Bearing Rings', 'CI Cast Housings', 'Hydro Turbine Components'],
    imageUrl: turnedSsDiscPillarsImg,
  },
  {
    id: 'pressure-vessels',
    title: 'Pressure Vessel Fabrication',
    category: 'equipment',
    shortDesc: 'ASME-compliant pressure vessel design, rolling, welding, and hydro-testing.',
    fullDesc: 'Fabrication of heavy-duty pressure vessels, air receivers, moisture separators, and process surge tanks manufactured in high-grade carbon steel and stainless steel with 100% radiographic weld quality.',
    iconName: 'ShieldAlert',
    keyFeatures: ['100% Radiography Tested Welds', 'Hydrostatic Pressure Testing up to 150 Bar', 'Custom Nozzle Orientation', 'Inner Lining & Anti-Corrosive Coating'],
    capacityOrSpecs: 'Design Pressure up to 100+ Bar | Shell Thickness up to 45mm',
    commonApplications: ['Gas Separation Tanks', 'Moisture Vessels', 'Air Receivers', 'Chemical Storage Units'],
    imageUrl: pressureVesselImg,
  },
  {
    id: 'boiler-manufacturing',
    title: 'Boiler & Heat Exchanger Fabrication',
    category: 'equipment',
    shortDesc: 'Industrial boilers, tube bundle assemblies, steam headers, and thermal piping.',
    fullDesc: 'Precision engineering of boiler components, economizer coils, superheater assemblies, and shell-and-tube heat exchangers built for long operational lifespan under high thermal and mechanical stress.',
    iconName: 'Flame',
    keyFeatures: ['High-Thermal Alloy Tube Welding', 'IBR / Non-IBR Grade Options', 'Stress Relieving Heat Treatment', 'High Pressure Hydro Test'],
    capacityOrSpecs: 'Thermal Capacity customized to utility requirements',
    commonApplications: ['Process Boilers', 'Waste Heat Recovery Headers', 'Economizer Coils', 'Steam Vessels'],
    imageUrl: heavyMachiningImg,
  },
  {
    id: 'cnc-machining',
    title: 'CNC Machining Solutions',
    category: 'machining',
    shortDesc: 'Computerized numerical control turning and profiling for repeatable high-precision jobs.',
    fullDesc: 'Automated CNC turning centers capable of high-volume precision batch production with ultra-consistent repeatability, suitable for aerospace, energetics, and automotive heavy components.',
    iconName: 'Sliders',
    keyFeatures: ['Multi-axis CNC turning', 'Programmed Contour Milling', 'High Batch Consistency', 'Rapid Prototyping & Production'],
    capacityOrSpecs: 'Repeatability +/- 0.005 mm',
    commonApplications: ['Precision Shafts', 'Threaded Spools', 'Hydraulic Valve Blocks', 'Piston Rods'],
    imageUrl: vtlFlangeInspectionImg,
  },
  {
    id: 'vmc-machining',
    title: 'VMC Machining (Vertical Machining Center)',
    category: 'machining',
    shortDesc: 'High-speed 3-axis and 4-axis VMC milling for complex prismatic industrial parts.',
    fullDesc: 'State-of-the-art Vertical Machining Centers for high-speed precision drilling, contouring, tapping, and surface slotting on large metal blocks and complex cast structures.',
    iconName: 'Grid',
    keyFeatures: ['High-Torque Spindles', '4th Axis Rotary Indexing', 'Deep Pocket Milling & Drilling', 'Rigid Fixturing for Castings'],
    capacityOrSpecs: 'X/Y/Z Travel up to 2000 x 1000 x 800 mm',
    commonApplications: ['Filter Housing Plates', 'Die & Mould Bases', 'Manifold Blocks', 'Precision Engine Mounts'],
    imageUrl: turnedSsDiscPillarsImg,
  },
  {
    id: 'plano-miller',
    title: 'Plano Miller Machining',
    category: 'machining',
    shortDesc: 'Heavy-duty plano milling for extra-long beds, guide-ways, and large machine frames.',
    fullDesc: 'Specialized heavy Plano Milling setup for machining extra-long structural beds, wide machinery bases, rail guides, and heavy industrial press frames with flat surface accuracy over long lengths.',
    iconName: 'Maximize2',
    keyFeatures: ['Machining Bed Length up to 6 Meters', 'Dual Milling Heads', 'Flatness & Parallelism Control', 'Heavy Metal Removal Rates'],
    capacityOrSpecs: 'Bed Length up to 6,000 mm | Width up to 2,200 mm',
    commonApplications: ['Machine Beds', 'Press Frames', 'Large Slide Ways', 'Structural Base Plates'],
    imageUrl: stackedBoxStiffenersImg,
  },
  {
    id: 'boring-operations',
    title: 'Heavy Boring Operations',
    category: 'machining',
    shortDesc: 'Horizontal & vertical boring for precise internal diameter finishing and pin alignment.',
    fullDesc: 'High-precision horizontal and line boring for heavy gearbox housings, engine blocks, hydraulic cylinders, and articulated joint bores requiring true axial concentricity.',
    iconName: 'Target',
    keyFeatures: ['Line Boring & Facing', 'Concentricity Alignment', 'Large Diameter Internal Finishing', 'Deep Hole Boring'],
    capacityOrSpecs: 'Bore Diameter up to 1,200 mm | Depth up to 3,000 mm',
    commonApplications: ['Gearbox Housings', 'Excavator Arms', 'Bearing Seats', 'Cylinder Liners'],
    imageUrl: heavyMachiningImg,
  },
  {
    id: 'industrial-job-work',
    title: 'Industrial Job Work & Custom Fabrication',
    category: 'specialized',
    shortDesc: 'Comprehensive sub-contract job work according to client engineering drawings.',
    fullDesc: 'Flexible sub-contract engineering support for equipment OEMs and project contractors. From single customized prototype parts to repeat batch job work, executed with quick turnaround.',
    iconName: 'Wrench',
    keyFeatures: ['Drawing-to-Product Execution', 'Material Traceability Certificates', 'Stage-wise Inspection Reports', 'Flexible Batch Sizes'],
    capacityOrSpecs: 'Custom job weight 50kg to 25,000kg',
    commonApplications: ['Custom Spools', 'Trail Welded Assemblies', 'Brackets & Mountings', 'Adapter Plates'],
    imageUrl: wplSteelBaseFrameImg,
  },
  {
    id: 'industrial-trading',
    title: 'Industrial Trading & Raw Material Supply',
    category: 'trading',
    shortDesc: 'Direct procurement and supply of certified Mild Steel (MS) and Stainless Steel (SS) stock.',
    fullDesc: 'Authorized industrial trading and distribution of prime quality MS & SS raw materials including heavy plates, seamless pipes, structural beams, flanges, forged rings, and special alloy round bars with full mill test certificates.',
    iconName: 'ShoppingBag',
    keyFeatures: ['Mill Test Certificates (MTC) Provided', 'MS Grades: IS 2062, SA 516 Gr 70, etc.', 'SS Grades: SS 304, 316L, 310, Duplex', 'Custom Length Cutting & Delivery'],
    capacityOrSpecs: 'Bulk tonnage stockist and immediate dispatch',
    commonApplications: ['Raw Material for Heavy Fab', 'Piping Pipelines', 'Pressure Vessel Shell Plates', 'Structural Projects'],
    imageUrl: truckCarryingLoadsImg,
  },
  {
    id: 'contract-manufacturing',
    title: 'Turnkey Contract Manufacturing',
    category: 'specialized',
    shortDesc: 'Complete end-to-end manufacturing management from raw material sourcing to final dispatch.',
    fullDesc: 'Full contract manufacturing partner for global OEMs and Indian EPC majors. We manage material procurement, cutting, forming, machining, welding, surface finishing, painting, testing, and packaging under one umbrella.',
    iconName: 'Briefcase',
    keyFeatures: ['Single-Point Responsibility', 'Dedicated Quality Engineers', 'Paint & Surface Coating Options', 'Export Worthy Wooden Packing'],
    capacityOrSpecs: 'Turnkey project execution capability',
    commonApplications: ['OEM Equipment Sub-Assemblies', 'Skid Mounted Units', 'Filtration Skid Units', 'Pipeline Spool Modules'],
    imageUrl: processColumnVesselsImg,
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'proj-reliance-pressure-vessel',
    name: 'ASME Grade Heavy Pressure Vessel',
    category: 'Pressure Vessels',
    categorySlug: 'vessels',
    description: 'Engineering, shell rolling, submerged arc welding, and hydrostatic testing of heavy-duty orange epoxy coated process pressure vessel equipped with safety ladder, process nozzles, and top access manway.',
    engineeringHighlights: [
      'SA 516 Grade 70 Boiler Quality Steel Construction',
      'Shell Thickness 24mm with 100% Radiography Testing (RT)',
      'Hydro-tested at 1.5x design pressure with TUV Third Party Clearance',
      'High Durability Orange Epoxy Corrosion Resistant Finish',
    ],
    servicesUsed: ['Pressure Vessel Fabrication', 'Submerged Arc Welding', 'NDT Inspection', 'Hydro Testing'],
    mainImageUrl: boilerVesselCraneImg,
    additionalImages: [
      foilWrappedVesselImg,
      orangePressureVesselImg,
      pressureVesselImg,
      vtlFlangeInspectionImg,
    ],
    materialsUsed: 'SA 516 Gr 70 Steel Plates & SS 316 Nozzles',
  },
  {
    id: 'proj-industrial-boilers',
    name: 'High Pressure Industrial Boiler Shell & Heat Exchanger',
    category: 'Heat Exchangers & Boilers',
    categorySlug: 'boilers',
    description: 'Heavy cylindrical pressure vessel and boiler shell fabrication featuring bolted flange end covers, internal baffle tubes, and overhead crane handling setup.',
    engineeringHighlights: [
      'Full Penetration GTAW + SMAW Welding Processes',
      'Heavy Tube Sheet & Flange Bolted Joint Assembly',
      'Thermal Stress Relieved Post-Weld Heat Treatment (PWHT)',
      '100% Ultrasonic & Magnetic Particle Defect Checks',
    ],
    servicesUsed: ['Boiler & Heat Exchanger Fabrication', 'Heavy Crane Handling', 'NDT Testing', 'Flange Bolting'],
    mainImageUrl: boilerVesselCraneImg,
    additionalImages: [
      orangePressureVesselImg,
    ],
    materialsUsed: 'ASTM A106 Gr B Seamless Tubes & Heavy Flanges',
  },
  {
    id: 'proj-wpl-base-frame',
    name: 'Heavy Equipment Base Frame & Gabled Structural Skid',
    category: 'Heavy Structural Fabrication',
    categorySlug: 'fabrication',
    description: 'Heavy structural steel base frame and gabled skid superstructure engineered for high-vibration rotating equipment, ash handling, and water treatment pump skids.',
    engineeringHighlights: [
      'Heavy ISMB and ISMC Structural Beam Construction',
      'Precision Plano Miller Machined Equipment Mounting Pads',
      'Gabled Roof Superstructure Frame Alignment',
      'Zinc Phosphate Corrosion Primer & Anti-Vibration Reinforcement',
    ],
    servicesUsed: ['Heavy Fabrication', 'Plano Miller Machining', 'Base Frame Assembly', 'Shot Blasting'],
    mainImageUrl: wplSteelBaseFrameImg,
    additionalImages: [
      stackedBoxStiffenersImg,
    ],
    materialsUsed: 'IS 2062 Grade E250 Steel Channels, Beams & Plates',
  },
  {
    id: 'proj-neck-ms-flange-boring',
    name: 'Heavy Neck MS Flange Boring & Precision Machining',
    category: 'Heavy Machining',
    categorySlug: 'machining',
    description: 'Heavy neck MS flange turning, facing, and concentric internal bore machining on large horizontal lathe machine, certified with +/- 0.01mm digital caliper tolerances.',
    engineeringHighlights: [
      'Digital Caliper Inner Bore Inspection (50.13mm & 242.82mm)',
      'Concentric Neck Weld Prep Edge Geometry',
      'High Surface Finish Spiral Facing for Leak-proof Gasket Fit',
      'Dynamic Balancing & CMM Dimensional Audit',
    ],
    servicesUsed: ['VTL & Heavy Lathe Machining', 'Neck MS Flange Boring', 'Precision Facing', 'Digital Quality Audit'],
    mainImageUrl: vtlFlangeInspectionImg,
    additionalImages: [
      heavyMachiningImg,
    ],
    materialsUsed: 'IS 2062 Forged MS Flanges & Carbon Steel Pipe',
  },
  {
    id: 'proj-zinc-pipes-supply',
    name: 'Zinc Pipes Batch Supply & Custom Shaft Fabrication',
    category: 'Material Supply & Machining',
    categorySlug: 'supply',
    description: 'Bulk supply and truck dispatch of zinc-coated / protective capped industrial steel pipes and CNC turned SS 316L center poles for energetics and metering installations.',
    engineeringHighlights: [
      'Precision Cut-to-Length Zinc Protective Steel Pipes',
      'CNC Turned SS 316L High-Accuracy Center Poles',
      'Corrosion Passivation Salt-Spray Certified',
      'Batch Truck Logistics with Mill Test Certificates (MTC)',
    ],
    servicesUsed: ['Zinc Pipe Supply', 'SS Material Supply', 'CNC Machining', 'Logistics Batch Supply'],
    mainImageUrl: zincPipesSupplyImg,
    additionalImages: [
      stackedBoxStiffenersImg,
    ],
    materialsUsed: 'Zinc Galvanized Steel Pipes & SS 316L Round Bars',
  },
  {
    id: 'proj-sewer-tanks-equipment',
    name: 'Twin Industrial Sewer Storage & Effluent Tanks',
    category: 'Industrial Equipment',
    categorySlug: 'vessels',
    description: 'Large capacity industrial sewer and sludge treatment storage vessels with internal baffles, top manhole covers, safety ladders, and protective epoxy orange finish.',
    engineeringHighlights: [
      'Large Diameter Heavy Plate Rolling & Sub-Arc Welding',
      'Heavy Internal Baffle Rib Reinforcement for Sludge Load',
      'Bituminous Internal & Dual Epoxy External Coating',
      'Integrated Crane Lifting Lugs & Ground Saddles',
    ],
    servicesUsed: ['Industrial Equipment Manufacturing', 'Plate Rolling', 'Heavy Welding', 'Surface Treatment'],
    mainImageUrl: sewerStorageTanksImg,
    additionalImages: [
      orangePressureVesselImg,
    ],
    materialsUsed: 'Heavy Carbon Steel IS 2062 Plates',
  },
  {
    id: 'proj-raw-steel-trading-logistics',
    name: 'MS & SS Raw Material Trading & Transport Logistics',
    category: 'Industrial Trading',
    categorySlug: 'supply',
    description: 'Bulk raw steel trading and crane-assisted truck dispatch of MS I-beams, channels, angles, heavy plates, and SS seamless pipes with full MTC certification.',
    engineeringHighlights: [
      'In-house Steel Trading Terminal in Ghaziabad',
      'Heavy Crane Loading on Dedicated Transport Trailers',
      'Mill Test Certificates (MTC) Guaranteeing Chemical & Tensile Specs',
      'Immediate Dispatch for Power, Plant, and Civil Projects',
    ],
    servicesUsed: ['Raw Steel Stockist', 'Material Logistics', 'Custom Length Cutting', 'Quality Traceability'],
    mainImageUrl: truckCarryingLoadsImg,
    additionalImages: [
      warehouseTradingCraneImg,
      zincPipesSupplyImg,
    ],
    materialsUsed: 'IS 2062, SA 516 Gr 70, SS 304 / SS 316 Steel Stock',
  }
];

export const CLIENTS: Client[] = [
  {
    id: 'client-red-energy',
    name: 'Red Energy Pvt Ltd',
    groupNote: 'Care of Reliance Group Projects',
    industry: 'Energy, Oil & Gas Utilities',
    location: 'India',
    workDone: 'Heavy pressure vessels, water bath heater assemblies, and high-pressure piping spools delivered with third-party quality clearances.',
  },
  {
    id: 'client-autometer',
    name: 'Autometer Energetics Ltd',
    industry: 'Energetics, Defense & Metering Systems',
    location: 'Noida / NCR, India',
    workDone: 'SS 316 center poles, precision CNC turned components, and zinc pipe supply jobs with tight tolerances.',
  },
  {
    id: 'client-multitax',
    name: 'Multitax Filters Pvt Ltd',
    industry: 'Industrial Filtration & Process Equipment',
    location: 'India',
    workDone: 'Moisture pressure vessels, filter housing plates, and heavy CNC/VMC machined manifold bodies.',
  },
  {
    id: 'client-macawber',
    name: 'Macawber Beekay Pvt Ltd',
    industry: 'Ash Handling & Pneumatic Conveying Systems',
    location: 'Noida / Pan-India',
    workDone: 'Large CI casting VTL machining up to 3.2 meters, heavy boring, and custom trail welded piping assemblies.',
  },
  {
    id: 'client-salasar',
    name: 'Salasar Techno Engineering Pvt Ltd',
    industry: 'EPC Power Infrastructure & Galvanized Structures',
    location: 'UP / Delhi NCR',
    workDone: 'High-pressure gas pipeline spools, MS raw material supply, heavy structural skid frame fabrication.',
  },
  {
    id: 'client-microfiltration',
    name: 'Micro Filtration Technologic Pvt Ltd',
    industry: 'Process Filtration & Membrane Equipment',
    location: 'India',
    workDone: 'Precision stainless steel manifolds, pressure filter vessels, and sub-contract machining job work.',
  },
  {
    id: 'client-goodluck',
    name: 'Good Luck Engineering Pvt Ltd',
    industry: 'Heavy Industrial Steel Engineering',
    location: 'Ghaziabad / Delhi NCR',
    workDone: 'Trail RH Welded Assy , heavy plate rolling, MS & SS material supply, and custom plano miller jobs.',
  },
  {
    id: 'client-wpl',
    name: 'WPL Pvt Ltd',
    industry: 'Water Treatment & Process Engineering',
    location: 'India',
    workDone: 'WPL base frame assemblies, heavy structural skid channels, and precision lathe turned shaft components.',
  },
];

export const ORIGINAL_GALLERY_PHOTOS = [
  { id: 'photo-1', url: gallery01 },
  { id: 'photo-2', url: gallery02 },
  { id: 'photo-3', url: gallery03 },
  { id: 'photo-4', url: gallery04 },
  { id: 'photo-5', url: gallery05 },
  { id: 'photo-6', url: gallery06 },
  { id: 'photo-7', url: gallery07 },
  { id: 'photo-8', url: gallery08 },
  { id: 'photo-9', url: gallery09 },
  { id: 'photo-10', url: gallery10 },
  { id: 'photo-11', url: gallery11 },
  { id: 'photo-12', url: gallery12 },
  { id: 'photo-13', url: gallery13 },
  { id: 'photo-14', url: gallery14 },
  { id: 'photo-15', url: gallery15 },
  { id: 'photo-16', url: gallery16 },
  { id: 'photo-17', url: gallery17 },
  { id: 'photo-18', url: gallery18 },
  { id: 'photo-19', url: gallery19 },
  { id: 'photo-20', url: gallery20 },
  { id: 'photo-21', url: gallery21 },
  { id: 'photo-22', url: gallery22 },
  { id: 'photo-23', url: gallery23 },
  { id: 'photo-24', url: gallery24 },
  { id: 'photo-25', url: gallery25 },
  { id: 'photo-26', url: gallery26 },
  { id: 'photo-27', url: gallery27 },
  { id: 'photo-28', url: gallery28 },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Precision Digital Caliper Quality Check (+/- 0.01mm)',
    category: 'Quality Control',
    imageUrl: vtlFlangeInspectionImg,
    description: 'Machinist using digital vernier caliper to measure inner bore (50.13mm / 242.82mm) and groove depth on turned metallic component on heavy lathe.',
    specs: 'Digital Caliper Certified (+/- 0.01mm Tolerance)',
  },
  {
    id: 'gal-2',
    title: 'ASME Pressure Vessel for Reliance Industries',
    category: 'Pressure Vessels',
    imageUrl: orangePressureVesselImg,
    description: 'Heavy orange epoxy-coated process pressure vessel built for Reliance project, equipped with top manhole cover, safety ladder, and process nozzles.',
    specs: 'Hydro-tested at 1.5x design pressure',
  },
  {
    id: 'gal-3',
    title: 'WPL Equipment Base Frame & Gabled Skid Fabrication',
    category: 'Fabrication',
    imageUrl: wplSteelBaseFrameImg,
    description: 'Heavy welded steel base frame with gabled top superstructure, stiffened gussets, and anchor pads for WPL equipment skids.',
    specs: 'Heavy Structural ISMB & ISMC Construction',
  },
  {
    id: 'gal-4',
    title: 'High Pressure Industrial Boiler Shell Crane Handling',
    category: 'Boilers',
    imageUrl: boilerVesselCraneImg,
    description: 'Heavy cylindrical pressure vessel and boiler shell with bolted end flanges hoisted by 20-ton shop overhead bridge crane.',
    specs: '20-Ton Overhead Crane Handled Vessel',
  },
  {
    id: 'gal-5',
    title: 'Zinc Pipes Batch Truck Dispatch for Autometer Energetics',
    category: 'Material Supply',
    imageUrl: zincPipesSupplyImg,
    description: 'Flatbed transport truck loaded with red-capped zinc / protective coated steel pipes ready for dispatch to client plant.',
    specs: 'Batch Supply with Mill Test Certificates (MTC)',
  },
  {
    id: 'gal-6',
    title: 'Heavy Neck MS Flange Boring & Lathe Turning',
    category: 'Machining',
    imageUrl: vtlFlangeInspectionImg,
    description: 'Precision turning and facing of thick neck MS flange welded to large carbon steel pipe on heavy industrial lathe.',
    specs: 'Precision Facing & Internal Boring',
  },
  {
    id: 'gal-7',
    title: 'Industrial Sewer Storage & Sludge Treatment Vessels',
    category: 'Pressure Vessels',
    imageUrl: sewerStorageTanksImg,
    description: 'Twin bright orange industrial sewer storage vessels equipped with internal baffles, top manways, and mounting saddles.',
    specs: 'Heavy Plate Rolled & Bituminous Coated',
  },
  {
    id: 'gal-8',
    title: 'SS Pressure Vessel Dished Head Inspection (Amrish Tyagi)',
    category: 'Quality Control',
    imageUrl: amrishSsDishedHeadImg,
    description: 'Mr. Amrish Tyagi conducting hands-on quality check of a mirror-finished stainless steel pressure vessel dished end head.',
    specs: 'Direct Leadership Quality Oversight',
  },
  {
    id: 'gal-9',
    title: 'MS & SS Raw Steel Logistics & Truck Crane Loading',
    category: 'Material Supply',
    imageUrl: truckCarryingLoadsImg,
    description: 'Mobile hydraulic crane loading structural steel I-beams, C-channels, and heavy plates onto transport trailer.',
    specs: 'IS 2062 & SA 516 Stockist Logistics',
  },
  {
    id: 'gal-10',
    title: 'Plano Miller & Heavy Horizontal Boring Machine Setup',
    category: 'Machining',
    imageUrl: heavyMachiningImg,
    description: 'Long steel pipe with heavy end flanges mounted on large green horizontal boring lathe for concentric end facing.',
    specs: '6-Meter Bed Capacity Setup',
  },
  {
    id: 'gal-11',
    title: 'Specialized Foil-Wrapped Process Column Vessels',
    category: 'Specialized Equipment',
    imageUrl: processColumnVesselsImg,
    description: 'High-aspect ratio chemical process column tanks wrapped in protective foil with precision-welded nozzles.',
    specs: 'Custom Process Equipment',
  },
  {
    id: 'gal-12',
    title: 'Precision Turned SS Flange Plate with Pillars & Stiffeners',
    category: 'Machining',
    imageUrl: turnedSsDiscPillarsImg,
    description: 'Precision CNC turned stainless steel circular discs with mounting pillars and heavy box stiffeners for industrial presses.',
    specs: 'Precision Turned & Rib Welded',
  },
  {
    id: 'gal-13',
    title: 'Stacked Structural Steel Box Frames & Stiffener Skids',
    category: 'Fabrication',
    imageUrl: stackedBoxStiffenersImg,
    description: 'Neatly stacked welded heavy steel box frames and structural channels engineered for high load bearing machine bases.',
    specs: 'Rigid Structural Weldments',
  },
  {
    id: 'gal-14',
    title: 'Indoor Steel Yard & Overhead Crane Dispatch',
    category: 'Material Supply',
    imageUrl: warehouseTradingCraneImg,
    description: 'EOT overhead crane handling structural C-channels and steel sections onto transport truck inside Ghaziabad steel stockyard.',
    specs: 'EOT Crane Bay & Steel Trading Dispatch',
  }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Requirement & Drawing Review',
    desc: 'In-depth consultation with client engineers to analyze technical specs, CAD drawings, material grade requirements, and design standards (ASME, IS, IBR).',
    iconName: 'FileText',
  },
  {
    step: '02',
    title: 'Engineering & Feasibility Analysis',
    desc: 'Machining feasibility, weldment planning, stress calculation, material bill of quantity (BOQ), and selection of appropriate VTL, CNC, or fabrication machinery.',
    iconName: 'Cpu',
  },
  {
    step: '03',
    title: 'Competitive Commercial Quotation',
    desc: 'Transparent pricing with detailed stage-wise cost breakdown, material mill test certifications (MTC) commitment, and firm delivery timeline guarantee.',
    iconName: 'Calculator',
  },
  {
    step: '04',
    title: 'Precision Manufacturing & Assembly',
    desc: 'Execution under senior engineering supervision — rolling, sub-arc welding, VTL turning, VMC/CNC milling, horizontal boring, and skilled fitment.',
    iconName: 'Settings',
  },
  {
    step: '05',
    title: 'Rigorous Quality & NDT Inspection',
    desc: 'Comprehensive Quality Assurance: 100% Radiography, Ultrasonic Testing, Magnetic Particle, Dye Penetrant, CMM checks, and Hydrostatic testing up to design pressure.',
    iconName: 'CheckCircle2',
  },
  {
    step: '06',
    title: 'Protective Finish & On-Time Delivery',
    desc: 'Surface preparation (shot blasting, epoxy/polyurethane painting), protective wooden crating, and safe transport directly to plant site or client facility.',
    iconName: 'Truck',
  },
];

export const WHY_CHOOSE_US = [
  {
    title: '10+ Years Industry Expertise',
    desc: 'Founded on over a decade of hands-on industrial engineering and fabrication experience across India’s leading energy and infrastructure sectors.',
    iconName: 'Award',
  },
  {
    title: 'Experienced Leadership & Management',
    desc: 'Owned by Asha Tyagi and managed and run by Amrish Tyagi, who brings 10+ years of solid industry experience in raw material trading and heavy steel fabrication.',
    iconName: 'Users',
  },
  {
    title: 'Large-Scale VTL & Machining Capability',
    desc: 'Specialized machinery including Vertical Turning Lathes (1.5m to 5.0m swing), Plano Millers, VMC, CNC centers, and heavy horizontal boring setups.',
    iconName: 'Layers',
  },
  {
    title: 'Zero-Defect Quality Assurance',
    desc: 'In-house and third-party NDT testing (Radiography, Ultrasonic, Hydro pressure testing) with complete material traceability mill certificates.',
    iconName: 'ShieldCheck',
  },
  {
    title: 'Direct Raw Material Trading Strength',
    desc: 'In-house MS and SS raw material stockist capability ensures faster turnaround, genuine material, and unbeatable competitive pricing.',
    iconName: 'TrendingUp',
  },
  {
    title: 'Trusted by Corporate Industry Leaders',
    desc: 'Proven track record serving top companies including Red Energy (Reliance care), Autometer, Salasar Techno, Macawber Beekay, and WPL.',
    iconName: 'Building2',
  },
];
