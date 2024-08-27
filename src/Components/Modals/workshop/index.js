import React, { useState } from 'react';
import './style.css';
import supabase from '../../../servers/SupabaseConect';

const Workshop = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [showQRCode, setShowQRCode] = useState(false);

  const handleNext = () => setStep(step + 1);
  const handlePrevious = () => setStep(step - 1);

  const handleRedirectToWhatsApp = () => {
    window.open("https://wa.me/message/JP2BLCNQOF2HM1", "_blank");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const { error } = await supabase
      .from('inscritos_workshop')
      .insert([
        { 
          nome: data.nome, 
          email: data.email, 
          cpf: data.cpf, 
          whatsapp: data.whatsapp, 
          comoouviu: data.comoouviu, 
          sugestoes: data.sugestoes,  
          pagamento: data.pagamento === 'false' 
        }
      ]);

    if (error) {
      console.error('Erro ao enviar inscrição:', error);
    } else {
      console.log('Inscrição enviada com sucesso');
      setShowSnackbar(true);

      // Após 2 segundos, esconde o snackbar e redireciona para o WhatsApp
      setTimeout(() => {
        setShowSnackbar(false);
        handleRedirectToWhatsApp(); // Redireciona para o WhatsApp após 2 segundos
      }, 2000);
    }
  };

  const handleWhatsAppClick = () => setShowQRCode(true);
  const handleQRCodeClose = () => setShowQRCode(false);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className='cont-top'> 
           <button className="close-button" onClick={onClose}>X</button> 
        </div>
        {step === 1 && (
          <div className='continfos'>
            <h2>Informações Importantes</h2>
            <div>
              <p>
              Data: 7/10/2024 (segunda-feira).
              </p>
              <p>
              Horário: 20 hs.
              </p>
              <p>
              Duração: 1 h e 15 min .
              </p>
              <p>
              Local: online pelo zoom.
              </p>
              <p>
              Palestrante: Marília Teixeira Psicóloga e Neuropsicóloga.
              </p>
            </div>
            <div>
              <button onClick={handleNext} className="next-button">Próximo</button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2>Programação do evento</h2>
            <div className="programacao">
              <div className="programacao-item">
                <h3>Data</h3>7/10/2024 (segunda-feira).
                <ul></ul>
                <h3>Horário</h3>20 hs.
                <ul></ul>
               <h3>Duração:</h3>1 h e 15 min
                <ul></ul>
               <h3>Local: </h3>online pelo zoom
                <ul></ul>
                <h3>Valor: </h3>R$ 150 reias
              </div>
              <div className="programacao-item">
               
              </div>
              <div className="programacao-item">
                
              </div>
              <div className="programacao-item">
               
              </div>
              <div className="programacao-item">
               
               
              </div>
            </div>
            <button onClick={handleNext} className="next-button">Próximo</button>
          </div>
        )}

        {step === 3 && (
          <div className='continscricao'>
            <h2>Formulário de Inscrição</h2>
            <form onSubmit={handleSubmit}>
              <div className="continput">
                <label>Nome Completo *</label>
                <input type="text" name="nome" required />
              </div>
              <div className="continput">
                <label>Email *</label>
                <input type="email" name="email" required />
              </div>
              <div className="continput">
                <label>CPF *</label>
                <input type="text" name="cpf" required />
              </div>
              <div className="continput">
                <label>Whatsapp *</label>
                <input type="text" name="whatsapp" required />
              </div>
              <div className="continput">
                <label>Como ouviu sobre nós? *</label>
                <select name="comoouviu" required>
                  <option value="">Selecione uma opção</option>
                  <option value="Facebook">Facebook</option>
                  <option value="Instagram">Instagram</option>
                  <option value="LinkedIn">LinkedIn</option>
                  <option value="Twitter">Twitter</option>
                  <option value="Outros">Outros</option>
                </select>
              </div>
              <div className="continput">
                <label>Sugestões e Reclamações</label>
                <textarea name="sugestoes"></textarea>
              </div>
              <div className="form-text">
                <input type="checkbox" name="pagamento" required />
                <label style={{fontSize:"14px", marginLeft:"20px"}}>Entendo que precisarei pagar no máximo 2 dias antes de cada oficina.</label>
              </div>
              <div className='whatsbarr' onClick={handleWhatsAppClick}>
               
              </div>
              <div className='cont-bottom'>
                <button onClick={handlePrevious} className="previous-button">Anterior</button>
                <button type="submit" className="submit-button">Enviar e ir para pagamento</button>
              </div>
            </form>
          </div>
        )}

        {showSnackbar && <div className="snackbar">Inscrição enviada com sucesso!</div>}
      </div>
    </div>
  );
};

export default Workshop;
