import React from 'react';
import { connect } from 'react-redux';
import { ping } from '../actions';

const app = props => {

  const { isPinging, onPing } = props;

  return (
    <div>
      <h1>Hola</h1>
      <p>isPinging: {isPinging.toString()}</p>
      <button onClick={() => onPing()}>PING</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isPinging: state.isPinging
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onPing: () => dispatch(ping())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(app);
