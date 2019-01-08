import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import { Link } from "react-router-dom";
import { Icon } from "antd";
import {
  ListWrapper,
  ListItem,
  ListLeft,
  ListRight,
  ListBottom,
  ItemTxt,
  LoadMore
} from "../style";

class List extends PureComponent {
  render() {

    const { articleList, getMoreList, page } = this.props;

    return(
      <ListWrapper>
        {
          articleList.map((item, articleId) => {
            return (
              <ListItem key={articleId}>
                <ListLeft>
                  <Link to={`/detail/${item.get('articleId')}`}>
                    <h3>{item.get('title')}</h3>
                  </Link>
                  <ItemTxt>{item.get('presentation')}</ItemTxt>
                  <ListBottom>
                    <a href="/">{item.get('name')}</a>
                    <a href="/"><Icon type="message" />{item.get('comment')}</a>
                    <span><Icon type="heart" />{item.get('heart')}</span>
                  </ListBottom>
                </ListLeft>
                <ListRight>
                  <img src={item.get('articleImageUrl')} alt="list" />
                </ListRight>
              </ListItem>
            )
          })
        }
        <LoadMore onClick={() => getMoreList(page)}>加载更多</LoadMore>
      </ListWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
    articleList: state.getIn(['home', 'articleList']),
    page: state.getIn(['home', 'articlePage'])
})

const mapDispatchToProps = (dispatch) => ({
  getMoreList(page) {
    dispatch(actionCreators.getListData(page))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(List);