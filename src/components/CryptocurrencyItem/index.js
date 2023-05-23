// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {details} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = details

  return (
    <li className="listSection">
      <div className="imageSection">
        <img src={currencyLogo} alt={currencyName} className="currencyLogo" />
        <p className="name">{currencyName}</p>
      </div>
      <div className="valueSection">
        <p className="name">{usdValue}</p>
        <p className="name">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
