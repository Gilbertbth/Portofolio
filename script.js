const translations = {
  en: {
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'nav.blog': 'Blog',
    'hero.available': 'Available for Freelance Projects',
    'hero.greeting': 'Hi there, I\'m',
    'hero.iam': 'I am',
    'hero.desc': 'Computer Science Student | Building modern web applications with clean code & cutting-edge technology',
    'hero.viewProjects': 'View Projects',
    'hero.downloadCV': 'Download CV',
    'hero.contact': 'Contact Me',
    'hero.scroll': 'Scroll to explore',
    'branding.label': 'Value Proposition',
    'branding.headline': 'I help businesses and institutions build modern web applications that are fast, secure, and user-friendly.',
    'branding.desc': 'With a strong foundation in computer science and hands-on experience in full-stack development, I deliver digital solutions that drive results and create meaningful impact.',
    'branding.projects': 'Projects Built',
    'branding.techs': 'Technologies',
    'branding.years': 'Years Learning',
    'about.subtitle': 'Get To Know Me',
    'about.title': 'About Me',
    'about.location': 'Indonesia',
    'about.education': 'Computer Science',
    'about.status': 'Active Learner',
    'about.desc1': 'I am a Computer Science student with a deep passion for web development and software engineering. My journey in tech started with curiosity about how websites work, and has evolved into a dedicated pursuit of mastering backend development, database design, and modern web architectures.',
    'about.desc2': 'I specialize in building robust web applications using Laravel, Node.js, and modern JavaScript frameworks. Every project I work on is an opportunity to create something impactful and to push the boundaries of my technical abilities.',
    'about.nameLabel': 'Name',
    'about.emailLabel': 'Email',
    'about.fromLabel': 'From',
    'about.roleLabel': 'Role',
    'about.country': 'Indonesia',
    'about.role': 'Web & Backend Developer',
    'achievements.subtitle': 'My Journey',
    'achievements.title': 'Achievements',
    'achievements.projects': 'Projects Completed',
    'achievements.hours': 'Coding Hours',
    'achievements.techs': 'Technologies Mastered',
    'achievements.certs': 'Certificates Earned',
    'achievements.github': 'GitHub Contributions',
    'tech.subtitle': 'Technologies',
    'tech.title': 'Tech Stack',
    'tech.frontend': 'Frontend',
    'tech.backend': 'Backend',
    'tech.database': 'Database',
    'tech.tools': 'Tools',
    'services.subtitle': 'What I Offer',
    'services.title': 'Services',
    'services.webDev': 'Web Development',
    'services.webDevDesc': 'Modern, responsive, and performant websites built with cutting-edge technologies.',
    'services.backendDev': 'Backend Development',
    'services.backendDevDesc': 'Robust server-side applications with clean architecture and best practices.',
    'services.apiDev': 'REST API Development',
    'services.apiDevDesc': 'Scalable and secure APIs with comprehensive documentation and testing.',
    'services.dbDesign': 'Database Design',
    'services.dbDesignDesc': 'Efficient database architecture with optimized queries and data modeling.',
    'services.deploy': 'Deployment Services',
    'services.deployDesc': 'Seamless deployment to production with CI/CD pipelines and monitoring.',
    'projects.subtitle': 'My Work',
    'projects.title': 'Featured Projects',
    'projects.all': 'All',
    'caseStudies.subtitle': 'Deep Dive',
    'caseStudies.title': 'Case Studies',
    'caseStudies.problem': 'Problem',
    'caseStudies.solution': 'Solution',
    'caseStudies.tech': 'Technology',
    'caseStudies.challenges': 'Challenges',
    'caseStudies.implementation': 'Implementation',
    'caseStudies.result': 'Result',
    'caseStudies.study1Title': 'Affine Cipher Calculator',
    'caseStudies.study1Problem': 'Need for a web-based tool that can encrypt and decrypt messages using the Affine Cipher algorithm for educational purposes.',
    'caseStudies.study1Solution': 'Built an interactive web application with PHP backend that handles encryption/decryption logic and a clean JavaScript frontend for real-time input processing.',
    'caseStudies.study1Challenges': 'Implementing the affine cipher mathematical formula correctly and handling edge cases like non-alphabetic characters.',
    'caseStudies.study1Impl': 'Built modular PHP functions for the affine cipher algorithm (ax + b mod 26), with a responsive UI for input and output display.',
    'caseStudies.study1Result': 'Successfully deployed educational tool used by students to learn and visualize affine cipher encryption concepts.',
    'caseStudies.study2Title': 'Student Council Election System',
    'caseStudies.study2Problem': 'School needed a digital platform for student council elections to replace paper ballots and manual vote counting.',
    'caseStudies.study2Solution': 'Developed a secure web-based voting system with candidate profiles, voter authentication, and real-time result tabulation.',
    'caseStudies.study2Challenges': 'Preventing duplicate voting, ensuring voter authentication, and displaying real-time results without revealing individual votes.',
    'caseStudies.study2Impl': 'Built with PHP and MySQL for secure vote storage, Bootstrap for responsive UI, and AJAX for real-time result updates.',
    'caseStudies.study2Result': 'Successfully conducted school election with 95% voter turnout and eliminated manual counting errors.',
    'github.subtitle': 'Open Source',
    'github.title': 'GitHub Analytics',
    'github.repos': 'Repositories',
    'github.commits': 'Commits',
    'github.stars': 'Stars',
    'github.languages': 'Languages',
    'timeline.subtitle': 'My Journey',
    'timeline.title': 'Career Timeline',
    'timeline.year1Title': 'Started Learning Coding',
    'timeline.year1Desc': 'Began my programming journey with HTML, CSS, and JavaScript. Built my first simple websites.',
    'timeline.year2Title': 'Backend & Database Focus',
    'timeline.year2Desc': 'Mastered PHP, Laravel, MySQL, and MongoDB. Started building dynamic web applications.',
    'timeline.year3Title': 'Building Information Systems',
    'timeline.year3Desc': 'Developed multiple information systems: e-commerce, attendance, laundry management, and more.',
    'timeline.year4Title': 'Freelance & Personal Branding',
    'timeline.year4Desc': 'Focusing on freelance projects, building personal brand, and expanding professional network.',
    'activity.subtitle': 'Dashboard',
    'activity.title': 'Coding Activity',
    'activity.hours': 'Coding Hours',
    'activity.projects': 'Projects Completed',
    'activity.learning': 'Learning Progress',
    'activity.focus': 'Current Focus',
    'certs.subtitle': 'Credentials',
    'certs.title': 'Certificates',
    'certs.cert1': 'Simplilearn SkillUp',
    'certs.cert2': 'Aguna Course',
    'certs.cert3': 'Komdigi',
    'certs.cert4': 'Dicoding',
    'testimonials.subtitle': 'Feedback',
    'testimonials.title': 'Testimonials',
    'testimonials.testimonial1': '"Gilbert delivered an exceptional e-commerce platform. His technical expertise and attention to detail exceeded our expectations."',
    'testimonials.testimonial2': '"Working with Gilbert on the attendance system was seamless. He understood our requirements perfectly and delivered on time."',
    'testimonials.testimonial3': '"Highly professional and skilled. Gilbert\'s backend development work was clean, well-documented, and scalable."',
    'testimonials.author1Name': 'Client Name',
    'testimonials.author1Role': 'Business Owner',
    'testimonials.author2Name': 'School Admin',
    'testimonials.author2Role': 'Institution Administrator',
    'testimonials.author3Name': 'Project Manager',
    'testimonials.author3Role': 'Tech Company',
    'blog.subtitle': 'Articles',
    'blog.title': 'Latest Blog Posts',
    'blog.post1': 'Getting Started with Laravel',
    'blog.post1Excerpt': 'A comprehensive guide to building modern web applications with Laravel framework.',
    'blog.post2': 'Building REST APIs',
    'blog.post2Excerpt': 'Best practices for designing and implementing scalable RESTful APIs.',
    'blog.post3': 'MongoDB for Beginners',
    'blog.post3Excerpt': 'Understanding NoSQL databases and getting started with MongoDB.',
    'blog.post4': 'Node.js for Backend',
    'blog.post4Excerpt': 'Why Node.js is a great choice for building scalable backend services.',
    'blog.post5': 'Web Security Basics',
    'blog.post5Excerpt': 'Essential security practices every web developer should know.',
    'blog.readMore': 'Read More',
    'video.subtitle': 'Introduction',
    'video.title': 'Video Introduction',
    'video.clickToPlay': 'Click to play introduction video',
    'video.transcript': 'Hello, I\'m Gilbert Batahi Lumbantobing, a Computer Science student and Web Developer passionate about building modern, scalable web applications. With expertise in Laravel, Node.js, and database design, I help businesses and institutions create digital solutions that make a real impact.',
    'downloads.subtitle': 'Resources',
    'downloads.title': 'Download Center',
    'downloads.cv': 'Curriculum Vitae',
    'downloads.cvInfo': 'PDF - Updated 2026',
    'downloads.portfolio': 'Portfolio PDF',
    'downloads.portfolioInfo': 'PDF - Complete Portfolio',
    'downloads.certificates': 'Certificates Bundle',
    'downloads.certsInfo': 'PDF - All Certificates',
    'contact.subtitle': 'Get In Touch',
    'contact.title': 'Contact Me',
    'contact.emailLabel': 'Email',
    'contact.whatsappLabel': 'WhatsApp',
    'contact.linkedinLabel': 'LinkedIn',
    'contact.locationLabel': 'Location',
    'contact.location': 'Indonesia',
    'contact.formName': 'Your Name',
    'contact.formEmail': 'Your Email',
    'contact.formSubject': 'Subject',
    'contact.formMessage': 'Your Message',
    'contact.sendMessage': 'Send Message',
    'social.subtitle': 'Connect',
    'social.title': 'Let\'s Connect',
    'footer.tagline': 'Building Modern Web Experiences',
    'footer.quickLinks': 'Quick Links',
    'footer.services': 'Services',
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved.',
    'ai.title': 'AI Assistant',
    'ai.status': 'Ask me anything about Gilbert',
    'ai.welcome': 'Hi! I\'m Gilbert\'s AI assistant. Ask me about his skills, projects, experience, or anything else!',
    'ai.placeholder': 'Type your message...',
  },
  id: {
    'nav.about': 'Tentang',
    'nav.projects': 'Proyek',
    'nav.services': 'Layanan',
    'nav.contact': 'Kontak',
    'nav.blog': 'Blog',
    'hero.available': 'Tersedia untuk Proyek Freelance',
    'hero.greeting': 'Halo, saya',
    'hero.iam': 'Saya',
    'hero.desc': 'Mahasiswa Ilmu Komputer | Membangun aplikasi web modern dengan kode bersih & teknologi terkini',
    'hero.viewProjects': 'Lihat Proyek',
    'hero.downloadCV': 'Unduh CV',
    'hero.contact': 'Hubungi Saya',
    'hero.scroll': 'Gulir untuk menjelajah',
    'branding.label': 'Proposisi Nilai',
    'branding.headline': 'Saya membantu bisnis dan institusi membangun aplikasi web modern yang cepat, aman, dan mudah digunakan.',
    'branding.desc': 'Dengan fondasi kuat dalam ilmu komputer dan pengalaman langsung dalam pengembangan full-stack, saya memberikan solusi digital yang mendorong hasil dan menciptakan dampak berarti.',
    'branding.projects': 'Proyek Dibangun',
    'branding.techs': 'Teknologi',
    'branding.years': 'Tahun Belajar',
    'about.subtitle': 'Kenali Saya',
    'about.title': 'Tentang Saya',
    'about.location': 'Indonesia',
    'about.education': 'Ilmu Komputer',
    'about.status': 'Pembelajar Aktif',
    'about.desc1': 'Saya adalah mahasiswa Ilmu Komputer dengan hasrat mendalam terhadap pengembangan web dan rekayasa perangkat lunak. Perjalanan saya di dunia teknologi dimulai dengan rasa ingin tahu tentang bagaimana situs web bekerja, dan telah berkembang menjadi dedikasi untuk menguasai pengembangan backend, desain database, dan arsitektur web modern.',
    'about.desc2': 'Saya berspesialisasi dalam membangun aplikasi web yang tangguh menggunakan Laravel, Node.js, dan framework JavaScript modern. Setiap proyek yang saya kerjakan adalah kesempatan untuk menciptakan sesuatu yang berdampak dan mendorong batas kemampuan teknis saya.',
    'about.nameLabel': 'Nama',
    'about.emailLabel': 'Email',
    'about.fromLabel': 'Dari',
    'about.roleLabel': 'Peran',
    'about.country': 'Indonesia',
    'about.role': 'Web & Backend Developer',
    'achievements.subtitle': 'Perjalanan Saya',
    'achievements.title': 'Pencapaian',
    'achievements.projects': 'Proyek Selesai',
    'achievements.hours': 'Jam Coding',
    'achievements.techs': 'Teknologi Dikuasai',
    'achievements.certs': 'Sertifikat Diperoleh',
    'achievements.github': 'Kontribusi GitHub',
    'tech.subtitle': 'Teknologi',
    'tech.title': 'Stack Teknologi',
    'tech.frontend': 'Frontend',
    'tech.backend': 'Backend',
    'tech.database': 'Database',
    'tech.tools': 'Alat',
    'services.subtitle': 'Yang Saya Tawarkan',
    'services.title': 'Layanan',
    'services.webDev': 'Pengembangan Web',
    'services.webDevDesc': 'Situs web modern, responsif, dan berkinerja tinggi dibangun dengan teknologi terkini.',
    'services.backendDev': 'Pengembangan Backend',
    'services.backendDevDesc': 'Aplikasi server-side yang kokoh dengan arsitektur bersih dan praktik terbaik.',
    'services.apiDev': 'Pengembangan REST API',
    'services.apiDevDesc': 'API yang skalabel dan aman dengan dokumentasi dan pengujian komprehensif.',
    'services.dbDesign': 'Desain Database',
    'services.dbDesignDesc': 'Arsitektur database efisien dengan kueri optimal dan pemodelan data.',
    'services.deploy': 'Layanan Deployment',
    'services.deployDesc': 'Deployment mulus ke produksi dengan pipeline CI/CD dan monitoring.',
    'projects.subtitle': 'Karya Saya',
    'projects.title': 'Proyek Unggulan',
    'projects.all': 'Semua',
    'caseStudies.subtitle': 'Studi Mendalam',
    'caseStudies.title': 'Studi Kasus',
    'caseStudies.problem': 'Masalah',
    'caseStudies.solution': 'Solusi',
    'caseStudies.tech': 'Teknologi',
    'caseStudies.challenges': 'Tantangan',
    'caseStudies.implementation': 'Implementasi',
    'caseStudies.result': 'Hasil',
    'caseStudies.study1Title': 'Kalkulator Affine Cipher',
    'caseStudies.study1Problem': 'Kebutuhan akan alat berbasis web yang dapat mengenkripsi dan mendekripsi pesan menggunakan algoritma Affine Cipher untuk tujuan pendidikan.',
    'caseStudies.study1Solution': 'Membangun aplikasi web interaktif dengan backend PHP yang menangani logika enkripsi/dekripsi dan frontend JavaScript untuk pemrosesan input real-time.',
    'caseStudies.study1Challenges': 'Menerapkan rumus matematika affine cipher dengan benar dan menangani kasus tepi seperti karakter non-alfabet.',
    'caseStudies.study1Impl': 'Membangun fungsi PHP modular untuk algoritma affine cipher (ax + b mod 26), dengan UI responsif untuk tampilan input dan output.',
    'caseStudies.study1Result': 'Berhasil men-deploy alat pendidikan yang digunakan siswa untuk belajar dan memvisualisasikan konsep enkripsi affine cipher.',
    'caseStudies.study2Title': 'Sistem Pemilihan BEM',
    'caseStudies.study2Problem': 'Sekolah membutuhkan platform digital untuk pemilihan ketua BEM menggantikan surat suara kertas dan penghitungan manual.',
    'caseStudies.study2Solution': 'Mengembangkan sistem voting berbasis web yang aman dengan profil kandidat, autentikasi pemilih, dan tabulasi hasil real-time.',
    'caseStudies.study2Challenges': 'Mencegah voting ganda, memastikan autentikasi pemilih, dan menampilkan hasil real-time tanpa mengungkapkan suara individu.',
    'caseStudies.study2Impl': 'Dibangun dengan PHP dan MySQL untuk penyimpanan suara yang aman, Bootstrap untuk UI responsif, dan AJAX untuk pembaruan hasil real-time.',
    'caseStudies.study2Result': 'Berhasil melakukan pemilihan sekolah dengan partisipasi 95% dan menghilangkan kesalahan penghitungan manual.',
    'github.subtitle': 'Open Source',
    'github.title': 'Analitik GitHub',
    'github.repos': 'Repositori',
    'github.commits': 'Commit',
    'github.stars': 'Bintang',
    'github.languages': 'Bahasa',
    'timeline.subtitle': 'Perjalanan Saya',
    'timeline.title': 'Linimasa Karier',
    'timeline.year1Title': 'Mulai Belajar Coding',
    'timeline.year1Desc': 'Memulai perjalanan pemrograman dengan HTML, CSS, dan JavaScript. Membangun situs web sederhana pertama.',
    'timeline.year2Title': 'Fokus Backend & Database',
    'timeline.year2Desc': 'Menguasai PHP, Laravel, MySQL, dan MongoDB. Mulai membangun aplikasi web dinamis.',
    'timeline.year3Title': 'Membangun Sistem Informasi',
    'timeline.year3Desc': 'Mengembangkan berbagai sistem informasi: e-commerce, absensi, manajemen laundry, dan lainnya.',
    'timeline.year4Title': 'Freelance & Personal Branding',
    'timeline.year4Desc': 'Fokus pada proyek freelance, membangun merek pribadi, dan memperluas jaringan profesional.',
    'activity.subtitle': 'Dasbor',
    'activity.title': 'Aktivitas Coding',
    'activity.hours': 'Jam Coding',
    'activity.projects': 'Proyek Selesai',
    'activity.learning': 'Progres Belajar',
    'activity.focus': 'Fokus Saat Ini',
    'certs.subtitle': 'Kredensial',
    'certs.title': 'Sertifikat',
    'certs.cert1': 'Simplilearn SkillUp',
    'certs.cert2': 'Aguna Course',
    'certs.cert3': 'Komdigi',
    'certs.cert4': 'Dicoding',
    'testimonials.subtitle': 'Umpan Balik',
    'testimonials.title': 'Testimoni',
    'testimonials.testimonial1': '"Gilbert memberikan platform e-commerce yang luar biasa. Keahlian teknis dan perhatiannya terhadap detail melampaui harapan kami."',
    'testimonials.testimonial2': '"Bekerja dengan Gilbert pada sistem absensi sangat lancar. Dia memahami kebutuhan kami dengan sempurna dan mengirimkan tepat waktu."',
    'testimonials.testimonial3': '"Sangat profesional dan terampil. Pekerjaan pengembangan backend Gilbert bersih, terdokumentasi dengan baik, dan skalabel."',
    'testimonials.author1Name': 'Nama Klien',
    'testimonials.author1Role': 'Pemilik Bisnis',
    'testimonials.author2Name': 'Admin Sekolah',
    'testimonials.author2Role': 'Administrator Institusi',
    'testimonials.author3Name': 'Manajer Proyek',
    'testimonials.author3Role': 'Perusahaan Teknologi',
    'blog.subtitle': 'Artikel',
    'blog.title': 'Posting Blog Terbaru',
    'blog.post1': 'Memulai dengan Laravel',
    'blog.post1Excerpt': 'Panduan komprehensif untuk membangun aplikasi web modern dengan framework Laravel.',
    'blog.post2': 'Membangun REST API',
    'blog.post2Excerpt': 'Praktik terbaik untuk merancang dan mengimplementasikan RESTful API yang skalabel.',
    'blog.post3': 'MongoDB untuk Pemula',
    'blog.post3Excerpt': 'Memahami database NoSQL dan memulai dengan MongoDB.',
    'blog.post4': 'Node.js untuk Backend',
    'blog.post4Excerpt': 'Mengapa Node.js adalah pilihan tepat untuk membangun layanan backend yang skalabel.',
    'blog.post5': 'Dasar-dasar Keamanan Web',
    'blog.post5Excerpt': 'Praktik keamanan penting yang harus diketahui setiap pengembang web.',
    'blog.readMore': 'Baca Selengkapnya',
    'video.subtitle': 'Perkenalan',
    'video.title': 'Video Perkenalan',
    'video.clickToPlay': 'Klik untuk memutar video perkenalan',
    'video.transcript': 'Halo, saya Gilbert Batahi Lumbantobing, seorang mahasiswa Ilmu Komputer dan Web Developer yang bersemangat dalam membangun aplikasi web modern dan skalabel. Dengan keahlian di Laravel, Node.js, dan desain database, saya membantu bisnis dan institusi menciptakan solusi digital yang berdampak nyata.',
    'downloads.subtitle': 'Sumber Daya',
    'downloads.title': 'Pusat Unduhan',
    'downloads.cv': 'Curriculum Vitae',
    'downloads.cvInfo': 'PDF - Diperbarui 2026',
    'downloads.portfolio': 'Portfolio PDF',
    'downloads.portfolioInfo': 'PDF - Portofolio Lengkap',
    'downloads.certificates': 'Paket Sertifikat',
    'downloads.certsInfo': 'PDF - Semua Sertifikat',
    'contact.subtitle': 'Hubungi Saya',
    'contact.title': 'Kontak Saya',
    'contact.emailLabel': 'Email',
    'contact.whatsappLabel': 'WhatsApp',
    'contact.linkedinLabel': 'LinkedIn',
    'contact.locationLabel': 'Lokasi',
    'contact.location': 'Indonesia',
    'contact.formName': 'Nama Anda',
    'contact.formEmail': 'Email Anda',
    'contact.formSubject': 'Subjek',
    'contact.formMessage': 'Pesan Anda',
    'contact.sendMessage': 'Kirim Pesan',
    'social.subtitle': 'Terhubung',
    'social.title': 'Mari Terhubung',
    'footer.tagline': 'Membangun Pengalaman Web Modern',
    'footer.quickLinks': 'Tautan Cepat',
    'footer.services': 'Layanan',
    'footer.contact': 'Kontak',
    'footer.rights': 'Hak cipta dilindungi.',
    'ai.title': 'Asisten AI',
    'ai.status': 'Tanya apa saja tentang Gilbert',
    'ai.welcome': 'Hai! Saya asisten AI Gilbert. Tanya tentang skill, proyek, pengalaman, atau apapun!',
    'ai.placeholder': 'Ketik pesan Anda...',
  }
};

let currentLang = localStorage.getItem('lang') || 'en';
let currentTheme = localStorage.getItem('theme') || 'dark';

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang === 'en' ? 'en' : 'id';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang] && translations[lang][key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translations[lang][key];
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (translations[lang] && translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });
  document.getElementById('lang-label').textContent = lang === 'en' ? 'EN' : 'ID';
}

function applyTheme(theme) {
  currentTheme = theme;
  localStorage.setItem('theme', theme);
  document.documentElement.setAttribute('data-theme', theme);
  const icon = document.querySelector('#theme-toggle i');
  if (icon) {
    icon.className = theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
  }
}

function initLoadingScreen() {
  const loaderName = document.getElementById('loader-name');
  const loaderTagline = document.getElementById('loader-tagline');
  const loaderBar = document.getElementById('loader-bar');
  const loaderPercent = document.getElementById('loader-percent');
  const loadingScreen = document.getElementById('loading-screen');

  const fullName = 'Gilbert Batahi Lumbantobing';
  const tagline = 'Building Modern Web Experiences';

  const tl = gsap.timeline();

  tl.to(loaderBar, {
    width: '100%',
    duration: 2.5,
    ease: 'power2.inOut',
    onUpdate: function() {
      const pct = Math.round(this.progress() * 100);
      loaderPercent.textContent = String(pct).padStart(2, '0') + '%';
    }
  });

  let nameIdx = 0;
  const nameInterval = setInterval(() => {
    if (nameIdx <= fullName.length) {
      loaderName.textContent = fullName.slice(0, nameIdx);
      nameIdx++;
    } else {
      clearInterval(nameInterval);
    }
  }, 60);

  setTimeout(() => {
    let tagIdx = 0;
    const tagInterval = setInterval(() => {
      if (tagIdx <= tagline.length) {
        loaderTagline.textContent = tagline.slice(0, tagIdx);
        tagIdx++;
      } else {
        clearInterval(tagInterval);
      }
    }, 35);
  }, 700);

  tl.call(() => {
    gsap.to(loadingScreen, {
      scale: 1.05,
      opacity: 0,
      duration: .6,
      ease: 'power3.inOut',
      onComplete: () => {
        loadingScreen.classList.add('hidden');
        loadingScreen.style.scale = '';
        loadingScreen.style.opacity = '';
        document.body.style.overflow = '';
        initHeroAnimations();
        initAchievementCounters();
      }
    });
  }, null, '+=0.3');
}

function initThreeBackground() {
  const canvas = document.getElementById('three-bg');
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const particlesGeo = new THREE.BufferGeometry();
  const particleCount = 2000;
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 30;
    positions[i + 1] = (Math.random() - 0.5) * 20;
    positions[i + 2] = (Math.random() - 0.5) * 20;

    const color = new THREE.Color().setHSL(0.55 + Math.random() * 0.15, 0.8, 0.5);
    colors[i] = color.r;
    colors[i + 1] = color.g;
    colors[i + 2] = color.b;
  }

  particlesGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  particlesGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const particleMat = new THREE.PointsMaterial({
    size: 0.04,
    vertexColors: true,
    transparent: true,
    opacity: 0.6,
    blending: THREE.AdditiveBlending,
  });

  const particles = new THREE.Points(particlesGeo, particleMat);
  scene.add(particles);

  const gridHelper = new THREE.GridHelper(20, 30, 0x00d4ff, 0x7c3aed);
  gridHelper.position.y = -3;
  gridHelper.material.transparent = true;
  gridHelper.material.opacity = 0.15;
  scene.add(gridHelper);

  const shapesGroup = new THREE.Group();
  const shapeMat = new THREE.MeshBasicMaterial({ color: 0x00d4ff, transparent: true, opacity: 0.08, wireframe: true });

  for (let i = 0; i < 8; i++) {
    let geo;
    const r = Math.random();
    if (r < 0.33) geo = new THREE.BoxGeometry(0.3, 0.3, 0.3);
    else if (r < 0.66) geo = new THREE.IcosahedronGeometry(0.25, 0);
    else geo = new THREE.TorusGeometry(0.2, 0.08, 8, 16);

    const mesh = new THREE.Mesh(geo, shapeMat.clone());
    mesh.position.set((Math.random() - 0.5) * 12, (Math.random() - 0.5) * 8, (Math.random() - 0.5) * 8 - 3);
    mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
    mesh.userData = {
      speed: 0.2 + Math.random() * 0.5,
      rotSpeed: { x: (Math.random() - 0.5) * 0.02, y: (Math.random() - 0.5) * 0.02 }
    };
    shapesGroup.add(mesh);
  }
  scene.add(shapesGroup);

  camera.position.z = 8;

  let mouseX = 0, mouseY = 0;
  let targetX = 0, targetY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
  });

  function animate() {
    requestAnimationFrame(animate);

    targetX += (mouseX * 0.3 - targetX) * 0.05;
    targetY += (mouseY * 0.3 - targetY) * 0.05;

    particles.rotation.y += 0.0003;
    particles.rotation.x += 0.0001;

    shapesGroup.children.forEach((mesh) => {
      mesh.rotation.x += mesh.userData.rotSpeed.x;
      mesh.rotation.y += mesh.userData.rotSpeed.y;
    });

    camera.position.x += (targetX * 1.5 - camera.position.x) * 0.03;
    camera.position.y += (targetY * 1.5 - camera.position.y) * 0.03;
    camera.lookAt(scene.position);

    renderer.render(scene, camera);
  }

  animate();

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}

function initCursor() {
  const dot = document.querySelector('.cursor-dot');
  const ring = document.querySelector('.cursor-ring');
  if (!dot || !ring) return;

  document.querySelector('.custom-cursor').classList.add('active');

  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
  });

  function animateRing() {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;
    ring.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px)`;
    requestAnimationFrame(animateRing);
  }
  animateRing();

  document.querySelectorAll('a, button, .tech-item, .service-card, .project-card, .cert-card, input, textarea').forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('hover'));
    el.addEventListener('mouseleave', () => ring.classList.remove('hover'));
  });
}

function initMouseGlow() {
  const glow = document.getElementById('mouse-glow');
  if (!glow) return;

  document.addEventListener('mousemove', (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  });
}

function initNavbar() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });
}

function initHamburger() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });
}

function initTyped() {
  new Typed('#typed-text', {
    strings: [
      'Web Developer',
      'Laravel Developer',
      'Backend Developer',
      'Computer Science Student'
    ],
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 2000,
    loop: true,
    showCursor: false
  });
}

function initAOS() {
  AOS.init({
    duration: 800,
    once: true,
    offset: 80,
    easing: 'ease-out-cubic'
  });
}

function initLenis() {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    smoothTouch: false,
  });

  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
}

function initHeroAnimations() {
  const tl = gsap.timeline();

  tl.from('.hero-greeting', { y: 30, opacity: 0, duration: 0.6, ease: 'power2.out' })
    .from('.hero-name', { y: 40, opacity: 0, duration: 0.8, ease: 'power2.out' }, '-=0.3')
    .from('.hero-typed-wrapper', { y: 30, opacity: 0, duration: 0.6, ease: 'power2.out' }, '-=0.4')
    .from('.hero-desc', { y: 30, opacity: 0, duration: 0.6, ease: 'power2.out' }, '-=0.3')
    .from('.hero-buttons .btn', { y: 30, opacity: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out' }, '-=0.3')
    .from('.hero-social .social-icon', { y: 20, opacity: 0, duration: 0.4, stagger: 0.08, ease: 'power2.out' }, '-=0.2')
    .from('.availability-badge', { y: 20, opacity: 0, duration: 0.5, ease: 'power2.out' }, '-=0.5')
    .from('.scroll-indicator', { opacity: 0, duration: 0.6, ease: 'power2.out' }, '-=0.2');
}

function initAchievementCounters() {
  gsap.utils.toArray('.achievement-num, .github-stat-num').forEach(el => {
    const target = parseInt(el.dataset.target);
    if (!target) return;

    ScrollTrigger.create({
      trigger: el.closest('.achievements, .github-analytics') || el,
      start: 'top 85%',
      onEnter: () => {
        gsap.to(el, {
          innerText: target,
          duration: 2,
          ease: 'power2.out',
          snap: { innerText: 1 },
          onUpdate: function() {
            const val = Math.round(el.textContent);
            el.textContent = val.toLocaleString();
          }
        });
      },
      once: true
    });
  });
}

function initScrollProgress() {
  const bar = document.getElementById('scroll-progress');
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    bar.style.width = progress + '%';
  });
}

function initThemeToggle() {
  const btn = document.getElementById('theme-toggle');
  btn.addEventListener('click', () => {
    applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
  });
}

function initLangToggle() {
  const btn = document.getElementById('lang-toggle');
  btn.addEventListener('click', () => {
    applyLang(currentLang === 'en' ? 'id' : 'en');
  });
}

function initProjectFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      projectCards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = 'block';
          setTimeout(() => { card.style.opacity = '1'; }, 10);
        } else {
          card.style.opacity = '0';
          setTimeout(() => { card.style.display = 'none'; }, 300);
        }
      });
    });
  });

  projectCards.forEach(card => { card.style.opacity = '1'; });
}

function initTestimonialSlider() {
  const track = document.getElementById('testimonial-track');
  const cards = track.querySelectorAll('.testimonial-card');
  const prevBtn = document.getElementById('testimonial-prev');
  const nextBtn = document.getElementById('testimonial-next');
  const dotsContainer = document.getElementById('testimonial-dots');
  let current = 0;
  const total = cards.length;

  cards.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = 'testimonial-dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
  });

  function goTo(index) {
    current = index;
    track.style.transform = `translateX(-${current * 100}%)`;
    document.querySelectorAll('.testimonial-dot').forEach((d, i) => {
      d.classList.toggle('active', i === current);
    });
  }

  prevBtn.addEventListener('click', () => {
    goTo(current === 0 ? total - 1 : current - 1);
  });

  nextBtn.addEventListener('click', () => {
    goTo(current === total - 1 ? 0 : current + 1);
  });

  let autoSlide = setInterval(() => {
    goTo(current === total - 1 ? 0 : current + 1);
  }, 5000);

  track.addEventListener('mouseenter', () => clearInterval(autoSlide));
  track.addEventListener('mouseleave', () => {
    autoSlide = setInterval(() => {
      goTo(current === total - 1 ? 0 : current + 1);
    }, 5000);
  });
}

function initVanillaTilt() {
  VanillaTilt.init(document.querySelectorAll('.project-card, .service-card, .cert-card'), {
    max: 5,
    speed: 400,
    glare: true,
    'max-glare': 0.1,
    scale: 1.01,
  });
}

function initFAB() {
  const fabBtn = document.getElementById('fab-btn');
  const fabMenu = document.getElementById('fab-menu');

  fabBtn.addEventListener('click', () => {
    fabBtn.classList.toggle('open');
    fabMenu.classList.toggle('open');
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.fab')) {
      fabBtn.classList.remove('open');
      fabMenu.classList.remove('open');
    }
  });
}

function initAIChat() {
  const toggle = document.getElementById('ai-chat-toggle');
  const window = document.getElementById('ai-chat-window');
  const close = document.getElementById('ai-chat-close');
  const input = document.getElementById('ai-input');
  const send = document.getElementById('ai-send');
  const messages = document.getElementById('ai-chat-messages');
  const badge = document.querySelector('.ai-chat-badge');

  toggle.addEventListener('click', () => {
    const isOpen = window.classList.toggle('open');
    if (isOpen) badge.style.display = 'none';
  });

  close.addEventListener('click', () => {
    window.classList.remove('open');
  });

  const knowledge = [
    { keys: ['skill', 'skil', 'keahlian', 'bisa', 'expertise', 'tech stack'], response: 'Gilbert has expertise in Laravel, Node.js, PHP, MySQL, MongoDB, JavaScript, HTML/CSS, Bootstrap, Tailwind CSS, Git, and REST API development.', responseId: 'Gilbert memiliki keahlian di Laravel, Node.js, PHP, MySQL, MongoDB, JavaScript, HTML/CSS, Bootstrap, Tailwind CSS, Git, dan pengembangan REST API.' },
    { keys: ['experience', 'pengalaman', 'experience'], response: 'Gilbert started coding in 2023 and has built projects including Affine Cipher Calculator, Mathematics Learning Website, Student Council Election System, Laundry App, and School Inventory System.', responseId: 'Gilbert mulai coding tahun 2023 dan telah membangun proyek seperti Kalkulator Affine Cipher, Website Pembelajaran Matematika, Sistem Pemilihan BEM, Aplikasi Laundry, dan Sistem Inventaris Sekolah.' },
    { keys: ['project', 'proyek', 'project'], response: 'Gilbert has built featured projects: Affine Cipher Calculator, Mathematics Learning Website, Student Council Election System, Laundry App, and School Inventory System.', responseId: 'Gilbert telah membangun proyek unggulan: Kalkulator Affine Cipher, Website Pembelajaran Matematika, Sistem Pemilihan BEM, Aplikasi Laundry, dan Sistem Inventaris Sekolah.' },
    { keys: ['contact', 'kontak', 'email', 'phone', 'wa', 'whatsapp', 'telepon', 'hp', 'nomor'], response: 'You can reach Gilbert via email at gilbert@example.com, WhatsApp at +62 812-3456-7890, or LinkedIn at /in/gilbertlumbantobing.', responseId: 'Anda bisa menghubungi Gilbert melalui email di gilbert@example.com, WhatsApp di +62 812-3456-7890, atau LinkedIn di /in/gilbertlumbantobing.' },
    { keys: ['location', 'lokasi', 'tinggal', 'alamat', 'where'], response: 'Gilbert is based in Indonesia.', responseId: 'Gilbert tinggal di Indonesia.' },
    { keys: ['education', 'pendidikan', 'kuliah', 'campus', 'university', 'student', 'mahasiswa'], response: 'Gilbert is a Computer Science student with a passion for web development and software engineering.', responseId: 'Gilbert adalah mahasiswa Ilmu Komputer yang memiliki passion di pengembangan web dan rekayasa perangkat lunak.' },
    { keys: ['certificate', 'sertifikat', 'sertif', 'certification'], response: 'Gilbert has earned 5 certificates: Web Development Fundamentals, PHP & Laravel Development, Database Design & Management, JavaScript Fundamentals, and REST API Development.', responseId: 'Gilbert telah memperoleh 5 sertifikat: Web Development Fundamentals, PHP & Laravel Development, Database Design & Management, JavaScript Fundamentals, dan REST API Development.' },
    { keys: ['service', 'layanan', 'jasa', 'offer'], response: 'Gilbert offers: Web Development, Backend Development, REST API Development, Database Design, and Deployment Services.', responseId: 'Gilbert menawarkan: Pengembangan Web, Pengembangan Backend, Pengembangan REST API, Desain Database, dan Layanan Deployment.' },
    { keys: ['freelance', 'available', 'tersedia', 'hire', 'sewa', 'kerjasama'], response: 'Yes! Gilbert is currently available for freelance projects.', responseId: 'Ya! Gilbert saat ini tersedia untuk proyek freelance.' },
    { keys: ['price', 'harga', 'bayar', 'biaya', 'cost', 'rate'], response: 'For pricing inquiries, please contact Gilbert directly via email or WhatsApp.', responseId: 'Untuk pertanyaan harga, silakan hubungi Gilbert langsung melalui email atau WhatsApp.' },
    { keys: ['github', 'git'], response: 'Gilbert\'s GitHub: github.com/gilbertlumbantobing', responseId: 'GitHub Gilbert: github.com/gilbertlumbantobing' },
    { keys: ['linkedin'], response: 'Gilbert\'s LinkedIn: linkedin.com/in/gilbertlumbantobing', responseId: 'LinkedIn Gilbert: linkedin.com/in/gilbertlumbantobing' },
    { keys: ['instagram', 'ig'], response: 'Gilbert\'s Instagram: instagram.com/gilbertlumbantobing', responseId: 'Instagram Gilbert: instagram.com/gilbertlumbantobing' },
    { keys: ['siapa gilbert', 'siapa itu gilbert', 'who is gilbert', 'about gilbert', 'tentang gilbert', 'perkenalkan gilbert', 'gilbert'], response: 'Gilbert Batahi Lumbantobing is a Computer Science student, Web Developer, and Backend Developer from Indonesia. He specializes in Laravel, Node.js, and modern web technologies. He started coding in 2023 and has built 6+ projects. Ask me about his skills, projects, or experience!', responseId: 'Gilbert Batahi Lumbantobing adalah seorang mahasiswa Ilmu Komputer, Web Developer, dan Backend Developer dari Indonesia. Ia berspesialisasi di Laravel, Node.js, dan teknologi web modern. Ia mulai coding tahun 2023 dan telah membangun 6+ proyek. Tanyakan tentang skill, proyek, atau pengalamannya!' },
    { keys: ['halo', 'hai', 'hey', 'hello', 'hi', 'pagi', 'siang', 'sore', 'malam'], response: 'Hello! How can I help you? Ask me about Gilbert, coding, technology, or general knowledge!', responseId: 'Halo! Ada yang bisa saya bantu? Tanya tentang Gilbert, coding, teknologi, atau pengetahuan umum!' },
    { keys: ['bahasa indonesia', 'indonesia', 'ganti bahasa', 'gunakan bahasa', 'pake bahasa', 'id'], response: 'OK! Sekarang saya akan menjawab dalam Bahasa Indonesia. Tanyakan apa saja tentang Gilbert!', responseId: 'OK! Sekarang saya akan menjawab dalam Bahasa Indonesia. Tanyakan apa saja tentang Gilbert!' },
    { keys: ['english', 'bahasa inggris', 'ganti english', 'switch language', 'en'], response: 'OK! I will now respond in English. Ask me anything about Gilbert!', responseId: 'OK! I will now respond in English. Ask me anything about Gilbert!' },
    { keys: ['makasih', 'terima kasih', 'thank', 'thanks', 'trims', 'thx', 'thankyou'], response: 'You\'re welcome! Feel free to ask me anything else!', responseId: 'Sama-sama! Silakan tanya apapun lagi!' },
    { keys: ['nanya', 'bertanya', 'tanya', 'question', 'tanyain', 'mau tanya', 'boleh'], response: 'Of course! Ask me anything about Gilbert, coding, technology, or general knowledge. I\'ll try my best to answer!', responseId: 'Tentu saja! Tanya apa saja tentang Gilbert, coding, teknologi, atau pengetahuan umum. Saya akan jawab semampu saya!' },
    { keys: ['saran', 'advice', 'tips', 'rekomendasi', 'recommend', 'mulai', 'pemula', 'beginner', 'newbie'], response: 'Great question! For beginners, Gilbert recommends starting with HTML/CSS, then JavaScript, then pick a framework like Laravel or Node.js. Build projects, not just follow tutorials!', responseId: 'Pertanyaan bagus! Untuk pemula, Gilbert menyarankan mulai dengan HTML/CSS, lalu JavaScript, kemudian pilih framework seperti Laravel atau Node.js. Bangun proyek nyata, jangan hanya ikuti tutorial!' },
    { keys: ['codin', 'ngodin', 'program', 'programming', 'kodin'], response: 'Gilbert loves coding! He started learning in 2023 and now builds web apps with Laravel, Node.js, and modern tech. Want to know his favorite tech stack or projects?', responseId: 'Gilbert suka coding! Dia mulai belajar tahun 2023 dan sekarang membangun aplikasi web dengan Laravel, Node.js, dan teknologi modern. Mau tahu tech stack favorit atau proyeknya?' },
    { keys: ['belajar', 'pelajaran', 'study', 'learn', 'learning', 'course', 'tutorial', 'les', 'sekolah'], response: 'Gilbert is a lifelong learner! He is currently studying Computer Science and mastering backend development. He believes in learning by building real projects. Ask me about his learning journey!', responseId: 'Gilbert adalah pembelajar seumur hidup! Saat ini dia belajar Ilmu Komputer dan menguasai backend development. Dia percaya belajar sambil membangun proyek nyata. Tanya tentang perjalanan belajarnya!' },
    { keys: ['frontend', 'front end', 'ui', 'ux', 'design', 'tampilan'], response: 'For frontend, Gilbert works with HTML, CSS, JavaScript, Bootstrap, and Tailwind CSS to build responsive and modern interfaces.', responseId: 'Untuk frontend, Gilbert menggunakan HTML, CSS, JavaScript, Bootstrap, dan Tailwind CSS untuk membangun antarmuka yang responsif dan modern.' },
    { keys: ['backend', 'back end', 'server', 'api', 'rest'], response: 'Backend is Gilbert\'s main focus! He uses Laravel, Node.js, Express.js, and PHP to build robust server-side applications.', responseId: 'Backend adalah fokus utama Gilbert! Dia menggunakan Laravel, Node.js, Express.js, dan PHP untuk membangun aplikasi server-side yang kokoh.' },
    { keys: ['database', 'data', 'db', 'mysql', 'mongodb', 'sql'], response: 'Gilbert works with MySQL for relational databases and MongoDB for NoSQL. He designs efficient database schemas and optimized queries.', responseId: 'Gilbert menggunakan MySQL untuk database relasional dan MongoDB untuk NoSQL. Dia mendesain skema database yang efisien dan query yang optimal.' },
    { keys: ['react', 'vue', 'angular', 'next', 'nuxt'], response: 'Currently Gilbert focuses on Laravel and vanilla JavaScript for frontend, but he is exploring React and modern JS frameworks!', responseId: 'Saat ini Gilbert fokus pada Laravel dan JavaScript murni untuk frontend, tapi dia sedang menjelajahi React dan framework JS modern!' },
    { keys: ['laravel', 'php'], response: 'Laravel is Gilbert\'s main framework! He builds full-stack web applications, REST APIs, and information systems using Laravel and PHP.', responseId: 'Laravel adalah framework utama Gilbert! Dia membangun aplikasi web full-stack, REST API, dan sistem informasi menggunakan Laravel dan PHP.' },
    { keys: ['node', 'express', 'nodejs', 'node.js'], response: 'Gilbert uses Node.js and Express.js for building scalable backend services and RESTful APIs.', responseId: 'Gilbert menggunakan Node.js dan Express.js untuk membangun layanan backend dan RESTful API yang skalabel.' },

    { keys: ['komputer', 'computer', 'pc', 'laptop', 'hardware', 'processor', 'cpu', 'ram', 'memory'], response: 'Computers work by processing data through a CPU, storing it in RAM for quick access, and saving it permanently on storage like SSDs. Key components: CPU (brain), RAM (short-term memory), storage (long-term), motherboard (connector), GPU (graphics).', responseId: 'Komputer bekerja dengan memproses data melalui CPU, menyimpannya di RAM untuk akses cepat, dan menyimpannya secara permanen di penyimpanan seperti SSD. Komponen utama: CPU (otak), RAM (memori jangka pendek), penyimpanan (jangka panjang), motherboard (penghubung), GPU (grafis).' },
    { keys: ['ai', 'artificial intelligence', 'kecerdasan buatan', 'machine learning', 'deep learning'], response: 'AI is technology that enables machines to mimic human intelligence. Types: Narrow AI (single task, like chatbots), General AI (human-level, still theoretical). ML is a subset where models learn from data. Common applications: image recognition, NLP, recommendation systems.', responseId: 'AI adalah teknologi yang memungkinkan mesin meniru kecerdasan manusia. Jenis: AI Sempit (tugas tunggal, seperti chatbot), AI Umum (setara manusia, masih teoritis). ML adalah bagian AI di mana model belajar dari data. Aplikasi: pengenalan gambar, NLP, sistem rekomendasi.' },
    { keys: ['internet', 'website', 'web'], response: 'The internet is a global network connecting millions of computers. Websites are hosted on servers and accessed via browsers using HTTP/HTTPS. The World Wide Web was invented by Tim Berners-Lee in 1989.', responseId: 'Internet adalah jaringan global yang menghubungkan jutaan komputer. Website dihosting di server dan diakses via browser menggunakan HTTP/HTTPS. World Wide Web ditemukan oleh Tim Berners-Lee pada 1989.' },
    { keys: ['browser', 'chrome', 'firefox', 'edge', 'safari', 'opera'], response: 'A browser is software to access websites. Popular browsers: Chrome (Google), Firefox (Mozilla), Safari (Apple), Edge (Microsoft). They render HTML, CSS, and JavaScript to display web pages. Chrome has ~65% market share worldwide.', responseId: 'Browser adalah perangkat lunak untuk mengakses website. Browser populer: Chrome (Google), Firefox (Mozilla), Safari (Apple), Edge (Microsoft). Mereka merender HTML, CSS, dan JavaScript untuk menampilkan halaman web. Chrome memiliki ~65% pangsa pasar global.' },

    { keys: ['matematika', 'math', 'mathematics', 'hitung', 'angka', 'number'], response: 'Mathematics is the study of numbers, quantities, shapes, and patterns. Branches: algebra (equations), geometry (shapes), calculus (change), statistics (data). It forms the foundation for computer science, physics, engineering, and many other fields.', responseId: 'Matematika adalah ilmu tentang angka, jumlah, bentuk, dan pola. Cabang: aljabar (persamaan), geometri (bentuk), kalkulus (perubahan), statistika (data). Matematika adalah fondasi untuk ilmu komputer, fisika, teknik, dan banyak bidang lainnya.' },
    { keys: ['fisika', 'physics', 'fisik'], response: 'Physics is the study of matter, energy, space, and time. Key concepts: Newton\'s laws of motion, gravity, electromagnetism, thermodynamics, quantum mechanics. Physics explains how the universe works from atoms to galaxies.', responseId: 'Fisika adalah ilmu tentang materi, energi, ruang, dan waktu. Konsep utama: hukum gerak Newton, gravitasi, elektromagnetisme, termodinamika, mekanika kuantum. Fisika menjelaskan cara kerja alam semesta dari atom hingga galaksi.' },
    { keys: ['kimia', 'chemistry', 'kimiawi', 'unsur', 'element'], response: 'Chemistry studies matter, its properties, how substances combine and react. Key concepts: atoms, molecules, elements (118 known), chemical bonds, reactions, periodic table. It\'s central to medicine, materials science, and industry.', responseId: 'Kimia mempelajari materi, sifat-sifatnya, bagaimana zat bergabung dan bereaksi. Konsep utama: atom, molekul, unsur (118 diketahui), ikatan kimia, reaksi, tabel periodik. Kimia penting dalam kedokteran, ilmu material, dan industri.' },
    { keys: ['biologi', 'biology', 'biologis'], response: 'Biology is the study of life and living organisms. Key branches: cell biology, genetics, evolution, ecology, anatomy. All living things are made of cells, use DNA for heredity, and evolve through natural selection. There are ~8.7 million species on Earth.', responseId: 'Biologi adalah ilmu tentang kehidupan dan organisme hidup. Cabang utama: biologi sel, genetika, evolusi, ekologi, anatomi. Semua makhluk hidup terdiri dari sel, menggunakan DNA untuk pewarisan sifat, dan berevolusi melalui seleksi alam. Ada ~8,7 juta spesies di Bumi.' },

    { keys: ['indonesia', 'indonesian', 'nusantara', 'tanah air', 'pulau', 'jakarta', 'bali', 'jawa', 'sunda', 'sumatra', 'papua', 'kalimantan', 'sulawesi'], response: 'Indonesia is the world\'s largest archipelago with 17,000+ islands. Population: 280+ million (4th largest). Capital: Jakarta (moving to Nusantara). Official language: Indonesian (Bahasa Indonesia). It has 700+ ethnic groups and 700+ languages. Independence: August 17, 1945.', responseId: 'Indonesia adalah negara kepulauan terbesar di dunia dengan 17.000+ pulau. Penduduk: 280+ juta (ke-4 terbesar). Ibukota: Jakarta (pindah ke Nusantara). Bahasa resmi: Bahasa Indonesia. Memiliki 700+ suku bangsa dan 700+ bahasa. Merdeka: 17 Agustus 1945.' },
    { keys: ['jakarta', 'ibukota', 'jkt'], response: 'Jakarta is the capital of Indonesia with ~10 million population (30M+ in metro area). It\'s the economic, political, and cultural center. The government is moving the capital to Nusantara in East Kalimantan due to congestion, pollution, and land subsidence.', responseId: 'Jakarta adalah ibukota Indonesia dengan ~10 juta penduduk (30M+ di area metro). Pusat ekonomi, politik, dan budaya. Pemerintah memindahkan ibukota ke Nusantara di Kalimantan Timur karena kemacetan, polusi, dan penurunan tanah.' },
    { keys: ['bali'], response: 'Bali is a famous Indonesian island known for beaches, temples, rice terraces, and unique Hindu culture. Tourism hotspot: Kuta, Seminyak, Ubud, Tanah Lot. Also known for arts, dance, and the philosophy of Tri Hita Karana (harmony with God, people, and nature).', responseId: 'Bali adalah pulau Indonesia yang terkenal dengan pantai, pura, terasering sawah, dan budaya Hindu yang unik. Destinasi wisata: Kuta, Seminyak, Ubud, Tanah Lot. Juga terkenal dengan seni, tari, dan filosofi Tri Hita Karana.' },

    { keys: ['cuaca', 'weather', 'iklim', 'climate', 'hujan', 'panas', 'dingin', 'musim'], response: 'Weather is the day-to-day atmospheric conditions (temperature, rain, wind). Climate is long-term weather patterns. Indonesia has a tropical climate with two seasons: rainy (Oct-Apr) and dry (May-Sep). Average temperature: 26-28°C year-round.', responseId: 'Cuaca adalah kondisi atmosfer harian (suhu, hujan, angin). Iklim adalah pola cuaca jangka panjang. Indonesia beriklim tropis dengan dua musim: hujan (Okt-Apr) dan kemarau (Mei-Sep). Suhu rata-rata: 26-28°C sepanjang tahun.' },
    { keys: ['waktu', 'time', 'jam', 'tanggal', 'hari', 'bulan', 'tahun'], response: 'Time zones in Indonesia: WIB (UTC+7, Java-Sumatra), WITA (UTC+8, Kalimantan-Sulawesi-Bali), WIT (UTC+9, Papua-Maluku). Indonesia uses the Gregorian calendar alongside the Islamic calendar for religious purposes.', responseId: 'Zona waktu Indonesia: WIB (UTC+7, Jawa-Sumatera), WITA (UTC+8, Kalimantan-Sulawesi-Bali), WIT (UTC+9, Papua-Maluku). Indonesia menggunakan kalender Masehi dan kalender Hijriah untuk keperluan agama.' },

    { keys: ['makanan', 'food', 'kuliner', 'masakan', 'resep', 'recipe', 'enak'], response: 'Indonesian cuisine is diverse and rich! Famous dishes: Nasi Goreng (fried rice), Rendang (spicy beef, world\'s best food), Sate (skewers), Gado-gado (salad with peanut sauce), Soto (soup), Mie Ayam (chicken noodles). Each region has unique specialties.', responseId: 'Masakan Indonesia sangat beragam! Hidangan terkenal: Nasi Goreng, Rendang (daging sapi pedas, makanan terbaik dunia), Sate, Gado-gado, Soto, Mie Ayam. Setiap daerah memiliki spesialisasi unik.' },
    { keys: ['olahraga', 'sport', 'sepak bola', 'football', 'soccer', 'badminton', 'bulu tangkis', 'basket'], response: 'Popular sports in Indonesia: Badminton (the most successful, Olympic golds), Football (most popular), Basketball, Pencak Silat (martial art). Indonesia has hosted the Asian Games (1962, 2018) and will host the 2029 FIBA World Cup.', responseId: 'Olahraga populer di Indonesia: Bulu Tangkis (paling sukses, emas Olimpiade), Sepak Bola (paling populer), Basket, Pencak Silat (bela diri). Indonesia menjadi tuan rumah Asian Games (1962, 2018) dan akan menjadi tuan rumah Piala Dunia FIBA 2029.' },
    { keys: ['musik', 'music', 'lagu', 'song', 'band', 'penyanyi', 'singer'], response: 'Indonesian music scene is vibrant! Genres: Pop, Dangdut (unique to Indonesia), Rock, Keroncong (traditional), Hip-hop. Famous artists: Iwan Fals, Chrisye, Raisa, Tulus, Nadin Amizah, Dengarkan. Traditional instruments: Gamelan (Java/Bali), Angklung (Sunda), Sasando (Rote).', responseId: 'Dunia musik Indonesia sangat beragam! Genre: Pop, Dangdut (khas Indonesia), Rock, Keroncong (tradisional), Hip-hop. Artis terkenal: Iwan Fals, Chrisye, Raisa, Tulus, Nadin Amizah. Alat musik tradisional: Gamelan (Jawa/Bali), Angklung (Sunda), Sasando (Rote).' },
    { keys: ['film', 'movie', 'drama', 'sinetron', 'layar lebar', 'bioskop'], response: 'Indonesian film industry has grown rapidly! Notable films: Pengabdi Setan, The Raid, Laskar Pelangi, Ada Apa Dengan Cinta?, Marlina the Murderer. Famous directors: Garin Nugroho, Joko Anwar, Timo Tjahjanto. Modern films now compete internationally.', responseId: 'Industri film Indonesia berkembang pesat! Film terkenal: Pengabdi Setan, The Raid, Laskar Pelangi, Ada Apa Dengan Cinta?, Marlina si Pembunuh. Sutradara terkenal: Garin Nugroho, Joko Anwar, Timo Tjahjanto.' },
    { keys: ['game', 'games', 'gaming', 'main game', 'playstation', 'mobile legends', 'pubg', 'valorant', 'free fire'], response: 'Gaming is huge in Indonesia! Popular games: Mobile Legends, PUBG Mobile, Free Fire, Valorant, Dota 2. Indonesia has a growing esports scene with pro players competing internationally. Game development is also rising with local studios.', responseId: 'Gaming sangat besar di Indonesia! Game populer: Mobile Legends, PUBG Mobile, Free Fire, Valorant, Dota 2. Indonesia memiliki scene esports yang berkembang dengan pemain pro bersaing secara internasional. Pengembangan game lokal juga meningkat.' },

    { keys: ['kesehatan', 'health', 'sehat', 'sakit', 'penyakit', 'disease', 'vaksin', 'vaccine', 'covid', 'corona'], response: 'Health tips: maintain balanced diet, exercise regularly (150 min/week), adequate sleep (7-9 hours), manage stress, stay hydrated (8 glasses/day). Indonesia has universal healthcare (BPJS). Common health issues: dengue, malaria, tuberculosis, stunting.', responseId: 'Tips kesehatan: makan seimbang, olahraga teratur (150 menit/minggu), tidur cukup (7-9 jam), kelola stres, minum cukup (8 gelas/hari). Indonesia memiliki layanan kesehatan universal (BPJS). Masalah kesehatan umum: DBD, malaria, TBC, stunting.' },
    { keys: ['makan', 'eat', 'diet', 'nutrisi', 'nutrition', 'vitamin', 'gizi'], response: 'Balanced nutrition includes: carbohydrates (rice, bread, noodles), protein (meat, fish, tofu, tempeh), fats, vitamins, minerals. Indonesian healthy dishes: gado-gado, capcay, sup, pepes ikan. Recommended: limit sugar (max 50g/day), salt, and saturated fats.', responseId: 'Gizi seimbang meliputi: karbohidrat (nasi, roti, mie), protein (daging, ikan, tahu, tempe), lemak, vitamin, mineral. Makanan sehat Indonesia: gado-gado, capcay, sup, pepes ikan. Rekomendasi: batasi gula (maks 50g/hari), garam, dan lemak jenuh.' },

    { keys: ['alam', 'nature', 'lingkungan', 'environment', 'polusi', 'pollution', 'hutan', 'forest', 'laut', 'sea', 'samudra', 'ocean'], response: 'Indonesia has rich biodiversity: rainforests (3rd largest), coral reefs (25% of world total), orangutans (Sumatra/Borneo), Komodo dragons, elephants, tigers. Environmental challenges: deforestation, plastic waste, air/water pollution. Conservation efforts aregrowing.', responseId: 'Indonesia memiliki keanekaragaman hayati yang kaya: hutan hujan (terbesar ke-3), terumbu karang (25% dunia), orangutan (Sumatra/Kalimantan), komodo, gajah, harimau. Tantangan lingkungan: deforestasi, sampah plastik, polusi udara/air. Upaya konservasi terus berkembang.' },
    { keys: ['hewan', 'animal', 'binatang', 'kucing', 'cat', 'anjing', 'dog', 'burung', 'bird', 'ikan', 'fish'], response: 'Indonesia has unique animals: Komodo dragon (largest lizard, in Komodo Island), Orangutan (intelligent ape, Sumatra/Borneo), Javan Rhino (critically endangered, Ujung Kulon), Cendrawasih (birds of paradise, Papua), Babirusa (Sulawesi), Anoa (Sulawesi dwarf buffalo).', responseId: 'Indonesia memiliki hewan unik: Komodo (kadal terbesar, Pulau Komodo), Orangutan (kera cerdas, Sumatra/Kalimantan), Badak Jawa (terancam punah, Ujung Kulon), Cendrawasih (Papua), Babirusa (Sulawesi), Anoa (kerbau kerdil Sulawesi).' },
    { keys: ['tumbuhan', 'plant', 'pohon', 'tree', 'bunga', 'flower', 'tanaman'], response: 'Indonesia has 40,000+ plant species (10% of world total). Famous plants: Rafflesia arnoldii (largest flower, Sumatra), Titan Arum (tallest flower), Orchids (6,000+ species), Mangroves (23% of world mangroves). Forests cover ~50% of Indonesia\'s land.', responseId: 'Indonesia memiliki 40.000+ spesies tumbuhan (10% dunia). Tumbuhan terkenal: Rafflesia arnoldii (bunga terbesar, Sumatra), Titan Arum (bunga tertinggi), Anggrek (6.000+ spesies), Mangrove (23% mangrove dunia). Hutan menutupi ~50% daratan Indonesia.' },

    { keys: ['sejarah', 'history', 'masa lalu', 'pahlawan', 'hero', 'kerajaan', 'kingdom', 'colonial', 'penjajahan'], response: 'Key Indonesian history: Srivijaya (7th-13th century, Buddhist empire), Majapahit (13th-16th, Hindu-Buddhist, largest archipelago empire), Dutch colonization (350 years), Japanese occupation (1942-45), Proclamation of Independence (Aug 17, 1945 by Soekarno-Hatta), Reformasi (1998).', responseId: 'Sejarah Indonesia: Sriwijaya (abad 7-13, kerajaan Buddha), Majapahit (abad 13-16, kerajaan Hindu-Buddha terbesar), Penjajahan Belanda (350 tahun), Pendudukan Jepang (1942-45), Proklamasi Kemerdekaan (17 Agustus 1945 oleh Soekarno-Hatta), Reformasi (1998).' },
    { keys: ['presiden indonesia', 'presiden ri', 'daftar presiden', 'nama presiden', 'presiden', 'president', 'soekarno', 'suharto', 'habibie', 'gus dur', 'abdurrahman', 'megawati', 'sb yudhoyono', 'sby', 'jokowi', 'widodo', 'prabowo'], response: 'Indonesian presidents: Soekarno (1945-67), Soeharto (1967-98), B.J. Habibie (1998-99), Abdurrahman Wahid/Gus Dur (1999-2001), Megawati Soekarnoputri (2001-04), Susilo Bambang Yudhoyono (2004-14), Joko Widodo (2014-24), Prabowo Subianto (2024-present).', responseId: 'Presiden Indonesia: Soekarno (1945-67), Soeharto (1967-98), B.J. Habibie (1998-99), Abdurrahman Wahid/Gus Dur (1999-2001), Megawati Soekarnoputri (2001-04), Susilo Bambang Yudhoyono (2004-14), Joko Widodo (2014-24), Prabowo Subianto (2024-sekarang).' },
    { keys: ['pancasila', 'bhineka', 'tunggal', 'ika', 'semboyan', 'unity in diversity'], response: 'Pancasila is Indonesia\'s state philosophy: 1) Belief in One God, 2) Just and civilized humanity, 3) Unity of Indonesia, 4) Democracy through deliberation, 5) Social justice for all. The national motto is "Bhinneka Tunggal Ika" (Unity in Diversity).', responseId: 'Pancasila adalah dasar negara Indonesia: 1) Ketuhanan Yang Maha Esa, 2) Kemanusiaan yang adil dan beradab, 3) Persatuan Indonesia, 4) Kerakyatan yang dipimpin oleh hikmat kebijaksanaan, 5) Keadilan sosial bagi seluruh rakyat Indonesia. Semboyan: Bhinneka Tunggal Ika.' },

    { keys: ['apa kabar', 'how are you', 'gimana', 'kabar', 'baik'], response: 'I\'m doing great! Thanks for asking. How can I help you today?', responseId: 'Baik-baik saja! Terima kasih sudah bertanya. Ada yang bisa saya bantu hari ini?' },
    { keys: ['senang', 'happy', 'sedih', 'sad', 'marah', 'angry', 'capek', 'tired', 'lelah', 'stres', 'stress'], response: 'It\'s okay to feel what you\'re feeling. Take a break, breathe, talk to someone. Remember: every day is a fresh start. Gilbert also believes in staying balanced between coding, learning, and resting!', responseId: 'Tidak apa-apa merasakan apa yang kamu rasakan. Istirahat, bernapas, ngobrol dengan seseorang. Ingat: setiap hari adalah awal yang baru. Gilbert juga percaya menjaga keseimbangan antara coding, belajar, dan istirahat!' },
    { keys: ['motivasi', 'motivation', 'semangat', 'spirit', 'inspirasi', 'inspiration', 'sukses', 'success', 'berhasil'], response: 'Success comes from consistency, not perfection. Start small, improve daily, never stop learning. As Einstein said: "The only source of knowledge is experience." Gilbert\'s motto: Build, Learn, Repeat!', responseId: 'Kesuksesan datang dari konsistensi, bukan kesempurnaan. Mulai dari hal kecil, tingkatkan setiap hari, jangan berhenti belajar. Kata Einstein: "Satu-satunya sumber pengetahuan adalah pengalaman." Motto Gilbert: Bangun, Belajar, Ulangi!' },
    { keys: ['cita', 'cita-cita', 'dream', 'impian', 'goal', 'tujuan', 'target'], response: 'Everyone has dreams! The key is to break them into small achievable goals. Gilbert\'s dream is to become a professional software engineer building impactful applications. What\'s your dream? Keep pursuing it!', responseId: 'Setiap orang punya mimpi! Kuncinya adalah memecahnya menjadi tujuan kecil yang bisa dicapai. Impian Gilbert adalah menjadi software engineer profesional yang membangun aplikasi berdampak. Apa impianmu? Terus kejar!' },

    { keys: ['hujan', 'rain', 'banjir', 'flood', 'bencana', 'disaster', 'gempa', 'earthquake', 'tsunami', 'gunung', 'volcano', 'meletus', 'eruption'], response: 'Indonesia is in the Pacific Ring of Fire with 127 active volcanoes. Natural disasters: earthquakes (tectonic), tsunamis (2004 Aceh was devastating), volcanic eruptions, floods, landslides. BMKG provides early warnings. Preparedness is key: know evacuation routes, keep emergency kits.', responseId: 'Indonesia berada di Cincin Api Pasifik dengan 127 gunung berapi aktif. Bencana alam: gempa bumi (tektonik), tsunami (Aceh 2004 sangat dahsyat), letusan gunung berapi, banjir, tanah longsor. BMKG memberikan peringatan dini. Kesiapsiagaan penting: tahu jalur evakuasi, siapkan tas darurat.' },
    { keys: ['pintar', 'smart', 'cerdas', 'intelligent', 'iq', 'kecerdasan'], response: 'Intelligence comes in many forms: logical, linguistic, spatial, musical, interpersonal, intrapersonal. Being smart isn\'t about knowing everything - it\'s about knowing how to learn. Stay curious and keep asking questions!', responseId: 'Kecerdasan datang dalam berbagai bentuk: logis, linguistik, spasial, musikal, interpersonal, intrapersonal. Menjadi pintar bukan tentang tahu segalanya - tapi tahu cara belajar. Tetap penasaran dan terus bertanya!' },
    { keys: ['umur', 'age', 'berapa', 'usia'], response: 'I\'m a virtual AI assistant created for Gilbert\'s portfolio website, so I don\'t have an age! But I was brought to life in 2026 to help answer your questions.', responseId: 'Saya adalah asisten AI virtual yang dibuat untuk website portofolio Gilbert, jadi saya tidak punya usia! Tapi saya dihidupkan tahun 2026 untuk membantu menjawab pertanyaan Anda.' },
    { keys: ['art', 'seni', 'budaya', 'culture', 'tradisi', 'tradisional', 'wayang', 'batik', 'tari', 'dance'], response: 'Indonesian arts & culture: Batik (UNESCO heritage), Wayang Kulit (shadow puppets), Gamelan (traditional orchestra), Angklung (bamboo instrument, UNESCO), traditional dances (Saman, Kecak, Pendet). Indonesia has 8 UNESCO Intangible Cultural Heritages.', responseId: 'Seni & budaya Indonesia: Batik (warisan UNESCO), Wayang Kulit, Gamelan (orkestra tradisional), Angklung (alat musik bambu, UNESCO), tarian tradisional (Saman, Kecak, Pendet). Indonesia memiliki 8 Warisan Budaya Tak Benda UNESCO.' },
    { keys: ['pariwisata', 'tourist', 'travel', 'wisata', 'liburan', 'vacation', 'holiday', 'tempat wisata', 'destinasi'], response: 'Top tourist destinations in Indonesia: Bali (Kuta, Ubud, Seminyak), Yogyakarta (Borobudur, Prambanan), Lombok (Mount Rinjani), Labuan Bajo (Komodo Island), Raja Ampat (diving paradise), Lake Toba (Sumatra), Malang (Bromo), Bandung, Jakarta. Indonesia has 5 UNESCO World Heritage sites.', responseId: 'Destinasi wisata top Indonesia: Bali (Kuta, Ubud, Seminyak), Yogyakarta (Borobudur, Prambanan), Lombok (Gunung Rinjani), Labuan Bajo (Pulau Komodo), Raja Ampat (surga diving), Danau Toba (Sumatra), Malang (Bromo), Bandung, Jakarta. Indonesia memiliki 5 situs Warisan Dunia UNESCO.' },
    { keys: ['bahasa daerah', 'bahasa jawa', 'sunda', 'batak', 'minang', 'bugis', 'dayak', 'aceh', 'betawi'], response: 'Indonesia has 700+ regional languages. Major ones: Javanese (85M speakers), Sundanese (40M), Malay (30M), Madurese (15M), Minangkabau (7M), Batak (7M), Bugis (5M), Balinese (3M). Many are endangered - preserving them is important for cultural heritage.', responseId: 'Indonesia memiliki 700+ bahasa daerah. Bahasa utama: Jawa (85M penutur), Sunda (40M), Melayu (30M), Madura (15M), Minangkabau (7M), Batak (7M), Bugis (5M), Bali (3M). Banyak yang terancam punah - melestarikannya penting untuk warisan budaya.' },
    { keys: ['agama', 'religion', 'islam', 'kristen', 'protestan', 'katolik', 'hindu', 'buddha', 'khonghucu', 'kepercayaan'], response: 'Indonesia recognizes 6 official religions: Islam (87%, largest Muslim population worldwide), Protestant Christianity, Catholic Christianity, Hinduism (especially Bali), Buddhism, Confucianism (Khonghucu). Freedom of religion is guaranteed by the constitution. Religious harmony is a national priority.', responseId: 'Indonesia mengakui 6 agama resmi: Islam (87%, populasi Muslim terbesar dunia), Kristen Protestan, Kristen Katolik, Hindu (khususnya Bali), Buddha, Khonghucu. Kebebasan beragama dijamin konstitusi. Kerukunan beragama adalah prioritas nasional.' },
  ];

  const idGreetings = ['hai', 'halo', 'hey', 'pagi', 'siang', 'sore', 'malam', 'makasih', 'terima kasih', 'hee', 'woi', 'bro', 'sis', 'kak', 'bang'];

  function isIndonesian(text) {
    const idWords = ['siapa', 'apa', 'dimana', 'kapan', 'mengapa', 'bagaimana', 'bisa', 'saya', 'anda', 'dia', 'ini', 'itu', 'gilbert', 'tentang', 'skill', 'proyek', 'projek', 'pengalaman', 'keahlian', 'harga', 'tersedia', 'kerjasama', 'sertifikat', 'layanan', 'pendidikan', 'lokasi', 'tinggal', 'kontak', 'email', 'telepon', 'mahasiswa', 'belajar', 'pelajaran', 'coding', 'website', 'aplikasi', 'bantu', 'tolong', 'hai', 'halo', 'hey', 'terima kasih', 'makasih', 'ya', 'tidak', 'bisa', 'bahasa', 'indonesia', 'ganti', 'pake', 'gunakan', 'nanya', 'tanya', 'boleh', 'aku', 'kamu', 'saran', 'tips', 'pemula', 'sekolah', 'matematika', 'fisika', 'kimia', 'biologi', 'komputer', 'sejarah', 'ekonomi', 'geografi', 'seni', 'budaya', 'musik', 'olahraga', 'makanan', 'kesehatan', 'hewan', 'tumbuhan', 'alam', 'cuaca', 'waktu', 'pulau', 'kota', 'presiden', 'pahlawan', 'pancasila', 'agama', 'cita', 'semangat', 'motivasi', 'pariwisata', 'liburan', 'tradisi'];
    const lower = text.toLowerCase().trim();
    if (idGreetings.includes(lower)) return true;
    let score = 0;
    for (const word of idWords) {
      if (lower.includes(word)) score++;
    }
    if (score >= 2) return true;
    const words = lower.split(/\s+/);
    if (words.length <= 3 && words.some(w => idWords.includes(w))) return true;
    if (words.length <= 3 && words.some(w => idWords.some(iw => w.includes(iw)))) return true;
    return false;
  }

  function addMessage(text, isUser) {
    const div = document.createElement('div');
    div.className = `ai-message ${isUser ? 'user' : 'bot'}`;

    if (isUser) {
      div.innerHTML = `
        <div class="ai-avatar"><i class="fas fa-user"></i></div>
        <div class="ai-bubble"><p>${text}</p></div>
      `;
    } else {
      div.innerHTML = `
        <div class="ai-avatar"><i class="fas fa-robot"></i></div>
        <div class="ai-bubble"><p>${text}</p></div>
      `;
    }

    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
  }

  function getResponse(query) {
    const q = query.toLowerCase().trim();
    const useId = isIndonesian(q);

    if (q.length < 3) {
      return useId
        ? 'Halo! Saya asisten AI Gilbert. Tanya tentang skill, proyek, pengalaman, atau apapun tentang Gilbert!'
        : 'Hi there! I\'m Gilbert\'s AI assistant. Ask me about his skills, projects, experience, or anything!';
    }

    let bestEntry = null;
    let bestLength = 0;
    for (const entry of knowledge) {
      for (const key of entry.keys) {
        if (q.includes(key) && key.length > bestLength) {
          bestEntry = entry;
          bestLength = key.length;
        }
      }
    }
    if (bestEntry) {
      return useId && bestEntry.responseId ? bestEntry.responseId : bestEntry.response;
    }

    const fallbacks = [
      ['Hmm, saya belum tahu jawabannya. Coba tanya tentang skill, proyek, atau pengalaman Gilbert ya!', 'Wah, saya belum belajar tentang itu. Tanya soal coding, belajar, atau Gilbert aja yuk!', 'Maaf, belum bisa jawab. Tanyakan tentang skill, proyek, pengalaman, atau kontak Gilbert!'],
      ['I\'m not sure about that. Try asking about skills, projects, experience, contact, or services!', 'Hmm, I haven\'t learned about that yet. Ask me about coding, learning, or Gilbert!', 'I can\'t answer that yet. Ask about skills, projects, experience, or contact info!'],
    ];
    const idx = Math.floor(Math.random() * 3);
    return useId ? fallbacks[0][idx] : fallbacks[1][idx];
  }

  function handleSend() {
    const text = input.value.trim();
    if (!text) return;
    addMessage(text, true);
    input.value = '';

    setTimeout(() => {
      const response = getResponse(text);
      addMessage(response, false);
    }, 500);
  }

  send.addEventListener('click', handleSend);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleSend();
  });
}

function initVideoIntro() {
  const placeholder = document.getElementById('video-placeholder');
  const video = document.getElementById('intro-video');
  const playBtn = document.getElementById('video-play-btn');

  if (!placeholder || !video) return;

  playBtn.addEventListener('click', () => {
    placeholder.classList.add('hidden');
    video.play();
  });

  video.addEventListener('ended', () => {
    placeholder.classList.remove('hidden');
  });
}

function initVideoModal() {
  const modal = document.getElementById('videoModal');
  const overlay = modal?.querySelector('.video-modal-overlay');
  const closeBtn = modal?.querySelector('.video-modal-close');
  const player = document.getElementById('videoPlayer');
  const triggers = document.querySelectorAll('.video-play-btn');

  if (!modal || !player) return;

  function openModal(src) {
    player.src = src;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('active');
    player.pause();
    player.src = '';
    document.body.style.overflow = '';
  }

  triggers.forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const src = btn.dataset.video;
      if (src) openModal(src);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (overlay) overlay.addEventListener('click', closeModal);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
}

function initContactForm() {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  const submitBtn = document.getElementById('submit-btn');

  if (!form) return;

  emailjs.init('YOUR_PUBLIC_KEY');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('form-name').value.trim();
    const email = document.getElementById('form-email').value.trim();
    const subject = document.getElementById('form-subject').value.trim();
    const message = document.getElementById('form-message').value.trim();

    if (!name || !email || !subject || !message) {
      status.textContent = 'Please fill in all fields';
      status.className = 'form-status error';
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      status.textContent = 'Please enter a valid email address';
      status.className = 'form-status error';
      return;
    }

    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    status.textContent = '';
    status.className = 'form-status';

    try {
      await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message,
      });

      status.textContent = 'Message sent successfully! I will get back to you soon.';
      status.className = 'form-status success';
      form.reset();

      setTimeout(() => {
        status.textContent = '';
        status.className = 'form-status';
      }, 5000);
    } catch (err) {
      status.textContent = 'Failed to send message. Please try again or email me directly.';
      status.className = 'form-status error';
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<span>Send Message</span><i class="fas fa-paper-plane"></i>';
    }
  });
}

function initDownloadCV() {
  const btn = document.getElementById('download-cv');
  if (btn) {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      window.open('assets/downloads/CV.pdf', '_blank');
    });
  }
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const top = target.offsetTop - 80;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  document.body.style.overflow = 'hidden';
  applyLang(currentLang);
  applyTheme(currentTheme);
  initLoadingScreen();
  initThreeBackground();
  initCursor();
  initMouseGlow();
  initNavbar();
  initHamburger();
  initScrollProgress();
  initThemeToggle();
  initLangToggle();
  if (typeof Typed !== 'undefined') initTyped();
  if (typeof AOS !== 'undefined') initAOS();
  if (typeof Lenis !== 'undefined') initLenis();
  if (typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }
  if (typeof VanillaTilt !== 'undefined') initVanillaTilt();

  initProjectFilter();
  initTestimonialSlider();
  initFAB();
  initAIChat();
  initVideoIntro();
  initVideoModal();
  initContactForm();
  initDownloadCV();
  initSmoothScroll();
});
