import { connect } from 'react-redux';
import AuthScreen from './AuthScreen';

const mapStateToProps = (state) => ({
  theme: state.settingsState.theme,
});

export default connect(mapStateToProps, null)(AuthScreen);
