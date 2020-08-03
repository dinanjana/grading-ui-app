import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import AssignmentView from '../../views/studentView/AssignmentView';

const AssigmentList = ({ assignments, student, loadAssignment }) => {
    return (
        <Accordion>
            {
                assignments.map((assignment) => (
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey={assignment.title} onClick={() => loadAssignment(student, assignment.id)}>
                                {assignment.title}
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey={assignment.title}>
                            <AssignmentView/>
                        </Accordion.Collapse>
                    </Card>
                ))
            }
        </Accordion>
    );
};

export default AssigmentList;