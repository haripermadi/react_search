import React, {Component} from 'react'
import './Tickers.css'
import Crypto from './Crypto.js'
import axios from 'axios'

class Tickers extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [
        {
          id: "bitcoin",
          price: "1",
          symbol: "BTC",
          price_usd: "1",
          percent_change_1h: "0",
          percent_change_24h: "0",
          percent_change_7d: "0",
        },
        {
          id: "ethereum",
          price: "1",
          symbol: "ETH",
          price_usd: "1",
          percent_change_1h: "0",
          percent_change_24h: "0",
          percent_change_7d: "0",
        },
        {
          id: "litecoin",
          price: "1",
          symbol: "LTC",
          price_usd: "1",
          percent_change_1h: "0",
          percent_change_24h: "0",
          percent_change_7d: "0",
        }
      ]
    }
  }
  render () {
    let tickers = this.state.data.map((value) =>
      <Crypto data={value} key={value.id}/>
      // <li key={value.id}>
      //     <h3>{value.id}</h3>
      //     <h4>{value.price} USD</h4>
      // </li>
    )
    return (
      <div className="tickers-container">
      <ul className="tickers">{tickers}</ul>
      <p>Information updated every minutes loh!</p>

      </div>
    )
  }

  fetchCurrencyData () {
    axios.get("https://api.coinmarketcap.com/v1/ticker/?limit=10")
      .then(response => {
        console.log('res api==', response)
          let wanted = ["bitcoin", "ethereum", "litecoin"];
          let result = response.data.filter(currency => wanted.includes(currency.id));
          this.setState({ data: result});
      })
      .catch(err => console.log(err));
  }

  componentDidMount () {
    this.fetchCurrencyData()
    this.interval = setInterval(() => this.fetchCurrencyData(), 60 * 1000)
  }
}

export default Tickers