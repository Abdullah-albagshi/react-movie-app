import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Carousel } from 'react-bootstrap';

const imgUrl = 'https://image.tmdb.org/t/p/w500/';

const MovieCarousel = ({ movieId , typeOf}) => {
	const movieImagesUrl = `https://api.themoviedb.org/3/${typeOf}/${movieId}/images?api_key=9e058083ea188da98174ef4a8d1c2f31&language=en-US&include_image_language=en%2Cnull`;
	const [images, setImages] = useState([]);

	let getMovieImages = async () => {
		const images = await axios.get(movieImagesUrl);
        let moviesImages = images.data.backdrops;
        if(moviesImages.length >=10){
            moviesImages = moviesImages.slice(0,10)
        }
		setImages(moviesImages);
	};

	useEffect(() => {
		try {
			getMovieImages();
		} catch (error) {
			console.log(error);
		}
	}, []);

	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	return (
		<>
			<Carousel activeIndex={index} onSelect={handleSelect}>
				{images.map((img,index) => (
					<Carousel.Item className='carousel-image' key={index}>
						<img
							className="d-block w-100 carousel-image"
							src={`${imgUrl}${img.file_path}`}
                            alt="First slide"
						/>
					</Carousel.Item>
				))}
			</Carousel>
		</>
	);
};

export default MovieCarousel;
