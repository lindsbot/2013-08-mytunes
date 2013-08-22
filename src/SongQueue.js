var SongQueue = Songs.extend({
  initialize: function(){
    this.on('add', function(){
      if(this.length === 1){
        this.playFirst();
      }
    }, this);

    this.on('ended', function(){
      this.remove(this.at(0));
      if(this.length === 0){
        return;
      }
      this.playFirst();
    }, this);

    this.on('dequeue', function(){
      this.remove(this.at(0));
    });
  },

  playFirst: function(){
    this.at(0).play();
  }
});


