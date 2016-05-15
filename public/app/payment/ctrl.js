webAppController.PaymentCtrl = function ($stateParams, CompanyService,$scope){
    console.log($stateParams);
    var idPayment = $stateParams.paymentId;
    var t = $stateParams.token;
    var idPayer = $stateParams.PayerID;

    $scope.loading = true;

    $scope.doPayment = function(){
    	CompanyService.pay().set({paymentId: idPayment,token:t,PayerID:idPayer},function(result){
			if(result.error){
				return console.log(result.error);
			}else{
				$scope.loading=false;
				document.getElementById("payment").style.display='flex';
			}		
		}, function(){
		});
    }
    $scope.doPayment();
}