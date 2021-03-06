module.exports = {
  name: 'scripts-header-account',
  description: 'Scripts do header padrão da plataforma - página account',
  selector: 'meta',
  selector_index: ':last',
  type_insert: 'insertAfter',
  page_type: ['account', 'orders'],
  html: `
    <title>Title da loja</title>
    <script type="text/javascript" language="javascript">
        var jscheckoutUrl = '//{{STORE_ID}}.vtexcommercestable.com.br/checkout/#/cart';
        var jscheckoutAddUrl = '//{{STORE_ID}}.vtexcommercestable.com.br/checkout/cart/add';
        var jscheckoutGiftListId = '';
        var jsnomeSite = '{{STORE_ID}}';
        var jsnomeLoja = '{{STORE_ID}}';
        var jssalesChannel = '1';
        var default{{STORE_ID}}Currency = 'R$';
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
    var ___scriptPath = '';
    </script>
    <script type="text/javascript" language="javascript">
        vtxctx = {
            searchTerm: "",
            isOrder: "0",
            isCheck: "0",
            isCart: "0",
            actionType: "",
            actionValue: "",
            login: "4F287440-9855-458A-959C-074E6564136E",
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
    <script language="javascript" src="//io.vtex.com.br/portal-ui/1.14.3/scripts/vtex-events-all.min.js?v=1.4.865.1518"  type="text/javascript"></script>
    <script language="javascript" src="//io.vtex.com.br/portal-ui/1.14.3/scripts/vtex-analytics.js?v=1.4.865.1518"  type="text/javascript"></script>
    <script language="javascript" src="//io.vtex.com.br/vtex.js/2.8.0/vtex.min.js?v=1.4.865.1518"  type="text/javascript"></script>
    <script language="javascript" src="//io.vtex.com.br/portal-plugins/2.9.13/js/portal-minicart-with-template.min.js?v=1.4.710.1275"  type="text/javascript"></script>
    <script language="javascript" src="//{{STORE_ID}}.vteximg.com.br/Scripts/jquery.ui.core.js?v=1.4.710.1275"  type="text/javascript"></script>
    <script language="javascript" src="//{{STORE_ID}}.vteximg.com.br/Scripts/autocomplete/jquery.ui.widget.js?v=1.4.710.1275"  type="text/javascript"></script>
    <script language="javascript" src="//{{STORE_ID}}.vteximg.com.br/Scripts/autocomplete/jquery.ui.position.js?v=1.4.710.1275"  type="text/javascript"></script>
    <script language="javascript" src="//{{STORE_ID}}.vteximg.com.br/Scripts/autocomplete/jquery.ui.autocomplete.js?v=1.4.710.1275"  type="text/javascript"></script>
    <script language="javascript" src="//{{STORE_ID}}.vteximg.com.br/Scripts/vtex.commerce.search.js?v=1.4.710.1275"  type="text/javascript"></script>
    <script language="javascript" src="//{{STORE_ID}}.vteximg.com.br/Scripts/vtex.viewPart.fullTextSearchBox.js?v=1.4.710.1275"  type="text/javascript"></script>
    <script language="javascript" src="//{{STORE_ID}}.vteximg.com.br/Scripts/vtex.viewPart.AccountAddress.js?v=1.4.710.1275"  type="text/javascript"></script>
    <script language="javascript" src="//{{STORE_ID}}.vteximg.com.br/Scripts/vtex.viewPart.AccountUserProfile.js?v=1.4.710.1275"  type="text/javascript"></script>
    <script language="javascript" src="//{{STORE_ID}}.vteximg.com.br/Scripts/jquery.maskedinput-1.2.2.js?v=1.4.710.1275"  type="text/javascript"></script>
    <script language="javascript" src="//{{STORE_ID}}.vteximg.com.br/Scripts/vtex.viewPart.newsletter.js?v=1.4.710.1275"  type="text/javascript"></script>
    
  `,
};
