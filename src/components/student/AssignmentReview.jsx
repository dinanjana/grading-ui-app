import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import QuestionReview from "./Question";

const AssignmentReview = ({ questions }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
            {
                questions.map((question, i) => (
                    <>
                        <Button variant="warning" onClick={handleShow}>
                            {question.question}
                        </Button>
                        <QuestionReview show={show} handleClose={handleClose} question={question} key={question.question}/>
                    </>
                ))
            }

        </>);
};

export default AssignmentReview;