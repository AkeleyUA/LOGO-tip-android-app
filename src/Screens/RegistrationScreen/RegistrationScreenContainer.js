import { connect } from 'react-redux';
import RegistrationScreen from './RegistrationScreen';

const mapStateToProps = (state) => ({
  theme: state.settingsState.theme,
});

export default connect(mapStateToProps, null)(RegistrationScreen);
