import React from 'react';
import "./leftmenu.css";
class Leftmenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navs: [
                {
                    name: "chat",
                    src: 'https://vignette.wikia.nocookie.net/steven-universe/images/1/16/Chat_policy.png/revision/latest?cb=20151229151750',
                },{
                    name: "contact",
                    src: 'http://flaticons.net/icons/Application/User-Profile.png',
                }
            ],
            active: null
        };
        
    }
    handleClick = (e) => {
        
    }
    render () {
        return (<nav className="leftmenu">
            <ul onClick={this.handleClick}>
                {
                    this.state.navs.map((element, index) => (<li key={index} style={{borderLeft: "2px solid red"}}><img src={element.src} alt={element.name}/></li>))
                }                
                <li className="logout"><img src='https://cdn1.iconfinder.com/data/icons/creative-round-ui/243/20-512.png' alt='logout'/></li>
            </ul>
        </nav>);
    }
}

export default Leftmenu;