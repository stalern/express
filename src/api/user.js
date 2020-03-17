import request from '../router/request'

export default {
    listUser (page, size) {
        return request({
            url: '/web/user/listUser?page=' + page + '&size=' + size,
            method: 'get'
        })
    },
    login (username, password) {
        return request({
            url: 'web/user/login?phone=' + username + '&pwd=' + password,
            method: 'post'
        })
    },
    delete(userId) {
        return request({
            url: '/web/user/deleteUser/' + userId,
            method: 'delete'
        })
    }
}
