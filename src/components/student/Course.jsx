import React from 'react';
import Card from 'react-bootstrap/Card';
import AssignmentListView from '../../views/studentView/AssignmentListView';

const Course = ({ title, description }) => (
    <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>Assignments</Card.Text>
        <Card.Body>
            <AssignmentListView/>
        </Card.Body>
    </Card.Body>);

export default Course;