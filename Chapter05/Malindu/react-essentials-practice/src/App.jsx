import { useState } from "react";
import Header from "./components/Header"
import InputSection from "./components/InputSection"
import Result from "./components/Result"

function App() {

  const [investmentData, setInvestmentData] = useState({
    initialInvestment: 10000,
    annualInvestment: 5000,
    expectedReturn: 5,
    duration: 10
  });

  function handleInvestmentDataChanges(valueKey, value) {
    setInvestmentData((prevData) => {

      return {
        ...prevData,
        [valueKey]: new Number(value)
      }
    });
  }

  return (
    <>
      <Header />
      <InputSection investmentData={investmentData} investmentValuesOnChange={handleInvestmentDataChanges} />
      <Result investmentData={investmentData} />
    </>
  )
}

export default App
