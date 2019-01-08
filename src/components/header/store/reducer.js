import { fromJS } from 'immutable';
import * as constants from "./constants";

const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  hotSearch: [],
  page: 1,
  totalPage: 1
});

// 导出一个纯函数（给一个固定出入，必会一个固定输出，不要有副作用）
export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.SEARCH_FOCUS:
      // immutable对象set方法，会结合之前immutable对象的值和设置的值，返回一个全新的对象
      return state.set('focused', true);
    case constants.SEARCH_BLUR:
      return state.set('focused', false);
    case constants.HOT_SEARCH:
      return state.merge({
        hotSearch: action.data,
        totalPage: action.totalPage
      })
    case constants.MOUSE_ENTER:
      return state.set('mouseIn', true);
    case constants.MOUSE_LEAVE:
      return state.set('mouseIn', false);
    case constants.CHANGE_PAGE:
      return state.set('page', action.page);
    default:
      return state;
  }
}