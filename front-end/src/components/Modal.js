import React from 'react'
import '../style/cadastro.css'

const Modal = () => {
  const [modal, setModal] = React.useState(true)


  return (
    <>
      {modal && (
      <div className="modalAviso">
        <div className="modalConteudo">
            <h1>Aviso</h1>
            <p>Olá!<b> Somos inicialmente, uma aplicação voltada para jovens que concluíram ou estão no ensino médio em escolas públicas da cidade do Rio de Janeiro</b>. Nosso objetivo é ajudar esse jovem a se qualificar para o mercado de trabalho, oferecendo cursos, vagas e informação de qualidade. Se você se encaixa nesse perfil, não deixe de se cadastrar  e aproveitar todos os nossos serviços gratuitamente!</p>

            <strong>Você concorda com os termos acima?</strong>

            <div className="botoesModal">
                <a href="/">Voltar</a>
                <button className="fecharModal"
                  onClick={() => setModal((modal) => modal = false)}
                >
                  Concordo
                </button>
            </div>

        </div>
      </div>
    )}
    </>
    
  )
}

export default Modal
