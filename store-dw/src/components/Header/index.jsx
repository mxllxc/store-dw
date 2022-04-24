import {  Container } from './styles'
import { AiOutlineUser, AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';

export default function Header(props) {
    return(
        <Container>
            <div className='block'>
            <h1>LOGO</h1>
            <h2>Comprar</h2>
            <h2>Ajuda</h2>
            <h2>Blog</h2>
            </div>

            <div className='block'>
            <div className='icon-div-input'>
            <AiOutlineSearch size={20} />           
            <input type="text" placeholder='Buscar' />
            </div>
            <div className='icon-div'>
            <AiOutlineUser size={20} />
            <h2>Conta</h2>
            </div>
            <div className='icon-div'>
            <AiOutlineShoppingCart size={20} />
            <h2>{props.cart.length}</h2>
            <h2>Carrinho</h2>
            </div>
            </div>
        </Container>
    )
}