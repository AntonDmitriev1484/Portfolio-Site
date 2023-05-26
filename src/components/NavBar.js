import React from "react"

function NavBar(props) {
  const {first, last, links_arr} = props;

  return (
    <>
        <ul className="nav ms-4 flex-column offset-from-top2 position-fixed abs-float-left text-light">
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
