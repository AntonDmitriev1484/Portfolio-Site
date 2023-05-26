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

  let sections_arr = []

  const about_section_body = (
    <div>
      <p>Undergraduate <span className="txt-h" >student</span> researcher at Washington University in St. Louis pursuing a Bachelors in Computer Science (2020-2024).</p>
      <p>I'm a senior at WashU looking to pursue a graduate CS education</p>
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
              {/* <p class="timeline__paragraph">
                  Intro to CS is WashU's highest enrolled class, it hires roughly 50 TA's per semester.
              </p>
              <ul>
                  <li>
                      Directed office hours and group learning sessions while also overseeing 30 teaching assistants as a section lead.
                  </li>
                  <li>
                      Graded and provided feedback on student work.
                  </li>
                  <li>
                      Assisted 300+ students in one on one help sessions.
                  </li>
                  
                  </ul> */}
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
              {/* <p class="timeline__paragraph">
                  Suffered a lot
              </p>
              <ul>
                  <li>
                    Taught computer science fundamentals in Python, Java, and Lua to classrooms of 10 K-12 students.
                  </li>
                  <li>
                    Created accelerated curricula for K-12 students derived from university level computer science courses.
                  </li>
                  
                  </ul> */}
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


  let container_style= "container-lg offset-from-top floats-right"
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  if (windowSize.current[0] < 1600) {
    container_style = "container-lg w-75 offset-from-top floats-right"
  }


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

      <div className={container_style}>

        <div className="p-3 border-0 d-grid gap-3">

              {sections_arr.map( x => x[0])}

        </div>

      </div>

    </div>
    

  );
}

export default App;
