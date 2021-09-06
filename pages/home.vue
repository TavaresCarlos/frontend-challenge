<template>
	<v-app>
		<v-container>
			<v-row>
				<v-col cols="12" sm="12" md="12">
					<div class="text--primary font-weight-black">
						<h1>Navers</h1>
						<v-btn
					  elevation="1"
					  @click="logout"
						>
							Sair
						</v-btn>
					</div>
				</v-col>
			</v-row>
		</v-container>
	</v-app>
</template>

<script>
  export default {
	 	methods: {
	    logout () {
	      this.$store.dispatch('logout');
	      this.$router.push('/')
	    }
	  }
 	}
</script>
