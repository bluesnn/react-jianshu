import React, { PureComponent } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import { Input, Button } from "antd";
import { LoginBg, LoginWrapper } from "./style";

class Login extends PureComponent {
  render() {

    const { loginStatus } = this.props;

    if (!loginStatus) {
      return (
        <LoginBg>
          <LoginWrapper>
            <Input
              placeholder="账号"
              ref={e => this.account = e}
              // onChange={(e) => {this.account = e}}
            />
            <Input
              placeholder="密码"
              type="password"
              ref={e => this.password = e}
              // onChange={(e) => {this.password = e}}
            />
            <Button
              type="primary"
              onClick={() => this.props.login(this.account, this.password)}
            >
              登录
            </Button>
          </LoginWrapper>
        </LoginBg>
      );
    } else {
      return <Redirect to="/" />
    }
  }
}

const mapStateToProps = (state) => ({
  loginStatus: state.getIn(['login', 'login'])
});

const mapDispatchToProps = (dispatch) => ({
  login(accountElem, passwordElem) {
    dispatch(actionCreators.getLogin(accountElem.input.value, passwordElem.input.value))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
