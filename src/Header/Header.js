import React from 'react';
import "./Header.css";
import Nav from "../Nav/Nav"


class Header extends React.Component {
  // constructor(props){
  //   super(props)
    
  // }



  render(){
    return (
        <header>
          <div className='top-bar animate-dropdown'></div>
          <div className='main-hader'>
            <div className='container'>
              <h1 className='site-title'>React lite level learning</h1>

            </div>
          </div>
          <Nav/>
        </header>
      );
  }
}

export default Header;
