import Ember from 'ember';

export function cartTotal(params) {
  var total = 0;
  for (var key in params[0]) {
    total += parseInt(params[0][key].item.get('price')) * parseInt(params[0][key].quantity);
  }
  return total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export default Ember.Helper.helper(cartTotal);
