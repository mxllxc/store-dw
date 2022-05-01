/* eslint-disable no-unused-expressions */
import { Container } from "./styles";
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'white',
    p: 4,
    borderRadius: 10,
  };

export default function ModalDetails(props) {

    const [coment, setComent] = React.useState('');

    function Comprar() {
        props.ValidarLogin(props.selectDetails)
        props.handleCloseDetails();
    }
    let id = props.selectDetails.id;

    
   
    return(
        <Modal
        open={props.openDetails}
        onClose={() => {props.handleCloseDetails()}}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Container>
                    <div className="img-product">
                        <img src={props.selectDetails.img} />
                        <h1>{'R$ ' + props.selectDetails.value}</h1>
                        <button onClick={() => {Comprar()}}>COMPRAR</button>
                    </div>
                    <div className="info-product">
                        <div className="info-det">
                            <h1>{props.selectDetails.name}</h1>
                            <h2>{props.selectDetails.desc}</h2>

                        </div>

                    <div className="coment">
                        <form onSubmit={ (e) => {
                            if(coment === '') {
                                e.preventDefault();
                                console.log('digita algo');
                            } else {
                                e.preventDefault();
                                
                                props.productsList[id].coment.push(coment);
                                console.log(props.productsList)
                                setComent('');
                            }
                        }}>
                            <input onChange={(e) => {setComent(e.target.value)}} value={coment} type="text" maxLength={150} />
                            <button  type="submit">Publicar</button>
                        </form>
                        {props.productsList[id].coment.map(coment => (
                            <div className="coment-solo">
                                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="user" />
                                <h2>{props.nome ? props.nome : 'Anônimo'}</h2>
                                <h1>{coment}</h1>
                            </div>
                        ))}

                    </div>

                    </div>
                  </Container>
            </Box>
        </Modal>
    )
}