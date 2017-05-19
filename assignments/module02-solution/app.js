(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

	ToBuyController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyController(ShoppingListCheckOffService){
		var list = this;

		list.items = ShoppingListCheckOffService.getListToBuy();
	

		list.bought = function (itemIndex){
			ShoppingListCheckOffService.transferBoughtItem(itemIndex);		
		}

		list.checkQuantity = function() {
			return ShoppingListCheckOffService.checkQuantity(list.items.length > 0);
		}

	}

	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService']
	function AlreadyBoughtController(ShoppingListCheckOffService){
		var list = this;

		list.items = ShoppingListCheckOffService.getListBought();

		list.checkQuantity = function() {
			return ShoppingListCheckOffService.checkQuantity(list.items.length != 0);
		}
		
	}

	function ShoppingListCheckOffService(){
		var service = this;

		var listToBuy = [
			{name: 'cookies', quantity: 10},
			{name: 'potatoes', quantity: 5},
			{name: 'drinks' , quantity: 2},
			{name: 'nuts', quantity: 1},
			{name: 'butter', quantity: 1}
		];

		var listBought = [];

		service.transferBoughtItem = function (itemIndex) {
			var item = listToBuy[itemIndex];

			listBought.push(item);
			listToBuy.splice(itemIndex, 1);	
		}

		service.getListToBuy = function () {
			return listToBuy;
		}

		service.getListBought = function () {
			return listBought;
		}

		service.checkQuantity = function ( expression ) {
			if (expression) {
				return false;
			} else {
				return true;
			}

		}

	}

})();