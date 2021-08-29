module.exports = {
  name: 'BuyInPage',
  title: '',
  description: '',
  example: '<vtex.cmc:BuyInPage />',
  rendered: `
  <input size="20" type="text" class="buy-in-page-quantity" value="1" productindex="0" style="display:block"/>
  <script>
  $('.buy-in-page-quantity[productindex=0]').on('change', function(evt){
      var el = $(evt.target), qty = +el.val();
      if(isNaN(qty)) return;
      el.trigger('quantityChanged.vtex', [89, qty]);
  });
  $(window).on('vtex.sku.selected', function(evt, productId, sku){
      var el = $('.buy-in-page-quantity[productindex=0]');
      if(89 === productId){
          if(sku.available){
              el.show();
          } else {
              el.hide();
          }
      }
  });
  </script>
  <a class="buy-in-page-button" productindex="0" style="display:block">Comprar</a>
  <script>$('.buy-in-page-button[productindex=0]').buyButton(89, {salesChannel: 1}, {redirect: false, addMessage: 'Produto adicionado com sucesso!', hideUnavailable: true})</script>
  <p class="unavailable-button" productindex="0" style="display:none">
      Produto Esgotado
  </p>
  <div productindex="0" class="notifyme" style="display:none">
      <script>$('.notifyme[productIndex=0]').notifyMe(89, {strings: {title: 'Avise-Me'}});</script>
  </div>
`,
};
