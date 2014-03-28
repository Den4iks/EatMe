var viewModel = (function (){
	var self= {
		_dishes : []
	}

<<<<<<< HEAD
(function (){

	//get data via ajax
    $.getJSON('Dishes.json').success(function(data) {
    	self._dishes=ko.observableArray(data);
    	viewModel.dishes(data);
    })

    
})();

ko.applyBindings(viewModel);
=======
	var viewModel = {
		dishes: ko.observableArray()
	};
  
    //get data via ajax
	$.getJSON('Dishes.json').success(function(data) {
		self._dishes=ko.observableArray(data);
		viewModel.dishes(self._dishes());
	})

	viewModel.breakfast = ko.observableArray('');
	viewModel.addBreakfast = function (item){
		viewModel.breakfast.push(item);
	}

	viewModel.lunch = ko.observableArray('');
	viewModel.addlunch = function (item){
		viewModel.lunch.push(item);
	}

	viewModel.dinner = ko.observableArray('');
	viewModel.adddinner = function (item){
		viewModel.dinner.push(item);
	} 

	viewModel.filteredBreakfast = ko.computed (function () {
		var bf = viewModel.breakfast();
		return bf;
	})


	viewModel.filter = ko.observable('');
	viewModel.kkal = ko.observable('');
	viewModel.prot = ko.observable('');
	viewModel.fats = ko.observable('');
	viewModel.carb = ko.observable('');

	viewModel.filteredTasks= ko.computed (function(){
		var filter= viewModel.filter().trim();
		var kkal= viewModel.kkal().trim();
		var prot= viewModel.prot().trim();
		var fats= viewModel.fats().trim();
		var carb= viewModel.carb().trim();
		var result = [];
		var multiplyFilters=[];
		result=viewModel.dishes();
		if (filter.length <1 && kkal.length <1 && prot.length <1 && fats.length <1 && carb.length <1){
			return result;
		}


		if(filter.length >=1){
			_.each(result,function (item){
				if(item.Name.indexOf(filter)>-1){
					multiplyFilters.push(item)
				}
			})
			result=[];
			result=multiplyFilters;
			multiplyFilters=[];
		}

		if(kkal.length >=1){
			_.each(result,function (item){
				if(parseInt(item.Kkal)<=parseInt(kkal)){
					multiplyFilters.push(item)
				}
			})
			result=[];
			result=multiplyFilters;
			multiplyFilters=[];
		}

		if(prot.length >=1){
			_.each(result,function (item){
				if(parseInt(item.Proteins)<=parseInt(prot)){
					multiplyFilters.push(item)
				}
			})
			result=[];
			result=multiplyFilters;
			multiplyFilters=[];
		}

		if(fats.length >=1){
			_.each(result,function (item){
				if(parseInt(item.Fats)<=parseInt(fats)){
					multiplyFilters.push(item)
				}
			})
			result=[];
			result=multiplyFilters;
			multiplyFilters=[];
		}

		if(carb.length >=1){
			_.each(result,function (item){
				if(parseInt(item.Carbonates)<=parseInt(carb)){
					multiplyFilters.push(item)
				}
			})
			result=[];
			result=multiplyFilters;
			multiplyFilters=[];
		}

		return result;
	})
ko.applyBindings(viewModel);
})();
>>>>>>> 819a7e033c916ccce02ef137de5da1edc4642c29
