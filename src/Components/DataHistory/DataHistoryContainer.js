import {connect} from 'react-redux';
import DataHistory from './DataHistory';

const mapStateToProps = state => ({
  theme: state.settingsState.theme,
  dataItems: state.itemsState.dataItems,
  loading: state.itemsState.loading,
});

export default connect(
  mapStateToProps,
  null,
)(DataHistory);
