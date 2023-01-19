import React from "react";

// styles
import "./styles.css";

// assets
import People from "../../assets/people.svg";
import Video from "../../assets/video.svg";

const index = () => {
  return (
    <div>
      <header className="header-container">
        <h1>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </h1>
        <button>Entrar</button>
        <img src={People} alt="People ilustration" />
      </header>

      <section className="video-section">
        <div className="video">
          <img src={Video} alt="video ilustraton" />
        </div>
        <h3>Se interessou no curso? Adquira agora mesmo!</h3>
        <h5>
          De R$ <span>000,00</span> por apenas
        </h5>
        <h4>R$ 000,00</h4>
        <button>Comprar</button>
      </section>
    </div>
  );
};

export default index;
