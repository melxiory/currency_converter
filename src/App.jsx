import {useState, useEffect} from 'react';
import CurrencyInput from './components/CurrencyInput';
import ResultDisplay from './components/ResultDisplay';
import ConversionButton from './components/ConversionButton';
import style from './App.module.css';

function App() {
    const [rates, setRates] = useState({});
    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('EUR');
    const [convertedAmount, setConvertedAmount] = useState(null);

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setRates(data.rates);
            } catch (error) {
                console.error('Error:', error.message);
            }
        };

        fetchRates();
    }, []);

    useEffect(() => {
        setConvertedAmount(null)
    }, [amount, fromCurrency, toCurrency]);

    return (
        <div className={style.app}>
            <h1 className={style.title}>Конвертер валют</h1>
            <CurrencyInput
                amount={amount}
                setAmount={setAmount}
                fromCurrency={fromCurrency}
                setFromCurrency={setFromCurrency}
                toCurrency={toCurrency}
                setToCurrency={setToCurrency}
                rates={rates}
            />
            <ConversionButton
                amount={amount}
                fromCurrency={fromCurrency}
                setConvertedAmount={setConvertedAmount}
                toCurrency={toCurrency}
                rates={rates}
            />
            {convertedAmount !== null && <ResultDisplay
                result={convertedAmount}
                toCurrency={toCurrency}
                amount={amount}
                fromCurrency={fromCurrency}
            />}
        </div>
    );
};

export default App;