import { connect } from 'react-redux';
import ContactsScreen from './ContactsScreen';

const mapStateToProps = (state) => ({
  theme: state.settingsState.theme,
});

export default connect(mapStateToProps, null)(ContactsScreen);
