module.exports = {
  name: 'product-skuJson_0',
  description: 'JSON de informações de produto para uso pelas bibliotecas do front-end',
  selector: 'head',
  selector_index: '0',
  type_insert: 'append',
  page_type: ['product'],
  html: `
  <script>
          var skuJson_0 = {
          "productId": 89,
          "name": "Short Saia azul Marinho",
          "salesChannel": "1",
          "available": true,
          "displayMode": "especificacao",
          "dimensions": ["Tamanho"],
          "dimensionsInputType": {
              "Tamanho": "Radio"
          },
          "dimensionsMap": {
              "Tamanho": ["P", "M", "G"]
          },
          "skus": [{
              "sku": 278,
              "skuname": "Short Saia azul Marinho P",
              "dimensions": {
                  "Tamanho": "P"
              },
              "available": true,
              "availablequantity": 1,
              "cacheVersionUsedToCallCheckout": "ede8d18e0debae124349a3905800c485_geral:68BF0F7D54F83DF3AF6CB0AB1DD8ACA1",
              "listPriceFormated": "R$ 175,77",
              "listPrice": 17577,
              "taxFormated": "R$ 0,00",
              "taxAsInt": 0,
              "bestPriceFormated": "R$ 174,80",
              "bestPrice": 17480,
              "installments": 2,
              "installmentsValue": 8789,
              "installmentsInsterestRate": 0,
              "image": "{{IMAGES.zoom}}",
              "sellerId": "1",
              "seller": "Cha Chá Boutique",
              "measures": {
                  "cubicweight": 0.7700,
                  "height": 7.0000,
                  "length": 30.0000,
                  "weight": 250.0000,
                  "width": 22.0000
              },
              "unitMultiplier": 1.0000,
              "rewardValue": 0
          },
          {
              "sku": 279,
              "skuname": "Short Saia azul Marinho M",
              "dimensions": {
                  "Tamanho": "M"
              },
              "available": false,
              "availablequantity": 1,
              "cacheVersionUsedToCallCheckout": "ede8d18e0debae124349a3905800c485_geral:68BF0F7D54F83DF3AF6CB0AB1DD8ACA1",
              "listPriceFormated": "R$ 0,00",
              "listPrice": 17580,
              "taxFormated": "R$ 175,80",
              "taxAsInt": 0,
              "bestPriceFormated": "R$ 175,77",
              "bestPrice": 17577,
              "installments": 2,
              "installmentsValue": 8789,
              "installmentsInsterestRate": 0,
              "image": "{{IMAGES.zoom}}",
              "sellerId": "1",
              "seller": "Cha Chá Boutique",
              "measures": {
                  "cubicweight": 0.7700,
                  "height": 7.0000,
                  "length": 30.0000,
                  "weight": 250.0000,
                  "width": 22.0000
              },
              "unitMultiplier": 1.0000,
              "rewardValue": 0
          },
          {
              "sku": 280,
              "skuname": "Short Saia azul Marinho G",
              "dimensions": {
                  "Tamanho": "G"
              },
              "available": true,
              "availablequantity": 1,
              "cacheVersionUsedToCallCheckout": "ede8d18e0debae124349a3905800c485_geral:68BF0F7D54F83DF3AF6CB0AB1DD8ACA1",
              "listPriceFormated": "R$ 0,00",
              "listPrice": 17580,
              "taxFormated": "R$ 175,80",
              "taxAsInt": 0,
              "bestPriceFormated": "R$ 175,79",
              "bestPrice": 17579,
              "installments": 2,
              "installmentsValue": 8789,
              "installmentsInsterestRate": 0,
              "image": "{{IMAGES.zoom}}",
              "sellerId": "1",
              "seller": "Cha Chá Boutique",
              "measures": {
                  "cubicweight": 0.7700,
                  "height": 7.0000,
                  "length": 30.0000,
                  "weight": 250.0000,
                  "width": 22.0000
              },
              "unitMultiplier": 1.0000,
              "rewardValue": 0
          }]
      };
      CATALOG_SDK.setProductWithVariationsCache(skuJson_0.productId, skuJson_0);
      var skuJson = skuJson_0;
      </script>
`,
};
