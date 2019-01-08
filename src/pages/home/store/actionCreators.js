// import { fromJS } from "immutable";
import * as constants from "./constants";
import axios from "axios";

// const homePage = (data) => ({
//   type: constants.HOME_BANNER,
//   data: fromJS(data)
// });

const changeHomeData = (data) => ({
  type: constants.GET_HOME_DATA,
  topicList: data.topicList,
  // articleList: data.articleList,
  recommendList: data.recommendList
})

const getListDataApi = (data) => ({
  type: constants.GET_LIST_DATA,
  articleList: data.articles,
})

const changeListData = (data, nextPage) => ({
  type: constants.GET_LIST_MORE,
  data: data.articles,
  nextPage
})

export const mouseEnter = () => ({
  type: constants.MOUSE_ENTER
});

export const mouseLeave = () => ({
  type: constants.MOUSE_LEAVE
});

export const getHomeData = () => {
  return (dispatch) => {
    axios.get('/api/homeData.json').then((res) => {
      const data = res.data.data;
      dispatch(changeHomeData(data));
    }).catch((err) => {
      console.log(err)
    })
  }
}

export const getList = () => {
  return (dispatch) => {
    axios.get('articles/timeline/gsyhy').then((res) => {
      const data = res.data.data;
      dispatch(getListDataApi(data))
    }).catch((err) => {
      console.log(err)
    })
  }
}

export const getListData = (page) => {
  return (dispatch) => {
    axios.get(`articles/timeline/gsyhy?page=${page}`).then((res) => {
      const data = res.data.data;
      dispatch(changeListData(data, page + 1));
    })
  }
}

// export const getListData = (page) => {
//   return (dispatch) => {
//     axios.get('/api/listData.json?page=' + page).then((res) => {
//       const data = res.data.data;
//       dispatch(changeListData(data, page + 1));
//     })
//   }
// }

// export const getHome = () => {
//   return (dispatch) => {
//     axios.get('web/top').then((res) => {
//       const data = res.data.data.banners;
//       console.log(data,"home");
//       dispatch(homePage(data));
//     }).catch((err) => {
//       console.log(err)
//     })
//   }
// }