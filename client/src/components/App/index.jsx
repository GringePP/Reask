import App from './App';
import { getSongs } from '../../redux/actions';
import { connect } from "react-redux";

export default App;
// const mapStateToProps = ({songReducer: state}) => {
//     return {
//         songList: state.response
//     }
// };
//
// const mapDispatchToState = (dispatch) => {
//     return {
//         getSongs: () => dispatch(getSongs()),
//     }
// };
//
//
// export default connect(mapStateToProps, mapDispatchToState)(App);