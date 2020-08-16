import axios from 'axios'


export function get(url, params) {
    return new Promise((resolve, reject) => {
        let str = localStorage.getItem('jeeplus.session.id') ? '?jeeplus.session.id=' + localStorage.getItem('jeeplus.session.id') : '';
        axios.get(url + str, {
            params
        }).then(res => {
            resolve(res.data);
        }).catch(error => {
            reject(error.data)
        })
    })
}

export function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params).then(res => {
            resolve(res.data);
        }).catch(error => {
            reject(error.data)
        })
    })
}

export function post_q(url, params) {
    return new Promise((resolve, reject) => {
        axios({
            method: 'POST',
            url,
            params
        }).then(res => {
            resolve(res.data);
        }).catch(error => {
            reject(error.data)
        })
    })
}