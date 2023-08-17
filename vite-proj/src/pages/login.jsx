import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const users = [
    { id: 1, name: 'usuario1', password: 'senha123' },
    { id: 2, name: 'usuario2', password: 'outrasenha456' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

   // Verificar se o usuário existe nos dados cadastrados
   const user = users.find(user => user.name === name && user.password === password);

   if (user) {
     console.log('Usuário encontrado:', user);
     // Aqui você pode fazer alguma ação, como autenticar o usuário
   } else {
     console.log('Usuário não encontrado.');
     // Aqui você pode exibir uma mensagem de erro para o usuário
   }
    navigate('/Cont');
  };

  return (
    <div className="hl">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Senha
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Login;
