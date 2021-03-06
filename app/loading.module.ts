export const LoadingModule = angular.module('LoadingModule', ['ngRoute']);

export class LoadingService {
  rootScope: ng.IRootScopeService;
  constructor(private $rootScope: ng.IRootScopeService) {
    this.rootScope = $rootScope;
  }

  showLoading() {
    console.log('load');
    this.rootScope['loading'] = true;
  }

  hideLoading() {
    console.log('done');
    this.rootScope['loading'] = false;
  }
}
LoadingModule.service('loadingService', LoadingService);

function configLoading($rootScope: ng.IRootScopeService, loadingService: LoadingService) {
  $rootScope.$on('$routeChangeStart', function() { loadingService.showLoading(); });
  $rootScope.$on('$routeChangeSuccess', function() { loadingService.hideLoading(); });
};
LoadingModule.run(['$rootScope', 'loadingService', configLoading]);
