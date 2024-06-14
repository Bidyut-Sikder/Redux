import axiosReference from "../../utils/axios";


export const getData = async () => {
    const res = await axiosReference.get('/transactions')
    return res.data
}


export const addData = async (data) => {
    const res = await axiosReference.post(`/transactions`, data)
    return res.data
}



export const updateData = async (id, data) => {
    const res = await axiosReference.put(`/transactions/${id}`, data)
    
    return res.data
}


export const deleteData = async (id) => {
    const res = await axiosReference.delete(`/transactions/${id}`)
    return res.data
}























