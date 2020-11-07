Amplitude.init({
    "bindings": {
      37: 'prev',
      39: 'next',
      32: 'play_pause'
    },
    "songs": [
      {
        "name": "Why I Leave (30sec Extract)",
        "artist": "Floral Image",
        "album": "We Are to Answer",
        "url": "https://docs.google.com/uc?export=download&id=1LABjNh_ToUNpxz4ko0hERw9Jgsfuy7el",
        "cover_art_url": "https://i.ibb.co/YfM3vC6/new2-1.jpg"
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