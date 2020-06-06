import {connect} from 'react-redux';
import DataInfo from './DataInfo';

const mapStateToProps = state => ({
  theme: state.settingsState.theme,
  currentItem: state.itemsState.currentItem,
  loading: state.itemsState.loading,
});

export default connect(
  mapStateToProps,
  null,
)(DataInfo);
