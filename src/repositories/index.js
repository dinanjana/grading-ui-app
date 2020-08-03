import axios from 'axios';
const BASE_URL = 'http://localhost:3001';

const getStudentProfile = student => axios.get(`${BASE_URL}/student/${student}`);

const getCourseProfile = course => axios.get(`${BASE_URL}/course/${course}`);

const getAssignmentByStudent = (assignment, student) => axios.get(`${BASE_URL}/assignments/${assignment}/students/${student}`);

const getAssignmentReviewByStudent = (assignment, student) => axios.get(`${BASE_URL}/assignments/${assignment}/students/${student}/review`);

export default {
    getStudentProfile,
    getCourseProfile,
    getAssignmentByStudent,
    getAssignmentReviewByStudent
}