demoApp.controller('ProductController', 
function ProductController($scope, productService){
    $scope.imgUrl="/img/emblue-logo.gif";

    $scope.product = productService.product;
    // $scope.product ={
    //     name: 'Apple',
    //     price: 24.8,
    //     stock: 12,
    //     stores: [
    //         {
    //             dir:'Av 9 de julio 1230, Buenos Aires',
    //             openTime: 'abierto de lunes a viernes de 9 a 18hs',
    //             rating: 5
    //         },
    //         {
    //             dir: 'Av Corrientes 230, Buenos Aires',
    //             openTime: 'abierto de lunes a domingos de 11 a 15hs',
    //             rating: 1
    //         },
    //         {
    //             dir: 'Medrano 900, Buenos Aires',
    //             openTime: 'abierto de lunes a lunes de 13 a 19hs',
    //             rating: 3
    //         }
    //     ]

    // }
    $scope.selectedOpenTime="Hage click en un store para saber su horario";


    $scope.SelectOpenTime = function(store){
        $scope.selectedOpenTime = store.openTime;
    }

});