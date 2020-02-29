<template>
    <div id="open-files">
        <Title title="Open Files"/>
        <section class="section">
            <div class="container">
                <nav class="breadcrumb" aria-label="breadcrumbs">
                <ul>
                    <li><nuxt-link :to="{patd: '/'}">PorphyStruct</nuxt-link></li>
                    <li><nuxt-link :to="{path: '/manual'}">Manual</nuxt-link></li>
                    <li class="is-active"><nuxt-link :to="{path: '/manual/open-files'}">Open Files</nuxt-link></li>
                </ul>
                </nav>
                <div class="columns is-multiline">
                <div class="column is-half">
                <h3 class="title is-4">Supported Files</h3>
                <p class="has-text-justified">
                    PorphyStruct supports a variety of file formats used in chemistry. These include crystallographic 
                    information files (CIF), XYZ files and MOL2 files. Put your molecule to be analyzed in one of these 
                    file formats before use. We recommend the CIF format for molecular structures from single crystal diffraction 
                    and the XYZ format for molecular structures from theoretical calculations (e.g. DFT).
                </p>
               <h3 class="title is-4 m-t-50">Open Files</h3>
                <p  class="has-text-justified">
                   After you have started the program, the user interface opens. First click on "Open" to open a new dialog. This dialog contains a 
                   short description of the available file formats. Right below you will find a list of the macrocycles: Corrole, Porphyrin, Norcorrole, Corrphycene 
                   &amp; Porphycene. Select the desired macrocycle so that it appears with a red frame. Then select the file to be opened by clicking on "Select File".
                </p>
                <p class="has-text-justified m-t-20">
                   After opening the file a 3D representation of your molecule appears in the right column. In the left column the 
                    coordinates of the atoms are listed. In the best case, the path shown in blue in the 3D representation of your molecule 
                    now matches the path to be analysed. means the complete fundamental structure can be seen with bonds marked in blue.
                    In this case you can start the analysis.
                </p>
                </div>
                <figure class="image column is-half">
                    <img src="/img/screen/open.png" alt="screenshot" />
                    <figcaption>The open file dialog with Porphyrin beeing selected.</figcaption>
                </figure>
                
                <div class="column is-half">
                    <h3 class="title is-4 m-t-50">Choose the right type</h3>
                    <p  class="has-text-justified">
                    But my molecule is not a Corrole, Porphyrin, Norcorrole, Corrphycene or Porphycene... No problem. Here's a little guide as to what type you should choose.
                    Your macrocycle's not there or you want to suggest other types? Just contact us. 
                    <br/><br/><strong>Note</strong>: The simulation is based on metal complexes of the individual types. In the case of e.g. open-chain derivatives or derivatives 
                    whose vibration standard modes deviate significantly, it is possible that the simulation will not yield satisfactory results. However, a displacement 
                    diagram can be created in any case.
                    </p>                    
                </div>   
                <div class="column is-half table-container">
                    <table class="table is-bordered is-striped table is-fullwidth m-t-50">
                        <thead>
                            <tr>
                                <th>Corrole</th><th>Porphyrin</th><th>Norcorrole</th><th>Corrphycene</th><th>Porphycene</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Corrole</td><td>Porphyrin</td><td>Norcorrole</td><td>Corrphycene</td><td>Porphycene</td>
                            </tr>                            
                            <tr>
                                <td>5-/10-Isocorrole</td><td>Isoporphyrin</td><td>Norbiladien</td><td></td><td></td>
                            </tr>                                                    
                            <tr>
                                <td>Heterocorrole</td><td>Heteroporphyrin</td><td></td><td></td><td></td>
                            </tr>                                                                             
                            <tr>
                                <td>N-Confused Corrole</td><td>N-Confused Porphyrin</td><td></td><td></td><td></td>
                            </tr>                                                                                                        
                            <tr>
                                <td>Corrin</td><td>Calix[4]pyrrole</td><td></td><td></td><td></td>
                            </tr>                                                                                                        
                            <tr>
                                <td>Bilane</td><td>Chlorin</td><td></td><td></td><td></td>
                            </tr>                                                                                                      
                            <tr>
                                <td>Bilene</td><td>Phtalocyanine</td><td></td><td></td><td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>                       
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Title from '@/components/Title';
export default {
    name: 'OpenFiles',
    components:{
        Title
    }
}
</script>