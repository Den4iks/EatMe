ko.bindingHandlers.editableText = {
	init: function(element, valueAccessor) {
		$(element).on('keyup', function() {
			var observable = valueAccessor();
			observable( $(this).text() );
		});
	},
	update: function(element, valueAccessor) {
		var value = ko.utils.unwrapObservable(valueAccessor());
		$(element).text(value);
	}
};