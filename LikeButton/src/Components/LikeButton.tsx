
import {useState} from 'react'
import {SpinnerIcon} from "../Icons/SpinnerIcon";
import {HeartIcon} from "../Icons/HeartIcon";
import styles from "../styles/LikeButton.module.css"

export default function LikeButton() {
    const [isLiked, setIsLiked]=useState(false)
    const [isHovered, setIsHovered]=useState(false)
    const [isLoading, setIsLoading]=useState(false)
    const [error, setError]=useState("")
    const handleHover=()=>{
        setIsHovered(true)
    }
    const handleClick=async()=>{
        if(isLoading) return
        setIsLoading(true)
        const res=await fetch("https://questions.greatfrontend.com/api/questions/like-button",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({action:isLiked?"unlike":"like"})
        })
        const data=await res.json()
        if(res.ok){
            setIsLiked((prev)=>!prev)
            setIsLoading(false)
            setError("")
        }else {
            setError(data.message)
            setIsLoading(false)
        }
    }
    const bgColor=!isLoading && isHovered?"white":isLiked?"red":"white"
    const borderColor=!isLoading && isHovered?"red":isLiked?"white":"grey"
    return (
        <div>
            <button className={styles.buttonBorder} disabled={isLoading} style={{backgroundColor:bgColor, borderColor:borderColor}} onMouseEnter={handleHover} onMouseLeave={()=>setIsHovered(false)} onClick={handleClick}>
                { isLoading?<SpinnerIcon/>:<HeartIcon color={borderColor}/>} <div style={{color:borderColor}}>Like</div>
            </button>
            {error && <div style={{fontSize:"10px", color:"red"}}>{error}</div>}
        </div>
    );
}
