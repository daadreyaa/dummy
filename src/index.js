import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Otp from './component/OTP/otp';
import Dialog from "./component/OTP/dialog";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import SignUp from "./component/SignUp/signup";
import Patternpuzzle from "./component/Puzzle/Pattern";
import PolygonPuzzle from "./component/Puzzle/PolygonPuzzle";
import Puzzles from "./component/Puzzle/selection";
import ImgShuffle from "./component/Puzzle/ImgPuzzle";
import LanguageSelect from "./component/Puzzle/LanguagePuzzle";
import ConcentricCircle from './component/Puzzle/ConcentricCircle';
// require('dotenv').config()

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    // <Dialog />
    <BrowserRouter>
        <Routes>
            <Route path="/otp" element={<Otp />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/1" element={<Patternpuzzle />} />
            <Route path="/2" element={<PolygonPuzzle />} />
            <Route path="/3" element={<LanguageSelect />} />
            <Route path="/4" element={<ImgShuffle />} />
            <Route path="/5" element={<ConcentricCircle />} />

            <Route path="/selection" element={<Puzzles puzzles_selected={[1, 2, 3, 4, 5]} />} />
        </Routes>
    </BrowserRouter>
);

