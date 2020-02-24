<template>
    <section class="section">
        <nav class="level">
            <div class="level-item has-text-centered">
                <div>
                    <p class="heading">Development Time</p>
                    <p class="title is-2">{{Math.floor((new Date().getTime() - new Date(2019,7,4).getTime())/(60*60*24*1000))}} Days</p>
                </div>
            </div>
            <div class="level-item has-text-centered">
                <div>
                    <p class="heading">Lines of Code</p>
                    <p class="title is-2">> 5000</p>
                </div>
            </div>
            <div class="level-item has-text-centered">
                <div>
                    <p class="heading">Coffees</p>
                    <p class="title is-2">42</p>
                </div>
            </div>            
            <div class="level-item has-text-centered">
                <div>
                    <p class="heading">Supported Macrocycles</p>
                    <p class="title is-2">5</p>
                </div>
            </div>            
            <div class="level-item has-text-centered">
                <div>
                    <p class="heading">Supported Macrocycles</p>
                    <p class="title is-2">5</p>
                </div>
            </div>
        </nav>
    </section>
</template>
<script>
export default {
  name: 'Platform',
  components: {
  }
}
</script>