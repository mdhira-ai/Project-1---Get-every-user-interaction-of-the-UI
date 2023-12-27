import './modal.css'

const Modal = () => {






    function close() {
        var modal = document.getElementById("myModal");
        modal.style.display = "none";
    }






    return (
        <div className=''>


            <div id="myModal" className="modal">

                <span className="close" onClick={close} >&times;</span>

                    <img className="modal-content h-full object-contain"  id="img01" />

                <div id="caption"></div>
            </div>
        </div>
    );
}

export default Modal;