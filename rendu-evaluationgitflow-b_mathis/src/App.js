import logo from './logo.svg';
import './App.css';

function App() {
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

                <input type="number" name="left-operand" id="left-operand" value="1"/> <span id="operator">+</span>
                <input type="number" name="right-operand" id="right-operand" value="1"/> <span>=</span> <span id="result">?</span>

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
