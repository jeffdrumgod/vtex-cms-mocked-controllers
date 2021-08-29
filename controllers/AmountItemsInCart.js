module.exports = {
  name: 'AmountItemsInCart',
  title: 'Base para carrinho flutuante',
  description: '',
  example: '<vtex.cmc:AmountItemsInCart />',
  rendered: `
<div class="amount-items-in-cart">
  <div class="ajax-content-loader" rel="/no-cache/QuantidadeItensCarrinho.aspx">
      <div class="cartInfoWrapper">
          <span class="title"><span id="MostraTextoXml1">Resumo do Carrinho</span></span>
          <ul class="cart-info">
              <li class="amount-products">
                  <strong><span id="MostraTextoXml2">Total de Produtos:</span></strong>  <em class="amount-products-em">0</em>

              </li>
              <li class="amount-items">
                  <strong><span id="MostraTextoXml3">Total de Itens:</span></strong>  <em class="amount-items-em">0</em>
              </li>
              <li class="amount-kits">
                  <strong><span id="MostraTextoXml4">Total de Kits:</span></strong>  <em class="amount-kits-em">0</em>
              </li>
              <li class="total-cart">
                  <strong><span id="MostraTextoXml5">Valor Total:</span></strong>  <em class="total-cart-em">0,00</em>
              </li>
          </ul>
      </div>
  </div>
</div>
`,
};
