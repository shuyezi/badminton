window.badminton.utils = {
	get: function(url, data){
		if(!data) data = {};
		var config = {
            url : this.getApiUri(url),
            data : data,
            method: "GET",
            async : true,
            dataType : "json"
        }
		var promise = jQuery.ajax(config);
		promise
			.done(function(obj) { console.log("done", obj)})
			.fail(function(){ console.log("fail"); });

		return promise;
	},
	post: function(url, data){
		if(!data) data = {};
		var config = {
            url : getApiUri(url),
            data : data,
            method: "POST",
            async : true,
            dataType : "json"
        }
		var promise = jQuery.ajax(config);
		promise
			.done(function(obj) { console.log("done", obj)})
			.fail(function(){ console.log("fail"); });

		return promise;
	},
	getApiUri: function(url){
		console.log('url', url);
		return window.badminton.config.domain + url;
	},
	generateArray: function(len){
		var arr=[]; 
		for(var i = 0; i < len; i++){ arr[i] = i + 1; };
		return arr;
	}
}