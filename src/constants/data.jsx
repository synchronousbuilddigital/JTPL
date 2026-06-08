import React from 'react';

// Import newly generated photographic assets
import heroTowelsImg from '../assets/hero_towels.png';
import heroSpinning from '../assets/hero_spinning.png';
import heroStitching from '../assets/hero_stitching.png';
import nSeriesMain from '../assets/n_series_main.png';
import weavingLoomsImg from '../assets/weaving_looms.png';
import kitchenLinenImg from '../assets/kitchen_linen.png';
import duvetCoversCat from '../assets/duvet_covers_unblurred.png';
import salonTowelsCat from '../assets/salon_towels_unblurred.png';
import safetyWearCat from '../assets/safety_wear_cat.png';
import thermalBlanketsCat from '../assets/thermal_blanket_white.png';
import bathBlanketsCat from '../assets/bath_blankets_cat.png';
import qualityLabImg from '../assets/quality_lab.png';

// Import newly generated actual images
import wetSoftFlowDyeingImg from '../assets/wet_soft_flow_dyeing_actual.png';
import mfgAutoSpreadingImg from '../assets/mfg_auto_spreading_actual.png';
import weavingDirectWarpingImg from '../assets/weaving_direct_warping_actual.png';
import wovenBagEarth from '../assets/woven_bag_earth.png';
import bathrobeHanging from '../assets/bathrobe_hanging.png';

// B2B Collections Coverflow Database
export const COLLECTIONS_DATA = [
  { title: 'N-Series Towels', subtitle: 'Institutional range', image: nSeriesMain, desc: 'Ultra-absorbent combed cotton towels with reinforced double-stitched borders for global hospitality clients.' },
  { title: 'P-Series Towels', subtitle: 'Premium retail range', image: heroTowelsImg, desc: 'Combed ring-spun towels with low-profile dobby borders designed for high-end retail brands.' },
  { title: 'Duvet Covers', subtitle: 'Bedroom linen', image: duvetCoversCat, desc: 'Fine-weave cotton sateen duvet casings featuring elegant invisible zippers and secure tie-downs.' },
  { title: 'Kitchen Linen', subtitle: 'Pot holders & more', image: kitchenLinenImg, desc: 'Lint-free waffle weave tea towels, heavy-duty oven mitts, and double-layered chef aprons.' },
  { title: 'Salon Towels', subtitle: 'Professional grade', image: salonTowelsCat, desc: 'Vats-dyed salon and barbershop linens, chemically resistant to peroxides and hair bleach.' },
  { title: 'Safety Wear', subtitle: 'PPE kits', image: safetyWearCat, desc: 'High-barrier disposable isolation gowns and certified medical-grade protective face masks.' },
  { title: 'Thermal Wear', subtitle: 'Leno Cellular Weave', image: thermalBlanketsCat, desc: 'Classic cellular blankets constructed in breathable leno structures, providing temperature self-regulation.' },
  { title: 'Bath Blankets', subtitle: 'Comfort range', image: bathBlanketsCat, desc: 'Heavily napped hospital flannel wraps designed to provide instant patient warmth and maximum comfort.' },
  { title: 'Bath Robes', subtitle: 'Hotel & spa range', image: bathrobeHanging, desc: 'Luxury ring-spun cotton terry and velour robes featuring double-belt loops, double-needle stitching, and custom sizing.' },
  { title: 'Woven Bags', subtitle: 'Eco-friendly totes', image: wovenBagEarth, desc: 'Premium organic cotton canvas and jute shopping bags with high-tensile handles and screen-printed motifs.' }
];

// Operational Facility data
export const FACILITY_STEPS = [
  {
    title: 'Spinning Mill',
    short: '01 SPINNING',
    location: 'Perungudi, Madurai',
    coordinates: '9.9176° N, 78.1560° E',
    description: 'Our spinning division converts raw organic cotton bales into high-grade combed, carded, and open-end yarns ranging from 10s to 40s counts. Utilizing Swiss Rieter blowroom and combing machinery, we ensure thread strength and uniformity from day one.',
    specs: {
      'Active Spindles': '35,000+ Units',
      'Monthly Output': '600 Tons',
      'Technology': 'Swiss Rieter Blowroom & Combers',
      'Yarn Variety': '10s to 40s Combed & Carded'
    },
    metrics: [
      { label: 'Spindle Utilization', value: 96 },
      { label: 'Thread Strength Uniformity', value: 98 }
    ],
    highlights: [
      'GOTS Organic Cotton Yarn Certified',
      'Laser-controlled hairiness and yarn count profiling',
      'Swiss Rieter automated blowroom feeding lines'
    ],
    image: weavingLoomsImg
  },
  {
    title: 'Advanced Weaving',
    short: '02 WEAVING',
    location: 'Sivagangai, Tamil Nadu',
    coordinates: '9.8433° N, 78.4809° E',
    description: 'Our weaving division operates state-of-the-art winding, direct warping, sectional warping, and sizing lines. These preparation stages ensure warp beams are created with uniform tension and protective coating, setting the foundation for zero-defect, high-speed weaving of our premium Terry collections.',
    specs: {
      'Winding Fleet': 'Schlafhorst Autoconer lines',
      'Warping speed': 'Up to 1,000 meters per minute',
      'Sizing Tech': 'Multi-cylinder sizing range',
      'Processing speed': 'Up to 150 meters per minute'
    },
    metrics: [
      { label: 'Warp Tension Uniformity', value: 98 },
      { label: 'Sizing Yarn Protection', value: 96 }
    ],
    highlights: [
      'Laser-guided sectional warping drum precision',
      'Fully automated computerized sizing kitchen',
      'Knot-free air-spliced yarn package winding'
    ],
    image: weavingDirectWarpingImg
  },
  {
    title: 'Wet Processing',
    short: '03 PROCESSING',
    location: 'Kappalur, Madurai',
    coordinates: '9.8732° N, 78.0754° E',
    description: 'Our wet processing division operates computerized soft-flow and jigger dyeing machines, open-width stenter frames, continuous dyeing ranges, high-capacity tumble dryers, and precise mechanical raising units to deliver vibrant, soft, and stable fabrics.',
    specs: {
      'Dyeing Tech': 'Soft-Flow & Jigger Systems',
      'Stretching Tech': '8-Chamber Open Stenter frames',
      'Drying Tech': 'Steam-heated industrial tumble dryers',
      'Napping Tech': 'Precision wire raising cylinders'
    },
    metrics: [
      { label: 'Color Fastness Index', value: 98 },
      { label: 'Weft Straightness Accuracy', value: 99 }
    ],
    highlights: [
      'GOTS and OEKO-TEX Standard 100 non-toxic dyes',
      'Zero Liquid Discharge biological ETP water recycling',
      'Mechanical raising pile-fluffiness enhancement control'
    ],
    image: wetSoftFlowDyeingImg
  },
  {
    title: 'Manufacturing',
    short: '04 MANUFACTURING',
    location: 'Madurai Industrial Zone',
    coordinates: '9.9392° N, 78.1218° E',
    description: 'Our manufacturing division coordinates high-speed fabric spreading, computerized cutting, automated packaging, computerized stitching, manual sewing machines, and industrial overlock units to produce flawless finished linens.',
    specs: {
      'Cutting Tech': 'Computerized CNC Cutting Heads',
      'Stitching Tech': 'Automated Hemming & Side Seamers',
      'Overlock Speed': 'Up to 7,500 stitches per minute',
      'Packing Line': 'Automatic folding and poly-bagging'
    },
    metrics: [
      { label: 'Stitch Precision Rating', value: 99 },
      { label: 'Automation Efficiency', value: 95 }
    ],
    highlights: [
      'Automated high-speed spreading tension control',
      'Millimeter-precision CAD cutting layout marker efficiency',
      'Secure multi-thread overlock fray protection'
    ],
    image: mfgAutoSpreadingImg
  }
];

// Simulated real-time industrial telemetry logs
export const DIVISION_LOGS = {
  0: [
    { time: '09:24:12', level: 'SYSTEM', text: '35,000 Swiss Rieter spindles active at 14,200 RPM.' },
    { time: '09:24:15', level: 'SENSOR', text: 'Cotton combing uniformity index verified: 98.4% combed.' },
    { time: '09:24:20', level: 'POWER', text: 'Swiss Rieter mill self-powered by Madurai Solar Field.' }
  ],
  1: [
    { time: '10:14:02', level: 'SYSTEM', text: 'Schlafhorst winding lines active at 1,500 m/min.' },
    { time: '10:14:08', level: 'SENSOR', text: 'Direct warping electronic tension sensors active: 100% stable.' },
    { time: '10:14:15', level: 'TEMP', text: 'Multi-cylinder steam sizing range: 130°C nominal.' }
  ],
  2: [
    { time: '11:02:15', level: 'SYSTEM', text: 'ETP recycling filters operating at 98.2% throughput.' },
    { time: '11:02:22', level: 'COLOR', text: 'Computerized dosing system completed shade verification.' },
    { time: '11:02:30', level: 'ENV', text: 'ZLD chemical recovery logs submitted to central panel.' }
  ],
  3: [
    { time: '11:45:01', level: 'SYSTEM', text: 'Auto cutting CNC tables operating nominal at AQL 1.5.' },
    { time: '11:45:10', level: 'SENSOR', text: 'Overlock machine sewing speed stabilized at 7,500 SPM.' },
    { time: '11:45:18', level: 'PACK', text: 'Automated packing and barcode print line online.' }
  ],
};

export const HERO_TABS = [
  {
    label: 'Raw Spinning',
    tag: '01 / RAW YARN',
    title: 'Textile quality spun from the source.',
    desc: 'Transforming premium Indian cotton into high-grade combed yarns at our Perungudi facility, equipped with 35,000 Swiss Rieter spindles.',
    metric: { value: '14,200 RPM', label: 'Average Spindle Speed' },
    image: heroSpinning,
    badgeText: '35K SPINDLES'
  },
  {
    label: 'Kinetic Warping',
    tag: '02 / WEAVING PREP',
    title: 'Warp structure prepared for the loom.',
    desc: 'Modern Schlafhorst winding and laser-guided sectional warping drum systems creating perfectly tensioned warp beams in Sivagangai.',
    metric: { value: '1,000 m/min', label: 'Direct Warping Speed' },
    image: weavingDirectWarpingImg,
    badgeText: 'LASER-GUIDED'
  },
  {
    label: 'Stitching Detail',
    tag: '03 / MASTER STITCH',
    title: 'Finished for the global market.',
    desc: 'Twelve automated hemming lines and manual inspection teams delivering double-needle secured selvedge textiles to marine export standards.',
    metric: { value: '12 STITCH-LINES', label: 'Fabrication Throughput' },
    image: heroStitching,
    badgeText: 'DOUBLE-NEEDLE'
  }
];

export const ESG_INITIATIVES = [
  {
    id: 'rooftop-solar',
    title: 'Rooftop Solar',
    subtitle: 'Renewable Power',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
    description: 'We have installed extensive rooftop solar panels across our Madurai and Sivagangai factories, generating over 1.2 Megawatts of clean energy to self-power our spinning and weaving lines.',
    metric: '1.2 MW clean energy capacity',
    label: 'Rooftop Solar'
  },
  {
    id: 'transport',
    title: 'Green Transport',
    subtitle: 'Low-Emission Logistics',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    description: 'Transitioning our material transport fleets to low-emission vehicles and implementing intelligent route optimizations to minimize CO2 emissions across our local Tamil Nadu supply chain.',
    metric: '35% reduction in fleet emissions',
    label: 'Green Logistics'
  },
  {
    id: 'water',
    title: 'Water Stewardship',
    subtitle: 'Zero Liquid Discharge',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
      </svg>
    ),
    description: 'Our biological Effluent Treatment Plant (ETP) operates under strict Zero Liquid Discharge (ZLD) audits, successfully recycling 98% of bleach and dye water back into production.',
    metric: '98% of process water recycled',
    label: 'Water Stewardship'
  },
  {
    id: 'ground-solar',
    title: 'Ground Solar Fields',
    subtitle: 'Grid Independence',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
      </svg>
    ),
    description: 'Securing full grid independence and ensuring carbon-neutral manufacturing by partnering in off-site ground-mounted solar fields spanning several acres in Tamil Nadu.',
    metric: '100% clean grid offset potential',
    label: 'Ground Solar Fields'
  },
  {
    id: 'ethical',
    title: 'Ethical Stewardship',
    subtitle: 'Fair Trade & GOTS',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    description: 'We strictly adhere to fair trade principles, securing complete fair-wage compliance, safe ergonomic workspaces, and standard organic sourcing under international GOTS certifications.',
    metric: '100% Fair-wage compliant audit',
    label: 'Ethical Stewardship'
  },
  {
    id: 'healthcare',
    title: 'Healthcare Support',
    subtitle: 'Weaver Welfare Aid',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    description: 'Providing our workforce and their families with comprehensive primary medical checkups, permanent dispensary access, and direct local educational scholarships for children.',
    metric: '1,200+ weaver families supported',
    label: 'Healthcare Support'
  }
];
