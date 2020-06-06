import {connect} from 'react-redux';
import CloseIcon from './CloseIcon';

const mapStateToProps = state => ({
  theme: state.settingsState.theme,
});

export default connect(
  mapStateToProps,
  null,
)(CloseIcon);
