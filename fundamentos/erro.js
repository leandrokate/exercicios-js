function tratarErroELancar(erro) {
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimiNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('final')
    }
}

const obg = { nome: 'Roberto' }
imprimiNomeGritado(obj)
