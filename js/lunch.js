  viewModel.addLunch = function (item){
 
  	if(!viewModel.kkalLimitLunch()==0 && (parseInt(item.Kkal)>viewModel.displayKkalLimitLunch())){
  		viewModel.alert('Вы превышаете лимит Ккал на Обед');
  		setTimeout(function(){viewModel.alert('')},2000);
  		return;

  	}
  	if(!viewModel.protLimitLunch()==0 && (parseInt(item.Proteins)>viewModel.displayProtLimitLunch())) {
  		viewModel.alert('Вы превышаете лимит Протеинов на Обед');
  		setTimeout(function(){viewModel.alert('')},2000);
  		return;

  	}

  	if (!viewModel.fatLimitLunch()==0 && (parseInt(item.Fats)>viewModel.displayFatLimitLunch())){
  		viewModel.alert('Вы превышаете лимит Жиров на Обед');
  		setTimeout(function(){viewModel.alert('')},2000);
  		return;
  	}

  	if(!viewModel.carbLimitLunch()==0 && (parseInt(item.Carbonates)>viewModel.displayCarbLimitLunch())){
  		viewModel.alert('Вы превышаете лимит Углеводов на Обед');
  		setTimeout(function(){viewModel.alert('')},2000);
  		return;
  	}

    	if(!viewModel.kkalLimitForDay()==0 && (parseInt(item.Kkal)>viewModel.displayKkalLimitForDay())){
  		viewModel.alert('Вы превышаете лимит Ккал на День');
  		setTimeout(function(){viewModel.alert('')},2000);
  		return;

  	}
  	if(!viewModel.protLimitForDay()==0 && (parseInt(item.Proteins)>viewModel.displayProtLimitForDay())) {
  		viewModel.alert('Вы превышаете лимит Протеинов на День');
  		setTimeout(function(){viewModel.alert('')},2000);
  		return;

  	}

  	if (!viewModel.fatLimitForDay()==0 && (parseInt(item.Fats)>viewModel.displayFatsLimitForDay())){
  		viewModel.alert('Вы превышаете лимит Жиров на День');
  		setTimeout(function(){viewModel.alert('')},2000);
  		return;
  	}

  	if(!viewModel.carbLimitForDay()==0 && (parseInt(item.Carbonates)>viewModel.displayCarbLimitForDay())){
  		viewModel.alert('Вы превышаете лимит Углеводов на День');
  		setTimeout(function(){viewModel.alert('')},2000);
  		return;
  	}


  	viewModel.lunch.push(item);

  }

  viewModel.filteredLunch = ko.computed (function () {
  	var l = viewModel.lunch();
  	return l;
  })

  viewModel.removeLunch = function (item) {
  	viewModel.lunch.remove(item);
  };

  viewModel.summKkalLunch = ko.computed (function  () {
  	var bf = viewModel.lunch();
  	var summKkalLunch=0;
  	_.each(bf,function (item){
  		summKkalLunch+=parseInt(item.Kkal,10);
  	})
  	return summKkalLunch;
  })

  viewModel.summProtLunch = ko.computed (function  () {
  	var bf = viewModel.lunch();
  	var summProtLunch=0;
  	_.each(bf,function (item){
  		summProtLunch+=parseInt(item.Proteins,10);
  	})
  	return summProtLunch;
  })

  viewModel.summCarbLunch = ko.computed (function  () {
  	var bf = viewModel.lunch();
  	var summCarbLunch=0;
  	_.each(bf,function (item){
  		summCarbLunch+=parseInt(item.Carbonates,10);
  	})
  	return summCarbLunch;
  })

  viewModel.summFatsLunch = ko.computed (function  () {
  	var bf = viewModel.lunch();
  	var summFatsLunch=0;
  	_.each(bf,function (item){
  		summFatsLunch+=parseInt(item.Fats,10);
  	})
  	return summFatsLunch;
  })

  viewModel.displayKkalLimitLunch = ko.computed(function () {
  	var availableKkal = viewModel.summKkalLunch();
  	var enteredLimit = viewModel.kkalLimitLunch();
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

  viewModel.displayProtLimitLunch = ko.computed(function () {
  	var availableProt = viewModel.summProtLunch();
  	var enteredLimit = viewModel.protLimitLunch();
  	if(enteredLimit===''){
  		return '';
  	}
  	if(enteredLimit - availableProt>0){
  		var limit=enteredLimit - availableProt;
            //viewModel.kkal(String(limit));
            return enteredLimit - availableProt;
        } 
        return enteredLimit - availableProt;
    })

  viewModel.displayCarbLimitLunch = ko.computed(function () {
  	var availableCarb = viewModel.summCarbLunch();
  	var enteredLimit = viewModel.carbLimitLunch();
  	if(enteredLimit===''){
  		return '';
  	}
  	if(enteredLimit - availableCarb>0){
  		var limit=enteredLimit - availableCarb;
            //viewModel.kkal(String(limit));
            return enteredLimit - availableCarb;
        } 
        return enteredLimit - availableCarb;
    })

  viewModel.displayFatLimitLunch = ko.computed(function () {
  	var availableFat = viewModel.summFatsLunch();
  	var enteredLimit = viewModel.fatLimitLunch();
  	if(enteredLimit===''){
  		return '';
  	}
  	if(enteredLimit - availableFat>0){
  		var limit=enteredLimit - availableFat;
            //viewModel.kkal(String(limit));
            return enteredLimit - availableFat;
        } 
        return enteredLimit - availableFat;
    })