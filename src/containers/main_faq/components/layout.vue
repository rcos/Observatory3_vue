<template>
  <div class="container">
    <PageHeader title="FAQ" />
    <p class="lead">
      If you have any questions not answered below, please contact a course coordinator.
      <br> 
    </p>

	<div role="tablist">
	<b-card no-body class="mb-1">
	  <b-card-header header-tag="header" class="p-1" role="tab">
	    <b-btn block href="#" v-b-toggle.accordion1 variant="light">What is RCOS?</b-btn>
	  </b-card-header>
	  <b-collapse id="accordion1" visible accordion="my-accordion" role="tabpanel">
	    <b-card-body>
	      <p class="card-text">
	        RCOS, or Rensselaer Center for Open Source, is a large community of open source developers who develop code to solve societal problems. The goal of RCOS is to provide a creative, intellectual and entrepreneurial outlet for students to use the latest open-source software platforms to develop applications that solve societal problems.
	        <br> 
	        <br>
	        For more information, check out <a href="https://github.com/rcos/intro" target="_blank">rcos/intro</a> on GitHub.</code>
	      </p>
	    </b-card-body>
	  </b-collapse>
	</b-card>
	<b-card no-body class="mb-1">
	  <b-card-header header-tag="header" class="p-1" role="tab">
	    <b-btn block href="#" v-b-toggle.accordion2 variant="light">How do I join RCOS?</b-btn>
	  </b-card-header>
	  <b-collapse id="accordion2" accordion="my-accordion" role="tabpanel">
	    <b-card-body>
	      <p class="card-text">
	        If you're an RPI student, hop in on our first meeting of the semester or join <a href="https://rcos.slack.com/messages" target="_blank">our slack</a> and message a faculty coordinator (@mskmoorthy or @turnew2).
	        <br>
	        <br>

			If you're looking to get involved with RCOS as a member outside of RPI, email a coordinator to get setup on the rcos slack. In the meantime, you can create an account and fill in your profile on <a href="https://rcos.io" target="_blank">Observatory</a>.
	      </p>
	    </b-card-body>
	  </b-collapse>
	</b-card>
	<b-card no-body class="mb-1">
	  <b-card-header header-tag="header" class="p-1" role="tab">
	    <b-btn block href="#" v-b-toggle.accordion3 variant="light">How can I get started?</b-btn>
	  </b-card-header>
	  <b-collapse id="accordion3" accordion="my-accordion" role="tabpanel">
	    <b-card-body>
	      <p class="card-text">
	        Take a look at our list of active open source <a href="/#/projects">projects</a> and find one that interests you. For each project, you will find a link to the repository on GitHub. Read over the current documentation and install any dependencies you may need to start developing! 
	      </p>
	    </b-card-body>
	  </b-collapse>
	</b-card>
	</div>


 
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: `
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
        richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
        brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
        tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
        assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
        wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
        vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
        synth nesciunt you probably haven't heard of them accusamus labore VHS.
      `
    }
  }
}
</script>




