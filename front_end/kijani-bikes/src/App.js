import { Route, Routes, BrowserRouter } from "react-router-dom";

import About from "./pages/About";

import Dashboard from "./pages/Dashboard";

import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
// import { SelectBike } from "./components/SelectBike";
import Rides from "./pages/Rides";
import Settings from "./pages/Settings";
import Signup from "./pages/Signup";
import Payment from "./pages/Payment";
import Trip from "./pages/Trip";

import UserContext from "./context/UserContext";
import StartContext from "./context/StartContext";
import React, { useState } from "react";
import RequireAuth from "./components/RequireAuth";
import Profile from "./pages/Profile";
// import Navbar from "./components/ForDash/Navbar";
import ReserveBike from "./pages/ReserveBike";
import UnlockBike from "./pages/Unlock";
// import NewMap from "./components/maps/NewMap";
import Blog from "./pages/Blog";

function App() {
  const [user, setUser] = useState("");
  const [trip, setTrip] = useState({});

  return (
    <>
      <StartContext.Provider value={{ trip, setTrip }}>
        <UserContext.Provider value={{ user, setUser }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/about" element={<About />} />

              <Route path="/dashboard" element={<Dashboard />} />
              <Route
                path="/settings"
                element={
                  <RequireAuth>
                    <Settings />
                  </RequireAuth>
                }
              />

              <Route path="reserve" element={<ReserveBike />} />
              <Route path="rides" element={<Rides />} />
              <Route path="unlock" element={<UnlockBike />} />
              <Route path="payment" element={<Payment />} />
              <Route path="trips" element={<Trip />} />
              <Route path="profile" element={<Profile />} />

              <Route path="blog" element={<Blog />} />
            </Routes>
          </BrowserRouter>
        </UserContext.Provider>
      </StartContext.Provider>
    </>
  );
}

export default App;
