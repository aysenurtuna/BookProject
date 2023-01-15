import Box from "@material-ui/core/Box";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { BookDetailContext } from "../../Context/BookDetail";
import { ReadBookContext } from "../../Context/ReadBook";

function Detay() {
  const {detail} = useContext(BookDetailContext);
  const { setreadBook } = useContext(ReadBookContext);

  return (
    <div className="detay py-5">
      <div className="container">
        <div className="row box-col-detail box-col">
          <div className="detail-book">
            <img src={detail.img} alt="book_photo"/>
          </div>
          <div className="detail-book">
            <div className="detay-name mb-3">{detail.name}</div>
            <div className="detay-author mb-3">{detail.author}</div>
            <div className="detay-page mb-3">{detail.page} sayfa</div>
            <div className="detay-type mb-5">{detail.type}</div>
            <div className="mt-5">
            <Box>
              <ButtonGroup>
                <Button className="card-btn">
                  <NavLink className="btn-link" onClick={() => {setreadBook({name:detail.name, read:true})}}>Okudum</NavLink>
                </Button>
                <Button className="card-btn">
                  <NavLink className="btn-link" onClick={() => {setreadBook({name:detail.name, read:false})}}>Listeye Ekle</NavLink>
                </Button>
              </ButtonGroup>
            </Box>
            </div>
            
          </div>
          <div className="detail-book">
            <div className="description">
              {detail.description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detay;
