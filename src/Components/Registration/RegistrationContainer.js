import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Registration from './Registration';
import {registrationRequestAction} from '../../Actions/authActions';

const mapStateToProps = state => ({
  theme: state.settingsState.theme,
  loading: state.authState.loading,
  isAuth: !!state.authState.token,
});

const mapDispatchToProps = dispatch => ({
  registrationRequest: bindActionCreators(registrationRequestAction, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Registration);
