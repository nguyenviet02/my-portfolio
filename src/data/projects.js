// Sample project data
const projects = [
  // ITS Website
  {
    id: 7,
    date: "May, 2023",
    projectType: "Web Development",
    title: "ITS Website",
    description: `An official website of Icetea Software built on Wordpress <br />
	<b>URL:</b> <u><a href="https://its.aicademy.org" target="_blank">https://its.aicademy.org</a></u>`,
    images: [
      "/images/projects/its/1.png",
      "/images/projects/its/2.png",
      "/images/projects/its/3.png",
      "/images/projects/its/4.png",
    ],
    technologies: ["Wordpress", "PHP", "HTML", "CSS", "JavaScript"],
    likes: 31,
    comments: 6,
    shares: 3,
  },
  // AI Academy
  {
    id: 6,
    date: "March, 2023",
    projectType: "Web Development",
    title: "AI Academy",
    description: `Enhanced Learning powered by AI. <br />
    Enhanced courses that make learning clear and practical, with an AI mentor guiding real-world use. <br />
	<b>URL:</b> <u><a href="https://aicademy.org" target="_blank">https://aicademy.org</a></u>`,
    images: [
      "/images/projects/aicademy/1.png",
      "/images/projects/aicademy/2.png",
      "/images/projects/aicademy/3.jpg",
    ],
    technologies: [
      "TanStack Start",
      "Tailwind CSS",
      "TypeScript",
      "Arktype",
      "React Query",
      "ParaglideJS",
      "Jotai",
      "Framer Motion",
      "Biome",
      "Husky",
      "LintStaged",
    ],
    likes: 38,
    comments: 12,
    shares: 8,
  },
  // Offering Platform
  {
    id: 5,
    date: "January, 2023",
    projectType: "Web Development",
    title: "Offering Platform",
    description: `Connect, Raise And Invest With Ease. <br /> Offering.fund connects investors directly with premium syndicate deals through various investment channels.<br />
	<b>URL:</b> <u><a href="https://offering.fund" target="_blank">https://offering.fund</a></u>`,
    images: [
      "/images/projects/offering/1.png",
      "/images/projects/offering/2.png",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Wagmi",
      "Material UI",
      "React Query",
      "Zustand",
      "React Hook Form",
      "Zod",
    ],
    likes: 28,
    comments: 4,
    shares: 2,
  },
  // Hulu Clone
  {
    id: 3,
    date: "August, 2023",
    projectType: "Clone Project",
    title: "Hulu Clone",
    description: `A clone version of website Hulu. Animations wih Rive. <br />
	<b>URL:</b> <u><a href="https://huly-clone-ten.vercel.app" target="_blank">https://huly-clone-ten.vercel.app</a></u>`,
    images: [
      "/images/projects/huly-clone/1.png",
      "/images/projects/huly-clone/2.png",
      "/images/projects/huly-clone/3.png",
    ],
    technologies: ["ReactJS", "Vite", "Tailwind CSS", "Rive"],
    likes: 32,
    comments: 7,
    shares: 4,
  },
  // Waterbomb Festival
  {
    id: 4,
    date: "October, 2022",
    projectType: "Mobile App",
    title: "Waterbomb Festival",
    description: `Mobile app design for a music festival featuring artist lineups, ticket sales, and event information. <br />`,
    images: [
      "/images/projects/waterbomb/1.jpg",
      "/images/projects/waterbomb/2.jpg",
      "/images/projects/waterbomb/3.jpg",
    ],
    technologies: ["ReactNative", "Gsap"],
    likes: 42,
    comments: 9,
    shares: 6,
  },
  // Tek4
  {
    id: 1,
    date: "April, 2022",
    projectType: "Web Development",
    title: "E-learning Platform",
    description: `This is E-learning Platform where you can learn and practice programming languages, AI, DSA and many more. <br />
	<b>URL:</b> <u><a href="https://tek4.vn" target="_blank">https://tek4.vn</a></u>`,
    images: [
      "/images/projects/tek4/tek4.png",
      "/images/projects/tek4/tek4-3.png",
      "/images/projects/tek4/tek4-4.png",
      "/images/projects/tek4/tek4-2.png",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "SCSS",
      "Shadcn UI",
      "Ant Design",
      "GraphQL",
    ],
    likes: 24,
    comments: 5,
    shares: 2,
  },
  // Landing Page
  {
    id: 2,
    date: "June, 2023",
    projectType: "Web Development",
    title: "Landing Page",
    description: `A modern landing page with responsive design and elegant animations. <br />
	<b>URL:</b> <br /> <u><a href="https://www.xssethub.com" target="_blank">https://www.xssethub.com</a></u>  <br /> 
  <u><a href="https://vndevhouse.iceteasoftware.com" target="_blank">https://vndevhouse.iceteasoftware.com</a></u>
  `,
    images: [
      "/images/projects/landing-page/1.png",
      "/images/projects/landing-page/2.png",
    ],
    technologies: ["ReactJS", "Tailwind CSS", "Framer Motion", "Vite"],
    likes: 18,
    comments: 3,
    shares: 1,
  },
  // Spotify Clone
  {
    id: 8,
    date: "July, 2023",
    projectType: "Clone Project",
    title: "Spotify Clone",
    description: `A clone version of website Spotify. <br />
	<b>URL:</b> <u><a href="https://spotify-clone-nu-eight-53.vercel.app/" target="_blank">https://spotify-clone-nu-eight-53.vercel.app/</a></u>`,
    images: [
      "/images/projects/spotify-clone/1.png",
      "/images/projects/spotify-clone/2.png",
      "/images/projects/spotify-clone/3.png",
    ],
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Mui Material",
      "Recoil",
      "GraphQL",
    ],
    likes: 45,
    comments: 11,
    shares: 7,
  },
  // TikTok Clone
  {
    id: 9,
    date: "September, 2023",
    projectType: "Clone Project",
    title: "TikTok Clone",
    description: `My first project with ReactJS. <br />
	<b>URL:</b> <u><a href="https://nguyenviet02.github.io/tiktok-clone/" target="_blank">https://nguyenviet02.github.io/tiktok-clone/</a></u>`,
    images: [
      "/images/projects/tiktok-clone/1.png",
      "/images/projects/tiktok-clone/2.png",
      "/images/projects/tiktok-clone/3.png",
    ],
    technologies: ["ReactJS", "SCSS"],
    likes: 36,
    comments: 8,
    shares: 5,
  },
];

export default projects;
