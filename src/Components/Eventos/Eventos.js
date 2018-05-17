import React, {Component} from 'react';
import './Eventos.css';
import Carrossel from '../Contato/Carrossel/Carrossel';

class Eventos extends Component {
    render (){
        return (    
            <section className="Eventos">
                <h2>Eventos</h2>
                <hr /> <hr />
                <Carrossel />
            </section>   
        );
    }
}

export default Eventos;