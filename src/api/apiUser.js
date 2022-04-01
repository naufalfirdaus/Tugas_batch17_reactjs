import axios from "axios";
import config from "../config/config";

const list = async () => {
    try{
        const result = await axios.get(`${config.domain}/users`)
        return result.data
    } catch (error) {
        return await error.message
    }
}
const Create = async(payload)=>{
    try{
        const result = await axios.post(`${config.domain}/users`,payload)
        return result
    }catch(error){
        return error
    }
}
const findOne = async(id)=>{
    try{
        const result = await axios.get(`${config.domain}/users/${id}`)
        return result.data
    } catch (error) {
        return error
    }
}
const update = async(data)=>{
    try{
        const result = await axios.put(`${config.domain}/users/${data.user_id}`,data)
        return result
    } catch (error) {
        return error
    }
}
const deleteRow = async(id)=>{
    try{
        const result = await axios.delete(`${config.domain}/users/${id}`)
        return result
    } catch (error){
        return error
    }
}
export default {list,Create,findOne,update,deleteRow} 