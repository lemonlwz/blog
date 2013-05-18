(function(){
  var navbar = document.getElementById('J_navbar');
  navbar.onclick = function(evt){
    if(evt.target === this || evt.target.className.indexOf('navbar-inner') !== -1){
     document.body.scrollTop = 0;
    }
  }
})();
