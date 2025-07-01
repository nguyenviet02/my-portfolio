// Sample project data
const projects = [
	{
		id: 1,
		date: 'April, 2022',
		projectType: 'Web Development',
		title: 'E-learning Platform',
		description: `Just launched a new e-learning platform built with React, Node.js and MongoDB. <a href="https://tek4.vn" target="_blank">tek4.vn</a>`,
		images: ['/images/projects/tek4.png'],
		technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
		likes: 24,
		comments: 5,
		shares: 2
	},
	{
		id: 2,
		username: 'John Doe',
		userImage: '/default.jpg',
		date: 'May 22, 2024',
		projectType: 'Mobile App',
		title: 'Fitness Tracker',
		description: 'Developed a fitness tracking app that helps users monitor their workouts, track progress, and set fitness goals. Available on iOS and Android.',
		images: ['https://via.placeholder.com/800x400'],
		technologies: ['React Native', 'Firebase', 'Redux', 'Google Fit API'],
		likes: 37,
		comments: 8,
		shares: 4
	},
];

export default projects;