export interface Project {
  id: string;
  title: string;
  category: 'Web App' | 'Mobile' | 'AI / Fullstack' | 'UI/UX';
  summary: string;
  description: string;
  tags: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  metrics?: string;
  keyFeatures: string[];
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level: number; iconName: string; color: string }[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  skills: string[];
  type: 'Work' | 'Education' | 'Organization';
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  period: string;
  badge: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface DeveloperProfile {
  name: string;
  title: string;
  tagline: string;
  bio: string[];
  avatar: string;
  photoActivity: string;
  status: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  stats: { label: string; value: string; suffix?: string }[];
}

export const developerProfile: DeveloperProfile = {
  name: 'Muhammad Samsu Hidayattullah',
  title: 'Full-Stack Developer & IT Support Specialist',
  tagline: 'Lulusan Sarjana Teknik Informatika (S.Kom) IPK 3.81 | Spesialis Next.js, React, Node.js, Administrasi Server & IT Infrastructure.',
  bio: [
    'Saya adalah lulusan Teknik Informatika dari Universitas Bina Darma (IPK 3.81 - Cum Laude) dengan pengalaman solid di bidang Dukungan TI (IT Support), Administrasi Sistem Server (Linux/Windows & VPS), serta Pengembangan Web Full-Stack.',
    'Berpengalaman mengembangkan dan menyebarkan berbagai sistem informasi web seperti SITANJAK & Metalika di BBPOM Palembang, platform komunitas Trivian, serta sistem pengaduan publik Lapor Pak. Memiliki sertifikasi jaringan Cisco CCNAv7 dan terbiasa bekerja secara adaptif, analitis, dan kolaboratif.'
  ],
  avatar: '/Pas Foto.jpeg',
  photoActivity: '/Foto 1.jpg',
  status: '🟢 Terbuka untuk Remote & On-Site Roles',
  location: 'Palembang, Sumatera Selatan, Indonesia (30137)',
  email: 'dyt343@gmail.com',
  phone: '+62 88274133623',
  github: 'https://github.com/dyt343',
  linkedin: 'https://www.linkedin.com/in/muhammad-samsu-hidayattullah',
  stats: [
    { label: 'IPK Kelulusan (S.Kom)', value: '3.81', suffix: '' },
    { label: 'Proyek Sistem Web', value: '10', suffix: '+' },
    { label: 'Sertifikasi TI & Jaringan', value: '8', suffix: '+' },
    { label: 'Tahun Pengalaman TI', value: '3', suffix: '+' },
  ]
};

export const skillCategories: SkillCategory[] = [
  {
    category: 'Pengembangan Web Frontend',
    skills: [
      { name: 'Next.js & React.js', level: 92, iconName: 'Globe', color: 'from-cyan-500 to-blue-500' },
      { name: 'Tailwind CSS & Bootstrap', level: 95, iconName: 'Palette', color: 'from-cyan-400 to-teal-400' },
      { name: 'TypeScript & JavaScript (ES6+)', level: 90, iconName: 'Code2', color: 'from-blue-500 to-indigo-500' },
      { name: 'HTML5 & CSS3 Responsive', level: 98, iconName: 'Layers', color: 'from-indigo-500 to-purple-500' },
    ]
  },
  {
    category: 'Backend & Manajemen Basis Data',
    skills: [
      { name: 'Node.js & Express.js', level: 88, iconName: 'Server', color: 'from-emerald-500 to-green-500' },
      { name: 'Laravel (PHP Framework)', level: 82, iconName: 'Cpu', color: 'from-rose-500 to-red-500' },
      { name: 'REST API, JWT & Bcrypt Auth', level: 90, iconName: 'ShieldCheck', color: 'from-purple-500 to-pink-500' },
      { name: 'MySQL, PostgreSQL & MongoDB', level: 88, iconName: 'Database', color: 'from-blue-600 to-cyan-600' },
    ]
  },
  {
    category: 'IT Support & Administrasi Sistem',
    skills: [
      { name: 'Administrasi VPS & Ubuntu Server', level: 90, iconName: 'Cloud', color: 'from-amber-500 to-orange-500' },
      { name: 'Dukungan Jaringan (Cisco CCNA)', level: 85, iconName: 'Box', color: 'from-sky-500 to-blue-600' },
      { name: 'Troubleshooting Hardware & Software', level: 95, iconName: 'Wrench', color: 'from-emerald-400 to-teal-500' },
      { name: 'SSH, Git & GitHub Workflows', level: 92, iconName: 'GitBranch', color: 'from-orange-500 to-red-500' },
      { name: 'Figma UI/UX & Adobe Photoshop', level: 85, iconName: 'Figma', color: 'from-purple-400 to-indigo-500' },
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: 'sitanjak',
    title: 'SITANJAK - Sistem Magang BBPOM',
    category: 'AI / Fullstack',
    summary: 'Sistem Informasi Tahapan dan Jangkauan Magang Akademik berbasis web untuk digitalisasi pendaftaran magang BBPOM Palembang.',
    description: 'SITANJAK dikembangkan untuk BBPOM Palembang guna memodernisasi dan mendigitalisasi alur pendaftaran magang akademik. Memungkinkan proses administrasi menjadi transparan, terstruktur, dan mengurangi waktu verifikasi berkas secara signifikan.',
    tags: ['Next.js', 'React.js', 'Tailwind CSS', 'Node.js', 'JWT', 'MongoDB', 'VPS Ubuntu'],
    image: '/Sitanjak.png',
    demoUrl: 'https://Sitanjak.tech',
    githubUrl: 'https://github.com/dyt343',
    featured: true,
    metrics: 'Digunakan Resmi di BBPOM Palembang',
    keyFeatures: [
      'Pendaftaran magang online dengan upload dokumen terverifikasi',
      'Dashboard admin BBPOM untuk seleksi & alokasi pembimbing',
      'Pelacakan status pendaftaran real-time bagi pemohon',
      'Ekspor rekapitulasi data magang ke format laporan terstruktur'
    ]
  },
  {
    id: 'metalika',
    title: 'Metalika - Monitoring Kinerja & Anggaran BBPOM',
    category: 'Web App',
    summary: 'Sistem Informasi Manajemen Data Internal BBPOM Palembang untuk digitalisasi indikator kinerja dan anggaran.',
    description: 'Aplikasi web internal Metalika dirancang untuk mempermudah monitoring indikator kinerja instansi dan penyerapan anggaran secara terintegrasi, efisien, dan akurat.',
    tags: ['React.js', 'Node.js', 'Tailwind CSS', 'Express', 'PosgreSQl', 'JWT', 'Bcrypt Auth'],
    image: '/metalika.png',
    demoUrl: 'https://bbpom-palembang.go.id',
    githubUrl: 'https://github.com/dyt343',
    featured: true,
    metrics: 'Digitalisasi Operasional Internal',
    keyFeatures: [
      'Monitoring capaian indikator kinerja secara visual',
      'Pengelolaan dan kalkulasi anggaran operasional',
      'Manajemen hak akses pengguna terautentikasi',
      'Laporan analitik data internal instansi'
    ]
  },
  {
    id: 'trivian',
    title: 'Trivian - Community Platform',
    category: 'Web App',
    summary: 'Platform komunitas interaktif & responsif hasil pengembangan program Virtual Internship Maxy Academy.',
    description: 'Trivian adalah platform komunitas web modern dengan desain responsif, antarmuka intuitif, dan komponen re-usable tinggi untuk interaksi antar anggota.',
    tags: ['React.js', 'Tailwind CSS', 'TypeScript', 'Figma'],
    image: '/trivian.png',
    demoUrl: 'https://trivian-community.vercel.app',
    githubUrl: 'https://github.com/dyt343',
    featured: true,
    metrics: 'Program Maxy Academy',
    keyFeatures: [
      'Desain antarmuka UI/UX modern & responsif di semua perangkat',
      'Arsitektur komponen modular yang reusable',
      'Implementasi state management untuk feed & postingan'
    ]
  },
  {
    id: 'lapor-pak',
    title: 'Lapor Pak - Sistem Pengaduan Publik',
    category: 'Web App',
    summary: 'Sistem pengaduan dan aspirasi masyarakat berbasis web hasil karya Maxy Academy 2nd Hackathon.',
    description: 'Dikembangkan dalam kompetisi Hackathon dengan tenggat waktu terbatas, Lapor Pak memfasilitasi masyarakat untuk mengirimkan laporan publik dengan alur yang user-friendly.',
    tags: ['React.js', 'Tailwind CSS', 'JavaScript', 'REST API'],
    image: '/Laporpak.png',
    demoUrl: 'https://laporpak-hackathon.vercel.app',
    githubUrl: 'https://github.com/dyt343',
    featured: false,
    metrics: 'Maxy Hackathon #2',
    keyFeatures: [
      'Formulir pengaduan publik terstruktur dengan lampiran bukti foto',
      'Tracking tiket pengaduan publik',
      'Tampilan responsif dan mudah diakses dari perangkat mobile'
    ]
  },
  {
    id: 'jelajah-desa',
    title: 'JelajahDesa.com - Portal UMKM & Wisata',
    category: 'Web App',
    summary: 'Solusi digital promosi pariwisata & UMKM Desa Lewunimalang, Bogor (Maxy National Hackathon).',
    description: 'Platform web yang dirancang untuk memberdayakan ekonomi lokal Desa Lewunimalang melalui etalase produk UMKM dan direktori tempat wisata daerah.',
    tags: ['React.js', 'Tailwind CSS', 'HTML5', 'Figma'],
    image: '/jelajahdesa.png',
    demoUrl: 'https://jelajahdesa.com',
    githubUrl: 'https://github.com/dyt343',
    featured: false,
    metrics: 'National Hackathon Project',
    keyFeatures: [
      'Katalog produk lokal UMKM desa dengan kontak pemesanan direct',
      'Peta wisata interaktif dan panduan penginapan',
      'Optimasi SEO lokal desa'
    ]
  },
  {
    id: 'perintis-diskominfo',
    title: 'Aplikasi Perintis - UI/UX Diskominfo Palembang',
    category: 'UI/UX',
    summary: 'Perancangan UI/UX & Prototipe Sistem Informasi Perintis Dinas Komunikasi dan Informatika Kota Palembang.',
    description: 'Desain antarmuka pengguna berbasis Figma untuk aplikasi layanan publik Perintis Kota Palembang selama masa Praktik Kerja Lapangan (PKL).',
    tags: ['Figma', 'UI/UX Design', 'User Research', 'Prototyping'],
    image: '/Foto 2.jpg',
    featured: false,
    keyFeatures: [
      'Riset kebutuhan pengguna & pembuatan wireframe',
      'Desain Sistem Warna & Tipografi Pemkot Palembang',
      'Prototipe interaktif siap untuk tahap pengembang'
    ]
  }
];

export const experienceData: Experience[] = [
  {
    id: 'exp-bbpom',
    role: 'Pranata Komputer / IT Support (Magang)',
    company: 'BBPOM Palembang (Kemnaker MagangHub)',
    period: 'Nov 2025 – Mei 2026',
    location: 'Palembang, Sumatera Selatan',
    description: [
      'Memelihara dan mendukung infrastruktur TI kantor, mengoperasikan server VPS Ubuntu untuk penyebaran sistem web internal.',
      'Melakukan troubleshooting dan pemeliharaan preventif komputer, perangkat keras, serta jaringan untuk menekan downtime.',
      'Mengembangkan aplikasi web SITANJAK (Pendaftaran Magang Akademik) dan Metalika (Monitoring Indikator Kinerja & Anggaran).'
    ],
    skills: ['Next.js', 'React.js', 'VPS Ubuntu', 'Linux', 'IT Support', 'Jaringan', 'MySQL'],
    type: 'Work'
  },
  {
    id: 'exp-maxy-intern',
    role: 'Frontend Developer (Virtual Internship)',
    company: 'Maxy Academy',
    period: 'Nov 2024 – Des 2024',
    location: 'Remote',
    description: [
      'Mengembangkan platform komunitas responsif "Trivian" menggunakan React.js & Tailwind CSS.',
      'Membangun komponen UI yang reusable dan efisien di berbagai perangkat.',
      'Bekerja dengan alur koordinasi Agile/Scrum dan kontrol versi Git.'
    ],
    skills: ['React.js', 'Tailwind CSS', 'JavaScript', 'Git', 'Agile'],
    type: 'Work'
  },
  {
    id: 'exp-diskominfo',
    role: 'Staf Praktik Kerja Lapangan (PKL) / UI/UX & IT',
    company: 'Dinas Komunikasi dan Informatika Kota Palembang',
    period: 'Feb 2024 – Jun 2024',
    location: 'Palembang, Sumatera Selatan',
    description: [
      'Merancang desain UI/UX berbasis Figma untuk aplikasi sistem "Perintis" Pemkot Palembang.',
      'Membantu kegiatan dokumentasi teknis dan operasional teknologi informasi dinas.'
    ],
    skills: ['Figma', 'UI/UX Design', 'Dokumentasi TI', 'Troubleshooting'],
    type: 'Work'
  },
  {
    id: 'edu-binadarma',
    role: 'Sarjana Teknik Informatika (S.Kom)',
    company: 'Universitas Bina Darma - Palembang',
    period: '2021 – 2025',
    location: 'Palembang, IPK: 3.81 (Cum Laude)',
    description: [
      'Lulus dengan Predikat Pujian (Cum Laude), IPK 3.81.',
      'Fokus studi: Pengembangan Web Full-Stack, Jaringan Komputer, Administrasi Sistem Server, & Manajemen Basis Data.'
    ],
    skills: ['Pemrograman Web', 'Jaringan Komputer', 'Sistem Informasi', 'Basis Data'],
    type: 'Education'
  },
  {
    id: 'edu-arinda',
    role: 'SMK Jurusan Multimedia',
    company: 'SMK ARINDA Palembang',
    period: '2018 – 2021',
    location: 'Palembang, Sumatera Selatan',
    description: [
      'Mempelajari dasar-dasar grafis, pemrograman web HTML/CSS, serta pengeditan media digital.'
    ],
    skills: ['Multimedia', 'Desain Grafis', 'Web Design'],
    type: 'Education'
  },
  {
    id: 'org-bdca',
    role: 'Anggota Aktif Bimbingan Web',
    company: 'Bina Darma Cyber Army (BDCA)',
    period: '2021 – 2024',
    location: 'Universitas Bina Darma',
    description: [
      'Memberikan bimbingan teknis kepada anggota BDCA mengenai dasar-dasar HTML, CSS, dan PHP.',
      'Berkolaborasi dalam tim untuk merancang dan mempublikasikan proyek situs web kampus.'
    ],
    skills: ['Leadership', 'Mentoring', 'HTML/CSS/PHP', 'Public Speaking'],
    type: 'Organization'
  }
];

export const certificationsData: Certification[] = [
  {
    id: 'cert-ccna2',
    title: 'CCNAv7: Switching, Routing, and Wireless Essentials',
    issuer: 'Cisco Networking Academy',
    period: 'April 2024',
    badge: 'Jaringan & Wireless'
  },
  {
    id: 'cert-ccna1',
    title: 'CCNAv7: Introduction to Networks',
    issuer: 'Cisco Networking Academy',
    period: 'September 2023',
    badge: 'Dasar Jaringan'
  },
  {
    id: 'cert-ai',
    title: 'Program Pelatihan Data Analyst & AI',
    issuer: 'PT Maribelajar Indonesia',
    period: 'April 2024',
    badge: 'Data & AI'
  },
  {
    id: 'cert-pdp',
    title: 'Pelatihan Membangun Budaya Motivasi Tinggi & Kinerja Terbaik',
    issuer: 'People Develop People',
    period: 'November 2025',
    badge: 'Soft Skills'
  },
  {
    id: 'cert-vokasi',
    title: 'Junior Web Developer Certificate',
    issuer: 'Akademi Lulusan Sekolah Vokasi',
    period: 'Februari 2023',
    badge: 'Web Developer'
  },
  {
    id: 'cert-ecofuria',
    title: 'Juara 2 Kompetisi Poster Promosi',
    issuer: 'Ecofuria Jilid V',
    period: 'November 2023',
    badge: 'Penghargaan Desain'
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: 't-1',
    name: 'Pembimbing Magang BBPOM',
    role: 'Kepala Tim IT & Sistem',
    company: 'BBPOM Palembang',
    content: 'Samsu memiliki inisiatif dan kemampuan teknis yang sangat baik. Aplikasi SITANJAK dan Metalika yang ia bangun sangat membantu digitalisasi proses administrasi dan monitoring internal BBPOM.',
    avatar: '/Pas Foto.jpeg',
    rating: 5
  },
  {
    id: 't-2',
    name: 'Mentor Maxy Academy',
    role: 'Senior Lead Developer',
    company: 'Maxy Academy',
    content: 'Etos kerja Samsu selama program Virtual Internship dan Hackathon sangat menonjol. Ia mampu menerjemahkan kebutuhan produk ke dalam UI React yang sangat responsif.',
    avatar: '/Foto 1.jpg',
    rating: 5
  }
];
