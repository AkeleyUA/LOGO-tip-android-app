import { connect } from 'react-redux';
import Logo from './Logo';

const mapStateToProps = (state) => ({
  theme: state.settingsState.theme,
});

export default connect(mapStateToProps, null)(Logo);
