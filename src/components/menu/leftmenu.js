import React from 'react';
import "./leftmenu.css";
class Leftmenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navs: [
                {
                    name: "",
                    src: 'https://vignette.wikia.nocookie.net/steven-universe/images/1/16/Chat_policy.png/revision/latest?cb=20151229151750',
                },{
                    name: "",
                    src: 'http://flaticons.net/icons/Application/User-Profile.png',
                }
            ],
            active: null
        },
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){
        console.log(e.target);
    }
    render () {
        return (<nav className="leftmenu">
            <ul onClick={this.handleClick}>
                {
                    this.state.navs.map((element, index) => (<li key={index}><a><img src={element.src} /></a></li>))
                }                
                <li name="logout" className="logout"><a><img src='http://www.iconsplace.com/download/white-logout-512.png' /></a></li>
            </ul>
        </nav>);
    }
}

export default Leftmenu;