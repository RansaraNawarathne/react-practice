
export default function InputSection() {
    return (
        <div id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="txtInitialInvestment">Initial Investment</label>
                    <input type="text" name="txtInitialInvestment" />
                </p>
                <p>
                    <label htmlFor="txtAnnualInvestment">Annual Investment</label>
                    <input type="text" name="txtAnnualInvestment" />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="txtExpectedReturn">Expected Return</label>
                    <input type="text" name="txtExpectedReturn" />
                </p>
                <p>
                    <label htmlFor="txtDuration">Duration</label>
                    <input type="number" name="txtDuration" />
                </p>
            </div>
        </div>
    );
}