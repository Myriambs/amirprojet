import axios from "axios";


export const RegisterAuth = async (values) => {
    const AddingUser = await axios.post('http://localhost:5000/user/register', {...values})
}


export const FetchUser = async () => {
    const token = localStorage.getItem('token')
    const {data} = await axios.get('http://localhost:5000/user/myaccount', {headers: {Authorization: token }})
    return data
}


export const ReservationUser = async (values) => {
    const AddingReservation = await axios.post('http://localhost:5000/reservation', {...values})
}