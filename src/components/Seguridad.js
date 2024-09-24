import { useState, useEffect } from 'react';
import '../App.css';

function Seguridad(props) {
    
    const [mensaje, setMensaje] = useState("Ingrese una contraseña");
    const [color, setColor] = useState('blanco');

    useEffect(() => {
        verificarSeguridad();
    }, [props.texto]);

    function validarCaracteres() {
        const lowercase = /[a-z]/;
        const uppercase = /[A-Z]/;
        const numbers = /[0-9]/;
        const specialChars = /[!@#$%^&*()_+\[\]{}|;:,.<>?]/;
        let cantidad = 0;


        if (uppercase.test(props.texto)) cantidad++;
        if (lowercase.test(props.texto)) cantidad++;
        if (numbers.test(props.texto)) cantidad++;
        if (specialChars.test(props.texto)) cantidad++;

        return cantidad;
    }

    function verificarSeguridad() {
        const longitud = props.texto.length;
        const tiposCaracteres = validarCaracteres();
        const parametro = longitud * tiposCaracteres;
        
        if(parametro === 0) {
            setMensaje("Ingrese una contraseña");
            setColor('blanco');
        } else if (parametro <= 20) {
            setMensaje("Su contraseña es poco segura");
            setColor('rojo');
        } else if (parametro <= 40) {
            setMensaje("Su contraseña es segura");
            setColor('amarillo');
        } else {
            setMensaje("Su contraseña es muy segura");
            setColor('verde');
        }
    }
    
    return (
        <div className='seguridad'>
            <label className={color}>{mensaje}</label>
        </div>
    )
}

export default Seguridad