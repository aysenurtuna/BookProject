import React from "react";
import { useContext } from "react";
import { ReadBookContext } from "../../Context/ReadBook";

function Filter() {
  const { filteredType,setType} = useContext(ReadBookContext);
  const types = Array.from(new Set(filteredType));
  
  return (
    <>
      <div className="box-col btns mt-2">
        <div className="dropdown filter-btn rounded p-0">
          <button
            className="btn dropdown-toggle"
            type="button"
            id="dropdownMenu2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Sırala
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
            <li>
              <button className="dropdown-item" type="button" onClick={()=> setType("artan")}>
                Sayfa Artan
              </button>
            </li>
            <li>
              <button className="dropdown-item" type="button" onClick={()=> setType("azalan")}>
                Sayfa Azalan
              </button>
            </li>
            <li>
              <button className="dropdown-item" type="button" onClick={()=> setType("A-Z")}>
                A-Z
              </button>
            </li>
            <li>
              <button className="dropdown-item" type="button" onClick={()=> setType("Z-A")}>
                Z-A
              </button>
            </li>
          </ul>
          
        </div>
        <button type="button" className="btn filter-btn btn-show" onClick={()=> setType()}>Tümü</button>
        {
        
        types.map((bookType) => {
          return (
            <>
              <button type="button" className="btn filter-btn btn-show" key={bookType} onClick={()=> setType(bookType)}>{bookType}</button>
            </>
          );
        })}

{/* ekran boyutu küçülünce türler dropdown olarak gösterilecek */}
<div className="dropdown-container m-auto">
      <div className="dropdown dropdown-show filter-btn rounded p-0">
          <button
            className="btn dropdown-toggle"
            type="button"
            id="dropdownMenu2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Tür
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
            <li><button type="button" className="btn filter-btn btn-show" onClick={()=> setType()}>Tümü</button></li>
            {
              types.map((bookType)=>{
                return (
                  <>
                <li>
                <button type="button" className="dropdown-item" key={bookType} onClick={()=> setType(bookType)}>{bookType}</button>
                </li>
                  </>
                )
              })
            }
          </ul>
        </div>
      </div>
      </div>

      
      
    </>
  );
}

export default Filter;
