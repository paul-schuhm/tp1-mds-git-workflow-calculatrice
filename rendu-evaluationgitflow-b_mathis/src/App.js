import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

function App() {
    const [leftOperand, setLeftOperand] = useState(1.0)
    const [rightOperand, setRightOperand] = useState(1.0)
    const [operator, setOperator] = useState('+')
    const [result, setResult] = useState(leftOperand + rightOperand)

    useEffect(() => {
        switch (operator) {
            case '+':
                setResult(leftOperand + rightOperand)
                break
            case '-':
                setResult(leftOperand - rightOperand)
                break
            case '*':
                setResult(leftOperand * rightOperand)
                break
            case '/':
                setResult(leftOperand / rightOperand)
                break
            default:
                setResult(leftOperand + rightOperand)
                break
        }
    }, [leftOperand, rightOperand, operator])

    const handleLeftOperandChange = (event) => {
        const value = parseFloat(event.target.value);
        setLeftOperand(value);
    };

    const handleRightOperandChange = (event) => {
        const value = parseFloat(event.target.value);
        setRightOperand(value);
    };

    const handleOperatorChange = (event) => {
        setOperator(event.target.value)
    }

    return (<div className={"from-indigo-500 via-purple-500 to-pink-500"}>
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
            <div className={"h-screen w-screen flex flex-col  justify-center bg-gradient-to-r "}>
                <div className={"mx-auto bg-green-500 w-[40vw] flex flex-col gap-32"}>
                    <span className={" bg-blue-500 text-end px-8 text-3xl"}>{result}</span>
                <div className={" bg-blue-500 flex flex-row "}>
                    <input type="number" value={leftOperand} onChange={handleLeftOperandChange} className={"w-1/2 px-3 text-3xl"}/>
                    <select value={operator} onChange={handleOperatorChange} className={"p-3"}>
                        <option value="+">+</option>
                        <option value="-">-</option>
                        <option value="*">*</option>
                        <option value="/">/</option>
                    </select>
                    <input type="number" value={rightOperand} onChange={handleRightOperandChange} className={"px-3 w-1/2 text-3xl"}/>
                </div>
                </div>
            </div>

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
