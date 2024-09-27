import React from 'react';
import PropTypes from 'prop-types';

const ServiceCard = (props) => {
	return (
		<>
			<div className="flex flex-col flex-1 gap-6 py-12 sm:py-4 g-service">
				<div className="overflow-hidden sm:rounded-md">
					<img
						src={props.img}
						alt=""
						className="object-cover object-center w-full h-[40vh]"
					/>
				</div>

				<h2 className="text-3xl">{props.service}</h2>
				<p>{props.desc}</p>
			</div>
		</>
	);
};

ServiceCard.propTypes = {
	img: PropTypes.any,
	service: PropTypes.string.isRequired,
	desc: PropTypes.string.isRequired,
};

export default ServiceCard;
