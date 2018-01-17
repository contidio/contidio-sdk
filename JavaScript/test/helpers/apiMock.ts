import axios, { AxiosResponse, AxiosError } from 'axios';

let defaultAdapter = axios.defaults.adapter;

export default class ApiMock {

    static mockSuccess(data: any) {
        axios.defaults.adapter = function(config){
            return new Promise(function(resolve, reject) {
                resolve({
                    status: 200,
                    data,
                    headers: {},
                    config
                });
            });
        };
    }

    static restore() {
        axios.defaults.adapter = defaultAdapter;
    }

}