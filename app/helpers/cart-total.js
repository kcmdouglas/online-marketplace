import Ember from 'ember';

export function cartTotal(params) {
  console.log(params[0]);
  if (params[0][0] === undefined) {
    return "0";
  }
  var total = 0;
  for (var i = 0; i < params[0].length; i++) {
    var quantity = params[0][i].quantity || 1;
    total += parseInt(params[0][i].item.get('price')) * parseInt(quantity);
  }
  return total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export default Ember.Helper.helper(cartTotal);
