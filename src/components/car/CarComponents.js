import React, {Component} from 'react';
import './Car.css'

class CarComponents extends Component {
    render() {
        let {car, cls} = this.props;
        return (
            <div className={cls}>
                {car.model} - {car.power} - {car.year_of_release}
            </div>
        );
    }
}

export default CarComponents;