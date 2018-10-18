'use strict';

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = [];

router.push({
    method: 'GET',
    path: "/name/{name}",
    config: {
        handler: function handler(res) {
            var name = res.params.name;
            return { 'MESSAGE': 'Hello ' + name + '!' };
        },
        description: 'Get todo',
        notes: 'Returns a todo item by the id passed in the path',
        tags: ['api'],
        validate: {
            params: {
                name: _joi2.default.string().required()
            }
        }
    }
});
router.push({
    "method": 'GET',
    "path": "/",
    handler: function handler(res) {
        return { 'MESSAGE': 'Hello \u592A\u5E05\u4E86!' };
    }
});
module.exports = [router];