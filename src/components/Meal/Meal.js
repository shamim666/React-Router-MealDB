import React from 'react';
import { Card, Col , Button } from 'react-bootstrap';
import { useHistory } from 'react-router';


const Meal = (props) => {
    const {strMeal , strMealThumb , strArea, idMeal } = props.meal 

const history = useHistory(); 
const handleMealDetails = () => {

history.push(`/meal/${idMeal}`)
}


    return (
        <div>
           <Col>
                    <Card>
                        <Card.Img variant="top" src={strMealThumb} />
                        <Card.Body>
                            <Card.Title>Name: {strMeal}</Card.Title>
                            <Card.Title>Origin: {strArea}</Card.Title>
                            <Button onClick={handleMealDetails} variant="primary">Meal Details</Button>
                        </Card.Body>
                    </Card>
                </Col>
        </div>
    );
};

export default Meal;