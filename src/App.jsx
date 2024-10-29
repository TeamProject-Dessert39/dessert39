import { BrowserRouter, Routes, Route, Link, HashRouter } from 'react-router-dom';
import Layout from './common/Layout';
import { NotFile, Main } from './pages';

const App = () => {
    return (
        <>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Main />} />

                        <Route path="*" element={<NotFile />} />
                    </Route>
                </Routes>
            </HashRouter>
        </>
    );
};

export default App;
