import * as React from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import { createSomething } from '../actions/test-actions';

interface propTypes {
  createSomething: (params: object) => void
}

const Post = (props: propTypes) => {
  let value;

  return (
    <div>
      key:
      <input placeholder = 'value' ref = {node => value = node} />

      <button onClick = {() => {
        props.createSomething({ key: value.value });
      }}>
        post!
      </button>
    </div>
  );
};

const mapDispatchToProps = { createSomething };

export default connect(null, mapDispatchToProps)(Post);
