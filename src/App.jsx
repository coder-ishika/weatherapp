import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CityTable from './components/CityTable';
import WeatherPage from './components/WeatherPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
    return (
        <div className="flex flex-col min-h-screen bg-customBlue">
            <div>
                <Navbar />
            </div>
            <div className="flex-1">
                <Router>
                    <Routes>
                        <Route path="/" element={<CityTable />} />
                        <Route path="/weather/:city" element={<WeatherPage />} />
                    </Routes>
                </Router>
            </div>
            <Footer />
        </div>
    );
}

export default App;
