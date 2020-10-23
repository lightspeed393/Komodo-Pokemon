<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-center">
        <logo />
        <vuetify-logo />
      </div>
      <v-card>
        <v-card-title class="headline">Welcome to the Spacecoin-Tokens</v-card-title>
        <v-card-text>
          <p>Spacecoin-Tokens is an app for working with tokens on the SPACE blockchain.</p>
          <p>
            For more information on Spacecoin-Tokens, check out the
            <a href="https://spaceworks.co/guides" target="_blank">guides</a>.
          </p>
          <p>
            If you have questions, please join the official
            <a href="https://spaceworks.co/discord/" target="_blank" title="chat">discord</a>.
          </p>
          <p>
            Find a bug? Report it on the github
            <a
              href="https://github.com/spaceworksco/tokens-app/issues"
              target="_blank"
              title="contribute"
            >issue board</a>.
          </p>
          <p>Thank you for using tokens with SPACE!</p>
          <div class="text-xs-right">
            <em>
              <small>&mdash; SpaceWorks</small>
            </em>
          </div>
          <hr class="my-3" />
          Site: <a href="https://spaceworks.co/" target="_blank">spaceworks.co</a>
          <br />
          Wallets: <a href="https://spaceworks.co/spacecoin/wallets" target="_blank">spaceworks.co/spacecoin/wallets</a>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" nuxt to="/home">Continue</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from "~/components/Logo.vue";
import VuetifyLogo from "~/components/VuetifyLogo.vue";

export default {
  components: {
    Logo,
    VuetifyLogo
  }
};
</script>
