module.exports = {
  name: 'orderList',
  title: '',
  description: '',
  example: '<vtex.cmc:orderList />',
  rendered: `
  <!-- viewPart -->
  <script type="text/javascript" src="//io.vtex.com.br/myorders-ui/1.7.7/script/ko-templates.js"></script>
  <link rel="stylesheet" href="//io.vtex.com.br/front-libs/bootstrap/2.3.2/css/bootstrap.min.css"/>
  <link rel="stylesheet" href="//io.vtex.com.br/myorders-ui/1.7.7/lib/select2/select2.css"/>
  <link rel="stylesheet" href="//io.vtex.com.br/front-libs/font-awesome/3.2.1/css/font-awesome.min.css"/>
  <link rel="stylesheet" href="//io.vtex.com.br/myorders-ui/1.7.7/style/style.css"/>
  
  <script src="//io.vtex.com.br/myorders-ui/1.7.7/script/init.js" type="text/javascript"></script>
  
  <!-- ko with: order -->
  <div class="myorders vtex-bootstrap" data-bind="template: template"></div>
  <!-- /ko -->
  
  <script type="text/javascript" src="//io.vtex.com.br/front-libs/front-i18n/0.4.1/vtex-i18n.min.js"></script>
  <script type="text/javascript" src="//io.vtex.com.br/front-libs/front-i18n/0.4.1/vtex-locale-selector.min.js"></script>
  <script src="//io.vtex.com.br/myorders-ui/1.7.7/script/lib-common.min.js"></script>
  <script src="//io.vtex.com.br/myorders-ui/1.7.7/script/order.min.js"></script>
  <script type="text/javascript" src="//io.vtex.com.br/myorders-ui/1.7.7/script/myorders.js"></script>
  <!-- endViewPart -->
`,
};
