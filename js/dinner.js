   viewModel.addDinner = function (item){
   	
   	if(!viewModel.kkalLimitDinner()==0 && (parseInt(item.Kkal)>viewModel.displayKkalLimitDinner())){
   		viewModel.alert('Вы превышаете лимит Ккал на Ужин');
   		setTimeout(function(){viewModel.alert('')},2000);
   		return;

   	}
   	if(!viewModel.protLimitDinner()==0 && (parseInt(item.Proteins)>viewModel.displayProtLimitDinner())) {
   		viewModel.alert('Вы превышаете лимит Протеинов на Ужин');
   		setTimeout(function(){viewModel.alert('')},2000);
   		return;

   	}

   	if (!viewModel.fatLimitDinner()==0 && (parseInt(item.Fats)>viewModel.displayFatLimitDinner())){
   		viewModel.alert('Вы превышаете лимит Жиров на Ужин');
   		setTimeout(function(){viewModel.alert('')},2000);
   		return;
   	}

   	if(!viewModel.carbLimitDinner()==0 && (parseInt(item.Carbonates)>viewModel.displayCarbLimitDinner())){
   		viewModel.alert('Вы превышаете лимит Углеводов на Ужин');
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

   	viewModel.dinner.push(item);
   }

   viewModel.filteredDinner = ko.computed (function () {
   	var l = viewModel.dinner();
   	return l;
   })

   viewModel.removeDinner = function (item) {
   	viewModel.dinner.remove(item);
   };

   viewModel.summKkalDinner = ko.computed (function  () {
   	var bf = viewModel.dinner();
   	var summKkalDinner=0;
   	_.each(bf,function (item){
   		summKkalDinner+=parseInt(item.Kkal,10);
   	})
   	return summKkalDinner;
   })

   viewModel.summProtDinner = ko.computed (function  () {
   	var bf = viewModel.dinner();
   	var summProtDinner=0;
   	_.each(bf,function (item){
   		summProtDinner+=parseInt(item.Proteins,10);
   	})
   	return summProtDinner;
   })

   viewModel.summCarbDinner = ko.computed (function  () {
   	var bf = viewModel.dinner();
   	var summCarbDinner=0;
   	_.each(bf,function (item){
   		summCarbDinner+=parseInt(item.Carbonates,10);
   	})
   	return summCarbDinner;
   })

   viewModel.summFatsDinner = ko.computed (function  () {
   	var bf = viewModel.dinner();
   	var summFatsDinner=0;
   	_.each(bf,function (item){
   		summFatsDinner+=parseInt(item.Fats,10);
   	})
   	return summFatsDinner;
   })

   viewModel.displayKkalLimitDinner = ko.computed(function () {
   	var availableKkal = viewModel.summKkalDinner();
   	var enteredLimit = viewModel.kkalLimitDinner();
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

   viewModel.displayProtLimitDinner = ko.computed(function () {
   	var availableProt = viewModel.summProtDinner();
   	var enteredLimit = viewModel.protLimitDinner();
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

   viewModel.displayCarbLimitDinner = ko.computed(function () {
   	var availableCarb = viewModel.summCarbDinner();
   	var enteredLimit = viewModel.carbLimitDinner();
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

   viewModel.displayFatLimitDinner = ko.computed(function () {
   	var availableFat = viewModel.summFatsDinner();
   	var enteredLimit = viewModel.fatLimitDinner();
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