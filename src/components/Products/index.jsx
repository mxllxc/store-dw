/* eslint-disable react/jsx-no-comment-textnodes */
import { Container } from "./styles";
import { GrAdd } from 'react-icons/gr';

export default function Products(props) {

    
    
    function Name(name) {
        if(name.length > 11) {
            const result = name.substring(15, 0);
            return `${result}...`
        }
        return name;
    }

   

    function HandleClickDetails(p) {
      
            props.handleOpenDetails();
            props.setSelectDetails(p);

        
    }

    return(
        <Container>

            {props.productsList.map(p => (
                <div key={p.id} className="card">
                    <img onClick={() => {HandleClickDetails(p)}} src={p.img} alt={p.name} />
                    <h1>{Name(p.name)}</h1>
                    <h2>{"R$ " + p.value}</h2>
                    {/* TODO Nao deixar cadastrar caso nao esteja logado */}
                    <button className="add-product" onClick={() => {props.ValidarLogin(p)}}>
                    <GrAdd />
                    </button>
                </div>
            ))}
        </Container>
    )
}