import Modal from "react-modal"
import { Container, TransactionTypeConatiner } from "./styles";
import income from '../../assets/income.svg'
import outcome from '../../assets/outcome.svg'
import close from '../../assets/close.svg'
interface NewTransactionModalProps {
    isOpen: boolean
    onRequestClose: () => void;
}

export function NewTransactionModal({ onRequestClose, isOpen }: NewTransactionModalProps) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"

        >
            <button type='button' onClick={onRequestClose} className="react-modal-close">
                <img src={close} alt="Fechar" />
            </button>
            <Container>
                <h2>Cadastrar transação</h2>
                <input type="text"
                    placeholder="Titulo"
                />
                <input type="number"
                    placeholder="Valor"
                />

                <TransactionTypeConatiner>
                    <button
                        type="button">
                        <img src={income} alt="Entrada" />
                        <span>Entrada</span>
                    </button>
                    <button
                        type="button">
                        <img src={outcome} alt="Saida" />
                        <span>Saida</span>
                    </button>
                </TransactionTypeConatiner>

                <input
                    placeholder="Categoria"
                />
                <button type="submit">
                    cadastrar
                </button>
            </Container>

        </Modal>
    )
}