import Ember from 'ember';

export function cartTotal(params) {
  var total = 0;
  for(var i = 0; i < params[0].length; i++) {
    total += parseInt(params[0][i].get('price'));
  }
  if (total) {
    total = total.toString().split("").reverse().join("");
    total = total.match(/.{0,3}/g)
    console.log(total);
    for(var j = 0; j < total.length; j++) {
      total[j] = total[j].split("").reverse().join("");
    }
    return total.reverse().join(",").replace(/^,/, '').replace(/$,/,'');
  }
  return 0
}

export default Ember.Helper.helper(cartTotal);
