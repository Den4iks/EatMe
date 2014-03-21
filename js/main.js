
$(function (){
   $.getJSON('Dishes.json').success(function(data) {
    viewModel ={
   		dishes: ko.observableArray(data)
   	}
    ko.applyBindings(viewModel);
});
})