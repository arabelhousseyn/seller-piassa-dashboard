<template>
    <div class="dashboard">
        <progress-circular-component />
            <header-component />
            <v-main v-if="!isLoading">
                <router-view />
            </v-main>
        <footer-component />
        </div>
</template>

<script>
import ProgressCircularComponent from "../components/ProgressCircularComponent";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import Echo from "laravel-echo";
export default {
    data : () =>({
       isLoading : true,
        event : null
    }),
    components: {FooterComponent, HeaderComponent, ProgressCircularComponent},
    methods : {
        enableNotification(data)
        {
            if(localStorage.getItem('permission') == 'granted')
            {
                let notification = new Notification('Nouvelle demande',{
                    vibrate : true,
                    body : `Nouvelle demande`,
                    badge : ""
                })
                this.$store.commit('INCREMENT_NOTIFICATION',1)
                this.playSound()
                notification.addEventListener('click',()=>{
                    this.$router.push('/home/requests')
                    notification.close()
                })
                window.location.reload()
            }
        },
        playSound()
        {
            let audio = new Audio('http://soundbible.com/mp3/Air Plane Ding-SoundBible.com-496729130.mp3')
            audio.play()
        }
    },
     mounted() {
        if(Notification.permission == 'denied')
        {
            let permission = Notification.requestPermission();
            localStorage.setItem('permission',permission)
        }else{
            localStorage.setItem('permission','granted')
        }

        axios.defaults.headers.common['Authorization'] = `Bearer ${this.$store.state.user.token}`
        axios.get('/sanctum/csrf-cookie').then(res =>{
            axios.get('/api/company/data')
            .then(e =>{
                this.isLoading = false
                this.$store.commit('SET_DATA',e.data)
            }).catch(err => {
                this.$toast.open({message : 'Erreur dans serveur veuillez réessayer',type : 'error'})
            })
        })

         var pusher = new Pusher(process.env.MIX_PUSHER_APP_KEY, {
             cluster: process.env.MIX_PUSHER_APP_CLUSTER
         });
        this.event = `request-event-${this.$store.state.user.id}`
            var channel = pusher.subscribe('seller');
            channel.bind(this.event , this.enableNotification);

    }
}
</script>
