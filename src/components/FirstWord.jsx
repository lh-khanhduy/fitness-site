import React from 'react';
import { firstImg, secondImg } from '../utils/utils';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const FirstWord = () => {
	useGSAP(() => {
		gsap.to('#first-word', {
			y: 0,
			opacity: 1,
			ease: 'power2.in',
			duration: 1,
		});

		gsap.from('#img-slider', {
			x: 30,
			opacity: 0,
			ease: 'power2.in',
			duration: 0.75,
		});
	}, []);

	const funcTranslateOnClick = () => {
		if (window.innerWidth < 760) {
			const slider = document.getElementById('images');
			slider.classList.toggle('-translate-x-[55vw]');
		}
	};

	return (
		<section className="w-full mt-20 h-[calc(90vh-75px)] bg-yellow-400 flex justify-center">
			<div className="w-[82vw] h-[80vh] pt-4 flex-col flex sm:flex-row sm:items-center sm:gap-10">
				<div id="first-word" className="flex flex-col gap-6 opacity-0 sm:w-[40vw]">
					<h2 className="text-3xl sm:text-4xl">Customized Fitness Plans for Success</h2>
					<p>
						Achieve your fitness goals with tailored programs in Ho Chi Minh City,
						designed to optimize your health and wellness journey.
					</p>
					<button className="px-4 py-3 text-xl transition-all duration-200 ease-linear rounded-md sm:w-fit sm:py-2 sm:text-base outline outline-2 outline-black hover:bg-black hover:text-yellow-400">
						Learn More
					</button>
				</div>

				<div
					id="img-slider"
					className="mt-5 h-[32vh] sm:h-[60vh]  overflow-hidden opacity-1"
					onClick={() => funcTranslateOnClick()}
				>
					<div
						id="images"
						className="flex h-full gap-4 transition-all duration-200 ease-in-out"
					>
						<img
							src={firstImg}
							alt="first"
							className="w-[70vw] sm:w-[18vw] sm:rounded-md object-cover object-center"
						/>
						<img
							src={secondImg}
							alt="first"
							className="w-[70vw] sm:w-[18vw] sm:rounded-md object-cover object-center"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FirstWord;
