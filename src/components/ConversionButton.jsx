import PropTypes from "prop-types";
import convertCurrency from "../utils/convertCurrency.js";
import style from './components.module.css'

const ConversionButton = ({amount, fromCurrency, setConvertedAmount, toCurrency, rates}) => {
    function convert() {
        if (rates[fromCurrency] && rates[toCurrency]) {
            const result = convertCurrency(amount, rates[fromCurrency], rates[toCurrency]);
            setConvertedAmount(result);
        }
    }

    return (
        <>
            <button
                className={style.convert_button}
                onClick={() => convert()}
            >
                Convert
            </button>
        </>
    )
}

ConversionButton.propTypes = {
    amount: PropTypes.number.isRequired,
    fromCurrency: PropTypes.string.isRequired,
    setConvertedAmount: PropTypes.func.isRequired,
    toCurrency: PropTypes.string.isRequired,
    rates: PropTypes.object.isRequired,
};

export default ConversionButton