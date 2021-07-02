// Code DelayedButton Component Here
import React, {Component} from 'react' 

class DelayedButton extends Component {

    handleClick = (event) => {
        event.persist();
        return setTimeout(() => {
            console.log(this.props.onDelayedClick(event))
        }, this.props.delay)
    }

    render() {
        return <button onClick={this.handleClick}></button>
    }

}

export default DelayedButton