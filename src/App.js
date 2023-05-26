//import Logo from "./logo.svg";
import "./App.css";
import  Section  from "./components/section";
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/junk/hero.css';

function App() {

  //No idea offset-from-top works differnetly between the 
  //main container and the sidebar

  //1. github
  //2. Sort body into components, clean up class name
  //3. figure out how to write body components (might be unique)

  return (

  <div className="hero-container">
      <video
        className="video"
        src="/video/Black - 13495.mp4"
        autoPlay
        loop
        muted
      />

        <ul className="nav ms-4 flex-column offset-from-top2 position-fixed abs-float-left text-light">
          <h1>Anton</h1>
          <h1>Dmitriev</h1>
          <li class="nav-item text-light">
            <a  className="link-sidebar h5" href="#">Active</a>
          </li>
          <li class="nav-item">
            <a   className="link-sidebar h5" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a  className="link-sidebar h5"  href="#">Link</a>
          </li>

        </ul>

      <div className="container-lg offset-from-top floats-right">

        <div className="p-3 border-0 d-grid gap-3">

              <Section title="Test" body="Test"/>
              <Section title="Test2" body="asdkfjhaklsd"/>
              <Section title="Test2" body="asdkfjhaklsd"/>
              <Section title="Test2" body="asdkfjhaklsd"/>
              <Section title="Test2" body="asdkfjhaklsd"/>
              <Section title="Test2" body="asdkfjhaklsd"/>

        </div>

      </div>

    </div>
    

  );
}

export default App;
