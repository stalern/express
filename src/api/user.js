import request from '../util/request'

let path = '/web/user';
export default {
    listUser (page, size) {
        return request({
            url: path + '/listUser?page=' + page + '&size=' + size,
            method: 'get'
        })
    },
    listEmployee (page, size) {
        return request({
            url: path + '/listEmployee?page=' + page + '&size=' + size,
            method: 'get'
        })
    },
    listEmployeeInNode (nodeId, page, size) {
        return request({
            url: path + '/listEmployeeInNode/' + nodeId + '?page=' + page + '&size=' + size,
            method: 'get'
        })
    },
    login (username, password) {
        return request({
            url: path + '/login?userName=' + username + '&pwd=' + password,
            method: 'post'
        })
    },
    logout () {
        return request({
            url: path + '/logout',
            method: 'get'
        })
    },
    postUser (name, phoneNumber, gender, workNode) {
        return request({
            url: path + '/register?name='
                + name + '&phoneNumber='
                + phoneNumber + '&gender='
                + gender + '&workTransnode=' + workNode,
            method: 'post'
        })
    },
    updateUser (id, phoneNumber, status) {
        return request({
            url: path + '/updateUser?id=' + id +
                '&phoneNumber=' + phoneNumber +
                '&status=' + status,
            method: 'put'
        })
    },
    delete(userId) {
        return request({
            url: path + '/deleteUser/' + userId,
            method: 'delete'
        })
    }
}
