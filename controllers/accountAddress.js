module.exports = {
  name: 'accountAddress',
  title: '',
  description: '',
  example: '<vtex.cmc:accountAddress />',
  rendered: `
<div class="span6 address-display-block">
  <h4>Meus Endereços</h4>
  <p class="new new-address-link"><a data-toggle="modal" href="#address-edit" class="address-update" data-addressname="">Cadastrar novo endereço</a></p>
  <div class="row address-display">
      <div class="span3 address-display-unit">
          <p>Nenhum endereço cadastrado.</p>
      </div>
  </div>
  <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" class="modal hide fade" id="address-remove">
      <div id="exclude" class="exclude">
          <div class="modal-header"><button aria-hidden="true" data-dismiss="modal" class="close" type="button">×</button>
              <h3 id="myModalLabel" class="address-label">Confirmar exclusão</h3></div>
              <div class="modal-body"><label class="control-label" id="exclude-message"></label></div>
              <div class="modal-footer save-cancel-buttons"><input id="address-delete" aria-hidden="true" class="btn btn-primary" type="submit" value="Excluir" /><button class="btn-link" data-dismiss="modal" type="button">Cancelar</button></div>
          </div>
      </div>
      <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" class="modal hide fade" id="address-edit">
          <div id="accountAjaxBusy" class="load loading">Carregando...</div>
          <form id="form-address" name="form-address" action="" method="post">
              <div class="modal-header"><button aria-hidden="true" data-dismiss="modal" class="close" type="button">×</button>
                  <h3 id="myModalLabel" class="address-label">Cadastrar novo endereço</h3></div>
                  <div class="modal-body"><label id="error" class="error">*Campo obrigatório.</label>
                      <div class="address-form">
                          <div class="control-group address-form-addressee"><label class="control-label" for="addressName">Identificação do endereço<span class='obr'>*</span>: </label>
                              <div class="controls"><input id="addressName" type="text" class="span3" name="addressName" value=""></div>
                          </div>
                          <div class="control-group address-form-addressee"><label class="control-label" for="receiverName">Nome do destinatário<span class='obr'>*</span>: </label>
                              <div class="controls"><input id="receiverName" type="text" class="span3" name="receiverName" value=""></div>
                          </div>
                          <div class="control-group address-form-address-type"><label for="addressType" class="control-label">Tipo de endereço: </label>
                              <div class="controls"><select id="addressType" name="addressType" class="span3"><option value="1" selected>Residencial</option><option value="0" >Comercial</option></select></div>
                          </div>
                          <div class="control-group address-form-cep"><label class="control-label" for="postalCode">CEP: </label>
                              <div class="controls"><input id="postalCode" type="text" class="input-small" name="postalCode" value=""></div>
                          </div>
                          <div class="row">
                              <div class="span4">
                                  <div class="control-group address-form-street-name"><label class="control-label" for="street">Endereço: </label><input id="street" type="text" class="span4" name="street" value=""></div>
                              </div>
                              <div class="span1">
                                  <div class="control-group address-form-number"><label class="control-label" for="number">Número: </label><input id="number" type="text" class="span1" name="number" value=""></div>
                              </div>
                          </div>
                          <div class="row">
                              <div class="span3">
                                  <div class="control-group address-form-complement"><label class="control-label" for="complement">Complemento: </label><input id="complement" type="text" class="span3" name="complement" value=""></div>
                              </div>
                              <div class="span3">
                                  <div class="control-group address-form-reference"><label class="control-label" for="reference">Ponto de referência: </label><input id="reference" type="text" class="span3" name="reference" value=""></div>
                              </div>
                          </div>
                          <div class="control-group address-form-neighborhood"><label class="control-label" for="neighborhood">Bairro: </label><input id="neighborhood" type="text" class="span3" name="neighborhood" value=""></div>
                          <div class="row">
                              <div class="control-group span address-form-state"><label class="control-label" for="state">Estado: </label>
                                  <div class="controls"><select id="state" class="span1" name="state"><option value="AC">AC</option><option value="AC">AC</option><option value="AL">AL</option><option value="AM">AM</option><option value="AP">AP</option><option value="BA">BA</option><option value="CE">CE</option><option value="DF">DF</option><option value="ES">ES</option><option value="GO">GO</option><option value="MA">MA</option><option value="MT">MT</option><option value="MS">MS</option><option value="MG">MG</option><option value="PA">PA</option><option value="PB">PB</option><option value="PR">PR</option><option value="PE">PE</option><option value="PI">PI</option><option value="RJ">RJ</option><option value="RN">RN</option><option value="RO">RO</option><option value="RS">RS</option><option value="RR">RR</option><option value="SC">SC</option><option value="SE">SE</option><option value="SP">SP</option><option value="TO">TO</option></select></div>
                              </div>
                              <div class="control-group span address-form-city"><label class="control-label" for="city">Cidade: </label>
                                  <div class="controls"><input id="city" type="text" class="span3" name="city" value=""></div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="modal-footer save-cancel-buttons"><input id="form-submit" aria-hidden="true" class="btn btn-primary" type="submit" value="Salvar" /><button class="btn-link" data-dismiss="modal" type="button">Cancelar</button><input type="hidden" id="userId" name="userId" value="d2ea5d91-c48a-4f90-94e8-6b54eab95c30"
                      /><input type="hidden" id="addressId" name="addressId" value="" /><input type="hidden" id="country" name="country" value="BRA" /></div>
                  </form>
              </div>
          </div>
`,
};
