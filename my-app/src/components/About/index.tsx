import React from 'react'
import styles from "./styles.module.css";


const About = () => {
    return (
        <div>
            <img src='/img1.webp' />
            <div>
                <h2>Your Business On The Web</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Repellat quasi, magni nobis dolorum fugiat nihil ab provident qui, mollitia,
                    nemo tempore perferendis iste? Quam, modi esse. Quis corrupti reprehenderit odit.</p>
                <a href='#' className={styles.btn}>Learn More</a>
            </div>
        </div>
    )
}

export default About