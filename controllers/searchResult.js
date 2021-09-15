module.exports = {
  name: 'searchResult',
  title: 'Resultado de busca',
  description: 'Imprime bloco de produtos de resultado de busca',
  example: '<vtex.cmc:searchResult layout="ebaf53ee-8071-4b91-8337-c9f20a5d8c16" itemCount="16" columnCount="4" />',
  render: function ({ vtex, $document, tag }) {
    const { html = '', className = '' } = tag?.products || {};

    return `
    <div class="main">
    <p class="searchResultsTime"><span class="resultado-busca-numero"><span class="label">Produtos
                encontrados:</span> <span class="value">4</span></span><span class="resultado-busca-termo"> <span
                class="label">Resultado da Pesquisa por:</span> <strong class="value"></strong></span><span
            class="resultado-busca-tempo"> <span class="label">em</span> <span class="value">4 ms</span></span>
    </p>
    <div class="sub">
        <div class="resultado-busca-filtro">
            <fieldset class="orderBy">
                <label>Ordenar por:</label>
                <select id="O"
                    onchange="window.location.href= '/test-category?PS=16&' + 'O=' + this.options[this.selectedIndex].value">
                    <option value="">Selecione</option>
                    <option value="OrderByPriceASC">Menor Preço</option>
                    <option value="OrderByPriceDESC">Maior Preço</option>
                    <option value="OrderByTopSaleDESC">Mais vendidos</option>
                    <option value="OrderByReviewRateDESC">Melhores avaliações</option>
                    <option value="OrderByNameASC">A - Z</option>
                    <option value="OrderByNameDESC">Z - A</option>
                    <option value="OrderByReleaseDateDESC">Data de lançamento</option>
                    <option value="OrderByBestDiscountDESC">Melhor Desconto</option>
                </select>
            </fieldset>
            <fieldset class="filterBy">
                Itens por página:
                <select id="PS"
                    onchange="window.location.href= '/test-category?' + 'PS=' + this.options[this.selectedIndex].value">
                    <option selected="selected" value="16">16</option>
                    <option value="32">32</option>
                    <option value="48">48</option>
                    <option value="64">64</option>
                </select>
            </fieldset>
            <p class="compare">Produtos selecionados para comparar: <strong><span class="compare-selection-count"
                        id="NumeroSuperior">0</span></strong><a title="Comparar" class="btn-comparar" href="#">Comparar</a></p>
        </div>
    </div>
    <div class="vitrine resultItemsWrapper">
        <script type='text/javascript'>
            var pagecount_39213654;
            $(document).ready(function () {
                pagecount_39213654 = 10;
                $('#PagerTop_39213654').pager({
                    pagenumber: 1,
                    pagecount: pagecount_39213654,
                    buttonClickCallback: PageClick_39213654
                });
                $('#PagerBottom_39213654').pager({
                    pagenumber: 1,
                    pagecount: pagecount_39213654,
                    buttonClickCallback: PageClick_39213654
                });
                if (window.location.hash != '') PageClick_39213654(window.location.hash.replace(/#/, ''));
            });
            PageClick_39213654 = function (pageclickednumber) {
                window.location.hash = pageclickednumber;
                $('#ResultItems_39213654').load(
                    '/buscapagina?fq=C%3a%2f1%2f&PS=16&sl=ebaf53ee-8071-4b91-8337-c9f20a5d8c16&cc=4&sm=0&PageNumber=' +
                    pageclickednumber,
                    function () {
                        $('#PagerTop_39213654').pager({
                            pagenumber: pageclickednumber,
                            pagecount: pagecount_39213654,
                            buttonClickCallback: PageClick_39213654
                        });
                        $('#PagerBottom_39213654').pager({
                            pagenumber: pageclickednumber,
                            pagecount: pagecount_39213654,
                            buttonClickCallback: PageClick_39213654
                        });
                        bindQuickView();
                    });
            }
        </script>
        <div class="pager top" id="PagerTop_39213654"></div>
        <div id="ResultItems_39213654" class="${className}">
            ${html}
        </div>
        <div class="pager bottom" id="PagerBottom_39213654"></div>
    </div>
    <p class="searchResultsTime"><span class="resultado-busca-numero"><span class="label">Produtos
                encontrados:</span> <span class="value">4</span></span><span class="resultado-busca-termo"> <span
                class="label">Resultado da Pesquisa por:</span> <strong class="value"></strong></span><span
            class="resultado-busca-tempo"> <span class="label">em</span> <span class="value">4 ms</span></span>
    </p>
    <div class="sub">
        <div class="resultado-busca-filtro">
            <fieldset class="orderBy">
                <label>Ordenar por:</label>
                <select id="O"
                    onchange="window.location.href= '/test-category?PS=16&' + 'O=' + this.options[this.selectedIndex].value">
                    <option value="">Selecione</option>
                    <option value="OrderByPriceASC">Menor Preço</option>
                    <option value="OrderByPriceDESC">Maior Preço</option>
                    <option value="OrderByTopSaleDESC">Mais vendidos</option>
                    <option value="OrderByReviewRateDESC">Melhores avaliações</option>
                    <option value="OrderByNameASC">A - Z</option>
                    <option value="OrderByNameDESC">Z - A</option>
                    <option value="OrderByReleaseDateDESC">Data de lançamento</option>
                    <option value="OrderByBestDiscountDESC">Melhor Desconto</option>
                </select>
            </fieldset>
            <fieldset class="filterBy">
                Itens por página:
                <select id="PS"
                    onchange="window.location.href= '/test-category?' + 'PS=' + this.options[this.selectedIndex].value">
                    <option selected="selected" value="16">16</option>
                    <option value="32">32</option>
                    <option value="48">48</option>
                    <option value="64">64</option>
                </select>
            </fieldset>
            <p class="compare">Produtos selecionados para comparar: <strong><span class="compare-selection-count"
                        id="NumeroSuperior">0</span></strong><a title="Comparar" class="btn-comparar" href="#">Comparar</a></p>
        </div>
    </div>
  </div>
`;
  },
};
