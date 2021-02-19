//Precisamos ter uma action para selecionar, inserir, deletar e editar


const artigo = require('../models/Artigo')

class ArtigosController {
  //Teoricamente, em classes possuímos métodos, mas em controllers chamamos de Actions.
  selectArtigoAction(req, res) {

    artigo.selectAll(req, res)
  }


  insertArtigoAction(req, res) {
    const { titulo, subtitulo, autor, texto, imagem } = req.body;

    //esse autor que recebemos no formulário é o codigo do autor
    //no select que será feito o inner join com a tabela de autor para retornar nome do autor
    artigo.titulo = titulo
    artigo.subtitulo = subtitulo
    artigo.autor = autor
    artigo.texto = texto
    artigo.imagem = imagem

    artigo.insertArtigo(req, res)
  }

  selectArtigoIdAction(req, res) {
    const { id } = req.params;

    artigo.id = id 

    artigo.selectPorId(req, res)
  }

  updateArtigoAction(req, res) {
    const { id } = req.params;
    const { titulo, subtitulo, autor, texto, imagem } = req.body;

    artigo.id = id
    artigo.titulo = titulo
    artigo.subtitulo = subtitulo
    artigo.autor = autor
    artigo.texto = texto
    artigo.imagem = imagem

    artigo.updateArtigo(req, res)
  }

  deleteArtigoAction(req, res) {
    const { id } = req.params;

    artigo.id = id

    artigo.deleteArtigo(req, res)
  } 

}

//vamos exportar instanciando já a classe, pois ao importar, não precisamos instanciar a todo momento.
//Sendo necessario, por exemplo, apenas dar um require no controller em questão.
module.exports = new ArtigosController();
