import React from 'react';
import myClasses from './Burger.module.css';
import BurgerIngedient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {


    let transformedIngredients = Object.keys(props.ingredients).map(igKey => {
        return [...Array( props.ingredients[igKey] )].map( (_, i) => {
            return <BurgerIngedient key={igKey + i} type={igKey}></BurgerIngedient>
        });
    }).reduce((arr, el) => {
        return arr.concat(el)
    }, [])


    if(transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients</p>
    }


    return (
        <div className={myClasses.Burger}>
            <BurgerIngedient type="bread-top"></BurgerIngedient>
            {transformedIngredients}
            <BurgerIngedient type="bread-bottom"></BurgerIngedient>
        </div>
    );


}

export default burger;