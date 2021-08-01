import React from "react";
import "../App.css";
import Square from "./Square";
import NavBar from "./NavBar";
import Footer from "./Footer";

class App extends React.Component {
  state = {
    materials: [
      {
        srcPath: "images/Granite/CrystalWhite/small.jpg",
        target: "#CrystalWhite",
        name: "Crystal White",
      },
      {
        srcPath: "images/Granite/DallasWhite/small.jpg",
        target: "#DallasWhite",
        name: "Dallas White",
      },
      {
        srcPath: "images/Granite/ValleyWhite/small.jpg",
        target: "#ValleyWhite",
        name: "Valley White",
      },
      {
        srcPath: "images/Granite/WhiteRiver/small.jpg",
        target: "#WhiteRiver",
        name: "White River",
      },
      {
        srcPath: "images/Granite/Portofino/small.jpg",
        target: "#Portofino",
        name: "Portofino",
      },
      {
        srcPath: "images/Granite/Verona/small.jpg",
        target: "#Verona",
        name: "Verona",
      },
      {
        srcPath: "images/Granite/Ornamentalle/small.jpg",
        target: "#Ornamentalle",
        name: "Ornamentalle",
      },
      {
        srcPath: "images/Granite/ButterflyLight/small.jpg",
        target: "#ButterflyLight",
        name: "Butterfly Light",
      },
      {
        srcPath: "images/Granite/NewVenetianGold/small.jpg",
        target: "#NewVenetianGold",
        name: "New Venetian Gold",
      },
      {
        srcPath: "images/Granite/GreenUbatuba/small.jpg",
        target: "#GreenUbatuba",
        name: "Green Ubatuba",
      },
      {
        srcPath: "images/Granite/NapoliWhite/small.jpg",
        target: "#NapoliWhite",
        name: "Napoli White",
      },
      {
        srcPath: "images/Granite/SantaCeciliaClassico/small.jpg",
        target: "#SantaCeciliaClassico",
        name: "Santa Cecilia Classico",
      },
      {
        srcPath: "images/Granite/OuroBrazil/small.jpg",
        target: "#OuroBrazil",
        name: "Ouro Brazil",
      },
      {
        srcPath: "images/Granite/SantaCeciliaAmber/small.jpg",
        target: "#SantaCeciliaAmber",
        name: "Santa Cecilia Amber",
      },
      {
        srcPath: "images/Granite/SantaCeciliaGold/small.jpg",
        target: "#SantaCeciliaGold",
        name: "Santa Cecilia Gold",
      },
      {
        srcPath: "images/Granite/Venetian/small.jpg",
        target: "#Venetian",
        name: "Venetian",
      },
    ],
  };

  addMaterialsToDOM = () => {
    return this.state.materials.map((m, i) => {
      console.log(m.srcPath);
      return (
        <Square srcPath={m.srcPath} target={m.target} name={m.name}></Square>
      );
    });
  };

  render() {
    return (
      <>
        <NavBar></NavBar>
        <section className="section1">
          <div className="container">
            <header>
              <h1 className="mt-5">Granite Selection</h1>
            </header>

            <div className="row">{this.addMaterialsToDOM()}</div>
          </div>
        </section>
        <Footer></Footer>
      </>
    );
  }
}

export default App;
