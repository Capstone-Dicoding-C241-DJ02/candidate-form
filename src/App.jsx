import {Suspense, lazy} from 'react';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const WelcomePage = lazy(() => import('./pages/WelcomePage'));
const Jobs = lazy(() => import('./pages/Jobs'));
const JobDetail = lazy(() => import('./pages/JobDetail'));
const ApplyForm = lazy(() => import('./pages/ApplyForm'));

function App() {
  return (
    <Router>
      <div className="flex items-center p-4 gap-5 h-screen">
        <div className="w-full">
          <Routes>
            <Route
              path="/"
              element={
                <Suspense>
                  <WelcomePage />
                </Suspense>
              }
            ></Route>
            <Route
              path="/jobs"
              element={
                <Suspense fallback={<h1>...Loading</h1>}>
                  <Jobs />
                </Suspense>
              }
            >
              <Route
                path="/jobs/:id"
                element={
                  <Suspense fallback={<h1>...Loading</h1>}>
                    <JobDetail />
                  </Suspense>
                }
              ></Route>
              <Route
                path="/jobs/:id/apply"
                element={
                  <Suspense fallback={<h1>...Loading</h1>}>
                    <ApplyForm />
                  </Suspense>
                }
              ></Route>
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
