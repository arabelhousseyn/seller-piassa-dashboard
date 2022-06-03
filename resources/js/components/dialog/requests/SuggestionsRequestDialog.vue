<template>
    <div class="suggestions">
        <v-dialog
            v-model="dialog"
            persistent
            max-width="600"
        >
            <v-card>
                <v-card-title class="text-h5">
                    Suggestions
                    <v-spacer></v-spacer>
                    add
                </v-card-title>
                <v-card-text>
                    <v-simple-table>
                        <template v-slot:default>
                            <thead>
                            <tr>
                                <th class="text-left">
                                    Marque
                                </th>
                                <th class="text-left">
                                    Prix
                                </th>
                                <th class="text-left">
                                    Disponible à
                                </th>
                                <th class="text-left">
                                    Pris à
                                </th>
                                <th class="text-left">
                                    Livré à
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr
                                v-for="(suggestion,index) in suggestions"
                                :key="index"
                            >
                                <td>{{ suggestion.suggestion.mark }}</td>
                                <td>{{ suggestion.suggestion.price }}</td>
                                <td>{{ suggestion.suggestion.available_at }}</td>
                                <td>{{ suggestion.suggestion.taken_at }}</td>
                                <td>{{ suggestion.suggestion.delivered_at }}</td>
                            </tr>
                            </tbody>
                        </template>
                    </v-simple-table>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="green darken-1"
                        text
                        @click="close"
                    >
                        Cancel
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    props : ['suggestions','dialog'],
    data : ()=>({

    }),
    methods : {
      close()
      {
          this.$emit('close')
      }
    },
    mounted() {

    }
}
</script>
