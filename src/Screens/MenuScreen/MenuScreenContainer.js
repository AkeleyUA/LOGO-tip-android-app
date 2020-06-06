import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MenuScreen from './MenuScreen';
import { logoutAction } from '../../Actions/authActions';

const mapStateToProps = (state) => ({
  theme: state.settingsState.theme,
  isLogged: !!state.authState.token,
});

const mapDispatchToProps = (dispatch) => ({
  logout: bindActionCreators(logoutAction, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuScreen);
