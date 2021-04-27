import { useState } from "react";
import Modal from "react-modal";
import closeImg from '../../assets/vectorX.svg';
import entradaImg from '../../assets/entradas.svg';
import saidaImg from '../../assets/saidas.svg'

import { Container,TransactionTypeContainer } from './styles';

interface NewTransactionModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen,onRequestClose }: NewTransactionModalProps){
   
    return(
        <Modal 
            isOpen={isOpen}
            onRequestClose={ onRequestClose }
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >

            <button 
                type="button" 
                onClick= { onRequestClose } 
                className="react-modal-close"
            >
                <img src={ closeImg } alt="Close"/>
            </button>

           <Container>
                <h2>Cadastrar transação</h2>

                <input 
                    placeholder="Título"
                />
                <input 
                    type="number"
                    placeholder="Valor"
                />

                <TransactionTypeContainer>
                    <button
                        type="button"
                    >
                        <img src={ entradaImg } alt="Entrada"/>
                        <span>
                            Entrada
                        </span>
                    </button>

                    <button>
                        <img src={ saidaImg } alt="Saida"/>
                        <span>
                            Saída
                        </span>
                    </button>
                </TransactionTypeContainer>

                <input 
                    placeholder="Categoria"
                />

                <button type="submit">Cadastrar</button>
           </Container>

        </Modal> 
    ); 
}