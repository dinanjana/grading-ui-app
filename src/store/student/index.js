import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise-middleware';
import _ from 'lodash';
import Events from '../../events/student'

const initialState = {
  studentProfile: {
      student: null,
      assignments: []
  },
  courseList: [],
  selectedCourse: {
      title: null,
      description: null,
      assignments: [],
  },
  openedAssignment: {
      id: null,
      title: null,
      score: 0,
      total: 0
  },
  reviewingAssignment: {
      questions: [],
  },

  assignmentNotSubmitted: {
      message: null,
  }
};

const cleanSelectedCourse = state => _.chain(state)
    .clone()
    .set('selectedCourse.title', null)
    .set('selectedCourse.description', null)
    .set('selectedCourse.assignments', [])
    .value();

const cleanOpenedAssignment = state => _.chain(state)
    .clone()
    .set('openedAssignment.id', null)
    .set('openedAssignment.title', null)
    .set('openedAssignment.score', 0)
    .set('openedAssignment.total', 0)
    .value();

const cleanReviewingAssignment = state => _.chain(state)
    .clone()
    .set('reviewingAssignment.questions', [])
    .value();

const cleanAssignmentNotSelected = state => _.chain(state)
    .clone()
    .set('assignmentNotSubmitted.message', null)
    .value();

const cleanStateWhenChanging = state => cleanReviewingAssignment(cleanOpenedAssignment(cleanSelectedCourse(state)));

const reducer = (state = initialState, action) => {
    console.log(`Event fired: ${JSON.stringify(action)}`);
    const data = action.payload ? action.payload.data : {};
    switch (action.type) {
        case Events.LOAD_STUDENT_PROFILE_FULFILLED: {
            return _.chain(state)
                .clone()
                .set('studentProfile.student', data.student)
                .set('courseList', data.courses)
                .set('studentProfile.assignments', data.assignments)
                .value();
        }
        case `${Events.LOAD_COURSE}_PENDING`: {
            return cleanStateWhenChanging(state);
        }
        case Events.LOAD_COURSE_FULFILLED: {
            return _.chain(state)
                .clone()
                .set('selectedCourse.title', data.title)
                .set('selectedCourse.description', data.description)
                .set('selectedCourse.assignments', data.assignments)
                .value();
        }
        case `${Events.LOAD_ASSIGNMENT}_PENDING`: {
            return cleanAssignmentNotSelected(cleanReviewingAssignment(cleanOpenedAssignment(state)));
        }
        case `${Events.LOAD_ASSIGNMENT}_REJECTED`: {
            return _.chain(state)
                .clone()
                .set('assignmentNotSubmitted.message', 'Assignment not submitted')
                .value();
        }
        case Events.LOAD_ASSIGNMENT_FULFILLED: {
            return _.chain(state)
                .clone()
                .set('openedAssignment.id', data.id)
                .set('openedAssignment.title', data.assignment)
                .set('openedAssignment.score', data.score)
                .set('openedAssignment.total', data.total)
                .value();
        }
        case `${Events.LOAD_ASSIGNMENT_REVIEW}_PENDING`: {
            return cleanReviewingAssignment(state);
        }
        case Events.LOAD_ASSIGNMENT_REVIEW_FULFILLED: {
            return _.chain(state)
                .clone()
                .set('reviewingAssignment.questions', data)
                .value();
        }
        default:
            return state;
    }

};

const StudentStore = createStore(reducer, initialState, applyMiddleware(promise));

export default StudentStore;