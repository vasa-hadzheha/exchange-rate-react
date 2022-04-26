import React from 'react';
import "./Rate.css"
import Calc from '../Calc/Calc';



class Rate extends React.Component {
  constructor(props){
    super(props)
    this.state={
      'data': '',
      'currencyRate':{},
    }
    this.currency = ['EUR', 'RUB', 'UAH', 'CAD'];
    this.getRate();
  }
 
  getRate=()=>{
    fetch("https://open.er-api.com/v6/latest/USD")
    .then(data =>{
      return data.json();
    })
    .then(data =>{
      console.log(data);
      this.setState({date: data.time_last_update_utc.slice(0,16)});
      let result ={};
      for (let i =0; i < this.currency.length; i++){
        result[this.currency[i]] = data.rates[this.currency[i]];
      }
      console.log(result);
      this.setState({currencyRate: result});
    })
  }

  render(){
    return (
        <div className='rate'>
          <h3>Exchange rate today ({this.state.date})</h3>
          <div className='flex-container'>
            {Object.keys(this.state.currencyRate).map((keyName,i)=>(

              <div className='block flex-item' key={keyName}>
                <div className='currency-name'><strong>{keyName}</strong></div>
                <div className='currency-in'><strong>{this.state.currencyRate[keyName].toFixed(2)}</strong></div>
                <p> *Can buy for 1$ </p>
              </div>

            ))}
          </div>
          <Calc rate={this.state.currencyRate}/>
        </div>
      );
  }
}

export default Rate;
