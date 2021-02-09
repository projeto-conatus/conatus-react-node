import React, {useState, useEffect} from 'react';
import VLibras from './components/vlibras';

//permitir requisisoes de uma api, neste caso, do nosso back em node. 
//SaberMais: https://blog.rocketseat.com.br/axios-um-cliente-http-full-stack/
import Axios from 'axios' 

function App() {

    //teste consumo apiNode

  const [idAutor, setIdAutor] = useState('')
  const [nome, setNome] = useState('')
  const [listAutores, setListAutores] = useState([])

  useEffect(() => {
    Axios.get("http://localhost:3010/apiNode/select").then((response)=>{
      setListAutores(response.data)
    })
  }, [])

  const cadUser = () => {
    //fazendo link com back-end

    Axios.post("http://localhost:3010/apiNode/insert", {
      idAutor: idAutor, 
      nome: nome,
    })

    //atualizando em tempo real sem reload da page toda 
      setListAutores([
        ...listAutores, 
        {idAutor: idAutor, nome: nome},
      ])
  }

  return (
  
    <div>

      <h1>Cadastro usuario</h1>

      <label>idAutor</label>
      <input 
        type="text"
        name="idAutor"
        onChange={(e) => {
          setIdAutor(e.target.value)
        }}/>
      
      <label>nomeUser</label>
      <input 
        type="text"
        name="nome"
        onChange={(e) => {
          setNome(e.target.value)
        }}/>

        <button onClick={cadUser}>Cadastrar</button>
        <hr/>

        {listAutores.map((value)=>{
          return <h3>idNome:{value.idAutor} | nome:{value.nome}</h3>
        })}
    </div>

    // <div>
    //  <h1>Conatus!</h1>
    //  <VLibras />
    // </div>
  );
}

export default App;