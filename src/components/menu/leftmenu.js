import React from 'react';
import "./leftmenu.css";
class Leftmenu extends React.Component {
    render () {
        return (<nav className="leftmenu">
            <ul>
                <li><a><img src='https://vignette.wikia.nocookie.net/steven-universe/images/1/16/Chat_policy.png/revision/latest?cb=20151229151750' alter='chatting' /></a></li>
            </ul>
        </nav>);
    }
}

export default Leftmenu;