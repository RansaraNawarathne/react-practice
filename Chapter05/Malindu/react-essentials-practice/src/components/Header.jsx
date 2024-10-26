import investmentCalculatorLogoImg from './../assets/investment-calculator-logo.png'

export default function Header () {
    return (
        <dir id="header">
            <img src={investmentCalculatorLogoImg} alt="Investment Calculator Logo" />
            <h1>Investment Calculator</h1>
        </dir>
    );
}