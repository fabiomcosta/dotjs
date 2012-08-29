$.ajax({
  url: 'http://localhost:3131/'+window.location.host.replace('www.','')+'.js',
  dataType: 'script',
  error: function(){
    console.log('no dotjs server found at localhost:3131')
  }
})
