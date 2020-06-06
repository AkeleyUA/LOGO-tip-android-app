import { connect } from 'react-redux';
import MenuIcon from './MenuIcon';

const mapStateToProps = (state) => ({
  theme: state.settingsState.theme,
  loading: state.authState.loading,
});

export default connect(mapStateToProps, null)(MenuIcon);
