import React, { Component } from 'react';
import './Comunidade.css';
import Hexagono from '../Hexagono/Hexagono';
import com1 from '../../Images/vtex.png';

class Comunidade extends Component {
    render() {
      return (
        <section className="Comunidade">
        <h2>Comunidade</h2>
        <hr /> <hr />
        <div id="colmeia">
            <div className="comunity1">
                <Hexagono imagem={com1} />
                <Hexagono imagem={com1} />
                <Hexagono imagem={com1} />
            </div>
            <div className="comunity2">
                <Hexagono imagem={com1} />
                <Hexagono imagem={com1} />
                <Hexagono imagem={com1} />
                <Hexagono imagem={com1} />
            </div>
            <div className="comunity1">
                <Hexagono imagem={com1} />
                <Hexagono imagem={com1} />
                <Hexagono imagem={com1} />
            </div>
        </div>
    </section>
      );
    }
  }
  
  export default Comunidade;