import "./assets/fonts/LozungCaps-Regular.ttf";
import "./assets/fonts/Onest-Black.ttf";
import "./assets/fonts/Onest-Bold.ttf";
import "./assets/fonts/Onest-Medium.ttf";
import "./assets/fonts/Onest-Regular.ttf";
import "./assets/fonts/Onest-SemiBold.ttf";

import "./App.css";
import "./assets/css/utils/_fonts.scss";
import "./assets/css/utils/_reset.scss";
import "./assets/css/utils/_vars.scss";
import "./assets/css/utils/_mixins.scss";

import "./assets/css/_global.scss";
import "./assets/css/components/_hero.scss";
import "./assets/css/components/_army.scss";
import "./assets/css/components/_arrow.scss";
import "./assets/css/components/_contacts.scss";
import "./assets/css/components/_footer.scss";
import "./assets/css/components/_form.scss";

import "./assets/css/components/_gallery.scss";
import "./assets/css/components/_header.scss";
import "./assets/css/components/_help.scss";
import "./assets/css/components/_hero.scss";
import "./assets/css/components/_howto.scss";
import "./assets/css/components/_join.scss";
import "./assets/css/components/_payments.scss";
import "./assets/css/components/_requirements.scss";
import "./assets/css/components/_steps.scss";
import "./assets/css/components/_support.scss";
import "./assets/css/components/_typo.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/main";
import { AuthPage } from "./pages/auth";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="auth" element={<AuthPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
