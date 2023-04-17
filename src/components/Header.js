import React from 'react';
import { useNavigate } from 'react-router-dom'

export const Header = () => {
    const navigate = useNavigate()
    return (
        <header>
            <h1>Expense Tracker</h1>
            <button onClick={() => navigate('/', { replace: true })}>
                Header here
            </button>
        </header>
    )
}

export default Header;