import {NavLink} from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <NavLink to="/new">Something</NavLink>
            <NavLink to="/anotherplace">Something else</NavLink>
            <NavLink to="/welcome">Something else</NavLink>

        </div>
    );
};

export default Navigation;