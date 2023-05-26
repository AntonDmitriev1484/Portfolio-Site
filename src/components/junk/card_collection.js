//Multiple cards

import Card from "./card";
import "./card_collection.css";
//import "../../public/images/image1";

/* <Card 
src="public\images\image1.jpg"
text="SAMPLETEXT"
label="Temp"
path="/services" />

This is how you pass props (parameters) to a react component */

function CardCollection() {
  return (
    <div className="cards">
      <h1>Card collection</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <Card
              src="images/image1.jpg"
              text="SAMPLETEXTSAMPLETEXTSAMPLETEXTSAMPLETEX"
              label="Temp"
              path="/services"
            />
            <Card
              src="images/image1.jpg"
              text="SAMPLETEXTSASAMPLETEX"
              label="Temp"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <Card
              src="images/image1.jpg"
              text="SAMPLETEXTSAMPLETEXTSAMPLETEXTSAMPLETEX"
              label="Temp"
              path="/services"
            />
            <Card
              src="images/image1.jpg"
              text="SAMPLETEXTSASAMPLETEX"
              label="Temp"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardCollection;
