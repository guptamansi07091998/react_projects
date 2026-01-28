import {useState, useEffect} from 'react'
import styles from '../styles/TrafficLight.module.css'

export default function TrafficLight() {
    const [currentColor, setColor]=useState("green")

    useEffect(()=>{
        const nextColor={
            green:"yellow",
            yellow:"red",
            red:"green"
        }
        const delay={
            green:3000,
            yellow:500,
            red:4000
        }
        const timer=setTimeout(()=>{
            setColor(nextColor[currentColor])
        },delay[currentColor])
        return()=>{
            clearTimeout(timer)
        }
    },[currentColor])

    return <div style={{ backgroundColor:currentColor}} className={styles.container}></div>;
}
