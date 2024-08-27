import React, { useEffect, useState } from "react";
import supabase from "../../servers/SupabaseConect";
import './style.css';

const Controle = () => {
    const [inscritos, setInscritos] = useState([]);

    useEffect(() => {
        // Função para buscar inscritos do banco de dados
        const fetchInscritos = async () => {
            const { data, error } = await supabase
                .from('inscritos')
                .select('*');

            if (error) {
                console.error("Erro ao buscar inscritos:", error);
            } else {
                setInscritos(data);
            }
        };

        fetchInscritos();
    }, []);

    // Função para alternar o status de pagamento
    const togglePagamento = async (id, currentStatus) => {
        const { error } = await supabase
            .from('inscritos')
            .update({ pagamento: !currentStatus })
            .eq('id', id);

        if (error) {
            console.error("Erro ao atualizar status de pagamento:", error);
        } else {
            setInscritos(inscritos.map(inscrito => 
                inscrito.id === id ? { ...inscrito, pagamento: !currentStatus } : inscrito
            ));
        }
    };

    return (
        <div className="table-container">
            <h1>Controle de Inscritos</h1>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>WhatsApp</th>
                        <th>CPF</th>
                        <th>Pagamento</th>
                    </tr>
                </thead>
                <tbody>
                    {inscritos.map(inscrito => (
                        <tr key={inscrito.id}>
                            <td>{inscrito.nome}</td>
                            <td>{inscrito.email}</td>
                            <td>{inscrito.whatsapp}</td>
                            <td>{inscrito.cpf}</td>
                            <td>
                                <input 
                                    type="checkbox" 
                                    checked={inscrito.pagamento} 
                                    onChange={() => togglePagamento(inscrito.id, inscrito.pagamento)} 
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
    
}

export default Controle;
