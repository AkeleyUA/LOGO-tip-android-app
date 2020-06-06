import Technology from "./Technology";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  theme: state.settingsState.theme
})

export default connect(mapStateToProps, null)(Technology)