<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col>
      </v-col>
      <v-col order="12">
        <v-card
          class="pa-2"
          tile
        >
        <div id="login">
          <form>
            <v-text-field
              label="Email"
              :rules="emailRules"
              hide-details="auto"
            ></v-text-field>
            <v-text-field 
              label="Senha" 
              type="password"
            ></v-text-field>
            <v-btn block tile> 
              Entrar
            </v-btn>
          </form>
        </div>

        </v-card>
      </v-col>
      <v-col order="1">
      </v-col>
    </v-row>
  </v-container>
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
    })
  }
</script>

<style scopped>
#login{
  padding: 10% 10% 10% 10%;
  border-radius:  0px;
}
#login{
  border:  1px solid black;
}
#form{
  border-radius:  0px;
}
</style>