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
  const [login, setLogin] = useState(false);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [alert, setAlert] = useState(false);
  const [cadastro, setCadastro] = useState(true);

  
  const [user, setUser] = useState([]);

  function handleSubmit() {
    setUser([...user, {
      nome: nome,
      email: email,
      senha: senha,
    }]);
    setCadastro(false);
  }

function Login() {
  const result = user.find(usuario => usuario.nome === nome && usuario.senha === senha);
  console.log(result);
  if(result === undefined) {
    setAlert(true);

  } else {
    setAlert(false);
    setLogin(true);
    handleCloseCadastro();
  }
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
        Login={Login}
        setAlert={setAlert}
        alert={alert}
        setCadastro={setCadastro}
        cadastro={cadastro}
        />
        <Header login={login} cart={cart} handleOpenCadastro={handleOpenCadastro} name={nome} />
        <Products setCart={setCart} cart={cart} handleOpenCadastro={handleOpenCadastro} login={login}/>
    </div>
  );
}

export default App;
