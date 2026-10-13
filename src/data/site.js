export const siteUrl = 'https://zyranet.co.ke'
export const email = 'hello@zyranet.co.ke'

export const proof = [
  { value: 100, suffix: ' Mbps', label: 'top speed' },
  { value: 99.9, suffix: '%', decimals: 1, label: 'network uptime' },
  { value: 24, suffix: ' hrs', label: 'setup time, or sooner' },
  { value: 24, suffix: '/7', label: 'online support' },
]

export const speedBars = [
  { name: 'Home Basic', mbps: 10 },
  { name: 'Home Plus', mbps: 30 },
  { name: 'Business Broadband', mbps: 100 },
]

export const plans = [
  {
    id: 'home_basic',
    name: 'Home Basic',
    description: 'Light browsing, streaming and social media on reliable home WiFi in Maseno.',
    speed: 'Up to 10 Mbps',
    monthly: '1,500',
    annual: '1,200',
    popular: false,
    features: ['Unlimited data', 'Free router', 'Email support'],
    missing: ['Priority traffic', 'Dedicated IP'],
  },
  {
    id: 'home_plus',
    name: 'Home Plus',
    description: 'For families and shared houses with many devices and 4K streaming. Our most popular plan.',
    speed: 'Up to 30 Mbps',
    monthly: '2,500',
    annual: '2,000',
    popular: true,
    features: ['Unlimited data', 'Free router and setup', '24/7 WhatsApp support', 'Priority traffic'],
    missing: ['Dedicated IP'],
  },
  {
    id: 'business',
    name: 'Business Broadband',
    description: 'Enterprise-grade internet for offices, schools and institutions in Maseno, on a dedicated PPPoE connection.',
    speed: 'Up to 100 Mbps',
    monthly: '6,000',
    annual: '4,800',
    popular: false,
    features: ['Unlimited data', 'Free router and setup', '24/7 priority support', 'Priority traffic', 'Dedicated IP'],
    missing: [],
  },
]

export const studentSteps = [
  { title: 'Connect to Zyra Net WiFi', text: 'Join the Zyra Net network from your phone or laptop and the sign-in page opens.' },
  { title: 'Choose a package', text: 'Pick the prepaid package that suits you, or redeem a voucher if you have one.' },
  { title: 'Pay with M-Pesa', text: 'Pay from your phone in seconds. No cash, no forms, no waiting for an agent.' },
  { title: 'You’re online', text: 'Browse, stream and study at full speed, and reconnect your devices any time from your account.' },
]

export const faqs = [
  {
    q: 'Which areas of Maseno does Zyra Net cover?',
    a: 'Zyra Net serves Maseno, and the network keeps expanding. Tell us your hostel, estate or building through the contact form or by email and we will confirm coverage and an install time.',
  },
  {
    q: 'How fast is Zyra Net WiFi in Maseno?',
    a: 'Speeds go up to 100 Mbps on Business Broadband, 30 Mbps on Home Plus and 10 Mbps on Home Basic, over a fibre-backed wireless network. We never throttle your connection.',
  },
  {
    q: 'How reliable is the connection?',
    a: 'Zyra Net targets 99.9% network uptime, and a redundant network keeps you connected during peak hours. Support is available online 24/7.',
  },
  {
    q: 'How do students pay for WiFi?',
    a: 'Students and hostel residents use prepaid packages. Connect to Zyra Net WiFi, choose a package on the sign-in page and pay with M-Pesa. Packages and prices are shown on that page.',
  },
  {
    q: 'How much do home and business plans cost?',
    a: 'Home Basic is KSh 1,500 a month, Home Plus is KSh 2,500 a month and Business Broadband is KSh 6,000 a month. Annual billing is 20% cheaper. Plans are month to month with no contracts.',
  },
  {
    q: 'How long does installation take?',
    a: 'Installation can be done in as little as 24 hours. Technicians install and configure your router in one visit, often the same day, and installation in Maseno is free.',
  },
]
