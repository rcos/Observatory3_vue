<template>
  <footer class="footer">
    <div class="container-fluid bg-dark text-light">
      <div class="row">

        <div class="col-sm-6">
          Built with
          <i class="fa fa-heart text-danger"></i>
          by
          <a href="https://github.com/rcos" class='text-danger' target='_blank'>RCOS</a>
          at
          <a href="https://rpi.edu" target='_blank' class='text-danger'>RPI</a>.
        </div>

        <div class="col-sm-6 text-right">
          <small class='text-muted'>
            <a href="https://github.com/rcos/observatory-server" target='_blank' class='text-muted'>
              <i class="fa fa-fw fa-github fa-lg"></i>
            </a>
          </small>
        </div>

      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style type="text/css">
  .footer {
    font-size: 75%;
    z-index: 1000;
    position: fixed;
    width: 100%;
    bottom: 0;
    line-height: 2rem;
  }
</style>
