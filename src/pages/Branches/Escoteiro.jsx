import HeaderStyled from "../../components/Branches/HeaderStyled";
import styles from "./styles/Escoteiros.module.css";
import card1 from "../../assets/desenvolvimento-pessoal.svg"
import card2 from '../../assets/fortalecimento.svg'
import card3 from "../../assets/espirito-de-equipe.svg"


export default function Escoteiro() {
  return (
    <>
      <div className="branchDetailsContainer">
        <HeaderStyled
          branch={"Escoteiro"}
          description={
            "Explorando Novos Territórios com Autonomia e Trabalho em Equipe."
          }
        />

        <div id={styles.tropaEscoteirosContainer}>
          <p className={styles.subTitle}>O Ramo Escoteiro acolhe adolescentes de ambos os sexos, com idades entre 11 e 14 anos, 
            em uma jornada voltada para o desenvolvimento da autonomia e fortalecimento do espírito de equipe. Fundamentado na 
            vida em patrulhas e na conexão com a natureza, este Ramo inspira seus participantes com o marco simbólico: 
            <strong> “Explorar novos territórios com um grupo de amigos”.</strong>
          </p>
        

          <div id={styles.displayCards}>
              <div className={styles.card}>
                <div id={styles.desingCard1}>
                  <p className={styles.cardName}>Desenvolvimento da Autonomia</p>
                  <img className={styles.imgEscoteiro} src={card1} alt="" />
                </div>
              </div>
              <div className={styles.card}>
                <div id={styles.desingCard2}>
                  <p className={styles.cardName}>Fortalecimento</p>
                  <img className={styles.imgEscoteiro} src={card2} alt="" />
                </div>
              </div>
              <div className={styles.card}>
                <div id={styles.desingCard3}>
                  <p className={styles.cardName}>Espirito de Equipe</p>
                  <img className={styles.imgEscoteiro} src={card3} alt="" />
                </div>
              </div>
          </div>
          <div id={styles.line}></div>

            <p className={styles.subText}><strong> -&gt; </strong>As patrulhas, pequenos grupos que atuam como verdadeiras famílias 
              escoteiras, possuem bastões e bandeirolas personalizados. Esses itens carregam as marcas de momentos especiais vividos 
              em equipe, reforçando o senso de pertencimento e coletividade. Dentro de cada patrulha, o monitor, eleito pelos próprios 
              membros, assume a liderança, organizando atividades diversas, como encontros para assistir a filmes, praticar esportes 
              ou simplesmente compartilhar experiências.</p>

            <p className={styles.subText}><strong> -&gt; </strong>A vivência no Ramo Escoteiro vai além do cotidiano: acampamentos, excursões e 
              outras aventuras em meio à natureza proporcionam momentos inesquecíveis, sempre com o acompanhamento atento dos chefes escoteiros. 
              O lema “Sempre Alerta” guia suas ações e é uma lembrança constante da prontidão e empatia que permeiam a vida escoteira. A saudação 
              com a mão esquerda simboliza a irmandade entre os escoteiros e reforça o vínculo de confiança e respeito mútuo.
            </p>

            <p className={styles.subText}><strong> -&gt; </strong>Ao se aproximarem dos 15 anos, os jovens iniciam um período de transição para o 
              Ramo Sênior, onde se preparam para novos desafios. Esse momento de despedida da tropa escoteira é celebrado com a 
              emocionante <strong>'Cerimônia de Passagem'</strong>, marcando a continuidade da jornada de crescimento e aprendizado dentro do 
              Movimento Escoteiro.
            </p>
          </div>
      </div>
    </>
  );
}
