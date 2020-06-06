import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SettingsScreen from './SettingsScreen';
import { changeThemeAction } from '../../Actions/settingsActions';

const mapStateToProps = (state) => ({
  theme: state.settingsState.theme,
});

const mapDispatchToProps = (dispatch) => ({
  changeTheme: bindActionCreators(changeThemeAction, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);
