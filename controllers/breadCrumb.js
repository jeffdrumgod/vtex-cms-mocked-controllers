module.exports = {
  name: 'breadCrumb',
  title: '',
  description: '',
  example: '<vtex.cmc:breadCrumb />',
  rendered: `
<div class="bread-crumb" xmlns:v="http://rdf.data-vocabulary.org/#">
  <ul>
      <li typeof="v:Breadcrumb"><a href="/" rel="v:url" property="v:title">Loja</a></li>
      <li typeof="v:Breadcrumb"><a href="/roupas" rel="v:url" property="v:title">Roupas</a></li>
      <li class="last" typeof="v:Breadcrumb"><a href="/roupas/shorts" rel="v:url" property="v:title">Shorts</a></li>
  </ul>
</div>
`,
};
