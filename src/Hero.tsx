import Btn from "./app/components/Btn";
import "./Hero.css";

export default function Hero() {
    return (
        <div className="hero-container">
            <div className="hero-content">
                <h1>
                    Descubra um mundo novo com as<br />
                    belezas da Ilha Comprida
                </h1>
                <p>
                    Hospedagens exclusivas: pacotes a partir de R$ 3.500,00
                </p>
                <Btn name="Me aventurar" />
            </div>
        </div>
    );
}