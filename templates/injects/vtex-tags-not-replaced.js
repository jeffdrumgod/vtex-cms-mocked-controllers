module.exports = {
  name: 'vtex-tags-not-replaced',
  description: 'CSS para exibir tags da vtex que não foram substituídas pelo sistema',
  selector: 'body',
  selector_index: ':last',
  type_insert: 'append',
  page_type: [
    'account',
    'brand',
    'category',
    'content',
    'departament',
    'home',
    'login',
    'orders',
    'search',
    'productlist',
    'product',
  ],
  html: `
  <style>
      /* 
      Vtex Template Parser
      - vtex-tags-not-replaced 
      - CSS para exibir tags da vtex que não foram substituídas pelo sistema
      */
      script[type="vtex"]{
      display: block !important;
      min-width: 100px;
      min-height: 100px;
      border: 1px solid yellow;
      background: red;
      text-align: center;
      color: #FFF
      }
      script[type="vtex"]:before {
      content: "[tagname=" attr(tagname) "]" " [id=" attr(id) "]"
      }
      </style>
`,
};
