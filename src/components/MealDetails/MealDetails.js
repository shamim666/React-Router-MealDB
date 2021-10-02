import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import MealDetails2 from '../MealDetails2/MealDetails2';

const MealDetails = () => {

    const [mealID, setMealID] = useState([])



    const { meal_ID } = useParams();


    

   

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal_ID}`)
            .then(res => res.json())
            .then(data => setMealID(data.meals))
    }, [])
    return (
        <div>

           { mealID.map(meal => meal = <MealDetails2 meal ={meal} key={meal.idMeal}/>  ) }
        </div>
    );
};

export default MealDetails;