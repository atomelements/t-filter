var textFilter = {
	category: "Locations",
  type: "AutoSuggest",
	addHtml: function(customFilterElem, filterData, onChangeCallback){

		Polymer.dom(customFilterElem).appendChild(document.createElement('input'));

    //Polymer.dom(customFilterElem).innerHTML = "<div><span><input /></span></div>";
    var x = Polymer.dom(customFilterElem).querySelector('input');
    x.addEventListener('change', function() {
        
        var currentFilter = {
            "category": filterData.category,
            "group": filterData.group,
            "name": filterData.name,
            "value": this.value,
            "type": filterData.type
        };
        onChangeCallback(currentFilter);
        
    });
  },
  
  resetElement: function(customFilterElem) {
  	x = Polymer.dom(customFilterElem).querySelector('input').value = '';
  },

  getDisplayLabel: function(filterData) {
  	return filterData.label;
  },

  getAppliedFilter: function(customFilterElem, filterData, lastChange) {
  	return lastChange;
  }
};