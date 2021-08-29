module.exports = {
  name: 'newsletterOptIn',
  obsolete: true,
  title: 'Bloco de inscrição para newsletter',
  description: '',
  example: '<vtex.cmc:newsletterOptIn/>',
  rendered: `
<div class="newsletter" id="NewsLetter_8e51570d_841e_40c9_a00d_7432ba31ced0"><h3 class="newsletter-title">novidades</h3><fieldset><p>Receba novidades e promoções por email:</p><input id="newsletterClientName" onfocus="newsSelect(this,'Digite seu nome...');" onblur="newsLeave(this,'Digite seu nome...');" class="newsletter-client-name" value="Digite seu nome..." size="20" type="text" name="newsClientName"><input id="newsletterClientEmail" onfocus="newsSelect(this,'Digite seu e-mail...');" onblur="newsLeave(this,'Digite seu e-mail...');" class="newsletter-client-email" value="Digite seu e-mail..." size="20" type="text" name="newsletterClientEmail"><input id="newsletterButtonOK" class="btn-ok newsletter-button-ok" value="ok" type="button" name="newsletterButtonOK" onclick="newsButtonClick('NewsLetter_8e51570d_841e_40c9_a00d_7432ba31ced0')"><input id="newsletterLoading" type="hidden" class="newsletter-loading" value="Processando..."><input id="newsletterSuccess" type="hidden" class="newsletter-success" value="Obrigado por se cadastrar na Vivara!"><input id="newsletterSuccess2" type="hidden" class="newsletter-success2" value="Em breve estaremos entrando em contato com você para oferecer as melhores promoções."><input id="newsletterError" type="hidden" class="newsletter-error" value="
    Encontramos um erro no cadastro de suas informações.&lt;br /&gt;Por favor, tente novamente!
"><input id="newsInternalPage" type="hidden" value="_"><input id="newsInternalPart" type="hidden" value="newsletter"><input id="newsInternalCampaign" type="hidden" value="newsletter:opt-in"></fieldset><span class="rt"></span><span class="rb"></span><span class="lb"></span><span class="lt"></span></div>
`,
};
