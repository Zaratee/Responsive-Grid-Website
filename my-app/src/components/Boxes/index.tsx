import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartPie, faGlobe, faCog, faUsers } from '@fortawesome/free-solid-svg-icons'

import React from 'react'
import styles from "./styles.module.css";

const values = [
    {
        title: "Analytics",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, harum!",
        icon: faChartPie
    },
    {
        title: "Marketing",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, harum!",
        icon: faGlobe
    },
    {
        title: "Development",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, harum!",
        icon: faCog
    },
    {
        title: "Support",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, harum!",
        icon: faUsers
    },
]
const Boxes = () => {
    return (
        <div>
            {
                values.map((category) => {
                    return (

                        <div className={styles.box}>
                            <FontAwesomeIcon size='4x' icon={category.icon} />
                            <h3>{category.title}</h3>
                            <p>{category.description}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Boxes