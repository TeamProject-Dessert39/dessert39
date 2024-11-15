import { BrowserRouter, Routes, Route, Link, HashRouter } from 'react-router-dom';
import Layout from './common/Layout';
import {
    NotFile,
    Main,
    Bi,
    Intro,
    Headquarters,
    Location,
    Competitive,
    Interior,
    Procedure,
    Contact,
    Alliance,
    AlliancePurchasing,
    AllianceEntry,
    AllianceSupplier,
    AllianceSupplier2,
    AllianceSupplier3,
} from './pages';
import Dessert from './pages/menu/Dessert';
import Store from './pages/store';
import Mainintro from './pages/brand/MainIntro';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/intro' element={<Mainintro />} />
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

                        {/* franchise */}
                        <Route path="/franchise">
                            <Route path="competitive" element={<Competitive />} />
                            <Route path="interior" element={<Interior />} />
                            <Route path="procedure" element={<Procedure />} />
                            <Route path="contact" element={<Contact />} />
                            <Route path="alliance">
                                <Route index element={<Alliance />} />
                                <Route path="alliancePurchasing" element={<AlliancePurchasing />} />
                                <Route path="allianceEntry" element={<AllianceEntry />} />
                                <Route path="allianceSupplier" element={<AllianceSupplier />} />
                                <Route path="allianceSupplier2" element={<AllianceSupplier2 />} />
                                <Route path="allianceSupplier3" element={<AllianceSupplier3 />} />
                            </Route>
                        </Route>

                        {/* store */}
                        <Route path='/store'>
                            <Route path='competitiveness' element={<Store/>}></Route>
                        </Route>

                        <Route path="*" element={<NotFile />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
