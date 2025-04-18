import { useEffect } from 'react';
import {Navigate,Outlet,Route,Routes} from "react-router-dom";
import { Toaster } from 'sonner';
import SignIn from './pages/auth/sign-in.jsx';
import SignUp from './pages/auth/sign-up.jsx';
import DashBoard from './pages/dashboard.jsx';
import Settings from './pages/settings.jsx';
import AccountPage from './pages/account-page.jsx';
import TransactionPage from './pages/transactions.jsx';
import useStore from './store';
import { setAuthToken } from './libs/apiCall.js';
import Navbar from './components/navbar.tsx';


const RootLayout = () => {
  const { user } = useStore((state) => state);
  console.log("User in RootLayout:", user);  // Debugging line
  setAuthToken(user?.token || "");

  return !user ? (
    <Navigate to="/sign-in" replace />
  ) : (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-100px)]">
        <Outlet />
      </div>
    </>
  );
};



function App() {
  const {theme} = useStore((state) => state);
  useEffect(() => {
    if (theme==="dark") {
      document.body.classList.add(theme);
    } else {
      document.body.classList.remove("dark");
      
    }
  }, [theme]);
  return (
  <main>
      <div className="w-full min-h-screen px-6 bg-gray-100 md:px-20 dark:bg-slate-900">
        <Routes>
          <Route element={<RootLayout/>}>
            <Route path="/" element={<Navigate to="/overview" />}/>
            <Route path="/overview" element={<DashBoard />} />
            <Route path="/transactions" element={<TransactionPage />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/accounts" element={<AccountPage />} />
          </Route>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </div>

      <Toaster richColors position="top-center" />
    </main>
  );
}

export default App;
