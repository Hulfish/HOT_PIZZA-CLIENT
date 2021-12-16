import { Modal } from "react-bootstrap"
import { IModal_props } from "../../interfaces/props"

export default function StatisticsModal (props: IModal_props) {
    return (
        <Modal animation={true} show={props.isVisible} onHide={props.onHide} centered={true} >
            <Modal.Header closeButton><b className="f-si-20">Статистика</b></Modal.Header>
            <Modal.Body>
               <div>ООчофаоы овашщрщш много статистики</div>
               <div>ООчофаоы овашщрщш много статистики</div>
               <div>ООчофаоы овашщрщш много статистики</div>
            </Modal.Body>
            <Modal.Footer ><button  className="btn btn-secondary" onClick={props.onHide}>Close</button></Modal.Footer>
        </Modal>
    )
} 