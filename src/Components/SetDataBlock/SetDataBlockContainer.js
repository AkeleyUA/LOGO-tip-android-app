import {connect} from 'react-redux';
import SetDataBlock from './SetDataBlock';
import {bindActionCreators} from 'redux';
import {addItemRequestAction} from '../../Actions/itemsActions';

const mapStateToProps = state => ({
  theme: state.settingsState.theme,
  loading: state.itemsState.loading,
});

const mapDispatchToProps = dispatch => ({
  addItemRequest: bindActionCreators(addItemRequestAction, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SetDataBlock);
