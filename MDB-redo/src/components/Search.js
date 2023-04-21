import {useState} from "react";
import axios from 'axios';
import {apiKey} from '../Globals/globalVariables';
import MovieCard from "../components/MovieCards";
import isFavourite from "../utilities/isFavourite";
import {useSelector} from "react-redux";




function Search(){
    const [searchQuery, updateSearchQuery] = useState("");
    const [movieData, setMovieData] = useState();
    const favourites = useSelector((state) => state.rootReduce.favouritesReducer.items);
    
    function updateSearch(event){
        updateSearchQuery(event.target.value);
        getSearchQuery(searchQuery);
    }

    async function getSearchQuery(searchQuery){
        try {
            let resp = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}`);
            await setMovieData(resp.data.results);
            
        } catch (error) {
            console.log(error);
        }    
    }

    return(
        <>
        <div className="search">
            <h2>Search</h2>
           
            <div className="searchInput">
                <input className="searchInput" onChange={updateSearch} type="text" placeholder="..." autoFocus/>
            </div>
        </div>
        {/* Displays function getMovieData */}
        <div className="movie-grid-container"> 
            {movieData?.map((movie, i) => {
                return (
                    <div key = {i}>
                        <MovieCard
                            key={i}
                            movieObject={movie}
                            isFavourite={isFavourite(favourites, null, movie.id)}
                        />
                    </div>
                );
            })}
         </div>
        </>
    )
}

export default Search;