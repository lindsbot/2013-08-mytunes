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
    }, this);

    this.on('dequeue', function(){
      this.remove(this.at(0));
      this.playFirst();
    });
  },

  playFirst: function(){
    if(this.length){
      this.at(0).play();
    }
  }
});


