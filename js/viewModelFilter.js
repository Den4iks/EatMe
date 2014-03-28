viewModel.filteredTasks = ko.computed (function(){
    	var filter = viewModel.filter().trim();
    	var kkal = viewModel.kkal().trim();
    	var prot = viewModel.prot().trim();
    	var fats = viewModel.fats().trim();
    	var carb = viewModel.carb().trim();
        var type = viewModel.typeOfMeals().trim();
    	var result = [];
    	var multiplyFilters = [];
    	
        result=viewModel.dishes();
    	if (filter.length <1 && kkal.length <1 && prot.length <1 && fats.length <1 && carb.length <1 && type.length<1){
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

        if(type.length >=1){
            _.each(result,function (item){
                if(item.Type.indexOf(type)>-1){
                    multiplyFilters.push(item)
                }
            })
            result=[];
            result=multiplyFilters;
            multiplyFilters=[];
        }


    	return result;
    })