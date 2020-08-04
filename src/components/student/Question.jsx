import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const QuestionReview = ({ show, handleClose, question, value }) => {
    const selectedQuestion = question;
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Answer {question.answer}</Modal.Title>
            </Modal.Header>
            <Modal.Body>Your answer {question.response}</Modal.Body>
            <Modal.Footer>
                Your answer is {question.correct ? 'correct!': question.partial ? 'partially correct!' : 'incorrect!'}
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
};

export default QuestionReview;