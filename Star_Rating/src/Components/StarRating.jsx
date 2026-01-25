import {useEffect,useState} from 'react'
import {Star} from "../Icons/Star.jsx";

export default function StarRating({totalStars,filledStars}) {

    const [starsFilled,setStarsFilled]=useState(filledStars)
    const [starsHovered,setStarsHovered]=useState(0)

    const handleStarClicked=(index)=>{
        setStarsFilled(Math.min(index+1,totalStars))
    }

    const handleHovering=(index)=>{
        console.log(index)
        setStarsHovered(Math.min(index+1,totalStars))
    }

    const handleStopHovering=()=>{
        setStarsHovered(0)
    }

    useEffect(() => {
        setStarsFilled(filledStars)
    }, [filledStars]);

    return (
        <div style={{display:"flex"}} onMouseLeave={handleStopHovering}>
            {totalStars>0 && [...Array(totalStars)].map((_,index)=>{
                const fillStr= starsHovered==0? starsFilled>index:starsHovered>index
                return <div key={index}
                            onClick={()=>handleStarClicked(index)}
                            onMouseEnter={()=>{handleHovering(index)}}
                >
                    {fillStr?<Star filled={true}/>:<Star/>}
                </div>
            })}
        </div>
    );
}