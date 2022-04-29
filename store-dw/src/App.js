/* eslint-disable no-unused-expressions */
import Products from "./components/Products";
import '../src/assets/globalStyles.css';
import Header from "./components/Header";
import { useEffect, useState } from "react";
import ModalCadastro from "./components/ModalCadastro";
import Cart from "./components/Cart";
import ModalDetails from "./components/ModalDetails";


function App() {
  const [cart, setCart] = useState([]);
  const [openCadastro, setOpenCadastro] = useState(false);
  const handleOpenCadastro = () => setOpenCadastro(true);
  const handleCloseCadastro = () => setOpenCadastro(false);
  const [openDetails, setOpenDetails] = useState(false);
  const handleOpenDetails = () => setOpenDetails(true);
  const handleCloseDetails = () => setOpenDetails(false);
  const [login, setLogin] = useState(false);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [alert, setAlert] = useState(false);
  const [cadastro, setCadastro] = useState(true);
  const [cartOpen, setCartOpen] = useState(false);
  const [finalValue, setFinalValue] = useState(0);
  const [selectDetails, setSelectDetails] = useState({
    id: 1,
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/95cb4aeed4e54a198160ab4900c13b93_9366/Tenis_Grand_Court_SE_Preto_FW6690_01_standard.jpg",
    name: "Adidas Tênis Grand Court Se Core",
    value: 399,
    desc: "sss",
});

  let result = 0;


  useEffect(() => {
    cart.forEach(c => {
            result = c.value + result;
            return result;
        });
        setFinalValue(result);
  }, [cart])

  
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
  if(result === undefined) {
    setAlert(true);

  } else {
    setAlert(false);
    setLogin(true);
    handleCloseCadastro();
  }
}

function ValidarLogin(p) {
  if(login === false) {
      handleOpenCadastro();
  } else {
      cart.forEach(c => {
            result = c.value + result;
            return result;
        });
      setCart([...cart, p])
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
        <ModalDetails ValidarLogin={ValidarLogin} selectDetails={selectDetails} openDetails={openDetails} handleCloseDetails={handleCloseDetails}/>

        <Cart setCart={setCart} setFinalValue={setFinalValue} finalValue={finalValue} cartOpen={cartOpen} cart={cart} setCartOpen={setCartOpen}/>
        <Header setCartOpen={setCartOpen} cartOpen={cartOpen} login={login} cart={cart} handleOpenCadastro={handleOpenCadastro} name={nome} />
        <Products ValidarLogin={ValidarLogin} handleCloseDetails={handleCloseDetails} openDetails={openDetails} selectDetails={selectDetails} setSelectDetails={setSelectDetails} handleOpenDetails={handleOpenDetails} cart={cart} setCart={setCart} handleOpenCadastro={handleOpenCadastro} login={login}/>
    </div>
  );
}

export default App;
