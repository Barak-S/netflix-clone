import React, { Component } from 'react';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';


class Row extends Component {

    state={
        movies: [],
        trailerURL: ""
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3${this.props.fetchURL}`)
        .then(res=> res.json())
        .then(movies=> this.setState({ movies: movies.results }))
    }

    setTrailer=(movie)=>{
        if (this.state.trailerURL !== "" && !movie){
            this.setState({ trailerURL: ""})
        } else {
            movieTrailer(movie?.name || movie?.title || movie?.original_name || "")
            .then(url => {
                const urlParams = new URLSearchParams(new URL(url).search)
                this.setState({
                    trailerURL: urlParams.get('v')
                })
            })
            .catch(err => {
                console.log(err)
                this.setState({ trailerURL: ""})
            })
        }
    }

    posterURL = 'https://image.tmdb.org/t/p/original/'

    opts = {
        height: "390",
        width: '100%',
        playerVars: {
            autplay: 1
        }
    }

    render() {
        return (
            <div className="genre-movie-container">
                <h3>{this.props.title}</h3>
                <div className="genre-row">
                    { this.state.movies.map(movie=>{
                        return(
                            <div className="movie-card">
                                <img 
                                    className={`movie-poster ${this.props.isLargeRow && "movie-posterLarge"}`}
                                    src={`${this.posterURL}${this.props.isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                                    onClick={()=>this.setTrailer(movie)}
                                    key={movie.id} 
                                    alt={movie.title || movie.name}>
                                </img>
                            </div>
                        )
                    })}
                </div>
                { this.state.trailerURL !== "" && <YouTube videoId={this.state.trailerURL} opts={this.opts}/>}
            </div>
        );
    }
}

export default Row;