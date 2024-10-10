import React from 'react'
import { Link } from 'react-router-dom'

function Bredcom() {
  return (
    <>
        <section className="page-header text-start">
            <div className="page-header__bg" style={{ backgroundImage: "url(assets/images/background/page-header-bg-1-1.jpg)" }} />
            
            <div className="container">
                <h2 className="page-header__title">Portfolio Details</h2>
                
                <ul className="list-unstyled breadcrumb-one">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <span>Portfolio Details</span>
                </li>
                </ul>
                
            </div>
  
        </section>

    </>
  )
}

export default Bredcom