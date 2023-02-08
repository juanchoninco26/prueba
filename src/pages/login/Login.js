import React,{useState} from 'react';
import './login.css';

function Login() {
    const user='admin';
    const password='admin123';

    const[teclado,setTeclado]=useState('');
    const[contraseña,setContraseña]=useState('');

    const handlerInput=({target})=>{
        setTeclado(target.value);
    }
    const handlerContraseña=({target})=>{
        setContraseña(target.value);
    }
    const handlerSubmit=(e)=>{
        e.preventDefault();
        if(teclado===user && contraseña===password){
            window.location.href="../pages/noticias/viewNoticias";
        }
        else{
            alert('usuario incorrecto')
        }
    }
    return(
        <main className='content'>
            <form className='content-login' onSubmit={handlerSubmit}>
                <div className='logo'>
                    <img src='https://cdn-icons-png.flaticon.com/512/21/21601.png' alt='logo'/>
                </div>
                <div className='inputs'>
                    <input type="text" name="usuario" placeholder='usuario' value={teclado} onChange={handlerInput}/>
                    <input type="password" name="contraseña" placeholder='contraseña'value={contraseña} onChange={handlerContraseña}/>
                    <input type="submit" name="contraseña" value='Entrar'/>
                </div>
            </form>
        </main>
    );
}
export default Login;