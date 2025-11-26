import { Link } from 'react-router-dom';

const PoliticaPrivacidadePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-600 to-emerald-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Política de Privacidade</h1>
          <p className="text-xl text-emerald-100">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            
            {/* Introdução */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">1. Introdução</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                A Warte Polimento está comprometida em proteger a privacidade e os dados pessoais de nossos clientes. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais quando você utiliza nossos serviços ou visita nosso website.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Ao utilizar nossos serviços, você concorda com as práticas descritas nesta política. Recomendamos que você leia atentamente este documento para entender como tratamos seus dados.
              </p>
            </div>

            {/* Informações Coletadas */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">2. Informações que Coletamos</h2>
              
              <h3 className="text-2xl font-semibold text-gray-800 mb-3 mt-6">2.1 Informações Fornecidas por Você</h3>
              <p className="text-gray-700 leading-relaxed mb-3">Coletamos informações que você nos fornece diretamente, incluindo:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li><strong>Dados de Identificação:</strong> Nome completo, CPF/CNPJ, RG</li>
                <li><strong>Dados de Contato:</strong> Endereço de e-mail, número de telefone, endereço residencial ou comercial</li>
                <li><strong>Informações de Serviço:</strong> Tipo de piso, área a ser tratada, serviço solicitado</li>
                <li><strong>Informações de Pagamento:</strong> Dados necessários para processamento de pagamentos</li>
                <li><strong>Comunicações:</strong> Mensagens, feedbacks e avaliações que você nos envia</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-800 mb-3 mt-6">2.2 Informações Coletadas Automaticamente</h3>
              <p className="text-gray-700 leading-relaxed mb-3">Quando você visita nosso website, podemos coletar automaticamente:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Endereço IP e localização geográfica aproximada</li>
                <li>Tipo de navegador e dispositivo utilizado</li>
                <li>Páginas visitadas e tempo de navegação</li>
                <li>Cookies e tecnologias similares</li>
              </ul>
            </div>

            {/* Como Usamos */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">3. Como Usamos Suas Informações</h2>
              <p className="text-gray-700 leading-relaxed mb-3">Utilizamos suas informações pessoais para:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Prestação de Serviços:</strong> Executar os serviços contratados de limpeza, polimento e manutenção de pisos</li>
                <li><strong>Comunicação:</strong> Entrar em contato sobre agendamentos, orçamentos e atualizações de serviços</li>
                <li><strong>Processamento de Pagamentos:</strong> Processar transações financeiras de forma segura</li>
                <li><strong>Melhorias:</strong> Aprimorar nossos serviços e experiência do cliente</li>
                <li><strong>Marketing:</strong> Enviar ofertas, promoções e novidades (com seu consentimento)</li>
                <li><strong>Conformidade Legal:</strong> Cumprir obrigações legais e regulatórias</li>
                <li><strong>Segurança:</strong> Proteger contra fraudes e atividades ilegais</li>
              </ul>
            </div>

            {/* Compartilhamento */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">4. Compartilhamento de Informações</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                A Warte Polimento não vende, aluga ou comercializa suas informações pessoais. Podemos compartilhar seus dados apenas nas seguintes situações:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Prestadores de Serviço:</strong> Com empresas que nos auxiliam em operações (processamento de pagamentos, hospedagem de website)</li>
                <li><strong>Obrigações Legais:</strong> Quando exigido por lei, ordem judicial ou autoridades competentes</li>
                <li><strong>Proteção de Direitos:</strong> Para proteger nossos direitos, propriedade ou segurança</li>
                <li><strong>Consentimento:</strong> Com seu consentimento explícito para finalidades específicas</li>
              </ul>
            </div>

            {/* Armazenamento */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">5. Armazenamento e Segurança</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição. Isso inclui:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Criptografia de dados sensíveis</li>
                <li>Controles de acesso restrito</li>
                <li>Monitoramento regular de sistemas</li>
                <li>Treinamento de equipe sobre proteção de dados</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Seus dados são armazenados em servidores seguros localizados no Brasil e mantidos pelo tempo necessário para cumprir as finalidades descritas nesta política ou conforme exigido por lei.
              </p>
            </div>

            {/* Seus Direitos */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">6. Seus Direitos (LGPD)</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem os seguintes direitos:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li><strong>Confirmação e Acesso:</strong> Confirmar se tratamos seus dados e acessá-los</li>
                <li><strong>Correção:</strong> Solicitar correção de dados incompletos, inexatos ou desatualizados</li>
                <li><strong>Anonimização ou Bloqueio:</strong> Solicitar anonimização ou bloqueio de dados desnecessários</li>
                <li><strong>Eliminação:</strong> Solicitar eliminação de dados tratados com seu consentimento</li>
                <li><strong>Portabilidade:</strong> Solicitar portabilidade de dados a outro fornecedor</li>
                <li><strong>Informação:</strong> Obter informações sobre compartilhamento de dados</li>
                <li><strong>Revogação:</strong> Revogar consentimento a qualquer momento</li>
                <li><strong>Oposição:</strong> Opor-se ao tratamento de dados</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Para exercer seus direitos, entre em contato conosco através dos canais indicados na seção "Contato".
              </p>
            </div>

            {/* Cookies */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">7. Cookies e Tecnologias Similares</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Utilizamos cookies e tecnologias similares para melhorar sua experiência em nosso website. Cookies são pequenos arquivos de texto armazenados em seu dispositivo que nos ajudam a:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Lembrar suas preferências e configurações</li>
                <li>Entender como você usa nosso website</li>
                <li>Melhorar a funcionalidade e desempenho</li>
                <li>Personalizar conteúdo e anúncios</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Você pode configurar seu navegador para recusar cookies, mas isso pode afetar algumas funcionalidades do website.
              </p>
            </div>

            {/* Menores */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">8. Privacidade de Menores</h2>
              <p className="text-gray-700 leading-relaxed">
                Nossos serviços não são direcionados a menores de 18 anos. Não coletamos intencionalmente informações pessoais de menores. Se tomarmos conhecimento de que coletamos dados de um menor sem consentimento parental adequado, tomaremos medidas para excluir essas informações.
              </p>
            </div>

            {/* Alterações */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">9. Alterações nesta Política</h2>
              <p className="text-gray-700 leading-relaxed">
                Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças em nossas práticas ou por razões legais. Notificaremos você sobre alterações significativas através de nosso website ou por e-mail. A data da última atualização será sempre indicada no topo desta página.
              </p>
            </div>

            {/* Contato */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">10. Contato</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Se você tiver dúvidas sobre esta Política de Privacidade ou quiser exercer seus direitos, entre em contato conosco:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-800 font-semibold mb-2">Warte Polimento</p>
                <p className="text-gray-700 mb-1">
                  <i className="ri-map-pin-fill text-emerald-600 mr-2"></i>
                  Rua Guilherme Valente Nº 600, Jardim Vergueiro, CEP: 05818-320, São Paulo - SP
                </p>
                <p className="text-gray-700 mb-1">
                  <i className="ri-phone-fill text-emerald-600 mr-2"></i>
                  <a href="tel:+5531991993690" className="hover:text-emerald-600">(31) 99199-3690</a>
                </p>
                <p className="text-gray-700 mb-1">
                  <i className="ri-whatsapp-fill text-emerald-600 mr-2"></i>
                  <a href="https://wa.me/5531991993690" className="hover:text-emerald-600">WhatsApp</a>
                </p>
                <p className="text-gray-700">
                  <i className="ri-mail-fill text-emerald-600 mr-2"></i>
                  <a href="mailto:contato@wartepolimento.com.br" className="hover:text-emerald-600">contato@wartepolimento.com.br</a>
                </p>
              </div>
            </div>

            {/* Consentimento */}
            <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Consentimento</h3>
              <p className="text-gray-700 leading-relaxed">
                Ao utilizar nossos serviços e fornecer suas informações pessoais, você consente com a coleta, uso e compartilhamento de seus dados conforme descrito nesta Política de Privacidade.
              </p>
            </div>

          </div>

          {/* Back Button */}
          <div className="mt-12 text-center">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors whitespace-nowrap cursor-pointer"
            >
              <i className="ri-arrow-left-line"></i>
              Voltar para Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PoliticaPrivacidadePage;
