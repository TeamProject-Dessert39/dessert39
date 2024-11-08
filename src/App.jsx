import { BrowserRouter, Routes, Route, Link, HashRouter } from 'react-router-dom';
import Layout from './common/Layout';
import { NotFile, Main, Competitive, Interior, Procedure, Contact, Alliance, AlliancePurchasing, AllianceEntry, AllianceSupplier } from './pages';
import Dessert from './pages/menu/Dessert';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Main />} />
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
                            </Route>
                        </Route>

                        <Route path="*" element={<NotFile />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
