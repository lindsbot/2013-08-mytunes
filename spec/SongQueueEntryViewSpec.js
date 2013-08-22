describe('SongQueueEntryView', function(){
  var view, model;

  beforeEach(function(){
    model = new Song({
      artist: 'Fakey McFakerson',
      title: 'Never Gonna Mock You Up',
      url: 'example/url'
    });
    spyOn(Song.prototype, 'dequeue');
    view = new SongQueueEntryView({model: model});
    view.render();
  });

  it('should dequeue when clicked', function(){
    view.$el.children().first().click();
    expect(model.dequeue).toHaveBeenCalled();
  });

});








