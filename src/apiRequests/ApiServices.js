import axios from "axios";

const baseUrl = "http://localhost:8000/api/v1";
//createStudentsData


export const createStudentsData = async (postBody) => {

    try {
        const res = await axios.post(baseUrl + "/create-student/", postBody);

        if (res.status == 200) {
            return true
        } else {
            return false
        }
    } catch (error) {
        console.log(error)
        return false

    }
}

export const StudentsDataById = async (id) => {
    try {
        const res = await axios.get(baseUrl + "/student-list-one/" + id);
        if (res.status == 200) {

            return res.data['data'][0]
        } else {
            return false;
        }
    } catch (error) {
        console.log(error)
        return false

    }
}



export const StudentsDataList = async () => {
    try {
        const res = await axios.get(baseUrl + "/student-list/");
        if (res.status == 200) {
            return res.data['data']
        } else {
            return [];
        }
    } catch (error) {
        console.log(error)
        return []

    }
}
export const updateStudentsById = async (id, postBody) => {
    try {
        const res = await axios.post(baseUrl + "/update-student/" + id, postBody);
   
        if (res.status == 200) {
            
            return true
          
        } else {
            return false;
        }
       
    } catch (error) {
        console.log(error)
        return false

    }
}


export const deleteStudentsData = async (id) => {
    try {
        const res = await axios.get(baseUrl + "/delete-student/" + id);
        if (res.status == 200) {
            console.log(res)
            return true
        } else {
            return false;
        }
    } catch (error) {
        console.log(error)
        return false

    }
}




























