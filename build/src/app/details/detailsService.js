/**
 * Created by jakeforaker on 8/15/14.
 */

// Service definition
angular.module('ngBoilerplate.detailsService', [])
    .service('detailsService', function(){
        this.values = {};
        this.sayHello = function(text){
            var vals = this.values.volumeInfo;
            return vals;
        };
    });