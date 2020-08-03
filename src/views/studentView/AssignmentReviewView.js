import AssignmentReview from '../../components/student/AssignmentReview';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    questions: state.reviewingAssignment.questions
});

export default connect(mapStateToProps)(AssignmentReview);