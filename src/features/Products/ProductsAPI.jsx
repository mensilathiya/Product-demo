import axios from "axios";
import { ENDPOINT } from "../../config/index";

export function getProductsAPI(){
    return axios.get(`${ENDPOINT}/products`)
}
export function getProductsDetailsApi(id){
    // console.log(id);
    return axios.get(`${ENDPOINT}/products/${id}`)
}
export function LoginAPI(username,password){
    return  axios.post(`${ENDPOINT}/auth/login`,{
        username:username,
        password:password
    })
       

}