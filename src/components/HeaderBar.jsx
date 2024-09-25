import React from 'react';
import { weightImg } from '../utils/utils';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const HeaderBar = () => {
	useGSAP(() => {
		gsap.to('#header', {
			scrollTrigger: {
				trigger: document.body,
				start: 'top top',
				end: 'bottom top',
				toggleClass: { targets: '#header', className: 'gsap-header-transition' },
			},
		});
	}, []);

	return (
		<header
			id="header"
			className="fixed top-0 left-0 z-10 flex items-center justify-start w-full px-10 py-0 transition-all duration-150 ease-linear bg-yellow-400 sm:px-48"
		>
			<div className="flex w-full screen-max-width">
				<div className="h-full py-4 cursor-pointer flex-center">
					<img src={weightImg} alt="home-icon" className="h-12" />
					<h1 className="px-4 text-4xl font-bold text-black">FitMe</h1>
				</div>
			</div>
		</header>
	);
};

export default HeaderBar;
