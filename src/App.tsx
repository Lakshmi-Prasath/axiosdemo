import { ThemeProvider } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import customTheme from './utils/theme';
import AppbarComp from './appBar/AppbarComp';
import { Routes, Route, Router } from "react-router";


import DevScatterUi from './devscatterui/DevScatterUi';
import LoginPage from './pages/loginPage/LoginPage';
import DrawerComp from './dawer/DrawerComp';
import SignupPage from './pages/signupPage/SignupPage';
import ForgotPasswordPage from './pages/forgotpasswordPage/ForgotPasswordPage';
import HomescreenPage from './pages/homescreenPage/HomescreenPage';
import OtpPage from './pages/otpscreenPage/OtpPage';
import ResetPasswordPage from './pages/5resetpassword/ResetPasswordPage';
import AddAccountPage from './pages/6addaccount/AddAccountPage';
import InvitePage from './pages/8invitepage/InvitePage';
import AxiosPage from './pages/axiospage/AxiosPage';

function App() {

  return (
    <>
      <ThemeProvider theme={customTheme}>
        <BrowserRouter>
          <AppbarComp />

          <Routes>
            <Route path="/" element={<DevScatterUi />} />
            <Route path="/axiospage" element={<AxiosPage />} />
            <Route path="/loginpage" element={<LoginPage />} />
            <Route path="/signuppage" element={<SignupPage />} />
            <Route path="/forgotpasswordpage" element={<ForgotPasswordPage />} />
            <Route path="/homescreenpage" element={<HomescreenPage />} />
            <Route path="/otppage" element={<OtpPage />} />
            <Route path="/resetpasswordpage" element={<ResetPasswordPage />} />
            <Route path="/addaccountpage" element={<AddAccountPage />} />
            <Route path="/invitepage" element={<InvitePage />} />
            <Route path="/appbarcomp" element={<AppbarComp />} />
            <Route path='/drawercomp' element={<DrawerComp />} />
          </Routes>

        </BrowserRouter>
      </ThemeProvider >
    </>
  );
}

export default App;
