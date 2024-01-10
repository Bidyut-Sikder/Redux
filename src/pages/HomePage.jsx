import React from 'react';
import StudentsLIst from '../components/StudentsLIst';

const HomePage = () => {
    return (
        <div>
            <h1 style={{textAlign:"center"}}>Students Table</h1>
            <StudentsLIst />
        </div>
    );
};

export default HomePage;