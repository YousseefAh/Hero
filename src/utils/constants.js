const links = ["Explore", "Company", "Support"];

const reviewImgs = [
  {
    id: 1,
    name: "Gabriel Romero",
    image: "/reviews/img-1.webp",
  },
  {
    id: 2,
    name: "Sarena Burton",
    image: "/reviews/img-2.webp",
  },
  {
    id: 3,
    name: "LaDorian Ray",
    image: "/reviews/img-3.webp",
  },
  {
    id: 4,
    name: "Madison Lott",
    image: "/reviews/img-4.webp",
  },
  {
    id: 5,
    name: "Shannon Sutton",
    image: "/reviews/img-5.webp",
  },
];

const appStatsImgs = [
  {
    id: 1,
    name: "@mario.lopez",
    description:
      "I joined Yadora back in 2021 and never looked back. \
     Yadoras ability to connect me with people around the world that share \
      the same passions with me is top tier!",
    image: "/appStats/img-1.webp",
  },
  {
    id: 2,
    name: "@xuifang",
    description:
      "Yadora has provided me a platform to showcase my skills, \
    build my community and teach 1000s about the beautiful art of caligraphy",
    image: "/appStats/img-2.webp",
  },
  {
    id: 3,
    name: "@shannon_sutton",
    description:
      "After working on and off as a vocal coach for nearly 10 years, i found Yadora. \
    The platform has allowed me to find consistent work for months now!",
    image: "/appStats/img-3.webp",
  },
];

const appStats = [
  {
    id: 1,
    value: "300",
    description: "creators",
  },
  {
    id: 2,
    value: "12.1k",
    description: "users",
  },
  {
    id: 3,
    value: "9.11k",
    description: "sessions",
  },
];

const features = [
  {
    id: 1,
    name: "Engagement",
    description: "Engage on a deeper level with the fans that matter most",
    icon: "/features/engagement.svg",
  },
  {
    id: 2,
    name: "Autonomy",
    description: "Full autonomy on when and who you chose to talk",
    icon: "/features/autonomy.svg",
  },
  {
    id: 3,
    name: "Free",
    description: "No monthly fees or annual subscription fees",
    icon: "/features/free.svg",
  },
  {
    id: 4,
    name: "Earn",
    description: "Add a new source of income that you can control",
    icon: "/features/earn.svg",
  },
];

const footerCols = [
  {
    id: 1,
    heading: "About",
    links: ["How it works", "Company", "Help & support"],
  },
  {
    id: 2,
    heading: "For creators",
    links: ["Getting paid", "Onboarding"],
  },
  {
    id: 3,
    heading: "Learn",
    links: ["Blog", "Careers", "Affiliates"],
  },
  {
    id: 4,
    heading: "Support",
    links: ["Service status", "Cookies policy", "Privacy policy"],
  },
];

const footerSocials = [
  {
    id: 1,
    name: "Meta (formerly facebook)",
    logo: "/socials/facebook.svg",
  },
  {
    id: 2,
    name: "X (formerly twitter)",
    logo: "/socials/twitter.svg",
  },
  {
    id: 3,
    name: "Instagram",
    logo: "/socials/instagram.svg",
  },
];

const pricingCards = [
  {
    mostPopular: false,
    program: "Personal",
    price: {
      monthly: "Free",
      annual: "Free",
    },
    subheading: "Explore our product for free",
    bullets: [
      "20 free fantasy reports",
      "Limited access to AI-writer",
      "max 15 hours per month",
      "14 outreach tokens",
    ],
    cta: "Start free",
  },
  {
    primary: true,
    mostPopular: true,
    program: "Professional",
    price: {
      monthly: "20",
      annual: "228",
    },
    subheading: "For the ambitious solo professional",
    bullets: [
      "50 free fantasy reports",
      "Unlimited access to AI-writer",
      "max 35 hours per month",
      "72 outreach tokens",
    ],
    cta: "Start creating",
  },
  {
    mostPopular: false,
    program: "Team",
    price: {
      monthly: "699",
      annual: "7968",
    },
    subheading: "Licenses for up to 16 members",
    bullets: [
      "1200 free fantasy reports",
      "Access to AI-writer M2",
      "Unlimited hours per month",
      "435 outreach tokens",
    ],
    cta: "Sign up your team",
  },
];

const testimonials = [
  {
    program: "professional",
    description:
      "Yadora has been pivotal in helping me connect with others that share my same passions!",
    image: "/testimonials/testimonial-7.webp",
    name: "Maria Sanchez",
    title: "CEO & Founder at Creation LAB's",
  },
  {
    program: "team",
    description:
      "Sharing my skills with clients around the world has never been easier. Very affordable solution for our team.",
    image: "/testimonials/testimonial-6.webp",
    name: "Nick Ridley",
    title: "Product lead at EducationWave",
  },
  {
    program: "personal",
    description:
      "I love how easy and intuitive the platform is. Took me less than a day to get up and started!",
    image: "/testimonials/testimonial-10.webp",
    name: "Asia Moore",
    title: "Head of HR at inspireUSA",
  },
  {
    program: "personal",
    description:
      "Having access to 50 free fantasy reports per month allows my small business to generate leads each month",
    image: "/testimonials/testimonial-2.webp",
    name: "Tina Rodriguez",
    title: "Tech lead at GE accelerator",
  },
  {
    program: "team",
    description:
      "The free version of Yadora is generous with its offering and has helped fuel our business to new heights!",
    image: "/testimonials/testimonial-3.webp",
    name: "Jai Ahuja",
    title: "GForce Labs  trader & Founder",
  },
  {
    program: "team",
    description:
      "Yadora's Customer service has been very gracious in helping me navigate the platform. Loving it so far!",
    image: "/testimonials/testimonial-1.webp",
    name: "Amy Young",
    title: "Creative director at FertilityHealth",
  },
  {
    program: "personal",
    description:
      "Getting my music business off the ground has been a breeze with the help of Yadora's outreach accelerator.",
    image: "/testimonials/testimonial-5.webp",
    name: "Tanner Hall",
    title: "Musician and Solo-prenuer",
  },
  {
    program: "team",
    description:
      "I wish i have known about this platform a year ago. The AI writer empowers our team to edit and revise their work easily.",
    image: "/testimonials/testimonial-8.webp",
    name: "Diego Perez",
    title: "Analyst at SimplyMade",
  },
];

export {
  links,
  reviewImgs,
  appStatsImgs,
  appStats,
  features,
  footerCols,
  footerSocials,
  pricingCards,
  testimonials,
};
