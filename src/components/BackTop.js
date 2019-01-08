import React, { Component } from "react";
// import styled from "styled-components";
import { BackTop } from "antd";

// const BackTopBox = styled.div`
//   width: 50px;
//   height: 50px;
//   line-height: 48px;
//   border: 1px solid #dcdcdc;
//   background-color: #fff;
//   transition: 0.1s ease-in;
//   cursor: pointer;
//   text-align: center;
//   position: fixed;
//   bottom: 40px;
//   right: 40px;
// `;

class GoTop extends Component {
  render() {
    return (
      <div>
        <BackTop />
      </div>
    );
  }

  // handleScrollTop() {
  //   window.scrollTo(0, 0);
  // }

  // render() {
  //   return (
  //     <BackTopBox onClick={this.handleScrollTop}>
  //       <Icon type="up" theme="outlined" />
  //     </BackTopBox>
  //   );
  // }
}

export default GoTop;
