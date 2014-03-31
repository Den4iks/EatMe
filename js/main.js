
(function (){

	//get data via ajax
    $.getJSON('Dishes.json').success(function(data) {
    	self._dishes=ko.observableArray(data);
    	viewModel.dishes(data);
    })

    
})();

ko.applyBindings(viewModel);
