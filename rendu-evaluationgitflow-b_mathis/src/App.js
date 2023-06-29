import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

function App() {
    const [leftOperand, setLeftOperand] = useState(1)
    const [rightOperand, setRightOperand] = useState(1)
    const [operator, setOperator] = useState('+')


    const handleLeftOperandChange = (event) => {
        setLeftOperand(event.target.value)
    }

    const handleRightOperandChange = (event) => {
        setRightOperand(event.target.value)
    }

    return (<div>
        <header>
            <h1>TP: Git workflow</h1>
            <nav className="navbar">
                <a href="#">Accueil</a>
                <a href="#">À propos</a>
            </nav>
        </header>

        <body>

            <section>

                <header>
                    <h2>Calculatrice en ligne</h2>
                    <p>Une application en ligne développée par ...</p>
                </header>

                <input type="number" value={leftOperand} onChange={handleLeftOperandChange}/><span>{operator}</span>
                <input type="number" value={rightOperand} onChange={handleRightOperandChange}/><span>=</span> <span>?</span>

            </section>

        </body>

        <aside>
            Bare latérale
        </aside>

        <footer>
            Le footer
        </footer>
    </div>)
}

export default App;
