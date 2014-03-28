viewModel.summKkalForDay = ko.computed (function  () {
  	var dinner = viewModel.dinner();
  	var lunch = viewModel.lunch();
  	var breakfast = viewModel.breakfast();
  	var summKkalDinner=0;
  	var summKkalLunch=0;
  	var summKkalBrakfast=0;
  	
  	_.each(dinner,function (item){
  		summKkalDinner+=parseInt(item.Kkal,10);
  	})

  	_.each(lunch,function (item){
  		summKkalLunch+=parseInt(item.Kkal,10);
  	})
    
    _.each(breakfast,function (item){
  		summKkalBrakfast+=parseInt(item.Kkal,10);
  	})

  	return summKkalLunch + summKkalBrakfast + summKkalDinner;
  })

viewModel.summProtForDay = ko.computed (function  () {
  	var dinner = viewModel.dinner();
  	var lunch = viewModel.lunch();
  	var breakfast = viewModel.breakfast();
  	var summProtDinner=0;
  	var summProtLunch=0;
  	var summProtBrakfast=0;
  	
  	_.each(dinner,function (item){
  		summProtDinner+=parseInt(item.Proteins,10);
  	})

  	_.each(lunch,function (item){
  		summProtLunch+=parseInt(item.Proteins,10);
  	})
    
    _.each(breakfast,function (item){
  		summProtBrakfast+=parseInt(item.Proteins,10);
  	})

  	return summProtLunch + summProtBrakfast + summProtDinner;
  })

viewModel.summFatsForDay = ko.computed (function  () {
  	var dinner = viewModel.dinner();
  	var lunch = viewModel.lunch();
  	var breakfast = viewModel.breakfast();
  	var summFatsDinner=0;
  	var summFatsLunch=0;
  	var summFatsBrakfast=0;
  	
  	_.each(dinner,function (item){
  		summFatsDinner+=parseInt(item.Fats,10);
  	})

  	_.each(lunch,function (item){
  		summFatsLunch+=parseInt(item.Fats,10);
  	})
    
    _.each(breakfast,function (item){
  		summFatsBrakfast+=parseInt(item.Fats,10);
  	})

  	return summFatsLunch + summFatsBrakfast + summFatsDinner;
  })

viewModel.summCarbForDay = ko.computed (function  () {
  	var dinner = viewModel.dinner();
  	var lunch = viewModel.lunch();
  	var breakfast = viewModel.breakfast();
  	var summCarbDinner=0;
  	var summCarbLunch=0;
  	var summCarbBrakfast=0;
  	
  	_.each(dinner,function (item){
  		summCarbDinner+=parseInt(item.Carbonates,10);
  	})

  	_.each(lunch,function (item){
  		summCarbLunch+=parseInt(item.Carbonates,10);
  	})
    
    _.each(breakfast,function (item){
  		summCarbBrakfast+=parseInt(item.Carbonates,10);
  	})

  	return summCarbLunch + summCarbBrakfast + summCarbDinner;
  })

viewModel.displayKkalLimitForDay = ko.computed(function () {
  	var availableKkal = viewModel.summKkalForDay();
  	var enteredLimit = viewModel.kkalLimitForDay();
  	if(enteredLimit===''){
  		return '';
  	}
  	if(enteredLimit - availableKkal>0){
  		var limit=enteredLimit - availableKkal;
            //viewModel.kkal(String(limit));
            return enteredLimit - availableKkal;
        } 
        return enteredLimit - availableKkal;
    })

viewModel.displayProtLimitForDay = ko.computed(function () {
  	var availableProt = viewModel.summProtForDay();
  	var enteredLimit = viewModel.protLimitForDay();
  	if(enteredLimit===''){
  		return '';
  	}
  	if(enteredLimit - availableProt>0){
  		var limit=enteredLimit - availableProt;
            //viewModel.Prot(String(limit));
            return enteredLimit - availableProt;
        } 
        return enteredLimit - availableProt;
    })

viewModel.displayFatsLimitForDay = ko.computed(function () {
  	var availableFats = viewModel.summFatsForDay();
  	var enteredLimit = viewModel.fatLimitForDay();
  	if(enteredLimit===''){
  		return '';
  	}
  	if(enteredLimit - availableFats>0){
  		var limit=enteredLimit - availableFats;
            //viewModel.Fats(String(limit));
            return enteredLimit - availableFats;
        } 
        return enteredLimit - availableFats;
    })

viewModel.displayCarbLimitForDay = ko.computed(function () {
  	var availableCarb = viewModel.summCarbForDay();
  	var enteredLimit = viewModel.carbLimitForDay();
  	if(enteredLimit===''){
  		return '';
  	}
  	if(enteredLimit - availableCarb>0){
  		var limit=enteredLimit - availableCarb;
            //viewModel.Carb(String(limit));
            return enteredLimit - availableCarb;
        } 
        return enteredLimit - availableCarb;
    })