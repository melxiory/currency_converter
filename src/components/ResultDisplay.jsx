import PropTypes from "prop-types";
import style from './components.module.css'

const ResultDisplay = ({ result, toCurrency, amount, fromCurrency }) => {
    return (
        <div className={style.result_display}>
            <p style={{ fontWeight: '800' }}>{amount} {fromCurrency} = {result.toFixed(2)} {toCurrency}</p>
        </div>
    );
};

ResultDisplay.propTypes = {
    result: PropTypes.number.isRequired,
    toCurrency: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    fromCurrency: PropTypes.string.isRequired
};

export default ResultDisplay;