import React, {Component} from 'react';
import './Modal.css';


class Modal extends Component {

    render (){
        let modalCSS = 'modal';

        if (this.props.ativo){
            modalCSS += ' ativo';
        }

        return (    
            <div>

                <div onClick={this.showModal}  className={modalCSS}>
                    {/* <div onClick={this.showModal} className={modalCSS}> </div> */}

                    <div>
                        <h2 className="login"> Login </h2>
                    </div>

                    <div>
                        <img className="usuario" src="https://tse2.mm.bing.net/th?id=OIP.oBKaN9DEo8oFzuuTmU5jKQHaE7&pid=Api"/> 
                    </div> 

                   <div className="botao"> 
                        <a href="Home.js"><button className="tamanho">ENTRAR</button></a>
                   </div>   

                </div>

                

            </div> 

            
        );
    }
}

export default Modal;