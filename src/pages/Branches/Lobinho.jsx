import HeaderStyled from "../../components/Branches/HeaderStyled";
import styles from "./styles/Lobinho.module.css";
import card1 from "../../assets/socializacao.svg"
import card2 from '../../assets/imaginacao.svg'
import card3 from "../../assets/respeito.svg"

export default function Lobinho() {
  return (
    <>
      <div className="branchDetailsContainer">
        <HeaderStyled
          branch={"Lobinho"}
          description={"Formando Pequenos Líderes e Grandes Sonhadores, Construindo um Caminho de Respeito, Alegria e Aprendizado."
          }
        />
        
        <div id={styles.loboContainer}>
          <p className={styles.subTitle}>Este ramo reúne crianças com idade entre 6,5 à  10 anos, de ambos os sexos. 
            O principal objetivo nos lobinhos é trabalhar a <strong>socialização e a imaginação</strong>, tudo isso utilizando como “fundo de cena” 
            a obra do escritor Rudyard Kipling, <strong>“Mowgli, o menino lobo”.</strong> Desse modo, as atividades são baseadas na história do 
            menino que aprendeu a sobreviver na selva com os lobos.</p>

          <div id={styles.displayCards}>
              <div className={styles.card}>
                <div id={styles.desingCard1}>
                  <p className={styles.cardName}>Socialização</p>
                  <img className={styles.imgLobo} src={card1} alt="" />
                </div>
              </div>
              <div className={styles.card}>
                <div id={styles.desingCard2}>
                  <p className={styles.cardName}>Imaginação</p>
                  <img className={styles.imgLobo} src={card2} alt="" />
                </div>
              </div>
              <div className={styles.card}>
                <div id={styles.desingCard3}>
                  <p className={styles.cardName}>Respeito</p>
                  <img className={styles.imgLobo} src={card3} alt="" />
                </div>
              </div>
          </div>
          <div id={styles.line}></div>

          <p className={styles.subText}>Juntos, formam uma alcateia, que é dividida em pequenos grupos chamados matilhas.
          Cada matilha tem de quatro a seis lobinhos, entre meninos e meninas, Fazem jogos, brincadeiras, vivem aventuras, 
          aprendem sobre a importância da boa ação diária e ainda são incentivados a fazer sempre o nosso <strong>'Melhor Possível' </strong>
          esse inclusive é o  lema do ramo lobinho.</p><br />

          <p id={styles.subTitleLobo}>Tem sua própria lei, a Lei do Lobinho, que traz cinco artigos:</p>

          <p className={styles.subText}><strong> -&gt; </strong>O Lobinho ouve sempre os Velhos Lobos;</p>
          <p className={styles.subText}><strong> -&gt; </strong>O Lobinho pensa primeiro nos outros;</p>
          <p className={styles.subText}><strong> -&gt; </strong>O Lobinho abre os olhos e os ouvidos;</p>
          <p className={styles.subText}><strong> -&gt; </strong>O lobinho é limpo e está sempre alegre;</p>
          <p className={styles.subText}><strong> -&gt; </strong>O Lobinho diz sempre a verdade.</p><br />

          <p id={styles.info}>Antes de completar 11 anos são encaminhados para o <strong>Ramo Escoteiro.</strong> 
          Nesse período, é feita uma Cerimônia de Passagem, para que possam nos despedir da alcateia.</p><br />

        
        </div>
      </div>
    </>
  );
}
