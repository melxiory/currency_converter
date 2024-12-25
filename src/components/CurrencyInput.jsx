import PropTypes from 'prop-types';
import style from './components.module.css'

const CurrencyInput = ({amount, setAmount, fromCurrency, setFromCurrency, toCurrency, setToCurrency, rates}) => {
    return (
        <div>
            <input
                className={style.currency_input}
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <div className={style.selects}>
                <select
                    value={fromCurrency}
                    onChange={(e) => setFromCurrency(e.target.value)}
                    className={style.currency_select}
                >
                    {Object.keys(rates).map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
                <span> to </span>
                <select
                    value={toCurrency}
                    onChange={(e) => setToCurrency(e.target.value)}
                    className={style.currency_select}
                >
                    {Object.keys(rates).map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

CurrencyInput.propTypes = {
    amount: PropTypes.number.isRequired,
    setAmount: PropTypes.func.isRequired,
    fromCurrency: PropTypes.string.isRequired,
    setFromCurrency: PropTypes.func.isRequired,
    toCurrency: PropTypes.string.isRequired,
    setToCurrency: PropTypes.func.isRequired,
    rates: PropTypes.object.isRequired,
};

export default CurrencyInput;