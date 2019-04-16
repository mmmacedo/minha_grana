const RESTFUL = require('node-restful');
const MONGOOSE = RESTFUL.mongoose;

const CREDITSCHEMA = new MONGOOSE.schema({
    name: {type: String, required: true},
    value: {type: Number, min: 0, required: true}
});

const DEBTSCHEMA = new MONGOOSE.Schema({
    name: {type: String, required: true},
    value: {type: Number, min: 0, required: true},
    status: {
        type: String, required: false, upperCase: true,
        enum: ['PAGO', 'PENDENTE', 'AGENDADO']
    }
});

const BILLINGCYCLESCHEMA = new MONGOOSE.Schema({
    name: {type: String, required: true},
    month: {type: Number, min: 1, max: 12, required: true},
    year: {type: Number, min: 1970, max: 2100, required: true},
    credits: [ CREDITSCHEMA ],
    debts: [ DEBTSCHEMA ]
});

module.exports = RESTFUL.model('BillingCycle', BILLINGCYCLESCHEMA);