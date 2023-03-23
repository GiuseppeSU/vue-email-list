const { createApp } = Vue

createApp({
  data() {
    return {
      stampaEmail:[],
      finish:false
    }
  
  },
  methods: {
        
  },
  mounted() {
    for (let i = 0; i < 10; i++){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then( (response) => {
                this.stampaEmail.push(response.data.response);
                if(this.stampaEmail.length == 10){
                    this.finish = true

                }
            }
        );

    }
   

 

  }
}).mount('#app')