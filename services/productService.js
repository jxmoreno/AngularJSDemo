demoApp.factory('productService',function(){

    return {
        product:{        
                name: 'Apple',
                price: 24.8,
                stock: 12,
                stores: [
                    {
                        dir:'Av 9 de julio 1230, Buenos Aires',
                        openTime: 'abierto de lunes a viernes de 9 a 18hs',
                        rating: 5
                    },
                    {
                        dir: 'Av Corrientes 230, Buenos Aires',
                        openTime: 'abierto de lunes a domingos de 11 a 15hs',
                        rating: 1
                    },
                    {
                        dir: 'Medrano 900, Buenos Aires',
                        openTime: 'abierto de lunes a lunes de 13 a 19hs',
                        rating: 3
                    }
                ]
        }
    }

});