import { fromJS } from 'immutable';
import * as constants from "./constants";

const defaultState = fromJS({
  banner: [],
  topicList: [],
  articleList: [],
  articlePage: 2,
  recommendList: [],
  downloadPopup: false
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.HOME_BANNER:
      return state.set('banner', action.data);
    case constants.MOUSE_ENTER:
      return state.set('downloadPopup', true);
    case constants.MOUSE_LEAVE:
      return state.set('downloadPopup', false);
    case constants.GET_HOME_DATA:
      return state.merge({
        topicList: fromJS(action.topicList),
        // articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList)
      })
    case constants.GET_LIST_DATA:
      return state.merge({
        articleList: fromJS(action.articleList),
      })
      // return state.get('articleList', action.articleList);
    case constants.GET_LIST_MORE:
    return state.merge({
      articleList: state.get('articleList').concat(fromJS(action.data)),
      articlePage: action.nextPage
    })
    default:
      return state;
  }
}