import React, { useState } from 'react';
import './style.css';
import supabase from '../../../servers/SupabaseConect';

const InscricaoModal = ({ isOpen, onClose }) => {
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
      .from('inscritos')
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
      <div className="modal-contentdd">
        <div className='cont-top'> 
           <button className="close-button" onClick={onClose}>X</button> 
        </div>
        {step === 1 && (
          <div className='continfos'>
            <h2 className='h2'>Informações Importantes</h2>
            <div className='conttext'>
             
                As oficinas acontecerão TODAS AS SEGUNDAS-FEIRAS, INÍCIO PREVISTO 12/08 E NA SEQUÊNCIA PROVÁVEL DE 19/08; 26/08; 02/09; 09/09; 16/09; 23/09; 30/09.
                Horário das 20:00 às 21:00
                Local: Online - pela plataforma Zoom - O link será enviado aos participantes, por e-mail, 2 horas antes de cada Oficina.
            
                Pagamento via boletos a serem gerados no nome do participante, com parcelas de R$100,00 que vencerão semanalmente, dois dias antes da data prevista para cada oficina. 
                Caso o participante queira pagar em duas prestações de R$ 400 (quatrocentos reais cada), é só entrar em contato pelo número de whatsapp (61) 999088948 e falar com Marília.
            
                O valor total da participação nas oficinas é de R$ 800,00 (oitocentos reais).
          
                Em caso de desistência, haverá multa de 50% sobre o valor total das oficinas.
             
            </div>
            <div>
              <button onClick={handleNext} className="next-button">Próximo</button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className='continfosdd'>
            <h2>Programação das Oficinas</h2>
            <div className="programacao">
              <div className="programacao-item">
                <h3>Módulo 1: Autoconhecimento e Identidade</h3>
                <ul>
                  <li>Aula 1: Roda da Vida e Definição de Objetivos e Plano de Ação</li>
                  <li>Aula 2: Elaborar um plano de ação e financeiro para alcançar esses objetivos</li>
                </ul>
              </div>
              <div className="programacao-item">
                <h3>Módulo 2: Definição de prioridades e Gerenciamento do tempo</h3>
                <ul>
                  <li>Aula 1: Definição de prioridades</li>
                  <li>Aula 2: Estabelecendo Rotinas e Agendas</li>
                </ul>
              </div>
              <div className="programacao-item">
                <h3>Módulo 3: Autoestima e Autoconfiança</h3>
                <ul>
                  <li>Aula 1: Identificação de Crenças Disfuncionais</li>
                  <li>Aula 2: Autoestima e Autoconfiança</li>
                </ul>
              </div>
              <div className="programacao-item">
                <h3>Módulo 4: Rede de Apoio e Desenvolvimento Pessoal e Manutenção do Sucesso</h3>
                <ul>
                  <li>Aula 1: Identificação e Construção de Rede de Apoio</li>
                  <li>Aula 2: Manutenção do Sucesso - Mantenha e fortaleça suas conquistas no dia a dia</li>
                </ul>
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

export default InscricaoModal;
