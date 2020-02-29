<template>
    <div id="simulation">
        <Title title="Simulation"/>
        <section class="section">
            <div class="container">
                <nav class="breadcrumb" aria-label="breadcrumbs">
                <ul>
                    <li><nuxt-link :to="{path: '/'}">PorphyStruct</nuxt-link></li>
                    <li><nuxt-link :to="{path: '/manual'}">Manual</nuxt-link></li>
                    <li class="is-active"><nuxt-link :to="{path: '/manual/simulation'}">Simulation</nuxt-link></li>
                </ul>
                </nav>
                <div class="columns is-multiline">
                <div class="column is-half">
                <h3 class="title is-4">Simulation</h3>
                <p class="has-text-justified">
                   After you have created an analysis, you can open the simulation window by clicking on "Simulate". 
                   Here you will get an overview of the simulation parameters and you can switch individual modes on or off. 
                   lick on "Start" to start the simulation algorithm. Due to the many degrees of freedom the error hyper surface is quite coarse. 
                   Therefore an endless simplex is used. When the simplex algorithm has converged, new random parameters are selected and also 
                   optimized using simplex. This works very well and very fast. Click „Stop“ if you are satisfied with the simulation result. <br/>
                   With a click on "Finalize Simulation" you transfer the simulation into the main window.
                </p>
                <p class="has-text-justified m-t-20">
                    The standards used for the simulation come from DFT calculations of the individual frameworks (ORCA 4.1.1, B3LYP/def2-SVP). 
                    For this purpose, the unsubstituted metal complexes were geometry-optimized - then the normal modes were obtained from the frequency calculations. 
                    For the Norcorrole, a planar transition state had to be selected as the starting point.
                    <ul class="m-t-20">
                        <li>Porpyrin: Cu (II)</li>
                        <li>Corrole: Pd (II) (as anion)</li>
                        <li>Norcorrole: Ni (II)</li>
                        <li>Corrphyce: Zn(II)</li>
                        <li>Porphycene: Zn(II)</li>
                    </ul>
                </p>
                
                <p class="has-text-justified m-t-20">
                    The table below shows a skeleton representation of the used normal modes for each macrocyclic framework. You can use these images in your 
                    publications, etc. if you provide credits to PorphyStruct.
                </p>
                </div>
                <figure class="image column is-half">
                    <img src="/img/screen/sim.png" alt="screenshot" />
                    <figcaption>A Running Simulation.</figcaption>
                </figure>
                </div>
                <div class="table-container">
                    <table class="table modes">
                        <thead>
                            <tr>
                                <th></th><th>Corrole</th><th>Porphyrin</th><th>Norcorrole</th><th>Corrphycene</th><th>Porphycene</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Doming</td>
                                <td><figure class="image"><img src="/img/modes/dom_cor.png" alt="" /><figcaption>42 cm<sup>-1</sup></figcaption></figure></td>                                
                                <td><figure class="image"><img src="/img/modes/dom_por.png" alt="" /><figcaption>90 cm<sup>-1</sup></figcaption></figure></td>
                                <td><figure class="image"><img src="/img/modes/dom_nc.png" alt="" /><figcaption>-26 cm<sup>-1</sup></figcaption></figure></td>                                
                                <td><figure class="image"><img src="/img/modes/dom_cc.png" alt="" /><figcaption>60 cm<sup>-1</sup></figcaption></figure></td>                                
                                <td><figure class="image"><img src="/img/modes/dom_pc.png" alt="" /><figcaption>46 cm<sup>-1</sup></figcaption></figure></td>
                            </tr>                            
                            <tr>
                                <td>Saddling</td>
                                <td><figure class="image"><img src="/img/modes/sad_cor.png" alt="" /><figcaption>75 cm<sup>-1</sup></figcaption></figure></td>                                
                                <td><figure class="image"><img src="/img/modes/sad_por.png" alt="" /><figcaption>50 cm<sup>-1</sup></figcaption></figure></td>
                                <td><figure class="image"><img src="/img/modes/sad_nc.png" alt="" /><figcaption>88 cm<sup>-1</sup></figcaption></figure></td>                                
                                <td><figure class="image"><img src="/img/modes/sad_cc.png" alt="" /><figcaption>55 cm<sup>-1</sup></figcaption></figure></td>                                
                                <td><figure class="image"><img src="/img/modes/sad_pc.png" alt="" /><figcaption>63 cm<sup>-1</sup></figcaption></figure></td>
                            </tr>                                                        
                            <tr>
                                <td>Ruffling</td>
                                <td><figure class="image"><img src="/img/modes/ruf_cor.png" alt="" /><figcaption>105 cm<sup>-1</sup></figcaption></figure></td>                                
                                <td><figure class="image"><img src="/img/modes/ruf_por.png" alt="" /><figcaption>54 cm<sup>-1</sup></figcaption></figure></td>
                                <td><figure class="image"><img src="/img/modes/ruf_nc.png" alt="" /><figcaption>140 cm<sup>-1</sup></figcaption></figure></td>                                
                                <td><figure class="image"><img src="/img/modes/ruf_cc.png" alt="" /><figcaption>70 cm<sup>-1</sup></figcaption></figure></td>                                
                                <td><figure class="image"><img src="/img/modes/ruf_pc.png" alt="" /><figcaption>84 cm<sup>-1</sup></figcaption></figure></td>
                            </tr>                                                                                   
                            <tr>
                                <td>Waving</td>
                                <td><figure class="image"><img src="/img/modes/wav_cor.png" alt="" /><figcaption>131/135 cm<sup>-1</sup></figcaption></figure></td>                                
                                <td><figure class="image"><img src="/img/modes/wav1_por.png" alt="" /><figcaption>150 cm<sup>-1</sup></figcaption></figure>
                                    <figure class="image"><img src="/img/modes/wav2_por.png" alt="" /><figcaption>214 cm<sup>-1</sup></figcaption></figure></td>
                                <td><figure class="image"><img src="/img/modes/wav_nc.png" alt="" /><figcaption>95/116 cm<sup>-1</sup></figcaption></figure></td>                                
                                <td><figure class="image"><img src="/img/modes/wav_cc.png" alt="" /><figcaption>139/201 cm<sup>-1</sup></figcaption></figure></td>                                
                                <td><figure class="image"><img src="/img/modes/wav_pc.png" alt="" /><figcaption>123/130 cm<sup>-1</sup></figcaption></figure></td>
                            </tr>                                                                                                               
                            <tr>
                                <td>Propellering</td>
                                <td><figure class="image"><img src="/img/modes/pro_cor.png" alt="" /><figcaption>342 cm<sup>-1</sup></figcaption></figure></td>                                
                                <td><figure class="image"><img src="/img/modes/pro_por.png" alt="" /><figcaption>290 cm<sup>-1</sup></figcaption></figure></td>
                                <td><figure class="image"><img src="/img/modes/pro_nc.png" alt="" /><figcaption>267 cm<sup>-1</sup></figcaption></figure></td>                                
                                <td><figure class="image"><img src="/img/modes/pro_cc.png" alt="" /><figcaption>323 cm<sup>-1</sup></figcaption></figure></td>                                
                                <td><figure class="image"><img src="/img/modes/pro_pc.png" alt="" /><figcaption>317 cm<sup>-1</sup></figcaption></figure></td>
                            </tr> 
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Title from '@/components/Title';
export default {
    name: 'Simulation',
    components:{
        Title
    }
}
</script>
<style scoped>
.modes .image, .modes th{text-align: center;}

</style>