import axiosWithAuth from '../utils/axiosWithAuth';

export const fetchApi = () => {
    return axiosWithAuth()
        .get("/api/strains")
        .then(res=>{
            return res
        })
        .catch(err =>{
            return err 
        })
}