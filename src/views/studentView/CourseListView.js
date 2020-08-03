import CourseList from '../../components/student/CourseList';
import StudentActions from '../../actions/student';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    courses: state.courseList,
});

const mapDispatchToProps = dispatch => ({
    loadCourseProfile: course => dispatch(StudentActions.loadCourseProfile(course)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);