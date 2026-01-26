import {useEffect,useState} from "react";
import styles from "../styles/ProgressBar.module.css"

export const ProgressBar=()=>{
    const [value,setValue]=useState(0)

    useEffect(()=>{
        const timer=setInterval(()=>{
            setValue((prev)=>{
                if(prev>=100){
                    clearInterval(timer)
                    return 100
                }
                return prev+10
            })
        },500)
        return()=>{clearInterval(timer)}
    },[])

    return <div className={styles.barContainer}>
        <div className={styles.barProgress} style={{width:`${value}%`}}></div>
    </div>
}
