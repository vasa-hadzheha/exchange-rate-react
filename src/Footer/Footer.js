import React from 'react';
import "./Footer.css"


class Footer extends React.Component {

  render(){
    return (
      <footer id='footer' className='footer'>
        <div className='footer-bottom'>
          <div className='container'>
            <div className='flex-container'>
              <div className='flex-item'>
                <h1 className='footer-title'><a href='###'>2022 &copy; React.
                Lite level </a></h1>
                <p className='footer-title'>All Rights Reserved</p>

              </div>
              <div className='flex-item'>
                <div className='module-body'>
                  <ul className='list-unstyled'>
                  <li><a href='####' tooltip="Site map"> Site map</a></li>
                  <li><a href='###' target="_blank" tooltip="Google Sitemap">Google 
                  Sitemap</a></li>
                  </ul>
                </div>
              </div>

              <div className='flex-item'>
                <div className='module-body'>
                  <ul className='list-unstyled'>
                  <li><a href='###' tooltip="Contacts"> Contacts</a></li>
                  <li><a href='###'>Guarantees</a></li>
                  <li><a href='###'>About service</a></li>
                  <li><a href='###'>Conditions</a></li>
                  <li><a href='###'>Consent to use</a></li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className='copyright-bar'>
          <div className='flex-container'>
            <div className='flex-item'>
              <ul className='link'>
                
              </ul>
            </div>
            <div className='flex-item'>
              <div className='clearfix payment-methods'>
                <ul>
                  <img src='###' data-toggle="tooltip" 
                  data-placement="top" data-original-title="####" alt=""/>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      );
  }
}

export default Footer;
