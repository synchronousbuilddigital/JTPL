import React, { useState, useEffect } from 'react';
import { FACILITY_STEPS } from '../constants/data';

// Import images for fallback/display
import weavingLoomsImg from '../assets/weaving_looms.png';
import aboutWeavingImg from '../assets/about_weaving_detail.png';
import towelStackImg from '../assets/about_towel_stack.png';
import sewingStitchImg from '../assets/quality_sewing_stitch.png';

// Import actual spinning machinery photos
import spinningOeImg from '../assets/spinning_oe_actual.png';
import spinningRingspunImg from '../assets/spinning_ringspun_actual.png';
import spinningAutoconerImg from '../assets/spinning_autoconer_actual.png';

// Import actual weaving preparation process photos
import weavingWindingImg from '../assets/weaving_winding_actual.png';
import weavingDirectWarpingImg from '../assets/weaving_direct_warping_actual.png';
import weavingSectionalWarpingImg from '../assets/weaving_sectional_warping_actual.png';
import weavingSizingImg from '../assets/weaving_sizing_actual.png';

// Import actual wet processing process photos
import wetSoftFlowDyeingImg from '../assets/wet_soft_flow_dyeing_actual.png';
import wetJiggerDyeingImg from '../assets/wet_jigger_dyeing_actual.png';
import wetOpenStenterImg from '../assets/wet_open_stenter_actual.png';
import wetDyeingRangeImg from '../assets/wet_dyeing_range_actual.png';
import wetTumbleDryerImg from '../assets/wet_tumble_dryer_actual.png';
import wetRaisingImg from '../assets/wet_raising_actual.png';

// Import actual manufacturing process photos
import mfgAutoSpreadingImg from '../assets/mfg_auto_spreading_actual.png';
import mfgAutoCuttingImg from '../assets/mfg_auto_cutting_actual.png';
import mfgAutoPackingImg from '../assets/mfg_auto_packing_actual.png';
import mfgAutoStitchingImg from '../assets/mfg_auto_stitching_actual.png';
import mfgSewingMachineImg from '../assets/mfg_sewing_machine_actual.png';
import mfgOverlockMachineImg from '../assets/mfg_overlock_machine_actual.png';

import './FacilitiesPage.css';

const FacilitiesPage = ({
  activeFacilityIndex,
  setActiveFacilityIndex,
  setCurrentPage
}) => {
  // Overriding current facility data
  const currentFacility = FACILITY_STEPS[activeFacilityIndex];

  // Scroll reveal observer for row entries
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.15 }
    );
    const rows = document.querySelectorAll('.showroom-row');
    rows.forEach((row) => observer.observe(row));
    return () => {
      rows.forEach((row) => observer.unobserve(row));
    };
  }, [activeFacilityIndex]);

  // Get detailed sub-department content, images, specifications, and telemetry
  const getSubDepartments = (facilityIndex) => {
    if (facilityIndex === 0) {
      return [
        {
          id: 'ringspun',
          title: 'Ringspun Spinning Unit',
          image: spinningRingspunImg,
          desc: 'Ring spinning drafts, twists, and winds combed cotton fibers onto bobbins in a continuous process. This premium method creates high-tensile, exceptionally soft combed yarns. It forms the foundation for our luxury retail Terry collections, ensuring maximum thread integrity and loop height stability during high-speed weaving.',
          specs: {
            'Drafting Tech': 'Rieter D 50 twin-delivery draw frames',
            'Active Spindles': '24,000 active Ring Spindles',
            'Yarn Variety': '16s to 40s combed and carded count',
            'Spindle Speed': 'Up to 18,000 RPM continuous'
          },
          metrics: [
            { label: 'Spindle Efficiency', value: '96%' },
            { label: 'Twist Uniformity', value: '98%' },
            { label: 'Hairiness Index', value: 'Low' },
            { label: 'Raw Cotton Grade', value: 'GOTS Certified' }
          ]
        },
        {
          id: 'oe',
          title: 'Open-End (OE) Spinning Unit',
          image: spinningOeImg,
          desc: 'Open-End (Rotor) spinning bypasses the bobbin phase by directly transforming cotton sliver into finished yarn packages. This high-volume operation is ideal for producing highly absorbent, heavy-duty yarns for institutional towels. Schlafhorst Autocoro rotor frames maintain absolute weight uniformity across high volumes.',
          specs: {
            'Rotor Frames': 'Schlafhorst Autocoro 9 rotors',
            'Rotor Speed': 'Up to 130,000 RPM rotor speed',
            'Yarn Variety': '10s to 24s open-end yarn',
            'Production Rate': 'High-volume continuous output'
          },
          metrics: [
            { label: 'Rotor Capacity', value: '95%' },
            { label: 'Bulking Coefficient', value: '97%' },
            { label: 'Yarn Clearance', value: 'Laser Scan' },
            { label: 'Wear Resistance', value: 'Excellent' }
          ]
        },
        {
          id: 'autoconer',
          title: 'Autoconer Winding Section',
          image: spinningAutoconerImg,
          desc: 'Autoconer winding systems inspect the raw yarn, cut out thickness faults, and splice ends together pneumatically to form standardized, defect-free cones. Utilizing Loepfe digital clearers, the unit ensures perfect yarn feed for the looms, eliminating weft breaks during weaving.',
          specs: {
            'Winding Speed': 'Up to 1,500 meters per minute',
            'Splicing System': 'Pneumatic/Thermosplicers per spindle',
            'Yarn Clearing': 'Loepfe Yarn Master Zenit digital clearers',
            'Feed System': 'Link-to-winder direct bobbin bridge'
          },
          metrics: [
            { label: 'Splicing Integrity', value: '99%' },
            { label: 'Defect Detection', value: '99.5%' },
            { label: 'Winding Efficiency', value: '98%' },
            { label: 'Cone Weight', value: 'Standardized' }
          ]
        }
      ];
    } else if (facilityIndex === 1) {
      return [
        {
          id: 'winding',
          title: 'Precision Winding Unit',
          image: weavingWindingImg,
          desc: 'Our automatic winding system winds yarn packages onto standardized cones while checking for yarn defects. Air splicers pneumatically connect yarn ends to create knot-free packages for subsequent warp beam preparation.',
          specs: {
            'Winding Speed': 'Up to 1,500 meters per minute',
            'Splicing Tech': 'Pneumatic air splicing per spindle position',
            'Clearer Tech': 'Optical yarn quality clearer sensors',
            'Cone Capacity': '3.2 kg standard cone weight capacity'
          },
          metrics: [
            { label: 'Splicing Quality', value: '99%' },
            { label: 'Defect Separation', value: '99.5%' },
            { label: 'Winding Speed', value: '1,500 m/min' },
            { label: 'Yarn Clearer', value: 'Loepfe Zenit' }
          ]
        },
        {
          id: 'direct_warping',
          title: 'Direct Warping Division',
          image: weavingDirectWarpingImg,
          desc: 'Direct warping draws thousands of single-end yarns from a creel onto a single wide warp beam simultaneously. This process prepares the high-volume base warp yarns for plain Terry structures with perfectly uniform tension.',
          specs: {
            'Beaming Speed': 'Up to 1,000 meters per minute',
            'Creel Capacity': 'Up to 800 active yarn packages',
            'Tension Control': 'Electronic auto-adjusting tension sensors',
            'Beam Diameter': '1,000 mm flange diameter standard'
          },
          metrics: [
            { label: 'Warp Speed', value: '1,000 m/min' },
            { label: 'Tension Uniformity', value: '98.5%' },
            { label: 'Creel Size', value: '800 Spools' },
            { label: 'Sensor Alignment', value: 'Optimal' }
          ]
        },
        {
          id: 'sectional_warping',
          title: 'Sectional Warping Division',
          image: weavingSectionalWarpingImg,
          desc: 'Sectional warping winds warp yarn in successive narrow bands or sections onto a conical drum before transferring them to the loom beam. This precision method is ideal for custom jacquard towel borders, dyed yarns, and stripe collections.',
          specs: {
            'Warping Width': 'Up to 3,600 mm working width',
            'Drum Profile': 'High-precision conical drum geometry',
            'Section Control': 'Laser-guided section width positioning',
            'Beam Prep': 'Intermittent colored yarn styling'
          },
          metrics: [
            { label: 'Band Alignment', value: '100%' },
            { label: 'Density Uniformity', value: '99%' },
            { label: 'Colors Supported', value: 'Multi-Shade' },
            { label: 'Laser Guidance', value: 'Active' }
          ]
        },
        {
          id: 'sizing',
          title: 'Yarn Sizing & Protective Coating',
          image: weavingSizingImg,
          desc: 'Sizing coats warp yarns with protective starch size, enhancing tensile strength and reducing hairiness to survive the high-speed weft insertion. The sized warp is then dried on steam cylinders and wound onto the final loom beam.',
          specs: {
            'Sizing Recipe': 'Eco-friendly organic starch formulas',
            'Drying Cylinder': 'Multi-cylinder steam drying arrays',
            'Size Takeup': 'Computerized pickup percentage control',
            'Speed Rating': 'Up to 150 meters per minute'
          },
          metrics: [
            { label: 'Size Concentration', value: '98%' },
            { label: 'Elongation Index', value: '96%' },
            { label: 'Steam Temp', value: '130°C' },
            { label: 'Moisture Control', value: 'Residual' }
          ]
        }
      ];
    } else if (facilityIndex === 2) {
      return [
        {
          id: 'soft_flow_dyeing',
          title: 'Soft Flow Dyeing',
          image: wetSoftFlowDyeingImg,
          desc: 'Linens are dyed in soft-flow vessels under low liquor ratios. Using Oeko-Tex Standard 100 non-toxic organic dyestuffs, we achieve outstanding color depth while protecting the soft loop texture of premium combed cotton Terry fabrics.',
          specs: {
            'Vessel Capacity': '50kg to 1,200kg soft-flow dye jets',
            'Liquor Ratio': '1:5 eco-efficient liquor settings',
            'Dye Standard': 'Oeko-Tex Standard 100 & GOTS Approved',
            'Operating Temp': 'Up to 130°C pressurized control'
          },
          metrics: [
            { label: 'Color Fastness', value: 'Grade 4.5+' },
            { label: 'Shade Match Rate', value: '98.5%' },
            { label: 'Dye Cycle Time', value: 'Optimized' },
            { label: 'Liquor Ratio', value: 'Low' }
          ]
        },
        {
          id: 'jigger_dyeing',
          title: 'Jigger Dyeing Machine',
          image: wetJiggerDyeingImg,
          desc: 'Our modern jigger dyeing machines process open-width fabrics under constant tension. Ideal for woven cotton sheets and heavy-duty utility fabrics, this machine ensures uniform dye penetration across the entire roll width.',
          specs: {
            'Roller Width': 'Up to 2,200 mm working width',
            'Drive Tech': 'Frequency-controlled AC servo drives',
            'Liquor Control': 'Automatic liquor volume level sensors',
            'Fabric Speed': 'Up to 150 meters per minute'
          },
          metrics: [
            { label: 'Tension Control', value: 'Constant' },
            { label: 'Penetration Rate', value: '99%' },
            { label: 'Speed Control', value: 'Precise' },
            { label: 'Vat Efficiency', value: '95%' }
          ]
        },
        {
          id: 'open_stenter',
          title: 'Open Stenter Dyeing',
          image: wetOpenStenterImg,
          desc: 'Stenter frames dry, stretch, and heat-set open-width fabrics to their final dimensions. Overfeed controls and precision hot-air chambers guarantee fabric dimensional stability, straight weft alignment, and correct density.',
          specs: {
            'Heating Zones': '8 high-efficiency hot-air chambers',
            'Width Control': 'Motorized screw spindle width adjustment',
            'Overfeed Range': '-10% to +30% computerized overfeed',
            'Speed Rating': 'Up to 100 meters per minute'
          },
          metrics: [
            { label: 'Width Accuracy', value: '99.5%' },
            { label: 'Weft Straightness', value: '99%' },
            { label: 'Heat-Set Temp', value: '180°C' },
            { label: 'Shrinkage Index', value: 'Minimal' }
          ]
        },
        {
          id: 'dyeing_range',
          title: 'Dyeing Range Machine',
          image: wetDyeingRangeImg,
          desc: 'Continuous dyeing range lines pad, steam, wash, and dry cotton fabrics continuously. This heavy-duty system is optimized for high-volume B2B orders, offering incredible color uniformity from the first meter to the last.',
          specs: {
            'Padder Tech': 'Deflection-controlled swimming roll padder',
            'Steamer Capacity': 'Up to 80 meters fabric loop content',
            'Washing Steps': '5-stage counter-current wash boxes',
            'Daily Capacity': '30,000 meters continuous dyed fabric'
          },
          metrics: [
            { label: 'Color Uniformity', value: '99.8%' },
            { label: 'Wash Fastness', value: 'Grade 4+' },
            { label: 'Steaming Temp', value: '102°C' },
            { label: 'Continuous Output', value: 'High' }
          ]
        },
        {
          id: 'tumble_dryer',
          title: 'Tumble Dryer Machine',
          image: wetTumbleDryerImg,
          desc: 'Continuous and batch industrial tumble dryers relax cotton loops after dyeing. This creates maximum fluffiness, loft, and bulk for Terry towels while restoring their natural moisture-absorbing capabilities.',
          specs: {
            'Basket Volume': '3,500 Liter stainless steel basket',
            'Heating Source': 'High-pressure steam coil heating grid',
            'Moisture Control': 'Auto-sensing residual moisture meters',
            'Cycle Time': 'Rapid 25-minute drying loops'
          },
          metrics: [
            { label: 'Residual Moisture', value: '8%' },
            { label: 'Bulk Recovery', value: 'Excellent' },
            { label: 'Fluffiness Index', value: 'Maximum' },
            { label: 'Cycle Duration', value: 'Optimal' }
          ]
        },
        {
          id: 'raising',
          title: 'Raising (Napping)',
          image: wetRaisingImg,
          desc: 'Mechanical raising machines brush the surface of woven blankets and towels using fine wire-wound rollers. This lifts the fibers to create a dense, thermal-insulating, and incredibly soft napped pile.',
          specs: {
            'Raising Rollers': '24 wire-clothed pile/counter-pile rollers',
            'Drum Speed': 'Up to 100 RPM drum rotation speeds',
            'Fabric Tension': 'Load-cell controlled warp tension control',
            'Brush Density': 'Micro-fine card-clothing wire setup'
          },
          metrics: [
            { label: 'Pile Density', value: 'Uniform' },
            { label: 'Tensile Strength', value: 'Retained' },
            { label: 'Softness Rating', value: 'Premium' },
            { label: 'Napping Depth', value: 'Precise' }
          ]
        }
      ];
    } else {
      return [
        {
          id: 'auto_spreading',
          title: 'Auto Spreading Machine',
          image: mfgAutoSpreadingImg,
          desc: 'Our automatic fabric spreading machine lays out wide fabric rolls onto long cutting tables with perfect tension control, ensuring multiple layers of woven cotton sheets are aligned accurately before cutting.',
          specs: {
            'Spreading Width': 'Up to 2,400 mm working width',
            'Tension Control': 'Automatic tension-free relaxation feed',
            'Max Roll Weight': 'Up to 150 kg fabric roll support',
            'Operator Safety': 'Integrated photo-electric safety barriers'
          },
          metrics: [
            { label: 'Layer Alignment', value: '99.9%' },
            { label: 'Tension Uniformity', value: 'Stable' },
            { label: 'Spreading Speed', value: '80 m/min' },
            { label: 'Laying Accuracy', value: 'Perfect' }
          ]
        },
        {
          id: 'auto_cutting',
          title: 'Auto Cutting Machine',
          image: mfgAutoCuttingImg,
          desc: 'Computerized CNC cutting systems cut fabric stacks with millimeter-level precision. This minimizes fabric waste and ensures completely uniform shapes for subsequent stitching and hemming processes.',
          specs: {
            'Cutting Head': 'High-frequency vertical reciprocating knife',
            'Vacuum System': 'Integrated vacuum compression holding table',
            'CAD Integration': 'Direct PLT/DXF design marker loading',
            'Cutting Height': 'Up to 70 mm compressed fabric height'
          },
          metrics: [
            { label: 'Cutting Precision', value: '±0.5 mm' },
            { label: 'Fabric Yield Rate', value: '95%' },
            { label: 'Knife Speed', value: 'High' },
            { label: 'Marker Efficiency', value: '98%' }
          ]
        },
        {
          id: 'auto_packing',
          title: 'Auto Packing Machine',
          image: mfgAutoPackingImg,
          desc: 'Automated folding, stacking, and compression packing systems prepare finished towels for shipping. Towels are sealed in eco-friendly protective bags to preserve cleanliness and softness during marine transport.',
          specs: {
            'Packing Speed': 'Up to 20 cycles per minute',
            'Sealing Tech': 'Constant heat electronic impulse sealer',
            'Pack Type': 'Poly-bagging and bundle strapping',
            'Label Systems': 'Direct barcode and SKU thermal print integration'
          },
          metrics: [
            { label: 'Packing Speed', value: '1,200 pcs/hr' },
            { label: 'Seal Integrity', value: '100% Hermetic' },
            { label: 'Barcode Read', value: '99.9%' },
            { label: 'Eco Bagging', value: 'Bio-Degradable' }
          ]
        },
        {
          id: 'auto_stitching',
          title: 'Auto Stitching Machine',
          image: mfgAutoStitchingImg,
          desc: 'Automated hemming and side-seaming machines sew towel borders with double-needle locks. Computerized control units adjust seam margins automatically for consistent stitch counts and margins.',
          specs: {
            'Sewing Heads': 'Twin automated sewing head units',
            'Stitch Standard': 'ISO 4915 class 301 lockstitches',
            'Hem Width': 'Adjustable 10 mm to 30 mm margins',
            'Edge Detection': 'High-precision optical sensors'
          },
          metrics: [
            { label: 'Stitch Precision', value: '99%' },
            { label: 'Hem Stability', value: 'Double-Locked' },
            { label: 'Automation Index', value: '95%' },
            { label: 'Yield Rate', value: '99.5%' }
          ]
        },
        {
          id: 'sewing_machine',
          title: 'Sewing Machine Unit',
          image: mfgSewingMachineImg,
          desc: 'High-speed industrial lockstitch sewing machine benches are operated by skilled artisans for intricate corners, custom labels, and bespoke client branding details requiring manual craftsmanship.',
          specs: {
            'Machine Type': 'Direct-drive single needle lockstitch',
            'Lubrication': 'Fully sealed automatic oil bath system',
            'Max Speed': 'Up to 5,000 stitches per minute',
            'Stitch Length': '0 to 5 mm adjustable feed length'
          },
          metrics: [
            { label: 'Manual Quality', value: 'Artisan Grade' },
            { label: 'Label Placement', value: 'Perfect' },
            { label: 'Seam Strength', value: 'High' },
            { label: 'Thread Trim', value: 'Automatic' }
          ]
        },
        {
          id: 'overlock_machine',
          title: 'Overlock Machine',
          image: mfgOverlockMachineImg,
          desc: 'High-speed 3-thread and 4-thread overlock stitching machines trim raw fabric edges and bind them with dense cover stitches, preventing any edge fraying during commercial hospitality laundering.',
          specs: {
            'Stitch Type': 'ISO 4915 class 504/514 overlock stitches',
            'Trimming Knife': 'Dual carbide steel edge-trimming knives',
            'Motor Type': 'Energy-efficient integrated servo motor',
            'Max Speed': 'Up to 7,500 stitches per minute'
          },
          metrics: [
            { label: 'Edge Binding', value: '100% Secured' },
            { label: 'Knife Alignment', value: 'Optimal' },
            { label: 'Overlock Width', value: '6 mm standard' },
            { label: 'Fray Protection', value: 'Absolute' }
          ]
        }
      ];
    }
  };

  const subDepartmentsList = getSubDepartments(activeFacilityIndex);

  return (
    <section className="facilities-showroom-wrapper">

      <div className="container">

        {/* Monospace Breadcrumbs & Top Section */}
        <div style={{ marginBottom: '24px', fontFamily: 'monospace', fontSize: '0.85rem', letterSpacing: '0.1em', textAlign: 'left' }}>
          <span style={{ color: 'var(--text-muted)', cursor: 'pointer' }} onClick={() => { setCurrentPage('home'); window.scrollTo(0, 0); }}>/</span>
          <span style={{ color: 'var(--text-muted)', cursor: 'pointer', marginLeft: '6px' }} onClick={() => { setCurrentPage('facilities'); window.scrollTo(0, 0); }}>facilities</span>
          <span style={{ color: 'var(--accent)', marginLeft: '6px' }}>/ {currentFacility.title.toLowerCase().replace(' ', '_')}</span>
        </div>

        {/* Facility Switcher Navigation */}
        <div className="showroom-nav-switcher">
          {FACILITY_STEPS.map((facility, idx) => {
            const tabs = ['spinning', 'weaving', 'wet_processing', 'manufacturing'];
            return (
              <button
                key={idx}
                className={`showroom-nav-btn ${activeFacilityIndex === idx ? 'active' : ''}`}
                onClick={() => {
                  setActiveFacilityIndex(idx);
                  window.location.hash = `#/facilities?tab=${tabs[idx]}`;
                }}
              >
                <span className="showroom-nav-num">0{idx + 1}</span>
                <span className="showroom-nav-title">{facility.title}</span>
              </button>
            );
          })}
        </div>

        {/* Dashboard Header Bar */}
        <div className="showroom-header-bar">
          <span className="badge" style={{ marginBottom: '12px' }}>
            Production Division Showcase
          </span>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', color: 'var(--accent)', lineHeight: '1.15', fontWeight: 400 }}>
            {currentFacility.title}
          </h1>
          <p className="text-secondary" style={{ marginTop: '8px', fontSize: '0.98rem', maxWidth: '600px' }}>
            {currentFacility.description}
          </p>
        </div>


        {/* Showroom Cards List */}
        <div>
          {subDepartmentsList.map((dept, idx) => (
            <div className="showroom-row" key={dept.id}>

              {/* Image Pane Container */}
              <div className="showroom-img-pane">
                <div className="showroom-img-frame">
                  <div className="showroom-camera-grid"></div>
                  <div className="showroom-img-overlay" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span className="rec-dot"></span>
                    DIV 0{activeFacilityIndex + 1} // CAM_0{idx + 1}
                  </div>
                  <img
                    className="showroom-img"
                    src={dept.image}
                    alt={dept.title}
                  />
                  <div className="showroom-img-coordinates">
                    <span>COORDS: {currentFacility.coordinates}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span className="rec-dot" style={{ backgroundColor: '#22c55e', animation: 'recPulse 2s infinite' }}></span>
                      STATUS // ONLINE
                    </span>
                  </div>
                </div>
              </div>

              {/* Info & Telemetry Pane */}
              <div className="showroom-info-pane">
                <span className="showroom-tag">SECTION 0{idx + 1} // {dept.id.toUpperCase()}</span>
                <h2 className="showroom-title">{dept.title}</h2>
                <p className="showroom-desc">{dept.desc}</p>

                {/* Specs & Metrics data grids */}
                <div className="showroom-data-grid">

                  {/* Specifications Box */}
                  <div className="showroom-spec-box">
                    <span className="showroom-spec-title">MACHINERY SPECIFICATIONS</span>
                    {Object.entries(dept.specs).map(([key, val]) => (
                      <div className="showroom-spec-row" key={key}>
                        <span className="showroom-spec-key">{key}</span>
                        <span className="showroom-spec-val">{val}</span>
                      </div>
                    ))}
                  </div>

                  {/* Metrics Box */}
                  <div className="showroom-metric-box">
                    {dept.metrics.map((metric, mIdx) => {
                      const isPercentage = metric.value.endsWith('%');
                      const numericVal = isPercentage ? parseFloat(metric.value) : null;

                      return (
                        <div className="showroom-metric-card" key={mIdx}>
                          <div className="showroom-metric-icon">
                            {mIdx === 0 && (
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                <path d="M2 12h20" />
                              </svg>
                            )}
                            {mIdx === 1 && (
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                              </svg>
                            )}
                            {mIdx === 2 && (
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                                <polyline points="2 17 12 22 22 17" />
                                <polyline points="2 12 12 17 22 12" />
                              </svg>
                            )}
                            {mIdx === 3 && (
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                              </svg>
                            )}
                          </div>

                          <div className="showroom-metric-details">
                            <span className="showroom-metric-label">{metric.label}</span>
                            {isPercentage ? (
                              <>
                                <div className="showroom-metric-value-row">
                                  <span className="showroom-metric-value">{metric.value}</span>
                                  <span style={{ fontSize: '0.62rem', color: '#55c57a', fontWeight: 'bold', fontFamily: 'monospace' }}>ACTIVE</span>
                                </div>
                                <div className="showroom-metric-bar-track">
                                  <div className="showroom-metric-bar-fill" style={{ width: `${numericVal}%` }}></div>
                                </div>
                              </>
                            ) : (
                              <span className="showroom-metric-tag">{metric.value}</span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Operational Audit CTA Section */}
        <div className="facilities-audit-wrapper">
          <div className="contact-bottom-cta facilities-audit-cta">
            <div className="contact-bottom-cta-overlay facilities-audit-cta-overlay">
              <span className="contact-cta-badge facilities-audit-badge">
                Operations Audit
              </span>
              <h2 className="contact-cta-heading facilities-audit-heading">
                Request a Real-Time Operations Telemetry Review
              </h2>
              <button
                className="btn btn-primary"
                onClick={() => {
                  setCurrentPage('contact');
                  window.scrollTo(0, 0);
                }}
              >
                Schedule Audit
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FacilitiesPage;
