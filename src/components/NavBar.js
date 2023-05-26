import React from "react"

function NavBar(props) {
  const {first, last, links_arr} = props;

  //Should be styled to top
  //doesn't properly fit on laptop screen

  return (
    <>
        <ul className="nav ms-3 w-25 flex-column offset-from-top2 position-fixed abs-float-left text-light">
          <h1>{first}</h1>
          <h1>{last}</h1>

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
