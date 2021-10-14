module.exports = {
  name: 'scripts-header-home',
  description: 'Scripts do header padrão da plataforma',
  selector: 'meta',
  selector_index: ':last',
  type_insert: 'insertAfter',
  page_type: ['home', 'content', 'login'],
  html: `
  <title>Title da loja</title>
      <script type="text/javascript" language="javascript">
          var jscheckoutUrl = '{{STORE_URL_VTEX}}checkout/#/cart';
          var jscheckoutAddUrl = '{{STORE_URL_VTEX}}checkout/cart/add';
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
              isOrder: "0",
              isCheck: "0",
              isCart: "0",
              actionType: "",
              actionValue: "",
              login: "{{SCOPE_ID}}",
              url: "{{STORE_DOMAIN_VTEX}}",
              transurl: "{{STORE_DOMAIN_VTEX}}"
          };
      </script> 
      <script language="javascript" src="https://io.vtex.com.br/front-libs/jquery/1.8.3/jquery-1.8.3.min.js?v=1.4.1512.2201" type="text/javascript"></script>
      <script language="javascript" src="https://{{STORE_ID}}.vteximg.com.br/scripts/swfobject.js?v=1.4.1512.2201" type="text/javascript"></script>
      <script language="javascript" src="https://{{STORE_ID}}.vteximg.com.br/scripts/vtex.ajax.wait.js?v=1.4.1512.2201" type="text/javascript"></script>
      <script language="javascript" src="https://{{STORE_ID}}.vteximg.com.br/scripts/vtex.common.js?v=1.4.1512.2201" type="text/javascript"></script>
      <script language="javascript" src="https://vtex.vtexassets.com/_v/public/assets/v1/npm/@vtex/render-extension-loader@0.1.6/lib/render-extension-loader.js?v=1.4.1512.2201" type="text/javascript"></script>
      <script language="javascript" src="https://io.vtex.com.br/rc/rc.js?v=1.4.1512.2201"  type="text/javascript"></script>
      <script language="javascript" src="https://{{STORE_ID}}.vteximg.com.br/scripts/vtex.tagmanager.helper.js?v=1.4.1512.2201"  type="text/javascript">
      </script>
      <script language="javascript" src="https://io.vtex.com.br/portal-ui/1.14.3/scripts/vtex-events-all.min.js?v=1.4.1512.2201"  type="text/javascript">
      </script>
      <script language="javascript" src="https://io.vtex.com.br/portal-ui/1.14.3/scripts/vtex-analytics.js?v=1.4.1512.2201" type="text/javascript"></script>
      <script language="javascript" src="https://io.vtex.com.br/front-libs/front-i18n/0.7.2/vtex-i18n.min.js?v=1.4.1512.2201" type="text/javascript"></script>
      <script language="javascript" src="https://io.vtex.com.br/front-libs/front-utils/3.0.8/underscore-extensions.js?v=1.4.1512.2201" type="text/javascript"></script>
      <script language="javascript" src="https://{{STORE_ID}}.vteximg.com.br/scripts/currency-format.min.js?v=1.4.1512.2201" type="text/javascript"></script>
      <script language="javascript"
           src="https://io.vtex.com.br/front-libs/dustjs-linkedin/2.3.5/dust-core-2.3.5.min.js?v=1.4.1512.2201" type="text/javascript"></script>
      <script language="javascript" src="https://io.vtex.com.br/vtex.js/2.11.2/vtex.min.js?v=1.4.1512.2201" type="text/javascript"></script>
      <script language="javascript" src="https://{{STORE_ID}}.vteximg.com.br/scripts/jquery.ui.core.js?v=1.4.1512.2201" type="text/javascript"></script>
      <script language="javascript" src="https://{{STORE_ID}}.vteximg.com.br/scripts/autocomplete/jquery.ui.widget.js?v=1.4.1512.2201" type="text/javascript"></script>
      <script language="javascript" src="https://{{STORE_ID}}.vteximg.com.br/scripts/autocomplete/jquery.ui.position.js?v=1.4.1512.2201" type="text/javascript"></script>
      <script language="javascript" src="https://{{STORE_ID}}.vteximg.com.br/scripts/autocomplete/jquery.ui.autocomplete.js?v=1.4.1512.2201" type="text/javascript"></script>
      <script language="javascript" src="https://{{STORE_ID}}.vteximg.com.br/scripts/vtex.commerce.search.js?v=1.4.1512.2201" type="text/javascript"></script>
      <script language="javascript" src="https://{{STORE_ID}}.vteximg.com.br/scripts/vtex.viewpart.fulltextsearchbox.js?v=1.4.1512.2201" type="text/javascript"></script>
      <script language="javascript" src="https://io.vtex.com.br/portal-plugins/2.9.13/js/portal-minicart-with-template.min.js?v=1.4.1512.2201" type="text/javascript"></script>
      <script language="javascript" src="https://io.vtex.com.br/portal-plugins/2.9.13/js/portal-template-as-modal.min.js?v=1.4.1512.2201" type="text/javascript"></script>
      <script language="javascript" src="https://io.vtex.com.br/portal-plugins/2.9.13/js/portal-sku-selector-with-template.min.js?v=1.4.1512.2201" type="text/javascript"></script>
      <script language="javascript" src="https://{{STORE_ID}}.vteximg.com.br/scripts/vtex.cookie.js?v=1.4.1512.2201" type="text/javascript"></script>
      <script language="javascript" src="https://{{STORE_ID}}.vteximg.com.br/scripts/jquery.pager.js?v=1.4.1512.2201" type="text/javascript"></script>
          
      <script language="javascript">var ___scriptPathTransac = '';</script><script language="javascript">var ___scriptPath = '';</script>
      
      
      <!-- Start - WebAnalyticsViewPart -->
      <script> var defaultUtmFromFolder = '';</script>
      <!-- CommerceContext.Current.VirtualFolder.Name: / -->`,
};
