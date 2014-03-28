 viewModel.addBreakfast = function (item){
   
  if(!viewModel.kkalLimit()==0 && (parseInt(item.Kkal)>viewModel.displayKkalLimit())){
    viewModel.alert('Вы превышаете лимит Ккал На Завтрак');
    setTimeout(function(){viewModel.alert('')},2000);
    return;
    
}
if(!viewModel.protLimit()==0 && (parseInt(item.Proteins)>viewModel.displayProtLimit())) {
   viewModel.alert('Вы превышаете лимит Протеинов На Завтрак');
   setTimeout(function(){viewModel.alert('')},2000);
   return;
   
}

if (!viewModel.fatLimit()==0 && (parseInt(item.Fats)>viewModel.displayFatLimit())){
    viewModel.alert('Вы превышаете лимит Жиров На Завтрак');
    setTimeout(function(){viewModel.alert('')},2000);
    return;
}

if(!viewModel.carbLimit()==0 && (parseInt(item.Carbonates)>viewModel.displayCarbLimit())){
    viewModel.alert('Вы превышаете лимит Углеводов На Завтрак');
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

viewModel.breakfast.push(item);

}

viewModel.removeBreakfast = function (item) {
    viewModel.breakfast.remove(item);
};

viewModel.filteredBreakfast = ko.computed (function () {
    var bf = viewModel.breakfast();
    return bf;
})

viewModel.summKkal = ko.computed (function  () {
    var bf = viewModel.breakfast();
    var summKkal=0;
    _.each(bf,function (item){
        summKkal+=parseInt(item.Kkal,10);
    })
    return summKkal;
})

viewModel.summProt = ko.computed (function  () {
    var bf = viewModel.breakfast();
    var summProt=0;
    _.each(bf,function (item){
        summProt+=parseInt(item.Proteins,10);
    })
    return summProt;
})

viewModel.summCarb = ko.computed (function  () {
    var bf = viewModel.breakfast();
    var summCarb=0;
    _.each(bf,function (item){
        summCarb+=parseInt(item.Carbonates,10);
    })
    return summCarb;
})

viewModel.summFats = ko.computed (function  () {
    var bf = viewModel.breakfast();
    var summFats=0;
    _.each(bf,function (item){
        summFats+=parseInt(item.Fats,10);
    })
    return summFats;
})



viewModel.displayKkalLimit = ko.computed(function () {
    var availableKkal = viewModel.summKkal();
    var enteredLimit = viewModel.kkalLimit();
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

viewModel.displayProtLimit = ko.computed(function () {
    var availableProt = viewModel.summProt();
    var enteredLimit = viewModel.protLimit();
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

viewModel.displayCarbLimit = ko.computed(function () {
    var availableCarb = viewModel.summCarb();
    var enteredLimit = viewModel.carbLimit();
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

viewModel.displayFatLimit = ko.computed(function () {
    var availableFat = viewModel.summFats();
    var enteredLimit = viewModel.fatLimit();
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