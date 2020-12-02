import React, { Component } from 'react';
import Requests from '../requests'
import Row from './components/Row'

const MoviesContainer=()=>{

    return (
        <div>
            <Row
                title="Trending"
                key="trending"
                fetchURL={Requests.fetchTrending}
            />
            <Row
                title="NETFLIX ORIGINALS"
                key="netflix originals"
                fetchURL={Requests.fetchNetflixOriginals}
            />
            <Row
                title="Top Rated"
                key="top rated"
                fetchURL={Requests.fetchTopRated}
            />
        </div>
    );
}

export default MoviesContainer;