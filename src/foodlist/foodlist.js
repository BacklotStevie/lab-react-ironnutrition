import React, { useState } from 'react';
import './foodlist.css';
import 'bulma/css/bulma.css';
import FoodBox from './foodbox/foodbox';
import foods from '../foods.json'

function FoodList() {

    const [foodsDisplayed, setFoodsDisplayed] = useState(foods);
    const [formShown, setFormShown] = useState(false)

    const FoodListItems = () => {
        return foodsDisplayed.map(food => {
            return <FoodBox image={food.image} calories={food.calories} quantity={food.quanitity} name={food.name} />
        })
    }

    const showFoodForm = () => {
        setFormShown(!formShown)
    }

    const addFood = (event, valueType) => {
        console.log(event.target.parentNode)
        setFormShown(false);

    }

    return (
        <div>

            <div>
                <button onClick={showFoodForm}>Add New Food</button>
                {formShown ?
                    <form>
                        <input type="text" placeholder="name"></input>
                        <input type="text" placeholder="calories"></input>
                        <input type="text" placeholder="image link"></input>
                        <input type="submit" onClick={addFood}></input>
                    </form>
                    :
                    null
                }
            </div>




            <FoodListItems />
        </div>
    )
}

export default FoodList;