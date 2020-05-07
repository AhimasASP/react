import React from 'react'
import Radium from 'radium'
import './Car.css'

const Car = props => {

    const inputClasses = ['input']
    
    const style = {
        border: '1px solid #ccc',
        borderShadow: '0 4px 5px 0 rgba(0, 0, 0, .14)',
        ':hover' : {
            border: '1px solid #aaa',
            boxShadow: '0 4px 15px 0 rgba(0, 0, 0, .25) ',
            cursor: 'pointer'
        }
    }
    
    if (props.name !== '') {
        inputClasses.push('green')
    } else {
        inputClasses.push('red')
    }
    
    if (props.name.length > 4) {
        inputClasses.push('bold')
    }
    
        return (
        <div className = "Car" style = {style}>
            <h3>Car name: {props.name}</h3>
            <p>Yaer: {props.year}</p>
            <input
            type="text"
            onChange = {props.onChangeName} 
            value = {props.name}
            className = {inputClasses.join(' ')}
            />
            <button onClick = {props.onDelete}>Delete</button>
            {props.children}
        </div>
        )
    }

export default Radium(Car)