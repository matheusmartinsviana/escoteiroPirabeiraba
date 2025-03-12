import HeaderStyled from "../../components/Branches/HeaderStyled";
import styles from "./styles/Lobinho.module.css";
import card1 from "../../assets/network.webp"
import card2 from '../../assets/inspiration.webp'
import card3 from "../../assets/respect.webp"

export default function Lobinho() {
  return (
    <>
      <div className="branchDetailsContainer">
        <div className={styles.contentContainer}>
          <HeaderStyled
            branch={"Lobinho"}
            description={"Formando Pequenos Líderes e Grandes Sonhadores, Construindo um Caminho de Respeito, Alegria e Aprendizado."
            }
          />
          <div className={styles.loboContainer}>
            <p className={styles.subTitle}>Entre os 6,5 e os 10 anos, somos lobinhos. 
            A ênfase educativa do ramo lobinho é a socialização, utilizando como fundo de cena a obra do escritor Rudyard  Kipling,“O Livro da Jângal”, que retrata as aventuras de Mowgli, o menino lobo.</p>
            <div className={styles.displayCards}>
              <div className={styles.card}>
                <img loading="lazy" className={styles.imgLobo} src={card1} alt="" />
                <p className={styles.cardName}>Socialização</p>
              </div>
              <div className={styles.card}>
                <img loading="lazy" className={styles.imgLobo} src={card2} alt="" />
                <p className={styles.cardName}>Imaginação</p>
              </div>
              <div className={styles.card}>
                <img loading="lazy" className={styles.imgLobo} src={card3} alt="" />
                <p className={styles.cardName}>Respeito</p>
              </div>
            </div>
            <div className={styles.line}></div>

            <p className={styles.subText}>Juntos, formam uma alcateia, que é dividida em pequenos grupos chamados matilhas.
              Cada matilha tem de quatro a seis lobinhos, entre meninos e meninas, Fazem jogos, brincadeiras, vivem aventuras,
              aprendem sobre a importância da boa ação diária e ainda são incentivados a fazer sempre o nosso <strong>'Melhor Possível' </strong>
              esse inclusive é o  lema do ramo lobinho.</p><br />
            <p className={styles.subTitleLobo}>Tem sua própria lei, a Lei do Lobinho, que traz cinco artigos:</p>
            <p className={styles.subText}><strong> -&gt; </strong>O Lobinho ouve sempre os Velhos Lobos;</p>
            <p className={styles.subText}><strong> -&gt; </strong>O Lobinho pensa primeiro nos outros;</p>
            <p className={styles.subText}><strong> -&gt; </strong>O Lobinho abre os olhos e os ouvidos;</p>
            <p className={styles.subText}><strong> -&gt; </strong>O lobinho é limpo e está sempre alegre;</p>
            <p className={styles.subText}><strong> -&gt; </strong>O Lobinho diz sempre a verdade.</p><br />
            <p className={styles.info}>Antes de completar 11 anos são encaminhados para o <strong>Ramo Escoteiro.</strong>
              Nesse período, é feita uma Cerimônia de Passagem, para que possam se despedir da alcateia.</p><br />
          </div>
        </div>
      </div>
    </>
  );
}
