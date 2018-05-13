import React from 'react';
import './middlebar.css';
import Search from '../searchbar/searchbar';
class Middlebar extends React.Component {
    render(){
        return (<div className='middlebar'>
            <Search />
        </div>);
    }
}

export default Middlebar;