<template>
  <div id="login" class="row justify-content-center mt-5">
      <div class="card col-md-6 p-0">
          <div class="card-header m-0 text-center bg-primary text-white">
              <h5>¿Quien eres?</h5>
          </div>
          <div class="card-body">
              <form action="">
                  <div class="form-group">
                      <label for="">Nombre</label>
                      <input type="text" name="nombre" v-model="nombre" id="nombre" class="form-control">
                  </div>
                  <router-link 
                  class="btn btn-primary btn-block" 
                  :to="{name:'chat', params: { id: nombre }}">
                    Chatear
                  </router-link>
              </form>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'Login',
    data:()=>{
        return {
            nombre:'default',
        }
    }
}
</script>

<style>

</style>