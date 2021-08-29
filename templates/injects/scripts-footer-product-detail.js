module.exports = {
  name: 'scripts-footer-product-detail',
  description: 'scripts complementares pra página de produto',
  selector: 'body',
  selector_index: '0',
  type_insert: 'append',
  page_type: ['product'],
  html: `
    <script language="javascript" src="//{{STORE_ID}}.vteximg.com.br/Scripts/Track.js?v=1.4.710.1275"  type="text/javascript"></script>
      <script language="javascript" src="//{{STORE_ID}}.vteximg.com.br/Scripts/thickbox.js?v=1.4.710.1275"  type="text/javascript"></script>
      <script language="javascript" src="//{{STORE_ID}}.vteximg.com.br/Scripts/json2.js?v=1.4.710.1275"  type="text/javascript"></script>
      <script language="javascript" src="//{{STORE_ID}}.vteximg.com.br/Scripts/vtex.viewPart.CallCenterDisclaimer.js?v=1.4.710.1275"  type="text/javascript"></script>
      <script language="javascript" src="//{{STORE_ID}}.vteximg.com.br/Scripts/vtex.viewPart.ajaxLoader_V2.js?v=1.4.710.1275"  type="text/javascript"></script>
      <script language="javascript" src="//{{STORE_ID}}.vteximg.com.br/Scripts/vtex.jsevents.js?v=1.4.710.1275"  type="text/javascript"></script>
      <script language="javascript" src="//{{STORE_ID}}.vteximg.com.br/Scripts/vtex.viewPart.ImageControl3.js?v=1.4.710.1275"  type="text/javascript"></script>
      <script language="javascript" src="//{{STORE_ID}}.vteximg.com.br/Scripts/vtex.viewPart.skuReference.js?v=1.4.710.1275"  type="text/javascript"></script>
      <script language="javascript" src="//{{STORE_ID}}.vteximg.com.br/Scripts/vtex.viewPart.UserReview.js?v=1.4.710.1275"  type="text/javascript"></script>
      <script language="javascript" src="//{{STORE_ID}}.vteximg.com.br/Scripts/vtex.skuEvents.js?v=1.4.710.1275"  type="text/javascript"></script>
      <script language="javascript" src="//{{STORE_ID}}.vteximg.com.br/Scripts/vtex.skuEvents.skuDataFetcher.js?v=1.4.710.1275"  type="text/javascript"></script>
      <script language="javascript" src="//{{STORE_ID}}.vteximg.com.br/Scripts/vtex.viewPart.ImageControl3.js?v=1.4.710.1275"  type="text/javascript"></script>
      <script language="javascript" src="//{{STORE_ID}}.vteximg.com.br/Scripts/intersect.js?v=1.4.710.1275"  type="text/javascript"></script>
      <script language="javascript" src="//{{STORE_ID}}.vteximg.com.br/Scripts/vtex.viewPart.shippingValue.js?v=1.4.710.1275"  type="text/javascript"></script>
      <script language="javascript" src="//{{STORE_ID}}.vteximg.com.br/Scripts/vtex.commerce.batchbuy.js?v=1.4.710.1275"  type="text/javascript"></script>
      <script language="javascript" src="//{{STORE_ID}}.vteximg.com.br/Scripts/jquery.livequery.min.js?v=1.4.710.1275"  type="text/javascript"></script>
      <script language="javascript" src="//{{STORE_ID}}.vteximg.com.br/Scripts/prettyPhoto/js/jquery.prettyPhoto.js?v=1.4.710.1275"  type="text/javascript"></script>
      <script language="javascript" src="//{{STORE_ID}}.vteximg.com.br/Scripts/prettyPhoto/js/lean-prettyPhoto.js?v=1.4.710.1275"  type="text/javascript"></script>
      `,
};
