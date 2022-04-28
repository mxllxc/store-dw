import { Container } from "./styles"
import { BiTrash } from 'react-icons/bi';


export default function Cart(props) {

    function Delete(a) {
        const filteredCart = props.cart.filter(p => p.id !== a);
        props.setCart(filteredCart);
    }



    return(
        <Container>
            <div onMouseLeave={() => {props.setCartOpen(false)}} className={props.cartOpen ? 'cart-open' : 'cart-close'}>
                {props.cart.map(p => (
                    <div className="img-value">
                        <img src={p.img} alt={p.name} />

                    <div className="cart-product">
                        <h1>{p.name}</h1> <br />
                        <h1>R$ {p.value}</h1>
                       
                        { /*TODO <h1>Quantidade</h1> */}
                        <button onClick={() => {Delete(p.id)}}><BiTrash /></button>
                    </div>
                    </div>
                ))}            
            <div className="final-cart">
                <h1>Total: <strong>R$ {props.finalValue}</strong></h1>
                <button onClick={() => {props.setCart([])}}>Finalizar</button> {/*TODO Ir para API de pagamento*/}
            </div>
            </div>
        </Container>
    )
}