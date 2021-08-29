module.exports = {
  name: 'searchNavigator',
  title: '',
  description: '',
  example: '<vtex.cmc:searchNavigator />',
  rendered: `<script type="text/javascript" language="javascript">
  $(document).ready(function() {
      partialSearchUrl = '/busca?fq=C%3a%2f10%2f&PS=12&';
  });
</script>
<div class="navigation-tabs">
  <div class="menu-departamento">
      <span class="rt"></span><span class="rb"></span>
      <!-- START // Menu quanto em busca sem filtro por departamento -->
      <h3 class="sapatos"><span></span><a href="http://www.chachaboutique.com.br/sapatos">Sapatos</a></h3>
      <ul class="sapatos">
          <li><a href="http://www.chachaboutique.com.br/sapatos/scarpins">Scarpins</a></li>
          <li><a href="http://www.chachaboutique.com.br/sapatos/peep-toes">Peep Toes</a></li>
          <li><a href="http://www.chachaboutique.com.br/sapatos/sandalias">Sandálias</a></li>
          <li><a href="http://www.chachaboutique.com.br/sapatos/botas">Botas</a></li>
          <li class="lista-completa"><a href="http://www.chachaboutique.com.br/sapatos">Lista completa<span></span></a></li>
      </ul>
      <h3 class="roupas even"><span></span><a href="http://www.chachaboutique.com.br/roupas">Roupas</a></h3>
      <ul class="roupas even">
          <li><a href="http://www.chachaboutique.com.br/roupas/blusas">Blusas</a></li>
          <li><a href="http://www.chachaboutique.com.br/roupas/calcas">Calças</a></li>
          <li><a href="http://www.chachaboutique.com.br/roupas/camisas">Camisas</a></li>
          <li><a href="http://www.chachaboutique.com.br/roupas/casacos">Casacos</a></li>
          <li><a href="http://www.chachaboutique.com.br/roupas/jaquetas">Jaquetas</a></li>
          <li><a href="http://www.chachaboutique.com.br/roupas/saias">Saias</a></li>
          <li><a href="http://www.chachaboutique.com.br/roupas/shorts">Shorts</a></li>
          <li><a href="http://www.chachaboutique.com.br/roupas/macacao">Macacão</a></li>
          <li><a href="http://www.chachaboutique.com.br/roupas/vestidos">Vestidos</a></li>
          <li><a href="http://www.chachaboutique.com.br/roupas/blazer">Blazer</a></li>
          <li><a href="http://www.chachaboutique.com.br/roupas/jeans">Jeans</a></li>
          <li><a href="http://www.chachaboutique.com.br/roupas/tricot">Tricot</a></li>
          <li><a href="http://www.chachaboutique.com.br/roupas/body">Body</a></li>
          <li><a href="http://www.chachaboutique.com.br/roupas/cropped">Cropped</a></li>
          <li class="lista-completa"><a href="http://www.chachaboutique.com.br/roupas">Lista completa<span></span></a></li>
      </ul>
      <!-- END // Menu quanto em busca sem filtro por departamento -->
      <div>
          <div class="menu-navegue">
              <a title="Navegue" class="search-navigator-tab tab-navegue-ativo" href="#">Navegue</a><a title="Refinar Resultado" class="search-navigator-tab tab-refinar" href="#">Refinar Resultado</a>
          </div>
          <div class="search-multiple-navigator" style="display: none;">
              <h3 class="roupas"><span></span><a href="/roupas" title="Roupas">Roupas</a></h3>
              <h4 class="roupas"><span></span><a href="/roupas" title="Roupas">Roupas</a></h4>
              <a title="Refinar Resultado" class="bt-refinar search-filter-button even" href="#">Refinar Resultado</a>
              <fieldset class="refino even Características">
                  <h5 class=" even Características">Tamanho</h5>
                  <div class="">
                      <label>
                          <input rel="fq=specificationFilter_21:P" class="multi-search-checkbox" type="checkbox" name="P" value="P" />P (39)</label>
                          <label>
                              <input rel="fq=specificationFilter_21:M" class="multi-search-checkbox" type="checkbox" name="M" value="M" />M (38)</label>
                              <label>
                                  <input rel="fq=specificationFilter_21:G" class="multi-search-checkbox" type="checkbox" name="G" value="G" />G (37)</label>
                                  <label>
                                      <input rel="fq=specificationFilter_21:GG" class="multi-search-checkbox" type="checkbox" name="GG" value="GG" />GG (13)</label>
                                  </div>
                              </fieldset>
                          </div>
                          <div class="search-single-navigator" style="display:block">
                              <h3 class="roupas"><span></span><a href="/roupas" title="Roupas">Roupas</a></h3>
                              <h4 class="roupas even"><a href="/roupas/blusas?PS=12" title="Blusas">Blusas (27)</a></h4>
                              <ul class="blusas even">
                              </ul>
                              <h4 class="roupas even"><a href="/roupas/calcas?PS=12" title="Calças">Calças (9)</a></h4>
                              <ul class="calcas even">
                              </ul>
                              <h4 class="roupas even"><a href="/roupas/camisas?PS=12" title="Camisas">Camisas (6)</a></h4>
                              <ul class="camisas even">
                              </ul>
                              <h4 class="roupas even"><a href="/roupas/casacos?PS=12" title="Casacos">Casacos (3)</a></h4>
                              <ul class="casacos even">
                              </ul>
                              <h4 class="roupas even"><a href="/roupas/jaquetas?PS=12" title="Jaquetas">Jaquetas (2)</a></h4>
                              <ul class="jaquetas even">
                              </ul>
                              <h4 class="roupas even"><a href="/roupas/saias?PS=12" title="Saias">Saias (8)</a></h4>
                              <ul class="saias even">
                              </ul>
                              <h4 class="roupas even"><a href="/roupas/shorts?PS=12" title="Shorts">Shorts (6)</a></h4>
                              <ul class="shorts even">
                              </ul>
                              <h4 class="roupas even"><a href="/roupas/macacao?PS=12" title="Macacão">Macacão (1)</a></h4>
                              <ul class="macacao even">
                              </ul>
                              <h4 class="roupas even"><a href="/roupas/vestidos?PS=12" title="Vestidos">Vestidos (9)</a></h4>
                              <ul class="vestidos even">
                              </ul>
                              <h4 class="roupas even"><a href="/roupas/blazer?PS=12" title="Blazer">Blazer (2)</a></h4>
                              <ul class="blazer even">
                              </ul>
                              <h4 class="roupas even"><a href="/roupas/jeans?PS=12" title="Jeans">Jeans (3)</a></h4>
                              <ul class="jeans even">
                              </ul>
                              <h4 class="roupas even">Tricot</h4>
                              <ul class="tricot even">
                              </ul>
                              <h4 class="roupas even"><a href="/roupas/body?PS=12" title="Body">Body (3)</a></h4>
                              <ul class="body even">
                              </ul>
                              <h4 class="roupas even"><a href="/roupas/cropped?PS=12" title="Cropped">Cropped (5)</a></h4>
                              <ul class="cropped even">
                              </ul>
                              <h5 class="Hide Características HideTamanho">Tamanho</h5>
                              <ul class="Tamanho Características">
                                  <li><a href="/roupas/P?PS=12&map=c,specificationFilter_21" title="P">P (39)</a></li>
                                  <li><a href="/roupas/M?PS=12&map=c,specificationFilter_21" title="M">M (38)</a></li>
                                  <li><a href="/roupas/G?PS=12&map=c,specificationFilter_21" title="G">G (37)</a></li>
                                  <li class="last"><a href="/roupas/GG?PS=12&map=c,specificationFilter_21" title="GG">GG (13)</a></li>
                              </ul>
                              <h5 class="Hide Características HideTamanho">Cor</h5>
                              <ul class="Cor Características">
                                  <li><a href="/roupas/Preto?PS=12&map=c,specificationFilter_21" title="Preto">Preto (39)</a></li>
                                  <li><a href="/roupas/Verde?PS=12&map=c,specificationFilter_21" title="Verd">Verde (38)</a></li>
                                  <li><a href="/roupas/AmareloPS=12&map=c,specificationFilter_21" title="Amarelo">Amarelo (37)</a></li>
                                  <li class="last"><a href="/roupas/Vermelho?PS=12&map=c,specificationFilter_21" title="Vermelho">Vermelho (13)</a></li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="urlLastSearch" style="display:none">
                  /roupas
              </div>
`,
};
