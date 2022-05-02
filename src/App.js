/* eslint-disable no-unused-expressions */
import Products from "./components/Products";
import '../src/assets/globalStyles.css';
import Header from "./components/Header";
import { useEffect, useState } from "react";
import ModalCadastro from "./components/ModalCadastro";
import Cart from "./components/Cart";
import ModalAdm from "./components/ModalAdm";


function App() {
  const [cart, setCart] = useState([]);

  const [openCadastro, setOpenCadastro] = useState(false);
  const handleOpenCadastro = () => setOpenCadastro(true);
  const handleCloseCadastro = () => setOpenCadastro(false);

  const [openDetails, setOpenDetails] = useState(false);
  const handleOpenDetails = () => setOpenDetails(true);
  const handleCloseDetails = () => setOpenDetails(false);

  const [openAdm, setOpenAdm] = useState(false);
  const handleOpenAdm = () => setOpenAdm(true);
  const handleCloseAdm = () => setOpenAdm(false);

  const [login, setLogin] = useState(false);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [alert, setAlert] = useState(false);
  const [cadastro, setCadastro] = useState(true);
  const [cartOpen, setCartOpen] = useState(false);
  const [finalValue, setFinalValue] = useState(0);
  const [user, setUser] = useState([]);
  const [userLog, setUserLog] = useState();
  const [selectDetails, setSelectDetails] = useState({
    id: 1,
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/95cb4aeed4e54a198160ab4900c13b93_9366/Tenis_Grand_Court_SE_Preto_FW6690_01_standard.jpg",
    name: "Adidas Tênis Grand Court Se Core",
    value: 399,
    desc: "sss",
  });

const productsList = [
  {
      id: 0,
      img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/95cb4aeed4e54a198160ab4900c13b93_9366/Tenis_Grand_Court_SE_Preto_FW6690_01_standard.jpg",
      name: "Adidas Tênis Grand Court Se Core",
      value: 399,
      coment: [],
      desc: "Vá para as ruas e encontre seu ritmo. A partir do momento em que você amarra os cadarços, a trama na parte de cima e o sistema de cadarços envolve o seu pé para uma sensação de segurança do início ao fim. A flexibilidade adicional é altamente ágil e segura em cada passo. A parte de cima macia e ventilada se combina a uma boca elástica para um ajuste tipo meia e uma sensação segura e estável. Amarre os cadarços, alcance novas alturas e atinja suas metas.",
  },
  {
      id: 1,
      img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0cb0b2d2e6e24addb4b9ae0200329278_9366/Tenis_Ultraboost_5_DNA_Azul_GY0325_01_standard.jpg",
      name: "Tênis Ultra Boost 5 DNA",
      value: 3200,
      coment: [],
      desc: "aaa",
  }
]

const [categoriasList, setCategoriasList] = useState([]);
const [products, setProducts] = useState([{
  id: 0,
  img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/95cb4aeed4e54a198160ab4900c13b93_9366/Tenis_Grand_Court_SE_Preto_FW6690_01_standard.jpg",
  name: "Adidas Tênis Grand Court Se Core",
  value: 399,
  coment: [],
  desc: "Vá para as ruas e encontre seu ritmo. A partir do momento em que você amarra os cadarços, a trama na parte de cima e o sistema de cadarços envolve o seu pé para uma sensação de segurança do início ao fim. A flexibilidade adicional é altamente ágil e segura em cada passo. A parte de cima macia e ventilada se combina a uma boca elástica para um ajuste tipo meia e uma sensação segura e estável. Amarre os cadarços, alcance novas alturas e atinja suas metas.",
}]);

  let result = 0;


  useEffect(() => {
    cart.forEach(c => {
            result = c.value + result;
            return result;
        });
        setFinalValue(result);
  }, [cart])

  

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
    setUserLog(result);
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
        <ModalAdm setProducts={setProducts} products={products} categoriasList={categoriasList} setCategoriasList={setCategoriasList} nome={nome} handleCloseAdm={handleCloseAdm} openAdm={openAdm} />
        <Cart setCart={setCart} setFinalValue={setFinalValue} finalValue={finalValue} cartOpen={cartOpen} cart={cart} setCartOpen={setCartOpen}/>
        <Header handleOpenAdm={handleOpenAdm} setCartOpen={setCartOpen} cartOpen={cartOpen} login={login} cart={cart} handleOpenCadastro={handleOpenCadastro} name={nome} />
        <Products setProducts={setProducts} handleCloseDetails={handleCloseDetails} nome={nome} productsList={products} ValidarLogin={ValidarLogin} openDetails={openDetails} selectDetails={selectDetails} setSelectDetails={setSelectDetails} handleOpenDetails={handleOpenDetails} cart={cart} setCart={setCart} handleOpenCadastro={handleOpenCadastro} login={login}/>
    </div>
  );
}

export default App;
