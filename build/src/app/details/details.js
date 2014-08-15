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
                "main": {
                    controller: 'DetailsCtrl',
                    templateUrl: 'details/details.tpl.html'
                }
            },
            data:{ pageTitle: 'details' }
        });
    })

    .controller( 'DetailsCtrl', function( $scope, detailsService) {

        $scope.name ='DetailsCtrl';
        $scope.fromService = detailsService.sayHello();

    })
;


