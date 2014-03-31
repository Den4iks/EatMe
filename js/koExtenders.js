ko.extenders.required = function(target, overrideMessage) {
    //add some sub-observables to our observable
    target.hasError = ko.observable();
 
    //define a function to do validation
    function validate(newValue) {
      if(isNaN(newValue)){
        viewModel.alert(overrideMessage)
        setTimeout(function(){viewModel.alert('')},2000);
        target('')
        target.hasError(true);
        return
      }else{
       target.hasError(false);
      }
    }
    
    target.subscribe(validate);
 

    return target;
}
