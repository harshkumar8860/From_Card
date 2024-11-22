import JobApplicationForm from "./components/Form";
import JobCard from "./components/JobCard";
import Navbar from "./components/NavBar";
import Sidebar from "./components/SideBar";
import { Footer } from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen">
        {/* Sidebar Component */}
        <Sidebar />
        
        {/* Content Area (Form and Job Card) */}
        <div className="flex-1 flex flex-col">
          <Navbar />
          
          <div className="flex-1 overflow-y-auto">
            <JobApplicationForm />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
          </div>
          
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
