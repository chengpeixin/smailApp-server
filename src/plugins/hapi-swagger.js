import Inert from 'inert'
import Vision from 'vision'
import HapiSwagger from 'hapi-swagger'

const swaggerOptions = {
    info: {
        title: '接口文档',
        version: "1.0"
    }
};

module.exports = [
    Inert,
    Vision,
    {
        plugin:HapiSwagger,
        options:swaggerOptions
    }
]