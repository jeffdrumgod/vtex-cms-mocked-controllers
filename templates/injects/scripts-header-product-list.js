module.exports = {
  name: 'scripts-header-product-list',
  description: 'Scripts do header padrão da plataforma - listagem de produtos',
  selector: 'meta',
  selector_index: '0',
  type_insert: 'insertAfter',
  page_type: ['productlist'],
  html: `
  <title>Listagem - Title da loja</title>
      <script type="text/javascript" language="javascript">
      var ___scriptPath = '';
      </script>
      <script language="javascript">
          var ___scriptPathTransac = '';
      </script>
      <title>Cha Chá Boutique | Compre Roupas Femininas Online</title>
      <script type="text/javascript" language="javascript">
          var jscheckoutUrl = '//{{STORE_ID}}.vtexcommercestable.com.br/checkout/#/cart';
          var jscheckoutAddUrl = '//{{STORE_ID}}.vtexcommercestable.com.br/checkout/cart/add';
          var jscheckoutGiftListId = '';
          var jsnomeSite = '{{STORE_ID}}';
          var jsnomeLoja = '{{STORE_ID}}';
          var jssalesChannel = '1';
          var defaultStoreCurrency = 'R$';
          var localeInfo = {
              "CountryCode": "BRA",
              "CultureCode": "pt-BR",
              "CurrencyLocale": {
                  "RegionDisplayName": "Brazil",
                  "RegionName": "BR",
                  "RegionNativeName": "Brasil",
                  "TwoLetterIsoRegionName": "BR",
                  "CurrencyEnglishName": "Real",
                  "CurrencyNativeName": "Real",
                  "CurrencySymbol": "R$",
                  "ISOCurrencySymbol": "BRL",
                  "Locale": 1046,
                  "Format": {
                      "CurrencyDecimalDigits": 2,
                      "CurrencyDecimalSeparator": ",",
                      "CurrencyGroupSeparator": ".",
                      "CurrencyGroupSize": 3,
                      "StartsWithCurrencySymbol": true
                  },
                  "FlagUrl": "//www.geonames.org/flags/x/br.gif"
              }
          };
      </script>
      <script type="text/javascript" language="javascript">
          vtxctx = {
              searchTerm: "",
              categoryId: "10",
              categoryName: "Roupas",
              departmentyId: "10",
              departmentName: "Roupas",
              isOrder: "0",
              isCheck: "0",
              isCart: "0",
              actionType: "",
              actionValue: "",
              login: "",
              url: "{{STORE_ID}}.vtexcommercestable.com.br",
              transurl: "{{STORE_ID}}.vtexcommercestable.com.br"
          };
      </script>
      
      <script language="javascript" src="//io.vtex.com.br/front-libs/jquery/1.8.3/jquery-1.8.3.min.js?v=1.4.710.1275"  type="text/javascript"></script>
      <script language="javascript" src="//ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js?v=1.4.710.1275"  type="text/javascript"></script>
      <script language="javascript" src="//{{STORE_ID}}.vteximg.com.br/Scripts/vtex.ajax.wait.js?v=1.4.710.1275"  type="text/javascript"></script>
      <script language="javascript" src="//{{STORE_ID}}.vteximg.com.br/Scripts/vtex.common.js?v=1.4.710.1275"  type="text/javascript"></script>
      <script language="javascript" src="//io.vtex.com.br/front-libs/front-i18n/0.4.1/vtex-i18n.min.js?v=1.4.710.1275"  type="text/javascript"></script>
      <script language="javascript" src="//io.vtex.com.br/front-libs/front-utils/1.0.1/vtex-utils.min.js?v=1.4.710.1275"  type="text/javascript"></script>
      <script language="javascript" src="//io.vtex.com.br/front-libs/dustjs-linkedin/2.3.5/dust-core-2.3.5.min.js?v=1.4.710.1275"  type="text/javascript"></script>
      <script language="javascript" src="//dmx56ht1p4edz.cloudfront.net/rc.js?an={{STORE_ID}}?v=1.4.710.1275"  type="text/javascript"></script>
      <script language="javascript" src="//{{STORE_ID}}.vteximg.com.br/Scripts/vtex.tagmanager.helper.js?v=1.4.710.1275"  type="text/javascript"></script>
      <script language="javascript" src="//io.vtex.com.br/portal-ui/1.10.10/scripts/vtex-events-all.min.js?v=1.4.865.1518"  type="text/javascript"></script>
      <script language="javascript" src="//io.vtex.com.br/portal-ui/1.10.10/scripts/vtex-analytics.js?v=1.4.865.1518"  type="text/javascript"></script>
      <script language="javascript" src="//io.vtex.com.br/vtex.js/2.8.0/vtex.min.js?v=1.4.865.1518"  type="text/javascript"></script>
      <script language="javascript" src="//{{STORE_ID}}.vteximg.com.br/Scripts/jquery.ui.core.js?v=1.4.710.1275"  type="text/javascript"></script>
      <script language="javascript" src="//{{STORE_ID}}.vteximg.com.br/Scripts/autocomplete/jquery.ui.widget.js?v=1.4.710.1275"  type="text/javascript"></script>
      <script language="javascript" src="//{{STORE_ID}}.vteximg.com.br/Scripts/autocomplete/jquery.ui.position.js?v=1.4.710.1275"  type="text/javascript"></script>
      <script language="javascript" src="//{{STORE_ID}}.vteximg.com.br/Scripts/autocomplete/jquery.ui.autocomplete.js?v=1.4.710.1275"  type="text/javascript"></script>
      <script language="javascript" src="//{{STORE_ID}}.vteximg.com.br/Scripts/vtex.commerce.search.js?v=1.4.710.1275"  type="text/javascript"></script>
      <script language="javascript" src="//{{STORE_ID}}.vteximg.com.br/Scripts/vtex.viewPart.fullTextSearchBox.js?v=1.4.710.1275"  type="text/javascript"></script>
      <script language="javascript" src="//io.vtex.com.br/portal-plugins/2.9.13/js/portal-minicart-with-template.min.js?v=1.4.710.1275"  type="text/javascript"></script>
      <script language="javascript" src="//io.vtex.com.br/portal-plugins/2.9.13/js/portal-template-as-modal.min.js?v=1.4.710.1275"  type="text/javascript"></script>
      <script language="javascript" src="//io.vtex.com.br/portal-plugins/2.9.13/js/portal-sku-selector-with-template.min.js?v=1.4.710.1275"  type="text/javascript"></script>
      <script language="javascript" src="//{{STORE_ID}}.vteximg.com.br/Scripts/vtex.cookie.js?v=1.4.710.1275"  type="text/javascript"></script>
      <script language="javascript" src="//{{STORE_ID}}.vteximg.com.br/Scripts/jquery.pager.js?v=1.4.710.1275"  type="text/javascript"></script>`,
};
