import Course from '../../components/student/Course';
import StudentActions from '../../actions/student';
import { connect } from 'react-redux';


const mapStateToProps = state => ({
    title: state.selectedCourse.title,
    description: state.selectedCourse.description,
    assignments: state.selectedCourse.assignments,
});

const mapDispatchToProps = dispatch => ({
    loadSubmittedAssignment: (student, assignment) => dispatch(StudentActions.loadAssignment(student, assignment)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Course);