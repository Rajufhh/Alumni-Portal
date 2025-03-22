import json
import random
from faker import Faker
from datetime import datetime

fake = Faker()

skills = [
  "C++", "Python", "Java", "JavaScript", "TypeScript", "Go", "Rust", "C#", "Swift", "Kotlin",
  "SQL", "NoSQL", "PostgreSQL", "MongoDB", "Redis", "SQLite", "MySQL", "GraphQL", "Firebase", "Supabase",
  "HTML", "CSS", "SCSS", "Tailwind CSS", "Bootstrap", "Material UI", "Chakra UI", "Styled Components",
  "React.js", "Next.js", "Vue.js", "Nuxt.js", "Angular", "Svelte", "Solid.js", "Three.js",
  "Node.js", "Express.js", "NestJS", "Deno", "Bun", "FastAPI", "Spring Boot", "Django", "Flask",
  "REST API", "GraphQL API", "tRPC", "WebSockets", "gRPC", "OAuth", "JWT", "Session Authentication",
  "Docker", "Kubernetes", "CI/CD", "Jenkins", "GitHub Actions", "GitLab CI/CD", "Terraform", "Ansible",
  "AWS", "Google Cloud", "Azure", "Vercel", "Netlify", "Cloudflare", "Firebase Hosting", "DigitalOcean",
  "Linux", "Bash Scripting", "PowerShell", "Nginx", "Apache", "Zsh", "System Administration",
  "Git", "GitHub", "GitLab", "Bitbucket", "Version Control", "Monorepos", "Nx", "Turborepo",
  "AI/ML", "Deep Learning", "TensorFlow", "PyTorch", "Scikit-Learn", "Keras", "OpenCV", "NLP",
  "LLMs", "LangChain", "Vector Databases", "Pinecone", "FAISS", "Milvus", "ChromaDB",
  "Cybersecurity", "Ethical Hacking", "Penetration Testing", "OWASP", "Secure Coding", "Bug Bounty",
  "Blockchain", "Smart Contracts", "Solidity", "Ethereum", "Polygon", "Bitcoin", "Web3.js",
  "Embedded Systems", "Arduino", "Raspberry Pi", "IoT",
  "Computer Vision", "GANs", "Diffusion Models", "Stable Diffusion", "YOLO", "Object Detection",
  "Data Structures", "Algorithms", "Competitive Programming", "LeetCode", "Codeforces", "Hackerrank",
  "Scrum", "Agile", "Kanban", "Project Management", "JIRA", "Confluence",
  "DevOps",
  "Game Development", "Unity", "Unreal Engine", "Godot", "Game Physics", "Ray Tracing",
  "Functional Programming", "Elixir", "Haskell", "F#", "Erlang",
  "Low-Level Programming", "Assembly", "Rust for Systems", "Embedded C",
  "Metaverse", "3D Web", "A-Frame", "Babylon.js", "VR/AR Development",
  "Mobile Development", "React Native", "Flutter", "SwiftUI", "Jetpack Compose",
  "Testing", "Jest", "Mocha", "Cypress", "Playwright", "Selenium", "Postman",
  "Big Data", "Hadoop", "Apache Spark", "Kafka", "Flink",
  "Data Engineering", "ETL", "Airflow", "dbt", "Snowflake"
]


interests = [
  "Web Development", "Mobile Development", "Game Development", "Machine Learning", "Artificial Intelligence",
  "Deep Learning", "Computer Vision", "Natural Language Processing", "Cybersecurity", "Ethical Hacking",
  "Blockchain", "Smart Contracts", "Cryptography", "Quantum Computing", "Cloud Computing",
  "DevOps", "Site Reliability Engineering", "Software Architecture", "System Design", "Competitive Programming",
  "Data Structures & Algorithms", "Open Source Contribution", "Hackathons", "Startup Culture",
  "Product Management", "UI/UX Design", "Human-Computer Interaction", "Virtual Reality", "Augmented Reality",
  "Metaverse", "3D Graphics Programming", "Embedded Systems", "Internet of Things", "Edge Computing",
  "Autonomous Systems", "Robotics", "Data Science", "Big Data Analytics", "Database Engineering",
  "Distributed Systems", "Concurrency", "Parallel Computing", "Cloud-Native Development",
  "Serverless Computing", "Web3", "Decentralized Applications", "Smart Cities", "Sustainable Technology",
  "Green Computing", "Privacy & Data Protection", "AI Ethics", "Tech for Social Good",
  "Quantum Cryptography", "Bioinformatics", "Medical AI", "FinTech", "InsurTech",
  "EdTech", "RegTech", "LegalTech", "E-commerce Tech", "Streaming Technology",
  "Search Engine Optimization", "Social Media Algorithms", "Content Recommendation Systems",
  "Self-Driving Cars", "Generative AI", "AI Art & Creativity", "Large Language Models",
  "Prompt Engineering", "Multi-Agent Systems", "Edge AI", "Federated Learning",
  "Autonomous Drones", "Digital Twins", "Synthetic Data", "AI in Gaming",
  "AI in Healthcare", "AI in Finance", "AI in Education", "AI in Agriculture",
  "AR/VR in Education", "Personalized Learning", "AI for Accessibility",
  "Computational Neuroscience", "Human-Robot Interaction", "Wearable Technology",
  "Tech Entrepreneurship", "Startup Growth Strategies", "Business Intelligence",
  "Data Engineering", "ETL Pipelines", "Real-Time Data Processing", "AI Model Deployment",
  "Software Testing", "Automated Testing", "Behavior-Driven Development", "Test-Driven Development",
  "Full-Stack Development", "Low-Code/No-Code Development", "API Development",
  "Microservices Architecture", "Event-Driven Architecture", "Functional Programming",
  "Game AI", "AI-Generated Music", "Computer Music", "Algorithmic Trading",
  "High-Frequency Trading", "Smart Home Automation", "5G & Networking",
  "Edge Networking", "Secure Software Development", "Cloud Security",
  "Bug Bounty Hunting", "OSINT (Open Source Intelligence)", "Ethical AI",
  "Explainable AI", "Data Visualization", "Infographic Design", "Technical Writing",
  "Cyber-Physical Systems", "AI-Powered Search Engines", "Semantic Web",
  "Digital Forensics", "AI Hardware Optimization", "FPGA Programming",
  "Energy-Efficient Computing", "Neural Interface Technology", "Neural Networks Optimization",
  "AI Model Compression", "AI-Powered Content Generation", "Knowledge Graphs",
  "Tech Policy & Regulations", "IT Governance", "AI-Powered Cyber Defense",
  "ML Model Interpretability", "Computational Photography", "Deepfake Detection",
  "AI-Powered Journalism", "Intelligent Assistants", "Personalized AI Assistants",
  "AI-Powered Legal Systems", "Smart Contract Security", "Ethics in Autonomous Systems",
  "AI-Driven Scientific Discovery", "AI for Climate Change", "AI in Disaster Management",
  "AI in Space Exploration", "AI in Defense Technology", "AI-Powered Chatbots",
  "Real-Time AI", "Augmented Reality Commerce", "Voice User Interfaces",
  "Brain-Computer Interfaces", "AI-Generated Code", "Low-Latency Computing"
]


projects = [
  "AI Chatbot",
  "Resume Screener",
  "Code Debugger",
  "Real-Time Object Detection",
  "Face Recognition Attendance System",
  "Handwritten Digit Recognition",
  "Stock Market Prediction",
  "Plagiarism Checker",
  "Fake News Detector",
  "Sentiment Analysis on Social Media",
  "Voice Assistant",
  "Automated Image Captioning",
  "License Plate Recognition",
  "Healthcare Chatbot",
  "Disease Prediction System",
  "Personalized Learning Platform",
  "Resume Analyzer",
  "Interview Scheduler",
  "Machine Learning Model Deployment",
  "Real-Time Sign Language Translator",
  "Personal Finance Tracker",
  "Automated Expense Manager",
  "Smart Home Automation",
  "Traffic Management System",
  "Autonomous Drone Navigation",
  "IoT Smart Farming System",
  "IoT Smart Parking System",
  "Air Pollution Monitoring",
  "Water Quality Monitoring",
  "Smart Waste Management",
  "Smart Grid System",
  "Home Security System",
  "Smart Door Lock",
  "Weather Monitoring System",
  "Blockchain Secure Voting System",
  "Digital Identity Verification",
  "Supply Chain Management",
  "Land Registry System",
  "Secure File Sharing",
  "NFT Marketplace",
  "Smart Contract Auditing",
  "Decentralized Cloud Storage System",
  "Secure Chat Application",
  "Phishing Detection",
  "Intrusion Detection System",
  "Ransomware Detection",
  "Password Strength Analyzer",
  "Secure File Encryption",
  "Malware Analysis Tool",
  "Secure API Gateway",
  "Network Packet Analyzer",
  "Cloud Model Deployment Platform",
  "Serverless Application",
  "DevOps Automation System",
  "Scalable Web Application",
  "Cloud Cost Optimization",
  "Multi-Cloud Management System",
  "Real-Time Data Analytics",
  "Secure Storage System",
  "Full-Stack Task Management App",
  "Full-Stack Social Media Platform",
  "Full-Stack E-Commerce Website",
  "Learning Management System",
  "Blog Platform",
  "Personal Portfolio Website",
  "Video Streaming App",
  "Expense Tracker",
  "Online Code Compiler",
  "Weather App",
  "Smart News Aggregator",
  "Podcast Recommendation System",
  "Music Recommendation System",
  "Video Summarization Tool",
  "Automated Video Editing Tool",
  "Personal Assistant",
  "Virtual Reality Classroom",
  "Augmented Reality Shopping",
  "Text Summarization",
  "Email Spam Classifier",
  "Automated Resume Grading",
  "Emotion Detection System",
  "Facial Emotion Recognition",
  "Fake Profile Detection",
  "Online Exam Proctoring System",
  "Smart Meeting Scheduler",
  "Automated Note-Taking",
  "Document Scanner",
  "PDF Summarizer",
  "Recipe Recommendation System",
  "Smart Assistant for the Elderly",
  "Personal Diet Assistant",
  "AI Art Generator",
  "AI-Generated Music Composer",
  "Productivity Tracker",
  "Virtual Dressing Room",
  "Sports Analytics",
  "Game NPCs",
  "Game Character Animation",
  "Dynamic Game Levels",
  "Game Strategy Predictor",
  "Real-Time Multiplayer Game Server",
  "AI-Generated Game Content",
  "Game Anti-Cheat System",
  "Player Behavior Analysis",
  "AI-Generated Character Dialogues",
  "Voice Cloning System",
  "Language Translation System",
  "AI-Generated Story Writer",
  "Podcast Transcription",
  "Video Background Removal",
  "Deepfake Detection",
  "Fake Review Detection",
  "E-Learning Chatbot",
  "Smart Career Advisor",
  "Mental Health Analysis",
  "Smart Energy Management",
  "AI-Generated UI/UX Design",
  "Smart Traffic Management",
  "Parking Space Detection",
  "License Plate Recognition",
  "Self-Driving Car Simulation",
  "Smart Traffic Light System",
  "Automated Resume Parser",
  "Automated Cover Letter Generator",
  "Job Interview Question Generator",
  "Intelligent Tutoring System",
  "Data Visualization Platform",
  "Smart Calendar Scheduler",
  "Resume Enhancement Tool",
  "Smart Expense Tracking",
  "Secure Online Payment System",
  "Smart City Monitoring",
  "Secure Digital Transactions",
  "Cloud-Based Smart Chatbot",
  "Green Computing Optimization"
]


companies = [
    "Google", "Amazon", "Microsoft", "Tesla", "Netflix", "IBM", "Adobe", "Spotify", "Apple", "Meta",
    "Twitter", "LinkedIn", "Intel", "NVIDIA", "AMD", "Cisco", "Oracle", "Salesforce", "SAP", "Self-Employed",
    "Dropbox", "Slack", "GitHub", "GitLab", "Atlassian", "Red Hat", "VMware", "Dell Technologies", "HP Enterprise",
    "Palantir", "Stripe", "Square", "PayPal", "Zoom", "Snowflake", "Databricks", "MongoDB", "Twilio", "Cloudflare",
    "Accenture", "Deloitte", "PwC", "EY", "Capgemini", "SpaceX", "Epic Games", "Unity Technologies", "Autodesk",
    "Robinhood", "Coinbase", "Uber", "Lyft", "Airbnb"
]

clubs = [
    "AI Club", "CyberSec Club", "Web Dev Society", "CodeJam", "Backend Builders", "Women in Tech", 
    "Robotics Club", "Game Dev Crew", "Data Science Society", "Open Source Initiative", "IoT Innovators",
    "Blockchain Brigade", "Mobile Dev Group", "Cloud Computing Collective", "Hackathon Hub", 
    "DevOps Alliance", "UI/UX Designers", "Quantum Computing Circle", "Ethical Hacking Team", 
    "AR/VR Enthusiasts", "Systems Programming Syndicate", "Database Dynamos", "Networking Nerds", 
    "Big Data Brotherhood", "ML Mavericks", "Tech Startup Incubator", "Privacy Advocates", 
    "Crypto Coders", "Simulation Squad", "Embedded Systems Ensemble", "Compiler Crafters", 
    "Agile Avengers", "Testing Titans", "Parallel Programmers", "Distributed Systems Society", 
    "Low-Level League", "Front-End Federation", "Serverless Squad", "Microservices Meetup", 
    "NLP Nerds", "Computer Vision Collective", "Deep Learning Den", "Reinforcement Learning Realm", 
    "Real-Time Rangers", "3D Modeling Mob", "Animation Alliance", "Sound Design Syndicate", 
    "Functional Programming Fellowship", "OOP Order", "Concurrency Collective", "Async Advocates",
    "High-Performance Computing Hub", "Numerical Nerds", "Algorithm Alliance", "Data Structure Society",
    "Graph Theory Group", "Bioinformatics Band", "Fintech Forum", "Edtech Enthusiasts", "Healthtech Heroes",
    "Greentech Gang", "Space Tech Squad", "Automotive Innovators", "Smart City Syndicate", 
    "Digital Twin Devs", "Edge Computing Crew", "Fog Computing Federation", "Containerization Clan",
    "Orchestration Order", "Virtualization Vanguard", "Network Security Network", "Penetration Testers",
    "Malware Masters", "Forensics Force", "Reverse Engineering Rebels", "Formal Verification Folks",
    "Static Analysis Society", "Dynamic Analysis Division", "Code Optimizers", "Memory Managers",
    "Profiling Pros", "Benchmarking Brigade", "Load Balancing League", "Fault Tolerance Team",
    "Resilience Researchers", "Chaos Engineers", "Observability Observers", "Monitoring Mob",
    "Logging League", "Tracing Tribe", "Metrics Meetup", "SRE Syndicate", "Tech Art Alliance"
]

hobbies = [
    "coding challenges", "open-source contributing", "hackathons",
    "photography", "video editing", "music production", "sound design", "animation creation",
    "blogging", "tech vlogging", "podcasting", "writing sci-fi", "reading tech books",
    "puzzle solving", "chess", "board games", "tabletop RPGs", "strategy gaming",
    "running", "cycling", "swimming", "yoga", "weightlifting",
    "hiking", "camping", "rock climbing", "kayaking", "skiing",
    "cooking", "baking", "mixology", "gardening", "DIY electronics",
    "lego building", "model kit assembly", "drone flying", "rc car racing", "astronomy",
    "stargazing", "bird watching", "traveling", "language learning", "calligraphy",
    "painting", "drawing", "sculpting", "pottery", "knitting",
    "sewing", "woodworking", "metalworking", "car restoration", "motorcycle repair",
    "fishing", "hunting", "archery", "martial arts", "dance",
    "theater", "improv comedy", "stand-up comedy", "magic tricks", "card games",
    "collecting vintage tech", "retro gaming", "comic book collecting", "movie marathons", "tv series binging",
    "virtual reality gaming", "augmented reality exploration", "cryptocurrency trading", "stock market investing", "board game design",
    "escape room solving", "geocaching", "scuba diving", "skydiving", "bouldering",
    "parkour", "surfing", "skateboarding", "snowboarding", "sailing"
]

job_titles = [
  "Software Engineer",
  "Full-Stack Developer",
  "Backend Developer",
  "Frontend Developer",
  "Web Developer",
  "Mobile App Developer",
  "Machine Learning Engineer",
  "Data Scientist",
  "Data Analyst",
  "AI Researcher",
  "Deep Learning Engineer",
  "Computer Vision Engineer",
  "Natural Language Processing Engineer",
  "Big Data Engineer",
  "Cloud Engineer",
  "DevOps Engineer",
  "Site Reliability Engineer",
  "Cybersecurity Engineer",
  "Security Analyst",
  "Ethical Hacker",
  "Blockchain Developer",
  "Smart Contract Developer",
  "Game Developer",
  "Game AI Programmer",
  "Game Designer",
  "VR/AR Developer",
  "Embedded Systems Engineer",
  "IoT Engineer",
  "Automation Engineer",
  "Robotics Engineer",
  "Backend Architect",
  "Solution Architect",
  "Software Architect",
  "Product Manager (Tech)",
  "Technical Program Manager",
  "UI/UX Designer",
  "Human-Computer Interaction Specialist",
  "Database Administrator",
  "Network Engineer",
  "IT Support Engineer",
  "System Administrator",
  "Quality Assurance Engineer",
  "Test Automation Engineer",
  "Performance Engineer",
  "Cloud Security Engineer",
  "Cloud Solutions Architect",
  "Cyber Threat Analyst",
  "Security Software Engineer",
  "Incident Response Analyst",
  "Penetration Tester",
  "Digital Forensics Expert",
  "Algorithm Engineer",
  "Quantitative Analyst",
  "Financial Data Scientist",
  "Software Consultant",
  "AI Consultant",
  "Research Scientist (AI/ML)",
  "Bioinformatics Scientist",
  "Computational Biologist",
  "E-Learning Engineer",
  "Augmented Reality Developer",
  "Autonomous Vehicle Engineer",
  "Self-Driving Car Engineer",
  "AI Hardware Engineer",
  "AI Chip Designer",
  "Embedded AI Engineer",
  "Cloud AI Engineer",
  "Speech Recognition Engineer",
  "Video Analytics Engineer",
  "Chatbot Developer",
  "Recommender System Engineer",
  "Predictive Analytics Engineer",
  "Search Engineer",
  "Healthcare Data Scientist",
  "Legal Tech Specialist",
  "FinTech Engineer",
  "Marketing Analyst",
  "E-Commerce Data Scientist",
  "Fraud Detection Specialist",
  "Social Media Data Analyst",
  "Content Creator",
  "Music Composer",
  "Visual Effects Engineer",
  "Conversational AI Engineer",
  "Journalism Specialist",
  "Robotics Engineer",
  "Smart Traffic Engineer",
  "Smart City Engineer",
  "Energy Management Engineer",
  "Environment Monitoring Specialist",
  "Smart Farming Engineer",
  "Weather Prediction Specialist",
  "Healthcare Chatbot Developer",
  "Smart Home Engineer",
  "Virtual Reality Designer",
  "Personal Trainer",
  "Mental Health Analyst",
  "Resume Screener",
  "Job Recommendation Engineer",
  "Career Coach",
  "Skill Assessment Developer",
  "Personal Finance Assistant",
  "Productivity Consultant",
  "Meeting Scheduler",
  "Travel Assistant",
  "Smart News Aggregator",
  "Automated Legal Researcher",
  "Code Auto-Completion Engineer",
  "Secure Authentication Developer",
  "Digital Twin Engineer",
  "Process Optimization Engineer",
  "Business Intelligence Analyst",
  "Retail Analytics Specialist",
  "Logistics Optimization Engineer",
  "Demand Forecasting Analyst",
  "Customer Experience Engineer",
  "Smart Advertising Specialist",
  "Video Analytics Engineer",
  "Sports Performance Analyst",
  "Content Moderation Specialist",
  "Video Game AI Developer",
  "Game Level Designer",
  "Sentiment Analysis Engineer",
  "Chat Moderation Specialist",
  "Market Trend Analyst",
  "Political Analytics Specialist"
]


skill_mappings = {
    "Java": {
        "interests": ["web dev", "backend dev", "software architecture", "microservices", "object-oriented design"],
        "clubs": ["Backend Builders", "Web Dev Society", "CodeJam", "Microservices Meetup"],
        "projects": ["Java REST API", "Spring Boot CRUD", "E-commerce Prototype", "Maven Dependency Manager", "Ant Build Script"]
    },
    "Python": {
        "interests": ["AI", "data science", "web dev", "machine learning", "big data"],
        "clubs": ["AI Club", "Data Science Society", "Web Dev Society", "ML Mavericks", "Big Data Brotherhood"],
        "projects": ["AI Chatbot", "Django Blog", "Pandas Data Cleaner", "TensorFlow Image Classifier", "Hadoop Data Pipeline"]
    },
    "JavaScript": {
        "interests": ["web dev", "full-stack", "front-end dev", "event-driven programming", "asynchronous programming"],
        "clubs": ["Web Dev Society", "Front-End Federation", "CodeJam", "Async Advocates"],
        "projects": ["MERN Stack App", "Node.js Chat App", "Express.js Auth System", "Jest Unit Tests", "NPM Package"]
    },
    "React": {
        "interests": ["web dev", "full-stack", "front-end dev", "UI/UX"],
        "clubs": ["Web Dev Society", "Front-End Federation", "UI/UX Designers", "CodeJam"],
        "projects": ["React Portfolio", "MERN Stack App", "E-commerce Prototype", "Webpack Module Bundler"]
    },
    "Node.js": {
        "interests": ["web dev", "full-stack", "backend dev", "microservices"],
        "clubs": ["Web Dev Society", "Backend Builders", "Microservices Meetup", "CodeJam"],
        "projects": ["Node.js Chat App", "MERN Stack App", "Express.js Auth System", "FastAPI Microservice"]
    },
    "MongoDB": {
        "interests": ["web dev", "full-stack", "databases", "big data"],
        "clubs": ["Web Dev Society", "Database Dynamos", "Big Data Brotherhood"],
        "projects": ["MERN Stack App", "Node.js Chat App", "Cassandra NoSQL Store"]
    },
    "SQL": {
        "interests": ["data science", "databases", "big data", "data visualization"],
        "clubs": ["Data Science Society", "Database Dynamos", "Big Data Brotherhood"],
        "projects": ["SQL Analytics Tool", "PostgreSQL Inventory System", "Redshift ETL"]
    },
    "AWS": {
        "interests": ["cloud computing", "DevOps", "serverless", "microservices"],
        "clubs": ["Cloud Computing Collective", "DevOps Alliance", "Serverless Squad", "Microservices Meetup"],
        "projects": ["AWS Lambda Serverless", "Dockerized Microservices", "Terraform Infra", "GCP Cloud Function"]
    },
    "TensorFlow": {
        "interests": ["AI", "machine learning", "deep learning", "computer vision"],
        "clubs": ["AI Club", "ML Mavericks", "Deep Learning Den", "Computer Vision Collective"],
        "projects": ["TensorFlow Image Classifier", "ML Fraud Detection", "AI Chatbot", "PyTorch Model Trainer"]
    },
    "Django": {
        "interests": ["web dev", "backend dev", "software architecture"],
        "clubs": ["Web Dev Society", "Backend Builders", "CodeJam"],
        "projects": ["Django Blog", "E-commerce Prototype", "FastAPI Microservice"]
    },
    "Spring Boot": {
        "interests": ["web dev", "backend dev", "microservices", "software architecture"],
        "clubs": ["Backend Builders", "Web Dev Society", "Microservices Meetup"],
        "projects": ["Spring Boot CRUD", "Java REST API", "E-commerce Prototype"]
    },
    "C++": {
        "interests": ["systems programming", "game dev", "low-level programming", "high-performance computing"],
        "clubs": ["Systems Programming Syndicate", "Game Dev Crew", "High-Performance Computing Hub"],
        "projects": ["C++ Game Engine", "Rust CLI Tool", "OpenGL Renderer"]
    },
    "C#": {
        "interests": ["game dev", "software architecture", "object-oriented design"],
        "clubs": ["Game Dev Crew", "CodeJam", "OOP Order"],
        "projects": ["C# Desktop App", "Unity 3D Game", "E-commerce Prototype"]
    },
    "Ruby": {
        "interests": ["web dev", "backend dev"],
        "clubs": ["Web Dev Society", "Backend Builders"],
        "projects": ["Ruby on Rails Store", "Django Blog"]
    },
    "PHP": {
        "interests": ["web dev", "backend dev"],
        "clubs": ["Web Dev Society", "Backend Builders"],
        "projects": ["PHP Forum", "E-commerce Prototype"]
    },
    "Go": {
        "interests": ["backend dev", "performance optimization", "distributed systems"],
        "clubs": ["Backend Builders", "Distributed Systems Society"],
        "projects": ["Go Web Server", "Dockerized Microservices"]
    },
    "Rust": {
        "interests": ["systems programming", "low-level programming", "performance optimization"],
        "clubs": ["Systems Programming Syndicate", "Low-Level League"],
        "projects": ["Rust CLI Tool", "C++ Game Engine"]
    },
    "Kotlin": {
        "interests": ["mobile dev", "software architecture"],
        "clubs": ["Mobile Dev Group", "CodeJam"],
        "projects": ["Kotlin Android App", "Flutter Mobile App"]
    },
    "Swift": {
        "interests": ["mobile dev", "UI/UX"],
        "clubs": ["Mobile Dev Group", "UI/UX Designers"],
        "projects": ["Swift iOS Game", "Flutter Mobile App"]
    },
    "TypeScript": {
        "interests": ["web dev", "full-stack", "front-end dev"],
        "clubs": ["Web Dev Society", "Front-End Federation"],
        "projects": ["TypeScript Type Checker", "React Portfolio"]
    },
    "HTML": {
        "interests": ["web dev", "front-end dev", "UI/UX"],
        "clubs": ["Web Dev Society", "Front-End Federation", "UI/UX Designers"],
        "projects": ["React Portfolio", "Sass UI Kit"]
    },
    "CSS": {
        "interests": ["web dev", "front-end dev", "UI/UX"],
        "clubs": ["Web Dev Society", "Front-End Federation", "UI/UX Designers"],
        "projects": ["Sass UI Kit", "React Portfolio"]
    },
    "Sass": {
        "interests": ["web dev", "front-end dev", "UI/UX"],
        "clubs": ["Web Dev Society", "Front-End Federation", "UI/UX Designers"],
        "projects": ["Sass UI Kit", "React Portfolio"]
    },
    "GraphQL": {
        "interests": ["web dev", "API design", "microservices"],
        "clubs": ["Web Dev Society", "Microservices Meetup"],
        "projects": ["GraphQL API", "Node.js Chat App"]
    },
    "PostgreSQL": {
        "interests": ["databases", "backend dev", "big data"],
        "clubs": ["Database Dynamos", "Big Data Brotherhood"],
        "projects": ["PostgreSQL Inventory System", "SQL Analytics Tool"]
    },
    "MySQL": {
        "interests": ["databases", "backend dev"],
        "clubs": ["Database Dynamos", "Web Dev Society"],
        "projects": ["SQL Analytics Tool", "E-commerce Prototype"]
    },
    "Redis": {
        "interests": ["databases", "performance optimization"],
        "clubs": ["Database Dynamos", "CodeJam"],
        "projects": ["Redis Cache Optimizer", "Node.js Chat App"]
    },
    "Docker": {
        "interests": ["DevOps", "microservices", "containerization"],
        "clubs": ["DevOps Alliance", "Containerization Clan", "Microservices Meetup"],
        "projects": ["Dockerized Microservices", "Kubernetes Cluster Manager"]
    },
    "Kubernetes": {
        "interests": ["DevOps", "microservices", "orchestration", "cloud computing"],
        "clubs": ["DevOps Alliance", "Orchestration Order", "Cloud Computing Collective"],
        "projects": ["Kubernetes Cluster Manager", "Dockerized Microservices"]
    },
    "Git": {
        "interests": ["open source", "DevOps"],
        "clubs": ["Open Source Initiative", "DevOps Alliance"],
        "projects": ["Git Workflow Automation", "Jenkins CI/CD Pipeline"]
    },
    "Jenkins": {
        "interests": ["DevOps", "testing", "agile methodology"],
        "clubs": ["DevOps Alliance", "Testing Titans"],
        "projects": ["Jenkins CI/CD Pipeline", "Git Workflow Automation"]
    },
    "Terraform": {
        "interests": ["DevOps", "cloud computing", "infrastructure as code"],
        "clubs": ["DevOps Alliance", "Cloud Computing Collective"],
        "projects": ["Terraform Infra", "AWS Lambda Serverless"]
    },
    "Ansible": {
        "interests": ["DevOps", "cloud computing", "automation"],
        "clubs": ["DevOps Alliance", "Cloud Computing Collective"],
        "projects": ["Ansible Playbook", "Terraform Infra"]
    },
    "Linux": {
        "interests": ["systems programming", "DevOps"],
        "clubs": ["Systems Programming Syndicate", "DevOps Alliance"],
        "projects": ["Linux Kernel Module", "Bash System Monitor"]
    },
    "Bash": {
        "interests": ["systems programming", "DevOps", "automation"],
        "clubs": ["Systems Programming Syndicate", "DevOps Alliance"],
        "projects": ["Bash System Monitor", "Linux Kernel Module"]
    },
    "Perl": {
        "interests": ["systems programming", "scripting"],
        "clubs": ["Systems Programming Syndicate"],
        "projects": ["Perl Text Parser"]
    },
    "Scala": {
        "interests": ["big data", "distributed systems", "functional programming"],
        "clubs": ["Big Data Brotherhood", "Distributed Systems Society", "Functional Programming Fellowship"],
        "projects": ["Scala Spark Processor", "Hadoop Data Pipeline"]
    },
    "Hadoop": {
        "interests": ["big data", "data science"],
        "clubs": ["Big Data Brotherhood", "Data Science Society"],
        "projects": ["Hadoop Data Pipeline", "Scala Spark Processor"]
    },
    "Spark": {
        "interests": ["big data", "data science", "distributed systems"],
        "clubs": ["Big Data Brotherhood", "Data Science Society", "Distributed Systems Society"],
        "projects": ["Scala Spark Processor", "Hadoop Data Pipeline"]
    },
    "Pandas": {
        "interests": ["data science", "data visualization", "big data"],
        "clubs": ["Data Science Society", "Big Data Brotherhood"],
        "projects": ["Pandas Data Cleaner", "SQL Analytics Tool"]
    },
    "NumPy": {
        "interests": ["data science", "scientific computing", "numerical analysis"],
        "clubs": ["Data Science Society", "Numerical Nerds"],
        "projects": ["NumPy Matrix Solver", "Pandas Data Cleaner"]
    },
    "SciPy": {
        "interests": ["data science", "scientific computing", "numerical analysis"],
        "clubs": ["Data Science Society", "Numerical Nerds"],
        "projects": ["NumPy Matrix Solver", "Julia Numerical Solver"]
    },
    "Matplotlib": {
        "interests": ["data science", "data visualization"],
        "clubs": ["Data Science Society"],
        "projects": ["D3.js Chart Generator", "Tableau Dashboard"]
    },
    "Seaborn": {
        "interests": ["data science", "data visualization"],
        "clubs": ["Data Science Society"],
        "projects": ["Tableau Dashboard", "Power BI Report"]
    },
    "R": {
        "interests": ["data science", "data visualization", "statistical analysis"],
        "clubs": ["Data Science Society"],
        "projects": ["R Data Visualizer", "Tableau Dashboard"]
    },
    "Flutter": {
        "interests": ["mobile dev", "UI/UX"],
        "clubs": ["Mobile Dev Group", "UI/UX Designers"],
        "projects": ["Flutter Mobile App", "Kotlin Android App"]
    },
    "Angular": {
        "interests": ["web dev", "front-end dev"],
        "clubs": ["Web Dev Society", "Front-End Federation"],
        "projects": ["Angular Dashboard", "React Portfolio"]
    },
    "Vue.js": {
        "interests": ["web dev", "front-end dev"],
        "clubs": ["Web Dev Society", "Front-End Federation"],
        "projects": ["Vue.js Todo List", "React Portfolio"]
    },
    "Express.js": {
        "interests": ["web dev", "backend dev"],
        "clubs": ["Web Dev Society", "Backend Builders"],
        "projects": ["Express.js Auth System", "Node.js Chat App"]
    },
    "Firebase": {
        "interests": ["web dev", "mobile dev", "serverless"],
        "clubs": ["Web Dev Society", "Mobile Dev Group", "Serverless Squad"],
        "projects": ["Firebase Realtime DB", "Flutter Mobile App"]
    },
    "Elasticsearch": {
        "interests": ["databases", "search engines", "big data"],
        "clubs": ["Database Dynamos", "Big Data Brotherhood"],
        "projects": ["Elasticsearch Search Engine", "Redis Cache Optimizer"]
    },
    "Kafka": {
        "interests": ["distributed systems", "big data", "messaging"],
        "clubs": ["Distributed Systems Society", "Big Data Brotherhood"],
        "projects": ["Kafka Message Queue", "RabbitMQ Worker"]
    },
    "RabbitMQ": {
        "interests": ["distributed systems", "messaging"],
        "clubs": ["Distributed Systems Society"],
        "projects": ["RabbitMQ Worker", "Kafka Message Queue"]
    },
    "Nginx": {
        "interests": ["web dev", "performance optimization", "load balancing"],
        "clubs": ["Web Dev Society", "Load Balancing League"],
        "projects": ["Nginx Load Balancer", "Apache Web Server"]
    },
    "Apache": {
        "interests": ["web dev", "backend dev"],
        "clubs": ["Web Dev Society", "Backend Builders"],
        "projects": ["Apache Web Server", "Nginx Load Balancer"]
    },
    "Tomcat": {
        "interests": ["web dev", "backend dev"],
        "clubs": ["Web Dev Society", "Backend Builders"],
        "projects": ["Java REST API", "Spring Boot CRUD"]
    },
    "GCP": {
        "interests": ["cloud computing", "DevOps"],
        "clubs": ["Cloud Computing Collective", "DevOps Alliance"],
        "projects": ["GCP Cloud Function", "AWS Lambda Serverless"]
    },
    "Azure": {
        "interests": ["cloud computing", "DevOps"],
        "clubs": ["Cloud Computing Collective", "DevOps Alliance"],
        "projects": ["Azure Data Pipeline", "GCP Cloud Function"]
    },
    "Heroku": {
        "interests": ["cloud computing", "web dev"],
        "clubs": ["Cloud Computing Collective", "Web Dev Society"],
        "projects": ["Heroku Deployment", "Netlify Static Site"]
    },
    "Netlify": {
        "interests": ["web dev", "front-end dev"],
        "clubs": ["Web Dev Society", "Front-End Federation"],
        "projects": ["Netlify Static Site", "React Portfolio"]
    },
    "Webpack": {
        "interests": ["web dev", "front-end dev"],
        "clubs": ["Web Dev Society", "Front-End Federation"],
        "projects": ["Webpack Module Bundler", "React Portfolio"]
    },
    "Babel": {
        "interests": ["web dev", "front-end dev"],
        "clubs": ["Web Dev Society", "Front-End Federation"],
        "projects": ["Webpack Module Bundler", "TypeScript Type Checker"]
    },
    "Jest": {
        "interests": ["testing", "web dev"],
        "clubs": ["Testing Titans", "Web Dev Society"],
        "projects": ["Jest Unit Tests", "Cypress E2E Tests"]
    },
    "Mocha": {
        "interests": ["testing", "web dev"],
        "clubs": ["Testing Titans", "Web Dev Society"],
        "projects": ["Jest Unit Tests", "Mocha Tests"]
    },
    "Chai": {
        "interests": ["testing", "web dev"],
        "clubs": ["Testing Titans", "Web Dev Society"],
        "projects": ["Jest Unit Tests", "Chai Assertions"]
    },
    "Cypress": {
        "interests": ["testing", "web dev"],
        "clubs": ["Testing Titans", "Web Dev Society"],
        "projects": ["Cypress E2E Tests", "Selenium Web Scraper"]
    },
    "Selenium": {
        "interests": ["testing", "automation"],
        "clubs": ["Testing Titans"],
        "projects": ["Selenium Web Scraper", "Cypress E2E Tests"]
    },
    "Puppeteer": {
        "interests": ["testing", "automation"],
        "clubs": ["Testing Titans"],
        "projects": ["Puppeteer Automation", "Selenium Web Scraper"]
    },
    "JIRA": {
        "interests": ["project management", "agile methodology"],
        "clubs": ["Agile Avengers"],
        "projects": ["JIRA Integration Tool", "Trello Task Tracker"]
    },
    "Confluence": {
        "interests": ["project management"],
        "clubs": ["Agile Avengers"],
        "projects": ["Confluence Wiki Tool", "JIRA Integration Tool"]
    },
    "Trello": {
        "interests": ["project management", "agile methodology"],
        "clubs": ["Agile Avengers"],
        "projects": ["Trello Task Tracker", "JIRA Integration Tool"]
    },
    "Slack": {
        "interests": ["project management", "team collaboration"],
        "clubs": ["CodeJam"],
        "projects": ["Slack Bot", "Trello Task Tracker"]
    },
    "Figma": {
        "interests": ["UI/UX", "design"],
        "clubs": ["UI/UX Designers"],
        "projects": ["Figma Plugin", "Adobe XD Prototype"]
    },
    "Sketch": {
        "interests": ["UI/UX", "design"],
        "clubs": ["UI/UX Designers"],
        "projects": ["Figma Plugin", "Sketch Designs"]
    },
    "Adobe XD": {
        "interests": ["UI/UX", "design"],
        "clubs": ["UI/UX Designers"],
        "projects": ["Adobe XD Prototype", "Figma Plugin"]
    },
    "Photoshop": {
        "interests": ["UI/UX", "design"],
        "clubs": ["UI/UX Designers", "Tech Art Alliance"],
        "projects": ["Photoshop UI Mockup", "Illustrator Vector Art"]
    },
    "Illustrator": {
        "interests": ["UI/UX", "design"],
        "clubs": ["UI/UX Designers", "Tech Art Alliance"],
        "projects": ["Illustrator Vector Art", "Photoshop UI Mockup"]
    },
    "Blender": {
        "interests": ["3D modeling", "animation", "game dev"],
        "clubs": ["3D Modeling Mob", "Animation Alliance", "Game Dev Crew"],
        "projects": ["Blender 3D Model", "Unity 3D Game"]
    },
    "Unity": {
        "interests": ["game dev", "AR/VR", "3D modeling"],
        "clubs": ["Game Dev Crew", "AR/VR Enthusiasts"],
        "projects": ["Unity 3D Game", "Blender 3D Model"]
    },
    "Unreal Engine": {
        "interests": ["game dev", "AR/VR", "3D modeling"],
        "clubs": ["Game Dev Crew", "AR/VR Enthusiasts"],
        "projects": ["Unreal Engine Shooter", "Unity 3D Game"]
    },
    "OpenGL": {
        "interests": ["game dev", "3D modeling"],
        "clubs": ["Game Dev Crew", "3D Modeling Mob"],
        "projects": ["OpenGL Renderer", "WebGL Animation"]
    },
    "WebGL": {
        "interests": ["web dev", "3D modeling"],
        "clubs": ["Web Dev Society", "3D Modeling Mob"],
        "projects": ["WebGL Animation", "Three.js 3D Visualizer"]
    },
    "Three.js": {
        "interests": ["web dev", "3D modeling", "data visualization"],
        "clubs": ["Web Dev Society", "3D Modeling Mob"],
        "projects": ["Three.js 3D Visualizer", "WebGL Animation"]
    },
    "D3.js": {
        "interests": ["data visualization", "web dev"],
        "clubs": ["Data Science Society", "Web Dev Society"],
        "projects": ["D3.js Chart Generator", "Tableau Dashboard"]
    },
    "Tableau": {
        "interests": ["data visualization", "data science"],
        "clubs": ["Data Science Society"],
        "projects": ["Tableau Dashboard", "Power BI Report"]
    },
    "Power BI": {
        "interests": ["data visualization", "data science"],
        "clubs": ["Data Science Society"],
        "projects": ["Power BI Report", "Tableau Dashboard"]
    },
    "Qlik": {
        "interests": ["data visualization", "data science"],
        "clubs": ["Data Science Society"],
        "projects": ["Qlik Analytics", "Tableau Dashboard"]
    },
    "Looker": {
        "interests": ["data visualization", "data science"],
        "clubs": ["Data Science Society"],
        "projects": ["Looker Dashboard", "Power BI Report"]
    },
    "Snowflake": {
        "interests": ["big data", "databases", "cloud computing"],
        "clubs": ["Big Data Brotherhood", "Database Dynamos", "Cloud Computing Collective"],
        "projects": ["Snowflake Data Warehouse", "BigQuery Analytics"]
    },
    "BigQuery": {
        "interests": ["big data", "data science", "cloud computing"],
        "clubs": ["Big Data Brotherhood", "Data Science Society", "Cloud Computing Collective"],
        "projects": ["BigQuery Analytics", "Snowflake Data Warehouse"]
    },
    "Redshift": {
        "interests": ["big data", "data science", "cloud computing"],
        "clubs": ["Big Data Brotherhood", "Data Science Society", "Cloud Computing Collective"],
        "projects": ["Redshift ETL", "BigQuery Analytics"]
    },
    "Cassandra": {
        "interests": ["databases", "big data"],
        "clubs": ["Database Dynamos", "Big Data Brotherhood"],
        "projects": ["Cassandra NoSQL Store", "MongoDB App"]
    },
    "Neo4j": {
        "interests": ["databases", "graph theory"],
        "clubs": ["Database Dynamos", "Graph Theory Group"],
        "projects": ["Neo4j Graph DB", "Cassandra NoSQL Store"]
    },
    "MariaDB": {
        "interests": ["databases", "backend dev"],
        "clubs": ["Database Dynamos", "Backend Builders"],
        "projects": ["SQL Analytics Tool", "PostgreSQL Inventory System"]
    },
    "SQLite": {
        "interests": ["databases", "mobile dev"],
        "clubs": ["Database Dynamos", "Mobile Dev Group"],
        "projects": ["Flutter Mobile App", "SQL Analytics Tool"]
    },
    "Oracle DB": {
        "interests": ["databases", "big data"],
        "clubs": ["Database Dynamos", "Big Data Brotherhood"],
        "projects": ["Oracle DB Integration", "Redshift ETL"]
    },
    "DB2": {
        "interests": ["databases", "big data"],
        "clubs": ["Database Dynamos", "Big Data Brotherhood"],
        "projects": ["DB2 Data Store", "Redshift ETL"]
    },
    "Prometheus": {
        "interests": ["monitoring", "DevOps", "observability"],
        "clubs": ["Monitoring Mob", "DevOps Alliance", "Observability Observers"],
        "projects": ["Prometheus Monitoring", "Grafana Dashboard"]
    },
    "Grafana": {
        "interests": ["monitoring", "data visualization", "observability"],
        "clubs": ["Monitoring Mob", "Data Science Society", "Observability Observers"],
        "projects": ["Grafana Dashboard", "Prometheus Monitoring"]
    },
    "Nagios": {
        "interests": ["monitoring", "systems programming"],
        "clubs": ["Monitoring Mob", "Systems Programming Syndicate"],
        "projects": ["Nagios System Monitor", "Zabbix Alert System"]
    },
    "Zabbix": {
        "interests": ["monitoring", "systems programming"],
        "clubs": ["Monitoring Mob", "Systems Programming Syndicate"],
        "projects": ["Zabbix Alert System", "Nagios System Monitor"]
    },
    "Splunk": {
        "interests": ["monitoring", "logging"],
        "clubs": ["Monitoring Mob", "Logging League"],
        "projects": ["Splunk Log Analyzer", "Logstash Pipeline"]
    },
    "Logstash": {
        "interests": ["logging", "DevOps"],
        "clubs": ["Logging League", "DevOps Alliance"],
        "projects": ["Logstash Pipeline", "Splunk Log Analyzer"]
    },
    "Kibana": {
        "interests": ["logging", "data visualization"],
        "clubs": ["Logging League", "Data Science Society"],
        "projects": ["Kibana Dashboard", "Grafana Dashboard"]
    },
    "ETL": {
        "interests": ["data science", "big data"],
        "clubs": ["Data Science Society", "Big Data Brotherhood"],
        "projects": ["Redshift ETL", "Airflow Workflow"]
    },
    "Airflow": {
        "interests": ["data science", "big data", "automation"],
        "clubs": ["Data Science Society", "Big Data Brotherhood"],
        "projects": ["Airflow Workflow", "Luigi Data Pipeline"]
    },
    "Luigi": {
        "interests": ["data science", "big data", "automation"],
        "clubs": ["Data Science Society", "Big Data Brotherhood"],
        "projects": ["Luigi Data Pipeline", "Airflow Workflow"]
    },
    "Celery": {
        "interests": ["backend dev", "distributed systems", "automation"],
        "clubs": ["Backend Builders", "Distributed Systems Society"],
        "projects": ["Celery Task Queue", "RabbitMQ Worker"]
    },
    "FastAPI": {
        "interests": ["web dev", "backend dev", "API design"],
        "clubs": ["Web Dev Society", "Backend Builders"],
        "projects": ["FastAPI Microservice", "Express.js Auth System"]
    },
    "Flask": {
        "interests": ["web dev", "backend dev"],
        "clubs": ["Web Dev Society", "Backend Builders"],
        "projects": ["Flask API", "Django Blog"]
    },
    "Bottle": {
        "interests": ["web dev", "backend dev"],
        "clubs": ["Web Dev Society", "Backend Builders"],
        "projects": ["Flask API", "FastAPI Microservice"]
    },
    "PyTorch": {
        "interests": ["AI", "machine learning", "deep learning"],
        "clubs": ["AI Club", "ML Mavericks", "Deep Learning Den"],
        "projects": ["PyTorch Model Trainer", "TensorFlow Image Classifier"]
    },
    "Keras": {
        "interests": ["AI", "machine learning"],
        "clubs": ["AI Club", "ML Mavericks"],
        "projects": ["Keras Classifier", "TensorFlow Image Classifier"]
    },
    "Scikit-learn": {
        "interests": ["data science", "machine learning"],
        "clubs": ["Data Science Society", "ML Mavericks"],
        "projects": ["Scikit-learn Predictor", "Pandas Data Cleaner"]
    },
    "XGBoost": {
        "interests": ["machine learning", "data science"],
        "clubs": ["ML Mavericks", "Data Science Society"],
        "projects": ["XGBoost Regressor", "LightGBM Classifier"]
    },
    "LightGBM": {
        "interests": ["machine learning", "data science"],
        "clubs": ["ML Mavericks", "Data Science Society"],
        "projects": ["LightGBM Classifier", "XGBoost Regressor"]
    },
    "CatBoost": {
        "interests": ["machine learning", "data science"],
        "clubs": ["ML Mavericks", "Data Science Society"],
        "projects": ["CatBoost Model", "XGBoost Regressor"]
    },
    "OpenCV": {
        "interests": ["computer vision", "AI"],
        "clubs": ["Computer Vision Collective", "AI Club"],
        "projects": ["OpenCV Face Detector", "TensorFlow Image Classifier"]
    },
    "NLTK": {
        "interests": ["natural language processing", "AI"],
        "clubs": ["NLP Nerds", "AI Club"],
        "projects": ["NLTK Sentiment Analyzer", "Hugging Face NLP"]
    },
    "SpaCy": {
        "interests": ["natural language processing", "AI"],
        "clubs": ["NLP Nerds", "AI Club"],
        "projects": ["SpaCy NLP Tool", "NLTK Sentiment Analyzer"]
    },
    "Hugging Face": {
        "interests": ["natural language processing", "AI", "machine learning"],
        "clubs": ["NLP Nerds", "AI Club", "ML Mavericks"],
        "projects": ["Hugging Face NLP", "NLTK Sentiment Analyzer"]
    },
    "Golang": {
        "interests": ["backend dev", "performance optimization"],
        "clubs": ["Backend Builders"],
        "projects": ["Go Web Server", "Rust CLI Tool"]
    },
    "Erlang": {
        "interests": ["distributed systems", "concurrency"],
        "clubs": ["Distributed Systems Society", "Concurrency Collective"],
        "projects": ["Erlang Concurrent Server", "RabbitMQ Worker"]
    },
    "Elixir": {
        "interests": ["web dev", "concurrency"],
        "clubs": ["Web Dev Society", "Concurrency Collective"],
        "projects": ["Elixir Phoenix App", "Erlang Concurrent Server"]
    },
    "Dart": {
        "interests": ["mobile dev", "web dev"],
        "clubs": ["Mobile Dev Group", "Web Dev Society"],
        "projects": ["Dart Game Logic", "Flutter Mobile App"]
    },
    "Objective-C": {
        "interests": ["mobile dev"],
        "clubs": ["Mobile Dev Group"],
        "projects": ["Objective-C iOS Widget", "Swift iOS Game"]
    },
    "Assembly": {
        "interests": ["low-level programming", "systems programming"],
        "clubs": ["Low-Level League", "Systems Programming Syndicate"],
        "projects": ["Assembly Bootloader", "Rust CLI Tool"]
    },
    "VHDL": {
        "interests": ["embedded systems", "hardware"],
        "clubs": ["Embedded Systems Ensemble"],
        "projects": ["VHDL FPGA Design", "Verilog CPU Simulator"]
    },
    "Verilog": {
        "interests": ["embedded systems", "hardware"],
        "clubs": ["Embedded Systems Ensemble"],
        "projects": ["Verilog CPU Simulator", "VHDL FPGA Design"]
    },
    "MATLAB": {
        "interests": ["scientific computing", "numerical analysis"],
        "clubs": ["Numerical Nerds"],
        "projects": ["MATLAB Signal Processor", "Julia Numerical Solver"]
    },
    "Octave": {
        "interests": ["scientific computing", "numerical analysis"],
        "clubs": ["Numerical Nerds"],
        "projects": ["Octave Matrix Calculator", "MATLAB Signal Processor"]
    },
    "Julia": {
        "interests": ["scientific computing", "data science"],
        "clubs": ["Numerical Nerds", "Data Science Society"],
        "projects": ["Julia Numerical Solver", "NumPy Matrix Solver"]
    },
    "Groovy": {
        "interests": ["web dev", "automation"],
        "clubs": ["Web Dev Society"],
        "projects": ["Groovy Script", "Jenkins CI/CD Pipeline"]
    },
    "Crystal": {
        "interests": ["web dev", "performance optimization"],
        "clubs": ["Web Dev Society"],
        "projects": ["Crystal Web App", "Go Web Server"]
    },
    "Nim": {
        "interests": ["systems programming", "performance optimization"],
        "clubs": ["Systems Programming Syndicate"],
        "projects": ["Nim System Tool", "Rust CLI Tool"]
    },
    "Haskell": {
        "interests": ["functional programming"],
        "clubs": ["Functional Programming Fellowship"],
        "projects": ["Haskell Functional Parser", "Clojure Data Processor"]
    },
    "OCaml": {
        "interests": ["functional programming"],
        "clubs": ["Functional Programming Fellowship"],
        "projects": ["OCaml Functional Code", "Haskell Functional Parser"]
    },
    "F#": {
        "interests": ["functional programming"],
        "clubs": ["Functional Programming Fellowship"],
        "projects": ["F# Functional App", "Haskell Functional Parser"]
    },
    "Clojure": {
        "interests": ["functional programming", "data processing"],
        "clubs": ["Functional Programming Fellowship"],
        "projects": ["Clojure Data Processor", "Haskell Functional Parser"]
    },
    "Scheme": {
        "interests": ["functional programming"],
        "clubs": ["Functional Programming Fellowship"],
        "projects": ["Scheme Interpreter", "Clojure Data Processor"]
    },
    "Lisp": {
        "interests": ["functional programming"],
        "clubs": ["Functional Programming Fellowship"],
        "projects": ["Lisp AI Tool", "Clojure Data Processor"]
    },
    "Prolog": {
        "interests": ["AI", "logic programming"],
        "clubs": ["AI Club"],
        "projects": ["Prolog Logic System", "AI Chatbot"]
    },
    "Solidity": {
        "interests": ["blockchain"],
        "clubs": ["Blockchain Brigade"],
        "projects": ["Solidity Smart Contract", "Blockchain Wallet"]
    },
    "Vyper": {
        "interests": ["blockchain"],
        "clubs": ["Blockchain Brigade"],
        "projects": ["Vyper Smart Contract", "Blockchain Wallet"]
    },
    "WebAssembly": {
        "interests": ["web dev", "performance optimization"],
        "clubs": ["Web Dev Society"],
        "projects": ["WebAssembly Converter", "Rust CLI Tool"]
    },
    "CMake": {
        "interests": ["systems programming", "build systems"],
        "clubs": ["Systems Programming Syndicate"],
        "projects": ["CMake Build System", "Make Build Script"]
    },
    "Make": {
        "interests": ["systems programming", "build systems"],
        "clubs": ["Systems Programming Syndicate"],
        "projects": ["CMake Build System", "Make Build Script"]
    },
    "Gradle": {
        "interests": ["build systems", "mobile dev"],
        "clubs": ["Mobile Dev Group"],
        "projects": ["Gradle Build Tool", "Maven Dependency Manager"]
    },
    "Maven": {
        "interests": ["build systems", "web dev"],
        "clubs": ["Web Dev Society"],
        "projects": ["Maven Dependency Manager", "Gradle Build Tool"]
    },
    "SBT": {
        "interests": ["build systems", "big data"],
        "clubs": ["Big Data Brotherhood"],
        "projects": ["SBT Scala Project", "Scala Spark Processor"]
    },
    "Ant": {
        "interests": ["build systems", "web dev"],
        "clubs": ["Web Dev Society"],
        "projects": ["Ant Build Script", "Maven Dependency Manager"]
    },
    "NPM": {
        "interests": ["web dev", "front-end dev"],
        "clubs": ["Web Dev Society", "Front-End Federation"],
        "projects": ["NPM Package", "Yarn Package Manager"]
    },
    "Yarn": {
        "interests": ["web dev", "front-end dev"],
        "clubs": ["Web Dev Society", "Front-End Federation"],
        "projects": ["Yarn Package Manager", "NPM Package"]
    },
    "PNPM": {
        "interests": ["web dev", "front-end dev"],
        "clubs": ["Web Dev Society", "Front-End Federation"],
        "projects": ["PNPM Dependency Resolver", "NPM Package"]
    },
    "Vite": {
        "interests": ["web dev", "front-end dev"],
        "clubs": ["Web Dev Society", "Front-End Federation"],
        "projects": ["Vite Static Site", "React Portfolio"]
    },
    "Rollup": {
        "interests": ["web dev", "front-end dev"],
        "clubs": ["Web Dev Society", "Front-End Federation"],
        "projects": ["Rollup Module Bundler", "Webpack Module Bundler"]
    },
    "Parcel": {
        "interests": ["web dev", "front-end dev"],
        "clubs": ["Web Dev Society", "Front-End Federation"],
        "projects": ["Parcel Static Builder", "Vite Static Site"]
    },
    "ESLint": {
        "interests": ["code quality", "web dev"],
        "clubs": ["Web Dev Society", "Code Optimizers"],
        "projects": ["ESLint Code Linter", "Prettier Formatter"]
    },
    "Prettier": {
        "interests": ["code quality", "web dev"],
        "clubs": ["Web Dev Society", "Code Optimizers"],
        "projects": ["Prettier Formatter", "ESLint Code Linter"]
    },
    "Stylelint": {
        "interests": ["code quality", "web dev"],
        "clubs": ["Web Dev Society", "Code Optimizers"],
        "projects": ["Stylelint CSS Checker", "ESLint Code Linter"]
    },
    "SonarQube": {
        "interests": ["code quality", "testing"],
        "clubs": ["Testing Titans", "Code Optimizers"],
        "projects": ["SonarQube Code Quality", "CodeClimate Analyzer"]
    },
    "CodeClimate": {
        "interests": ["code quality", "testing"],
        "clubs": ["Testing Titans", "Code Optimizers"],
        "projects": ["CodeClimate Analyzer", "SonarQube Code Quality"]
    },
    "Gerrit": {
        "interests": ["code review", "open source"],
        "clubs": ["Open Source Initiative"],
        "projects": ["Gerrit Code Reviewer", "Git Workflow Automation"]
    }
}

def generate_user():
    role = random.choice([ "alumni", "student" ])
    selected_skills = random.sample(skills, random.randint(3, 6))

    all_interests = set()
    all_clubs = set()
    all_projects = set()

    for skill in selected_skills:
        mapping = skill_mappings[skill]
        all_interests.update(mapping["interests"])
        all_clubs.update(mapping["clubs"])
        all_projects.update(mapping["projects"])

    selected_interests = random.sample(list(all_interests), min(random.randint(2, 4), len(all_interests)))
    selected_clubs = random.sample(list(all_clubs), min(random.randint(1, 2), len(all_clubs)))
    selected_projects = random.sample(list(all_projects), min(random.randint(1, 3), len(all_projects)))

    name = fake.name()

    user = {
        "name": name,
        "email": fake.email(),
        "role": role,
        "password": "somerandompassword",
        "createdAt": fake.date_this_year().strftime("%d/%m/%Y, %H:%M:%S"),
        "_id": random.randint(1, 999),
        "skills": selected_skills,
        "interests": selected_interests,
        "projects": selected_projects,
        "clubs_joined": selected_clubs,
        "hobbies": random.sample(hobbies, random.randint(2, 4)),
        "bio": fake.sentence(nb_words=15, variable_nb_words=True, ext_word_list=selected_interests + selected_skills),
        "profileImageURL": fake.image_url(),
        "linkedIn": fake.url().replace("http", "https") + f"in/{name.lower().replace(' ', '-')}",
        "graduation_year": random.randint(2010, 2023) if role == "alumni" else random.randint(2021, 2028),
    }

    if (role == "student"):
        user.update({
            "current_year": random.choice([ "FE", "SE", "TE", "BE" ]),
        })
    else:
        user.update({
            "jobTitle": random.choice(job_titles),
            "company": random.choice(companies),
            "yearsExperience": min(datetime.now().year - user["graduation_year"], random.randint(1, 20)),
        })
    
    return user
    

users = [generate_user() for _ in range(1000)]

with open("synthetic_data.json", "w") as f:
    json.dump(users, f, indent=2)

print("Successfully generated data for {} users".format(len(users)))