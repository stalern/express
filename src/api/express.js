import request from '../util/request'

let path = '/web/express';
export default {
    getExpressLocation (id) {
        return request({
            url: path + '/getExpressLocation/' + id,
            method: 'get'
        })
    },
    listPackage (page, size) {
        return request({
            url: path + '/listPackage?page=' + page + '&size=' + size,
            method: 'get'
        })
    },
    listExpress (page, size) {
        return request({
            url: path + '/listExpress?page=' + page + '&size=' + size,
            method: 'get'
        })
    },
    listPackageInNode (nodeId, page, size) {
        return request({
            url: path + '/listPackageInNode/' + nodeId + '?page=' + page + '&size=' + size,
            method: 'get'
        })
    },
    listExpressInPackage (packageId, page, size) {
        return request({
            url: path + '/listExpressInPackage/' + packageId + '?page=' + page + '&size=' + size,
            method: 'get'
        })
    },
    listExpressBySender (senderId, page, size) {
        return request({
            url: path + '/getExpressBySender/' + senderId + '?page=' + page + '&size=' + size,
            method: 'get'
        })
    },
    listExpressByReceiver (receiverId, page, size) {
        return request({
            url: path + '/getExpressByReceiver/' + receiverId + '?page=' + page + '&size=' + size,
            method: 'get'
        })
    },
    getExpress(id) {
        return request({
            url: path + '/getExpressById/' + id,
            method: 'get'
        })
    },
    getPackage(id) {
        return request({
            url: path + '/getPackageById/' + id,
            method: 'get'
        })
    }
}
