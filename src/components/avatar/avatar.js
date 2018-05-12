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
            <img src="https://cdn.iconscout.com/public/images/icon/free/png-512/avatar-user-hacker-3830b32ad9e0802c-512x512.png" alt="Avatar" />
            <span></span>
        </div>);
    }
}

export default Avatar;