import { Mail, Phone, Github, Linkedin } from 'lucide-react';

const contactInfo = [
	{
		icon: <Mail className="w-6 h-6 text-blue-500" />,
		title: 'Email',
		value: 'john.doe@example.com',
		link: 'mailto:john.doe@example.com',
		buttonText: 'Send Email'
	},
	{
		icon: <Phone className="w-6 h-6 text-blue-500" />,
		title: 'Phone',
		value: '+1 (234) 567-8900',
		link: 'tel:+12345678900',
		buttonText: 'Call Me'
	},
	{
		icon: <Github className="w-6 h-6 text-blue-500" />,
		title: 'GitHub',
		value: 'github.com/username',
		link: 'https://github.com/username',
		buttonText: 'View Profile'
	},
	{
		icon: <Linkedin className="w-6 h-6 text-blue-500" />,
		title: 'LinkedIn',
		value: 'linkedin.com/in/username',
		link: 'https://linkedin.com/in/username',
		buttonText: 'Connect'
	}
];

export default contactInfo;