import { createContext, useState } from "react";

export const BookDetailContext = createContext();

export const BookDetailProvider = (props) => {

    const [detail,setDetail] = useState({name:"",author:"",page:"",type:"",img:"type",description:""});
    return (
        <BookDetailContext.Provider value={{detail:detail,setDetail}}>
             {props.children}
        </BookDetailContext.Provider>
    )
}
