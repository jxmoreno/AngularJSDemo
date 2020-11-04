demoApp.controller('EditProductController', 
function EditProductController($scope){

    $scope.saveProduct = function(product, productForm){
        if (productForm.$valid){
            window.alert("Guardado!");
        }
        
    }

});