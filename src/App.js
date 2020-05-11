import React, {Component} from 'react';
import './App.scss';
import Car from './Car/Car.js'

class App extends Component {

    constructor(props) {
        super(props)

        console.log('App constructor')

        this.state = {
            cars: [
                {name: "Acura", year: 2000},
                {name: "Ford", year: 2010},
                {name: "Audi", year: 2015},
                {name: "Peugeot", year: 2014}
            ],
            pageTitle : "React Components",
            showCars: false
        }
    }

toggleCarHandler = (newTitle) => {
      this.setState({
      showCars: !this.state.showCars
   })
 }

onChangeName(name, index) {
  const car = this.state.cars[index]
  car.name = name
  const cars = this.state.cars.concat()
  cars[index] = car
  this.setState({cars})
}

deleteHandler(index) {
  const cars = this.state.cars.concat()
  cars.splice(index, 1)
  this.setState({cars})
}

componentWillMount() {
        console.log('App componentWillMount')
}

componentDidMount() {
        console.log('App componentDidMount')
}

    render() {
        console.log('App render')
  const divStyle = {
    textAlign: 'center'
  }

  let cars = null

  if(this.state.showCars) {
    cars = this.state.cars.map((car, index) => {
      return (
          <Car
          key = {index}
          name = {car.name}
          year = {car.year}
          onDelete = {this.deleteHandler.bind(this, index)}
          onChangeName = {event => {this.onChangeName(event.target.value, index)}}
          />)
      })
  }
  return (
    <div style = {divStyle}>
      {/*<h1>{this.state.pageTitle}</h1>*/}
      <h1>{this.props.title}</h1>
      <button
            className={'AppButton'}
          onClick = {this.toggleCarHandler}>Toggle cars</button>
       <div style ={{
         width: 400,
         margin: 'auto',
         paddingTop: '20px'
       }}>
         {cars}
         </div>      
    </div>
  )
}

}

export default App;
