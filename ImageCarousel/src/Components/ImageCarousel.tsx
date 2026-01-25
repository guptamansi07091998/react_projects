import {useState} from 'react'
import styles from '../styles/ImageCarousel.module.css'

export default function ImageCarousel({
                                          images,
                                      }: Readonly<{
    images: ReadonlyArray<{ src: string; alt: string }>;
}>) {
    const [currentIndex,setCurrentIndex]=useState(0)
    const handlePrevClick=()=>{
        if(currentIndex>0)
            setCurrentIndex((currentIndex-1))
        else
            setCurrentIndex(images.length-1)
    }
    const handleNextClick=()=>{
        setCurrentIndex((currentIndex+1)%(images.length))
    }
    const handleJumpToIndex=(index:number)=>{
        setCurrentIndex(index)
    }
    return (
        <div className={styles.carousel}>
            <img className={styles.imgStyle} alt={images[currentIndex].alt} src={images[currentIndex].src} />
            <div style={{justifyContent:'center'}}>
            <button onClick={handlePrevClick}>prev</button>
            {images.map((_,index)=><button onClick={()=>handleJumpToIndex(index)}>{index+1}</button>)}
            <button onClick={handleNextClick}>next</button>
            </div>
        </div>
    );
}
