import React, {Component} from 'react';
import './Banner.css';

class Banner extends Component {
    render (){
        return (    
            <section className="banner">
                <div>
                    <img  id="logo" src={require('../../Images/LOGO01.png')} />
                </div>

                <div id="texte">
                    <p>Saiba sobre os eventos tecnológicos mais interessantes de SP!</p>    
                </div>   

                <div>
                    <img id="seta" src={require('../../Images/seta.png')}/>
                </div>
            </section> 
        );
    }
}

export default Banner;