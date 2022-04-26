import React from 'react';
import  {BrowserRouter as Router, Routes, Route, Link}  from 'react-router-dom';
import About from "./About/About"
import NotFound from "./NotFound/NotFound"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import Rate from "./Rate/Rate"
import UserInfo from './UserInfo/UserInfo';


class App extends React.Component {
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     "go": "gooooo"
  //   }
  // }



  render(){
    return (
      <div className='site'>

        <Header/>

        <div className='container'>
          <main>

            <Router>
                <Routes>
                  <Route path="/" element={<Rate/>}/>
                  <Route path="/about" element={<About/>}/>
                  <Route path="*" element={<NotFound/>}/>
                </Routes>
            </Router>
            
          </main>
        </div>

        <div className='container' id='cookie_info'>
          <div className='site-content'>
            <div className='well'>
              We use cookie for better experience.&nbsp;<button className='btn btn-primary btn-sm'>
                OK</button>
            </div>
          </div>
        </div>

        <Footer/>
        <UserInfo/>
      </div>
      );
    }
  }
  
  export default App;
  