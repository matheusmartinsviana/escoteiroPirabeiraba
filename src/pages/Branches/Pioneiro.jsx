import HeaderStyled from "../../components/Branches/HeaderStyled";
import styles from "./styles/Pioneiro.module.css";
import card1 from "../../assets/support.webp"
import card2 from '../../assets/inspiration.webp'
import card3 from "../../assets/finish.webp"

export default function Pioneiro() {
  return (
    <>
      <div className="branchDetailsContainer">
        <div className={styles.contentContainer}>
          <HeaderStyled
            branch={"Pioneiro"}
            description={
              "Os pioneiros vivem o propósito “Servir”, dedicando-se a ajudar a comunidade!"
            }
          />
          <p className={styles.subTitle}>A partir dos 18 anos e até os 21 incompletos, forma-se o Ramo Pioneiro, composto pelo Clã, onde os membros se apoiam mutuamente e descobrem interesses em comum.  Nesse estágio, os jovens experimentam o papel real de adultos, através de serviços e atividades voltadas ao desenvolvimento comunitário.</p>
          <div className={styles.line}></div>
          <p className={styles.subText}><strong> -&gt; </strong>No cotidiano do Clã, há bastante liberdade, mas os membros estão plenamente conscientes da responsabilidade que isso implica – são eles mesmos que organizam suas próprias atividades. Este é o período em que entram na vida adulta, concluindo a formação de seus valores.</p>
          <p className={styles.subText}><strong> -&gt; </strong>
            Mesmo estando no Clã, os membros já podem atuar como adultos voluntários em outros Ramos e participar ativamente na comunidade. Porém, quando se aproximam dos 21 anos, chega o momento de encerrar a jornada como jovens no Movimento Escoteiro.</p>
          <p className={styles.infoColor}>A Cerimônia de Partida simboliza essa transição, que pode ser seguida pela continuidade da vida escoteira, agora no papel de voluntário, como escotista ou dirigente!</p>
          <p className={styles.voluntariado}>Mas como atuar como um voluntário?</p>
          <div className={styles.displayCards}>
            <div className={styles.card}>
              <img className={styles.imgSenior} src={card1} alt="" />
              <p className={styles.cardName}>Propósito de "Servir"</p>
            </div>
            <div className={styles.card}>
              <img className={styles.imgSenior} src={card2} alt="" />
              <p className={styles.cardName}>Apoio Mútuo entre os Membros</p>
            </div>
            <div className={styles.card}>
              <img className={styles.imgSenior} src={card3} alt="" />
              <p className={styles.cardName}>Cerimônia de Partida e a passagem para o voluntariado</p>
            </div>
          </div>
          <div className={styles.displayInfo}>
            <p className={styles.subText}>Para isso, é necessário ter disponibilidade aos sábados (quando a maioria dos grupos se reúne), poder dedicar-se ao preparo das atividades (cerca de duas horas por semana), gostar do contato com a natureza, com crianças, adolescentes e jovens, além de compartilhar os Princípios e Valores do Movimento Escoteiro.</p>
            <p className={styles.infoColor}>
              Se você atende a esses requisitos, basta procurar o grupo escoteiro mais próximo da sua casa e entrar em contato. Não é facíl?</p>
            <p className={styles.subText}>
              O voluntário, seja escotista (que trabalha diretamente com os jovens) ou dirigente (que cuida da administração do grupo escoteiro), é o elo entre a teoria e a prática. É ele quem incentiva e acompanha o desenvolvimento de cada jovem, preparando atividades que os motivem e desafiem.</p>
          </div>
        </div>
      </div>
    </>
  );
}
