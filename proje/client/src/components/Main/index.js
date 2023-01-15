import Card from "../Card";
import Okunacaklar from "../Okunacaklar";
import Detay from "../Detay"
import { Routes, Route } from "react-router-dom";
import Okuduklarim from "../Okuduklarim";
import { BookDetailProvider } from "../../Context/BookDetail";
import { ReadBookProvider } from "../../Context/ReadBook";
import Filter from "../Filter";

function Main(props) {
 
  return (
    <>
      <div className="main">
        <div className="container">
          <div className="row">
            <Routes>
              <Route path="/" element={<ReadBookProvider><BookDetailProvider><Filter></Filter><Card search={props}></Card>,</BookDetailProvider></ReadBookProvider>}></Route>
              <Route
                path="/okunacaklistesi"
                element={<ReadBookProvider><Okunacaklar></Okunacaklar></ReadBookProvider>}
              ></Route>
              <Route
                path="/okuduklarim"
                element={<ReadBookProvider><Okuduklarim></Okuduklarim></ReadBookProvider>}
              ></Route>
              <Route
                path="/detay"
                element={<ReadBookProvider><BookDetailProvider><Detay></Detay></BookDetailProvider></ReadBookProvider>}
              ></Route>
            </Routes>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
