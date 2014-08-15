angular.module( 'ngBoilerplate.search', [
    'ui.router',
    'placeholders',
    'ui.bootstrap',
    'ngRoute',
    'ngBoilerplate.detailsService'
])

    .config(function config( $stateProvider ) {
        $stateProvider.state( 'search', {
            url: '/search',
            views: {
                "main": {
                    controller: 'SearchCtrl',
                    templateUrl: 'search/search.tpl.html'
                }
            },
            data:{ pageTitle: 'search' }
        });
    })

    .controller( 'SearchCtrl', function SearchCtrl( $scope , BookService, $location, detailsService) {

        $scope.searchTerm = "Angular js";

        $scope.doSearch = function () {
            BookService.get({ q: $scope.searchTerm }, function (response) {
                $scope.bookResults = response.items;
                $scope.orderProp = 'volumeInfo.title';
                console.log(response);
            });
        };

        $scope.changeView = function(item){

            detailsService.values = item;

            var name = item.volumeInfo.title.replace(/\s/g , "-");
            var url = 'details/' + name;
            $location.path(url);
        };
    })

    .factory('BookService', function ($resource) {
        return $resource('https://www.googleapis.com/books/v1/volumes',
            {
                maxResults: '10',
                callback: 'JSON_CALLBACK',
                key: 'AIzaSyATldFLGtPPZVLecasP0nFXkX6RqXa7VEI'
            },
            {
                get: {
                    method: 'JSONP'
                }
            });
    })
;