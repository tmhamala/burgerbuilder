import React from 'react';
import PropTypes from 'prop-types';
import myClasses from './BurgerIngredient.module.css';

const burgerIngredient = (props) => {
    let ingredient = null;

    switch (props.type) {
        case('bread-bottom'):
            ingredient = <div className={myClasses.BreadBottom}></div>;
            break;
        case ('bread-top'):
            ingredient = (
                <div className={myClasses.BreadTop}>
                    <div className={myClasses.Seeds1}></div>
                    <div className={myClasses.Seeds2}></div>
                </div>
            );
            break;
        case('meat'):
            ingredient = <div className={myClasses.Meat}></div>
            break;
        case('cheese'):
            ingredient = <div className={myClasses.Cheese}></div>
            break;
        case('bacon'):
            ingredient = <div className={myClasses.Bacon}></div>
            break;
        case('salad'):
            ingredient = <div className={myClasses.Salad}></div>
            break;
        default:
            ingredient = null;
    }

    return ingredient;
}

export default burgerIngredient;