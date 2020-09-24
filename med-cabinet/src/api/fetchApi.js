import axiosWithAuth from '../utils/axiosWithAuth';

export const fetchApi = () => {
    return axiosWithAuth()
        .get("api/strains")
        .then(res=>{
            console.log(res.data)
            return res
        })
        .catch(err =>{
            return err 
        })
}

