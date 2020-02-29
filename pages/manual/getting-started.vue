<template>
    <div id="getting-started">
        <manual-header title="Getting Started"/>
            <section class="section">
                <div class="container">
                <div class="columns">
                <div class="column">
                <h3 class="title is-4">Introduction</h3>
                <p class="has-text-justified">
                    PorphyStruct is an open source software for the analysis of tetrapyrrolic macrocycles. PorphyStruct is able 
                    to generate deflection diagrams and simulate them based on the energetically lowest vibrational normal modes.<br/>
                    PorphyStruct is written based on <strong>.NET Core 3.1</strong>. Although .NET Core is platform-independent, the graphical user interface 
                    is written based on Windows Present Foundation (WPF), so PorphyStruct currently runs on Windows only. However, 
                    this will change in the future.
                </p>
               <h3 class="title is-4 m-t-50">Installation</h3>
                <p  class="has-text-justified">
                    No installation is necessary. PorphyStruct is downloaded as a <em>"self-containing app"</em> in one .exe file. 
                    This has a relatively large file size (&lt; 200 MB), as .NET Core is already implemented in this file, so no separate installation of 
                    .NET is necessary. Simply place the file in a folder of your choice and run PorphyStruct.
                </p>
                </div>
                <figure class="image column">
                    <img src="/img/screen/start.png" alt="screenshot" />
                    <figcaption>The graphical user interface of PorphyStruct.</figcaption>
                </figure>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import ManualHeader from '@/components/ManualHeader';
export default {
    name: 'GettingStarted',
    components:{
        ManualHeader
    }
}
</script>