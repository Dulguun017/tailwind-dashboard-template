import { terminal } from '../services/config';
import axios from 'axios';


class TerminalSerivce {
    getTerminals = params =>
    new Promise((resolve, reject) => {
      axios
        .get(terminal.get, { params: params })
        .then(response => resolve(response.data))
        .catch(err => console.log(err));
    });
    addTerminal = params =>
    new Promise((resolve, reject) => {
      axios
        .post(terminal.add, params)
        .then()
        .catch(err => console.log(err));
    });
    updateTerminal = params =>
    new Promise((resolve, reject) => {
      axios
        .put(`${terminal.update}/${params.id}`, params)
        .then(response => resolve(response.data))
        .catch(err => console.log(err));
    });
    deleteTerminal = params =>
    new Promise((resolve, reject) => {
      axios
        .delete(`${terminal.delete}/${params}`, {})
        .then()
        .catch(err => console.log(err));
    });
}

const instance = new TerminalSerivce();
export default instance;