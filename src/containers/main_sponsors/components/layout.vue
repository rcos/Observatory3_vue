<template>
  <div class="container">
    <PageHeader title="Sponsors" />

    <div class="row">
      <div class="col-lg-12">
      	<p class="lead"> Below are our sponsors that have supported our open source projects!</p>
        <a href="https://securelb.imodules.com/s/1225/giving/index.aspx?sid=1225&gid=1&pgid=1947&cid=4524&appealcode=WGAFP&_ga=1.191668650.1206279174.1408978267" class="btn btn-primary btn-warning btn-lg gradient" role="button" target="_blank">Donate</a>

        <br><br>

      	<ul class="list-group">
      		<li class="list-group-item" v-for="item in sponsors">
            <div class='container' style="max-width: 500px; max-height: 200px;">
              <a :href="item.url" target="_blank"><img class="img-thumbnail center" :src="item.logo" :alt="item.alt" style="max-height: 50%; max-width: 100%"></a>
              <br>
            </div>
            <div>
              {{ item.name }}
            </div>
      			
      		</li>
      	</ul>
    
     </div>
    </div>
  </div>
</template>

<script>
// TASK - implement sponsors page
// https://github.com/rcos/observatory-client/issues/28
export default {
  name: 'main_sponsors',
  data () {
    return {
      sponsors: [
        { name: 'RedHat', logo: 'http://logo-load.com/uploads/posts/2016-02/1456126060_logo-red-hat.png', alt: 'Red Hat Linux', url: 'https://www.redhat.com/', description: '' },
        { name: 'Open Source Initiative', logo: 'https://opensource.org/files/osi_standard_logo.png', alt: 'Open Source Initiative', url: 'https://opensource.org/', description: '' },
        { name: 'NSF HFOSS', logo: 'http://www.hfoss.org/uploads/images/allgray_notrinity.gif', alt: 'HFOSS', url: 'http://www.hfoss.org/index.php/contact-us', description: '' },
        { name: 'Microsoft', logo: 'https://mtaiit.com/imgs/microsoft.png', alt: 'Microsoft', url: 'https://www.microsoft.com/en-us/', description: '' },
        { name: 'Google', logo: 'https://cdn.vox-cdn.com/uploads/chorus_asset/file/6466217/fixed-google-logo-font.png', alt: 'Google', url: 'https://www.google.com/', description: '' }
      ]
    }
  }
}
</script>

<style>

.btn-primary.gradient {
  background: -moz-linear-gradient(top,  #33a6cc 50%, #0099cc 50%); /* FF3.6+ */
  background: -webkit-gradient(linear, left top, left bottom, color-stop(50%,#33a6cc), color-stop(50%,#0099cc)); /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(top,  #33a6cc 50%,#0099cc 50%); /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(top,  #33a6cc 50%,#0099cc 50%); /* Opera 11.10+ */
  background: -ms-linear-gradient(top,  #33a6cc 50%,#0099cc 50%); /* IE10+ */
  background: linear-gradient(to bottom,  #33a6cc 50%,#0099cc 50%); /* W3C */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#33a6cc', endColorstr='#0099cc',GradientType=0 ); /* IE6-9 */
}

.btn-primary.gradient:hover, .btn-primary.gradient:focus, .btn-primary.gradient:active, .btn-primary.gradient.active, .open > .dropdown-toggle.btn-primary {
  background: -moz-linear-gradient(top,  #66b2cc 50%, #33a6cc 50%); /* FF3.6+ */
  background: -webkit-gradient(linear, left top, left bottom, color-stop(50%,#66b2cc), color-stop(50%,#33a6cc)); /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(top,  #66b2cc 50%,#33a6cc 50%); /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(top,  #66b2cc 50%,#33a6cc 50%); /* Opera 11.10+ */
  background: -ms-linear-gradient(top,  #66b2cc 50%,#33a6cc 50%); /* IE10+ */
  background: linear-gradient(to bottom,  #66b2cc 50%,#33a6cc 50%); /* W3C */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#66b2cc', endColorstr='#33a6cc',GradientType=0 ); /* IE6-9 */
}

.btn-primary.gradient:active, .btn-primary.gradient.active {
  background: -moz-linear-gradient(top,  #267c99 50%, #007299 50%); /* FF3.6+ */
  background: -webkit-gradient(linear, left top, left bottom, color-stop(50%,#267c99), color-stop(50%,#007299)); /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(top,  #267c99 50%,#007299 50%); /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(top,  #267c99 50%,#007299 50%); /* Opera 11.10+ */
  background: -ms-linear-gradient(top,  #267c99 50%,#007299 50%); /* IE10+ */
  background: linear-gradient(to bottom,  #267c99 50%,#007299 50%); /* W3C */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#267c99', endColorstr='#007299',GradientType=0 ); /* IE6-9 */

}

</style>


