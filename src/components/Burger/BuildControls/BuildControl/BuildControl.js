import React from 'react';
import myClasses from './BuildControl.module.css';

const buildControl = (props) => (
    <div className={myClasses.BuildControl}>
        <div className={myClasses.Label}>{props.label}</div>
        <button onClick={props.removed} className={myClasses.Less} disabled={props.disabled}>Less</button>
        <button onClick={props.added} className={myClasses.More}>More</button>
    </div>
)


export default buildControl;