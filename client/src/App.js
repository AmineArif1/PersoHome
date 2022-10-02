import { Route, Routes } from "react-router-dom"

import { SignUp } from "./user/authen/signup/SignUp"
import { InsertEmail} from "./user/authen/signup/InsertEmail"
import { InsertEmailTwo} from "./user/authen/signup/InsertEmailTwo"

import {ExtraInfoOne} from './user/authen/ExtraInfo/ExtraInfoOne'
import {ExtraInfoTwo} from './user/authen/ExtraInfo/ExtraInfoTwo'
import {ExtraInfoThree} from './user/authen/ExtraInfo/ExtraInfoThree'
import {ExtraInfoFour} from './user/authen/ExtraInfo/ExtraInfoFour'

export default function App() {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/insertEmail" element={<InsertEmail/>} />
      <Route path="/insertEmailTwo" element={<InsertEmailTwo/>} />
      <Route path="/ExtraInfoOne" element={<ExtraInfoOne/>} />
      <Route path="/ExtraInfoTwo" element={<ExtraInfoTwo/>} />
      <Route path="/ExtraInfoThree" element={<ExtraInfoThree/>} />
      <Route path="/ExtraInfoFour" element={<ExtraInfoFour/>} />
    </Routes>
  )
}