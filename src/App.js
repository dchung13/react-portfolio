import './App.css';
import { Header, Footer, Contacts, Project, Navigation } from './components/';

function App() {
  return (
    <div className="header-bar">
      <Header />
    </div>
    <div className="footer-bar">
      <Footer />
    </div>
    <div className="contact-info">
      <Contacts />
    </div>
    <div className="project-card">
      <Project />
    </div>
    <div className="nav-bar">
      <Navigation />
    </div>
  );
}

export default App;
