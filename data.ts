type TNavLinks = {
  href: string, title: string
}

type TCard = {
  id: string, title: string, text: string, icon: string
}

export const navLinks: TNavLinks[] = [
  { href: '/', title: 'Home' },
  { href: '/about', title: 'About' },
  { href: '/services', title: 'Services' },
  { href: '/blog', title: 'Blog' },
]

export const servicesCards: TCard[] = [
  {
    id: "01",
    title: "Emergency Plumbing",
    text: "24/7 fast response for leaks, burst pipes, and urgent repairs.",
    icon: "/icon-3.svg",
  },
  {
    id: "02",
    title: "Drain Cleaning & Unclogging",
    text: "Clearing blocked sinks, toilets, showers, and sewer lines.",
    icon: "/icon-4.svg",
  },
  {
    id: "03",
    title: "Pipe Installation & Repairs",
    text: "Fixing or replacing damaged water supply and drain pipes.",
    icon: "/icon-5.svg",
  },
  {
    id: "04",
    title: "Water Heater Services",
    text: "Installation, maintenance, and repair of tank and tankless water heaters.",
    icon: "/icon-6.svg",
  },
  {
    id: "05",
    title: "Bathroom & Kitchen Plumbing",
    text: "Installing faucets, sinks, showers, bathtubs, toilets, and appliances.",
    icon: "/icon-7.svg",
  },
  {
    id: "06",
    title: "Leak Detection & Repair",
    text: " Identifying hidden leaks and preventing costly water damage.",
    icon: "/icon-8.svg",
  },
  {
    id: "07",
    title: "Sewer Line Services",
    text: "Inspection, repair, and replacement of sewer lines for smooth flow.",
    icon: "/icon-9.svg",
  },
];

export const blogList = [
  {
    id: 1,
    img: "/blog-img-1.png",
    title: "5 Signs Your Water Heater Needs Professional Attention",
    date: "sep 20,2024",
  },
  {
    id: 2,
    img: "/blog-img-2.png",
    title: "Winter Plumbing Prep: Protecting Your Pipes from Freezing",
    date: "Aug 12 20,2024",
  },
  {
    id: 3,
    img: "/blog-img-3.png",
    title: "DIY vs. Professional Plumbing: When to Call the Experts",
    date: "Nov 04,2023",
  },
];

