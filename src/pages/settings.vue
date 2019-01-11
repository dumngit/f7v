<template>
  <f7-page>
    <f7-navbar :title="$ml.get('settingsTitle')" back-link="Back"></f7-navbar>

    <f7-block-title>{{$ml.get('settingsBlockTitle')}}</f7-block-title>
    <f7-block>
      <f7-segmented raised tag="p">
        <f7-button
                v-for="lang in $ml.list"
                :key="lang"
                @click="$ml.change(lang)"
                :active="$ml.current === lang"
                v-text="lang"></f7-button>
      </f7-segmented>

      <p class="text-align-center text-color-gray">{{$ml.get('settingsTip')}}: {{$ml.get('languageName')[$ml.current]}}</p>
    </f7-block>

  </f7-page>
</template>

<script>
    export default {}
</script>