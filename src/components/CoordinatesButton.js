// Code CoordinatesButton Component Here
import React, {Component} from 'react' 

class CoordinatesButton extends Component {

    handleClick = (event) => {
        const arr = [event.clientX, event.clientY]
        return this.props.onReceiveCoordinates(arr)
    }

    render() {
        return <button onClick={this.handleClick}></button>
    }

}

export default CoordinatesButton