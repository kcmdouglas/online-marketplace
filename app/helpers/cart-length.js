import Ember from 'ember';

export function cartLength(params/*, hash*/) {
  return Object.keys(params[0]).length;
}

export default Ember.Helper.helper(cartLength);
