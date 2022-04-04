import Modal from "react-modal"
import { useState } from 'react'
import { Container, TransactionTypeConatiner, RadioBox } from "./styles";
import income from '../../assets/income.svg'
import outcome from '../../assets/outcome.svg'
import close from '../../assets/close.svg'
interface NewTransactionModalProps {
    isOpen: boolean
    onRequestClose: () => void;
}

export function NewTransactionModal({ onRequestClose, isOpen }: NewTransactionModalProps) {
    const [type, setType] = useState('deposit')

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
                    <RadioBox
                        type="button"
                        onClick={() => setType('deposit')}
                        isActive={type === 'deposit'}
                    >
                        <img src={income} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox
                        type="button"
                        onClick={() => setType('withdrawl')}
                        isActive={type === 'withdrawl'}
                    >
                        <img src={outcome} alt="Saida" />
                        <span>Saida</span>
                    </RadioBox>
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