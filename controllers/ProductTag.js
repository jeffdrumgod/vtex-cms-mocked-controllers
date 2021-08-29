module.exports = {
  name: 'ProductTag',
  title: '',
  description: '',
  example: '<vtex.cmc:ProductTag/>',
  rendered: `
  <div class="product-tag">
      <div id="tags" class="tags-associadas">
      <h4>
      Tags associadas a esse produto pelos consumidores</h4><p>
      </p><p>O que são Tags? Tags são palavras-chaves associadas aos produtos pelos próprios consumidores. Ao clicar em uma Tag você poderá ver todos os produtos associados a ela.</p><p></p><div id="divBloco" class="wrapper user-included-tags">
      </div>
      <div class="tag-product-message-user"></div>
      <div id="divTags">
      <fieldset>
      <label>
      Adicione suas tags a esse produto</label><span id="lblTag" class="tagtext"><input type="text" class="fitext product-tag-name" autocomplete="off" maxlength="25"></span>
      <span class="add"><input type="button" value="Adicionar" title="Adicionar" class="bt btn-add-product-tag"></span>
      <input type="hidden" value="1" class="product-tag-product-id"><div id="progress" style="display:none;">
      <ul class="links">
      <li class="more-tags"><a id="lnkTagsMaisPopulares" title="
      Veja as tags mais populares" class="bt" href="/Site/TagsMaisPopulares.aspx">Veja as tags mais populares</a></li></ul>
      <ul class="top">
      <li><a href="#aspnetForm" title="Topo">Topo</a></li>
      </ul>
      </div>
      <hr>
      </fieldset></div>
      </div>
      </div>
`,
};
