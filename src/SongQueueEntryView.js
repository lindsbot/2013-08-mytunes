var SongQueueEntryView = Backbone.View.extend({

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }

});
