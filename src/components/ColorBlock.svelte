<script>
  export let color = "unset";
</script>

<style>
  div {
    width: 40px;
    height: 40px;
  }

  .unset {
    outline: 2px solid gray;
  }
</style>
<div class:unset={color === "unset"} style="background-color: {color}"></div>