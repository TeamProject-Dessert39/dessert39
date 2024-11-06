import { BrowserRouter, Routes, Route, Link, HashRouter } from 'react-router-dom';
import Layout from './common/Layout';
import { NotFile, Main, Bi, Intro, Headquarters, Location } from './pages';
import Dessert from './pages/menu/Dessert';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Main />} />

                        <Route path="/brand">
                            <Route index path="intro" element={<Intro />} />
                            <Route path="bi" element={<Bi />} />
                            <Route path="headquarters" element={<Headquarters />} />
                            <Route path="location" element={<Location />} />
                        </Route>

                        <Route path="/menu/dessert" element={<Dessert />} />
                        <Route path="/menu/beverage" element={<Dessert />} />
                        <Route path="/menu/mdproduct" element={<Dessert />} />

                        <Route path="*" element={<NotFile />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
