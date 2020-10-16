import {
  observable, observableArray, computed,
  pureComputed, applyBindings, bindingHandlers
} from 'knockout'

// Here's my data model
var ViewModel = function (first, last) {
  this.firstName = observable(first)
  this.lastName = observable(last)

  this.fullName = computed(function () {
    // Knockout tracks dependencies automatically. It knows that fullName depends on firstName and lastName, because these get called when evaluating fullName.
    return this.firstName() + ' ' + this.lastName()
  }, this)
}

applyBindings(new ViewModel('Planet', 'Knockout')) // This makes Knockout get to work
