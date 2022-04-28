/* eslint-disable react/jsx-no-comment-textnodes */
import { Container } from "./styles";
import { GrAdd } from 'react-icons/gr';

export default function Products(props) {

    let result = 0;

    const productsList = [
        {
            id: 1,
            img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/95cb4aeed4e54a198160ab4900c13b93_9366/Tenis_Grand_Court_SE_Preto_FW6690_01_standard.jpg",
            name: "Adidas Tênis Grand Court Se Core",
            value: 399.99
        },
        {
            id: 2,
            img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0cb0b2d2e6e24addb4b9ae0200329278_9366/Tenis_Ultraboost_5_DNA_Azul_GY0325_01_standard.jpg",
            name: "Tênis Ultra Boost 5 DNA",
            value: 3200
        }
    ]
    
    function Name(name) {
        if(name.length > 11) {
            const result = name.substring(15, 0);
            return `${result}...`
        }
        return name;
    }

    function ValidarLogin(p) {
        if(props.login === false) {
            props.handleOpenCadastro();
        } else {
            props.cart.forEach(c => {
                  result = c.value + result;
                  return result;
              });
            props.setCart([...props.cart, p])
        }
    }

    return(
        <Container>
            {productsList.map(p => (
                <div key={p.id} className="card">
                    <img src={p.img} alt={p.name} />
                    <h1>{Name(p.name)}</h1>
                    <h2>{"R$ " + p.value}</h2>
                    {/* TODO Nao deixar cadastrar caso nao esteja logado */}
                    <button className="add-product" onClick={() => {ValidarLogin(p)}}>
                    <GrAdd />
                    </button>
                </div>
            ))}
        </Container>
    )
}