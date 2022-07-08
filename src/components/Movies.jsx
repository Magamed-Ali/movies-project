import {Movie} from "./Movie";

function Movies(prors){
    const {movies} = prors;

    return <div className="movies">
        {
            movies.map(movie =>
                <Movie key={movie.imdbID} {...movie}/>
            )
        }
    </div>

}
export {Movies}