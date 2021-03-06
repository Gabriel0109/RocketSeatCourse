import { Dashboard } from "./components/Dashboard";
import Modal from "react-modal"
import { useState } from 'react'
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from "./components/Modal";
import { TransactionsProvider } from './hooks/useTransactions'

Modal.setAppElement('#root')
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
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewtransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal} />
      <GlobalStyle />
    </TransactionsProvider>

  );
}

