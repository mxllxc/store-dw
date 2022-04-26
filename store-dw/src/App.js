/* eslint-disable no-unused-expressions */
import Products from "./components/Products";
import '../src/assets/globalStyles.css';
import Header from "./components/Header";
import { useState } from "react";
import ModalCadastro from "./components/ModalCadastro";


function App() {
  const [cart, setCart] = useState([]);
  const [openCadastro, setOpenCadastro] = useState(false);
  const handleOpenCadastro = () => setOpenCadastro(true);
  const handleCloseCadastro = () => setOpenCadastro(false);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  
  const [user, setUser] = useState([]);


  const [usuarioObj, setUsuarioObj] = useState({nome: 'adm', email: 'adm@', senha: 'adm'});

  function handleSubmit() {
    setUsuarioObj({
        nome: nome,
        email: email,
        senha: senha,
    });
    console.log(nome);
    setUser([...user, usuarioObj]);
    console.log(user);
}

  return (
    <div className="App">
      <ModalCadastro
       openCadastro={openCadastro} 
       handleCloseCadastro={handleCloseCadastro}
       user={user} 
       setUser={setUser} 
       setNome={setNome}
       handleSubmit={handleSubmit}
       setEmail={setEmail}
       setSenha={setSenha}
      />
      <Header cart={cart} handleOpenCadastro={handleOpenCadastro} name={nome}/>
      <Products setCart={setCart} cart={cart} handleOpenCadastro={handleOpenCadastro}/>
    </div>
  );
}

export default App;
