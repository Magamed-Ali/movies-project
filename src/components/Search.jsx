import React from "react";

export default class Search extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            type: 'all'
        }
    }

    handleKey = (event) => {
        if(event.key === 'Enter'){
            this.props.searchMovies(this.state.search, this.state.type);
        }
    }

    handleChange = (event) => {
        this.setState( () => ({type: event.target.dataset.type}), () => {
            this.props.searchMovies(this.state.search, this.state.type);
        })
    }

    render() {

        return(
            <div className="row">
                <div className="col s12">
                    <div className="input-field">
                        <input
                            placeholder="Search"
                            type="search"
                            className="validate"
                            value={this.state.search}
                            onChange={(e) => this.setState({search: e.target.value})}
                            onKeyDown={this.handleKey}
                        />
                        <button
                            className="btn search-btn"
                            onClick={() =>  this.props.searchMovies(this.state.search, this.state.type)}>Search</button>
                    </div>

                    <div className="checked">
                        <p>
                            <label>
                                <input
                                    className="with-gap"
                                    name="type"
                                    type="radio"
                                    checked={this.state.type === "all"}
                                    onChange={this.handleChange}
                                    data-type="all"
                                />
                                <span>All</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input
                                    className="with-gap"
                                    name="type"
                                    type="radio"
                                    checked={this.state.type === "movie"}
                                    onChange={this.handleChange}
                                    data-type="movie"
                                />
                                <span>Moves only</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input
                                    className="with-gap"
                                    name="type"
                                    type="radio"
                                    checked={this.state.type === "series"}
                                    onChange={this.handleChange}
                                    data-type="series"
                                />
                                <span>Series only</span>
                            </label>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}