import * as React from 'react';
import { connect } from 'react-redux';
import { string } from 'prop-types';

interface propTypes {
  search: string
};

const Randim = (props: propTypes) => (
  <div>
    <h1> this is a Randim </h1>
    <p> {props.search} </p>
  </div>
);

const mapStateToProps = ({ routing }) => ({
  search : routing.location.search
});

export default connect(mapStateToProps)(Randim);
