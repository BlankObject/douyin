import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import Main from '../main/main';
export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Main/>}>

                </Route>
            </Routes>
        </BrowserRouter>
    )
}