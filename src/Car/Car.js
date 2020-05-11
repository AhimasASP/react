import React from 'react'
import Radium from 'radium'
import classes from './Car.css'

class Car extends React.Component{

    render() {
        const inputClasses = [classes.input]

        const style = {
            border: '1px solid #ccc',
            borderShadow: '0 4px 5px 0 rgba(0, 0, 0, .14)',
            ':hover' : {
                border: '1px solid #aaa',
                boxShadow: '0 4px 15px 0 rgba(0, 0, 0, .25) ',
                cursor: 'pointer'
            }
        }

        if (this.props.name !== '') {
            inputClasses.push(classes.green)
        } else {
            inputClasses.push(classes.red)
        }

        if (this.props.name.length > 4) {
            inputClasses.push(classes.bold)
        }

        return (
            <div className = {classes.Car} style = {style}>
                <h3>Car name: {this.name}</h3>
                <p>Yaer: {this.year}</p>
                <input
                    type="text"
                    onChange = {this.props.onChangeName}
                    value = {this.props.name}
                    className = {inputClasses.join(' ')}
                />
                <button onClick = {this.props.onDelete}>Delete</button>
                {this.props.children}
            </div>
        )
    }

}

export default Radium(Car)