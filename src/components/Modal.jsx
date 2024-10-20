export function Modal(props) {
  const message = props.message || "";

  if (props.visible) {
    return (
      <div id="confirmation" className="modal">
        <div className="modal-content">
          <p>{message}</p>
          <button onClick={props.onClose}>Ok</button>
        </div>
      </div>
    );
  }
}
