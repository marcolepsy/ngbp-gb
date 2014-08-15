angular.module( 'ngBoilerplate', [
    'templates-app',
    'templates-common',
    'ngBoilerplate.home',
    'ngBoilerplate.search',
    'ngBoilerplate.details',
    'ngResource',
    'ngRoute'
])



    .config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
        $urlRouterProvider.otherwise( '/home' );
    })

    .run( function run () {
    })

    .controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
        $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
            console.log(arguments);
            if ( angular.isDefined( toState.data.pageTitle ) ) {
                $scope.pageTitle = toState.data.pageTitle + ' | ngBoilerplate' ;
            }
        });
    })

;

