<template>
  <f7-page>
    <f7-navbar :title="$ml.get('leftPanelTitle')"></f7-navbar>
    <f7-block strong>
      <p>{{$ml.get('leftPanelText')}}</p>
    </f7-block>
    <f7-list>
      <f7-list-item link="/settings/" :title="$ml.get('settingsTitle')" view="#main-view" panel-close></f7-list-item>
    </f7-list>
  </f7-page>
</template>
<script>
export default {}
</script>