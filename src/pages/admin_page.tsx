import { IAdminButton_toggle_props, IAdminMeeting_props, IModal_props } from "../interfaces/props"
import caret_down_fill  from "../assets/caret_down_fill.svg"
import StatisticsModal from "../components/modals/admin_statistics_modal"
import CreateDishModal from "../components/modals/admin_create_dish_modal"
import EditDishModal from "../components/modals/admin_edit_dish_modal"
import { useDispatch, useSelector } from "react-redux"
import { IState } from "../interfaces"
import { toggleCreateDishModalAction, toggleEditDishModalAction, toggleStatisticsModalAction } from "../store/admin_modal_reducer"

export default function Admin_page () {
    const userState = useSelector((state: IState) => state.userState)
    const dispatch = useDispatch()
    const modalsState = useSelector((state: IState) => state.admin_modals)

    function onToggleStatisticsModal() {
        dispatch(toggleStatisticsModalAction())
    }
    function onToggleCreateDishModal() {
        dispatch(toggleCreateDishModalAction())
    }
    function onToggleEditDishModal() {
        dispatch(toggleEditDishModalAction())
    }
    

    return (
        <div className="admin-page page-frame" >
            <div className="mt-4">
                <Meeting name={userState.nickname || ""} />
            </div>
            <div className="row" >
                <div className="col-md-4 col-sm-8 col-10" >
                    {/* <AdminButton_toggle onToggle={onToggleStatisticsModal} >Статистика</AdminButton_toggle> */}
                    <AdminButton_toggle onToggle={onToggleCreateDishModal} >Создать блюдо</AdminButton_toggle>
                    <AdminButton_toggle onToggle={onToggleEditDishModal} >Изменить блюдо</AdminButton_toggle>
                </div>
            </div>
            <StatisticsModal onHide={onToggleStatisticsModal} isVisible={modalsState.statistics_modal}/>
            <CreateDishModal onHide={onToggleCreateDishModal} isVisible={modalsState.create_dish_modal} />
            <EditDishModal onHide={onToggleEditDishModal} isVisible={modalsState.edit_dish_modal} />
            
        </div>
    )
}

function AdminButton_toggle (props: IAdminButton_toggle_props) {
    return (
        <div className='my-3' >
            <button className="button-toggle" onClick={props.onToggle}>
                <div className="d-flex" >
                    <div><img src={caret_down_fill} width={24} /></div>
                    <div>{props.children}</div>
                </div>
            </button>
        </div>
    )
} 

function Meeting (props: IAdminMeeting_props) {
    return (
        <div className="admin-meeting" >
            <div>Здравствуйте, {props.name}!</div>
        </div>
    )
}

