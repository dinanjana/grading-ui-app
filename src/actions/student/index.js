import Repository from '../../repositories';
import Events from '../../events/student';

const loadStudentProfile = student => ({
    type: Events.LOAD_STUDENT_PROFILE,
    payload: Repository.getStudentProfile(student)
});

const loadCourseProfile = course => ({
    type: Events.LOAD_COURSE,
    payload: Repository.getCourseProfile(course)
});

const loadAssignment = (student, assignment) => ({
    type: Events.LOAD_ASSIGNMENT,
    payload: Repository.getAssignmentByStudent(assignment, student)
});

const loadAssignmentReview = (student, assignment) => ({
   type: Events.LOAD_ASSIGNMENT_REVIEW,
   payload: Repository.getAssignmentReviewByStudent(assignment, student)
});

export default {
    loadStudentProfile,
    loadCourseProfile,
    loadAssignment,
    loadAssignmentReview
};