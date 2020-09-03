<template>
    <div>
        {{email}}
    </div>
</template>
<script>
export default {
  props: {
    email: {
      type: Object, required: true
    }
  }
}
</script>
