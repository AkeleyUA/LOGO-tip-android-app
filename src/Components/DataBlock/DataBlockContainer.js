import {connect} from 'react-redux';
import DataBlock from './DataBlock';
import {bindActionCreators} from 'redux';
import {delDataRequestAction} from '../../Actions/dataActions';

const mapStateToProps = state => ({
  theme: state.settingsState.theme,
  loading: state.dataState.loading,
});

const mapDispatchToProps = dispatch => ({
  delDataRequest: bindActionCreators(delDataRequestAction, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DataBlock);
