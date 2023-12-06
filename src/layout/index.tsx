import React from 'react';
import { 
    BrowserRouter,
    Route,
    Routes
} from 'react-router-dom';
import Login from '../pages/Login';
import Layout from './Layout';

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />}/>
                <Route path='/dawn' element={<Layout />} />
            </Routes>
        </BrowserRouter>
    )
};

export default Router;