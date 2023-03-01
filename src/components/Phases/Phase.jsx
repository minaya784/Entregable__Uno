import React from "react";
import "../../App";
import Button from "../Button/Button";
import "../Phases/Phrase.css";
import vector from "../../assets/fortuna-2/Vector.png";

const Phase = ({ dataPhrase, changePhrase }) => {
  return (
    <>
      <section className="phrase__container">
        <img className="image__phrase" src={dataPhrase.imagen} />
        <div className="phrase__container-data">
          <h1 className="phrase__title">FORTUNE PHRASE</h1>
          <div className="phrase__data">
            <p className="phrase__text"> {dataPhrase.phrase} </p>
            <p className="phrase__autor"> {dataPhrase.author} </p>
            <img className="phrase__vector" src={vector} />
            <div className="phrase__btn">
              <Button handleClick={changePhrase} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Phase;
