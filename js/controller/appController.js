app.controller('AppController', [function() {
  var vm = this;
  vm.nav = [
    {
      url:"#/",
      title:"Home"
    },{
      url:"#/formtemplate",
      title:"Form Template"
    },{
      url:"#/agendatemplate",
      title:"Agenda Template"
    },{
      url:"#/credits",
      title:"Crediti"
    },
  ];
  vm.ver = "1.0.0";
  vm.today = new Date();

}]);
