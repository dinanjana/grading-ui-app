import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CourseView from '../../views/studentView/CourseView';

const CourseList = ({ courses, loadCourseProfile }) => {
    return (
        <Accordion>
            {
                courses.map((course) => (
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey={course} onClick={() => loadCourseProfile(course)}>
                                {course}
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey={course}>
                          <CourseView/>
                        </Accordion.Collapse>
                    </Card>
                ))
            }
        </Accordion>
    );
};

export default CourseList;