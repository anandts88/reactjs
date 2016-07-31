import { connect } from 'react-redux';
import { HELLO_WORLD } from './../actions';
import Hello from './../components/hello';

const mapStateToProps = (state, ownProps) => {
  return {
    message: state.helloWorld.message
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch({ type: HELLO_WORLD })
    }
  };
};

const HelloWorld = connect(
  mapStateToProps,
  mapDispatchToProps
)(Hello);

export default HelloWorld;
