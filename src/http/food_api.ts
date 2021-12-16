import { IDish_item } from './../interfaces/items';
import { $api } from '.';
import { IChangeDish_request, ICreateDish_request } from '../interfaces/requests';
import { IGetMenu_response } from '../interfaces/responses';
import { IMenuFilters } from '../interfaces';
export default function food_api () {
    async function createDish (payload: ICreateDish_request): Promise<boolean> {
        try {
            const formData: FormData = new FormData()
            formData.append("name", `${payload.name}`)
            formData.append("price", `${payload.price}`)
            formData.append("mass", `${payload.mass}`)
            formData.append("type", `${payload.type}`)
            formData.append("ingredients", `${payload.ingredients}`)
            formData.append("description", `${payload.description}`)
            formData.append("image", payload.image)
            const res = await $api.post("/api/product/create_dish", formData)
            return true
        } catch (e) {
            console.log(e)
            return false
        }
    }
    async function changeDish (payload: IChangeDish_request): Promise<boolean> {
        try {
            const formData: FormData = new FormData()
            formData.append("name", `${payload.name}`)
            formData.append("price", `${payload.price}`)
            formData.append("mass", `${payload.mass}`)
            formData.append("type", `${payload.type}`)
            formData.append("description", `${payload.description}`)
            formData.append("ingredients", JSON.stringify(payload.ingredients))
            formData.append("product_id", JSON.stringify(payload.product_id))
            formData.append("isPromoted", `${payload.isPromoted}`)
            formData.append("promotionPrice", `${payload.promotionPrice}`)
            formData.append("image_ref", JSON.stringify(payload.image_ref))
            if (payload.image) {
                formData.append("image", payload.image)
            }
            const res = await $api.post("/api/product/change_dish", formData)
            return true
        } catch (e) {
            console.log(e)
            return false
        }
    }

    async function getMenu(): Promise<IDish_item[] | null>
    async function getMenu(filters: IMenuFilters): Promise<IDish_item[] | null>
    async function getMenu (filters?: IMenuFilters) {
        try {
            if (filters) {
                const res: IGetMenu_response = await $api.post(
                    "/api/product/get_within_filters", {filters}
                )
                return res.data.menu
            }
            const res: IGetMenu_response = await $api.get("/api/product/get_all")
            return res.data.menu
        } catch (e) {
            console.log(e)
            return null
        }
    } 

    async function deleteDish (product_id: number): Promise<boolean> {
        try {   
            const res = await $api.delete("/api/delete/delete_dish/" + product_id)
            if (res.status === 200) {
                return true
            }
            return false
        } catch (e) {
            console.log(e)
            return false
        }
    }

    return {createDish, changeDish, getMenu, deleteDish}
}