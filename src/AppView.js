var AppView = Backbone.View.extend({

  initialize: function(params){
    this.playerView = new PlayerView({model: this.model.get('currentSong')});

    this.model.on('change:currentSong', function(model){
      this.playerView.setSong(model.get('currentSong'));
    }, this);
  },

  render: function(){
    return this.$el.html([
      this.playerView.$el,
      new SongQueueView({collection: this.model.get('songQueue')}).render(),
      new LibraryView({collection: this.model.get('library')}).render()
    ]);
  }

});


