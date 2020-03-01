<template>
    <div id="compare">
            <section class="section">
                <div class="container">
                <div class="columns is-multiline">
                    <div class="column is-half">
                        <h3 class="title is-4">Compare Macrocycles</h3>
                        <p class="has-text-justified">
                            With a click on "Compare" up to three macro cycles (of the same type) can be compared. 
                            A DAT file of the cycles to be compared must have been saved by PorphyStruct beforehand.  
                        </p>
                    </div>
                    <figure class="image column is-half">
                        <img src="/img/screen/compare.png" alt="screenshot" />
                        <figcaption>You can compare up to three macrocycles of the same type.</figcaption>
                    </figure>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'Compare',
    layout: 'manual',
    pageTitle: 'Compare Data'
}
</script>