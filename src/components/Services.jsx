import React from 'react';
import { ServiceCardsArr } from '../utils/utils';
import ServiceCard from './ServiceCard';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
	useGSAP(() => {
		gsap.utils.toArray('.g-service').forEach((item, index) => {
			// Create a unique ScrollTrigger for each box
			gsap.from(item, {
				y: 30,
				opacity: 0,
				scrollTrigger: {
					trigger: item,
					start: 'top 85%',
					end: 'bottom 60%',
				},
				delay: 0.15 * index,
				duration: 0.75,
			});
		});
	}, []);

	return (
		<section className="sm:h-[70vh] h-fit flex justify-center ">
			<div className="w-[85vw]">
				<h2 className="text-4xl">Services</h2>

				<div className="justify-between gap-8 sm:flex">
					{ServiceCardsArr.map((card, i) => (
						<ServiceCard
							key={i}
							img={card.img}
							service={card.service}
							desc={card.description}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;
