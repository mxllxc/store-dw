import { Container, ContainerAdm } from "./styles";
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { FiAlertTriangle } from 'react-icons/fi';

const style1 = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 250,
    bgcolor: 'white',
    p: 4,
    borderRadius: 10,
  };
  const style2 = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'white',
    p: 4,
    borderRadius: 10,
  };


export default function ModalAdm(props) {
    // TODO melhorar a verificação de adm com o usuario completo
    const [nomeCat, setNomeCat] = React.useState();

    const [id, setId] = React.useState(0);
    const [nomeProd, setNomeProd] = React.useState();
    const [img, setimg] = React.useState();
    const [valor, setValor] = React.useState(0);
    const [desc, setDesc] = React.useState();
    const [cat, setCat] = React.useState();

    if(props.nome === 'adm') {
        return(
            <Modal
            open={props.openAdm}
            onClose={() => {props.handleCloseAdm()}}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
                        <Box sx={style2}>
                            <ContainerAdm>
                                <div className="titulos">
                                    <h1>Cadastro de Categoria</h1>
                                    <h1>Cadastro de produto</h1>
                                </div>
                                <div className="content">


                                <div className='cat'>
                                    <form onSubmit={(e) => {
                                        e.preventDefault();
                                        props.setCategoriasList([...props.categoriasList, nomeCat]);
                                        setNomeCat('');
                                    }}>
                                        <div className="labels">
                                        <label>Nome</label>
                                        </div>
                                        <div className="inputs">
                                        <input type="text" onChange={(e) => {setNomeCat(e.target.value)}} value={nomeCat} />

                                        <button type="submit">Salvar</button>
                                        </div>
                                    </form>
                                </div>


                                <div className='prod'>
                                    <form className="border" onSubmit={(e) => {
                                        e.preventDefault();
                                        props.setProducts([...props.products, {
                                            id: id,
                                            img: img,
                                            name: nomeProd,
                                            value: valor,
                                            coment: [],
                                            desc: desc,
                                            cat: cat,
                                        }])

                                        setId(0);
                                        setNomeProd('');
                                        setimg('');
                                        setValor(0);
                                        setDesc('');
                                        props.handleCloseAdm();
                                    }}>
                                        <div className="labels">
                                        <label>ID</label>
                                        <label>Nome</label>
                                        <label>Image</label>
                                        <label>Valor</label>
                                        <label>Descrição</label>
                                        <label>Categoria</label>

                                        </div>
                                        <div className="inputs">
                                        <input type="number" onChange={(e) => {setId(e.target.value)}} value={id} />
                                        <input type="text" onChange={(e) => {setNomeProd(e.target.value)}} value={nomeProd} />
                                        <input type="text" onChange={(e) => {setimg(e.target.value)}} value={img} />
                                        <input type="number" onChange={(e) => {setValor(e.target.value)}} value={valor} />
                                        <input type="text" onChange={(e) => {setDesc(e.target.value)}} value={desc} />
                                        <select value={cat} onChange={(e) => {setCat(e.target.value)}} name="cat" id="cat">
                                            {props.categoriasList.map((e, i) => (
                                                <option key={i} value={e}>{e}</option>
                                            ))}
                                        </select>

                                        <button type="submit">Salvar</button>



                                        </div>
                                    </form>
                                </div>
                                </div>
                            </ContainerAdm>
                        </Box>
                        </Modal>
        )
    } else {
        return(
            <Modal
            open={props.openAdm}
            onClose={() => {props.handleCloseAdm()}}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
                <Box sx={style1}>
                    <Container>
                        <FiAlertTriangle size={100} />
                        <h1>Acesso restrito a Adms!</h1>
                    </Container>
                </Box>
            </Modal>
         
        )
    }   

}