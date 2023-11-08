import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import Navbar from './components/Navbar';
import Home from './Pages/Home';
import ExerciseDetail from './Pages/ExerciseDetail';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
        </Routes>
        <Footer />
      </Box>
    </div>
  );
}

export default App;
