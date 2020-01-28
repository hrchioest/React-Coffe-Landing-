import React from 'react';
import GranosCoffee from './granos-coffee.jpg'
import './fresh-beans.scss'



const FreshBeans = () => {

    return (
        <section className="content-fresh">
            <article>
                <div className="content-texto">
                    <h2>FRESH BEANS</h2>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    <a href="#">LEAR MORES</a>
                </div>
            </article>
            <div className="content-img">
                <img src={GranosCoffee}></img>
            </div>
           
        </section>
    )

}

export default FreshBeans;