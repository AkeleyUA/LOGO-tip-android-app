import {connect} from 'react-redux';
import DataScreen from './DataScreen';
import {bindActionCreators} from 'redux';
import {
  getItemRequestAction,
  getItemSuccessAction,
} from '../../Actions/itemsActions';
import {clearMessageAction} from '../../Actions/messageAction';

const mapStateToProps = state => ({
  theme: state.settingsState.theme,
  message: state.itemsState.message,
});

const mapDispatchToProps = dispatch => ({
  getItemRequest: bindActionCreators(getItemRequestAction, dispatch),
  getItemSuccess: bindActionCreators(getItemSuccessAction, dispatch),
  clearMessage: bindActionCreators(clearMessageAction, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DataScreen);
