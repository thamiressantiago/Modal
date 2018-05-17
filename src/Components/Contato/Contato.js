import React, { Component } from 'react';
import './Contato.css';

class Contato extends Component{
    render(){
        return(
            <section className="Contato">
                {/* <img src={require('../../Images/itpreto.png')} alt="logo" /> */}
                <h2>Contato</h2>
                <hr /> <hr />
                <div className="form">
                    <p className="maior">Ficou com alguma dúvida, tem alguma sugestão ou quer vir com a gente nessa? Vamos lá!</p>
                    <p><input type="text" class="form-control" placeholder="Nome" required /></p>
                    <p><input type="text" class="form-control" placeholder="E-mail" required /></p>
                    <p><input type="tel" class="form-control" placeholder="Telefone" required /></p>
                    <p><textarea class="form-control" placeholder="Mensagem" ></textarea></p>
                    <button type="submit" class="btn">Enviar</button>
                </div>
            </section>
        );
    }
}

export default Contato;