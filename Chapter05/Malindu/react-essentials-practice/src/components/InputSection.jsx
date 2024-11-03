
export default function InputSection({ investmentData, investmentValuesOnChange }) {

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="txtInitialInvestment">Initial Investment</label>
                    <input type="number" name="txtInitialInvestment" required value={investmentData.initialInvestment} onChange={(event) => investmentValuesOnChange('initialInvestment', event.target.value)} />
                </p>
                <p>
                    <label htmlFor="txtAnnualInvestment">Annual Investment</label>
                    <input type="number" name="txtAnnualInvestment" required value={investmentData.annualInvestment} onChange={(event) => investmentValuesOnChange('annualInvestment', event.target.value)} />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="txtExpectedReturn">Expected Return</label>
                    <input type="number" name="txtExpectedReturn" required value={investmentData.expectedReturn} onChange={(event) => investmentValuesOnChange('expectedReturn', event.target.value)} />
                </p>
                <p>
                    <label htmlFor="txtDuration">Duration</label>
                    <input type="number" name="txtDuration" required value={investmentData.duration} onChange={(event) => investmentValuesOnChange('duration', event.target.value)} />
                </p>
            </div>
        </section>
    );
}