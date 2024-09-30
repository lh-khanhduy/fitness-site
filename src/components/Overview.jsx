import React from 'react';
import { thirdImg } from '../utils/utils';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const Overview = () => {
	useGSAP(() => {
		gsap.from('#g-overview-text', {
			opacity: 0,
			duration: 1,
			scrollTrigger: {
				trigger: '#g-overview-text',
				start: 'top 80%',
				toggleActions: 'play none none none',
			},
		});

		gsap.from('#g-overview-img', {
			opacity: 0,
			duration: 1,
			y: 30,
			scrollTrigger: {
				trigger: '#g-overview-img',
				start: 'top 85%',
				toggleActions: 'play none none none',
			},
		});
	}, []);

	return (
		<section className="h-fit sm:h-[110vh] flex justify-center py-16">
			<div className="w-[85vw]">
				<div className="gap-6 sm:flex">
					<h2 id="g-overview-text" className="pb-4 text-3xl sm:text-4xl sm:flex-1">
						Quality service from an experienced team you can trust
					</h2>
					<p id="g-overview-text" className="pb-8 sm:flex-1 sm:text-sm">
						We're here to provide our customers with the highest quality of service.
						With our dedication to customer satisfaction, you can rest assured that you
						will have a great experience.
					</p>
				</div>

				<div className="overflow-hidden sm:rounded-md">
					<img id="g-overview-img" src={thirdImg} alt="third" className="object-cover" />
				</div>
			</div>
		</section>
	);
};

export default Overview;
