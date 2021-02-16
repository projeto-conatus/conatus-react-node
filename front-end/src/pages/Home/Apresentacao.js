import React from "react";

import "../../style/apresentacao.css";

import arteDuvida from "../../images/arte_duvida.svg";
import arteEscolha from "../../images/arte_escolha.svg";
import arteVagas from "../../images/vagas.svg";
import arteFeed from "../../images/arte_feed personalizado.svg";
import arteEspecialistas from "../../images/arte_especialistas.svg";
import ScrollToTopButton from "../../components/ScrollToTopButton";

const Apresentacao = () => {
  return (
    <div className="apresentacao" id="apresentacao">
      <main className="mainApresentacao">
        <article className="oQueFazemos">
          <img
            src={arteDuvida}
            alt="Moça com o simbolo de interrogação pŕoximo"
            className="arteDuvida"
            title="Moça com o simbolo de interrogação pŕoximo"
          />

          <h2 className="oQueFazemosTitulo">O que fazemos</h2>
          <p className="oQueFazemosParagrafo">
            A Conatus surge com o objetivo de desenvolver o potencial de jovens
            em situação de vulnerabilidade social. Queremos contribuir na
            ascensão profissional de jovens que estão ou recém saíram do ensino
            médio, através do estímulo a descoberta de talentos, capacitação
            para o mercado de trabalho e encaminhamento para vagas de emprego.
          </p>
        </article>

        <article>
          <h2>Guia de aprendizagem</h2>
          <h3>Trilhas de conhecimento</h3>
          <img
            src={arteEscolha}
            alt="Jovem escolhendo uma opção"
            className="arteEscolha"
            title="Jovem escolhendo uma opção"
          />

          <p>
            São oferecidas algumas trilhas de habilidades técnicas e
            comportamentais necessárias em algumas áreas de atuação. Essa
            jornada é composta de vídeo aulas, textos, indicações de livros e
            exercícios para o aprimoramento dos conhecimentos. Muitos dos
            conteúdos aqui indicados não são autorais, mas são conteúdos que
            profissionais das respectivas áreas consideram extremamente
            relevantes.
          </p>
        </article>

        <article>
          <h2>Vagas</h2>
          <h3>Uma primeira oportunidade</h3>
          <img
            src={arteVagas}
            alt="Uma entrevista de emprego"
            className="arteEspecialistas"
            title="Uma entrevista de emprego"
          />

          <p>
            Na área de vagas será possível encontrar vagas e empresas com
            processo seletivo aberto que se encaixam no perfil do nosso público
            alvo. Além de vagas direcionadas para minorias como PCD, mulheres,
            negros e LGBT+. Teremos também um espaço para cadastro de vagas de
            empresas parceiras.
          </p>
        </article>

        <article>
          <h2>Feed personalizado</h2>
          <h3>Novidades, notícias e dicas</h3>
          <img
            src={arteFeed}
            alt="Um site personalizado para o usuário"
            className="arteEspecialistas"
            title="Um site personalizado para o usuário"
          />

          <p>
            Ao se cadastrar e acessar a plataforma com seu e-mail e senha, você
            será levado ao nosso feed! disponibilizaremos dicas de profissionais
            de recrutamento e empresas sobre como se preparar para as diferentes
            etapas de um processo seletivo, artigos sobre tecnologias e
            ferramentas importantes para o mercado de trabalho, novidades sobre
            cursos e formações com inscrições abertas e etc.
          </p>
        </article>

        <article>
          <h2>Mentorias (Em breve)</h2>
          <h3>Mentores especialistas</h3>
          <img
            src={arteEspecialistas}
            alt="Profissionais especialistas em suas áreas"
            className="arteEspecialistas"
            title="Profissionais especialistas em suas áreas"
          />

          <p>
            A mentoria tem como objetivo auxiliar o jovem a conquistar seus
            objetivos profissionais através de conselhos baseado em nossa
            experiência profissional do mentor. Durante esse processo é traçado
            o caminho mais promissor para o crescimento pessoal e profissional
            do mentorado ou da mentorada, além da realização de um
            acompanhamento constante dessa trajetória.
          </p>
        </article>
      </main>
      <ScrollToTopButton name="voltarAoTopo" />
    </div>
  );
};

export default Apresentacao;
