import React, { useState } from 'react';
import './style.css';
import supabase from '../../../servers/SupabaseConect';

const InscricaoModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1); // Controla a etapa atual
  const [showSnackbar, setShowSnackbar] = useState(false); // Controla a exibição do snackbar

  const handleNext = () => setStep(step + 1);
  const handlePrevious = () => setStep(step - 1);

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
          comoouviu: data.comoouviu, // Campo adicional
          sugestoes: data.sugestoes,  // Campo adicional
          pagamento: data.pagamento === 'on' 
        }
      ]);
  
    if (error) {
      console.error('Erro ao enviar inscrição:', error);
    } else {
      console.log('Inscrição enviada com sucesso');
      setShowSnackbar(true); // Exibe o snackbar ao enviar com sucesso
      setTimeout(() => setShowSnackbar(false), 3000); // Oculta o snackbar após 3 segundos
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className='cont-top'> 
           <button className="close-button" onClick={onClose}>X</button> 
        </div>
        {step === 1 && (
          <div>
            <h2>Programação das Oficinas</h2>
            <div className="programacao">
              <h3>Módulo 1: Autoconhecimento e Identidade</h3>
              <ul>
                <li>Aula 1: Roda da Vida e Definição de Objetivos e Plano de Ação</li>
                <li>Aula 2: Elaborar um plano de ação e financeiro para alcançar esses objetivos</li>
              </ul>
              <h3>Módulo 2: Definição de prioridades e Gerenciamento do tempo</h3>
              <ul>
                <li>Aula 1: Definição de prioridades</li>
                <li>Aula 2: Estabelecendo Rotinas e Agendas</li>
              </ul>
              <h3>Módulo 3: Autoestima e Autoconfiança</h3>
              <ul>
                <li>Aula 1: Identificação de Crenças Disfuncionais</li>
                <li>Aula 2: Autoestima e Autoconfiança</li>
              </ul>
              <h3>Módulo 4: Rede de Apoio e Desenvolvimento Pessoal e Manutenção do Sucesso</h3>
              <ul>
                <li>Aula 1: Identificação e Construção de Rede de Apoio</li>
                <li>Aula 2: Manutenção do Sucesso - Mantenha e fortaleça suas conquistas no dia a dia</li>
              </ul>
            </div>
            <button onClick={handleNext} className="next-button">Próximo</button>
          </div>
        )}
        {step === 2 && (
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
              <div className='cont-bottom'>
              <button onClick={handlePrevious} className="previous-button">Anterior</button>
              <button type="submit" className="submit-button">Enviar</button>
              </div>
            </form>
          </div>
        )}
           {showSnackbar && <div className="snackbar">Inscrição enviada com sucesso!</div>} {/* Snackbar */}
      </div>
    </div>
  );
};

export default InscricaoModal;
