import React, { useEffect, useState } from 'react';
import Requests from '../requests'


const Banner = () => {

    const [movie,setMovie] = useState([])

    useEffect(()=>{
        function fetchData(){
            fetch(`https://api.themoviedb.org/3${Requests.fetchNetflixOriginals}`)
            .then(res=>res.json())
            .then(data=> {
                setMovie(data.results[Math.floor(Math.random() * data.results.length )])
            })
        }
        fetchData()
    }, [])

    const concatStr=(str, n)=>{
        return str?.length > n ? str.substr(0,n-1) + "..." : str
    }

    return (
        <header className="banner" style={{
            BackgroundSize: "cover",
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
            backgroundPosition: "center center"
        }}>
            <div className="banner-contents">
                <h1 className="banner-title">{ movie?.name || movie?.title || movie?.original_name}</h1>
                <div className="banner-button">
                    <button className="banner-button">Play</button>
                    <button className="banner-button">My List</button>
                </div>
                <h1 className="banner-description">{concatStr(movie?.overview, 150)}</h1>
            </div>
            <div className="banner-fade-bottom"></div>
        </header>
    );  
};

export default Banner;