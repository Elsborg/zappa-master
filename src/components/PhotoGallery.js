import React from 'react'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import galleri1 from '../assets/galleri1.jpg'
import galleri2 from '../assets/galleri2.jpg'
import galleri3 from '../assets/galleri3.jpg'
import galleri4 from '../assets/galleri4.jpg'
import galleri5 from '../assets/galleri5.jpg'
import galleri6 from '../assets/galleri6.jpg'
import galleri7 from '../assets/galleri7.jpg'
import galleri8 from '../assets/galleri8.jpg'
import galleri9 from '../assets/galleri9.jpg'
import galleri10 from '../assets/galleri10.jpg'
import galleri11 from '../assets/galleri11.jpg'
import galleri12 from '../assets/galleri12.jpg'

/* PhotoGallery component that displays a grid of images using the Masonry component from react-responsive-masonry.
The Masonry component is passed an array of images as props, and these images are rendered in a grid layout.
The ResponsiveMasonry component is used to make the grid responsive, so that the number of columns in the grid adjusts
depending on the width of the screen. The columnsCountBreakPoints prop is used to specify the number of columns to display
at different screen widths.

The PhotoGallery component also includes some styles to add transitions to the images when they are hovered
over or when the layout changes.*/

const images = 
    [
    galleri2,
    galleri1,
    galleri3,
    galleri4,
    galleri11,
    galleri5,
    galleri6,
    galleri7,
    galleri8,
    galleri9,
    galleri10,
    galleri12


]



const PhotoGallery = () => {

  return (
    <>
    <div style={{transition: 'transform .3s', padding: '10px' }}>
    <ResponsiveMasonry
    columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
>
    <Masonry gutter="20px">
        {images.map((image, i) => (
            <img
                key={i}
                src={image}
                style={{width: "100%", display: "block", transition: 'transform .2s'}}
                alt="Galleri billeder"
                className='gallery-image'
            />
        ))}
    </Masonry>
</ResponsiveMasonry>
</div>
</>
  )
}

export default PhotoGallery