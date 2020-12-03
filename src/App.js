import React, {Component} from 'react';
import {cars} from "./dataArray/cars";
import CarComponents from "./components/car/CarComponents";




class App extends Component {

    render() {
        return (
            <div>
                {
                    cars.map(car =>{
                        let cls = car.id%2 ? 'even': 'odd';
                        return(
                            <CarComponents
                            car={car}
                            cls={cls}
                            key={car.id}/>)
                    })
                }
            </div>
        );
    }
}

export default App;