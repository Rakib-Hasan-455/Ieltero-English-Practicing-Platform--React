import './App.css'
import {Landing} from "./landing/Landing.tsx";
import SignIn from "./auth/signin/SignIn.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignUp from "./auth/signup/SignUp.tsx";

function App() {

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route index element={<Landing/>}/>
                <Route path="/" element={<Landing/>}/>
                <Route path="/sign-in" element={<SignIn/>}/>
                <Route path="/sign-up" element={<SignUp/>}/>
            </Routes>

        </BrowserRouter>
    </>
  )
}

export default App
