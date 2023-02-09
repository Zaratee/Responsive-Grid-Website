import React from 'react'
import "../../App.css"


const Top = () => {
    return (
        <section className='top-container'>
            <header className='showcase'>
                <h1>Your Web Presence</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, dignissimos? Velit quidem nihil fugiat expedita!</p>
                <a href='#' className='btn'>Read More</a>
            </header>
            <div className='top-box top-box-a'>
                <h4>Membership</h4>
                <p className='price'>$199/mo</p>
                <a href='#' className='btn'>Buy now</a>
            </div>
            <div className='top-box top-box-b'>
                <h4>PRO Membership</h4>
                <p className='price'>$299/mo</p>
                <a href='#' className='btn'>Buy now</a>
            </div>
        </section>
    )
}

export default Top