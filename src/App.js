import React from 'react'
import {Navigate, Routes, Route, BrowserRouter} from 'react-router-dom';
// import Details from './pages/Details';
import Navbar from './pages/Navbar';
import Application from './pages/Application';
import Custom from './pages/Custom';
import Apause from './pages/Apause';
import AStop from './pages/AStop';
import ASkip from './pages/ASkip';
import Status from './pages/Status';
import Type from './pages/Type';
import Aaction from './pages/Aaction';
import Apositions from './pages/Apositions';
import Arole from './pages/Arole';
import ARisk from './pages/ARisk';
import AStatus from './pages/AStatus';
import AType from './pages/AType';
import Aclassification from './pages/Aclassification';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route  path="details" >
        {/* <Route index element={<Details />} /> */}
          <Route path="app" element={<Application />} />
          <Route path="custom" element={<Custom />} />
        </Route>
        <Route  path="reason" >
          <Route path="apause" element={<Apause />} />
          <Route path="astop" element={<AStop />} />
          <Route path="askip" element={<ASkip />} />
        </Route>
        <Route  path="amodel" >
          <Route path="status" element={<Status />} />
          <Route path="type" element={<Type/>} />
        </Route>
        <Route  path="atask" >
          <Route path="aaction" element={<Aaction />} />
        </Route>
        <Route  path="auser" >
          <Route path="apositions" element={<Apositions />} />
          <Route path="arole" element={<Arole />} />
        </Route>
        <Route  path="afinding" >
          <Route path="arisk" element={<ARisk />} />
          <Route path="status" element={<AStatus />} />
          <Route path="types" element={<AType />} />
        </Route>
        <Route  path="afeedback" >
          <Route path="aclassification" element={<Aclassification />} />
        </Route>
       
      </Routes>
    </BrowserRouter>
   
  )
}

export default App



