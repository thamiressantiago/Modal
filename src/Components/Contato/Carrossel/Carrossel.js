import React, { Component } from 'react';
import "./Carrossel.css"
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import im from './im.jpg';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

class Carrossel extends Component {
    render() {
        return (
            <div id="carrossel">
                <Carousel>
                    <div>
                        <img className="teste" src={im} />
                        <p className="legend">Legend 1</p>
                    </div>
                    <div>
                        <img className="teste" src={im}/>
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img className="teste" src={im}/>
                        <p className="legend">Legend 3</p>
                    </div>
                    <div>
                        <img className="teste" src={im}/>
                        <p className="legend">Legend 3</p>
                    </div>               
                </Carousel>
            </div>
        );
    }
}

export default Carrossel;