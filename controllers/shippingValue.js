module.exports = {
  name: 'shippingValue',
  title: '',
  description: '',
  example: '<vtex.cmc:shippingValue />',
  rendered: `
  <p id="popupCalculoFreteWrapper" class="frete">
    <a onclick="ShippingValue();" href="javascript:void(0);" title="Calcule o valor do frete e prazo de entrega para a sua região" class="shipping-value">Calcule o valor do frete e prazo de entrega para a sua região</a>
</p>
<div id="calculoFrete" seller="1" produtocorrente="11" skucorrente="23">
</div>
`,
};
