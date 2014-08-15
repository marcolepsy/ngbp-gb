(function() {

'use strict';

angular.module( 'ngBoilerplate.details', [
    'ui.router',
    'placeholders',
    'ui.bootstrap',
    'ngBoilerplate.detailsService'
])

    .config(function config( $stateProvider ) {
        $stateProvider.state( 'details', {
            url: '/details/:id',
            views: {
                'main': {
                    controller: 'DetailsCtrl',
                    templateUrl: 'details/details.tpl.html'
                }
            },
            resolve: {
                item: function($stateParams, BookService) {
                    var requestedId = $stateParams.id,
                        item;

                    if (BookService.cached) {
                        BookService.cached.forEach(function(book) {
                            if (book.id === requestedId) { item = book; }
                        });
                    }

                    if (!item) {
                        console.log('No item found');
                        // item = BookService.getItem(requestedId); <-- ... something like this, which should return a promise
                    }

                    return item;
                }
            },
            data:{ pageTitle: 'details' }
        });
    })

    .controller( 'DetailsCtrl', function( $scope, detailsService, item) {

        $scope.name ='DetailsCtrl';

        $scope.fromService = item.volumeInfo;

    })
;


}) ();