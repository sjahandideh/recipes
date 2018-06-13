// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'semantic-ui-less'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import AWSAppSyncClient from 'aws-appsync'
import VueApollo from 'vue-apollo'
import AppSyncConfig from '../config/aws-exports'

const config = {
  url: AppSyncConfig.graphqlEndpoint,
  region: AppSyncConfig.region,
  auth: {
    type: AppSyncConfig.authenticationType,
    apiKey: AppSyncConfig.apiKey,
  }
}
const options = {
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    }
  }
}

const client = new AWSAppSyncClient(config, options)

const appsyncProvider = new VueApollo({
  defaultClient: client
})

Vue.use(VueApollo)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  provide: appsyncProvider.provide(),
  template: '<App/>'
})
