import AssignmentList from '../../components/student/AssignmentList';
import StudentActions from '../../actions/student';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    assignments: state.selectedCourse.assignments,
    student: state.studentProfile.student
});

const mapDispatchToProps = dispatch => ({
    loadAssignment: (student, assignment) => dispatch(StudentActions.loadAssignment(student, assignment)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AssignmentList);