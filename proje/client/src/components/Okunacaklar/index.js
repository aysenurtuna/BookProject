import { ReadBookContext } from "../../Context/ReadBook";
import { useContext } from "react";

function Okunacaklar() {
  const { list, setDeleteBook } = useContext(ReadBookContext);
  const { setreadBook } = useContext(ReadBookContext);
  let counter = 1;
  return (
    <>
      <div style={{ textAlign: "center" }} className="my-3">
        <h3 className="list-title">Okuyacağım Kitaplar</h3>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Kitap</th>
            <th scope="col">Sil</th>
            <th>Okudum</th>
          </tr>
        </thead>
        <tbody>
          {list
            .filter((book) => book.read === false)
            .map((book) => {
              return (
                <>
                  <tr key={book.name}>
                    <th scope="row">{counter++}</th>
                    <td>{book.name}</td>
                    <td onClick={() => setDeleteBook(book)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-trash3"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                      </svg>
                    </td>
                    <td onClick={() => {setDeleteBook(book); setTimeout(() => {
                      setreadBook({name:book.name, read:true});
                    }, 1000);}}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-bookmark"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                      </svg>
                    </td>
                  </tr>
                </>
              );
            })}
        </tbody>
      </table>
    </>
  );
}

export default Okunacaklar;
