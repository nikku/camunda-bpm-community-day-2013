ngDefine('cockpit.plugin.myplugin', function(module) {

  var DashboardController = [ '$scope', '$http', 'Uri', function($scope, $http, Uri) {

    $scope.data = [
      "foo",
      "bar"
    ];
  }];

  var ProcessDefinitionTab1Controller = [ '$scope', '$http', 'Uri', function($scope, $http, Uri) {

  }];

  var ProcessDefinitionTab2Controller = [ '$scope', '$http', 'Uri', function($scope, $http, Uri) {

    var data = $scope.processData.newChild($scope),
        processDefinition = $scope.processDefinition;

  }];

  var ProcessInstanceTab1Controller = [ '$scope', '$http', 'Uri', function($scope, $http, Uri) {
    var data = $scope.processData.newChild($scope),
        processInstance = $scope.processInstance;
  }];

  var Configuration = function Configuration(ViewsProvider) {

    ViewsProvider.registerDefaultView('cockpit.dashboard', {
      id: 'my-plugin-dashboard',
      label: 'My Dashboard',
      url: 'plugin://myplugin/static/app/dashboard.html',
      controller: DashboardController,

      // make sure we have a higher priority than the default plugin
      priority: 12
    });

    ViewsProvider.registerDefaultView('cockpit.processInstance.instanceDetails', {
      id: 'my-plugin-procinst-tab1',
      label: 'Business Data (Custom)',
      url: 'plugin://myplugin/static/app/procinst-tab1.html',
      controller: ProcessInstanceTab1Controller
    });

    ViewsProvider.registerDefaultView('cockpit.processDefinition.view', {
      id: 'my-plugin-procdef-tab1',
      label: 'Overview (Custom)',
      url: 'plugin://myplugin/static/app/procdef-tab1.html',
      controller: ProcessDefinitionTab1Controller,
      priority: 12
    });

    ViewsProvider.registerDefaultView('cockpit.processDefinition.view', {
      id: 'my-plugin-procdef-tab2',
      label: 'More Information (Custom)',
      url: 'plugin://myplugin/static/app/procdef-tab2.html',
      controller: ProcessDefinitionTab2Controller
    });
  };

  Configuration.$inject = ['ViewsProvider'];

  module.config(Configuration);

  return module;
});
