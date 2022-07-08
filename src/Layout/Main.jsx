import React from "react";
import {Movies} from "../components/Movies";
import Preloader from "../components/Preloader";
import Search from "../components/Search";

class Main extends React.Component {
    state = {
        movies: [],
        name: 'matrix',
        gender: 'movie'
    }


    componentDidMount() {
        fetch(`http://www.omdbapi.com/?apikey=a19fd8b7&s=${this.state.name}`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search}))
    }

    searchMovies = (str, type = 'all') => {
        fetch(`http://www.omdbapi.com/?apikey=a19fd8b7&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search}))
    }


    render() {
        const {movies} = this.state;


        return <main className="container content">

            <Search searchMovies={this.searchMovies}/>

            {
                movies.length ? (
                    <Movies movies={movies}/>
                ) : <Preloader/>
            }
        </main>
    }
}

export {Main}