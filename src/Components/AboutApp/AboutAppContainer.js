import { connect } from 'react-redux';
import AboutApp from './AboutApp';

const mapStateToProps = (state) => ({
  theme: state.settingsState.theme,
});

export default connect(mapStateToProps, null)(AboutApp);
