import Assignment from '../../components/student/Assignment';
import StudentActions from '../../actions/student';
import { connect } from 'react-redux';


const mapStateToProps = state => ({
    title: state.openedAssignment.title,
    score: state.openedAssignment.score,
    total: state.openedAssignment.total,
    student: state.studentProfile.student,
    assignment: state.openedAssignment.id
});

const mapDispatchToProps = dispatch => ({
    loadAssignmentReview: (student, assignment) => dispatch(StudentActions.loadAssignmentReview(student, assignment)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Assignment);