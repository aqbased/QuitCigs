import React from 'react'

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column 1 */}
          <div className="col">
            <h4>Contact</h4>
            <ul className="list-unstyled">
              <li>QuitCigs@quitcigsnow.com</li>
              <li>1-800-QUITNOW (784-8669)</li>
              <li></li>
            </ul>
          </div>
          {/* Column 2 */}
          <div className="col">
            <h4>RESOURCES</h4>
            <ul className="list-unstyled">
              <li><a href='https://smokefree.gov/'>Smokefree.gov</a></li>
              <li><a href='https://www.cdc.gov/tobacco/campaign/tips/quit-smoking/index.html'>Tips from former smokers</a></li>
              <li><a href='https://www.heart.org/en/healthy-living/healthy-lifestyle/quit-smoking-tobacco/help-i-want-to-quit-smoking'>More Resources</a></li>
            </ul>
          </div>
          {/* Column 3 */}
          <div className="col">
            <h4>ABOUT US</h4>
            <ul className="list-unstyled">
              <li><a href='#'>Our Story</a></li>
              <li><a href='#'>Leadership</a></li>
              <li><a href='#'>Blog</a></li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            Copyright &copy; 2021 - by <a href="https://github.com/aqbased" className="button gitRepo" data-abc="true">aqbased</a> | All rights reserved
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
