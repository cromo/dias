<script>
  export let color = "unset";
</script>

<style>
  div {
    width: 40px;
    height: 40px;
  }

  .unset {
    width: 20px;
    height: 20px;
    margin: 10px;
    box-sizing: border-box;
    border: 2px solid gray;
    border-radius: 100%;
  }
</style>
<div class:unset={color === "unset"} style="background: {color}"></div>