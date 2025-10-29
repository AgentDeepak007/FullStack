import React, { useState } from 'react';

const TaxCalculationForm = () => {
    const [income, setIncome] = useState('');
    const [taxRate, setTaxRate] = useState('');
    const [tax, setTax] = useState(null);

    const calculateTax = (e) => {
        e.preventDefault();
        const incomeNum = parseFloat(income);
        const taxRateNum = parseFloat(taxRate);

        if (!isNaN(incomeNum) && !isNaN(taxRateNum)) {
            const calculatedTax = incomeNum * (taxRateNum / 100);
            setTax(calculatedTax);
        }
    };

    return (
        <div>
            <h2>Tax Calculation Form</h2>
            <form onSubmit={calculateTax}>
                <div>
                    <label>Income:</label>
                    <input
                        type="number"
                        value={income}
                        onChange={(e) => setIncome(e.target.value)}
                        placeholder="Enter your income"
                    />
                </div>
                <div>
                    <label>Tax Rate (%):</label>
                    <input
                        type="number"
                        value={taxRate}
                        onChange={(e) => setTaxRate(e.target.value)}
                        placeholder="Enter tax rate"
                    />
                </div>
                <button type="submit">Calculate Tax</button>
            </form>
            {tax !== null && (
                <div>
                    <h3>Calculated Tax: INR{tax.toFixed(2)}</h3>
                </div>
            )}
        </div>
    );
};

export default TaxCalculationForm;
