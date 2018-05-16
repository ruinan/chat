import React from 'react';
import './search.css';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            deleteVisibility: "hidden",
            inputValue: ""
        };
        this.showDeleteIcon = this.showDeleteIcon.bind(this);
        this.hiddenDeleteIcon = this.hiddenDeleteIcon.bind(this);
        this.handleChanges = this.handleChanges.bind(this);
        this.clearInput = this.clearInput.bind(this);
    }
    showDeleteIcon(){
        this.setState((prevState, props) => ({
            deleteVisibility: "visible"
        }));
    }
    hiddenDeleteIcon() {
        // this.setState((prevState, props) => ({
        //     deleteVisibility: "hidden"
        // }));
    }
    handleChanges(e) {
        this.setState({
            inputValue: e.target.value
        });
    }

    clearInput() {
        this.setState({
            inputValue: ""
        })
    }
    render (){
        return (
        <div className='search'>
            <input type='text' placeholder='Search' value={this.state.inputValue} onChange={this.handleChanges} onFocus={this.showDeleteIcon}/><img title='Clear Search Bar'alt='deleteIcon' onClick={this.clearInput} src='https://www.shareicon.net/download/2015/09/14/101024_delete.ico' style={{visibility: this.state.deleteVisibility}}/>
            <button>+</button>
        </div>);
    }
}

export default Search;