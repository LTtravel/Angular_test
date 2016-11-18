var cartsController = function($scope){
	$scope.cart = [
		{
			id:2099,
			name:'vivo y18l',
			quantity:'3',
			price:'1290'
		},
		{
			id:1523,
			name:'honmi',
			quantity:'21',
			price:'1099'
		},
		{
			id:1621,
			name:'Hisin',
			quantity:'8',
			price:'800'
		},
		{
			id:2148,
			name:'Nokiio',
			quantity:'10',
			price:'599'
		}
	];
	var findIndex = function(id){
		var index = -1;
		angular.forEach($scope.carts,function(item,key){
			if(item.id == id){
				index = key;
			}
		});
		return index;
	};
	$scope.reduce = function(id){
		var keyid = findIndex(id);
		--$scope.carts[keyid].quantity;
		//console.log(the_id);
	};
	$scope.add = function(id){
		var keyid = findIndex(id);
		++$scope.carts[keyid].quantity;
	};
	$scope.totalPri = function(id){
		var total = 0;
		angular.forEach($scope.carts,function(item){
			var sum = item.price * item.quantity;
			total +=sum;
		});
		return total;
	};
	$scope.totalNum = function(id){
		var num = 0;
		angular.forEach($scope.carts,function(item){
			var n = parseInt(item.quantity);
			num +=n;
		});
		return num;
	};
}
