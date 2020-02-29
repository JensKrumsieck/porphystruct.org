<template>
    <div id="settings">
        <Title title="Settings"/>
        <section class="section">
            <div class="container">
                <nav class="breadcrumb" aria-label="breadcrumbs">
                <ul>
                    <li><nuxt-link :to="{path: '/'}">PorphyStruct</nuxt-link></li>
                    <li><nuxt-link :to="{path: '/manual'}">Manual</nuxt-link></li>
                    <li class="is-active"><nuxt-link :to="{path: '/manual/settings'}">Settings</nuxt-link></li>
                </ul>
                </nav>
                <div class="columns is-multiline is-full-width">
                    <div class="column is-half">
                        <h3 class="title is-4">Settings</h3>
                        <p class="has-text-justified">
                            PorphyStruct has a wide range of settings to meet all requirements. All settings and their 
                            consequences are compared here. You can adjust everything from text size and font to single highlighted atoms.
                        </p>
                    </div>
                    <figure class="image column is-half">
                        <img src="/img/screen/settings.png" alt="screenshot" />
                        <figcaption>PorphyStruct has a wide range of settings.</figcaption>
                    </figure>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Title from '@/components/Title';
export default {
    name: 'Settings',
    components:{
        Title
    }
}
</script>