<template>
   <div id="Support">
       <Title title="Support" subtitle="How can we help you?" />
        <section class="section container">
        <div class="columns">
            <div class="column">
                <div class="message">
                    <div class="message-body">
                        <h2 class="title is-4">User Manual</h2>
                        <p>
                            The first point of contact for questions is our online manual. All functions and processes are explained 
                            in detail in the manual.
                        </p>
                        <router-link class="m-t-10 button is-danger" :to="{path: '/manual'}">User Manual</router-link>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="message">
                    <div class="message-body">
                        <h2 class="title is-4">Found any bugs?</h2>
                        <p>
                            If you find any bugs in PorphyStruct, please inform us about them. We have set up an issue section 
                            in the GitHub repository for this purpose. There you can also read about known issues and make suggestions 
                            for new features.
                        </p>
                        <a class="m-t-10 button is-danger" href="https://github.com/JensKrumsieck/PorphyStruct/issues">See Issues</a>
                    </div>
                </div>
            </div>            
        </div>
    </section>
   </div>
</template>

<script>
import Title from '@/components/Title';
export default {
  name: 'Support',
  components: {
      Title
   }
}
</script>