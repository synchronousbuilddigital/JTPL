import React from 'react';

// Import newly generated photographic assets
import heroTowelsImg from '../assets/hero_towels.png';
import weavingLoomsImg from '../assets/weaving_looms.png';
import kitchenLinenImg from '../assets/kitchen_linen.png';
import duvetCoversCat from '../assets/duvet_covers_cat.png';
import salonTowelsCat from '../assets/salon_towels_cat.png';
import safetyWearCat from '../assets/safety_wear_cat.png';
import thermalBlanketsCat from '../assets/thermal_blankets_cat.png';
import bathBlanketsCat from '../assets/bath_blankets_cat.png';
import qualityLabImg from '../assets/quality_lab.png';

// B2B Collections Coverflow Database
export const COLLECTIONS_DATA = [
  { title: 'Terry Towels', subtitle: 'R • P • N Series', image: heroTowelsImg, desc: 'Ultra-absorbent combed cotton towels with reinforced double-stitched borders for global B2B clients.' },
  { title: 'Duvet Covers', subtitle: 'Bedroom linen', image: duvetCoversCat, desc: 'Fine-weave cotton sateen duvet casings featuring elegant invisible zippers and secure tie-downs.' },
  { title: 'Kitchen Linen', subtitle: 'Pot holders & more', image: kitchenLinenImg, desc: 'Lint-free waffle weave tea towels, heavy-duty oven mitts, and double-layered chef aprons.' },
  { title: 'Salon Towels', subtitle: 'Professional grade', image: salonTowelsCat, desc: 'Vats-dyed salon and barbershop linens, chemically resistant to peroxides and hair bleach.' },
  { title: 'Safety Wear', subtitle: 'PPE kits', image: safetyWearCat, desc: 'Rugged, flame-retardant industrial aprons and certified high-visibility utility coveralls.' },
  { title: 'Thermal Wear', subtitle: 'Leno Cellular Weave', image: thermalBlanketsCat, desc: 'Classic cellular blankets constructed in breathable leno structures, providing temperature self-regulation.' },
  { title: 'Bath Blankets', subtitle: 'Comfort range', image: bathBlanketsCat, desc: 'Heavily napped hospital flannel wraps designed to provide instant patient warmth and maximum comfort.' }
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
    description: 'Our weaving plants feature high-speed, shuttleless Toyota Air-Jet looms and premium European Rapier looms. With computerized electronic jacquards and dobby attachments, we weave intricate borders, structural waffle patterns, and dense Terry piles with mathematical loop height accuracy.',
    specs: {
      'Loom Fleet': '120+ High-speed Looms',
      'Daily Capacity': '25,000 Meters',
      'Weaving Tech': 'Toyota Air-Jet & European Rapier',
      'Pattern Control': 'Electronic Jacquards & Waffle Dobby'
    },
    metrics: [
      { label: 'Loom Automation Index', value: 94 },
      { label: 'Weft Insertion Speed', value: 91 }
    ],
    highlights: [
      'High-density Terry weave loop height control',
      'Fully-automated electronic pattern dobby attachments',
      'Real-time structural warp defect laser scanner'
    ],
    image: weavingLoomsImg
  },
  {
    title: 'Wet Processing',
    short: '03 PROCESSING',
    location: 'Madurai Industrial Zone',
    coordinates: '9.9312° N, 78.1218° E',
    description: 'We run a fully automated continuous bleaching range and soft-flow dyeing plant using eco-friendly, low-liquor ratio machinery. The facility is anchored by a state-of-the-art biological Effluent Treatment Plant (ETP) featuring Zero Liquid Discharge (ZLD) to recycle 98% of process water.',
    specs: {
      'Processing Tech': 'Continuous Bleaching & Soft-flow Dyeing',
      'Daily Dye Weight': '15 Tons Capacity',
      'Water Recycling': 'Zero Liquid Discharge (ZLD) Plant',
      'Dye Compliance': 'Oeko-Tex Standard 100 & GOTS Approved'
    },
    metrics: [
      { label: 'Water Recovery Rate', value: 98 },
      { label: 'Color Fastness Index', value: 97 }
    ],
    highlights: [
      '98% of process water recycled back into operations',
      'Low-liquor ratio eco-efficient dye vessels',
      '100% biodegradable GOTS organic dye inputs'
    ],
    image: heroTowelsImg
  },
  {
    title: 'Precision Stitching',
    short: '04 STITCHING',
    location: 'Madurai Mill Complex',
    coordinates: '9.9254° N, 78.1402° E',
    description: 'Our modern fabrication floor is equipped with specialized automatic hem-stitching lines, fabric cutters, and heavy-duty sewing equipment. Each item undergoes rigorous manual checkups under high-intensity inspection tables, followed by metal-detector scanning.',
    specs: {
      'Stitching Lines': '12 Fully-Automated Hemming Lines',
      'Fabric Prep': 'Intelligent Laser Fabric Cutters',
      'Quality Control': 'High-Intensity Metal Detectors',
      'Export Packing': 'Compression Bales / Marine Containers'
    },
    metrics: [
      { label: 'Stitch Precision Index', value: 99 },
      { label: 'Defect Free Outflow', value: 100 }
    ],
    highlights: [
      '100% manual checkup under high-intensity inspection',
      'Specialized double-needle secure selvedge borders',
      'Automatic metal-particle detector scanner pass'
    ],
    image: kitchenLinenImg
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
    { time: '10:14:02', level: 'SYSTEM', text: '120 Toyota Air-Jet looms active at 850 picks per minute.' },
    { time: '10:14:05', level: 'SENSOR', text: 'Electronic jacquard pattern synchronization confirmed: 100% OK.' },
    { time: '10:14:11', level: 'SCAN', text: 'Structural Terry warp density scanners operating nominal.' }
  ],
  2: [
    { time: '11:05:44', level: 'SYSTEM', text: 'Zero Liquid Discharge water recovery pumps at max flow capacity.' },
    { time: '11:05:48', level: 'SENSOR', text: 'Continuous bleaching water recycling: 98% efficiency rate.' },
    { time: '11:05:52', level: 'AUDIT', text: 'Oeko-Tex Standard 100 chemical feed validation: COMPLIANT.' }
  ],
  3: [
    { time: '12:30:19', level: 'SYSTEM', text: '12 automated stitch-lines processing double-needle selvedge.' },
    { time: '12:30:24', level: 'SCAN', text: 'Metal particle detector scanner path validation: 100% SECURE.' },
    { time: '12:30:31', level: 'SHIPPING', text: 'Marine-grade container compression bale packaging completed.' }
  ]
};

export const HERO_TABS = [
  {
    label: 'Raw Spinning',
    tag: '01 / RAW YARN',
    title: 'Textile quality spun from the source.',
    desc: 'Transforming premium Indian cotton into high-grade combed yarns at our Perungudi facility, equipped with 35,000 Swiss Rieter spindles.',
    metric: { value: '14,200 RPM', label: 'Average Spindle Speed' },
    image: heroTowelsImg,
    badgeText: '35K SPINDLES'
  },
  {
    label: 'Kinetic Looms',
    tag: '02 / PRECISION WEAVE',
    title: 'Woven with absolute structure.',
    desc: '120 automatic Toyota Air-Jet looms weaving premium terry and leno cell structures with flawless density control in Sivagangai.',
    metric: { value: '850 PPM', label: 'Weft Insertion Rate' },
    image: weavingLoomsImg,
    badgeText: '120 AIR-JET LOOMS'
  },
  {
    label: 'Stitching Detail',
    tag: '03 / MASTER STITCH',
    title: 'Finished for the global market.',
    desc: 'Twelve automated hemming lines and manual inspection teams delivering double-needle secured selvedge textiles to marine export standards.',
    metric: { value: '12 STITCH-LINES', label: 'Fabrication Throughput' },
    image: kitchenLinenImg,
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
