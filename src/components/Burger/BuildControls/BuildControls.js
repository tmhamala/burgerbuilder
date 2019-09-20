import React from 'react';
import myClasses from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';


const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
];





const buildControls = (props) => (
    <div className={myClasses.BuildControls}>
        <p> Current price: <strong>{props.price.toFixed(2)} €</strong></p>
        { controls.map(ctrl => {
            return <BuildControl 
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                key={ctrl.label}
                label={ctrl.label}
                disabled={props.disabled[ctrl.type]}
                
                />
        }) }
        <button disabled={!props.purchaseable} onClick={props.ordered} className={myClasses.OrderButton}>ORDER NOW</button>
    </div>


)


export default buildControls;