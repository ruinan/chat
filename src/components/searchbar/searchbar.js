import React from 'react';
import './search.css';

class Search extends React.Component {
    render (){
        return (
        <div className='search'>
            <input type='text' placeholder='Search'/>
            <button><img src='http://www.clker.com/cliparts/L/q/T/i/P/S/add-button-white-hi.png' alter='add' /></button>
        </div>);
    }
}

export default Search;