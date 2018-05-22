(function () {
'use strict';
//retrieving module
angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/menuapp/templates/categories-component.template.html',
  bindings: {
    items: '<',
  }
});

})();
