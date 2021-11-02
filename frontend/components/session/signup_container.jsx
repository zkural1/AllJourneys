import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session_actions';
import Signup from './signup';

const mapStateToProps = ({ errors }) => {
  
  return {
    errors: errors.session,
  };
};

const mapDispatchToProps = dispatch => ({
  createNewUser: formUser => dispatch(createNewUser(formUser)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
