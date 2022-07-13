import React, {useState} from "react";

const Search = (props) => {
    const {searchMovies = Function.prototype} = props;

    const [search, setSearch] = useState('');
    const [type, setType] = useState('all')

    const handleKey = (event) => {
        if(event.key === 'Enter'){
            searchMovies(search, type);
        }
    }

    const handleChange = (event) => {
        setType(event.target.dataset.type);
        searchMovies(search, type);
    }

        return(
            <div className="row">
                <div className="col s12">
                    <div className="input-field">
                        <input
                            placeholder="Search"
                            type="search"
                            className="validate"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            onKeyDown={handleKey}
                        />
                        <button
                            className="btn search-btn"
                            onClick={() =>  searchMovies(search, type)}>Search</button>
                    </div>

                    <div className="checked">
                        <p>
                            <label>
                                <input
                                    className="with-gap"
                                    name="type"
                                    type="radio"
                                    checked={type === "all"}
                                    onChange={handleChange}
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
                                    checked={type === "movie"}
                                    onChange={handleChange}
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
                                    checked={type === "series"}
                                    onChange={handleChange}
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
export default Search;