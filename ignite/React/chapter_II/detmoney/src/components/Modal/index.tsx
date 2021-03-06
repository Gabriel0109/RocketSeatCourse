import Modal from "react-modal"
import { FormEvent, useState} from 'react'
import { Container, TransactionTypeConatiner, RadioBox } from "./styles";
import income from '../../assets/income.svg'
import outcome from '../../assets/outcome.svg'
import close from '../../assets/close.svg'
import {  useTransactions } from "../../hooks/useTransactions";
interface NewTransactionModalProps {
    isOpen: boolean
    onRequestClose: () => void;
}

export function NewTransactionModal({ onRequestClose, isOpen }: NewTransactionModalProps) {
    const {createTransaction} = useTransactions()
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState(0)
    const [category, setCategory] = useState('')
    const [type, setType] = useState('deposit')

    async function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault()

        await createTransaction({
            title,
            amount,
            category,
            type,

        })
        setTitle('');
        setAmount(0);
        setCategory('');
        setType('deposit');
        onRequestClose();
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
                    value={amount}
                    onChange={event => setAmount(Number(event.target.value))}
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