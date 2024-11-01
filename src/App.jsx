import { BrowserRouter, Routes, Route, Link, HashRouter } from 'react-router-dom';
import Layout from './common/Layout';
import { NotFile, Main } from './pages';
import Dessert from './pages/menu/Dessert';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Main />} />
                        <Route path='/menu/dessert' element={<Dessert/>} />
                        <Route path='/menu/beverage' element={<Dessert />} />
                        <Route path='/menu/mdproduct' element={<Dessert />} />

                        <Route path="*" element={<NotFile />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
