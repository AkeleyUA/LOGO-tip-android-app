import {connect} from 'react-redux';
import AddBlock from './AddBlock';
import {bindActionCreators} from 'redux';
import {addDataRequestAction} from '../../Actions/dataActions';
import {clearFieldsAction} from '../../Actions/messageAction';

const mapStateToProps = state => ({
  theme: state.settingsState.theme,
  token: state.authState.token,
  loading: state.dataState.loading,
  field: state.dataState.field,
});

const mapDispatchToProps = dispatch => ({
  addDataRequest: bindActionCreators(addDataRequestAction, dispatch),
  clearFields: bindActionCreators(clearFieldsAction, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddBlock);
