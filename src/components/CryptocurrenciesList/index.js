// Write your JS code here
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import {Component} from 'react'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {cryptoList: [], isLoader: true}

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    const response = await fetch(
      ' https://apis.ccbp.in/crypto-currency-converter',
    )
    const userData = await response.json()
    const fetchedList = userData.map(eachCurrency => ({
      id: eachCurrency.id,
      currencyLogo: eachCurrency.currency_logo,
      currencyName: eachCurrency.currency_name,
      euroValue: eachCurrency.euro_value,
      usdValue: eachCurrency.usd_value,
    }))

    this.setState({cryptoList: fetchedList, isLoader: false})
  }

  render() {
    const {cryptoList, isLoader} = this.state
    console.log(cryptoList)
    return (
      <div className="table">
        {isLoader ? (
          <Loader type="Rings" color="#ffffff" height={80} width={80} />
        ) : (
          <>
            <h1 className="heading1">CryptoCurrency Tracker</h1>

            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
              className="cryptoImage"
            />

            <ul>
              <li className="listHeader">
                <h1 className="type">Coin Type</h1>

                <div className="usdSection">
                  <p className="type">USD</p>
                  <p className="type">EURO</p>
                </div>
              </li>
              {cryptoList.map(each => (
                <CryptocurrencyItem details={each} key={each.id} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}
export default CryptocurrenciesList
