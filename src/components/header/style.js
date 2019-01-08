import styled from "styled-components";
import logoPic from "../../statics/logo.png";

export const HeaderWrapper = styled.div`
  min-width: 1000px;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  width: 100px;
  height: 56px;
  background: url(${logoPic});
  background-size: 100% 90%;
`;

export const NavWrap = styled.div`
  width: 960px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .ant-input-search{
    width: 140px;
    transition: all .2s linear;
    position: relative;
    top: 13px;
    left: 0;
  }
  .focused {
    transition: all .2s linear;
    width: 170px;
  }
  .searchBox{
    width: 140px;
    height: 56px;
  }
`;

export const NavItem = styled.div`
  color: #666666;
  font-size: 18px;
  padding-right: 20px;
  cursor: pointer;
  &.active {
    color: #f5222d;
  }
`;

export const NavRight = styled.div`
  display: flex;
`;

export const Reg = styled.div`
  display: flex;
  margin-right: 30px;
  button:first-child {
    margin-right: 15px;
  }
`;

export const SearchInfo = styled.div`
  width: 260px;
  box-shadow: 0 0 8px rgba(0, 0, 0, .2);
  border-radius: 3px;
  position: relative;
  top: 24px;
  left: 0;
  z-index: 99;
  background-color: #ffffff;
`;

export const SearchInfoTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 9px 0 9px;
  font-size: 14px;
  color: #999999;
  .sync {
    cursor: pointer;
    i {
      padding-right: 2px;
    }
  }
`;

export const SearchLabel = styled.div`
  border-bottom: 1px solid #f0f0f0;
  padding: 0 10px 15px 10px;
  .ant-tag {
    margin-top: 8px;
  }
`
