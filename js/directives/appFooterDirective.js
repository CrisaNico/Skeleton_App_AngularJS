app.directive('appFooter', function() {
  return {
    restict: 'E',
    scope: {
      ver: '=',
      today: '='
    },
    templateUrl: 'js/directives/appFooter.html'
  };
});
