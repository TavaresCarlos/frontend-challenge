<template>
  <v-app>
    <v-container fill-height fluid>
      <v-row justify="center" align="center">
        <v-col cols="12" sm="8" md="4">
          <v-card>
            <div id="login">
              <v-row justify="center" align="center">
                <v-img
                  max-width="350"
                  max-height="300"
                  src="/img/logo.png"
                ></v-img>
              </v-row>
              <v-form
                ref="form"
                v-model="valid"
              >
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
                <v-btn 
                  block 
                  tile 
                  color="#000000" 
                  @click="login"
                  id="entrar"
                > 
                  Entrar
                </v-btn>
              </v-form>
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
        value => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || 'Informe um email válido',
        value => /^\w+([.-]?\w+)*@/.test(value) || 'Informe um email válido',
      ]
    }),
    methods: {
      login () {
        this.$store.dispatch('fetch')
          .then(({ data }) => console.log(data) )

        this.$store.dispatch('login')
        this.$router.push('/home')
      }
    }
  }
</script>

<style scopped>
#login  {
  padding: 10% 5% 10% 5%;
  border-radius:  0px;
  border:  1px solid black;
}
#form {
  border-radius:  0px;
}
#entrar {
  color: #FFFFFF;
}
</style>
