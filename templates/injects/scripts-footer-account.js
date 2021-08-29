module.exports = {
  name: 'scripts-footer-account',
  description: 'scripts complementares pra página account',
  selector: 'body',
  selector_index: '0',
  type_insert: 'append',
  page_type: ['orders', 'account'],
  html: `
  <script language="javascript" src="//{{STORE_ID}}.vteximg.com.br/Scripts/Track.js?v=1.4.710.1275"  type="text/javascript"></script>
      <script language="javascript" src="//{{STORE_ID}}.vteximg.com.br/Scripts/thickbox.js?v=1.4.710.1275"  type="text/javascript"></script>
      <script language="javascript" src="//{{STORE_ID}}.vteximg.com.br/Scripts/json2.js?v=1.4.710.1275"  type="text/javascript"></script>
      <script language="javascript" src="//{{STORE_ID}}.vteximg.com.br/Scripts/vtex.viewPart.CallCenterDisclaimer.js?v=1.4.710.1275"  type="text/javascript"></script>
      <script language="javascript" src="//{{STORE_ID}}.vteximg.com.br/Scripts/vtex.viewPart.ajaxLoader_V2.js?v=1.4.710.1275"  type="text/javascript"></script>
      <script language="javascript" src="//{{STORE_ID}}.vteximg.com.br/Scripts/social/vtex-view-part.js?v=1.4.710.1275"  type="text/javascript"></script>`,
};
