import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import Topic from "./compontens/Topic";
import List from "./compontens/List";
import Recommend from "./compontens/Recommend";
import Writer from "./compontens/Writer";
// import BackTop from "../../components/BackTop";
import { Carousel, BackTop } from 'antd';
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  DownloadBox,
  Download,
  DownloadPopup
} from "./style"

class Home extends PureComponent {

  getDownloadPopup() {
    if (this.props.downloadPopup) {
      return (
        <DownloadPopup>
          <img src="https://picsum.photos/120/120" alt="" />
        </DownloadPopup>
      )
    } else {
      return null
    }
  }

  render() {

    const { handleMouseEnter, handleMOuseLeave } = this.props;

    return(
      <HomeWrapper>
        <HomeLeft>
        <Carousel autoplay>
          <div><img src="https://picsum.photos/640/270" alt="" /></div>
          <div><img src="https://picsum.photos/641/270" alt="" /></div>
          <div><img src="https://picsum.photos/640/271" alt="" /></div>
          <div><img src="https://picsum.photos/639/270" alt="" /></div>
        </Carousel>
          <Topic></Topic>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>
          <DownloadBox>
            <Download
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMOuseLeave}
            >
              <img src="https://picsum.photos/60/60" alt="" />
              <p>
                <span>下载简书手机app ></span><br/>
                随时随地发现和创作内容
              </p>
            </Download>
            {this.getDownloadPopup()}
          </DownloadBox>
          <Writer></Writer>
        </HomeRight>
        <BackTop />
      </HomeWrapper>
    )
  }

  componentDidMount() {
    this.props.changHomeData();
    this.props.changListData();
  }

}

const mapStateToProps = (state) => {
  return {
    downloadPopup: state.getIn(['home', 'downloadPopup'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter())
    },

    handleMOuseLeave() {
      dispatch(actionCreators.mouseLeave())
    },

    changHomeData() {
      dispatch(actionCreators.getHomeData())
    },

    changListData() {
      dispatch(actionCreators.getList())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);