import { Dashboard } from "./components/Dashboard";
import Modal from "react-modal"
import { useState } from 'react'
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

export function App() {
  // ABRIR E FECHAR MODAL
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
  function handleOpenNewtransactionModal() {
    setIsNewTransactionModalOpen(true);
  }
  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);

  }
  // END MODAL
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewtransactionModal} />
      <Dashboard />
      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}>
        <h1>oi</h1>
      </Modal>
      <GlobalStyle />
    </>

  );
}

