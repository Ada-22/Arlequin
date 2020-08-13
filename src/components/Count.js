import React, { Component } from 'react'

export default class Contador extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contador: 0
        }
    }
    add = () => {
        this.changeCount(this.state.contador + 1)
    }

    subtract = () => {
        this.changeCount(this.state.contador - 1)
    }

    changeCount = (n) => {
        if(n >= 0 && n <= 10)
        this.setState({ contador: n })
    }

    render() {
        return (
            <div className='card bg-dark'>
                <div className='card-body bg-dark'>
                    <p className='dark'>Contador</p>
                    <h3 id="contadorValue">{this.state.contador}</h3>
                    <button id="restar" onClick={this.subtract}>-</button>
                    &nbsp;
                    <button id="sumar"onClick={this.add}>+</button>
                    <br/>
                </div>
            </div>
        )
    }
}