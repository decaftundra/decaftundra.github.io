Amplitude.init({
    "bindings": {
      37: 'prev',
      39: 'next',
      32: 'play_pause'
    },
    "songs": [
      {
        "name": "Why I Leave (30 sec extract)",
        "artist": "Floral Image",
        "url": "https://docs.google.com/uc?export=download&id=1LABjNh_ToUNpxz4ko0hERw9Jgsfuy7el",
        "cover_art_url": "https://lh3.googleusercontent.com/AvCFzKx2Tn4Xi4zryilXKxJSN_eqazNOx8kuUo0eSt3dMQjc-sl34XSPh0YwFLhkzLe6-BkDyE9Jf6dgYaUvCjQaf6Snkext3o53lrDvzQZVX8TUoKvI35Fq1J1qPB95iHanHl7kGg=w2400"
      }
    ]
  });

  window.onkeydown = function(e) {
      return !(e.keyCode == 32);
  };

  /*
    Handles a click on the song played progress bar.
  */
  document.getElementById('song-played-progress').addEventListener('click', function( e ){
    var offset = this.getBoundingClientRect();
    var x = e.pageX - offset.left;

    Amplitude.setSongPlayedPercentage( ( parseFloat( x ) / parseFloat( this.offsetWidth) ) * 100 );
  });