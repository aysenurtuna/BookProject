import Box from "@material-ui/core/Box";
import CardMedia from "@material-ui/core/CardMedia";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import { NavLink, Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { BookDetailContext } from "../../Context/BookDetail";
import { ReadBookContext } from "../../Context/ReadBook";

function Card(props) {
  const [books, setBook] = useState([]);

  const { setDetail } = useContext(BookDetailContext);
  const { setreadBook, setFilteredType, type } = useContext(ReadBookContext);

  function comparePageIncrease(a, b) {
    return a.page - b.page;
  }
  function comparePageDecrease(a, b) {
    return b.page - a.page;
  }
  function compareNameIncrease(a, b) {
    return a.name.localeCompare(b.name);
  }
  function compareNameDecrease(a, b) {
    return b.name.localeCompare(a.name);
  }

  useEffect(() => {
    fetch("http://localhost:3000")
      .then((res) => res.json())
      .then((data) => {
        setBook("");
        if (type ==="artan") { //istenen türde artan sırlama istenirse
          for (let i = 0; i < data.length; i++) {
            setFilteredType((filteredType) => [...filteredType, data[i].type]);
            if (data[i].type === type) setBook((books) => [...books, data[i]]);
          }
          setBook(books.sort(comparePageIncrease))}
        else if(type === "azalan"){ //istenen türde azalan sıralama istenirse
          for (let i = 0; i < data.length; i++) {
            setFilteredType((filteredType) => [...filteredType, data[i].type]);
            if (data[i].type === type) setBook((books) => [...books, data[i]]);
          }
          setBook(books.sort(comparePageDecrease))}
        else if(type === "A-Z"){ //istenen türde a-z sıralama istenirse
          for (let i = 0; i < data.length; i++) {
            setFilteredType((filteredType) => [...filteredType, data[i].type]);
            if (data[i].type === type) setBook((books) => [...books, data[i]]);
          }
          setBook(books.sort(compareNameIncrease))
        }
        else if(type === "Z-A"){ //istenen türde z-a sıralama istenirse
          for (let i = 0; i < data.length; i++) {
            setFilteredType((filteredType) => [...filteredType, data[i].type]);
            if (data[i].type === type) setBook((books) => [...books, data[i]]);
          }
          setBook(books.sort(compareNameDecrease))
        }
       else if(type){//sadece tür istenirse
        for (let i = 0; i < data.length; i++) {
          setFilteredType((filteredType) => [...filteredType, data[i].type]);
          if (data[i].type === type) setBook((books) => [...books, data[i]]);
        }
       }
      else //tür seçilmezse tüm kitaplar gelir
          for (let i = 0; i < data.length; i++) {
            setFilteredType((filteredType) => [...filteredType, data[i].type]);
            setBook((books) => [...books, data[i]]);
          }
      });
  }, [type]);

  return books.filter((book) =>book.name.toLocaleLowerCase("tr-TR")
                .includes(props.search.search.toLocaleLowerCase("tr-TR")) || book.author
                .toLocaleLowerCase("tr-TR").includes(props.search.search.toLocaleLowerCase("tr-TR")))
        .map((book) => { return (
        <>
          <div className="col box-col" key={book.name}>
            <Box overflow="hidden" className="box">
              <Link to="/detay"><CardMedia image={book.img} className="card-img" onClick={() => {setDetail(book)}}/></Link>
              <Box><p className="book-name">{book.name}</p></Box>
              <Box><p className="book-author">{book.author}</p></Box>
              <Box><p className="page">{book.page} sayfa</p></Box>
              <Box>
                <ButtonGroup style={{ float: "right" }}>
                  <Button className="card-btn" onClick={() => {setreadBook({ name: book.name, read: true })}}>
                    <NavLink className="btn-link">Okudum</NavLink>
                  </Button>
                  <Button className="card-btn">
                    <NavLink className="btn-link" onClick={() => {setreadBook({ name: book.name, read: false })}}>
                      Listeye Ekle
                    </NavLink>
                  </Button>
                </ButtonGroup>
              </Box>
            </Box>
          </div>
        </>
      );
    });
}
export default Card;
