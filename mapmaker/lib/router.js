Router.configure({
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  yieldTemplates:{
    navbar: {to: 'navbar'},
    footer: {to: 'footer'}
  }
});

//In the map, we set our routes.
Router.map(function () {
  this.route('home', {
    path:'/home',
    template: 'home',
    layoutTemplate: 'masterLayout'
  });
  this.route('index', {
    path: '/',
    template: 'index',
  });
})