import { useEffect } from "react";
import { Container } from "./styles";
import  { api }  from '../../services/api';


export function TransactionTable (){

    useEffect(()=>{
        api.get('/transaction')
        .then(response => console.log(response.data))
    }, []);

    return(
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
                        <td className="deposito">12.000</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2021</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">12.000</td>
                        <td>Casa</td>
                        <td>20/02/2021</td>
                    </tr>
                  
                </tbody>
            </table>
        </Container>

    );
}