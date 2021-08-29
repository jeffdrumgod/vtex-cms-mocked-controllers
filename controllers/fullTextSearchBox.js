module.exports = {
  name: 'fullTextSearchBox',
  title: 'Controle de Busca',
  description: 'exibe a barra de busca na sua loja',
  example: '<vtex.cmc:fullTextSearchBox />',
  rendered: `
  
  <script type="text/javascript" language="javascript">
  /*<![CDATA[*/
  $(document).ready(function(){currentDept = '0'; enableFullTextSearchBox('ftBoxa757f322e29240248fba7e9bfe9dc98f', 'ftDepta757f322e29240248fba7e9bfe9dc98f', 'ftIdxa757f322e29240248fba7e9bfe9dc98f', 'ftBtna757f322e29240248fba7e9bfe9dc98f', '/SEARCHTERM','Digite Aqui' );});
   /*]]>*/
 </script>
 <fieldset class="busca">
     <legend>Buscar no site</legend>
     <label>Buscar</label>
         <select id="ftDepta757f322e29240248fba7e9bfe9dc98f">
             <option value="">Todo o site</option>
             <option value="1000001">Casa</option>
             <option value="1000017">Informática</option>
             <option value="1000033">Esporte &amp; Lazer</option>
             <option value="1000023">Telefonia</option>
             <option value="1000028">Games</option>
             <option value="1000038">Segurança</option>
             <option value="3">Departamento Exemplo 2</option>
             <option value="1">Departamento Exemplo 1</option>
         </select>
         <input type="hidden" id="ftIdxa757f322e29240248fba7e9bfe9dc98f" value="">
         <input id="ftBoxa757f322e29240248fba7e9bfe9dc98f" class="fulltext-search-box ui-autocomplete-input" type="text" size="20" accesskey="b" autocomplete="off" role="textbox" aria-autocomplete="list" aria-haspopup="true" value="Digite Aqui">
         <input id="ftBtna757f322e29240248fba7e9bfe9dc98f" type="button" value="Buscar" class="btn-buscar">
 </fieldset>
    `,
};
