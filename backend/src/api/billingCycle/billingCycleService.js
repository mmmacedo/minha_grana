const BILLINGCYCLE = required('./billingCycle');

BILLINGCYCLE.methods(['get', 'post', 'put', 'delete']);

BILLINGCYCLE.updateOptions({new: true, runValidators: true});

module.exports = BILLINGCYCLE;