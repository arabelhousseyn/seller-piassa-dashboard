<template>
    <v-dialog
        v-model="dialog"
        persistent
        max-width="600px"
    >
        <v-card>
            <v-card-title>
                <span class="text-h5">Map</span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-row
                        v-if="!show"
                        class="fill-height"
                        align-content="center"
                        justify="center"
                    >
                        <v-col cols="6">
                            <v-progress-linear
                                color="primary accent-4"
                                indeterminate
                                rounded
                                height="6"
                            ></v-progress-linear>
                        </v-col>
                    </v-row>
                    <div id="map"></div>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="blue darken-1"
                    text
                    @click="close"
                >
                    Fermer
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>


<style>
#map{
    width: 500px;
    height: 500px;
}
</style>

<script>
export default {
    props : ['lat','long','dialog'],
    data : ()=>({
        show : false,
    }),
    methods : {
        initMap()
        {
            var directionsService = new google.maps.DirectionsService();
            var directionsRenderer = new google.maps.DirectionsRenderer();
            var chicago = new google.maps.LatLng(36.7538, 3.0588);
            var mapOptions = {
                zoom:7,
                center: chicago
            }
            var map = new google.maps.Map(document.getElementById('map'), mapOptions);
            directionsRenderer.setMap(map);

            var request = {
                origin: this.lat,
                destination: this.long,
                travelMode: 'DRIVING'
            };

            directionsService.route(request, function(result) {
                directionsRenderer.setDirections(result);
            });
        },
        close()
        {
            this.$emit('close')
        }
    },
    mounted() {
        setTimeout(()=>{
            this.show = true
            this.initMap()
        },3000)
    }
}
</script>
