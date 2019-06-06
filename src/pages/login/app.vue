<template>
  <div>
    [ - Login.vue ] is created!
  </div>
</template>
<script>
import utils from '../../common/js/aes'
export default {
  data () {
    return {}
  },
  mounted () {
    const test = utils.encrypt('admin')
    console.log(test)
    console.log(utils.decrypt(test))
  }
}
</script>
