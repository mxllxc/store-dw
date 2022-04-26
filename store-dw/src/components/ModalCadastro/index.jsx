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
    width: 400,
    bgcolor: 'white',
    p: 4,
    borderRadius: 10,
  };

export default function ModalCadastro(props) {
   

    
    return(
        <Modal
        open={props.openCadastro}
        onClose={props.handleCloseCadastro}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Container>
                    <h1>Cadastro</h1>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        props.handleCloseCadastro;
                        props.handleSubmit();
                        }}>
                        <div className="field-cadastro">
                            <label>Nome</label>
                            <input required onChange={(e) => {props.setNome(e.target.value)}} type="text" placeholder="Betania" />
                        </div>
                        <div className="field-cadastro">
                            <label>E-mail</label>
                            <input required onChange={(e) => {props.setEmail(e.target.value)}} type="email" placeholder="betania@gmail.com" />
                        </div>
                        <div className="field-cadastro">
                            <label>Senha</label>
                            <input required onChange={(e) => {props.setSenha(e.target.value)}} type="password" placeholder="******" />
                        </div>
                        <button type="submit">Cadastrar</button>
                    </form>
                  </Container>
            </Box>
        </Modal>
    )
}