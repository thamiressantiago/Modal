import React, { Component } from 'react';
import './Home.css';
import Menu from '../../Components/Menu/Menu';
import Banner from '../../Components/Banner/Banner';
import Sobre from '../../Components//Sobre/Sobre';
import Eventos from '../../Components/Eventos/Eventos';
import Contato from '../../Components/Contato/Contato';
import Footer from '../../Components/Footer/Footer';
import Comunidade from '../../Components/Comunidade/Comunidade';
import Modal from '../../Components/Modal/Modal';

class Home extends Component {
  componentWillMount = () => {
    this.setState({ modalAtivo: false });
  }

  alternarModal = () => {
    let ativo = !this.state.modalAtivo;

    this.setState({ modalAtivo: ativo });
  }

  render() {
    return (
      <div className="Home">
        <Menu alternarModal={this.alternarModal}/>
        <Banner />
        <Modal ativo={this.state.modalAtivo}/>
        <Sobre />
        <div className="grade"></div>
        <Eventos />
        <div className="grade"></div>
        <Comunidade />
        <div className="grade"></div>
        <Contato />
        <Footer />

      </div>
    );
  }
}

export default Home;