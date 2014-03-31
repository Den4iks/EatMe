   


var viewModel = {
      dishes: ko.observableArray(),
      alert : ko.observable(''),
      filter : ko.observable(''),
      prot : ko.observable('').extend({ required: "Please enter numeric value only" }),
      fats : ko.observable('').extend({ required: "Please enter numeric value only" }),
      carb : ko.observable('').extend({ required: "Please enter numeric value only" }),
      kkal : ko.observable('').extend({ required: "Please enter numeric value only" }),
      typeOfMeals : ko.observable(''),
      kkalLimit : ko.observable('').extend({ required: "Please enter numeric value only" }),
      protLimit : ko.observable('').extend({ required: "Please enter numeric value only" }),
      fatLimit : ko.observable('').extend({ required: "Please enter numeric value only" }),
      carbLimit : ko.observable('').extend({ required: "Please enter numeric value only" }),
      kkalLimitLunch : ko.observable('').extend({ required: "Please enter numeric value only" }),
      protLimitLunch : ko.observable('').extend({ required: "Please enter numeric value only" }),
      fatLimitLunch : ko.observable('').extend({ required: "Please enter numeric value only" }),
      carbLimitLunch : ko.observable('').extend({ required: "Please enter numeric value only" }),
      kkalLimitDinner : ko.observable('').extend({ required: "Please enter numeric value only" }),
      protLimitDinner : ko.observable('').extend({ required: "Please enter numeric value only" }),
      fatLimitDinner : ko.observable('').extend({ required: "Please enter numeric value only" }),
      carbLimitDinner : ko.observable('').extend({ required: "Please enter numeric value only" }),
      kkalLimitForDay : ko.observable('').extend({ required: "Please enter numeric value only" }),
      protLimitForDay : ko.observable('').extend({ required: "Please enter numeric value only" }),
      fatLimitForDay : ko.observable('').extend({ required: "Please enter numeric value only" }),
      carbLimitForDay : ko.observable('').extend({ required: "Please enter numeric value only" }),
      breakfast : ko.observableArray(''),
      lunch : ko.observableArray(''),
      dinner : ko.observableArray('')
};

