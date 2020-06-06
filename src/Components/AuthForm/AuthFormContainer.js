import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import AuthForm from './AuthForm';
import {loginRequestAction} from '../../Actions/authActions';
import {clearMessageAction} from '../../Actions/messageAction';

const mapStateToProps = state => ({
  theme: state.settingsState.theme,
  message: state.authState.message,
  loading: state.authState.loading,
  isAuth: !!state.authState.token,
  redirect: state.authState.redirect,
});

const mapDispatchToProps = dispatch => ({
  loginRequest: bindActionCreators(loginRequestAction, dispatch),
  clearMessage: bindActionCreators(clearMessageAction, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuthForm);
