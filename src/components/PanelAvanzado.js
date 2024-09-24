import '../App.css';
import { useState } from 'react';

function PanelAvanzado(props) {

    const [count, setCount] = useState(8);
    const [minus, setMinus] = useState(false);
    const [mayus, setMayus] = useState(false);
    const [nums, setNums] = useState(false);
    const [carEsp, setCarEsp] = useState(false);
    
    function plusOne(e) {
        e.preventDefault();
        setCount(count + 1);
    }
    
    function minusOne(e) {
        e.preventDefault();
        setCount(count - 1);
    }

    function generatePassword() {
        const lowercase = "abcdefghijklmnopqrstuvwxyz";
        const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const numbers = "0123456789";
        const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";

        let allChars = "";
        let contraAleatoria = '';

        if (minus) allChars += lowercase;
        if (mayus) allChars += uppercase;
        if (nums) allChars += numbers;
        if (carEsp) allChars += specialChars;

        if (allChars === "") {
            alert('Debes seleccionar al menos una opción.');
            return;
        }

        if (minus) contraAleatoria += lowercase[Math.floor(Math.random() * lowercase.length)];
        if (mayus) contraAleatoria += uppercase[Math.floor(Math.random() * uppercase.length)];
        if (nums) contraAleatoria += numbers[Math.floor(Math.random() * numbers.length)];
        if (carEsp) contraAleatoria += specialChars[Math.floor(Math.random() * specialChars.length)];

        let remainingLength = count - contraAleatoria.length;
        for (let i = 0; i < remainingLength; i++) {
            const randomIndex = Math.floor(Math.random() * allChars.length);
            contraAleatoria += allChars[randomIndex];
        }

        contraAleatoria = contraAleatoria.split('').sort(() => Math.random() - 0.5).join('');

        props.setTexto(contraAleatoria);
        props.setPassword(contraAleatoria);
    }

    return (
        <div className='PanelAvanzado'>
            
            <div className='checkboxs'>
                <label className='longitud'>Longitud</label>
                <div className='contador'>
                    <button disabled={count <= 8} className='botonPanel' onClick={minusOne}>-</button>
                    <input name='longitud' className='largo' value={count} />
                    <button disabled={count >= 20} className='botonPanel' onClick={plusOne}>+</button>
                </div>

                <label className='minus1'>Minusculas</label>
                <input type='checkbox' className='minus2' checked={minus} onChange={(e)=>{setMinus(!minus)}}/>
            
                <label className='mayus1'>Mayusculas</label>
                <input type='checkbox' className='mayus2' checked={mayus} onChange={(e)=>{setMayus(!mayus)}}/>
            
                <label className='nums1'>Numeros</label>
                <input type='checkbox' className='nums2' checked={nums} onChange={(e)=>{setNums(!nums)}}/>
            
                <label className='esp1'>Caracteres especiales</label>
                <input type='checkbox' className='esp2' checked={carEsp} onChange={(e)=>{setCarEsp(!carEsp)}}/>
            </div>

            <button className='generarPanel' onClick={generatePassword}>Generar</button>
        </div>
    ); 
}

export default PanelAvanzado