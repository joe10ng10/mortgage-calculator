import React from 'react'
import SliderComponent from './SliderComponent'


const bank_limit = 10000
const bank_minimum = 1000




const SliderSelect = ({data, setData}) => {
  return (
    <>
      
      <SliderComponent
        label="Home Value"
        min={bank_minimum}    
        max= {bank_limit}      
        defaultValue={data.homeValue}      
        step={100}              
        onChange={(e, value) => 
          setData({
            ... data,
            downPayment: value * 0.2,
            loanAmount: value * 0.8,
            homeValue: value})}
        unit="$"                 
        amount={data.homeValue}            
        value={data.homeValue}
      />

      <SliderComponent
        label="Down Payment"
        min={0}
        max={data.homeValue}
        defaultValue={data.downPayment}
        step={100}
        onChange={(e, value) => 
          setData({
            ...data,
            loanAmount: (data.homeValue - value), 
            downPayment: value})}
        unit="$"
        amount={data.downPayment}
        value={data.downPayment}
      />

      <SliderComponent
        label="Loan Amount"
        min={0}
        max={data.homeValue}
        defaultValue={data.loanAmount}
        step={100}
        onChange={(e, value) => 
          setData({
            ...data,
            downPayment: (data.homeValue - value), 
            loanAmount: value})}
        unit="$"
        amount={data.loanAmount}
        value={data.loanAmount}
      />

      <SliderComponent
        label="Interest Rate"
        min={2}
        max={18}
        defaultValue={data.interestRate}
        step={0.5}
        onChange={(e, value) => setData({...data, interestRate: value})}
        unit="%"
        amount={data.interestRate}
        value={data.interestRate}
      />
      
    </>
  )
}

export default SliderSelect
