import Image from 'next/image';
import Fade from 'react-reveal/Fade';
import { Element } from 'react-scroll';

export default function AboutMe() {
	return (
		<Fade>
			<Element name="about-me" className="relative z-10" />
			<div className="mb-48">
				<h3 className="mb-16 cursor-default text-center text-4xl font-medium text-gray-800 transition duration-300 dark:text-white lg:mb-20 xl:mb-24">
					About Me
				</h3>
				<div className="mx-4 flex flex-col items-center justify-around rounded-xl border-2 border-cyan-400 bg-cyan-100 p-8 dark:border-0 dark:bg-gray-800 sm:mx-10 md:flex-row">
					<Image
						src="/profile_pic.png"
						alt="Profile Picture"
						width={480}
						height={480}
						className="mb-10 w-full max-w-[280px] rounded-full border-4 border-cyan-500 grayscale filter transition duration-300 hover:filter-none dark:border-cyan-700 md:mb-0"
					/>
					<div className="flex w-full max-w-2xl items-center text-align:left text-base md:mb-0 md:ml-10 md:text-lg">
						{`I am a software engineer and tech lead with over 5 years of experience in software development. I am always learning and growing, both through reading and research, as well as through collaboration with my colleagues. I am passionate about sharing knowledge and learning from others, both in the technical and non-technical realms. `}
						<br></br>
						{`Details about my schooling, abilities, and completed projects are provided here. `}
						<br></br>
						{`I hope you enjoy them, and please consider emailing me any comments you may have.`}
					</div>
				</div>
			</div>
		</Fade>
	);
}
