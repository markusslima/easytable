/* global $ */
function EasyTable(options) {
	var defaults = {
		el: [],
		data: [],
		ajax: '',
		cols: [],
		numRows: 10,
		search: true,
		paginate: true,
		dataInfo: true
	};
	
	options = $.extend({}, defaults, options, typeof options === 'object' && options);
	
	function html() {
		var table = '<table><thead><tr>';
		
		for (var i = 0; i < options.cols.length; i++) {
			table += '<th>' + options.cols[i] + '</th>';
		}
		
		table += '</tr></thead><tbody>';
		if (options.data.length > 0) {
			for (var i = 0; i < options.data.length || i < options.numRows; i++) {
				table += '<tr>';
				options.data[i].forEach(function (item) {
					table += '<td>'+item+'</td>';
				});
				table += '</tr>';
			}
		} else {
			table += '<tr><td colspan="' + (options.cols.length - 1) + '">No data found!</td></tr>';
		}
		
		table += '</tbody></table>';
		
		return table;
	}
	
	(function () {
		if (options.el.length === 0) {
			window.console.error('The argument "el" was not set!');
		} else if (options.cols.length !== options.data[0].length && options.data.length > 0) {
			window.console.error('The number of columns is not specified in the same "data"!');
		} else if (typeof options.data !== 'array') {
			window.console.error('The "data" argument is not an array!');
		}
		
		$(options.el).html(html());
	})();
}