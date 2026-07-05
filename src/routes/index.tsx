import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import Dashboard from "../pages/Dashboard";
import Village from "../pages/Village";
import Water from "../pages/Water";
import Foundation from "../pages/Foundation";
import School from "../pages/School";
import Studio from "../pages/Studio";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/village" element={<Village />} />
          <Route path="/water" element={<Water />} />
          <Route path="/foundation" element={<Foundation />} />
          <Route path="/school" element={<School />} />
          <Route path="/studio" element={<Studio />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}