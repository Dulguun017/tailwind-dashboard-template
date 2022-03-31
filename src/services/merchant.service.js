import { merchant } from '../services/config';
import axios from 'axios';


class MerchantService {
    getMerchants = params =>
    new Promise((resolve, reject) => {
      axios
        .get(merchant.get, { params: params })
        .then(response => resolve(response.data))
        .catch(err => console.log(err));
    });
    addMerchant = params =>
    new Promise((resolve, reject) => {
      axios
        .post(merchant.add, params)
        .then()
        .catch(err => console.log(err));
    });
    updateMerchant = params =>
    new Promise((resolve, reject) => {
      axios
        .put(`${merchant.update}/${params.id}`, params)
        .then(response => resolve(response.data))
        .catch(err => console.log(err));
    });
    deleteMerchant = params =>
    new Promise((resolve, reject) => {
      axios
        .delete(`${merchant.delete}/${params}`, {})
        .then()
        .catch(err => console.log(err));
    });
}

const instance = new MerchantService();
export default instance;