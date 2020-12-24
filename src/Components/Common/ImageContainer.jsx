import React from 'react'
const imgUrl = 'https://image.tmdb.org/t/p/w500/';

const ImageContainer = ({poster_path,title}) => {
    return (
        <div className="img-card">
        <img src={`${imgUrl}${poster_path}`} alt={`${title}`} />
    </div>
)
}

export default ImageContainer
