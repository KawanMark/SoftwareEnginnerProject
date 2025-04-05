import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/globalStyles';
import theme from './styles/theme';
import Home from './pages/Home';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Dashboard from './pages/Chatbot/Dashboard';
import Training from './pages/Chatbot/Training';
import Integrations from './pages/Integrations';
import SupportPage from './pages/Support';
import Payment from './pages/Payment';
import TrainedChatbot from './pages/TrainedChatbot';
import SharingPanel from './pages/SharingPanel';
import Marketplace from './pages/Marketplace';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/training" element={<Training />} />
          <Route path="/Support" element={<SupportPage />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/trained-chatbot" element={<TrainedChatbot />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/sharing" element={<SharingPanel />} />
          <Route path="/marketplace" element={<Marketplace />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;