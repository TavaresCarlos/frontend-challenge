<template>
  <v-app>
    <v-container fill-height fluid>
      <v-row justify="center" align="center">
        <v-col cols="12" sm="8" md="6">
          <v-card>
          <div id="login">
            <v-text-field
              label="Email"
              :rules="emailRules"
              hide-details="auto"
              required
            ></v-text-field>
            <v-text-field 
              label="Senha" 
              type="password"
              required
            ></v-text-field>
            <v-btn block tile @click="login"> 
              Entrar
            </v-btn>
          </div>

          </v-card>
        </v-col>
      </v-row>
    </v-container>
</v-app>
</template>

<script>
  export default {
    data: () => ({
      valid: false,
      email: '',
      senha: '',
      emailRules: [ 
        value => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || 'Informe um email válido'
      ]
    }),
    methods: {
      login (e) {
        this.$store.commit('login', e.target.value);
        this.$router.push('/home')
      }
    }
  }
</script>

<style scopped>
#login{
  padding: 10% 5% 10% 5%;
  border-radius:  0px;
}
#login{
  border:  1px solid black;
}
#form{
  border-radius:  0px;
}
</style>