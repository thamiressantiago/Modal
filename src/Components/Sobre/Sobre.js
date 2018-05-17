import React, {Component} from 'react';
import './Sobre.css';

class Sobre extends Component {
    render (){
        return (    
            <section className="Sobre">
                <h2>Sobre</h2>
                <hr /> <hr />
                <p className="maior">InteressanTech é uma plataforma informativa sobre eventos e comunidades tecnológicas em São Paulo.
                    Aqui você consegue ver tudo o que irá acontecer na cidade da garoa sem sair de casa, de forma 
                    prática e rápida.</p>
                <p className="maior">Damos o nosso máximo para que os conteúdos sejam atualizados quase que
                    momentaneamente, para que você fique por dentro de todas as novidades o mais rápido possível.</p>
                <p className="menor">Gostou da ideia? Gostaria de contribuir?
                    Mande uma mensagem para gente e vamos juntos!</p>
                <p className="menor" id="color">Afinal de contas, se é interessante para você, é interessante para a gente!</p>  
            </section>  
        );
    }
}

export default Sobre;