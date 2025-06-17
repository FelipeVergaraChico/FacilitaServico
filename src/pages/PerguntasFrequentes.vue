<template>
  <q-page class="q-pa-md">
    <q-card flat bordered class="my-card">
      <q-card-section>
        <div class="text-h4 text-weight-bold q-mb-md">Perguntas Frequentes (FAQ)</div>
        <q-separator inset class="q-mb-md" />

        <div class="q-mb-md">
          <p>Encontre respostas rápidas para as dúvidas mais comuns sobre como usar o Facilita Serviços como cliente ou prestador de serviço.</p>
        </div>

        <q-list bordered class="rounded-borders">
          <q-expansion-item
            expand-separator
            icon="people"
            label="Geral sobre a Plataforma"
            header-class="text-weight-bold"
          >
            <q-card>
              <q-card-section>
                <h6 class="text-subtitle1 text-weight-medium">O que é o Facilita Serviços?</h6>
                <p>Somos uma plataforma online que conecta pessoas e empresas que precisam de serviços (Clientes) a profissionais qualificados que oferecem esses serviços (Prestadores de Serviço), como fotografia, tradução, programação, design, consultoria, entre outros.</p>

                <h6 class="text-subtitle1 text-weight-medium q-mt-md">Como funciona o **[Nome do Seu E-commerce de Serviços]**?</h6>
                <p>Prestadores criam anúncios detalhados de seus serviços. Clientes navegam pelos anúncios, entram em contato com os prestadores, contratam o serviço e pagam de forma segura pela plataforma. Nós intermediamos essa conexão e garantimos um ambiente seguro para ambas as partes.</p>

                <h6 class="text-subtitle1 text-weight-medium q-mt-md">É seguro usar a plataforma?</h6>
                <p>Sim, levamos a segurança a sério. Utilizamos criptografia para proteger suas informações, e nossos pagamentos são processados por gateways seguros. Incentivamos a comunicação pela plataforma e temos políticas para lidar com disputas.</p>
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-expansion-item
            expand-separator
            icon="account_circle"
            label="Para Clientes (Quem contrata o serviço)"
            header-class="text-weight-bold"
          >
            <q-card>
              <q-card-section>
                <h6 class="text-subtitle1 text-weight-medium">Como faço para contratar um serviço?</h6>
                <p>1. vá até a opção "serviços" .<br>2. Clique no anúncio para ver detalhes do serviço e o perfil do prestador.<br>3. Entre em contato com o prestador através do chat da plataforma para discutir detalhes, tirar dúvidas e solicitar um orçamento.<br>4. Após acordar os termos, contrate o serviço e efetue o pagamento pela plataforma.</p>

                <h6 class="text-subtitle1 text-weight-medium q-mt-md">Posso negociar o preço diretamente com o prestador?</h6>
                <p>Sim, você pode discutir os detalhes do serviço e o preço com o prestador através do chat da plataforma antes de finalizar a contratação. O valor final deve ser acordado e refletido no pedido formalizado na plataforma.</p>

                <h6 class="text-subtitle1 text-weight-medium q-mt-md">O que acontece se eu não gostar do serviço?</h6>
                <p>Nossa plataforma busca garantir a satisfação. Em caso de insatisfação, entre em contato com o prestador para tentar resolver o problema. Se não houver acordo, você pode abrir uma disputa em nossa plataforma, e faremos a mediação conforme nossos Termos de Uso e política de disputas.</p>
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-expansion-item
            expand-separator
            icon="work"
            label="Para Prestadores de Serviço (Quem oferece o serviço)"
            header-class="text-weight-bold"
          >
            <q-card>
              <q-card-section>

                <h6 class="text-subtitle1 text-weight-medium q-mt-md">Qual a taxa cobrada pela plataforma?</h6>
                <p>Cobramos uma taxa de serviço sobre o valor total de cada transação concluída com sucesso através da plataforma. Essa taxa é claramente informada antes da aceitação do serviço. [Especifique a porcentagem ou método de cálculo, se desejar, ex: Atualmente, nossa taxa é de X% sobre o valor do serviço].</p>

                <h6 class="text-subtitle1 text-weight-medium q-mt-md">Como recebo meus pagamentos?</h6>
                <p>Após a conclusão e aprovação do serviço pelo cliente, o valor será liberado para você, descontando nossa taxa de serviço. Os repasses são feitos para sua conta bancária cadastrada em [X] dias úteis.</p>

                <h6 class="text-subtitle1 text-weight-medium q-mt-md">Posso divulgar meu contato direto para o cliente?</h6>
                <p>Não, para a segurança de ambas as partes e para garantir o processamento seguro de pagamentos e a aplicação das políticas da plataforma, toda a comunicação e contratação devem ocorrer dentro do **[Nome do Seu E-commerce de Serviços]**.</p>
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-expansion-item
            expand-separator
            icon="credit_card"
            label="Pagamentos e Finanças"
            header-class="text-weight-bold"
          >
            <q-card>
              <q-card-section>
                <h6 class="text-subtitle1 text-weight-medium">Quais métodos de pagamento são aceitos para contratar um serviço?</h6>
                <p>Aceitamos as principais bandeiras de cartão de crédito (Visa, Mastercard, Elo, American Express), Pix e Boleto Bancário.</p>

                <h6 class="text-subtitle1 text-weight-medium q-mt-md">Como funciona o pagamento?</h6>
                <p>O cliente paga o serviço na plataforma. O valor fica retido conosco até que o serviço seja concluído e aprovado pelo cliente. Somente então o valor (descontada a taxa de serviço) é liberado para o prestador.</p>
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-expansion-item
            expand-separator
            icon="gavel"
            label="Disputas e Resoluções"
            header-class="text-weight-bold"
          >
            <q-card>
              <q-card-section>
                <h6 class="text-subtitle1 text-weight-medium">Como abrir uma disputa?</h6>
                <p>Caso haja um problema com um serviço contratado/prestado, e as partes não consigam resolver amigavelmente, você pode abrir uma disputa através da sua área de pedidos/serviços. Nossa equipe de mediação analisará o caso e buscará uma solução justa.</p>

                <h6 class="text-subtitle1 text-weight-medium q-mt-md">Quais documentos são necessários em uma disputa?</h6>
                <p>É importante manter todas as conversas e acordos dentro do chat da plataforma. Evidências como arquivos, capturas de tela e descrições detalhadas do problema são essenciais para a resolução da disputa.</p>
              </q-card-section>
            </q-card>
          </q-expansion-item>

          </q-list>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PerguntasFrequentes'
});
</script>

<style scoped>
.my-card {
  max-width: 900px;
  margin: 20px auto;
}
h6 {
  color: #555;
}
</style>