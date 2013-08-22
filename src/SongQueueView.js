var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.model.on('add', function(){
      if(this.model.list.length === 1){
        this.model.list[0].play();
      }
    });
  },

  render: function() {
    return this.$el;
  }

});
