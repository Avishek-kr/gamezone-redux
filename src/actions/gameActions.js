import axios from 'axios';
import { popularGamesURL, upcomingGamesURL, newGamesURL } from '../api';
import { fetchGames } from '../slices/apiSlice';

// Action Creator
export const loadGames = () => async (dispatch) => {
    const popularData  = await axios.get(popularGamesURL());
    const newGamesData  = await axios.get(newGamesURL());
    const upcomingData  = await axios.get(upcomingGamesURL());
    dispatch(fetchGames({
        popular: popularData.data.results,
        newGames: newGamesData.data.results,
        upcoming: upcomingData.data.results,
    }));
}
