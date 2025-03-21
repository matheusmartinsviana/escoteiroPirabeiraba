import HeaderStyled from "../../components/Branches/HeaderStyled";
import styles from "./styles/Senior.module.css";
import card1 from "../../assets/23.webp"
import card2 from '../../assets/13.webp'
import card3 from "../../assets/33.webp"

export default function Senior() {
  return (
    <>
      <div className="branchDetailsContainer">
        <div className={styles.contentContainer}>
          <HeaderStyled
            branch={"Senior"}
            description={
              "Pratica de valores como autodomínio, coragem, amizade, respeito e autoconfiança, preparando-os para enfrentarem os desafios com segurança e determinação!"
            }
          />
          <p className={styles.subTitle}>Este ramo reúne jovens com idade entre 15 à 17 anos, de ambos os sexos. As atividades realizadas dentro deste ramo são voltadas para o <strong>desenvolvimento físico</strong>, <strong>moral</strong>, <strong>intelectual</strong>, <strong>espiritual</strong> e por fim o <strong>crescimento social</strong>!</p>
          <div className={styles.displayCards}>
            <div className={styles.card}>
              <img loading="lazy" className={styles.imgSenior} src={card1} alt="" />
              <p className={styles.cardName}>Inteligencia emocional e mental</p>
            </div>
            <div className={styles.card}>
              <img loading="lazy" className={styles.imgSenior} src={card2} alt="" />
              <p className={styles.cardName}>Trabalho em equipe</p>
            </div>
            <div className={styles.card}>
              <img loading="lazy" className={styles.imgSenior} src={card3} alt="" />
              <p className={styles.cardName}>Crescimento pessoal</p>
            </div>
          </div>
          <div className={styles.line}></div>
          <p className={styles.subText}><strong> -&gt; </strong> A tropa pode ser masculina (Tropa Sênior), feminina (Tropa Guia) ou mista, e é organizada em até quatro patrulhas, cada uma composta por 4 a 6 jovens. Cada patrulha escolhe um nome representativo, inspirado em acampamentos geográficos conhecidos ou em tribos indígenas brasileiras.</p>
          <p className={styles.subText}><strong> -&gt; </strong>Na Tropa Sênior/Guia, a relação entre a chefia e os membros se diferencia dos ramos Lobinho e Escoteiro. Aqui, os jovens possuem maturidade suficiente para traçar seus próprios caminhos, recebendo apenas o suporte necessário dos chefes. Esse ramo é conhecido por exigir maior esforço físico e mais conhecimento, proporcionando aos participantes uma evolução significativa.</p>
          <p className={styles.subText}><strong> -&gt; </strong>Antes de completarem 18 anos, os jovens são direcionados ao Clã Pioneiro. Esse momento de transição é marcado pela "ponte", onde começam a se preparar para a nova etapa. A jornada é concluída com uma cerimônia de passagem, na qual se despedem da Tropa Sênior/Guia e celebram essa fase tão especial.</p>
        </div>
      </div>
    </>
  );
}
