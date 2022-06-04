
<script>
import { Line } from 'vue-chartjs'

export default {
    extends: Line,
    mounted () {

        this.renderChart({
            labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
            datasets: [
                {
                    label: `Revenu par année ${new Date().getFullYear()}- ${new Date().getFullYear() + 1} `,
                    backgroundColor: '#e85810',
                    data: this.$store.state.data.icomes_by_month
                }
            ]
        })
    }
}
</script>
