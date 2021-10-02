
import React, { useEffect, useState } from 'react';
import { FormControl, InputGroup, Button, Row } from 'react-bootstrap';
import Meal from '../Meal/Meal';

const Menu = () => {

    const [searchText, setSearchText] = useState('');
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
            .then(res => res.json())
            .then(data => setMenu(data.meals))
    }, [searchText])
    const handleMeal = (event) => {
        const searchTextValue = event.target.value
        setSearchText(searchTextValue);
    }


    return (
        <div>
            <h2> Search your Meal</h2>
            <InputGroup onChange={handleMeal} className="mb-3 w-50 mx-auto" >
                <FormControl
                    placeholder="search meal"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary" id="button-addon2">
                    Search
                </Button>
            </InputGroup>

            <Row xs={1} md={4} className="g-4">

            {
                menu.map(meal => <Meal meal={meal} key={meal.idMeal}/>)
            }

            </Row>

            



        </div>
    );
};

export default Menu;