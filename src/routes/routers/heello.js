import Joi from 'joi'

let router = []

router.push({
    method:'GET',
    path:"/name/{name}",
    config:{
        handler:function(res){
            const name = res.params.name;
            return {'MESSAGE':`Hello ${name}!`};
        },
        description:'Get todo',
        notes: 'Returns a todo item by the id passed in the path',
        tags: ['api'],
        validate:{
            params:{
                name:Joi.string().required()
            }
        }
    }
});
router.push({
    "method":'GET',
    "path":"/",
    handler:function(res){
        return {'MESSAGE':`Hello 太帅了!`};
    } 
});
module.exports = [
    {
        method:'GET',
        path:"/name/{name}",
        config:{
            handler:function(res){
                const name = res.params.name;
                return {'MESSAGE':`Hello ${name}!`};
            },
            description:'Get todo',
            notes: 'Returns a todo item by the id passed in the path',
            tags: ['api'],
            validate:{
                params:{
                    name:Joi.string().required()
                }
            }
        }
    },
    {
        "method":'GET',
        "path":"/",
        handler:function(res){
            return {'MESSAGE':`Hello 太帅了!`};
        } 
    }
]