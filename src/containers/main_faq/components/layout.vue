<template>
  <div class="container">
    <PageHeader title="FAQ" />
    <p class="lead">
       <a href="https://github.com/rcos/intro" target='_blank'>RCOS Intro</a>
    </p>
      If you have any questions not answered below, please contact a <a href="mailto:coordinators@rcos.io">course coordinator.</a>
      <br>
    </p>

    <div role="tablist">
      <b-card no-body class="mb-1" v-for="faq in questions" :key="faq.id">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-btn block href="#" v-b-toggle="faq.id" variant="light">{{faq.label}}</b-btn>
        </b-card-header>
        <b-collapse :id="faq.id" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <p class="card-text" v-html="faq.body"></p>
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
      questions: [
        {
          id: 'faq1',
          label: 'How can I get started?',
          body: 'Take a look at our list of active open source <a href="/#/projects">projects</a> and find one that interests you. For each project, you will find a link to the repository on GitHub. Read over the current documentation and install any dependencies you may need to start developing!'
        },
        {
          id: 'faq2',
          label: 'What is RCOS?',
          body: 'RCOS, or Rensselaer Center for Open Source, is a large community of open source developers who develop code to solve societal problems. The goal of RCOS is to provide a creative, intellectual and entrepreneurial outlet for students to use the latest open-source software platforms to develop applications that solve societal problems.<br/><br/> For more information, check out <a href="https://github.com/rcos/intro" target="_blank">rcos/intro</a> on GitHub.</code>'
        },
        {
          id: 'faq3',
          label: 'How do I join RCOS?',
          body: 'If youre an RPI student, hop in on our first meeting of the semester or join <a href="https://rcos.slack.com/messages" target="_blank">our slack</a> and message a faculty coordinator (@mskmoorthy or @turnew2).<br/><br/>If you are looking to get involved with RCOS as a member outside of RPI, email a coordinator to get setup on the rcos slack. In the meantime, you can create an account and fill in your profile on <a href="https://rcos.io" target="_blank">Observatory</a>.'
        },
        {
          id: 'faq4',
          label: 'RCOS Slack channel',
          body: 'We have a Slack channel available at <a href="https://rcos.slack.com" target="_blank">rcos.slack.com</a>.'
        },
        {
          id: 'faq5',
          label: 'Code Of Conduct',
          body: 'We have a code of conduct <a href="https://github.com/rcos/intro/blob/master/docs/code_of_conduct.md" target="_blank">here</a>.'
        }
      ]
    }
  }
}
</script>
