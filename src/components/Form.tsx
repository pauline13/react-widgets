import React, { useState } from 'react';
import Button, { ButtonTheme } from './Button';

// interface formProps {
//     title: string;
//     // handleClick: () => ();
// }

//@ts-ignore
const Form = ({ title, handleClick }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>
            <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="email"
            />
            <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="password"
            />

            <Button theme={ButtonTheme.ADD} onClick={() => handleClick(email, password)}>
                {title}
            </Button>
        </div>
    );
};

export default Form;
