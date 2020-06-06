import { connect } from 'react-redux';
import Footer from './Footer';

const mapStateToProps = (state) => ({
  theme: state.settingsState.theme,
});

export default connect(mapStateToProps, null)(Footer);
