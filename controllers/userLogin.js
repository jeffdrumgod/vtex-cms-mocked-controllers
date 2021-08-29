module.exports = {
  name: 'userLogin',
  title: '',
  description: '',
  example: '<vtex.cmc:userLogin />',
  rendered: `
  <script>
    vtexidClient = function (window, document){
        $(document).ready(function(){

            var _obj = {};
            var _qs = vtexid.getQSParams(window.location.href);

            _obj.userEmail = _qs.email || null;
            _obj.flow = _qs.flow || null;
            _obj.canClose = false;
            _obj.scope = 'e9ac9832-8bf4-4d87-9ce4-9c889d56baea';
            _obj.scopeName = '{{STORE_ID}}';
            _obj.locale = 'pt-BR';

        // VERIFICA SE EXISTE URL DE CALLBACK
        _obj.returnUrl = window.location.href;
        
        vtexid.start(_obj);
    });
    }(window, document);
</script>
`,
};
