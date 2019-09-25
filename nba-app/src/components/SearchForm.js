import React from 'react';
import axios from 'axios';

class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            search: "",
            data: []
        }
    }
    componentDidMount() {
        axios
            .get()
            .then(res => {
                this.setState({ data: res.data.results });
            })
            .catch(err => console.log(err));
    }

    handleInputChange = e => {
        this.setState({ name: e.target.value });
    }

    onSearch = e => {
        e.preventDefault();
        this.setState({ search: this.name });
    }
    render() {
    return (
    <section>
    <form onSubmit={this.onSearch}>
        <div>
            <input
                onChange={this.handleInputChange}
                placeholder='name'
                value={this.name}
                name='name'
            />
            <button type='submit'>
            </button>
        </div>
    </form>
    </section >
  );
}
}

export default Search;