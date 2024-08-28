import React, { Component } from 'react';
import './style.css';

// Componente Footer para Web
class WebFooter extends Component {
  render() {
    return (
      <footer style={{ backgroundColor: '#282c34', color: 'white', padding: '20px', textAlign: 'center' }}>
         <h4> </h4>
        <p>© 2024 Clínica de Psicologia VIP - Vida Inovação e Psicologia. Todos os direitos reservados.</p>
        <p>
          <a href="mailto:mariliateixeirapsi@gmail.com" style={{ color: 'lightblue', textDecoration: 'none' }}>mariliateixeirapsi@gmail.com
          </a>
        </p>
        <p>
        </p>
        <p>Telefone: (11) 1234-5678</p>
      </footer>
    );
  }
}

// Componente Footer para Mobile
class WebFooterOut extends Component {
  render() {
    return (
        <footer style={{ backgroundColor: '#282c34', color: 'white', padding: '20px', textAlign: 'center' }}>
        <h4> </h4>
        <p>© 2024 Clínica de Psicologia VIP - Vida Inovação e Psicologia. Todos os direitos reservados.</p>
        <p>
          <a href="mariliateixeirapsi@gmail.com" style={{ color: '#007bff', textDecoration: 'none' }}>mariliateixeirapsi@gmail.com</a>
        </p>
        <p> 
        </p>
        <p>Telefone: (61) 9 9908-8948</p>
      </footer>
    );
  }
}

export { WebFooter, WebFooterOut };
