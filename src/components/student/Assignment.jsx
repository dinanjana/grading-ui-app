import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import AssignmentReviewView from '../../views/studentView/AssignmentReviewView';

const Assignment = ({ title, score, total, loadAssignmentReview, student, assignment }) => (
    <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>Score: {score}/{total}</Card.Text>
        <Card.Footer>
            <Button onClick={() => loadAssignmentReview(student, assignment)}>Review Answers</Button>
            <AssignmentReviewView/>
        </Card.Footer>
    </Card.Body>);

export default Assignment;