<template>
  <div id="chat" class="row justify-content-center mt-5 mb-3">
    <div class="card col-md-8 p-0">
      <div class="card-header m-0 text-center bg-primary text-white">
        <h5>Sala publica</h5>
      </div>
      <div class="chat-container" id="chat-container">
        <div class="" :key="message" v-for="message in messages"> 
          <div v-if="message.user == $route.params.id" class="row justify-content-end">
            <div class="my-message">
              {{message.msg}}
            </div>
          </div>
          
          <div v-else class="row justify-content-start">
            <div class="other-message">
              {{message.user}} : {{message.msg}}
            </div>
          </div>
        </div>
      </div>
      <div class="card-footer bg-primary">
        <div class="form-row justify-content-center">
          <div class="form-group col-md-10">
            <input type="text" v-model="message_to" @keydown.enter="sendMessage()" class="form-control" id="">
          </div>
          <div class="form-group col-md-2">
            <button class="btn btn-light" @click="sendMessage()">Enviar</button>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import {ChatService} from '../services/chat-service';
export default {
    name:'Chat',
    data:()=>{
      return {
        message_to:'',
        messages:[],
        chatService:new ChatService(),
        
      }
    },
    methods:{
      sendMessage(){
        this.chatService.sendMessage({
               msg: this.message_to,
               user: this.$route.params.id
          });
        this.message_to = '';
      }
    },
    mounted(){
      this.chatService.getMessages()
              .subscribe((message) => {
                  this.messages.push(message);
                  
              });
    },
    updated(){
      let container = this.$el.querySelector("#chat-container");
      container.scrollTop = container.scrollHeight;
    }
}
</script>

<style  scoped>
.chat-container{
  max-height: 400px;
  min-height: 400px;
  overflow-y: scroll;
  overflow-x: hidden;
}
.chat-container .my-message{
  text-align: left;
  align-items: flex-end;
  display: flexbox;
  margin-right: 20px ;
  margin-left: 20px;
  margin-top: 10px;
  margin-bottom: 5px;
  padding: 5px 10px;
  max-width: 700px;
  background: #22dddd;
  border-radius: 10px;
  color: #fff;
  
}
.chat-container .other-message{
  text-align: left;
  align-items: flex-end;
  display: flexbox;
  margin-right: 20px ;
  margin-left: 20px;
  margin-top: 10px;
  padding: 5px 10px;
  max-width: 700px;
  background: #c4e4e4;
  border-radius: 10px;
  margin-bottom: 5px;
}
</style>