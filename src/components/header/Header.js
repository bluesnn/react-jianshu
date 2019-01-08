import React, { Component } from "react";
import { connect } from "react-redux"; // 提供和store链接的方法
import { Link } from "react-router-dom";
import { actionCreators } from "./store"
import { actionCreators as loginActionCreators } from "../../pages/login/store";
import {
  HeaderWrapper,
  Logo,
  NavWrap,
  NavLeft,
  NavRight,
  NavItem,
  Reg,
  SearchInfo,
  SearchInfoTitle,
  SearchLabel
} from "./style";
import { Button, Input, Icon, Tag } from "antd";

const Search = Input.Search

class Header extends Component {

  getListArea() {

    const { hotSearch, focused, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
    const newList = hotSearch.toJS();
    const pageList = [];

    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        pageList.push(
          <Tag key={newList[i]}>{newList[i]}</Tag>
        )
      }
    }

    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            <p>热门搜索</p>
            <p className="sync" onClick={() => handleChangePage(page, totalPage)}>
              <Icon type="sync" spin theme="outlined" />
              换一批
            </p>
          </SearchInfoTitle>
          <SearchLabel>
            {pageList}
          </SearchLabel>
        </SearchInfo>
      )
    } else {
      return null;
    }
  }

  render() {

    const { focused, handleInputFocus, handleInputBlur, hotSearch, login, loginOut } = this.props;

    return (
      <HeaderWrapper>
        <Link to="/">
          <Logo />
        </Link>
        <NavWrap>
          <NavLeft>
            <Link to="/">
              <NavItem className="active">首页</NavItem>
            </Link>
            <NavItem href="#">下载App</NavItem>
            <div className="searchBox">
              <Search
                className={focused ? 'focused' : ''}
                placeholder="搜索"
                onFocus={() => handleInputFocus(hotSearch)}
                onBlur={handleInputBlur}
              />
              {this.getListArea()}
            </div>
          </NavLeft>
          <NavRight>
            <NavItem>Aa</NavItem>
            {
              login ? <NavItem onClick={loginOut}>退出</NavItem> : <Link to="/login"><NavItem>登陆</NavItem></Link>
            }
          </NavRight>
        </NavWrap>
        <Reg>
          <Button type="danger">注册</Button>
          <Link to="/write"><Button type="danger" icon="form">写文章</Button></Link>
        </Reg>
      </HeaderWrapper>
    );
  }
}

// store映射props
const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    hotSearch: state.getIn(['header', 'hotSearch']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    login: state.getIn(['login', 'login'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(hotSearch) {
      (hotSearch.size === 0) && dispatch(actionCreators.getHotSearch());
      dispatch(actionCreators.searchFocus());
    },

    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },

    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },

    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },

    handleChangePage(page, totalPage) {
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1));
      } else {
        dispatch(actionCreators.changePage(1));
      }
    },

    loginOut() {
      dispatch(loginActionCreators.loginOut());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);