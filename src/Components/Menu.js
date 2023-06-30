import React from 'react'
import { HashRouter, Link, Route, Routes } from 'react-router-dom'
import { WithoutRedux } from './WithoutRedux/WithoutRedux'
import { ReduxGetData } from './WithoutReduxClass/ReduxGetData'
import { WithRedux } from './WithRedux/WithRedux'
import WithReduxC from './WithReduxClass/WithReduxC'
import { WithReduxF } from './WithReduxFunctional/WithReduxF'

export const Menu = () => {
  return (
        <HashRouter>
            <div id="menu">
            <Link to="/WithoutRedux">WithoutRedux</Link>
            <Link to="/reduxSample">Redux Sample</Link>
            <Link to="/reduxSampleC">Redux SampleC</Link>
            <Link to="/reduxGetData">Redux GetData</Link>
            <Link to="/reduxSampleF">Redux Sample Functional</Link>
            </div>
            <Routes>
                <Route path="/WithoutRedux" element={<WithoutRedux/>}/>
                <Route path="/reduxSample" element={<WithRedux/>}/>
                <Route path="/reduxSampleC" element={<WithReduxC/>}></Route>
                <Route path="/reduxGetData" element={<ReduxGetData/>}></Route>
                <Route path="/reduxSampleF" element={<WithReduxF/>}></Route>
            </Routes>
        </HashRouter>
  )
}
