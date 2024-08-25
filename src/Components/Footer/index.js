import React, { Component } from 'react';
import './style.css';

// Componente Footer para Web
class WebFooter extends Component {
  render() {
    return (
      <footer style={{ backgroundColor: '#282c34', color: 'white', padding: '20px', textAlign: 'center' }}>
        <h3>Centro de Atendimento Psicológico</h3>
        <p>© 2024 Centro de Psicologia. Todos os direitos reservados.</p>
        <p>
          <a href="mailto:contato@psicologia.com" style={{ color: 'lightblue', textDecoration: 'none' }}>contato@psicologia.com</a>
        </p>
        <p>
          <a href="https://www.facebook.com/psicologia" style={{ color: 'lightblue', marginRight: '10px' }}>Facebook</a>
          <a href="https://www.twitter.com/psicologia" style={{ color: 'lightblue' }}>Twitter</a>
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
        <h4>Centro de Atendimento Psicológico</h4>
        <p>© 2024 Centro de Psicologia. Todos os direitos reservados.</p>
        <p>
          <a href="mailto:contato@psicologia.com" style={{ color: '#007bff', textDecoration: 'none' }}>contato@psicologia.com</a>
        </p>
        <p>
          <a href="https://www.facebook.com/psicologia" style={{ color: '#007bff', marginRight: '8px' }}>Facebook</a>
          <a href="https://www.twitter.com/psicologia" style={{ color: '#007bff' }}>Twitter</a>
        </p>
        <p>Telefone: (11) 1234-5678</p>
      </footer>
    );
  }
}

export { WebFooter, WebFooterOut };
