import PropTypes from 'prop-types';
import { useState } from 'react';
import Icon from '../../Icon/Icon';
import css from './ImageView.module.css';

function ImageView({ images, imageIndex = 0 }) {
  const [currentImage, setCurrentImage] = useState(imageIndex);

  const navigateImage = (direction) => {
    setCurrentImage((prevIndex) => {
      const step = direction === 'next' ? 1 : -1;
      const nextIndex = (prevIndex + step + images.length) % images.length;
      return nextIndex;
    });
  };

  if (!Array.isArray(images) || images.length === 0) return null;

  return (
    <div className={css.imageView}>
      <div className={css.back} onClick={() => navigateImage('prev')}>
        <Icon width={20} height={60} nameIcon="arrowLeft" className={css.icon} />
      </div>
      <div className={css.imageContainer}>
        <img src={images[currentImage]} alt="Displayed" className={css.image} />
      </div>
      <div className={css.next} onClick={() => navigateImage('next')}>
        <Icon width={46} height={46} nameIcon="arrowRight" className={css.icon} />
      </div>
    </div>
  );
}

ImageView.propTypes = {
  images: PropTypes.array.isRequired,
  imageIndex: PropTypes.number
};

export default ImageView;
