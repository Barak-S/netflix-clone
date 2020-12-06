import React, { Component } from 'react';
import Requests from '../requests'
import Row from '../components/Row'

const MoviesContainer=()=>{

    return (
        <div>
            <Row
                title="NETFLIX ORIGINALS"
                key="netflix originals"
                fetchURL={Requests.fetchNetflixOriginals}
                isLargeRow
            />
            <Row
                title="Trending"
                key="trending"
                fetchURL={Requests.fetchTrending}
                isLargeRow
            />
            <Row
                title="Action Movies"
                key="action movies"
                fetchURL={Requests.fetchAction}
                isLargeRow
            />
            <Row
                title="Comedy Movies"
                key="comedy movies"
                fetchURL={Requests.fetchComedy}
                isLargeRow
            />
            <Row
                title="Horror Movies"
                key="horror movies"
                fetchURL={Requests.fetchHorror}
                isLargeRow
            />
            <Row
                title="Romance Movies"
                key="romance movies"
                fetchURL={Requests.fetchRomance}
                isLargeRow
            />
            <Row
                title="Documentaries"
                key="documentaries"
                fetchURL={Requests.fetchDocumentaries}
                isLargeRow
            />
           
        </div>
    );
}

export default MoviesContainer;