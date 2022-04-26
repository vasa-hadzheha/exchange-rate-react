import React from "react";

class UserInfo extends React.Component {
    constructor(props){
      super(props)
      this.state={

      }
      this.timeOpened = new Date();
        this.timezone = (new Date()).getTimezoneOffset()/60;
      this.ip();
      console.log(this.battery());
      console.log(this.position());
      console.log(this.dataStorage());
      console.log(this.referrer());
    //   console.log(this.previousSites());
    //   console.log(this.sizeScreen());
    }
    // previousSites=()=>{
    //     /**
    //      * integer representing the number of elements in the session history
    //      */
    //     return history.length
    // }

    referrer=()=>{
        /**
         * property returns the URI of the page that linked to this page.
         */
        return document.referrer
    }
    dataStorage=()=>{return localStorage}
    // sizeScreen=()=>{
    //     return console.log({
    //         width : screen.width,
    //         height: screen.height,
    //         clientWidth: document.body.clientWidth,
    //         clientHeight: document.body.clientHeight,
    //         innerWidth : window.innerWidth,
    //         innerHeight : window.innerHeight,
    //         screenAvailWidth: screen.availWidth,
    //         screenAvailHeight: screen.availHeight,
    //         colorDepth : screen.colorDepth,
    //         pixelDepth : screen.pixelDepth

    //     })
    // }

    position=async()=>{
        const pos = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
          });
      
          return {
            long: pos.coords.longitude,
            lat: pos.coords.latitude,
            accuracy: pos.coords.accuracy,
            altitude: pos.coords.altitude,
            heading : pos.coords.heading,
            speed : pos.coords.speed,
            timestamp : pos.timestamp,
          };
    }

    battery= async ()=>{
        /**
         * charging
         * chargingTime
         * level
         */
        return await navigator.getBattery();
      
    }
    ip= async ()=>{
        /**
         *  city
         *  continent
         *  countryCode
         *  countryName
         *  ipAddress
         *  statProv
         */
        let res =  await (await fetch('https://api.db-ip.com/v2/free/self'));
        let data = await res.json();
        return console.log(data);
    }
  
    render(){
      return (
        <div>

        </div>
        );
    }
  }
  
  export default UserInfo;
  