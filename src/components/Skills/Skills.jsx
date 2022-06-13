import React from "react";

import "../Skills/Skills.scss"



function Skills(){


    return(
    <>
    <div class="container">

    <div class="container__progressbars">

      <div class="progressbar">
        <svg class="progressbar__svg">
          <circle cx="80" cy="80" r="70" class="progressbar__svg-circle circle-html shadow-html"> </circle>
        </svg>
        <span class="progressbar__text shadow-html">HTML</span>
      </div>

      <div class="progressbar">
        <svg class="progressbar__svg">
          <circle cx="80" cy="80" r="70" class="progressbar__svg-circle circle-css shadow-css"> </circle>
        </svg>
        <span class="progressbar__text shadow-css">CSS</span>
      </div>

      <div class="progressbar">
        <svg class="progressbar__svg">
          <circle cx="80" cy="80" r="70" class="progressbar__svg-circle circle-js shadow-js"> </circle>
        </svg>
        <span class="progressbar__text shadow-js">Python</span>
      </div>

      <div class="progressbar">
        <svg class="progressbar__svg">
          <circle cx="80" cy="80" r="70" class="progressbar__svg-circle circle-ts shadow-ts"> </circle>
        </svg>
        <span class="progressbar__text shadow-ts">Django</span>
      </div>

      <div class="progressbar">
        <svg class="progressbar__svg">
          <circle cx="80" cy="80" r="70" class="progressbar__svg-circle circle-scss shadow-scss"> </circle>
        </svg>
        <span class="progressbar__text shadow-scss">JavaScript</span>
      </div>

      <div class="progressbar">
        <svg class="progressbar__svg">
          <circle cx="80" cy="80" r="70" class="progressbar__svg-circle circle-node shadow-node"> </circle>
        </svg>
        <span class="progressbar__text shadow-node">React.js</span>
      </div>

      <div class="progressbar">
        <svg class="progressbar__svg">
          <circle cx="80" cy="80" r="70" class="progressbar__svg-circle circle-react shadow-react"> </circle>
        </svg>
        <span class="progressbar__text shadow-react">SCSS</span>
      </div>
    </div>
    </div>
    
    </>
    )
}

export default Skills