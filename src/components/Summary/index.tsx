import { Container } from "./styles";

import entradasImg from '../../assets/entradas.svg'
import saidasImg from '../../assets/saidas.svg'
import totalImg from '../../assets/total.svg'

export function Summary(){
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={entradasImg} alt=""/>
                </header>    
                <strong>10000,00</strong>
            </div>   
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={saidasImg} alt=""/>
                </header>    
                <strong>800,00</strong>
            </div>  
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt=""/>
                </header>    
                <strong>200,00</strong>
            </div>   
        </Container>
    );
}