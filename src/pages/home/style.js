import styled from "styled-components";

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  .ant-carousel .slick-slide {
    height: 270px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const HomeLeft = styled.div`
  width: 640px;
`;

export const HomeRight = styled.div`
  width: 280px;
  display: flex;
  flex-direction: column;
`;

export const TopicWrapper = styled.div`
  margin-top: 12px;
  display: flex;
  flex-wrap: wrap;
`;

export const TopicItem = styled.div`
  height: 34px;
  font-size: 14px;
  border: 1px solid #dcdcdc;
  color: #333;
  cursor: pointer;
  background-color: #f7f7f7;
  border-radius: 4px;
  padding-right: 8px;
  display: flex;
  align-items: center;
  margin: 18px 18px 0 0;
  img {
    width: 32px;
    height: 32px;
    margin-right: 8px;
    border-radius: 3px 0 0 3px;
  }
`;

// 列表
export const ListWrapper = styled.div`
  margin: 20px 0;

`

export const ListItem = styled.div`
  border-top: 1px solid #f0f0f0;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ListLeft = styled.div`
  width: 483px;
  h3 {
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
`

export const ItemTxt = styled.div`
  font-size: 13px;
  color: #999;
  line-height: 24px;
  margin: 0 0 8px;
`

export const ListRight = styled.div`
  width: 125px;
  height: 100px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
    border: 1px solid #f0f0f0;
  }
`

export const ListBottom = styled.div`
  display: flex;
  color: #999;
  font-size: 12px;
  a {
    color: #999;
    font-size: 12px;
    margin-right: 10px;
    &:hover {
      color: #787878;
    }
  }
  i {
    margin-right: 3px;
  }
`

// 热门标签
export const RecommendWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -10px;
`

export const RecommendItem = styled.a`
  width: 280px;
  height: 50px;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
  margin-top: 6px;
  img {
    width: 100%;
    height: 100%;
  }
`

// 下载app
export const DownloadBox = styled.div`
  position: relative;
`

export const Download = styled.a`
  border: 1px solid #f0f0f0;
  padding: 10px 22px;
  border-radius: 6px;
  margin: 30px 0;
  display: flex;
  align-items: center;
  p {
    font-size: 13px;
    color: #999;
    padding-left: 10px;
    margin-bottom: 0;
    span {
      font-size: 14px;
      color: #333;
    }
  }
`

export const DownloadPopup = styled.div`
  width: 120px;
  position: absolute;
  top: -103px;
  left: 80px;
  &::after {
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    margin: -15px 0 0 50px;
    box-shadow: 1px 1px 1px rgba(0,0,0, .3);
    transform: rotate(45deg);
  }
  img {
    border: 1px solid #f0f0f0;
    border-radius: 5px;
    box-shadow: 0 2px 3px rgba(0,0,0, .2);
  }
`

export const LoadMore = styled.div`
  padding: 6px 0;
  font-size: 14px;
  text-align: center;
  color: #ffffff;
  background-color: #999;
  border-radius: 17px;
  cursor: pointer;
`