module.exports = {
  name: 'ajax-content-loader',
  description: 'Bloco de HTML para apresentar ajaxLoader',
  selector: 'body',
  selector_index: '0',
  type_insert: 'prepend',
  page_type: ['brand', 'category', 'home', 'departament', 'search', 'productlist', 'product'],
  html: `
  <div class="ajax-content-loader" rel="/no-cache/callcenter/disclaimer"></div>`,
};
