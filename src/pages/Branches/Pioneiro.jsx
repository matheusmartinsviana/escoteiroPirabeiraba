import HeaderStyled from "../../components/Branches/HeaderStyled";
import styles from "./styles/Pioneiro.module.css";

export default function Pioneiro() {
  return (
    <>
      <div className="branchDetailsContainer">
        <HeaderStyled
          branch={"Pioneiro"}
          description={
            "Os pioneiros vivem o propósito “Servir”, dedicando-se a ajudar a comunidade!"
          }
        />
        <div id={styles.pioneiroContainer}>
          <p className={styles.subTitle}>A partir dos 18 anos e até os 21 incompletos, forma-se o Ramo Pioneiro, composto pelo Clã, onde os membros se apoiam mutuamente e descobrem interesses em comum.  Nesse estágio, os jovens experimentam o papel real de adultos, através de serviços e atividades voltadas ao desenvolvimento comunitário.</p>
          <div id={styles.line}></div>
          <p className={styles.subText}><strong> -&gt; </strong>No cotidiano do Clã, há bastante liberdade, mas os membros estão plenamente conscientes da responsabilidade que isso implica – são eles mesmos que organizam suas próprias atividades. Este é o período em que entram na vida adulta, concluindo a formação de seus valores.</p>
          <p className={styles.subText}><strong> -&gt; </strong>
          Mesmo estando no Clã, os membros já podem atuar como adultos voluntários em outros Ramos e participar ativamente na comunidade. Porém, quando se aproximam dos 21 anos, chega o momento de encerrar a jornada como jovens no Movimento Escoteiro.</p>
          <p className={styles.infoColor}>A Cerimônia de Partida simboliza essa transição, que pode ser seguida pela continuidade da vida escoteira, agora no papel de voluntário, como escotista ou dirigente!</p>
          <p id={styles.voluntariado}>Mas como atuar como um voluntário?</p>
          <div id={styles.displayInfo}>
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
