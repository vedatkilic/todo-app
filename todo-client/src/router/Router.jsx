import * as React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import TodoPage from "../features/todo/TodoPage.jsx";
import LoginPage from "../features/login/LoginPage.jsx";
import SignupPage from "../features/signup/SignupPage.jsx";
import PrivateRoutes from "./PriveRoute.jsx";


const AppRouter = () => (
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
            <Router>
                <Routes>
                    <Route element={<PrivateRoutes />}>
                        <Route element={<TodoPage />} path={"/"} exact/>
                    </Route>
                    <Route element={<LoginPage />} path="/login"></Route>
                    <Route element={<SignupPage />} path="/signup"></Route>
                </Routes>
            </Router>
        </div>
    </div>
)

export default AppRouter;
