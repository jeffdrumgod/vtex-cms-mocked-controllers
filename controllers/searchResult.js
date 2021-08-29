module.exports = {
  name: 'searchResult',
  title: 'Resultado de busca',
  description: 'Imprime bloco de produtos de resultado de busca',
  example: '<vtex.cmc:searchResult layout="ebaf53ee-8071-4b91-8337-c9f20a5d8c16" itemCount="16" columnCount="4" />',
  rendered: `
  <div class="main">
          <p class="searchResultsTime"><span class="resultado-busca-numero"><span class="label">Produtos
                      encontrados:</span> <span class="value">4</span></span><span class="resultado-busca-termo"> <span
                      class="label">Resultado da Pesquisa por:</span> <strong class="value"></strong></span><span
                  class="resultado-busca-tempo"> <span class="label">em</span> <span class="value">4 ms</span></span>
          </p>
          <div class="sub">
              <div class="resultado-busca-filtro">
                  <fieldset class="orderBy">
                      <label>Ordenar por:</label>
                      <select id="O"
                          onchange="window.location.href= '/test-category?PS=16&' + 'O=' + this.options[this.selectedIndex].value">
                          <option value="">Selecione</option>
                          <option value="OrderByPriceASC">Menor Preço</option>
                          <option value="OrderByPriceDESC">Maior Preço</option>
                          <option value="OrderByTopSaleDESC">Mais vendidos</option>
                          <option value="OrderByReviewRateDESC">Melhores avaliações</option>
                          <option value="OrderByNameASC">A - Z</option>
                          <option value="OrderByNameDESC">Z - A</option>
                          <option value="OrderByReleaseDateDESC">Data de lançamento</option>
                          <option value="OrderByBestDiscountDESC">Melhor Desconto</option>
                      </select>
                  </fieldset>
                  <fieldset class="filterBy">
                      Itens por página:
                      <select id="PS"
                          onchange="window.location.href= '/test-category?' + 'PS=' + this.options[this.selectedIndex].value">
                          <option selected="selected" value="16">16</option>
                          <option value="32">32</option>
                          <option value="48">48</option>
                          <option value="64">64</option>
                      </select>
                  </fieldset>
                  <p class="compare">Produtos selecionados para comparar: <strong><span class="compare-selection-count"
                              id="NumeroSuperior">0</span></strong><a title="Comparar" class="btn-comparar" href="#">Comparar</a></p>
              </div>
          </div>
          <div class="vitrine resultItemsWrapper">
              <script type='text/javascript'>
                  var pagecount_39213654;
                  $(document).ready(function () {
                      pagecount_39213654 = 1;
                      $('#PagerTop_39213654').pager({
                          pagenumber: 1,
                          pagecount: pagecount_39213654,
                          buttonClickCallback: PageClick_39213654
                      });
                      $('#PagerBottom_39213654').pager({
                          pagenumber: 1,
                          pagecount: pagecount_39213654,
                          buttonClickCallback: PageClick_39213654
                      });
                      if (window.location.hash != '') PageClick_39213654(window.location.hash.replace(/#/, ''));
                  });
                  PageClick_39213654 = function (pageclickednumber) {
                      window.location.hash = pageclickednumber;
                      $('#ResultItems_39213654').load(
                          '/buscapagina?fq=C%3a%2f1%2f&PS=16&sl=ebaf53ee-8071-4b91-8337-c9f20a5d8c16&cc=4&sm=0&PageNumber=' +
                          pageclickednumber,
                          function () {
                              $('#PagerTop_39213654').pager({
                                  pagenumber: pageclickednumber,
                                  pagecount: pagecount_39213654,
                                  buttonClickCallback: PageClick_39213654
                              });
                              $('#PagerBottom_39213654').pager({
                                  pagenumber: pageclickednumber,
                                  pagecount: pagecount_39213654,
                                  buttonClickCallback: PageClick_39213654
                              });
                              bindQuickView();
                          });
                  }
              </script>
              <div class="pager top" id="PagerTop_39213654"></div>
              <div id="ResultItems_39213654" class="uni-shelf">
                  <div class="uni-shelf n4colunas">
                      <ul>
                          <li layout="ebaf53ee-8071-4b91-8337-c9f20a5d8c16" class="alimentos-|-unilever-store">
          
                              <div class="uni-shelf-product" data-track-shelf="item"
                                  data-track-shelf-name="Maionese Hellmann&#180;s Tradicional 500g" data-track-shelf-pid="4"
                                  data-track-shelf-sid="4" data-track-shelf-price="R$ 2,19"
                                  data-track-shelf-departament="Alimentos" data-track-shelf-brand="Hellmann´s"
                                  data-track-shelf-category="Alimentos" data-track-shelf-inStock="available"
                                  data-idproduto="4">
          
                                  <div class="uni-shelf-image">
                                      <a title="Maionese Hellmann&#180;s Tradicional 500g"
                                          href="https://example.myvtex.com/produto-teste-003-copy-4-/p">
                                          <img
                                              src="https://example.vteximg.com.br/arquivos/ids/155408-292-292/13740811419678.jpg?v=637263994482530000"
                                              width="292" height="292" alt="Maionese-Hellmann-s-Tradicional-500g" id="" />
          
                                      </a>
                                  </div>
          
                                  <div class="uni-shelf-info">
                                      <a class="uni-shelf-brand"
                                          href="https://example.myvtex.com/produto-teste-003-copy-4-/p">Hellmann´s</a>
                                      <a class="uni-shelf-name"
                                          href="https://example.myvtex.com/produto-teste-003-copy-4-/p">Maionese
                                          Hellmann&#180;s Tradicional 500g</a>
                                      <a class="uni-shelf-description"
                                          href="https://example.myvtex.com/produto-teste-003-copy-4-/p">Pote | 500gr</a>
                                  </div>
          
                                  <div class="uni-shelf-price">
                                      <p class="uni-shelf-price-best">
                                          <span class="uni-shelf-price-best-text">Por: </span>
                                          <span class="uni-shelf-price-best-value">R$ 2,19</span>
                                      </p>
                                  </div>
          
                                  <input type="hidden" class="amount-max-in-cart" value="50"><input type="hidden"
                                      class="amount-max-in-cart-message"
                                      value="Desculpe, mas só é possível comprar até #quantidade# unidades do item #produto# no momento."><input
                                      type="text" size="3" class="amount-in-cart aic4" maxlength="3" id="amount-in-cart4"
                                      value="1">
                                  <div class="wrapper-buy-button-asynchronous bba4"><input type="hidden"
                                          value="Produto incluído no carrinho"
                                          class="buy-button-asynchronous-product-message-success"><input type="hidden"
                                          value="Produto não incluído no carrinho"
                                          class="buy-button-asynchronous-product-message-fail"><input type="hidden" value="4"
                                          class="buy-button-asynchronous-product-id"><input type="hidden" value="4"
                                          class="buy-button-asynchronous-defaultsku-id"><input type="hidden"
                                          value="/../no-cache/CarrinhoAdd.aspx?idSku=[idSku]&quantidade=[quantidade]"
                                          class="buy-button-asynchronous-product-url-4"><span class="add"><a
                                              href="https://example.myvtex.com/checkout/cart/add?sku=4&qty=1&seller=1&sc=1&price=219&cv=a6c26f22be90419dde6b3b547e53a598_&sc=1"
                                              class="btn-add-buy-button-asynchronous remove-href btn-not-clicked asynchronousBuyButton actionActivated vtexsm_activated .btover-active"
                                              style="cursor:pointer" id="idprod4">Comprar</a></span><input type="hidden"
                                          value="cart" class="buy-button-asynchronous-go-to-cart-4" />
                                      <div class="buy-button-asynchronous message-user4"></div>
                                  </div>
          
                                  <a href="#" class="uni-shelf-login">Cadastre-se para comprar</a>
                              </div>
                          </li>
                          <li id="helperComplement_4" style="display:none" class="helperComplement"></li>
                          <li layout="ebaf53ee-8071-4b91-8337-c9f20a5d8c16" class="alimentos-|-unilever-store">
          
                              <div class="uni-shelf-product" data-track-shelf="item"
                                  data-track-shelf-name="Produto teste 3 - test product name" data-track-shelf-pid="3"
                                  data-track-shelf-sid="2" data-track-shelf-price="R$ 25,50"
                                  data-track-shelf-departament="Alimentos" data-track-shelf-brand="Test Brand name"
                                  data-track-shelf-category="Alimentos" data-track-shelf-inStock="available"
                                  data-idproduto="3">
          
                                  <div class="uni-shelf-image">
                                      <a title="Produto teste 3 - test product name"
                                          href="https://example.myvtex.com/produto-teste-003/p">
                                          <img
                                              src="https://example.vteximg.com.br/arquivos/ids/155398-292-292/ketchup-hellmanns-squeeze-380g_172061080_7891150027848E.jpg?v=637257031320500000"
                                              width="292" height="292" alt="ketchup-hellmanns-squeeze-380g_172061080_7891150027848E"
                                              id="" />
          
                                      </a>
                                  </div>
          
                                  <div class="uni-shelf-info">
                                      <a class="uni-shelf-brand"
                                          href="https://example.myvtex.com/produto-teste-003/p">Test Brand name</a>
                                      <a class="uni-shelf-name"
                                          href="https://example.myvtex.com/produto-teste-003/p">Produto teste 3 - test
                                          product name</a>
                                      <a class="uni-shelf-description"
                                          href="https://example.myvtex.com/produto-teste-003/p"></a>
                                  </div>
          
                                  <div class="uni-shelf-price">
                                      <p class="uni-shelf-price-best">
                                          <span class="uni-shelf-price-best-text">Por: </span>
                                          <span class="uni-shelf-price-best-value">R$ 25,50</span>
                                      </p>
                                  </div>
          
                                  <input type="hidden" class="amount-max-in-cart" value="50"><input type="hidden"
                                      class="amount-max-in-cart-message"
                                      value="Desculpe, mas só é possível comprar até #quantidade# unidades do item #produto# no momento."><input
                                      type="text" size="3" class="amount-in-cart aic2" maxlength="3" id="amount-in-cart2"
                                      value="1">
                                  <div class="wrapper-buy-button-asynchronous bba3"><input type="hidden"
                                          value="Produto incluído no carrinho"
                                          class="buy-button-asynchronous-product-message-success"><input type="hidden"
                                          value="Produto não incluído no carrinho"
                                          class="buy-button-asynchronous-product-message-fail"><input type="hidden" value="2"
                                          class="buy-button-asynchronous-product-id"><input type="hidden" value="2"
                                          class="buy-button-asynchronous-defaultsku-id"><input type="hidden"
                                          value="/../no-cache/CarrinhoAdd.aspx?idSku=[idSku]&quantidade=[quantidade]"
                                          class="buy-button-asynchronous-product-url-3"><span class="add"><a
                                              href="https://example.myvtex.com/checkout/cart/add?sku=2&qty=1&seller=1&sc=1&price=2550&cv=225267d0bbf86e245846fe5fe740142d_&sc=1"
                                              class="btn-add-buy-button-asynchronous remove-href btn-not-clicked asynchronousBuyButton actionActivated vtexsm_activated .btover-active"
                                              style="cursor:pointer" id="idprod2">Comprar</a></span><input type="hidden"
                                          value="cart" class="buy-button-asynchronous-go-to-cart-2" />
                                      <div class="buy-button-asynchronous message-user3"></div>
                                  </div>
          
                                  <a href="#" class="uni-shelf-login">Cadastre-se para comprar</a>
                              </div>
                          </li>
                          <li id="helperComplement_3" style="display:none" class="helperComplement"></li>
                          <li layout="ebaf53ee-8071-4b91-8337-c9f20a5d8c16" class="alimentos-|-unilever-store">
          
                              <div class="uni-shelf-product" data-track-shelf="item" data-track-shelf-name="Produto teste 2"
                                  data-track-shelf-pid="2" data-track-shelf-sid="3" data-track-shelf-price="R$ 99,90"
                                  data-track-shelf-departament="Alimentos" data-track-shelf-brand="Test Brand name"
                                  data-track-shelf-category="Alimentos" data-track-shelf-inStock="available"
                                  data-idproduto="2">
          
                                  <div class="uni-shelf-image">
                                      <a title="Produto teste 2" href="https://example.myvtex.com/produto-teste-002/p">
                                          <img
                                              src="https://example.vteximg.com.br/arquivos/ids/155399-292-292/limpador-de-piso-desinfetante-omo-lavanda-900ml_172062220_7891150058347E.jpg?v=637257032204800000"
                                              width="292" height="292" alt="Limpador" id="" />
          
                                      </a>
                                  </div>
          
                                  <div class="uni-shelf-info">
                                      <a class="uni-shelf-brand"
                                          href="https://example.myvtex.com/produto-teste-002/p">Test Brand name</a>
                                      <a class="uni-shelf-name"
                                          href="https://example.myvtex.com/produto-teste-002/p">Produto teste 2</a>
                                      <a class="uni-shelf-description"
                                          href="https://example.myvtex.com/produto-teste-002/p"></a>
                                  </div>
          
                                  <div class="uni-shelf-price">
                                      <p class="uni-shelf-price-best">
                                          <span class="uni-shelf-price-best-text">Por: </span>
                                          <span class="uni-shelf-price-best-value">R$ 99,90</span>
                                      </p>
                                  </div>
          
                                  <input type="hidden" class="amount-max-in-cart" value="50"><input type="hidden"
                                      class="amount-max-in-cart-message"
                                      value="Desculpe, mas só é possível comprar até #quantidade# unidades do item #produto# no momento."><input
                                      type="text" size="3" class="amount-in-cart aic3" maxlength="3" id="amount-in-cart3"
                                      value="1">
                                  <div class="wrapper-buy-button-asynchronous bba2"><input type="hidden"
                                          value="Produto incluído no carrinho"
                                          class="buy-button-asynchronous-product-message-success"><input type="hidden"
                                          value="Produto não incluído no carrinho"
                                          class="buy-button-asynchronous-product-message-fail"><input type="hidden" value="3"
                                          class="buy-button-asynchronous-product-id"><input type="hidden" value="3"
                                          class="buy-button-asynchronous-defaultsku-id"><input type="hidden"
                                          value="/../no-cache/CarrinhoAdd.aspx?idSku=[idSku]&quantidade=[quantidade]"
                                          class="buy-button-asynchronous-product-url-2"><span class="add"><a
                                              href="https://example.myvtex.com/checkout/cart/add?sku=3&qty=1&seller=1&sc=1&price=9990&cv=0a8cc96fc228f13979ffe77eebf0815a_&sc=1"
                                              class="btn-add-buy-button-asynchronous remove-href btn-not-clicked asynchronousBuyButton actionActivated vtexsm_activated .btover-active"
                                              style="cursor:pointer" id="idprod3">Comprar</a></span><input type="hidden"
                                          value="cart" class="buy-button-asynchronous-go-to-cart-3" />
                                      <div class="buy-button-asynchronous message-user2"></div>
                                  </div>
          
                                  <a href="#" class="uni-shelf-login">Cadastre-se para comprar</a>
                              </div>
                          </li>
                          <li id="helperComplement_2" style="display:none" class="helperComplement"></li>
                          <li layout="ebaf53ee-8071-4b91-8337-c9f20a5d8c16" class="alimentos-|-unilever-store last">
          
                              <div class="uni-shelf-product" data-track-shelf="item" data-track-shelf-name="Produto Teste"
                                  data-track-shelf-pid="1" data-track-shelf-sid="1" data-track-shelf-price="R$ 100,00"
                                  data-track-shelf-departament="Alimentos" data-track-shelf-brand="Test Brand name"
                                  data-track-shelf-category="Alimentos" data-track-shelf-inStock="available"
                                  data-idproduto="1">
          
                                  <div class="uni-shelf-image">
                                      <a title="Produto Teste" href="https://example.myvtex.com/produto-teste/p">
                                          <img
                                              src="https://example.vteximg.com.br/arquivos/ids/155397-292-292/desodorante-aerosol-rexona-antibacteriano---invisible-150ml_172062850_7506306244177E.jpg?v=637257028821200000"
                                              width="292" height="292" alt="Desodorante" id="" />
          
                                      </a>
                                  </div>
          
                                  <div class="uni-shelf-info">
                                      <a class="uni-shelf-brand" href="https://example.myvtex.com/produto-teste/p">Test
                                          Brand name</a>
                                      <a class="uni-shelf-name" href="https://example.myvtex.com/produto-teste/p">Produto
                                          Teste</a>
                                      <a class="uni-shelf-description"
                                          href="https://example.myvtex.com/produto-teste/p"></a>
                                  </div>
          
                                  <div class="uni-shelf-price">
                                      <p class="uni-shelf-price-best">
                                          <span class="uni-shelf-price-best-text">Por: </span>
                                          <span class="uni-shelf-price-best-value">R$ 100,00</span>
                                      </p>
                                  </div>
          
                                  <input type="hidden" class="amount-max-in-cart" value="50"><input type="hidden"
                                      class="amount-max-in-cart-message"
                                      value="Desculpe, mas só é possível comprar até #quantidade# unidades do item #produto# no momento."><input
                                      type="text" size="3" class="amount-in-cart aic1" maxlength="3" id="amount-in-cart1"
                                      value="1">
                                  <div class="wrapper-buy-button-asynchronous bba1"><input type="hidden"
                                          value="Produto incluído no carrinho"
                                          class="buy-button-asynchronous-product-message-success"><input type="hidden"
                                          value="Produto não incluído no carrinho"
                                          class="buy-button-asynchronous-product-message-fail"><input type="hidden" value="1"
                                          class="buy-button-asynchronous-product-id"><input type="hidden" value="1"
                                          class="buy-button-asynchronous-defaultsku-id"><input type="hidden"
                                          value="/../no-cache/CarrinhoAdd.aspx?idSku=[idSku]&quantidade=[quantidade]"
                                          class="buy-button-asynchronous-product-url-1"><span class="add"><a
                                              href="https://example.myvtex.com/checkout/cart/add?sku=1&qty=1&seller=1&sc=1&price=10000&cv=5554bae24d4045c8e81f5bbd9b8ad24b_&sc=1"
                                              class="btn-add-buy-button-asynchronous remove-href btn-not-clicked asynchronousBuyButton actionActivated vtexsm_activated .btover-active"
                                              style="cursor:pointer" id="idprod1">Comprar</a></span><input type="hidden"
                                          value="cart" class="buy-button-asynchronous-go-to-cart-1" />
                                      <div class="buy-button-asynchronous message-user1"></div>
                                  </div>
          
                                  <a href="#" class="uni-shelf-login">Cadastre-se para comprar</a>
                              </div>
                          </li>
                          <li id="helperComplement_1" style="display:none" class="helperComplement"></li>
                      </ul>
                  </div>
              </div>
              <div class="pager bottom" id="PagerBottom_39213654"></div>
          </div>
          <p class="searchResultsTime"><span class="resultado-busca-numero"><span class="label">Produtos
                      encontrados:</span> <span class="value">4</span></span><span class="resultado-busca-termo"> <span
                      class="label">Resultado da Pesquisa por:</span> <strong class="value"></strong></span><span
                  class="resultado-busca-tempo"> <span class="label">em</span> <span class="value">4 ms</span></span>
          </p>
          <div class="sub">
              <div class="resultado-busca-filtro">
                  <fieldset class="orderBy">
                      <label>Ordenar por:</label>
                      <select id="O"
                          onchange="window.location.href= '/test-category?PS=16&' + 'O=' + this.options[this.selectedIndex].value">
                          <option value="">Selecione</option>
                          <option value="OrderByPriceASC">Menor Preço</option>
                          <option value="OrderByPriceDESC">Maior Preço</option>
                          <option value="OrderByTopSaleDESC">Mais vendidos</option>
                          <option value="OrderByReviewRateDESC">Melhores avaliações</option>
                          <option value="OrderByNameASC">A - Z</option>
                          <option value="OrderByNameDESC">Z - A</option>
                          <option value="OrderByReleaseDateDESC">Data de lançamento</option>
                          <option value="OrderByBestDiscountDESC">Melhor Desconto</option>
                      </select>
                  </fieldset>
                  <fieldset class="filterBy">
                      Itens por página:
                      <select id="PS"
                          onchange="window.location.href= '/test-category?' + 'PS=' + this.options[this.selectedIndex].value">
                          <option selected="selected" value="16">16</option>
                          <option value="32">32</option>
                          <option value="48">48</option>
                          <option value="64">64</option>
                      </select>
                  </fieldset>
                  <p class="compare">Produtos selecionados para comparar: <strong><span class="compare-selection-count"
                              id="NumeroSuperior">0</span></strong><a title="Comparar" class="btn-comparar" href="#">Comparar</a></p>
              </div>
          </div>
      </div>
`,
};
