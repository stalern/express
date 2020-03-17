import request from '../router/request'

export default {
    getExpress (id) {
        return request({
            url: '/web/express/getExpressLocation/' + id,
            method: 'get'
        })
    }
}
