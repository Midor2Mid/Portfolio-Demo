import Image from 'next/image';
import Fade from 'react-reveal/Fade';
import { Element } from 'react-scroll';

export default function Education() {
	return (
		<>
			<Element name="education" className="relative" />
			<div className="mb-48 mt-20 sm:mt-0">
				<h3 className="mb-16 cursor-default text-center text-4xl font-medium text-gray-800 transition duration-300 dark:text-white lg:mb-20 xl:mb-24">
					Education
				</h3>
				<div className="mx-0 grid grid-cols-1 sm:grid-cols-2 md:mx-5 lg:grid-cols-4">
					<div className="group m-4 flex justify-between rounded-xl border-2 border-cyan-200 p-5 text-gray-700 hover:border-cyan-500  dark:border-gray-800 dark:text-white dark:hover:border-cyan-700 sm:col-span-2">
						<Fade left>
							<div>
								<p className="mb-2 cursor-default text-base text-cyan-600 dark:text-cyan-500">
									2011-2014
								</p>
								<p className="my-1 font-medium sm:text-xl">Mathematics and Informatics</p>
								<p className="my-1 text-sm font-medium">Quang Trung Specialized and Gifted High School</p>
								<p className="text-sm">K9</p>
							</div>
							<div className="block">
								<Image
								src="/cqt_logo.png"
								alt="CQT Logo"
								width={100}
								height={100}
								title="Chuyên Quang Trung"
								onClick={() => {
									window.open('https://chuyenquangtrung.edu.vn/', '_blank');
								}}
									className="hover:cursor-pointer"
								/>
							</div>
						</Fade>
					</div>
					<div className="group m-4 flex justify-between rounded-xl border-2 border-cyan-200 p-5 text-gray-700 hover:border-cyan-500 dark:border-gray-800  dark:text-white dark:hover:border-cyan-700 sm:col-span-2">
						<Fade left>
							<div>
								<p className="mb-2 cursor-default text-base text-cyan-600 dark:text-cyan-500">
									2014-2019 (Engineering Degree)
								</p>
								<p className="my-1 font-medium sm:text-xl">Faculty of Software Engineering</p>
								<p className="my-1 text-sm font-medium">University of Information Technology</p>
								<p className="text-sm">K9</p>
							</div>
							<Image
								src="/uit_logo.png"
								alt="UIT Logo"
								width={100}
								height={100}
								title="UIT"
								onClick={() => {
									window.open('https://www.uit.edu.vn/', '_blank');
								}}
								className="object-contain hover:cursor-pointer"
							/>
						</Fade>
					</div>
					{/* </Slide> */}
				</div>
			</div>
		</>
	);
}
