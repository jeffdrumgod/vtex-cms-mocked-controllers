module.exports = {
  name: 'skuPrice',
  title: '',
  description: '',
  example: '<vtex.cmc:skuPrice />',
  rendered: `
  <div class="plugin-preco">
  <p productindex="0" class="descricao-preco">
      <em productindex="0" class="valor-de">De: <strong productindex="0" class="skuListPrice">R$ 175,80</strong></em>
      <em productindex="0" class="valor-por">Por: <strong productindex="0" class="skuBestPrice">R$ 175,78</strong></em>
      <em productindex="0" class="valor-dividido" style="display:block"><span><span>ou <label productindex="0" class="skuBestInstallmentNumber">2</label>X de</span><strong><label productindex="0" class="skuBestInstallmentValue">R$ 87,89</label></strong></span></em>
      <p productindex="0" class="preco-a-vista" style="display:none">
          Preço a vista: <strong productindex="0" class="skuPrice">R$ 175,78</strong>
      </p>
  </p>
</div>
<script>$('.plugin-preco').price(89);</script>
`,
};
