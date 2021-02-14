//Precisamos ter uma action para selecionar, inserir, deletar e editar


const artigo = require('../models/Artigo')

class ArtigosController {
  //Teoricamente, em classes possúimos
  //métodos, mas em controllers chamamos de Actions.
  selectArtigoAction(req, res) {
    //OBS: descobrir o porquê não é interessante passar req,res aqui
    artigo.selectAll(req, res)
  }

  insertArtigoAction(req, res) {
    const { titulo, subtitulo, autor, texto, imagem } = req.body;

    artigo.titulo = titulo
    artigo.subtitulo = subtitulo
    artigo.autor = autor
    artigo.texto = texto
    artigo.imagem = imagem

    artigo.insertArtigo(req, res)
  }

}

//vamos exportar instanciando já a classe, pois ao importar, não precisamos instanciar a todo momento.
//Sendo necessario, por exemplo, apenas dar um require no controller em questão.
module.exports = new ArtigosController();
