import {Suspense, lazy} from 'react';
import Sidebar from './components/Sidebar';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const WelcomePage = lazy(() => import('./pages/WelcomePage'));
const JobDetail = lazy(() => import('./pages/JobDetail'));
const ApplyForm = lazy(() => import('./pages/ApplyForm'));

function App() {
  return (
    <Router>
      <div className="flex items-center p-4 gap-5 h-screen">
        <Sidebar />
        <div className="w-full">
          <Routes>
            <Route path="/" element={<WelcomePage />}></Route>
            <Route
              path="/jobs/:id"
              element={
                <Suspense fallback={<h1>Loading</h1>}>
                  <JobDetail />
                </Suspense>
              }
            ></Route>
            <Route
              path="/jobs/:id/apply"
              element={
                <Suspense fallback={<h1>Loading</h1>}>
                  <ApplyForm />
                </Suspense>
              }
            ></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
