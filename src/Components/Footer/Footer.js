import React, { Component} from 'react';
import './Footer.css';

class Footer extends Component{
    render(){
        return(
            <div className="Footer">
                <footer>
                    <div className="icones">
                        <img src={require('../../Images/fb.png')} alt="facebook" />
                        <img src={require('../../Images/insta.png')} alt="instagem" />
                        <img src={require('../../Images/tt.png')} alt="twitter" />
                    </div>
                    <p class="rodape">© 2018 - InteressanTech | Estação Hack</p>  
                </footer>
            </div>
        );
    }
}

export default Footer;