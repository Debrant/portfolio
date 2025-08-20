// Configuration file for portfolio content
// Update this file to customize your portfolio

export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  phone?: string;
  website?: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
  bio: string;
  avatar?: string;
  resume?: string;
}

export interface WorkExperience {
  company: string;
  location: string;
  position: string;
  period: string;
  description?: string;
  achievements: string[];
  technologies?: string[];
}

export interface Education {
  institution: string;
  location: string;
  degree: string;
  period: string;
  gpa?: string;
  achievements?: string[];
  coursework?: string[];
}

export interface Project {
  title: string;
  description: string[];
  technologies: string[];
  github?: string;
  image?: string;
  gallery?: string[];
  documents?: {
    name: string;
    url: string;
    type?: 'pdf' | 'doc' | 'image' | 'other';
  }[];
  featured?: boolean;
}

export interface Skills {
  [category: string]: string[];
}

export interface Award {
  name: string;
  issuer: string;
  date: string;
  type: string;
  position?: string;
  description?: string;
}

export interface Contact {
  title: string;
  subtitle: string;
  description: string;
}

// CUSTOMIZE YOUR PORTFOLIO DATA BELOW
// =================================

export const personalInfo: PersonalInfo = {
  name: "Nathan Bryant",
  title: "Electrical Engineer",
  location: "Portland, Oregon",
  email: "bryantpdx@live.com",
  phone: "503-443-0648",
  website: "https://yourwebsite.com",
  github: "https://github.com/Debrant",
  linkedin: "https://linkedin.com/in/bryantengineering",
  bio: "Multidisciplinary engineering leader with expertise in embedded systems architecture and industrial automation. Led development of patented motion-control platforms achieving 100-micron positioning accuracy for multi-ton systems. Built and scaled engineering teams while delivering complex products from concept to production, including high-power electric tools and precision manufacturing systems. Combines deep technical execution with strategic leadership across electronics, firmware, and mechanical integration.",
  avatar: "/avatar.jpg",
  resume: "/path-to-your-resume.pdf"
};

export const workExperience: WorkExperience[] = [
  {
    company: "Continuum Design Build, LLC",
    location: "Portland, Oregon",
    position: "Co-Founder / Principal Engineer",
    period: "2024 - Present",
    description: "Co-founded Continuum Design Build with a focus on historic remodels and restorations for high-end residential and select commercial clients (including doctors' offices, yoga studios, and bars).",
    achievements: [
      "Leveraged engineering and project management expertise to automate internal company functions and optimize workflow efficiency",
      "Converted a Sprinter van into a fully equipped mobile workshop, enabling on-site fabrication and rapid response capabilities",
      "Integrated advanced smart home features into customer environments, blending modern technology with historic preservation",
      "Maintained a client portfolio that is approximately 75% residential and 25% commercial, delivering standout results in complex renovation environments",
      "Combined engineering innovation, craftsmanship, and project efficiency to exceed client expectations in high-end restoration projects"
    ],
    technologies: ["Smart Home Integration", "Mobile Workshop Design", "Project Management Automation", "Historic Restoration", "IoT Systems", "Embedded Controls"]
  },
  {
    company: "Oregon Tool, Inc.",
    location: "Portland, Oregon",
    position: "Manager, Electrical Engineering",
    period: "2021 - 2024",
    description: "Recruited to build and lead a new Electrical Engineering department, hiring and training both engineers and lab technicians. Tasked with roadmapping and implementing new electric product lines and smart tools for Oregon Tool, the world's largest manufacturer of bar and chain.",
    achievements: [
      "Directed the development and successful launch of a 5kW liquid-cooled concrete-cutting chainsaw—one of the most powerful electric cutting tools in its class",
      "Built and led new Electrical Engineering department from the ground up, establishing team processes and technical standards",
      "Balanced leadership responsibilities with hands-on engineering work, including PCB revisions, firmware optimization, and vendor coordination",
      "Ensured compliance testing to meet UL, CE, and global certification standards for international market acceptance",
      "Developed electric product lines for forestry (chainsaws) and construction (concrete saws) applications"
    ],
    technologies: ["High-Power Electronics", "Liquid Cooling Systems", "PCB Design", "Firmware Development", "UL/CE Compliance", "Electric Motor Control", "Battery Management Systems"]
  },
  {
    company: "TigerStop, LLC",
    location: "Portland, Oregon",
    position: "Electrical & Embedded Systems Engineer → Lead Electrical Engineer → Director of R&D → Director of Operations",
    period: "2015 - 2021",
    description: "Joined TigerStop as Electrical and Embedded Systems Engineer, quickly progressing to Lead Electrical Engineer, then Director of R&D, and finally Director of Operations.",
    achievements: [
      "Electrical & Embedded Systems Engineer (2015–2016): Established reputation as natural troubleshooter, diagnosing and resolving every technical challenge assigned. Discovered and corrected long-standing flaw in sinusoidal PWM control loop for three-phase motor control, reducing motor heating and increasing push capacity",
      "Lead Electrical Engineer (2016–2018): Co-designed new system architectures and authored intellectual property that became foundation of company's motion-control patent. Designed custom transformers for PCB-based switch-mode power supply, improving energy efficiency and thermal performance. Upgraded robotic saw system control boxes to meet UL508A compliance",
      "Director of R&D (2019–2020): Finalized patent process in collaboration with IP attorneys. Hired, trained, and developed engineering team. Implemented VoIP telephony system with integrated call tracking. Overhauled tech support training, cutting training period from one year to 90 days while improving customer outcomes",
      "Director of Operations (2021): Led ERP, MES, and CRM system integration projects. Finalized vertical integration initiative bringing all sheet steel manufacturing in-house, resulting in ~$1M annual savings. Navigated operational challenges during first year of COVID-19"
    ],
    technologies: ["CAN Bus", "RS-232/485", "EtherCAT", "PCB Design", "Firmware Development", "Motion Control", "PWM Control", "UL508A Compliance", "ERP/MES/CRM Integration", "Lean Manufacturing"]
  },
  {
    company: "Allion USA",
    location: "Portland, Oregon",
    position: "Test Engineer",
    period: "2014",
    description: "Executed peer-to-peer interoperability testing for Allion's high-profile client portfolio, including Microsoft, Amazon, and Intel.",
    achievements: [
      "Designed and documented comprehensive test plans to validate device performance against industry specifications",
      "Designed, documented, and built a semi-anechoic chamber from scratch—creating a reusable template that delivered equivalent performance at roughly one-third the cost of a commercial kit",
      "Significantly reduced capital expenditure while enhancing in-house testing capability",
      "Created testing methodologies to identify integration issues in pre-launch products"
    ],
    technologies: ["Interoperability Testing", "EMI Testing", "Semi-Anechoic Chamber Design", "Test Plan Development", "Technical Documentation"]
  },
  {
    company: "Portland State University",
    location: "Portland, Oregon",
    position: "Manager, Engineering Prototypes Laboratory",
    period: "2013 - 2015",
    description: "Oversaw the daily operations of PSU's Engineering Prototypes Laboratory, maintaining precision fabrication and testing equipment including CNC machines, 3D printers, oscilloscopes, and soldering/rework stations.",
    achievements: [
      "Trained both students and industry partners on proper operation and safety procedures, enabling efficient and effective use of laboratory resources",
      "Assisted in the design, fabrication, and assembly of prototypes spanning mechanical, electrical, and interdisciplinary engineering domains",
      "Provided a bridge between academic coursework and hands-on technical execution, giving students a professional-grade prototyping experience",
      "Maintained precision fabrication and testing equipment to ensure optimal performance and safety standards"
    ],
    technologies: ["CNC Machining", "3D Printing", "Oscilloscopes", "Soldering/Rework Stations", "Precision Fabrication", "Laboratory Management"]
  }
];

export const education: Education[] = [
  {
    institution: "Portland State University",
    location: "Portland, Oregon",
    degree: "Master of Science in Electrical and Computer Engineering",
    period: "2021",
    coursework: ["Front End Development", "Info Security", "Cyber Physical Systems", "Physical Design of Integrated Circuits", "Control Systems Design", "Advanced Digital Design", "Analog Design"]
  },
  {
    institution: "Portland State University",
    location: "Portland, Oregon",
    degree: "Bachelor of Science in Electrical Engineering & Physics",
    period: "2015",
    coursework: ["Quantum Mechanics", "Electron Microscopy", "Nano Devices", "Semiconductor Physics", "Fourier Analysis", "IC Technologies", "Microprocessors", "Industry Design Process", "Electronics Packaging", "Digital Design", "Feedback and Control Systems"]
  }
];

export const skills: Skills = {
  "Electrical Engineering": ["PCB Design", "Firmware Development", "Circuit Analysis", "Power Electronics", "Motor Control", "PWM Control", "Analog Design", "Digital Design", "Embedded Systems", "Industrial Controls"],
  "Leadership": ["Talent Acquisition", "Mentorship", "Onboarding", "Career Development", "Coaching", "Product Road Mapping", "Presentation", "Data Trends", "Profit Velocity Mapping", "Flow Charting", "Process Planning"],
  "Communication Protocols": ["CAN Bus", "RS-232/485", "EtherCAT", "SPI", "I2C", "JTAG", "SWI", "Bluetooth", "Bluetooth Low Energy", "Zigbee", "NFC", "TCP/IP", "UDP", "SSH", "UART", "Web Sockets"],
  "Design & CAD Tools": ["Altium Designer", "SolidWorks", "Cadence", "LT-Spice", "KiCad", "AutoCAD", "Fusion 360", "PowerSim", "Eagle CAD", "Solid Edge", "Revit", "SketchUp"],
  "Programming & Development": ["C/C++", "Python", "MATLAB", "Arduino", "ARM", "Keil", "Git", "Command Line", "Linux", "Embedded Linux", "VHDL", "Assembly", "Device Drivers", "Device Trees"],
  "Project Management": ["Wrike", "ClickUp", "Monday", "Jira", "Confluence", "Redmine", "Lean Manufacturing", "ERP/MES/CRM Integration"],
  "Testing & Compliance": ["EMI Testing", "UL/CE Compliance", "Interoperability Testing", "Semi-Anechoic Chamber Design", "Test Plan Development", "Design of Tests"],
  "Manufacturing & Operations": ["CNC Machining", "3D Printing", "Precision Fabrication", "Laboratory Management", "Supply Chain Optimization", "Vertical Integration", "Lean Manufacturing", "Fiber Laser", "Press Brake", "Work Cell Optimization", "Spaghetti Diagrams", "Factory Flow"],
  "Software & Tools": ["Visual Studio", "Jupyter Labs", "LaTeX", "MS Office", "TeamCenter", "PowerSim", "SFTP", "Epicor", "Raspberry Pi", "Eclipse", "PyCharm", "Network Analyzer", "Oscilloscopes", "Benchtop Tools"]
};

export const projects: Project[] = [
  {
    title: "A Block of Code",
    description: [
      "As a key member of a five-person capstone team, I led the electrical design foundation for this innovative K-12 computer science manipulative. I designed the schematic, PCB layout, and component selection for 50 physical programming blocks that allow students to visualize and experiment with computer science concepts through hands-on manipulation.",
      "Working under a multi-disciplinary advisory panel, I designed the technical infrastructure enabling each 2x2x2 inch block to communicate with neighboring blocks via DB-9 connectors, detect topology through handshake protocols, and integrate ATtiny461 microcontrollers with BeagleBone controller for centralized coordination.",
      "This project addressed a critical gap in CS education by creating intuitive physical manipulatives that engage K-12 students without requiring extensive scaffolding. The solution successfully demonstrated that novice students could construct simple programs while experts competed to create complex programs using the fewest blocks. Earned recognition as 'Most Creative Senior Capstone Project' and contributed to research on building computing interest among diverse student populations."
    ],
    technologies: ["ATtiny461 Microcontrollers", "PCB Design", "Schematic Design", "DB-9 Connectors", "BeagleBone", "Embedded Systems", "Educational Technology", "Capstone Project Management"],
    image: "/projects/a-block-of-code/images/hero.png",
    gallery: [
      "/projects/a-block-of-code/images/screenshot1.png",
      "/projects/a-block-of-code/images/diagram.svg"
    ],
    github: "https://github.com/erebus-labs/blocks-o-code",
    documents: [
      {
        name: "Technical Documentation",
        url: "/projects/a-block-of-code/documents/technical-doc.pdf",
        type: "pdf"
      }
    ],
    featured: true
  },
  {
    title: "US Patent 20210046596A1",
    description: [
      "In late 2016, Spencer Dick called me into his office for a candid conversation about why our lightweight positioner wasn't penetrating the contractor/builder market. Drawing on my background as a former general contractor, we identified the need for a portable, battery-agnostic job-site positioning system that could fit in a single duffle bag.",
      "Our collaboration spanned nearly two years, meeting after hours and early mornings to develop a modular snap-together rack and pinion system. I designed custom embedded firmware and proprietary algorithms that maintained TigerStop's accuracy and repeatability standards regardless of assembled machine length, including wireless communication capabilities—a TigerStop first.",
      "The patent was finalized and awarded roughly a year after we lost Spencer to his decades-long battle with cancer. This innovative modular positioning system represents both a technical breakthrough and a meaningful collaboration with a respected mentor and colleague."
    ],
    technologies: ["Modular System Design", "Rack and Pinion Systems", "Embedded Firmware", "Proprietary Algorithms", "Wireless Communication", "Battery Management", "Patent Development", "IP Strategy"],
    image: "/projects/us-patent-20210046596a1/images/patent-diagram.jpg",
    gallery: [
      "/projects/us-patent-20210046596a1/images/patent-hero.png"
    ],
    documents: [
      {
        name: "Patent Document",
        url: "/projects/us-patent-20210046596a1/documents/patent.pdf",
        type: "pdf"
      }
    ],
    featured: true
  },
  {
    title: "Switch-Mode Power Supply",
    description: [
      "Inherited a failing transformer design project from retiring mentor that had struggled for months with Bell Labs specifications. After studying transformer physics and flyback topology fundamentals, I discovered the original design incorrectly specified for peak load rather than constant load requirements.",
      "Used Power Integrations software suite to completely redesign the switch-mode system, accounting for proper load characteristics and flyback topology optimization. Designed and built a new custom PCB to support the revised transformer specifications.",
      "The redesigned system worked perfectly on first test, replacing months of failed prototypes with a robust power supply solution that met all original Bell Labs requirements."
    ],
    technologies: ["Transformer Design", "Flyback Topology", "Switch-Mode Power Supply", "Power Integrations Software", "Custom PCB Design", "Load Analysis", "Power Electronics", "Bell Labs Standards"],
    image: "/projects/switch-mode-power-supply/images/xfmr-hero.png",
    gallery: [
      "/projects/switch-mode-power-supply/images/xfmr-layout.png",
      "/projects/switch-mode-power-supply/images/xfmr-stack.png"
    ],
    featured: true
  },
  {
    title: "ICS 536E – 3.6kW Liquid-Cooled Concrete Chainsaw",
    description: [
      "Brought onto the ICS 536E program after its initial design failed compliance and safety testing. The 3.6kW liquid-cooled electric chainsaw for cutting concrete, masonry, and ductile pipe had strong mechanical foundations but lacked cohesive electrical engineering leadership.",
      "As team manager, I stabilized a distracted and demoralized EE group through direct mentoring and collaborative workshops. Led systematic DFMEA recovery, correcting improperly framed goals and compliance assumptions. Collaborated on multiple PCBA revisions, optimized firmware for improved performance, and partnered with Southwire to redesign in-line GFCI for updated UL943 self-test requirements.",
      "Successfully guided the saw through compliance testing to meet UL/CE standards and coordinated with manufacturing for final PFMEA updates. The result was successful market release of a highly reliable, heavy-duty cutting tool that expanded the company's product portfolio while meeting stringent compliance standards."
    ],
    technologies: ["High-Power Electronics", "Liquid Cooling Systems", "PCBA Design", "Firmware Optimization", "UL/CE Compliance", "GFCI Design", "DFMEA", "PFMEA", "Team Leadership"],
    image: "/projects/ics-536e/images/hero.jpg",
    featured: true
  },
  {
    title: "Giant SPC Calipers",
    description: [
      "Assigned to assist the mechanical design engineer in developing giant precision calipers using magnetic linear encoders along aluminum extrusions, with custom lengths up to 30 feet. My role focused on translating sensor input/output systems and developing customer-facing software solutions.",
      "Wrote a comprehensive interface program for customers who didn't want to use their own Statistical Process Control software, plus developed an API for those who preferred integration with existing systems. As the project evolved, I contributed to physical design optimization and Bluetooth communications implementation.",
      "Beyond technical development, I became the public face of the product—modeling for release print advertisements and providing technical sales demonstrations at trade shows. This unique combination of engineering development and market-facing representation showcased both the technical capabilities and commercial viability of the precision measurement system."
    ],
    technologies: ["Magnetic Linear Encoders", "Statistical Process Control", "API Development", "Bluetooth Communications", "Sensor Integration", "Software Interface Design", "Technical Sales", "Trade Show Demonstrations"],
    image: "/projects/giant-spc-calipers/images/calipers-hero.jpg",
    gallery: [
      "/projects/giant-spc-calipers/images/calipers-secondary.jpg"
    ],
    featured: true
  },
  {
    title: "Robotic Miter Saw",
    description: [
      "As lead electrical engineer, I created firmware modifications to enable angular positioning using existing positioning amplifiers and HDMI controller. Designed the complete electrical wire harness, power systems, and control cabinet for the automated cutting system.",
      "After advancing to head of R&D, I coached our front-end software developer on optimization mathematics for angled pieces and discovered a critical failed assumption in the mechanical design. Rather than applying a quick fix, I coached the mechanical engineering team through identifying and resolving root causes of the underlying issue.",
      "Later co-founded a large envelope version of the same saw as a joint venture with an outside tool and die maker. This relaunch became both the company's first such joint venture and achieved the fastest time-to-market ever recorded by a large margin, demonstrating the value of systematic engineering approach and strategic partnerships."
    ],
    technologies: ["Angular Positioning Systems", "Firmware Development", "Wire Harness Design", "Power Systems", "Control Cabinets", "Optimization Mathematics", "Joint Venture Management", "Root Cause Analysis"],
    image: "/projects/robotic-miter-saw/images/saw-system.jpg",
    gallery: [
      "/projects/robotic-miter-saw/images/Screenshot 2025-08-14 at 11.28.28 PM.png"
    ],
    featured: true
  },
  {
    title: "HMI Proof of Concept",
    description: [
      "During an open brainstorming session to select the next generation HMI, I proposed using a system-on-module on a custom PCB carrier board to run embedded Linux for faster development. When the team had trouble visualizing the concept, I requested permission to build a proof of concept.",
      "While waiting for a 10.1 inch multi-touch HDMI screen to arrive, I programmed a Raspberry Pi to communicate over RS protocols to our existing Motion Control Amplifier and added a pulse-controlled custom communication protocol for an off-the-shelf servo motor.",
      "I developed a simple calculator interface with go/stop buttons and a machine toggle dropdown. The entire development process took just 1 week, successfully demonstrating control of both existing machines and the new servo motor from a unified interface. This proof of concept led to the selection of an NXP i.MX6 SOM on a 12-layer custom carrier board."
    ],
    technologies: ["System-on-Module Design", "Embedded Linux", "Raspberry Pi", "RS Protocol Communication", "Custom Communication Protocols", "Multi-touch HDMI", "NXP i.MX6", "Rapid Prototyping"],
    image: "/projects/hmi-proof-of-concept/images/hdmi-hero.jpg",
    featured: true
  },
  {
    title: "Project Chicken Coop",
    description: [
      "While working as a test engineer at Allion during the early days of peer-to-peer display technology, I personally tested devices like Amazon Firestick and Intel's WiDi before their release. A constant bottleneck was scheduling time in expensive anechoic and semi-anechoic chambers, sometimes delaying hours of testing by weeks.",
      "When my boss mentioned wishing interoperability had its own semi chamber but commercial kits exceeded his discretionary budget, I drew on my contractor background and proposed we design and build one ourselves. The project was greenlit as 'Project Chicken Coop' due to the semi-transparent appearance of our hybrid Faraday cage design.",
      "Completed in under six weeks: one week for planning and sourcing, two weeks for material delivery, and two weeks for construction and testing. We delivered a much-needed test resource at roughly 20% of commercial kit cost. Even including engineering hours for assembly, total cost remained about one-third of commercial alternatives."
    ],
    technologies: ["Faraday Cage Design", "EMI Testing", "RF Attenuation", "Semi-Anechoic Chamber", "Cost Engineering"],
    image: "/projects/project-chicken-coop/images/chicken-hero.jpeg",
    featured: true
  },
  {
    title: "Path-Finding RC",
    description: [
      "Undergraduate project using a PIC16 microcontroller to autonomously control a battery-powered RC car following black electrical tape paths. All code written in assembly language, with each student responsible for adapting reference designs to account for individual car variations.",
      "Researched and implemented a custom path-finding algorithm entirely in assembly language, with passing grade requiring 100 feet of successful path navigation. My implementation achieved one of the fastest completion times for that academic year.",
      "Earned better than 100% grade after receiving extra credit for both exceptional speed performance and successful adaptation of a SLAM (Simultaneous Localization and Mapping) algorithm to assembly language, resulting in remarkably low-error navigation capabilities."
    ],
    technologies: ["PIC16 Microcontroller", "Assembly Language", "SLAM Algorithm", "Autonomous Navigation", "Embedded Control"],
    image: "/projects/path-finding-rc/images/rc-hero.jpg",
    featured: true
  }
];

export const awards: Award[] = [
  {
    name: "Award Name",
    issuer: "Issuing Organization",
    date: "Month Year",
    type: "Competition/Academic/Professional",
    position: "1st Place", // Optional
    description: "Brief description of the award"
  },
  // Add more awards here
];

export const contact: Contact = {
  title: "Get In Touch",
  subtitle: "Let's Connect",
  description: "I'm always interested in hearing about new opportunities and interesting projects. Feel free to reach out!"
};

// THEME CONFIGURATION
// ==================

export const themeConfig = {
  // Color scheme - you can change these CSS custom properties
  primaryColor: {
    50: "239 246 255",   // blue-50
    100: "219 234 254",  // blue-100
    200: "191 219 254",  // blue-200
    300: "147 197 253",  // blue-300
    400: "96 165 250",   // blue-400
    500: "59 130 246",   // blue-500
    600: "37 99 235",    // blue-600
    700: "29 78 216",    // blue-700
    800: "30 64 175",    // blue-800
    900: "30 58 138",    // blue-900
    950: "23 37 84"      // blue-950
  },
  secondaryColor: {
    50: "250 250 250",   // neutral-50
    100: "245 245 245",  // neutral-100
    200: "229 229 229",  // neutral-200
    300: "212 212 212",  // neutral-300
    400: "163 163 163",  // neutral-400
    500: "115 115 115",  // neutral-500
    600: "82 82 82",     // neutral-600
    700: "64 64 64",     // neutral-700
    800: "38 38 38",     // neutral-800
    900: "23 23 23",     // neutral-900
    950: "10 10 10"      // neutral-950
  }
};

// NAVIGATION CONFIGURATION
// =======================

export const navigation = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" }
];

// SEO CONFIGURATION
// ================

export const seoConfig = {
  title: `${personalInfo.name} - ${personalInfo.title}`,
  description: personalInfo.bio,
  keywords: ["developer", "portfolio", "web development", "software engineer"],
  author: personalInfo.name,
  siteUrl: personalInfo.website || "https://yourwebsite.com",
  image: personalInfo.avatar || "/og-image.jpg"
};