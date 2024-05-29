import * as ES6Promise from "es6-promise";
import Axios from 'axios';
import { authProvider } from "../../Components/App/Auth/AuthConfig";

ES6Promise.polyfill();

export class HttpService {
    headers: any;
    imageHeaders: any;
    token: string | null;
    constructor() {
        this.headers = {
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache',
            'Content-Type':'application/json'
        };
        this.imageHeaders = {
            'Content-Type': 'multipart/form-data',
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache'
        }
        this.token = sessionStorage.getItem('msal.idtoken');
    }

    public getData(url: string): Promise<any> {
        Axios.defaults.headers.common['Authorization'] = "Bearer " + this.token;
        return Axios.get(url, { headers: this.headers }).then( function (response: any) {
            return  response.data;
        }, (exception) => this.throwException(exception));
    }

    public postData(url: string, payload: any): Promise<any> {
        Axios.defaults.headers.common['Authorization'] = "Bearer " + this.token;
        return Axios.post(url, payload, { headers: this.headers }).then(function (response: any) {
            return response.data;
        }, (exception) => this.throwException(exception));
    }
    public postDataWithImage(url: string, payload: any): Promise<any> {
        Axios.defaults.headers.common['Authorization'] = "Bearer " + this.token;
        return Axios.post(url, payload, { headers: this.imageHeaders }).then(function (response: any) {
            return response.data;
        }, (exception) => this.throwException(exception));
    }

    public patchData(url: string, payload: any): Promise<any> {
        Axios.defaults.headers.common['Authorization'] = "Bearer " + this.token;
        return Axios.patch(url, payload, { headers: this.headers }).then(function (response: any) {
            return response.data;
        }, (exception) => this.throwException(exception));
    }

    public deleteData(url: string): Promise<any> {
        Axios.defaults.headers.common['Authorization'] = "Bearer " + this.token;
        return Axios.delete(url, { headers: this.headers }).then(function (response: any) {
            return response.data;
        }, (exception) => this.throwException(exception));
    }

    throwException = (exception: any) => {
        if (exception && exception.response && Number(exception.response.status) == 401) {
            this.setNewAccessToken();
        } else {
            throw exception;
        }
    }

    async setNewAccessToken() {
        sessionStorage.clear();
        await authProvider.getAccessToken();
        const idToken = await authProvider.getIdToken();
        sessionStorage.setItem('msal.idtoken', idToken.idToken.rawIdToken);
    }
}