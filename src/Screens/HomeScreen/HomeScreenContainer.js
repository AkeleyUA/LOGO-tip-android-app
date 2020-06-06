import {connect} from 'react-redux';
import HomeScreen from './HomeScreen';
import {bindActionCreators} from 'redux';
import {getDataRequestAction} from '../../Actions/dataActions';
import {clearMessageAction} from '../../Actions/messageAction';

const mapStateToProps = state => ({
  theme: state.settingsState.theme,
  data: state.dataState.data,
  message: state.dataState.message,
  loading: state.dataState.loading,
});

const mapDispatchToProps = dispatch => ({
  getDataRequest: bindActionCreators(getDataRequestAction, dispatch),
  clearMessage: bindActionCreators(clearMessageAction, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);
