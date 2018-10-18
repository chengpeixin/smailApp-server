import Good from 'good'

module.exports = {
    plugin:Good,
    options:{
        reporters:{
            myConsoleReporter:[{
                module: 'good-console'
            }, 'stdout']
        }
    }
}


