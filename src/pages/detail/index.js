import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import {
  DetailWrapper,
  Title,
  Content
} from "./style";
class Detail extends PureComponent {
  render() {

    const { title, content } = this.props;

    return(
      <DetailWrapper>
        <Title>{title}</Title>
        <Content dangerouslySetInnerHTML={{__html: content}} />
      </DetailWrapper>
    )
  }
  componentDidMount() {
    this.props.getDetail(this.props.match.params.id);
  }
}

const mapStateToProps = (state) => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content'])
})

const mapDispatchToProps = (dispatch) => ({
  getDetail(id) {
    dispatch(actionCreators.getDetail(id));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Detail);