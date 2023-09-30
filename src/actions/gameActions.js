import axios from 'axios';
import { popularGamesURL, upcomingGamesURL, newGamesURL, searchGameURL } from '../api';
import { fetchGames } from '../slices/apiSlice';
import { searchGames } from '../slices/searchSlice';

// Action Creator
export const loadGames = () => async (dispatch) => {
    const popularData = await axios.get(popularGamesURL());
    const newGamesData = await axios.get(newGamesURL());
    const upcomingData = await axios.get(upcomingGamesURL());
    dispatch(fetchGames({
        popular: popularData.data.results,
        newGames: newGamesData.data.results,
        upcoming: upcomingData.data.results,
    }));
}

export const fetchSearched = (game_name) => async(dispatch) => {
    const searchedData = await axios.get(searchGameURL(game_name));
    dispatch(searchGames({
        searched: searchedData.data.results
    }))
}

export const clearSearch = () => (dispatch) => {
    dispatch(searchGames({
        searched: []
    }))
}