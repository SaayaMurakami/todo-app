import React, { useState } from 'react';

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
            <button onClick= {ageButtonClick}>年齢++</button>
            <button onClick= {heightButtonClick}>身長++</button>
        </div>
    )
}

export default Person;