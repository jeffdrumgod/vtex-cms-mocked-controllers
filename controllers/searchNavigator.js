module.exports = {
  name: 'searchNavigator',
  title: '',
  description: '',
  example: '<vtex.cmc:searchNavigator />',
  rendered: `
  <!-- START // Script quanto em página de resultado de busca sem filtro por departamento -->
<script type="text/javascript" language="javascript">
    $(document).ready(function() {
        partialSearchUrl = '/busca?map=c%2cft&';
    });
</script>
<!-- END // Script quanto em página de resultado de busca sem filtro por departamento -->
<div id="ctl00_Conteudo_ctl02_divSideBar" class="navigation">
    <div id="ctl00_Conteudo_ctl02_divSideBarUnica1" class="menu-departamento">
      <span class="rt"></span>
      <span class="rb"></span>
      <!-- START // Menu quanto em busca sem filtro por departamento -->
      <h3 class="sapatos"><span></span><a href="{{STORE_URL_VTEX}}sapatos">Sapatos</a></h3>
      <ul class="sapatos">
          <li><a href="{{STORE_URL_VTEX}}sapatos/scarpins">Scarpins</a></li>
          <li><a href="{{STORE_URL_VTEX}}sapatos/peep-toes">Peep Toes</a></li>
          <li><a href="{{STORE_URL_VTEX}}sapatos/sandalias">Sandálias</a></li>
          <li><a href="{{STORE_URL_VTEX}}sapatos/botas">Botas</a></li>
      </ul>
      <h3 class="roupas even"><span></span><a href="{{STORE_URL_VTEX}}roupas">Roupas</a></h3>
      <ul class="roupas even">
          <li><a href="{{STORE_URL_VTEX}}roupas/blusas">Blusas</a></li>
          <li><a href="{{STORE_URL_VTEX}}roupas/calcas">Calças</a></li>
          <li><a href="{{STORE_URL_VTEX}}roupas/camisas">Camisas</a></li>
          <li><a href="{{STORE_URL_VTEX}}roupas/casacos">Casacos</a></li>
          <li><a href="{{STORE_URL_VTEX}}roupas/jaquetas">Jaquetas</a></li>
          <li><a href="{{STORE_URL_VTEX}}roupas/saias">Saias</a></li>
          <li><a href="{{STORE_URL_VTEX}}roupas/shorts">Shorts</a></li>
          <li><a href="{{STORE_URL_VTEX}}roupas/macacao">Macacão</a></li>
          <li><a href="{{STORE_URL_VTEX}}roupas/vestidos">Vestidos</a></li>
          <li><a href="{{STORE_URL_VTEX}}roupas/blazer">Blazer</a></li>
          <li><a href="{{STORE_URL_VTEX}}roupas/jeans">Jeans</a></li>
          <li><a href="{{STORE_URL_VTEX}}roupas/tricot">Tricot</a></li>
          <li><a href="{{STORE_URL_VTEX}}roupas/body">Body</a></li>
          <li><a href="{{STORE_URL_VTEX}}roupas/cropped">Cropped</a></li>
      </ul>
      <!-- END // Menu quanto em busca sem filtro por departamento -->
      <!-- START // Menu quanto em busca contendo lista de categorias e filtros -->
      <div>
        <div class="menu-navegue">
          <a title="Navegue" class="search-navigator-tab tab-navegue-ativo" href="#">Navegar</a>
          <a title="Refinar Resultado" class="search-navigator-tab tab-refinar" href="#">Refinar Resultado</a>
        </div>
        <div class="search-multiple-navigator" style="display: none;">
          <h3 class="panelas">
            <span></span>
            <a href="{{STORE_URL_VTEX}}panelas" title="Panelas">Panelas</a>
          </h3>
          <h4 class="panelas">
            <span></span>
            <a href="{{STORE_URL_VTEX}}panelas" title="Panelas">Panelas</a>
          </h4>
          <a title="Refinar Resultado" class="bt-refinar search-filter-button even" href="#">Refinar Resultado</a>
          <fieldset class="refino-marca even">
            <h5 class="  even">Marca</h5>
            <div class="">
              <label>
                <input rel="fq=B:2000002" class="multi-search-checkbox" type="checkbox" name="2000002" value="2000002" />BALLARINI (1) </label>
              <label>
                <input rel="fq=B:2000001" class="multi-search-checkbox" type="checkbox" name="2000001" value="2000001" />STAUB (1) </label>
              <label>
                <input rel="fq=B:2000000" class="multi-search-checkbox" type="checkbox" name="2000000" value="2000000" />ZWILLING (5) </label>
            </div>
          </fieldset>
          <fieldset class="refino Informações de Produto">
            <h5 class="  Informações de Produto">Material</h5>
            <div class="">
              <label>
                <input rel="fq=specificationFilter_18:Alum%c3%adnio" class="multi-search-checkbox" type="checkbox" name="Alum%c3%adnio" value="Alum&#237;nio" />Alum&#237;nio (3) </label>
              <label>
                <input rel="fq=specificationFilter_18:Ferro+fundido" class="multi-search-checkbox" type="checkbox" name="Ferro+fundido" value="Ferro fundido" />Ferro fundido (2) </label>
              <label>
                <input rel="fq=specificationFilter_18:Cer%c3%a2mica" class="multi-search-checkbox" type="checkbox" name="Cer%c3%a2mica" value="Cer&#226;mica" />Cer&#226;mica (1) </label>
              <label>
                <input rel="fq=specificationFilter_18:A%c3%a7o+inoxid%c3%a1vel" class="multi-search-checkbox" type="checkbox" name="A%c3%a7o+inoxid%c3%a1vel" value="A&#231;o inoxid&#225;vel" />A&#231;o inoxid&#225;vel (1) </label>
            </div>
          </fieldset>
          <fieldset class="refino even Informações de Produto">
            <h5 class="  even Informações de Produto">Marca</h5>
            <div class="">
              <label>
                <input rel="fq=specificationFilter_19:ZWILLING" class="multi-search-checkbox" type="checkbox" name="ZWILLING" value="ZWILLING" />ZWILLING (4) </label>
              <label>
                <input rel="fq=specificationFilter_19:STAUB" class="multi-search-checkbox" type="checkbox" name="STAUB" value="STAUB" />STAUB (1) </label>
              <label>
                <input rel="fq=specificationFilter_19:BALLARINI" class="multi-search-checkbox" type="checkbox" name="BALLARINI" value="BALLARINI" />BALLARINI (2) </label>
            </div>
          </fieldset>
          <fieldset class="refino Informações de Produto">
            <h5 class="  Informações de Produto">Cor</h5>
            <div class="">
              <label>
                <input rel="fq=specificationFilter_20:Preto" class="multi-search-checkbox" type="checkbox" name="Preto" value="Preto" />Preto (3) </label>
              <label>
                <input rel="fq=specificationFilter_20:Vermelho+cereja" class="multi-search-checkbox" type="checkbox" name="Vermelho+cereja" value="Vermelho cereja" />Vermelho cereja (1) </label>
            </div>
          </fieldset>
          <fieldset class="refino even Informações de Produto">
            <h5 class="  even Informações de Produto">Tamanho</h5>
            <div class="">
              <label>
                <input rel="fq=specificationFilter_21:20+cm" class="multi-search-checkbox" type="checkbox" name="20+cm" value="20 cm" />20 cm (1) </label>
              <label>
                <input rel="fq=specificationFilter_21:24+cm" class="multi-search-checkbox" type="checkbox" name="24+cm" value="24 cm" />24 cm (1) </label>
              <label>
                <input rel="fq=specificationFilter_21:30+cm" class="multi-search-checkbox" type="checkbox" name="30+cm" value="30 cm" />30 cm (1) </label>
            </div>
          </fieldset>
        </div>
        <div class="search-single-navigator" style="display:block">
          <h3 class="panelas">
            <span></span>
            <a href="{{STORE_URL_VTEX}}panelas" title="Panelas">Panelas</a>
          </h3>
          <h4 class="panelas even">
            <a href="{{STORE_URL_VTEX}}panelas/cacarolas/teste?PS=12" title="Caçarolas">Caçarolas (4)</a>
          </h4>
          <ul class="cacarolas even"></ul>
          <h4 class="panelas even">
            <a href="{{STORE_URL_VTEX}}panelas/conjuntos-de-panelas/teste?PS=12" title="Conjuntos de Panelas">Conjuntos de Panelas (1)</a>
          </h4>
          <ul class="conjuntos-de-panelas even"></ul>
          <h4 class="panelas even">
            <a href="{{STORE_URL_VTEX}}panelas/frigideiras/teste?PS=12" title="Frigideiras">Frigideiras (1)</a>
          </h4>
          <ul class="frigideiras even"></ul>
          <h4 class="panelas even">
            <a href="{{STORE_URL_VTEX}}panelas/grelhas/teste?PS=12" title="Grelhas">Grelhas (1)</a>
          </h4>
          <ul class="grelhas even"></ul>
          <h5 class="Hide HideMarca">Marca</h5>
          <ul class="Marca ">
            <li>
              <a href="{{STORE_URL_VTEX}}panelas/ballarini/teste?PS=12" title="BALLARINI">BALLARINI (1)</a>
            </li>
            <li>
              <a href="{{STORE_URL_VTEX}}panelas/staub/teste?PS=12" title="STAUB">STAUB (1)</a>
            </li>
            <li class="last">
              <a href="{{STORE_URL_VTEX}}panelas/zwilling/teste?PS=12" title="ZWILLING">ZWILLING (5)</a>
            </li>
          </ul>
          <h5 class="Hide even Informações de Produto HideMaterial">Material</h5>
          <ul class="Material  even Informações de Produto">
            <li>
              <a href="{{STORE_URL_VTEX}}panelas/Alumínio/teste?PS=12&map=c,specificationFilter_18,ft" title="Alumínio">Alumínio (3)</a>
            </li>
            <li>
              <a href="{{STORE_URL_VTEX}}panelas/Ferro fundido/teste?PS=12&map=c,specificationFilter_18,ft" title="Ferro fundido">Ferro fundido (2)</a>
            </li>
            <li>
              <a href="{{STORE_URL_VTEX}}panelas/Cerâmica/teste?PS=12&map=c,specificationFilter_18,ft" title="Cerâmica">Cerâmica (1)</a>
            </li>
            <li class="last">
              <a href="{{STORE_URL_VTEX}}panelas/Aço inoxidável/teste?PS=12&map=c,specificationFilter_18,ft" title="Aço inoxidável">Aço inoxidável (1)</a>
            </li>
          </ul>
          <h5 class="Hide Informações de Produto HideMarca">Marca</h5>
          <ul class="Marca  Informações de Produto">
            <li>
              <a href="{{STORE_URL_VTEX}}panelas/ZWILLING/teste?PS=12&map=c,specificationFilter_19,ft" title="ZWILLING">ZWILLING (4)</a>
            </li>
            <li>
              <a href="{{STORE_URL_VTEX}}panelas/STAUB/teste?PS=12&map=c,specificationFilter_19,ft" title="STAUB">STAUB (1)</a>
            </li>
            <li class="last">
              <a href="{{STORE_URL_VTEX}}panelas/BALLARINI/teste?PS=12&map=c,specificationFilter_19,ft" title="BALLARINI">BALLARINI (2)</a>
            </li>
          </ul>
          <h5 class="Hide even Informações de Produto HideCor">Cor</h5>
          <ul class="Cor  even Informações de Produto">
            <li>
              <a href="{{STORE_URL_VTEX}}panelas/Preto/teste?PS=12&map=c,specificationFilter_20,ft" title="Preto">Preto (3)</a>
            </li>
            <li class="last">
              <a href="{{STORE_URL_VTEX}}panelas/Vermelho cereja/teste?PS=12&map=c,specificationFilter_20,ft" title="Vermelho cereja">Vermelho cereja (1)</a>
            </li>
          </ul>
          <h5 class="Hide Informações de Produto HideTamanho">Tamanho</h5>
          <ul class="Tamanho  Informações de Produto">
            <li>
              <a href="{{STORE_URL_VTEX}}panelas/20 cm/teste?PS=12&map=c,specificationFilter_21,ft" title="20 cm">20 cm (1)</a>
            </li>
            <li>
              <a href="{{STORE_URL_VTEX}}panelas/24 cm/teste?PS=12&map=c,specificationFilter_21,ft" title="24 cm">24 cm (1)</a>
            </li>
            <li class="last">
              <a href="{{STORE_URL_VTEX}}panelas/30 cm/teste?PS=12&map=c,specificationFilter_21,ft" title="30 cm">30 cm (1)</a>
            </li>
          </ul>
        </div>
      </div>
      <!-- END // Menu quanto em busca contendo lista de categorias e filtros -->
    </div>
  </div>
  <div class="urlLastSearch" style="display:none">{{STORE_URL_VTEX}}Panelas</div>
`,
};
