import axios from "axios";

export async function Post_User(account){
    try {
        const response = await axios.post("https://reqres.in/api/login", account)
        return response
    } catch (error) {
        return await error;
    }
}

export async function Get_Product(Categories){
    try {
        const result = await axios.get(`https://dummyjson.com/products/category/${Categories}`);
        return result
    }catch (error) {
        return await error;
    }
}


export async function Get_AllProducts(){
    try {
        const result = await axios.get('https://dummyjson.com/products');
        return result
    }catch (error) {
        return await error;
    }
}

export async function Get_ProductByid(id){
    try {
        const result = await axios.get(`https://dummyjson.com/products/${id}`);
        return result
    }catch (error) {
        return await error;
    }
}

export async function SearchProducts(target){
    try {
        const result = await axios.get(`https://dummyjson.com/products/search?q=${target}`);
        return result
    }catch (error) {
        return await error;
    }
}