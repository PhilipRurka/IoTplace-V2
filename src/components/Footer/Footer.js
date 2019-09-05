import React from 'react';
import setColors from '../styling/colors.js';
import { css } from 'emotion';

const displayInline = `
display: inline-block;
vertical-align: middle;
`

class Footer extends React.Component {
  render() {
    return (
      <div
        className={css`
          height: 150px;
        `}>
        <div
          className={css`
            padding: 64px 0;
            display table;
            margin: auto;
          `}>
          <span
            className={css`
              ${displayInline}
              color: ${setColors.blueHaze};
            `}
          >&copy; 2019 BlueKiwi.Tech | Any love or feedback? Say&nbsp;</span>
          <a
            href='mailto: Hello@IoTplace.com'
            className={css`
              ${displayInline}
              color: ${setColors.brandColorText};
              &:hover {
                color: ${setColors.brandColorTextHover};
              }
            `}
            >Hello@IoTplace.com</a>
        </div>
      </div>
    )
  };
};

export default Footer;