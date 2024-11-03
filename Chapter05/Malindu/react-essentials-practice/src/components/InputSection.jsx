import { useState } from "react";

export default function InputSection() {
    const [investmentData, setInvestmentData] = useState({
        initialInvestment: 10000,
        annualInvestment: 5000,
        expectedReturn: 50000,
        duration: 10
    });

    function handleInvestmentDataChanges(valueKey, value) {
        setInvestmentData((prevData) => {
            return {
                ...prevData,
                [valueKey]: value
            }
        });
    }

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="txtInitialInvestment">Initial Investment</label>
                    <input type="text" name="txtInitialInvestment" required value={investmentData.initialInvestment} onChange={(event) => handleInvestmentDataChanges('initialInvestment', event.target.value)} />
                </p>
                <p>
                    <label htmlFor="txtAnnualInvestment">Annual Investment</label>
                    <input type="text" name="txtAnnualInvestment" required value={investmentData.annualInvestment} onChange={(event) => handleInvestmentDataChanges('annualInvestment', event.target.value)} />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="txtExpectedReturn">Expected Return</label>
                    <input type="text" name="txtExpectedReturn" required value={investmentData.expectedReturn} onChange={(event) => handleInvestmentDataChanges('expectedReturn', event.target.value)} />
                </p>
                <p>
                    <label htmlFor="txtDuration">Duration</label>
                    <input type="number" name="txtDuration" required value={investmentData.duration} onChange={(event) => handleInvestmentDataChanges('duration', event.target.value)} />
                </p>
            </div>
        </section>
    );
}