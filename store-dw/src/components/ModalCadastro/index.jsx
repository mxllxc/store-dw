/* eslint-disable no-unused-expressions */
import { Container } from "./styles";
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    height: 300,
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
        onClose={() => {props.setAlert(false); props.handleCloseCadastro()}}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Container>
                    <div className="titles">
                    <h1 className={props.cadastro ? 'h1-cadastro-true' : ''} onClick={() => {props.setCadastro(true)}}>Cadastro</h1>
                    <h1 className={props.cadastro ? '' : 'h1-login-true'} onClick={() => {props.setCadastro(false)}}>Login</h1>
                    </div>
                        <div className={props.cadastro ? 'cadastro-true' : 'cadastro-false'}>
                            <form onSubmit={(e) => {
                                e.preventDefault();
                                props.handleCloseCadastro;
                                props.handleSubmit();
                                }}>
                                   
                                
                                <div className="field-cadastro">
                                    <label>Nome</label>
                                    <input maxLength={15} required onChange={(e) => {props.setNome(e.target.value)}} type="text" placeholder="Betania" />
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
                        </div>
                        <div className={props.cadastro ? 'login-false' : 'login-true'}>
                        <label className={props.alert ? 'login-rejected' : 'login-done'}>Login ou senha inválido!</label>
                                <div className="field-cadastro">
                                    <label>Nome</label>
                                    <input maxLength={15} required onChange={(e) => {props.setNome(e.target.value)}} type="text" placeholder="betania@email.com" />
                                </div>
                                <div className="field-cadastro">
                                    <label>Senha</label>
                                    <input required onChange={(e) => {props.setSenha(e.target.value)}} type="password" placeholder="******" />
                                </div>
                                <button onClick={() => {props.Login()}}>Entrar</button>
                        </div>
                  </Container>
            </Box>
        </Modal>
    )
}