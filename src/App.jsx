import {Suspense, lazy} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Loading from './components/Loading';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const WelcomePage = lazy(() => import('./pages/WelcomePage'));
const Jobs = lazy(() => import('./pages/Jobs'));
const JobDetail = lazy(() => import('./pages/JobDetail'));
const ApplyForm = lazy(() => import('./pages/ApplyForm'));

function App() {
  return (
    <Router>
      <div className="flex items-center h-screen">
        <ToastContainer position="top-right" theme="light" />
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
                <Suspense fallback={<Loading />}>
                  <Jobs />
                </Suspense>
              }
            >
              <Route
                path="/jobs/:id"
                element={
                  <Suspense fallback={<Loading />}>
                    <JobDetail />
                  </Suspense>
                }
              ></Route>
              <Route
                path="/jobs/:id/apply"
                element={
                  <Suspense fallback={<Loading />}>
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
