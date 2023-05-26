import React from "react"
import { useRef } from 'react';

function NavBar(props) {
  const {first, last, links_arr} = props;

  //Should be styled to top
  //doesn't properly fit on laptop screen
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  let nav_styles = "nav ms-3 flex-column offset-from-top2 position-fixed abs-float-left text-light"

  
  console.log(windowSize.current[0])

  let name_jsx = (
    <>
    <h1>{first}</h1>
          <h1>{last}</h1>

    </>
  )

  if (windowSize.current[0] < 1600) {
      //nav_styles = "nav ms-3  position-fixed text-light"
      name_jsx = (
        <>
        <h3>{first}</h3>
            <h3>{last}</h3>
        {/* <div className="bg-dark-subtle border-light"> */}
          {/* <li class="nav-item text-l">
            <h4>{first}</h4>
          </li>
          <li class="nav-item text-dark">
            <h4>{last}</h4>
          </li> */}
        {/* </div> */}

    
        </>
      )
  }

  return (
    <>
        <ul className={nav_styles}>
          
          {name_jsx}

          { links_arr.map( (x) => {
              return (
                      <li class="nav-item text-light">
                        <a  className="link-sidebar h5" href="#">{x}</a>
                      </li>
                      )
            })
          }
         

        </ul>
    </>
  );
}

export default NavBar;
