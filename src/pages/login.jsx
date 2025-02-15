import React, { useState } from 'react';

function Login() {
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    const submitLogin = (e) => {
        e.preventDefault();
        console.log("Usuário:", usuario); 
        console.log("Senha:", senha);     
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={submitLogin}>
                <div>
                    <label>Usuário:</label>
                    <input
                        type="text"
                        name="usuario"
                        value={usuario} 
                        onChange={(e) => setUsuario(e.target.value)}
                    />
                </div>
                <div>
                    <label>Senha:</label>
                    <input
                        type="password"
                        name="senha"
                        value={senha} 
                        onChange={(e) => setSenha(e.target.value)}
                    />
                </div>
                <button type="submit">Entrar</button>
            </form>
        </div>
    );
}

export default Login;


