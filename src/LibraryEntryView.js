var LibraryEntryView = Backbone.View.extend({

  initialize: function(){
    this.model.on("change:playCount", function(){
      this.render();
    }, this);
  },
  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %> <%= playCount %></td>'),

  events: {
    'click': function() {
      this.model.enqueue();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
