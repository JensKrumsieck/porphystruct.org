<template>
    <div id="analysis">
        <manual-header title="Analysis"/>
            <section class="section">
                <div class="container">
                <div class="columns is-multiline">
                <div class="column is-half">
                <h3 class="title is-4">Correction of the identifiers</h3>
                <p class="has-text-justified">
                    If the identifiers are set incorrectly, your molecule is not yet correctly recognized. You can see this 
                    from the fact that the basic body is not marked blue. 
                    You have several options to ensure recognition. The easiest option is to click on "Detect". An algorithm 
                    based on graph theory tries to find your molecule and assign the atoms to the selected macrocyclic structure. 
                    If this should fail unexpectedly, you have to set the identifiers manually. You can edit them in the table in the left column. 
                    Make sure that the numbering is identical with the following picture.
                </p>
                <figure class="image m-t-20">
                    <img src="/img/screen/identifiers.png" alt="screenshot" />
                    <figcaption>Convention of Identifiers used by PorphyStruct.</figcaption>
                </figure>
                <p class="m-t-20 has-text-justified">
                    Heteroatoms must also be renamed - internally, however, the atom type remains saved. For all corpus atoms, check 
                    "Is Macrocycle". In the 3D view you can see live how the assignment changes. If it is not updated automatically, click on 
                    "Refresh".
                </p>
                </div>
                <figure class="image column is-half">
                    <img src="/img/screen/detection.png" alt="screenshot" />
                    <figcaption>The 3D Representation shows whether your configuration is ok. The corrole on the left is properly set up while the right one is not.</figcaption>
                </figure>
                <div class="column is-half">
                <h3 class="title is-4">Analysis</h3>
                <p class="has-text-justified">
                    When the macro cycle detection is successfully completed, you can create the deflection diagram by clicking on "Analyze". Yes, that is all you need 
                    to do for this. The appearance can be configured in the options. You can further configure your analysis with "Normalize" and "Invert".
                </p>
                </div>
                <figure class="image column is-half">
                    <img src="/img/screen/analysis.png" alt="screenshot" />
                    <figcaption>The graphical user interface after analysis is finished.</figcaption>
                </figure>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import ManualHeader from '@/components/ManualHeader';
export default {
    name: 'Analysis',
    components:{
        ManualHeader
    }
}
</script>