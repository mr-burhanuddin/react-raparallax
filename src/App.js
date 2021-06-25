import "./App.css";
import Parallax from "react-rellax";
import img from "./images/img.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import img5 from "./images/img5.jpg";
import img6 from "./images/img6.jpg";
import img7 from "./images/img7.jpg";
import img8 from "./images/img8.jpg";
import img9 from "./images/img9.jpg";
import img10 from "./images/img10.jpg";
import imgs from "./images/imgs.jpg";

function App() {
  return (
    <div className="app">
      <div className="appContainer__center">
        <div className="appContainer__image">
          <Parallax speed={-1}>
            <img src={img} alt="igirl" className="app__img" />
          </Parallax>
          <Parallax speed={-2}>
            <img src={img2} alt="igirl" className="app__img" />
          </Parallax>
          <Parallax speed={-3}>
            <img src={img3} alt="igirl" className="app__img" />
          </Parallax>
          <Parallax speed={-4}>
            <img src={img7} alt="igirl" className="app__img" />
          </Parallax>
          <Parallax speed={-4}>
            <img src={img7} alt="igirl" className="app__img" />
          </Parallax>
        </div>
        <div className="appContainer__heading">
          <h2>Ultimate Fitness</h2>
          <p>Subscription To All Gyms</p>
        </div>
        <div className="appContainer__image2">
          <Parallax speed={1}>
            <img src={img6} alt="igirl" className="app__img" />
          </Parallax>
          <Parallax speed={2}>
            <img src={img4} alt="igirl" className="app__img" />
          </Parallax>
          <Parallax speed={1}>
            <img src={img5} alt="igirl" className="app__img" />
          </Parallax>
          <Parallax speed={2}>
            <img src={img8} alt="igirl" className="app__img" />
          </Parallax>
          <Parallax speed={1}>
            <img src={img8} alt="igirl" className="app__img" />
          </Parallax>
        </div>
      </div>
      <div className="appContainer__two">
        <Parallax speed={2}>
          <img src={img6} alt="igirl" className="app__img" />
        </Parallax>
        <Parallax speed={2}>
          <img src={img10} alt="igirl" className="app__img" />
        </Parallax>
        <div className="appContainer__headingtwo">
          <h2>World Class WorkOuts</h2>
          <p>from World Class Trainers</p>
        </div>
        <Parallax speed={2}>
          <img src={imgs} alt="igirl" className="app__img" />
        </Parallax>
        <Parallax speed={2}>
          <img src={img9} alt="igirl" className="app__img" />
        </Parallax>
      </div>
    </div>
  );
}

export default App;
