<template>
<div id="manual">
    <Title title="User Manual" subtitle="" />
    <section class="section">
        <div class="container">
            <div class="columns is-multiline">
                <div class="column is-half">
                    <nuxt-link :to="{path: '/manual/getting-started'}" class="media">
                        <figure class="media-left">
                            <p class="image is-64x64">
                                <b-icon pack="fas" icon="rocket" custom-size="fa-4x" class="is-rounded image is-64x64"/>
                            </p>
                        </figure>
                        <div class="media-content">
                            <h3 class="title is-4">Getting Started</h3>
                            <p class="subtitle is-5">A short introduction in how to set up PorphyStruct</p>
                        </div>
                    </nuxt-link>
                </div>
                 <div class="column is-half">
                    <nuxt-link :to="{path: '/manual/open-files'}" class="media">
                        <figure class="media-left">
                            <p class="image is-64x64">
                                <b-icon pack="fas" icon="folder-open" custom-size="fa-4x" class="is-rounded image is-64x64"/>
                            </p>
                        </figure>
                        <div class="media-content">
                            <h3 class="title is-4">Open Files</h3>
                            <p class="subtitle is-5">A brief overview which file types are supported and how to select the right cycle framework</p>
                        </div>
                    </nuxt-link>
                 </div>
                <div class="column is-half">
                    <nuxt-link :to="{path: '/manual/analysis'}" class="media">
                        <figure class="media-left">
                            <p class="image is-64x64">
                                <b-icon pack="fas" icon="flask" custom-size="fa-4x" class="is-rounded image is-64x64"/>
                            </p>
                        </figure>
                        <div class="media-content">
                            <h3 class="title is-4">Analysis</h3>
                            <p class="subtitle is-5">How to analyze the loaded molecule with PorphyStruct</p>
                        </div>
                    </nuxt-link>
                </div>
                 <div class="column is-half">
                    <nuxt-link :to="{path: '/manual/simulation'}" class="media">
                        <figure class="media-left">
                            <p class="image is-64x64">
                                <b-icon pack="fas" icon="magic" custom-size="fa-4x" class="is-rounded image is-64x64"/>
                            </p>
                        </figure>
                        <div class="media-content">
                            <h3 class="title is-4">Simulation</h3>
                            <p class="subtitle is-5">Starting a simple simulation and explaination of the algorithm</p>
                        </div>
                    </nuxt-link>
                </div>
                 <div class="column is-half">
                    <nuxt-link :to="{path: '/manual/save'}" class="media">
                        <figure class="media-left">
                            <p class="image is-64x64">
                                <b-icon pack="far" icon="save" custom-size="fa-4x" class="is-rounded image is-64x64"/>
                            </p>
                        </figure>
                        <div class="media-content">
                            <h3 class="title is-4">Export Results</h3>
                            <p class="subtitle is-5">What filetypes can PorphyStruct export to and which one to choose</p>
                        </div>
                    </nuxt-link>
                </div>
                <div class="column is-half">
                    <nuxt-link :to="{path: '/manual/compare'}" class="media">
                        <figure class="media-left">
                            <p class="image is-64x64">
                                <b-icon pack="fas" icon="code-branch" custom-size="fa-4x" class="is-rounded image is-64x64"/>
                            </p>
                        </figure>
                        <div class="media-content">
                            <h3 class="title is-4">Compare Data</h3>
                            <p class="subtitle is-5">This steps are needed to compare two or more macrocycles of the same framework</p>
                        </div>
                    </nuxt-link>
                </div> 
                <div class="column is-half">
                    <nuxt-link :to="{path: '/manual/settings'}" class="media">
                        <figure class="media-left">
                            <p class="image is-64x64">
                                <b-icon pack="fas" icon="cogs" custom-size="fa-4x" class="is-rounded image is-64x64"/>
                            </p>
                        </figure>
                        <div class="media-content">
                            <h3 class="title is-4">Settings</h3>
                            <p class="subtitle is-5">Who is who of all settings in PorphyStruct</p>
                        </div>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
import Title from '@/components/Title';
export default {
  name: 'manual',
  components: {
      Title
   }
}
</script>


<style scoped lang="scss">
.media{
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    border-radius: 5px;
    transition: all 0.2s ease;
    &:hover{
        background: darken(#fff, 10%);
    }
}
</style>