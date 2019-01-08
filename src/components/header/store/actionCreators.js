import { fromJS } from "immutable";
import * as constants from './constants';
import axios from "axios";

const hotSearch = (data) => ({
  type: constants.HOT_SEARCH,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
});

export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS
});

export const searchBlur = () => ({
  type: constants.SEARCH_BLUR
});

export const mouseEnter = () => ({
  type: constants.MOUSE_ENTER
});

export const mouseLeave = () => ({
  type: constants.MOUSE_LEAVE
});

export const changePage = (page) => ({
  type: constants.CHANGE_PAGE,
  page
});

export const getHotSearch = () => {
  return (dispatch) => {
    axios.get('/api/hotSearch.json').then((res) => {
      const data = res.data.data;
      dispatch(hotSearch(data));
    }).catch((err) => {
      console.log(err)
    })
  }
}