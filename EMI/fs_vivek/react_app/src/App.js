// App.js
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      principal: '',
      rate: '',
      time: '',
      emi: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.calculateEMI = this.calculateEMI.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  calculateEMI() {
    const { principal, rate, time } = this.state;
    const p = parseFloat(principal);
    const r = parseFloat(rate) / (12 * 100); // Monthly interest rate
    const n = parseFloat(time) * 12; // Number of months
    const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    this.setState({ emi: emi.toFixed(2) });
  }

  render() {
    return (
      <div>
        <h1>EMI Calculator</h1>
        <div>
          <label>Loan Amount (INR):</label>
          <input type="number" name="principal" value={this.state.principal} onChange={this.handleChange} />
        </div>
        <div>
          <label>Interest Rate (%):</label>
          <input type="number" name="rate" value={this.state.rate} onChange={this.handleChange} />
        </div>
        <div>
          <label>Tenure (Years):</label>
          <input type="number" name="time" value={this.state.time} onChange={this.handleChange} />
        </div>
        <button onClick={this.calculateEMI}>Calculate EMI</button>
        <div>
          <label>EMI (Monthly):</label>
          <span>{this.state.emi}</span>
        </div>
      </div>
    );
  }
}

export default App;
