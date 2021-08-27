import axios, {AxiosInstance, AxiosResponse } from 'axios'

class BookAPI {
    
    private static axiosInstance: AxiosInstance
    
    static init() {
        this.axiosInstance= axios.create({
            baseURL: 'http://localhost:3500/'
        })
    }

    static async get<IProps>(url: string) {
        return await BookAPI.axiosInstance.get<IProps>(url)
    }

    static async post<ResponseType, DataType>(url: string, data?: DataType) {
        return await BookAPI.axiosInstance.post<ResponseType, DataType>(url, data)
    }
    
    static async delete<ResponseType, DataType = undefined>(url: string) {
        return await BookAPI.axiosInstance.delete<DataType, AxiosResponse<ResponseType>>(url)
    }    

}

export default BookAPI;


