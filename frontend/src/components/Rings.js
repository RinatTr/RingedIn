import React from 'react';
import { caseToColor } from '../util/display.js'
import '../css/Rings.css';

const Rings = ({count, result}) => {
  return (<>
            <div className="ring" id={caseToColor(1, count)}>
              <div className="ring" id={caseToColor(2, count)}>
                <div className="ring" id={caseToColor(3, count)}>
                  <div className="ring" id={caseToColor(4, count)}>
                    <div className="ring" id={caseToColor(5, count)}>
                      <div className="ring" id={caseToColor(6, count)}>
                        <div className="result-display">
                          {result.isEnd ? (result.isWin ? "I guess you WON!" : "I guess you LOST!") : ""}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>)
};

export default Rings;
