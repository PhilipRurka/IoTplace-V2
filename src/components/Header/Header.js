import React from 'react';
import { css } from 'emotion';

const navLi = `
list-style-type: none;
display: inline-block;
vertical-align: middle;
`

const navA = `
font-size: 14px;
font-weight: 900;
text-transform: uppercase;
letter-spacing: 1px;
transition: color 0.2s ease;
&:hover {
  color: #5645ec;
}
`

class Header extends React.Component {

  render() {
    return (
      <div className='nav-wrapper'>
        <div
          className={css`
            display: flex;
            justify-content: space-between;
            padding: 23px 0;
          `}>
          <a
            className={css`
              width: 100px;
              display: table;
            `}
            href='/'>
            <img
              src='images/iotplace.svg'
              alt='IoTplace Logo'
              className={css`
                height: 100%;
                width: 100%;
              `}/>
          </a>
          <div>
            <ul
              className={css`
                margin: 7px 0;
              `}>
              <li
                className={css`
                  ${navLi}  
                `}>
                <a
                  href=""
                  className={css`
                    ${navA}
                  `}>Discover</a>
              </li>
              <li
                className={css`
                  ${navLi}  
                  margin-left: 20px;
                `}>
                <a
                  href=""
                  className={css`
                    ${navA}
                  `}>Whatch List</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  };
};

export default Header;