import '../App.css';
import { useState, useEffect } from 'react';
import PanelAvanzado from './PanelAvanzado';
import Seguridad from './Seguridad'

function EntradaPassword(props) {
    props.setPassword("") // nueva contraseña

    const [tipo, setTipo] = useState('password');
    const [texto, setTexto] = useState(props.password);
    const [mostrar, setMostrar] = useState(false);
    const [mostrarPanel, setMostrarPanel] = useState(false);

    useEffect(() => {
        if (texto === "") {
            setTexto(props.password);
        }
    }, [props.password, texto]);

    function changeType(e) {
        e.preventDefault();
        if(tipo === 'password'){
            setTipo('text')
        } else {
            setTipo('password')
        }
    }

    function copiarAlPortapapeles() {
        navigator.clipboard.writeText(texto);
        setMostrar(true);
        setTimeout(() => {setMostrar(false);}, 3000);
    }

    function cambioManual(e) {
        props.setPassword(e.target.value); 
        setTexto(e.target.value)
    }

    function generarPassword() {
        const lowercase = "abcdefghijklmnopqrstuvwxyz";
        const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const numbers = "0123456789";
        const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";

        let allChars = "";
        allChars += lowercase;
        allChars += uppercase;
        allChars += numbers;
        allChars += specialChars;

        let contraAleatoria = '';
        for (let i = 0; i < 8; i++) {
            const randomIndex = Math.floor(Math.random() * allChars.length);
            contraAleatoria += allChars[randomIndex];
        }

        setTexto(contraAleatoria);
        props.setPassword(contraAleatoria);
    }

    function panel(e) {
        e.preventDefault();
        if(mostrarPanel){
            setMostrarPanel(false)
        } else {
            setMostrarPanel(true)
        }
    }

    return (
        <div className='entradaPassword'>
            <input type={tipo} className='password' value={texto} onChange={cambioManual}/>
            <button className='mostrar' onClick={changeType}>Mostrar</button>
            <button className='copiar' onClick={copiarAlPortapapeles}>Copiar</button>
            <button className='generar' onClick={generarPassword}>Generar</button>
            <button className='opcionesAvanzadas' onClick={panel}>Opciones Avanzadas</button>
            <div className='textos'>
                <Seguridad texto={texto}></Seguridad>
                <div className='copConEx'>{mostrar && <label>Copiado con exito!</label>}</div>
                <div className='item3'></div>
            </div>
            {mostrarPanel && <PanelAvanzado setTexto={setTexto} setPassword={props.setPassword}></PanelAvanzado>}
        </div>
    )
}

export default EntradaPassword