//import Logo from "./logo.svg";
import "./App.css";
import  Section  from "./components/Section";
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/hero.css';
import Timeline from './components/Timeline';

function App() {

  //No idea offset-from-top works differnetly between the 
  //main container and the sidebar


  let sections_arr = []

  const about_section_body = (
    <div>
      <p>Undergraduate <span className="txt-h" >student</span> researcher at Washington University in St. Louis pursuing a Bachelors in Computer Science (2020-2024).</p>
      <p>I'm a senior at WashU looking to pursue a graduate CS education</p>
      <p>Contact => <a className="link-body"> Github </a> / <a className="link-body"> LinkedIn </a> / <a className="link-body"> Email </a> </p>
    </div>
  )

  sections_arr.push(
      [ <Section title="About" body={about_section_body}/> , "About"]
  )


  //event start, end, body
  const experience_section_body = (
    <>
    <Timeline/>
    </>
  )

  sections_arr.push(
      [ <Section title="Experience" body={experience_section_body}/> , "Experience"]
  )

  const research_section_body = (
    <>
    </>
  )

  sections_arr.push(
    [ <Section title="Research" body={research_section_body}/> , "Research"]
  )
  
  const projects_section_body = (
    <>
    </>
  )

  sections_arr.push(
    [ <Section title="Personal Projects" body={projects_section_body}/> , "Projects"]
  )




  //1. github
  //2. Sort body into components, clean up class name
  //3. body should basically be its own unique contents, 
  // that always gets rendered within a Section -> body should be JSX

  return (

  <div className="hero-container">

      <video
        className="video"
        src="/video/Black - 13495.mp4"
        autoPlay
        loop
        muted
      />

      <NavBar first="Anton" last="Dmitriev" links_arr={sections_arr.map( x => x[1])}/>

      <div className="container-lg w-75 offset-from-top floats-right">

        <div className="p-3 border-0 d-grid gap-3">

              {sections_arr.map( x => x[0])}

        </div>

      </div>

    </div>
    

  );
}

export default App;
