import { useEffect } from "react";
import { Container } from "./style";
import { api } from '../../services/api'

export function TransactionsTable() {
    useEffect(() => {
        api.get("/transactions")
            .then(response => console.log(response.data))
    }, [])

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="deposit">R$12.000</td>
                        <td>Desenvolvimento</td>
                        <td>22/02/22</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdrawl">-R$12.000</td>
                        <td>Casa</td>
                        <td>12/02/22</td>
                    </tr>

                </tbody>
            </table>
        </Container>
    )
}