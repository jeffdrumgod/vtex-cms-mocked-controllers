module.exports = {
  name: 'accountUserProfile',
  title: '',
  description: '',
  example: '<vtex.cmc:accountUserProfile />',
  rendered: `
  <div class="span4 profile-detail-display">
  <h4>Meu Perfil</h4>
  <h5>jeff@handson-ti.com.br</h5>
  <p class="profile-detail-display-email">jeff@handson-ti.com.br</p>
  <p class="edit edit-profile-link"><a data-toggle="modal" href="#editar-perfil" id="edit-data-link">Alterar dados</a></p>
  <p class="profile-detail-display-info"><span class="profile-detail-display-nickname"><span class="title">Apelido: </span><span class="data">n/d</span></span><br /><span class="profile-detail-display-cpf"><span class="title">CPF: </span><span class="data">n/d</span></span><br /><span class="profile-detail-display-date-of-birth"><span class="title">Data de nascimento: </span>
      <span
      class="data">n/d</span>
  </span><br /><span class="profile-detail-display-gender"><span class="title">Sexo: </span><span class="data">n/d</span></span><br /><span class="profile-detail-display-telephone"><span class="title">Telefone: </span><span class="data">n/d</span></span><br
  /><span class="profile-detail-display-cellphone"><span class="title">Telefone Comercial: </span><span class="data">n/d</span></span>
</p>
</div>
<div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" class="modal hide fade" id="editar-perfil" style="display: none;">
  <div id="response-message" class="modal-body"></div>
  <div id="editar-perfil-conteudo">
      <form id="profile" name="profile" method="post" action="">
          <div class="modal-header"><button aria-hidden="true" data-dismiss="modal" class="close" type="button">×</button>
              <h3 id="myModalLabel">Meu Perfil</h3></div>
              <div class="modal-body">
                  <div class="profile-detail-form">
                      <div class="row profile-detail-form-personal-data">
                          <h5 class="span5">Dados pessoais</h5><label id="error" class="error">*Campo obrigatório.</label>
                          <div class="control-group form-personal-data-name span"><label class="control-label" for="nome">Nome: </label>
                              <div class="controls"><input type="text" class="span2" id="firstName" name="firstName" value=""></div>
                          </div>
                          <div class="control-group form-personal-data-surname span"><label class="control-label" for="sobrenome">Sobrenome: </label>
                              <div class="controls"><input type="text" class="span2" id="lastName" name="lastName" value=""></div>
                          </div>
                          <div class="control-group form-personal-data-nickname span"><label class="control-label" for="apelido">Apelido: </label>
                              <div class="controls"><input type="text" class="span2" id="nickName" name="nickName" value="" /></div>
                          </div>
                          <div class="control-group form-personal-data-cpf span"><label class="control-label" for="cpf">CPF</label>
                              <div class="controls"><input type="text" class="span2" id="document" name="document" value="" /></div>
                          </div>
                          <div class="control-group form-personal-data-date-of-birth span2"><label class="control-label" for="nascimento">Data de nascimento: </label>
                              <div class="controls"><input type="text" class="input-small" id="birthDate" name="birthDate" value="" /></div>
                          </div>
                          <div class="control-group form-personal-data-gender span"><label class="control-label">Sexo: </label>
                              <div class="controls"><label class="radio"><input type="radio"  value="male" name="gender">Masculino</label><label class="radio gender-female-label"><input type="radio"  value="female" name="gender">Feminino</label></div>
                          </div>
                      </div>
                      <div id="business-data" class="row profile-detail-form-business-data">
                          <div class="control-group form-contact-data-corporate-name span5"><label class="control-label" for="corporateName">Razão Social: </label>
                              <div class="controls"><input type="text" class="span4" id="corporateName" name="corporateName" value=""></div>
                          </div>
                          <div class="control-group form-contact-data-fancy-name span5"><label class="control-label" for="fancyName">Nome Fantasia: </label>
                              <div class="controls"><input type="text" class="span4" id="fancyName" name="fancyName" value=""></div>
                          </div>
                          <div class="control-group form-contact-data-business-document span"><label for="businessDocument" class="control-label">CNPJ: </label>
                              <div class="controls"><input type="text" value="" name="businessDocument" id="businessDocument" class="span3"></div>
                          </div>
                          <div class="control-group form-contact-data-state-registration span"><label for="stateRegistration" class="control-label">Inscrição Estadual: </label>
                              <div class="controls"><input type="text" value="" name="stateRegistration" id="stateRegistration" class="span3"></div>
                          </div>
                      </div>
                      <div class="control-group form-business-data-name"><a id="business-toggle" data="off" href="#">Incluir dados de pessoa jurídica</a></div>
                      <div class="row profile-detail-form-contact-data">
                          <h5 class="span5">Dados de contato</h5>
                          <div class="control-group form-contact-data-email span5"><label class="control-label" for="email">E-mail: </label>
                              <div class="controls"><input type="text" class="span3" id="email" name="email" value="jeff@handson-ti.com.br" /></div>
                          </div>
                          <div class="control-group form-contact-data-telephone span"><label class="control-label" for="telefone">Telefone: </label>
                              <div class="controls"><input type="text" class="span2" id="homePhone" name="homePhone" value="" /></div>
                          </div>
                          <div class="control-group form-contact-data-cellphone span"><label class="control-label" for="celular">Telefone Comercial: </label>
                              <div class="controls"><input type="text" class="span2" id="businessPhone" name="businessPhone" value="" /></div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="modal-footer save-cancel-buttons"><input id="profile-submit" aria-hidden="true" class="btn btn-primary profile" type="submit" value="Salvar" /><input type="hidden" id="isCorporate" name="isCorporate" value="False" /><input type="hidden" id="userId" name="userId" value="d2ea5d91-c48a-4f90-94e8-6b54eab95c30"
                  /><button class="btn-link" data-dismiss="modal" type="button">Cancelar</button></div>
              </form>
          </div>
      </div>
  </div>

`,
};
