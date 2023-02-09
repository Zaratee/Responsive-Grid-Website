import React from 'react'
import "../../App.css"

const values = [
    {
        src: "https://picsum.photos/200/200"
    },
    {
        src: "https://picsum.photos/201/200"
    },
    {
        src: "https://picsum.photos/202/200"
    },
    {
        src: "https://picsum.photos/203/200"
    },
    {
        src: "https://picsum.photos/204/200"
    },
    {
        src: "https://picsum.photos/205/200"
    },
    {
        src: "https://picsum.photos/206/200"
    },
    {
        src: "https://picsum.photos/207/200"
    },
    {
        src: "https://picsum.photos/208/200"
    },

]
const Portafolio = () => {
    return (
        <section className='portafolio'>
            {
                values.map((image) => {
                    return (
                        <img src={image.src} />
                    )
                })
            }
        </section>
    )
}

export default Portafolio