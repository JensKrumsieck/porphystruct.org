<template>
    <div id="manual_index">
        <Title title="User Manual" />
        <section class="section container">
            <div class="columns">
                <div class="column is-3">
                    <ManualNav />
                </div>
                <div class="column">
                    <router-view />
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import Title from '@/components/Title';
import ManualNav from '@/components/Manual_Nav';
export default {
  name: 'Manual_Index',
  components: {
      Title,
      ManualNav
   }
}
</script>