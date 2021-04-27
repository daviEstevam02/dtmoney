import { useState } from 'react';
import logoImg from '../../assets/logo.svg'
import Modal from 'react-modal';

import {  Container ,Content } from './styles';

interface HeaderProps{
    handleOpenNewTransactionModal: () => void;
}

export function Header({ handleOpenNewTransactionModal }: HeaderProps){

    return(
        <Container>
            <Content>
            <img src={logoImg} alt="dtMoney"/>
            <button type="button" onClick={ handleOpenNewTransactionModal }>
                Nova transação
            </button>

           
            </Content>
        </Container>
    )
}