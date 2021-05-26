import axios from "axios";
import Modal from 'react-modal';


const confirmDialog = (props) => {
    Modal.setAppElement(confirmDialog);
  
    return (
      <div>
        <Modal show={props.shows}>
          <div className="modal-header" closeButton>
            <div className="modal-title">Modal heading</div>
          </div>
          <div className="modal-body">Woohoo, you're reading this text in a modal!</div>
          <div className="modal-footer">
            <button variant="secondary" onClick={props.hide}>
              Close
            </button>
            <button variant="primary" onClick={(e) => deleteBook(libro.ID, e)}>
              Save Changes
            </button>
          </div>
        </Modal>
      </div>
    );
}

async function deleteBook(idBook){

    const result = await alert('Are you really sure?');
    console.log('True if confirmed, false otherwise:', result);

    if(result == true){
        await axios.delete(`http://localhost:4000/api/book/${idBook}`)
        .then(res => {
            console.log(res);
            console.log(res.data.data.books);
            setLibros(res.data.data.books);
            window.location.href = "/libros";
        })
    }
}

export default confirmDialog