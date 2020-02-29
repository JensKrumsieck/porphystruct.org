<template>
    <div id="save">
        <Title title="Export Files"/>
        <section class="section">
            <div class="container">
                <nav class="breadcrumb" aria-label="breadcrumbs">
                <ul>
                    <li><nuxt-link :to="{path: '/'}">PorphyStruct</nuxt-link></li>
                    <li><nuxt-link :to="{path: '/manual'}">Manual</nuxt-link></li>
                    <li class="is-active"><nuxt-link :to="{path: '/manual/save'}">Export Files</nuxt-link></li>
                </ul>
                </nav>
                <div class="columns is-multiline">
                    <div class="column is-half">
                        <h3 class="title is-4">Saving your results</h3>
                        <p class="has-text-justified">
                            Click on "Save" to save your results. Select the desired export templates and click "Save". You can select
                            multiple exports at once.
                            <em>Note:</em> If data for a specific export template is missing you can not select that template.    
                        </p>
                        <ul class=" m-t-20">
                            <li><strong>Graph</strong>: Saves the deflection graph as shown in the main window</li>
                            <li><strong>SimResult</strong>: Graphical representation of the percentage composition of the normal modes</li>
                            <li><strong>ASCII</strong>: Saves the data points of the displayed curves for import into e.g. Origin or use it as Data for a comparison in PorphyStruct</li>
                            <li><strong>Report</strong>: Saves a Results in document format</li>
                            <li><strong>Molecule/Macrocycle ixyz</strong>: molecule/macrocycle in XYZ format with identifiers</li>
                            <li><strong>Result</strong>: Saves an XML file with all Simulation Data</li>
                        </ul>
                    </div>
                    <figure class="image column is-half">
                        <img src="/img/screen/save.png" alt="screenshot" />
                        <figcaption>PorphyStruct's Save file dialog.</figcaption>
                    </figure>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Title from '@/components/Title';
export default {
    name: 'Save',
    components:{
        Title
    }
}
</script>
<style scoped>
.modes .image, .modes th{text-align: center;}

</style>