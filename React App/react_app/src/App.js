import React, { Component } from 'react';

class NumberManipulator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: '',
      result: ''
    };
  }

  handleChange = (event) => {
    this.setState({ number: event.target.value });
  }

  findFactorial = () => {
    const num = parseInt(this.state.number);
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
      factorial *= i;
    }
    this.setState({ result: `Factorial of ${num} is ${factorial}` });
  }

  checkPrime = () => {
    const num = parseInt(this.state.number);
    let isPrime = true;
    if (num === 1) {
      isPrime = false;
    } else {
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          isPrime = false;
          break;
        }
      }
    }
    const primeResult = isPrime ? `${num} is a Prime number` : `${num} is not a Prime number`;
    this.setState({ result: primeResult });
  }

  checkArmstrong = () => {
    const num = parseInt(this.state.number);
    let sum = 0;
    let temp = num;
    while (temp > 0) {
      const digit = temp % 10;
      sum += digit ** 3;
      temp = parseInt(temp / 10);
    }
    const armstrongResult = sum === num ? `${num} is an Armstrong number` : `${num} is not an Armstrong number`;
    this.setState({ result: armstrongResult });
  }

  clear = () => {
    this.setState({ number: '', result: '' });
  }

  render() {
    return (
      <div>
        <label>Number:</label>
        <input
          type="number"
          value={this.state.number}
          onChange={this.handleChange}
        />
        <br />
        <button onClick={this.findFactorial}>Find Factorial</button>
        <button onClick={this.checkPrime}>Check Prime</button>
        <button onClick={this.checkArmstrong}>Check Armstrong</button>
        <button onClick={this.clear}>Clear</button>
        <br />
        <label>Result:</label>
        <div>{this.state.result}</div>
      </div>
    );
  }
}

export default NumberManipulator;
