import { createContext, useState, useEffect } from "react";

export const ReadBookContext = createContext();
export const ReadBookProvider = (props) => {

  const [readBook, setreadBook] = useState({});
  const [list, setList] = useState([]);
  const [deleteBook,setDeleteBook] = useState({});
  const [filteredType,setFilteredType] = useState([]); //kitap türlerini tutuyor
  const [type,setType] = useState(""); //istenen kitap türünü tutuyor

  //local storage' a kitap eklemek
  useEffect(() => {
    let books=[];
    let control = false;
    if(JSON.parse(localStorage.getItem("books")) !== null){
      books = JSON.parse(localStorage.getItem("books"));
    }

    //daha önce herhangi bir listeye eklenmiş mi kontrolü
    for (let i = 0; i < books.length; i++) {
      if(books[i].name === readBook.name) control = true;
    }
    if(control === false) books.push(readBook);
    else alert("Bu kitap zaten listenizde!")
  
    localStorage.setItem("books",JSON.stringify(books))
    setList(JSON.parse(localStorage.getItem("books")));
    
  }, [readBook]);

  //local storage' dan veri silmek
  useEffect(() => {
    let books=[];
    let index = 0;
    books = JSON.parse(localStorage.getItem("books"));
    books.forEach(book => {
      if (book.name === deleteBook.name) {
        books.splice(index,1);
      }
      else index++;
    });
    
    localStorage.setItem("books",JSON.stringify(books));
    setList(JSON.parse(localStorage.getItem("books")));
    
  }, [deleteBook]);

 

  return (
    <ReadBookContext.Provider value={{ readBook: readBook, setreadBook,list,setDeleteBook,setFilteredType,filteredType,setType,type }}>
      {props.children}
    </ReadBookContext.Provider>
  );
};
