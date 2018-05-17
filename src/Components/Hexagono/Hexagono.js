import React, {Component} from 'react';
import './Hexagono.css';


class Hexagono extends Component{
    constructor(props){
        super(props);
        this.background = "url(" + this.props.imagem + ")";
    }    

    render = function () {
        console.log(this.background);
        return (
            
       <div>
            <div className="hexagon" style={{background: this.background}}>
              <div className="hexTop"></div>
              <div className="hexBottom"></div>
            </div>
         
        </div>
    );
    }
 
}

export default Hexagono;