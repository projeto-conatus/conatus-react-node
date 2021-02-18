import React from "react";

const Editar = ( ) => {

  const [form, setForm] = React.useState({
    id: '',
    titulo: '',
    subtitulo: '',
    autor: '',
    texto: '',
    imagem: '',
  })
  const [sucesso, setSucesso] = React.useState(null)

  // React.useEffect(() => {
  //   async function buscarArtigos() {
  //     const req = await fetch("http://localhost:3011/selectartigo");
  //     const res = await req.json();
  //     setForm(...res, {...form,
  //       id:'',
  //       titulo: '',
  //       subtitulo: '',
  //       autor: '',
  //       texto: '',
  //       imagem: '',
  //     })
  //   }
  //   buscarArtigos();
  // },[]);

  function handleChange({target}) {
    const {id, value} = target
    setForm({...form, [id]: value})
  }


  function handleSubmit(e, {id}) {
    e.preventDefault()
    console.log(id)
    fetch(`http://localhost:3011//updateArtigo/${id}`, {
      method: 'PUT',
      body: JSON.stringify(form)
    }).then((res) => setSucesso(res)).then(res => console.log(res))
    
  }

  return (
    <>
      <div className="container">
        <div className="col-md-6 offset-md-3">
          <h1>Editar artigo</h1>
          <form onSubmit={() => handleSubmit(form.id)} id={form.id}>
            <div className="form-row">
              <div className="form-group col-md-12">
                <label htmlFor="titulo-artigo">Título</label>
                <input
                  className="form-control"
                  type="text"
                  name="titulo"
                  id="titulo"
                  value={form.titulo}
                  onChange={handleChange}
                />

                <label htmlFor="subtitulo-artigo" className="mt-2">Subtítulo</label>
                <input
                  className="form-control"
                  type="text"
                  name="subtitulo"
                  id="subtitulo"
                  value={form.subtitulo}
                  onChange={handleChange}
                />

                <label htmlFor="id-autor" className="mt-2">ID do autor</label>
                <select
                className="form-control" 
                name="autor"
                id="autor"
                value={form.autor}
                onChange={handleChange}
                required>
                  <option value=''>Selecione</option>
                  <option value="A000">A000 | Conatus</option>
                  <option value="A001">A001 | Nathalia</option>
                  <option value="A002">A002 | Carlos</option>
                  <option value="A003">A003 | Marcos</option>
                  <option value="A004">A004 | Welington</option>
                  <option value="A005">A005 | Larissa</option>
                  <option value="A006">A006 | Midian</option>
                </select>
                <label htmlFor="texto" className="mt-2">Texto</label>
                <textarea
                  className="form-control"
                  name="texto"
                  id="texto"
                  value={form.texto}
                  onChange={handleChange}
                />

                <label htmlFor="imagem" className="mt-2">URL da imagem</label>
                <input
                  className="form-control"
                  type="text"
                  name="imagem"
                  id="imagem"
                  value={form.imagem}
                  onChange={handleChange}
                  placeholder="Exemplo: https://google.com/foto.jpg"
                />

                <button
                  style={{margin: '1rem 0'}}
                  className="btn btn-primary"
                >
                  Atualizar
                </button>
                {sucesso && sucesso.ok && <p className="p-3 text-white bg-success">Artigo atualizado com sucesso!!</p>}
                <hr/>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Editar;
