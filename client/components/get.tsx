import * as React from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import { fetchSomething } from '../actions/test-actions';

interface propTypes {
  fetchSomething: (params: object) => void
};

const Get = (props: propTypes) => {
  let key, value;

  return (
    <div>
      <input placeholder = 'key' ref = {node => key = node} />
      <input placeholder = 'alue' ref = {node => value = node} />

      <button onClick = {() => {
        let tmp = {};
        tmp[key.value] = value.value;
        props.fetchSomething(tmp);
      }}>
        get!
      </button>
    </div>
  );
};

const mapDispatchToProps = { fetchSomething };

export default connect(null, mapDispatchToProps)(Get);
