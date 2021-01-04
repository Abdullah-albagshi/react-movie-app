import React from 'react';
const imgUrl = 'https://image.tmdb.org/t/p/w500/';

const ImageContainer = ({ poster_path, title, defClass = 'poster-img' }) => {
	return (
		<div className="img-card">
			<img
				loading="lazy"
				className={defClass}
				src={(poster_path ? `${imgUrl}${poster_path}` : 'https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png') }
				alt={`${title}`}
			/>
		</div>
	);
};

export default ImageContainer;
