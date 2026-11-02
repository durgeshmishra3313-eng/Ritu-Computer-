import { FacultyMember, Course, StudentCertificate } from '../types';

export const INSTITUTE_INFO = {
  name: 'Ritu Computer Training Center',
  nameHi: 'रितु कंप्यूटर ट्रेनिंग सेंटर एवं शैक्षणिक कोचिंग',
  tagline: 'Empowering Siddharthnagar with Digital Skills & Board Exam Excellence',
  taglineHi: 'डिजिटल शिक्षा और बोर्ड परीक्षा में शत-प्रतिशत सफलता का विश्वसनीय संस्थान',
  director: 'Prabhakar Mishra',
  directorHi: 'प्रभाकर मिश्रा (संस्थापक एवं निदेशक)',
  address: {
    spot: 'Lohrouli Chouraha, Sadi Kala',
    spotHi: 'लोहरौली चौराहा, साड़ी कला',
    road: 'Basti - Bansi Road',
    roadHi: 'बस्ती-बांसी रोड',
    district: 'Siddharthnagar, Uttar Pradesh - 272153',
    districtHi: 'सिद्धार्थनगर, उत्तर प्रदेश - 272153',
    landmark: 'Near Lohrouli Market & Bus Stand, Sadi Kala',
    landmarkHi: 'लोहरौली चौराहा, साड़ी कला, बस्ती-बांसी रोड'
  },
  phones: ['9451028331', '6390442206', '9721377205'],
  whatsapp: '9451028331',
  timings: {
    morning: '07:00 AM - 11:30 AM',
    evening: '03:00 PM - 07:30 PM',
    days: 'Monday to Saturday (Sunday Special Doubt & Test Classes)',
    daysHi: 'सोमवार से शनिवार (रविवार विशेष टेस्ट एवं डाउट क्लास)'
  },
  established: '2016'
};

export const FACULTY_DATA: FacultyMember[] = [
  {
    id: 'prabhakar-mishra',
    name: 'Prabhakar Mishra',
    nameHi: 'प्रभाकर मिश्रा',
    relation: 'Founder & Director',
    relationHi: 'संस्थापक एवं निदेशक',
    role: 'Director & Chief Academic Mentor',
    roleHi: 'निदेशक एवं मुख्य मार्गदर्शक',
    specialization: ['Educational Leadership', 'Career Counseling', 'Board Exam Strategy'],
    specializationHi: ['शैक्षणिक नेतृत्व', 'करियर मार्गदर्शन', 'बोर्ड परीक्षा रणनीति'],
    bio: 'Dedicated educator with over 15+ years of teaching and mentoring experience in Siddharthnagar region, fostering disciplined learning and career success.',
    bioHi: 'सिद्धार्थनगर क्षेत्र में 15+ वर्षों से समर्पित शिक्षक व मार्गदर्शक, जिन्होंने सैकड़ों ग्रामीण व कस्बाई छात्र-छात्राओं को उच्च शिक्षा व रोजगार के योग्य बनाया।',
    experience: '15+ Years Experience',
    image: '/assets/aistudio/IMG-20250406-WA0056_bbc0d6d3.jpg'
  },
  {
    id: 'ritu-mishra',
    name: 'Ritu Mishra',
    nameHi: 'रितु मिश्रा',
    relation: 'Senior Computer Faculty',
    relationHi: 'वरिष्ठ कंप्यूटर शिक्षिका',
    role: 'Senior Computer Faculty & Center Head',
    roleHi: 'वरिष्ठ कंप्यूटर शिक्षिका एवं केंद्र प्रमुख',
    specialization: ['CCC (NIELIT)', 'DCA', 'MS Office & Excel Analytics', 'Internet & Cyber Safety'],
    specializationHi: ['सीसीसी (NIELIT)', 'डीसीए', 'एमएस ऑफिस व एडवांस एक्सेल', 'इंटरनेट व साइबर सुरक्षा'],
    bio: 'Expert in conceptual computer training, practical lab demonstrations, and certified NIELIT curriculum guidance for beginner to advanced learners.',
    bioHi: 'कंप्यूटर के आधारभूत सिद्धांतों, प्रैक्टिकल लैब ट्रेनिंग और NIELIT सीसीसी पाठ्यक्रम की विशेषज्ञ शिक्षिका। बालिकाओं की कंप्यूटर साक्षरता में विशेष योगदान।',
    experience: '7+ Years Teaching'
  },
  {
    id: 'shreya-mishra',
    name: 'Shreya Mishra',
    nameHi: 'श्रेया मिश्रा',
    relation: 'English & Cultural Activities Faculty',
    relationHi: 'अंग्रेजी एवं सांस्कृतिक गतिविधि शिक्षिका',
    role: 'English Language & Cultural Activities Teacher',
    roleHi: 'अंग्रेजी भाषा एवं सांस्कृतिक कार्यक्रम शिक्षिका',
    specialization: [
      'English Grammar & Vocabulary',
      'Spoken English & Communication Skills',
      'Cultural Activities & Stage Anchoring',
      'Personality Development & Competitions'
    ],
    specializationHi: [
      'अंग्रेजी व्याकरण व शब्दावली',
      'स्पोकन इंग्लिश व बोलचाल कौशल',
      'सांस्कृतिक कार्यक्रम व मंच संचालन',
      'व्यक्तित्व विकास व प्रतियोगिताएं'
    ],
    bio: 'Dedicated educator specializing in English grammar, fluency, and public speaking, while spearheading cultural celebrations, debates, and youth talent programs at the center.',
    bioHi: 'विद्यार्थियों को अंग्रेजी भाषा, धाराप्रवाह संवाद और शुद्ध व्याकरण में निपुण बनाने के साथ-साथ संस्थान के सांस्कृतिक कार्यक्रमों, राष्ट्रीय पर्वों, वाद-विवाद व व्यक्तित्व विकास में अग्रणी भूमिका।',
    experience: '5+ Years Teaching'
  },
  {
    id: 'durgesh-mishra',
    name: 'Durgesh Mishra',
    nameHi: 'दुर्गेश मिश्रा',
    relation: 'Advanced Tech Faculty',
    relationHi: 'कंप्यूटर एवं टेक्नोलॉजी शिक्षक',
    role: 'Advanced Computer & Technology Faculty',
    roleHi: 'एडवांस कंप्यूटर एवं टेक्नोलॉजी शिक्षक',
    specialization: ['ADCA', 'Web Designing & HTML/CSS/JS', 'Computer Hardware & Networking', 'Python Basics'],
    specializationHi: ['एडीसीए (ADCA)', 'वेब डिजाइनिंग व कोडिंग', 'कंप्यूटर हार्डवेयर व नेटवर्किंग', 'पायथन बेसिक्स'],
    bio: 'Passionate tech educator training youth in practical software, troubleshooting, modern digital skills, and preparing students for IT opportunities.',
    bioHi: 'छात्रों को आधुनिक डिजिटल कौशल, वेबसाइट निर्माण, कंप्यूटर हार्डवेयर असेंबली और आईटी सेक्टर की नवीनतम तकनीकों में कुशल बनाने हेतु समर्पित।',
    experience: '6+ Years Teaching',
    image: '/assets/aistudio/IMG-20261026-WA0020_5594ec66.jpg'
  },
  {
    id: 'abhishek-mishra',
    name: 'Abhishek Mishra',
    nameHi: 'अभिषेक मिश्रा',
    relation: 'Mathematics & Science Faculty',
    relationHi: 'गणित एवं विज्ञान शिक्षक',
    role: 'Academic Faculty - Mathematics & Science',
    roleHi: 'शैक्षणिक शिक्षक - गणित एवं विज्ञान',
    specialization: ['High School & Intermediate Mathematics', 'Science (Physics & Chemistry)', 'Concept Building & Formula Tricks', 'Board Exam Test Series & Doubt Clearing'],
    specializationHi: ['हाईस्कूल व इंटरमीडिएट गणित', 'विज्ञान (भौतिकी एवं रसायन)', 'कॉन्सेप्ट क्लैरिटी व सूत्र निगमन', 'बोर्ड परीक्षा टेस्ट सीरीज व डाउट क्लास'],
    bio: 'Dedicated mentor specializing in simplifying complex mathematical concepts, scientific formulas, and numerical problems for board exam aspirants.',
    bioHi: 'विद्यार्थियों को गणित और विज्ञान के कठिन सिद्धांतों, सूत्रों और आंकिक प्रश्नों को सरल व सुगम तरीके से समझाने में दक्ष, जिससे छात्र बोर्ड परीक्षा में सर्वोच्च अंक प्राप्त करते हैं।',
    experience: '5+ Years Teaching',
    image: '/assets/aistudio/IMG-20250718-WA0005_e873a3eb.jpg'
  }
];

export const COURSES_DATA: Course[] = [
  {
    id: 'adca',
    category: 'computer',
    title: 'ADCA (Advanced Diploma in Computer Applications)',
    titleHi: 'एडीसीए (एडवांस्ड डिप्लोमा इन कंप्यूटर एप्लीकेशंस)',
    code: 'RCTC-ADCA-01',
    duration: '12 Months (1 Year)',
    durationHi: '12 माह (1 वर्ष)',
    eligibility: '10th / 12th Pass',
    eligibilityHi: '10वीं / 12वीं उत्तीर्ण',
    description: 'Comprehensive 1-year career diploma covering fundamental to advanced computer software, accounting, graphics, and basic programming.',
    descriptionHi: 'कंप्यूटर क्षेत्र का संपूर्ण एक वर्षीय डिप्लोमा, जिसमें फंडामेंटल, एमएस ऑफिस, टैली जीएसटी, फोटोशॉप, इंटरनेट व वेब बेसिक्स शामिल हैं।',
    features: [
      'Computer Fundamentals & Operating Systems',
      'Advanced MS Word, Excel, PowerPoint & Access',
      'Tally Prime with GST, Inventory & Invoicing',
      'Graphic Design (Photoshop & CorelDRAW)',
      'Web Page Designing (HTML, CSS Basics)',
      'Govt. Job & Private Sector Recognized Certificate'
    ],
    featuresHi: [
      'कंप्यूटर फंडामेंटल्स एवं विंडोज ऑपरेटिंग सिस्टम',
      'एडवांस एमएस वर्ड, एक्सेल, पावरपॉइंट व डेटाबेस',
      'टैली प्राइम जीएसटी, इनवॉइसिंग व अकाउंटिंग',
      'ग्राफिक डिजाइन (फोटोशॉप एवं कोरल ड्रॉ)',
      'वेब डिजाइनिंग व इंटरनेट प्रोजेक्ट्स',
      'सरकारी एवं गैर-सरकारी नौकरियों हेतु पूर्णतः मान्य'
    ],
    syllabus: [
      'Module 1: Computer Concepts, Windows, Paint, Notepad, WordPad',
      'Module 2: MS Office Package (Word, Excel with VLOOKUP/Pivot, PowerPoint)',
      'Module 3: Financial Accounting with Tally Prime + GST Billing',
      'Module 4: Desktop Publishing (Photoshop Photo Editing, CorelDRAW Banners)',
      'Module 5: Internet, Email, Cyber Security, Online Portals, Hindi & English Typing'
    ],
    feeApprox: '₹750 - ₹900 / month (Easy Installments)',
    popular: true
  },
  {
    id: 'ccc',
    category: 'computer',
    title: 'CCC (Course on Computer Concepts - NIELIT)',
    titleHi: 'सीसीसी (कोर्स ऑन कंप्यूटर कॉन्सेप्ट्स - NIELIT पैटर्न)',
    code: 'RCTC-CCC-02',
    duration: '3 Months (80 Hours)',
    durationHi: '3 माह (80 घंटे)',
    eligibility: 'No Minimum (Any Student / Job Aspirant)',
    eligibilityHi: 'कोई न्यूनतम सीमा नहीं (सभी हेतु)',
    description: 'Essential certification required for UP Lekhpal, VDO, Police, RO/ARO, and all state/central government jobs.',
    descriptionHi: 'उत्तर प्रदेश लेखपाल, ग्राम विकास अधिकारी, पुलिस, क्लर्क एवं समस्त सरकारी नौकरियों हेतु अनिवार्य कंप्यूटर प्रमाण-पत्र कोर्स।',
    features: [
      'Complete NIELIT Official Syllabus',
      'LibreOffice Writer, Calc, Impress & MS Office',
      'Internet, WWW, Digital Financial Services & UPI',
      'Daily Online Mock Tests & 1000+ Question Bank',
      'Form Filling & Online Exam Registration Assistance'
    ],
    featuresHi: [
      'NIELIT का अधिकृत नवीनतम पाठ्यक्रम',
      'लिब्रे ऑफिस राइटर, कैल्क, इम्प्रेस एवं एमएस ऑफिस',
      'इंटरनेट, डिजिटल पेमेंट, बैंकिंग व साइबर सुरक्षा',
      'दैनिक ऑनलाइन मॉक टेस्ट एवं 1000+ प्रश्नों का अभ्यास',
      'परीक्षा फॉर्म भरने और एडमिट कार्ड में पूर्ण सहायता'
    ],
    syllabus: [
      'Chapter 1: Introduction to Computer',
      'Chapter 2: Introduction to Operating System (GUI based)',
      'Chapter 3: Word Processing (LibreOffice Writer / MS Word)',
      'Chapter 4: Spreadsheets (LibreOffice Calc / MS Excel)',
      'Chapter 5: Presentations (LibreOffice Impress / PowerPoint)',
      'Chapter 6: Internet, WWW and Web Browsers',
      'Chapter 7: E-mail, Social Networking and e-Governance Services',
      'Chapter 8: Digital Financial Tools and Applications',
      'Chapter 9: Overview of Cybersecurity and FutureSkills'
    ],
    feeApprox: 'Affordable One-Time / Monthly Package',
    popular: true
  },
  {
    id: 'dca',
    category: 'computer',
    title: 'DCA (Diploma in Computer Applications)',
    titleHi: 'डीसीए (डिप्लोमा इन कंप्यूटर एप्लीकेशंस)',
    code: 'RCTC-DCA-03',
    duration: '6 Months',
    durationHi: '6 माह',
    eligibility: '10th Pass or Equivalent',
    eligibilityHi: '10वीं उत्तीर्ण',
    description: 'Fast-track practical diploma designed for office administration, data entry, clerical work, and small business management.',
    descriptionHi: 'कार्यालयी कार्यों, डेटा एंट्री, कंप्यूटर ऑपरेटर और निजी संस्थानों में नौकरी हेतु 6 महीने का लोकप्रिय डिप्लोमा।',
    features: [
      'MS Office Professional Suite (Word, Excel, PowerPoint)',
      'Bilingual Typing Mastery (English & Hindi)',
      'Scanning, Printing, Emailing & Document Formatting',
      'Basic Accounting Concepts',
      'Practical Project Submission'
    ],
    featuresHi: [
      'एमएस ऑफिस सुइट (वर्ड, एक्सेल, पावरपॉइंट)',
      'हिंदी एवं अंग्रेजी टाइपिंग में गति व शुद्धता',
      'स्कैनिंग, प्रिंटिंग, ईमेल व ऑनलाइन कार्य',
      'अकाउंटिंग एवं बिलिंग का आधारभूत ज्ञान',
      'प्रैक्टिकल फाइल व प्रोजेक्ट कार्य'
    ],
    syllabus: [
      'Part 1: Computer Hardware overview, Operating system',
      'Part 2: MS Word drafting, official letters, formatting',
      'Part 3: MS Excel arithmetic, formulae, reports',
      'Part 4: MS PowerPoint slide decks',
      'Part 5: Internet navigation, typing speed improvement'
    ],
    feeApprox: 'Nominal Monthly Fee',
    popular: false
  },
  {
    id: 'tally-gst',
    category: 'computer',
    title: 'Tally Prime with GST & E-Invoicing',
    titleHi: 'टैली प्राइम विद जीएसटी एवं एकाउंटिंग',
    code: 'RCTC-TALLY-04',
    duration: '3 Months',
    durationHi: '3 माह',
    eligibility: '10th / 12th / Commerce / Non-Commerce',
    eligibilityHi: '10वीं / 12वीं (कला, विज्ञान या वाणिज्य)',
    description: 'Practical training on business accounts, sales/purchase voucher entry, GST calculation, stock maintenance, and balance sheets.',
    descriptionHi: 'व्यापारिक लेखा-जोखा, वाउचर एंट्री, जीएसटी चालान, स्टॉक मेंटेनेंस व बैलेंस शीट बनाने का व्यावहारिक प्रशिक्षण।',
    features: [
      'Company Creation & Ledger Master Setup',
      'Voucher Entries (Contra, Payment, Receipt, Journal, Sales, Purchase)',
      'GST, CGST, SGST, IGST Setup & Tax Invoicing',
      'Inventory, Godown & Stock Item Management',
      'Live Case Studies from Local Retail & Wholesale Traders'
    ],
    featuresHi: [
      'कंपनी निर्माण एवं लेजर मास्टर्स तैयार करना',
      'वाउचर प्रविष्टियां (पेमेंट, रसीद, सेल्स, परचेज आदि)',
      'जीएसटी, सीजीएसटी, एसजीएसटी टैक्स बिलिंग',
      'इन्वेंट्री, गोदाम व स्टॉक प्रबंधन',
      'दुकानदारों व व्यापारियों के वास्तविक खातों पर अभ्यास'
    ],
    syllabus: [
      'Section 1: Manual Accounting Rules (Debit/Credit, Golden Rules)',
      'Section 2: Tally Prime Interface & Configuration',
      'Section 3: Inventory Management & Units of Measure',
      'Section 4: GST Implementation, Tax Classification, E-Way Bill intro',
      'Section 5: Generating Profit & Loss, Balance Sheet, GST Reports'
    ],
    feeApprox: 'Short-Term High-ROI Package',
    popular: true
  },
  {
    id: 'typing-lab',
    category: 'computer',
    title: 'Typing Master Lab (Hindi Kruti Dev/Mangal + English)',
    titleHi: 'टाइपिंग मास्टर लैब (हिंदी कुर्ती देव/मंगल + अंग्रेजी)',
    code: 'RCTC-TYPE-05',
    duration: '2 to 4 Months',
    durationHi: '2 से 4 माह',
    eligibility: 'All Students & Job Aspirants',
    eligibilityHi: 'सभी छात्रों हेतु',
    description: 'Speed & accuracy boosting lab for Court Steno, Police ASI, High Court Clerk, and SSC typing tests.',
    descriptionHi: 'कोर्ट स्टेनो, पुलिस एएसआई, उच्च न्यायालय क्लर्क, लेखपाल व एसएससी टाइपिंग परीक्षाओं हेतु समर्पित टाइपिंग लैब।',
    features: [
      'Touch Typing method without looking at keyboard',
      'Hindi Kruti Dev 010 & Mangal Inscript / Remington GAIL font',
      'English 35+ WPM target with 95%+ accuracy',
      'Daily speed test leaderboard & diagnostic feedback'
    ],
    featuresHi: [
      'बिना कीबोर्ड देखे उंगलियों के सही स्थान का अभ्यास',
      'हिंदी कुर्ती देव 010 एवं मंगल इनस्क्रिप्ट/रेमिंगटन गेल',
      'अंग्रेजी में 35+ WPM और 95%+ शुद्धता का लक्ष्य',
      'दैनिक स्पीड टेस्ट और त्रुटि सुधार तकनीक'
    ],
    syllabus: [
      'Home row, Top row, Bottom row finger placement',
      'Shift key and special symbol typing',
      'Speed building drills and paragraph tests',
      'Exam simulation software practice'
    ],
    feeApprox: 'Nominal Lab Fee',
    popular: false
  },
  {
    id: 'board-10th',
    category: 'board',
    title: 'Class 10th High School Board Exam Preparation',
    titleHi: 'कक्षा 10वीं हाईस्कूल बोर्ड परीक्षा संपूर्ण तैयारी',
    code: 'RCTC-BOARD-10',
    duration: 'Full Academic Session + Crash Course',
    durationHi: 'वार्षिक सत्र + अंतिम 3 माह का क्रैश कोर्स',
    eligibility: 'Students appearing in UP Board / CBSE 10th',
    eligibilityHi: 'यूपी बोर्ड / सीबीएसई 10वीं के छात्र-छात्राएं',
    description: 'Rigorous preparation for 10th Board examinations with chapter-wise conceptual clarity, formulas, and 10-year previous papers.',
    descriptionHi: 'हाईस्कूल बोर्ड परीक्षा में 90%+ अंक हासिल करने हेतु गणित, विज्ञान, अंग्रेजी व सामाजिक विज्ञान की विशेष तैयारी।',
    features: [
      'Mathematics: NCERT solutions + Exemplar + Shortcut tricks',
      'Science: Physics, Chemistry & Biology with neat diagram practice',
      'English: Grammar, Translation, Unseen passages & Literature',
      'Sunday Mega Mock Tests with exact Board Answer Sheet evaluation',
      'Special focus on weak students & personal doubt clearing'
    ],
    featuresHi: [
      'गणित: एनसीईआरटी का गहन हल, उदाहरण व शॉर्ट ट्रिक्स',
      'विज्ञान: भौतिक, रसायन व जीव विज्ञान के सचित्र उत्तर लेखन',
      'अंग्रेजी: ग्रामर, ट्रांसलेशन, पत्र लेखन व लिटरेचर',
      'रविवार को बोर्ड पैटर्न पर ओएमआर व उत्तर पुस्तिका टेस्ट',
      'कमजोर छात्रों के लिए अलग से अतिरिक्त कक्षाएं'
    ],
    syllabus: [
      'Mathematics: Real Numbers, Polynomials, Linear Equations, Triangles, Trigonometry, Statistics',
      'Science: Chemical Reactions, Acids & Bases, Life Processes, Light, Electricity, Magnetic Effects',
      'English & Social Studies comprehensive answer writing'
    ],
    feeApprox: 'Affordable Monthly Coaching Fee',
    popular: true
  },
  {
    id: 'board-12th',
    category: 'board',
    title: 'Class 12th Intermediate Board Exam Coaching',
    titleHi: 'कक्षा 12वीं इंटरमीडिएट बोर्ड परीक्षा मार्गदर्शन',
    code: 'RCTC-BOARD-12',
    duration: 'Full Academic Session + Revision Series',
    durationHi: 'वार्षिक सत्र + रिवीजन एवं टेस्ट सीरीज',
    eligibility: '12th Science / Commerce / Arts Stream',
    eligibilityHi: '12वीं विज्ञान, वाणिज्य या कला वर्ग',
    description: 'Expert mentorship for 12th Board examinations in Physics, Chemistry, Mathematics, Biology, English & Accounts.',
    descriptionHi: 'इंटरमीडिएट बोर्ड परीक्षा हेतु भौतिकी, रसायन, गणित, जीव विज्ञान, अंग्रेजी एवं एकाउंट्स का उच्च स्तरीय अध्यापन।',
    features: [
      'Physics: Derivations, Numericals, Circuit diagrams & Formula charts',
      'Chemistry: Organic Reaction Mechanisms, Inorganic & Physical Numericals',
      'Mathematics: Calculus (Differentiation & Integration), Vectors & 3D',
      'Model Question Paper solving & Time-management coaching',
      'Career counseling after 12th (CUET, NDA, Polytechnic, ITI, Defense)'
    ],
    featuresHi: [
      'भौतिकी: सूत्रों का निगमन, आंकिक प्रश्न व सर्किट आरेख',
      'रसायन विज्ञान: कार्बनिक अभिक्रियाएं, रासायनिक सूत्र व समीकरण',
      'गणित: कलन (अवकलन एवं समाकलन), सदिश एवं प्रायिकता',
      'मॉडल पेपर हल एवं 3 घंटे में पूरा पेपर लिखने का अभ्यास',
      '12वीं के बाद करियर मार्गदर्शन (CUET, पॉलिटेक्निक, एनडीए आदि)'
    ],
    syllabus: [
      'Physics: Electrostatics, Current Electricity, Optics, Modern Physics',
      'Chemistry: Solutions, Electrochemistry, Kinetics, Coordination, Biomolecules',
      'Maths: Relations & Functions, Matrices, Calculus, Linear Programming'
    ],
    feeApprox: 'Subject-wise or Combo Monthly Fee',
    popular: true
  },
  {
    id: 'board-9th-11th',
    category: 'board',
    title: 'Foundation Batches (Class 9th & Class 11th)',
    titleHi: 'फाउंडेशन बैच (कक्षा 9वीं एवं 11वीं)',
    code: 'RCTC-FOUND-0911',
    duration: 'Full Session',
    durationHi: 'पूरा शैक्षणिक वर्ष',
    eligibility: 'Class 9th & 11th Students',
    eligibilityHi: 'कक्षा 9वीं एवं 11वीं के विद्यार्थी',
    description: 'Strong foundational conceptual learning before entering the decisive board exam years.',
    descriptionHi: 'बोर्ड परीक्षा से पहले आधार मजबूत करने के लिए बुनियादी सिद्धांतों और कठिन विषयों का विस्तृत अध्ययन।',
    features: [
      'Strong base building in Science and Mathematics',
      'Concept tests and regular homework checking',
      'Parent-Teacher Monthly Review'
    ],
    featuresHi: [
      'विज्ञान और गणित में मजबूत आधार तैयार करना',
      'नियमित गृहकार्य जांच एवं मासिक अभिभावक बैठक',
      'अंग्रेजी बोलने व लिखने का बुनियादी अभ्यास'
    ],
    syllabus: ['Complete NCERT syllabus with foundational problem solving'],
    feeApprox: 'Nominal Monthly Fee',
    popular: false
  }
];

export const SAMPLE_VERIFIED_CERTIFICATES: Record<string, StudentCertificate> = {
  'RCTC-2025-0101': {
    rollNo: 'RCTC-2025-0101',
    studentName: 'Amit Kumar Maurya',
    fatherName: 'Ramkishun Maurya',
    courseName: 'ADCA (Advanced Diploma in Computer Applications)',
    grade: 'A+ (Distinction)',
    issueDate: '15 June 2025',
    duration: '12 Months (July 2024 - June 2025)',
    status: 'Verified',
    instituteCenter: 'Ritu Computer Training Center, Lohrouli Chouraha, Siddharthnagar'
  },
  'RCTC-2025-0102': {
    rollNo: 'RCTC-2025-0102',
    studentName: 'Pooja Tiwari',
    fatherName: 'Dinesh Tiwari',
    courseName: 'CCC (Course on Computer Concepts)',
    grade: 'A (Excellent)',
    issueDate: '20 August 2025',
    duration: '3 Months (May 2025 - July 2025)',
    status: 'Verified',
    instituteCenter: 'Ritu Computer Training Center, Lohrouli Chouraha, Siddharthnagar'
  },
  'RCTC-2025-0103': {
    rollNo: 'RCTC-2025-0103',
    studentName: 'Suraj Verma',
    fatherName: 'Santosh Verma',
    courseName: 'Tally Prime with GST & E-Invoicing',
    grade: 'A+',
    issueDate: '10 September 2025',
    duration: '3 Months (June 2025 - August 2025)',
    status: 'Verified',
    instituteCenter: 'Ritu Computer Training Center, Lohrouli Chouraha, Siddharthnagar'
  },
  'RCTC-2025-0104': {
    rollNo: 'RCTC-2025-0104',
    studentName: 'Anjali Mishra',
    fatherName: 'Rajesh Mishra',
    courseName: 'DCA (Diploma in Computer Applications)',
    grade: 'A',
    issueDate: '02 November 2025',
    duration: '6 Months (May 2025 - October 2025)',
    status: 'Verified',
    instituteCenter: 'Ritu Computer Training Center, Lohrouli Chouraha, Siddharthnagar'
  }
};

export const QUIZ_QUESTIONS = [
  {
    category: 'computer',
    question: 'What is the full form of CCC in NIELIT computer certification?',
    questionHi: 'NIELIT कंप्यूटर सर्टिफिकेशन में CCC का पूरा नाम क्या है?',
    options: [
      'Course on Computer Concepts',
      'Certificate in Computer Coding',
      'Central Computer Council',
      'Common Computer Calculation'
    ],
    correctIndex: 0,
    explanation: 'CCC stands for "Course on Computer Concepts", an essential course recognized by UP & Central government jobs.'
  },
  {
    category: 'computer',
    question: 'Which shortcut key is used in Tally Prime to view the Trial Balance or create a voucher?',
    questionHi: 'टैली प्राइम में पेमेंट वाउचर खोलने हेतु कौन सी शॉर्टकट कुंजी का उपयोग किया जाता है?',
    options: ['F4 (Contra)', 'F5 (Payment)', 'F6 (Receipt)', 'F8 (Sales)'],
    correctIndex: 1,
    explanation: 'F5 is the shortcut key used to record Payment transactions in Tally Prime.'
  },
  {
    category: 'board',
    question: 'What is the formula for calculating current (I) according to Ohm’s Law?',
    questionHi: 'ओम के नियमानुसार विद्युत धारा (I) का सही सूत्र क्या है?',
    options: ['I = V / R', 'I = V × R', 'I = R / V', 'I = V² / R'],
    correctIndex: 0,
    explanation: 'Ohm’s law states V = I × R, therefore Current I = V / R.'
  },
  {
    category: 'board',
    question: 'What is the quadratic formula to find roots of ax² + bx + c = 0?',
    questionHi: 'द्विघात समीकरण ax² + bx + c = 0 के मूल ज्ञात करने का श्रीधराचार्य सूत्र क्या है?',
    options: [
      'x = (-b ± √(b² - 4ac)) / (2a)',
      'x = (-b ± √(b² + 4ac)) / (2a)',
      'x = (b ± √(b² - 4ac)) / (4a)',
      'x = (-b ± 2√(ac)) / a'
    ],
    correctIndex: 0,
    explanation: 'The Shreedharacharya formula is x = (-b ± √(b² - 4ac)) / (2a).'
  }
];

export const TYPING_PARAGRAPHS = {
  en: [
    "Computer education has become essential in modern life. From government offices to private enterprises, digital literacy opens doors to employment and productivity. Learning keyboard typing with correct finger placement allows students to work faster and with greater confidence.",
    "Ritu Computer Training Center at Lohrouli Chouraha provides high quality training in ADCA, DCA, CCC, and Tally Prime. Dedicated instructors guide each student through hands-on practical lab sessions every day.",
    "Board examinations require systematic planning, clear concepts, and disciplined practice. Regular revision of formulas and previous year question papers helps students score top marks in high school and intermediate."
  ],
  hi: [
    "कंप्यूटर शिक्षा आज के युग में हर विद्यार्थी और युवा के लिए अत्यंत आवश्यक है। डिजिटल साक्षरता से नौकरियों के नए अवसर प्राप्त होते हैं। लोहरौली चौराहा, साड़ी कला में रितु कंप्यूटर ट्रेनिंग सेंटर गुणवत्तापूर्ण प्रशिक्षण प्रदान करता है।",
    "बोर्ड परीक्षा में उत्कृष्ट अंक प्राप्त करने के लिए नियमित अभ्यास और कठिन विषयों की समझ जरूरी है। प्रभाकर मिश्रा जी के निर्देशन में अनुभवी शिक्षकों की टीम छात्र-छात्राओं का निरंतर मार्गदर्शन करती है।",
    "टैली प्राइम और जीएसटी का ज्ञान युवाओं को व्यापार और वित्तीय क्षेत्र में स्वावलंबी बनाता है। सही टाइपिंग अभ्यास से परीक्षा और कार्यालय दोनों में सफलता मिलती है।"
  ]
};

export const TESTIMONIALS = [
  {
    name: 'Vikas Kumar Chaurasia',
    village: 'Bansi, Siddharthnagar',
    course: 'ADCA & Tally Prime',
    text: 'रितु कंप्यूटर ट्रेनिंग सेंटर से मैंने 1 वर्ष का ADCA और टैली किया। अभिषेक सर और दुर्गेश सर ने बहुत ही आसान भाषा में सिखाया। आज मैं बांसी के एक प्रतिष्ठित फर्म में अकाउंटेंट का कार्य कर रहा हूँ।',
    highlight: 'Working as Accountant in Bansi'
  },
  {
    name: 'Kavita Pandey',
    village: 'Sadi Kala, Lohrouli',
    course: '10th Board Exam Coaching (91.4%)',
    text: 'श्रेया मैम और प्रभाकर सर के मार्गदर्शन में मैंने यूपी बोर्ड हाईस्कूल में 91.4% अंक प्राप्त किए। गणित और विज्ञान के जो सवाल मुझे कठिन लगते थे, मैम ने बहुत अच्छे से समझाया।',
    highlight: '91.4% in UP Board High School'
  },
  {
    name: 'Mohd. Imran',
    village: 'Lohrouli Bazaar',
    course: 'CCC (Grade A) & Typing',
    text: 'रितु मैम ने सीसीसी की इतनी बेहतरीन तैयारी कराई कि पहले ही प्रयास में मेरा ‘A’ ग्रेड आ गया। साथ ही टाइपिंग लैब में 40 WPM की स्पीड हासिल हुई जो यूपी पुलिस भर्ती में काम आई।',
    highlight: 'Cleared CCC in 1st Attempt with Grade A'
  }
];
