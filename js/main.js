var viewModel = (function (){
	var self= {
		_dishes : []
	}
	$.getJSON('Dishes.json').success(function(data) {
		self._dishes=ko.observableArray(data);
		var viewModel = {
			dishes: ko.observableArray()
		};
		viewModel.dishes(self._dishes());
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
			if (filter.length <1 && kkal.length <1 && prot.length <1 && fats.length <1 && carb.length <1){
				return viewModel.dishes()
			}
			var result = [];
			var multiplyFilters=[];

			if(filter.length >=1){
				_.each(result.length>=1?result:viewModel.dishes(),function (item){
					if(item.Name.indexOf(filter)>-1){
						multiplyFilters.push(item)
					}
				})
				result=[];
				result=multiplyFilters;
				multiplyFilters=[];
			}

			if(kkal.length >=1){
				_.each(result.length>=1?result:viewModel.dishes(),function (item){
					if(parseInt(item.Kkal)<=parseInt(kkal)){
						multiplyFilters.push(item)
					}
				})
				result=[];
				result=multiplyFilters;
				multiplyFilters=[];
			}

			if(prot.length >=1){
				_.each(result.length>=1?result:viewModel.dishes(),function (item){
					if(parseInt(item.Proteins)<=parseInt(prot)){
						multiplyFilters.push(item)
					}
				})
				result=[];
				result=multiplyFilters;
				multiplyFilters=[];
			}

			if(fats.length >=1){
				_.each(result.length>=1?result:viewModel.dishes(),function (item){
					if(parseInt(item.Fats)<=parseInt(fats)){
						multiplyFilters.push(item)
					}
				})
				result=[];
				result=multiplyFilters;
				multiplyFilters=[];
			}

			if(carb.length >=1){
				_.each(result.length>=1?result:viewModel.dishes(),function (item){
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
})
})();

