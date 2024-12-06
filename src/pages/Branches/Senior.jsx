import HeaderStyled from "../../components/Branches/HeaderStyled";
import "./styles/Senior.module.css";

export default function Senior() {
  return (
    <>
      <div className="branchDetailsContainer">
        <HeaderStyled
          branch={"Senior"}
          description={
            "Pratica de valores como autodomínio, coragem, amizade, respeito e autoconfiança, preparando-os para enfrentarem os desafios com segurança e determinação!"
          }
        />
        <div>
          <p>Este ramo reúne jovens com idade entre 15 à 17 anos, de ambos os sexos. As atividades realizadas dentro deste ramo são voltadas para o <strong>desenvolvimento físico</strong>, <strong>moral</strong>, <strong>intelectual</strong>, <strong>espiritual</strong> e por fim o <strong>crescimento social</strong>!</p>
        </div>
      </div>
    </>
  );
}
