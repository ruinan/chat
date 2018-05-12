import React from 'react';
import Avatar from '../avatar/avatar';
import Leftmenu from '../menu/leftmenu';
import './leftbar.css';
function Leftbar (props) {
    return (
        <div className='leftbar'>
            <Avatar />
            <Leftmenu />
        </div>
    );
}

export default Leftbar;