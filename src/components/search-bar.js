import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        };
    }

    onInputChange = (event) => {
        const term = event.target.value;
        this.setState({
            term
        });
        this.props.onSearchTermChange(term);
    }

    render() {
        return (
            <div className="search-bar">
                <h3>Search</h3>
                <input
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
            </div>
        );
    }
}

export default SearchBar;