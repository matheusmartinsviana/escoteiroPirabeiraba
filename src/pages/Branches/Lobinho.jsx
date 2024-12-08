import HeaderStyled from "../../components/Branches/HeaderStyled";
import styles from "./styles/Senior.module.css";
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
        <div id={styles.seniorContainer}>
          <p className={styles.subTitle}>Este ramo reúne crianças com idade entre 6,5 à  10 anos, de ambos os sexos. 
            O principal objetivo nos lobinhos é trabalhar a <strong>socialização e a imaginação</strong>, tudo isso utilizando como “fundo de cena” 
            a obra do escritor Rudyard Kipling, <strong>“Mowgli, o menino lobo”.</strong> Desse modo, as atividades são baseadas na história do 
            menino que aprendeu a sobreviver na selva com os lobos. </p>
          <div id={styles.displayCards}>
              <div className={styles.card}>
                <div id={styles.desingCard1}>
                  <p className={styles.cardName}>Socialização</p>
                  <img className={styles.imgSenior} src={card1} alt="" />
                </div>
              </div>
              <div className={styles.card}>
                <div id={styles.desingCard2}>
                  <p className={styles.cardName}>Imaginação</p>
                  <img className={styles.imgSenior} src={card2} alt="" />
                </div>
              </div>
              <div className={styles.card}>
                <div id={styles.desingCard3}>
                  <p className={styles.cardName}>Respeito</p>
                  <img className={styles.imgSenior} src={card3} alt="" />
                </div>
              </div>
          </div>
          <div id={styles.line}></div>

          <p className={styles.info}>Juntos, formam uma alcateia, que é dividida em pequenos grupos chamados matilhas.
          Cada matilha tem de quatro a seis lobinhos, entre meninos e meninas, Fazem jogos, brincadeiras, vivem aventuras, 
          aprendem sobre a importância da boa ação diária e ainda são incentivados a fazer sempre o nosso Melhor Possível; 
          esse inclusive é o  lema do ramo lobinho.</p>
          <p className={styles.subText}><strong> -&gt; </strong> A tropa pode ser masculina (Tropa Sênior), feminina (Tropa Guia) ou mista, e é organizada em até quatro patrulhas, cada uma composta por 4 a 6 jovens. Cada patrulha escolhe um nome representativo, inspirado em acidentes geográficos conhecidos ou em tribos indígenas brasileiras.</p>
          <p className={styles.subText}><strong> -&gt; </strong>Na Tropa Sênior/Guia, a relação entre a chefia e os membros se diferencia dos ramos Lobinho e Escoteiro. Aqui, os jovens possuem maturidade suficiente para traçar seus próprios caminhos, recebendo apenas o suporte necessário dos chefes. Esse ramo é conhecido por exigir maior esforço físico e mais conhecimento, proporcionando aos participantes uma evolução significativa.</p>
          <p className={styles.subText}><strong> -&gt; </strong>Antes de completarem 18 anos, os jovens são direcionados ao Clã Pioneiro. Esse momento de transição é marcado pela "ponte", onde começam a se preparar para a nova etapa. A jornada é concluída com uma cerimônia de passagem, na qual se despedem da Tropa Sênior/Guia e celebram essa fase tão especial.</p>
        </div>
      </div>
    </>
  );
}
