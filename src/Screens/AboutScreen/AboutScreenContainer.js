import { connect } from 'react-redux';
import AboutScreen from './AboutScreen';

const mapStateToProps = (state) => ({
  theme: state.settingsState.theme,
});

export default connect(mapStateToProps, null)(AboutScreen);
