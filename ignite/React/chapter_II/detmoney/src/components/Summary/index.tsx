
import { Container } from "./styles";

import incomeIcon from '../../assets/income.svg'
import outcomeIcon from '../../assets/outcome.svg'
import totalIcon from '../../assets/total.svg'
import { useTransactions } from "../../hooks/useTransactions";
export function Summary() {
    const {transactions} = useTransactions();

    // const totalDeposits = transactions.reduce((acc, transaction) => {
    //     if (transaction.type === 'deposit') {
    //         return acc + transaction.amount;
    //     }
    //     return acc;
    // }, 0)

    // const totalWithdrawls = transactions.reduce((acc, transaction) => {
    //     if (transaction.type === 'withdrawl') {
    //         return acc + transaction.amount;
    //     }
    //     return acc;
    // }, 0)
    // const total = totalDeposits - totalWithdrawls
    const summary = transactions.reduce((acc, transaction) => {

        if(transaction.type === 'deposit'){
            acc.deposit += transaction.amount
            acc.total += transaction.amount
        } else {
            acc.withdrawl += transaction.amount
            acc.total -= transaction.amount
        }
        return acc
    }, {
        deposit: 0,
        withdrawl: 0,
        total: 0,
    })
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeIcon} alt="" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.deposit)}
                   
                </strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeIcon} alt="" />
                </header>
                <strong>
                    -  {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.withdrawl)}
                </strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalIcon} alt="" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.total)}
                </strong>
            </div>
        </Container>
    )
}