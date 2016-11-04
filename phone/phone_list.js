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
	$scope.reduce = function(id){
		var keyid = findIndex(id);
		--$scope.carts[keyid].quantity;
		//console.log(the_id);
	};
}
