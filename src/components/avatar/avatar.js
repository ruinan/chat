import React from 'react';
import './avatar.css';
class Avatar extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        // pop out modal to let user to do management

    }

    componentDidMount(){

    }
    render (){
        return (<div className='avatar' onClick={this.handleClick} >
            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" />
        </div>);
    }
}

export default Avatar;