import React from 'react';
import ImageCard from './ImageCard';
import './ImageList.css';

const ImageList = (props) => {
  const images = props.images.map(({description,id,urls}) => {return (<ImageCard key={id} description={description} url={urls.regular}></ImageCard>);
  });

  return (<div className="image-list">{images}</div>);
};
export default ImageList
