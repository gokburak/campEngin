import axios from "axios";



export default class ProductServices{
getProducts(){
    return axios.get("https://restcountries.eu/rest/v2/all")
}


}