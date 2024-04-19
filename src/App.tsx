import { useState } from 'react'
import './App.css'
import './assets/css/utils/_reset.scss';
import './assets/css/utils/_vars.scss';
import './assets/css/utils/_mixins.scss';

import './assets/css/_global.scss';
import './assets/css/components/_hero.scss';
import './assets/css/components/_army.scss';
import './assets/css/components/_arrow.scss';
import './assets/css/components/_contacts.scss';
import './assets/css/components/_footer.scss';

import './assets/css/components/_gallery.scss';
import './assets/css/components/_header.scss';
import './assets/css/components/_help.scss';
import './assets/css/components/_hero.scss';
import './assets/css/components/_howto.scss';
import './assets/css/components/_join.scss';
import './assets/css/components/_payments.scss';
import './assets/css/components/_requirements.scss';
import './assets/css/components/_steps.scss';
import './assets/css/components/_support.scss';
import './assets/css/components/_typo.scss';
import { Header } from './features/header/Header'
import { Main } from './features/main/Main';
import { Footer } from './features/footer/Footer';

function App() {
  return (
    <>
      <Header/>
      <Main/>
      <Footer/>
    </>
  )
}

export default App
