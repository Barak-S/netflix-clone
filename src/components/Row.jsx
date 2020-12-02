import React, { Component } from 'react';

class Row extends Component {

    state={
        movies: []
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3${this.props.fetchURL}`)
        .then(res=> res.json())
        .then(movies=> this.setState({ movies: movies.results }))
    }

    posterURL = 'https://image.tmdb.org/t/p/original/'

    render() {
        return (
            <div className="genre-movie-container">
                <h3>{this.props.title}</h3>
                <div className="genre-row">
                    { this.state.movies.map(movie=>{
                        return(
                            <div className="movie-card">
                                {/* <p>{movie.title || movie.name}</p> */}
                                <img 
                                    className={`movie-poster ${this.props.isLargeRow && "movie-posterLarge"}`}
                                    src={`${this.posterURL}${this.props.isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                                    key={movie.id} 
                                    alt={movie.title || movie.name}>
                                </img>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default Row;