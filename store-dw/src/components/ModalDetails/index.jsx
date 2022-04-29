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
    const [doneComent, setDoneComent] = React.useState([]);

    function Comprar() {
        props.ValidarLogin(props.selectDetails)
        props.handleCloseDetails();
    }
    
   
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
                        <h1>{props.selectDetails.value}</h1>
                        <button onClick={() => {Comprar()}}>COMPRAR</button>
                    </div>
                    <div className="info-product">
                        <div className="info-det">
                            <h1>{props.selectDetails.name}</h1>
                            <h2>{props.selectDetails.desc}</h2>

                        </div>

                    <div className="coment">
                        <form onSubmit={ (e) => {
                            e.preventDefault();
                            setDoneComent([...doneComent, coment]);
                        }}>
                            <input onChange={(e) => {setComent(e.target.value)}} type="text" maxLength={100} />
                            <button  type="submit">Publicar</button>
                        </form>
                        {doneComent.map(coment => (
                            <h1>{coment}</h1>
                        ))}

                    </div>

                    </div>
                  </Container>
            </Box>
        </Modal>
    )
}