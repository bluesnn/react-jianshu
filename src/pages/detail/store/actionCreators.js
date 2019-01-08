import axios from "axios";
import * as constants from "./constants";

const changeDetail = (title, body) => ({
  type: constants.GET_DETAIL,
  title,
  body
})

export const getDetail = (id) => {
  return (dispatch) => {
    axios.get(`/articles/${id}`).then((res) => {
      const data = res.data.data;
      dispatch(changeDetail(data.title, data.body))
    }).catch((err) => {
      console.log(err)
    })
  }
}