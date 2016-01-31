window.badminton.utils = {
	systemErr: "系统繁忙，请稍后重试",
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
		var _this = this;
		promise
			.done(function(data) { 
				if(data.success == 1) {
					jQuery.Deferred().resolve(data);
				}else{
					alert(data.msg);
					return false;
				}
			})
			.fail(function(data){
				alert(_this.systemErr);
				return false;
			});

		return promise;
	},
	post: function(url, data){
		if(!data) data = {};
		var config = {
            url : this.getApiUri(url),
            data : data,
            method: "POST",
            async : true,
            dataType : "json"
        }
		var promise = jQuery.ajax(config);
		var _this = this;
		promise
			.done(function(data){
				jQuery.Deferred().resolve(data);
			})
			.fail(function(){
				alert(_this.systemErr);
				return false;
			});
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
	},
	isObject: function(param){
		return Object.prototype.toString.call(param) === '[object Object]'
	},
	objectAssign: function(oldObj, newObj){
		if(this.isObject(oldObj) && this.isObject(newObj)){
			var newOldObject = new Object();
			for(var i in oldObj){
				newOldObject[i] = oldObj[i];
			}
			for(var i in newOldObject){
				if(newObj[i]) newOldObject[i] = newObj[i];
			}
			return newOldObject;
		}
		return {};
	}
}