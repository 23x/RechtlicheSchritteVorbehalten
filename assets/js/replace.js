window.onload=function(){
        var all = document.getElementsByClassName('sound');
        for(var i = 0; i < all.length; i++) { 
            all[i].childNodes[1].setAttribute('onClick', 'getAudioById(' + i + ').play()'); 
            all[i].childNodes[1].className += " text-over";
            all[i].childNodes[3].style.display = 'none'; 
        }
        playlist();
}

function playlist(){
  var hashes=document.location.hash.substr(1);
  if(typeof hashes !== 'undefined' && hashes.length > 1) {
    var els=document.getElementsByTagName('h3');
    var hashlist=hashes.split(',');
    var duration=0;
    for(var chash in hashlist){
      var hash=hashlist[chash];
      for(var i in els) {
        var name = els[i].innerHTML +'';
        if((name.replace(/ /g, '').replace(/\$/g, 's').toLowerCase()).indexOf(hash) !== -1){
          setTimeout(function(i){getAudioById(i).play();},duration*1000,i);
          duration+=getAudioById(i).duration;;  
          break;
        }
      }
    }
  }
  window.onhashchange=playlist;
}

function getAudioById(id){
  return document.getElementsByClassName("sound")[id].childNodes[3];
}
