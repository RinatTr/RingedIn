import React from 'react';
import { caseToColor } from '../util/display.js'
import '../css/Rings.css';

const Rings = ({count}) => {
  return (<>
            <div className="ring" id={caseToColor(1, count)}>
              <div className="ring" id={caseToColor(2, count)}>
                <div className="ring" id={caseToColor(3, count)}>
                  <div className="ring" id={caseToColor(4, count)}>
                    <div className="ring" id={caseToColor(5, count)}>
                      <div className="ring" id={caseToColor(6, count)}>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>)
};

export default Rings;

// caseToColor
// takes in ring id and number of wrong Guesses
// if not within wrong guesses, output original ring id string
// if within wrong guesses, output id to be "grey"
// style={{"backgroundColor":"white"}}
