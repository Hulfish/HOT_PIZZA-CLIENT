import MainCategoryComponent from "../components/main_category";
import SubMainCategory from "../components/sub_main_category";
import Food_card from "./../components/food_card"
import {ICards_container_props, ICard_table_props} from "../interfaces/props"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IMenuFilters, IState } from "../interfaces";
import food_api from "../http/food_api";
import { addManyDishesToListAction, setMenuAction } from "../store/menu_reducer"
import { switchFiltersStateToWatched } from "../store/request_filters_reducer";



export default function Home_page () {
    const dispatch = useDispatch()
    const menu = useSelector((state: IState) => state.menuState.menu)
    const isFiltersChangesWatched = useSelector((state: IState) => state.request_filters.isWatched)
    const menu_filters = useSelector((state: IState) => state.request_filters.menu_filters)
    const {getMenu} = food_api()
    
    async function getMenu_useEffect (): Promise<void> {
        try {
            const res = await getMenu()
            if (!res) {
                return console.log("<< getMenu >> API err occured")
            }
            dispatch(addManyDishesToListAction(res))
        } catch (e) {
            console.log(e)
        }
    }

    async function getMenuWithFilters_useEffect (filters: IMenuFilters) {
        try {
            const res = await getMenu(filters)
            console.log({res})
            if (res) {
                dispatch(setMenuAction(res))
            }
            return
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getMenu_useEffect()
    }, [])

    useEffect(() => {
        if (!isFiltersChangesWatched) {
            console.log("watched")
            getMenuWithFilters_useEffect(menu_filters)
        }
        dispatch(switchFiltersStateToWatched())
    }, [isFiltersChangesWatched])

    return (
        <div className="page-frame">
            <div className="row" style={{marginTop: "40px"}} >
                <div className="col-xl-2" ></div>
                <div className="col-xl-8" >
                <div>
                    <MainCategoryComponent />
                </div>
                <div>
                    <SubMainCategory />
                </div>
                
                <div className="row mt-4  " style = {{marginLeft: "0px"}} >
                    
                    <div className="col row mx-0 px-0" >
                        <CardsContainer >
                            <GenerateCards_from_api dish_list={menu} />
                        </CardsContainer>
                        <div className = "col row" >
                            <div className="col-xxl-2" ></div>
                        </div>
                    </div>
                
                </div>
                </div>
                
                <div className="col-xl-2" ></div>
            </div>
            
        </div>
    )
}

function CardsContainer (props: ICards_container_props) {
    const isMobile = useSelector((state: IState) => state.isMobile.isMobile)
    return (
        <div className="cards-flex-container px-0" >
            {props.children}
        </div>
    ) 
}

function GenerateCards_from_api (props: ICard_table_props  ) {

    if (props.dish_list.length === 0) {
        return (
            <div>
                Похоже, что блюд такого типа не нашлось
            </div>
        )
    }
    
    return (
        <>
            {
                props.dish_list.map((dish_item , index) => {
                    return <div  ><Food_card item={dish_item} /></div>
                })
            }
        </>
        
    )
}

