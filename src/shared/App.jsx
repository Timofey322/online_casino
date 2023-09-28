import {hot} from 'react-hot-loader/root'
import * as React from 'react'
import styles from './app.css'
// import './fonts/Roboto/Roboto-Bold.woff2';
import './img/Backgroundimage.svg';
import "./fonts/Roboto/Roboto-Bold.ttf";
// import {Layout} from './Layout/Layout.tsx'
// import {Tittle} from './Layout/ControlledForm/Tittle.tsx'
import {ControlledForm} from './ControlledForm/ControlledForm.tsx'
// import {ThreadTittle} from './Header/ThreadTittle.tsx'

function AppComponent () {
  return(
      <div className={styles.container}>
        <h1 className={styles.header}>Анкета для новых клиентов AGIMA</h1>
        <ControlledForm/>
      </div>
  )
}

export const App = hot(AppComponent)
