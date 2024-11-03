import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Result({ investmentData }) {
    const calculatedValues = calculateInvestmentResults(investmentData);
    const initialInvestment = calculatedValues[0].valueEndOfYear - calculatedValues[0].interest - calculatedValues[0].annualInvestment;

    return (
        <>
            <table id="result">
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Investment Value</th>
                        <th>Interest (Year)</th>
                        <th>Total Interest</th>
                        <th>Invested Capital</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        calculatedValues.map((value) => {
                            const totalInterest = value.valueEndOfYear - value.annualInvestment * value.year - initialInvestment;
                            const totalAmountInvested = value.valueEndOfYear - totalInterest;

                            return (
                                <tr key={value.year}>
                                    <td>{value.year}</td>
                                    <td>{formatter.format(value.interest)}</td>
                                    <td>{formatter.format(value.valueEndOfYear)}</td>
                                    <td>{formatter.format(value.annualInvestment)}</td>
                                    <td>{formatter.format(totalAmountInvested)}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    );
}