import { connect } from 'react-redux';
import { apiRequestStart } from '../action/action';
import { graphComponent } from './graphComponent';

const mapDispatchToProps = dispatch => ({
  onRequestApiData: () => dispatch(apiRequestStart()),
});

export const FetchApiData = connect(null,mapDispatchToProps)(graphComponent);
