//import Logo from "./logo.svg";
import "./App.css";
import  Section  from "./components/Section";
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/hero.css';
import Timeline from './components/Timeline';
import TimelineEvent from './components/TimelineEvent';
import TextImageRow from './components/TextImageRow';
import { useRef } from 'react';

function App() {

  let sections_arr = [ ]


  const about_section_body = (
    <div>
      <p>Undergraduate student researcher at Washington University in St. Louis pursuing a Bachelors in Computer Science (2020-2024).</p>
      <p>I'm looking to pursue a graduate CS education and am in the process of applying to PhD programs.</p>
      <p> <a className="link-body"> Github </a> / <a className="link-body"> LinkedIn </a> / <a className="link-body"> Email </a> </p>
    </div>
  )

  sections_arr.push(
      [ <Section title="About" body={about_section_body}/> , "About"]
  )


  // ----

  //Maybe group experience by year
  // ex. 2020-2022: 131, iDTech as bullets
  let timeline_event_arr = [];
  
  timeline_event_arr[4] = (
    (<TimelineEvent start_date="8/2020" 
            end_date="5/2022"
            title="Teaching Assistant Lead, Intro to Computer Science"
            place="WashU"
            body= {(
              <>
                  </>
            )}
            />
            )
  )

  timeline_event_arr[3] = (
    (<TimelineEvent start_date="5/2022" 
            end_date="8/2022"
            title="Camp Instructor"
            place="iDTech"
            body= {(
              <>
                  </>
            )}
            />
            )
  )

  timeline_event_arr[2]=(
    (<TimelineEvent start_date="8/2022" 
            end_date="5/2023"
            title="Undergraduate Researcher, Catoptric Surface Project"
            place="WashU"
            body= {(
              <>

                </>
            )}
            />
            )
  )

  timeline_event_arr[1] =(
    (<TimelineEvent start_date="2/2023" 
            end_date="5/2023"
            title="Teaching Assistant, Intro to Parallel Programming"
            place="WashU"
            body= {(
              <>

                </>
            )}
            />
            )
  )

  timeline_event_arr[0]=(
    (<TimelineEvent start_date="6/2023" 
            end_date="8/2023"
            title="IoT-SITY REU"
            place="UC-Irvine"
            body= {(
              <>

                </>
            )}
            />
            )
  )

  //event start, end, body
  const experience_section_body = (
    <>
    <Timeline timeline_event_arr={timeline_event_arr}/>
    </>
  )

  sections_arr.push(
      [ <Section title="Experience" body={experience_section_body}/> , "Experience"]
  )

  // ----

  const research_section_body = (
    
    <div className="mt-2">
    <h4> The Catoptric Surface // WashU </h4>

    <div className=" d-grid gap-3 p-3">

      <TextImageRow 
        text = {
          (<>
          <p> 
            The Catoptric Surface is <span className="txt-h"> cyber-physical system </span> of 600 small motorized mirrors that hang in a sun-lit gallery.
            This project is an interdisciplinary collaboration between WashU's Sam Fox school of architecture and McKelvey school of engineering. 
            
            I worked on this project under <a className = "link-body" href='#'>Professor Roger Chamberlain </a>
            for the 2022-2023 academic year.
          </p>

          <p> 
            This project aims to use this surface to create unique interior ambient lighting conditions.
          </p>
          </>
          )
        }
        
        imageHTMLelements = {
          [(<img src="images/SingleMirror.jpg" className="p-1" height="200px" alt="asdf"/>),
          (<img src="images/SurfaceSideView.jpg" className="p-1" height="200px" alt="asdf"/>)]}
            
            />

      <TextImageRow
        text = {
          <>
          <p>
            Suppose someone in the gallery wants to see a specific lighting pattern on the ceiling.
            How would the Catoptric Surface direct its mirrors to form that pattern?
          </p>
          <p>
            My research tackles this question using the <span className="txt-h"> ray-tracing </span> features 
            readily available in <span className="txt-h"> game engines</span>. I designed and built ray-tracing
            simulations of catoptric surfaces in Unreal Engine 5, an industry standard game engine.
          </p>
          <p>
            I developed a system for building and simulating any catoptric surface in UE5. 
            Explored and tested various <span className="txt-h">optimization algorithms </span> for finding surface configurations.
            And extended the final game to function as a <span className="txt-h"> user interface</span>.
          </p>

          <p> Read <a className="link-body" href="https://sbs.wustl.edu/pubs/acmb18.pdf"> this </a> paper 
    if you want to learn more about the project!</p>

          </>
        }

        imageHTMLelements = {
          [(<img src="images/11-2-22-Research-3.jpg" height="250px" alt="asdf"/>)]}
        
        />

      


    </div>

    
    
    </div>
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


  let container_style= "position-static offset-from-top floats-right bg-success"
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  if (windowSize.current[0] < 1600) {
    container_style = " w-75 offset-from-top"
  }

  //Ok
  //Scrollable div takes up middle part of the entire page
  //has a small invisible box that pushes the rest of the content down to be inline with the navbar

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


        <div className="overflow-auto p-3 w-75 border-0 d-grid gap-3">
              <div className="offset-spacer"></div>
              {sections_arr.map( x => x[0])}

        </div>

    </div>
    

  );
}

export default App;
