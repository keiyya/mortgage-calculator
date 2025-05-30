import { useState } from "react";

import Illustration from "../src/assets/images/illustration-empty.svg";
import Calculator from "../src/assets/images/icon-calculator.svg";

export default function App() {
  const [mortgageAmount, setMortgageAmount] = useState("");
  const [mortgageTerm, setMortgageTerm] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [mortgageType, setMortgageType] = useState("");

  function handleAmountChange(e) {
    setMortgageAmount(e.target.value);
    console.log(mortgageAmount);
  }

  function handleTermChange(e) {
    setMortgageTerm(e.target.value);
    console.log(mortgageTerm);
  }

  function handleRateChange(e) {
    setInterestRate(e.target.value);
    console.log(interestRate);
  }

  return (
    <main className="bg-neutral-white flex flex-col w-2/5 mx-auto lg:w-4/5 lg:flex-row">
      {/* Calculator */}
      <div className="flex-1 space-y-2 bg-neutral-white text-neutral-slate900 p-7 rounded-t-lg g:rounded-t-none lg:rounded-l-lg">
        <div className="flex flex-col  p-5 md:flex-row md:justify-between">
          <h1 className="font-bold">Mortgate Calculator</h1>
          <button>Clear All</button>
        </div>
        <Form
          mortgageTerm={mortgageTerm}
          mortgageAmount={mortgageAmount}
          interestRate={interestRate}
          mortgageType={mortgageType}
          onHandleAmountChange={handleAmountChange}
          onHandleTermChange={handleTermChange}
          onHandleRateChange={handleRateChange}
        />
      </div>

      {/* Results */}
      <div className="flex-1 bg-neutral-slate900 text-neutral-white p-5 space-y-4 rounded-b-lg lg:rounded-b-none lg:rounded-r-lg lg:rounded-bl-[6rem]">
        <div className="flex flex-col items-center justify-center gap-4">
          <img src={Illustration} className="w-[7rem]" />
          <h2>Results shown here</h2>
        </div>
        <p className="text-neutral-slate700 text-center">
          Complete the form and click "Calculate repayments" to see what your
          monthly repayments would be.
        </p>
      </div>
    </main>
  );
}

function Form({
  mortgageAmount,
  mortgageTerm,
  interestRate,
  mortgageType,
  onHandleAmountChange,
  onHandleTermChange,
  onHandleRateChange,
}) {
  return (
    <form className="space-y-5">
      <FormInput
        label="Mortgage Amount"
        prefix="£"
        handleChange={onHandleAmountChange}
        value={mortgageAmount}
      />

      <div className="flex flex-col gap-4 lg:flex-row">
        <FormInput
          label="Mortgage Term"
          suffix="years"
          wrapperClass="flex-1"
          handleChange={onHandleTermChange}
          value={mortgageTerm}
        />
        <FormInput
          label="Interest Rate"
          suffix="%"
          wrapperClass="flex-1"
          handleChange={onHandleRateChange}
          value={interestRate}
        />
      </div>

      <div className="">
        <h2>Mortgage Type</h2>
        <RadioInput label="Repayment" name="Mortgage Type" />
        <RadioInput label="Interest Only" name="Mortgage Type" />
      </div>
      <button className="flex items-center justify-center gap-2 bg-primary-lime p-3 rounded-full">
        <img src={Calculator} alt="Calculator Icon" />
        Calculate Repayments
      </button>
    </form>
  );
}

function FormInput({
  label,
  prefix,
  suffix,
  wrapperClass,
  handleChange,
  value,
}) {
  return (
    <div
      className={`flex flex-col gap-4 my-3 text-neutral-slate300 ${wrapperClass}`}
    >
      <label className="">{label}</label>

      <div className="relative h-10">
        {prefix && (
          <span className="absolute left-0 top-0 flex items-center h-full text-neutral-slate500 bg-neutral-slate300 px-2 py-auto">
            {prefix}
          </span>
        )}

        {suffix && (
          <span className="absolute right-0 top-0 flex items-center h-full text-neutral-slate500 bg-neutral-slate300 px-2 py-auto">
            {suffix}
          </span>
        )}
        <input
          type="number"
          className={`w-full h-full border-none outline outline-neutral-slate300 text-neutral-slate900 font-bold rounded-xs py-2 focus:outline-primary-lime ${
            prefix ? "pl-10" : "pl-3"
          } ${suffix ? "pr-10" : "pr-3"}`}
          value={value}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

function RadioInput({ label, name }) {
  return (
    <label className="flex items-center gap-2 text-neutral-slate300 outline outline-neutral-slate300 rounded-xs p-2 my-2">
      <input type="radio" value={label} name={name} />
      {label}
    </label>
  );
}
