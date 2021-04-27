import { GlobalStyle } from "./styles/global";
import {Header} from './components/Header'
import { Dashboard } from "./components/Dashboard";
import { TransactionTable } from './components/TransactionTable'
import Modal from "react-modal";
import { useState } from "react";
import { NewTransactionModal } from './components/NewTransactionModal'

Modal.setAppElement('#root');


export function App() {

  const [ isNewTransactionModalOpen, setIsNewTransactionModalOpen ] = useState(false);
    
  function handleOpenNewTransactionModal(){
      setIsNewTransactionModalOpen(true);
  }

  function handleClose(){
      setIsNewTransactionModalOpen(false);
  }

  return (
   <>
      <Header 
        handleOpenNewTransactionModal={ handleOpenNewTransactionModal }
       />
      <Dashboard />
      <TransactionTable/>

      <NewTransactionModal 
        isOpen={ isNewTransactionModalOpen } 
        onRequestClose={ handleClose }
      />

      <GlobalStyle />
   </>
  );
}

