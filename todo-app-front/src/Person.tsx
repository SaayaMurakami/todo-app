import React, { useState } from 'react';
import Button from '@material-ui/core/Button';


interface PersonProps {
    name: string
    age: number
    height: number
}

const Person: React.FC<PersonProps> = (props) => {

    const [age, setAge] = useState(props.age);
    const [height, setHeight] = useState(props.height);


    const ageButtonClick = () => {
        setAge(age + 1);
    }

    const heightButtonClick = () => {
        setHeight(height + 1);
    }

    return (
        <div>
            {props.name}
            {age}歳
            {height}cm
            <Button variant="contained" color="primary" onClick= {ageButtonClick}>年齢++</Button>
            <Button variant="contained" color="primary" onClick= {heightButtonClick}>身長++</Button>
        </div>
    )
}

export default Person;