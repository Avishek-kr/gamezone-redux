import axios from "axios";
import { gameDetailsURL, gameScreenshotURL } from '../api'
import { gameDetail } from "../slices/gameSlice";

export const loadDetail = (id) => async (dispatch) => {
    const detailData = await axios.get(gameDetailsURL(id))
    const screenshortData = await axios.get(gameScreenshotURL(id))
    dispatch(gameDetail({
        game: detailData.data,
        screen: screenshortData.data,
    }))
}

