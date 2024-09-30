import React from 'react';
import { eightImg, ninthImg, seventhImg } from '../utils/utils';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const Offer = () => {
	useGSAP(() => {
		gsap.to('.gsap-translate', {
			scrollTrigger: {
				trigger: '.gsap-translate',
				start: 'top 45%',
				toggleActions: 'restart reverse restart reverse',
			},
			duration: 1,
			x: window.innerWidth < 640 ? -180 : 0,
			ease: 'power.in',
		});
	}, []);

	return (
		<section className="h-[70vh] sm:h-[90vh] flex justify-center">
			<div className="w-[85vw] sm:flex">
				<div className="flex flex-col justify-center gap-4 sm:gap-8 sm:w-[40vw] sm:mr-14">
					<p className="font-bold text-yellow-400">Tailored Fitness Customized Health</p>
					<h2 className="text-3xl">Personalized Fitness Plans Offered</h2>
					<p>
						Discover tailored fitness solutions designed to meet your unique goals and
						lifestyle in the heart of Ho Chi Minh City.
					</p>
					<button className="py-4 transition-all duration-200 ease-linear bg-yellow-400 rounded-md hover:text-yellow-400 hover:bg-black sm:px-8 sm:w-fit">
						Learn More
					</button>
				</div>

				<div className="py-10 overflow-hidden sm:w-[50%]">
					<div className="flex gap-4 gsap-translate">
						<img src={seventhImg} alt="" className="object-cover w-[60vw] img-resize" />
						<img src={eightImg} alt="" className="object-cover w-[60vw] img-resize" />
					</div>

					<div className="pt-5">
						<img
							src={ninthImg}
							alt=""
							className="hidden sm:block h-[40vh] w-full object-cover rounded-md"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Offer;
