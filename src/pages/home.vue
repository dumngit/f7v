<template>
  <f7-page>
    <f7-navbar>
      <f7-nav-left>
        <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="left"></f7-link>
      </f7-nav-left>
      <f7-nav-title>{{$ml.get('appTitle')}}</f7-nav-title>
    </f7-navbar>
    <f7-block strong>
      <p>{{$ml.get('homeText')}}</p>
    </f7-block>
    <f7-block-title>{{$ml.get('homeNavigation')}}</f7-block-title>
    <f7-list>
      <f7-list-item link="/settings/" :title="$ml.get('settingsTitle')"></f7-list-item>
    </f7-list>

    <f7-block-title>{{$ml.get('homeListTitle')}}</f7-block-title>
    <f7-list>
      <f7-list-item v-for="tech in technologies"
                    :title="tech.name"
                    :badge="tech.part">
      </f7-list-item>
    </f7-list>

  </f7-page>
</template>
<script>
    import Framework7 from 'framework7/framework7.esm.bundle.js';

    export default {
        data() {
            return {
                technologies: []
            }
        },
        mounted: function () {
            let self = this;
            Framework7.request.json('static/data.json', function (result) {
                self.technologies = result.technologies;
            }, function (error) {
                alert('error');
            });
        }
    }
</script>
