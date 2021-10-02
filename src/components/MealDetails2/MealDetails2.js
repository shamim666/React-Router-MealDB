import React from 'react';
import { Card ,Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const MealDetails_2 = (props) => {
const {strArea , strMealThumb ,strInstructions , strMeal} = props.meal
    const history = useHistory();
    const handleMeal = () => {

        history.push(`/menu`)
    }
    return (
        <div>
             <Card className="mx-auto" style={{ width: '28rem' }}>
                <Card.Img variant="top" src={strMealThumb} />
                <Card.Body>
                    <Card.Title>Name:{strMeal}</Card.Title>
                    <Card.Title>Area:{strArea}</Card.Title>
                    <Card.Text>
                        Description: {strInstructions.slice(0,100)}
                    </Card.Text>
                    <Button onClick={handleMeal} variant="primary">Go to Meals</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default MealDetails_2;