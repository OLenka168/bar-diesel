import { useState } from 'react';
import { data } from './Data';
import left from './left.png';
import right from './right.png';

function Gallery() {
    const [image, setImage] = useState(0);
    const {icon} = data[image];

    const previousImage = () => {
        setImage ((image => {
            image --;
            if (image < 0) {
            return data.length - 1;
            }
            return image;
        }))
    }

    const nextImage = () => {
        setImage ((image => {
            image ++;
            if (image > data.length - 1) {
                image = 0;
            }
            return image;
        }))
    }

    return (
        <div>
            <div className='gallery_title'>
                <h2>Галерея</h2>
            </div>
            <div className='gallery'>
            <div className='gallery_icon'>
                <img src={left} onClick={previousImage} alt='icon'/>
            </div>
            <div>
                <img className='gallery_img' onClick={previousImage} src={icon} alt='pic'/>
            </div>
            <div className='gallery_icon'>
                <img src={right} onClick={nextImage} alt='icon'/>
            </div>
            </div>
        </div>
    )
}

export default Gallery;

