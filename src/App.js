//import Logo from "./logo.svg";
import "./App.css";
import  Section  from "./components/Section";
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/hero.css';
import Timeline from './components/Timeline';
import TimelineEvent from './components/TimelineEvent';
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
    <p> 
      The Catoptric Surface is an interdisciplinary collaboration between WashU's
      Sam Fox school of architecture and McKelvey school of engineering. 
      
      I worked on this project under <a className = "link-body" href='#'>Professor Roger Chamberlain</a>
      for one academic year; I focused on designing and building 
      <span className="txt-h"> ray-tracing simulations</span> of catoptric surfaces
       in Unreal Engine 5, an industry standard game engine.
       </p>

    <p>
      Physically, this looks like an array of 600 mirrors suspended along
      the windows of a lecture hall. Each mirror has individual pan-tilt controls,
      and as a result can generate unique ambient lighting patterns within the 
      atrium it has been set up in.
    </p>

    <img src="logo512.png" className="bg-success" alt="asdf"/>

    <p>
      What if you wanted to create a specific lighting pattern on the atrium ceiling?
      You need to employ some sort of <span className="txt-h"> optimization algorithm </span>
      to the position of every mirror in the array, such that each mirror reflects light
      closer to the desired target.
    </p>

    <p> Read <a className="link-body" href="https://sbs.wustl.edu/pubs/acmb18.pdf"> this </a> paper, if you want to learn more!</p>
    
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

  //Might be easiest to just put a blank section at the top

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


      {/* <div className={container_style}> */}


        <div className="overflow-auto p-3 w-75 border-0 d-grid gap-3">
        <div className="offset-spacer"></div>
              {sections_arr.map( x => x[0])}

        </div>

      {/* </div> */}

    </div>
    

  );
}

export default App;
