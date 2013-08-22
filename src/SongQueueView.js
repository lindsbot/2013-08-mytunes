var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    this.collection.on('add', function(){
      this.render();
    }, this);
    this.collection.on('remove', function(){
      this.render();
    }, this);
  },


  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    return this.$el.html('<thead><tr><th>Queue</th><th>Queue</th></tr></thead>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }
});