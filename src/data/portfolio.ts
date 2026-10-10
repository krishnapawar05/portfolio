export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  detailedOverview: string;
  keyFeatures: string[];
  technologies: string[];
  badge?: string;
  statusBadge?: string;
  supportingDescription?: string;
  liveDemoUrl?: string;
  image: string;
  imageAlt: string;
}

export interface SkillCategory {
  name: string;
  description: string;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  locationOrFormat: string;
  period: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  context: string;
  venueOrOrganizer: string;
  statusBadge?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  ariaLabel: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Krishna G. Pawar",
    monogram: "KP",
    eyebrow: "COMPUTER SCIENCE • FULL-STACK DEVELOPMENT",
    headline: "Full-Stack Developer & AI Enthusiast",
    subline: "I build for the web. I explore AI. I solve problems.",
    rotatingRoles: [
      "Full-Stack Developer",
      "Software Developer",
      "AI Enthusiast",
      "Problem Solver",
    ],
    description:
      "Building web applications and AI-powered solutions with a focus on practical functionality, thoughtful interfaces, and meaningful problem-solving.",
    education:
      "Bachelor of Engineering in Computer Science and Engineering, KLE Institute of Technology, Hubballi, Karnataka, India.",
    email: "krishnagpawar.in@gmail.com",
    emailSubject: "Hello%20Krishna",
    phone: "+91 8867434799",
    phoneUrl: "tel:+918867434799",
    resumeUrl: "/resume.pdf",
    resumeFilename: "Krishna_G_Pawar_Resume.pdf",
    interests: [
      "Full-Stack Development",
      "MERN Stack Development",
      "Software Development",
      "AI-Powered Applications",
    ],
  },

  socials: [
    {
      platform: "GitHub",
      url: "https://github.com/krishnapawar05",
      ariaLabel: "Visit Krishna's GitHub profile",
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/krishnapawar05",
      ariaLabel: "Connect with Krishna on LinkedIn",
    },
  ] as SocialLink[],

  projects: [
    {
      id: "smartvision",
      title: "SmartVision",
      subtitle: "AI-Powered Assistive Technology",
      category: "COMPUTER VISION · ACCESSIBILITY",
      description:
        "An AI-powered assistive technology prototype designed to help visually impaired users read digital and handwritten text and identify nearby objects.",
      detailedOverview:
        "SmartVision translates real-world visual environments into actionable auditory feedback. Engineered to bridge sensory barriers, the application orchestrates Optical Character Recognition (OCR), text recognition pipelines, Text-to-Speech (TTS) voice synthesis, and YOLOv8 real-time object detection to help visually impaired users read printed or handwritten text and navigate spatial environments with greater autonomy.",
      keyFeatures: [
        "Real-time text detection and recognition for printed and handwritten text",
        "Synthesized Text-to-Speech (TTS) auditory feedback engine",
        "YOLOv8 object detection for spatial proximity awareness",
        "Low-latency computer-vision pipeline optimized for accessibility",
      ],
      technologies: [
        "OCR",
        "Text Recognition",
        "Text-to-Speech (TTS)",
        "YOLOv8",
        "OpenCV",
        "Python",
      ],
      badge: "1st Place · NAIN 2.0",
      statusBadge: "Patent Pending",
      supportingDescription:
        "Awarded 1st Place at the NAIN 2.0 Graduation & Demo Day under the Government of Karnataka's innovation initiative at IIIT Dharwad. The project is patent pending.",
      image: "/smartvision.png",
      imageAlt: "SmartVision AI-powered assistive technology interface with real-time OCR, TTS audio synthesis, and YOLOv8 object detection",
    },
    {
      id: "civictrack",
      title: "CivicTrack",
      subtitle: "AI-Powered Civic Issue Reporting & Resolution Platform",
      category: "AI · FULL-STACK · CIVIC TECH",
      description:
        "A production-grade civic issue resolution platform bridging citizens and municipal authorities with automated issue categorization and geospatial tracking.",
      detailedOverview:
        "CivicTrack streamlines public infrastructure maintenance by enabling citizens to report issues like potholes, streetlights, or waste overflow with real-time GPS coordinates and photos. Built with a Linear-inspired dark UI, it automates category and priority prediction, routes issues to municipal authorities on interactive Kanban dashboards, and provides live status updates with an audit trail.",
      keyFeatures: [
        "AI-based smart issue categorization and priority prediction from descriptions",
        "Geospatial mapping with GPS capture and reverse geocoding via Leaflet",
        "Authority management panel with Kanban workflow (Pending → In Progress → Resolved)",
        "Visual analytics with interactive distribution bar and pie charts",
        "Real-time notifications and community engagement timeline",
      ],
      technologies: [
        "React 19",
        "Vite",
        "Tailwind CSS",
        "Supabase",
        "Firebase",
        "Leaflet",
        "Geospatial Mapping",
      ],
      liveDemoUrl: "https://civictrack-blue.vercel.app/",
      image:
        "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=85",
      imageAlt: "Civic urban infrastructure and smart city management interface visualization",
    },
    {
      id: "genetic-purity-ai",
      title: "Genetic Purity AI",
      subtitle: "AI-Based Crop Genetic Purity Detection",
      category: "AI/ML · WEB APPLICATION",
      description:
        "A Flask-based web application that analyzes chilli plant specimen images using a MobileNet-based deep learning model to classify specimens as male, female, or hybrid.",
      detailedOverview:
        "Genetic Purity AI applies computer vision to agricultural botanical inspection. By analyzing morphological characteristics in chilli plant specimens (leaves, stems, and floral structures), the system automates purity verification for agricultural research and seed quality assurance. The platform incorporates end-to-end image preprocessing, MobileNet transfer learning via Keras/TensorFlow, secure authentication, and downloadable PDF classification reports.",
      keyFeatures: [
        "MobileNet deep learning classifier for chilli plant genetic purity",
        "Botanical morphology analysis for male, female, and hybrid specimen identification",
        "Integrated image preprocessing and augmentation pipeline",
        "Secure user authentication, prediction history, and PDF report generation",
      ],
      technologies: [
        "Python",
        "Flask",
        "TensorFlow/Keras",
        "MobileNet",
        "OpenCV",
        "MongoDB",
      ],
      image:
        "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=1200&q=85",
      imageAlt: "Chilli plant botanical specimen and green foliage for agricultural genetic purity analysis",
    },
    {
      id: "grainvision",
      title: "GrainVision",
      subtitle: "Detection of Stones & Mud in Grains Using Computer Vision",
      category: "COMPUTER VISION · AGRI-TECH",
      description:
        "An AI-based agricultural inspection system that detects foreign contaminants like stones and mud in grains and pulses using deep learning.",
      detailedOverview:
        "GrainVision brings automated quality control to post-harvest grain processing. Leveraging a custom-trained YOLOv8 object detection model, the application scans grain samples (such as rice, wheat, pulses, and millets) and accurately localizes physical impurities with bounding boxes, confidence scores, and aggregate contaminant counts, supporting batch processing for agricultural suppliers.",
      keyFeatures: [
        "YOLOv8 deep learning model trained for stone and mud impurity detection",
        "Multi-crop inspection supporting rice, wheat, pulses, and millets",
        "Bounding box localization with confidence scores and impurity count breakdown",
        "Batch image processing architecture with FastAPI backend and Next.js frontend",
      ],
      technologies: [
        "YOLOv8",
        "PyTorch",
        "FastAPI",
        "Next.js",
        "React",
        "Docker",
      ],
      image:
        "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=1200&q=85",
      imageAlt: "Golden agricultural wheat and grain harvest inspection visual",
    },
    {
      id: "saveher",
      title: "SaveHer",
      subtitle: "Discreet Emergency SOS & Women Safety Web Application",
      category: "FULL-STACK · SOCIAL IMPACT & PWA",
      description:
        "A responsive progressive web application (PWA) for discreet emergency alerts featuring gesture-based SOS triggers and real-time GPS tracking.",
      detailedOverview:
        "SaveHer is engineered for immediate personal safety in critical situations. The application allows users to trigger emergency alerts silently via device gestures (such as shaking or rapid triple tapping). Upon activation, it streams live GPS coordinates every 5-10 seconds to a Mapbox dashboard, records ambient audio clips, sends multi-channel push and SMS alerts, and integrates with local emergency response services.",
      keyFeatures: [
        "Gesture-based SOS activation via device shake or rapid triple tap",
        "Continuous GPS geolocation streaming with Mapbox GL JS map tracking",
        "Silent ambient audio recording for evidence collection",
        "Multi-channel alert distribution via FCM push notifications and SMS",
        "PWA architecture with offline capabilities, wake lock, and secret cancel action",
      ],
      technologies: [
        "React 18",
        "Vite",
        "Tailwind CSS",
        "Firebase",
        "Firestore",
        "Mapbox GL JS",
        "PWA",
      ],
      image:
        "https://images.unsplash.com/photo-1508873696983-2df5293cb395?auto=format&fit=crop&w=1200&q=85",
      imageAlt: "Emergency geolocation and personal safety application concept on illuminated city map",
    },
    {
      id: "curiobattle",
      title: "CurioBattle",
      subtitle: "Real-Time Gamified Learning & Quiz Battle Platform",
      category: "FULL-STACK · WEBSOCKETS & EDTECH",
      description:
        "A gamified educational platform transforming learning into an engaging experience through real-time multiplayer quiz battles, XP rewards, and streak tracking.",
      detailedOverview:
        "CurioBattle reimagines technical education by combining structured learning modules with competitive multiplayer gameplay. Students can challenge peers in real-time 1v1 knowledge battles powered by WebSockets, earn experience points (XP) to unlock tiers, maintain daily streaks, explore topic explanations with interactive visual diagrams, and compete on global leaderboards.",
      keyFeatures: [
        "Real-time 1v1 quiz battles powered by Socket.io matchmaking and WebSockets",
        "Gamification engine with XP progression tiers, daily streaks, and season passes",
        "Structured technical course content with interactive diagrams and code snippets",
        "Global and topic-based leaderboards with skill mastery tracking",
      ],
      technologies: [
        "React 18",
        "Vite",
        "Node.js",
        "Express",
        "Socket.io",
        "Firebase Firestore",
        "Tailwind CSS",
      ],
      image:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=85",
      imageAlt: "Futuristic interactive gaming and real-time digital competition visual",
    },
  ] as Project[],

  about: {
    eyebrow: "ABOUT ME",
    heading: "A little about how I build.",
    paragraphs: [
      "I'm a Computer Science undergraduate at KLE Institute of Technology, Hubballi, interested in building useful web applications and exploring how AI can solve real-world problems. My work spans full-stack development, application integration, and computer-vision projects.",
      "I enjoy turning ideas into working applications, learning new technologies through hands-on projects, and improving the way software works for the people using it.",
    ],
  },

  skills: [
    {
      name: "Frontend",
      description: "Crafting structured, accessible, and responsive user interfaces.",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React.js",
        "Responsive Web Design",
      ],
    },
    {
      name: "Backend",
      description: "Developing robust server-side logic, routing, and APIs.",
      skills: ["Node.js", "Express.js", "Flask", "REST APIs", "API Integration"],
    },
    {
      name: "Databases",
      description: "Relational and document storage management and querying.",
      skills: ["MongoDB", "MySQL", "SQL"],
    },
    {
      name: "Programming",
      description: "Core algorithms, object-oriented concepts, and problem solving.",
      skills: ["Java", "JavaScript", "Python", "C"],
    },
    {
      name: "AI & Computer Vision",
      description: "Object detection, visual analysis, neural networks, and OCR.",
      skills: [
        "YOLOv8",
        "OpenCV",
        "TensorFlow/Keras",
        "OCR",
        "Image Processing",
        "Computer Vision",
      ],
    },
    {
      name: "Developer Tools",
      description: "Version control, IDEs, and collaborative software workflows.",
      skills: ["Git", "GitHub", "Visual Studio Code", "Eclipse"],
    },
  ] as SkillCategory[],

  experience: [
    {
      id: "athreya",
      role: "Full Stack Development Intern",
      organization: "Athreya Technologies",
      locationOrFormat: "Hubballi, Karnataka, India",
      period: "January 2024 – April 2024",
      description:
        "Worked on a full-stack web application involving user authentication, cost estimation, dashboards, and business insights.",
      responsibilities: [
        "Developed application functionality using Java, JSP, HTML, CSS, and MySQL.",
        "Implemented user authentication and application modules.",
        "Built responsive UI components and addressed CSS/JavaScript compatibility issues.",
        "Used Git and GitHub for version control and collaborative development.",
      ],
      technologies: ["Java", "JSP", "HTML5", "CSS3", "JavaScript", "MySQL", "Git"],
    },
    {
      id: "apna-college",
      role: "Full Stack Development & Data Structures Trainee",
      organization: "Apna College – Sigma 10",
      locationOrFormat: "Online",
      period: "2025–Present",
      description:
        "Developing skills in Java, Data Structures and Algorithms, HTML, CSS, JavaScript, React, Node.js, Express.js, and MongoDB through structured coursework and coding practice.",
      responsibilities: [
        "Practicing core data structures, graph theory, sorting, and algorithmic problem-solving with Java.",
        "Building full-stack MERN application modules with MongoDB, Express, React, and Node.js.",
        "Applying industry-standard coding practices, modular design, and asynchronous patterns.",
      ],
      technologies: [
        "Java",
        "Data Structures & Algorithms",
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
    },
  ] as ExperienceItem[],

  achievements: [
    {
      id: "nain",
      title: "1st Place — NAIN 2.0 Graduation & Demo Day",
      context:
        "Recognized for SmartVision, an AI-powered assistive technology project, at the NAIN 2.0 program associated with the Government of Karnataka.",
      venueOrOrganizer: "IIIT Dharwad",
      statusBadge: "Patent Pending",
    },
    {
      id: "hackarena",
      title: "2nd Runner-Up — HackArena 2K26",
      context:
        "Awarded 2nd Runner-Up for rapid prototyping, real-time problem solving, and software development under competitive hackathon constraints.",
      venueOrOrganizer: "Jain College of Engineering & Technology",
    },
  ] as AchievementItem[],
};
