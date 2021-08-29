module.exports = {
  name: 'welcomeMessage',
  title: '',
  description: '',
  example: '',
  rendered: `
  <script>
    $.ajaxPrefilter(function(options) {
        if (!!options && !!options.url && options.url.indexOf('api/vtexid/pub/authentication/accesskey') > -1) {
            var date = new Date();
            date.setTime(date.getTime() + (90 * 24 * 60 * 60 * 1000));
            document.cookie = "logged=1; expires=" + date.toGMTString() + ";domain=" + window.location.hostname + ";path=/";
        }
    });
</script>


<script>
$(document).ready(function () {
    vtexid.setScope('e9ac9832-8bf4-4d87-9ce4-9c889d56baea');
    vtexid.setScopeName('{{STORE_ID}}');
    $('body').on('click', '#login', function () {
        vtexid.start(
                {
                    returnUrl: window.location.href,
                    userEmail: '',
                    locale: 'pt-BR',
                    forceReload: false
                });
    });
});
</script><div class="ajax-content-loader" rel="/no-cache/user/welcome"></div>
`,
};
