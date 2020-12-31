import React from 'react';
const imgUrl = 'https://image.tmdb.org/t/p/w500/';

const ImageContainer = ({ poster_path, title, defClass = 'poster-img' }) => {
	return (
		<div className="img-card">
			<img
				loading="lazy"
				className={defClass}
				src={`${imgUrl}${poster_path}`}
				alt={`${title}`}
			/>
		</div>
	);
};

export default ImageContainer;
