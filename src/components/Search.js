import React from 'react'

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: '' };

        this.onSubmit = this.onSubmit.bind(this);
        this.onSearchChange = this.onSearchChange.bind(this);
    }
    onSubmit(event) {
        event.preventDefault();
        this.props.onSearch(this.state.title)
    }
    onSearchChange(event) {
        const input_title = event.target.value
        console.log(input_title);
        this.setState({ title: input_title });
    }
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div class="search">
                    <label for="search-bar">Search :</label>
                    <input onChange={this.onSearchChange} value={this.state.title} type='text' name='search-bar' placeholder='Search your query here' onSubmit={this.onSubmit}></input>
                    <button name="search-button" type='Submit' onClick={this.onSubmit}>Search</button>
                </div>

            </form>
        )
    }

}

export default Search