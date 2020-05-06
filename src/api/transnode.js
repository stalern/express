import request from '../util/request'
let path = '/web/transnode';
export default {
    listNode (page, size) {
        return request({
            url: path + '/listNode?page=' + page + '&size=' + size,
            method: 'get'
        })
    },
    listAllNode () {
        return request({
            url: path + '/listAllNode',
            method: 'get'
        })
    },
    deleteNode(nodeId) {
        return request({
            url: path + '/deleteNode/' + nodeId,
            method: 'delete'
        })
    },
    postNode(region, address, phoneNumber, x, y, adcode) {
        return request({
            url: path + '/postNode?region='
                + region + '&address='
                + address + '&phoneNumber='
                + phoneNumber + '&x=' + x
                + '&y=' + y + '&adcode=' + adcode,
            method: 'post'
        })
    }
}
