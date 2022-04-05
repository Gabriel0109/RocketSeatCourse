import Modal from "react-modal"
import { FormEvent, useState } from 'react'
import { Container, TransactionTypeConatiner, RadioBox } from "./styles";
import income from '../../assets/income.svg'
import outcome from '../../assets/outcome.svg'
import close from '../../assets/close.svg'
import { api } from '../../services/api'
interface NewTransactionModalProps {
    isOpen: boolean
    onRequestClose: () => void;
}

export function NewTransactionModal({ onRequestClose, isOpen }: NewTransactionModalProps) {
    const [title, setTitle] = useState('')
    const [value, setValue] = useState(0)
    const [category, setCategory] = useState('')

    const [type, setType] = useState('deposit')

    function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault()

        const data = {
            title,
            value,
            category,
            type
        };
        api.post('/transactions', data)
    }

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
            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar transação</h2>
                <input type="text"
                    placeholder="Titulo"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />
                <input type="number"
                    placeholder="Valor"
                    value={value}
                    onChange={event => setValue(Number(event.target.value))}
                />
                <TransactionTypeConatiner>
                    <RadioBox
                        type="button"
                        onClick={() => setType('deposit')}
                        isActive={type === 'deposit'}
                        activeColor="green"
                    >
                        <img src={income} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox
                        type="button"
                        onClick={() => setType('withdrawl')}
                        isActive={type === 'withdrawl'}
                        activeColor="red"
                    >
                        <img src={outcome} alt="Saida" />
                        <span>Saida</span>
                    </RadioBox>
                </TransactionTypeConatiner>

                <input
                    placeholder="Categoria"
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                />
                <button type="submit">
                    cadastrar
                </button>
            </Container>

        </Modal>
    )
}