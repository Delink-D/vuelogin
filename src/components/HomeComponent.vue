<template>
  <div class='home' id="app">
    <md-app>
      <md-app-toolbar class="md-primary">
        <span class="md-title">Welcome Back {{currentUser}}</span>
      </md-app-toolbar>

      <!-- drawer panel -->
      <md-app-drawer md-permanent="clipped">
        <md-list>

          <md-list-item>
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text">Inbox</span>
          </md-list-item>

          <md-list-item>
            <md-icon>send</md-icon>
            <span class="md-list-item-text">Sent Mail</span>
          </md-list-item>

          <md-list-item>
            <md-icon>delete</md-icon>
            <span class="md-list-item-text">Trash</span>
          </md-list-item>

          <md-list-item>
            <md-icon>error</md-icon>
            <span class="md-list-item-text">Spam</span>
          </md-list-item>

          <md-list-item>
            <md-icon>group_add</md-icon>
            <span class="md-list-item-text">
              <router-link to="/home/signup" tag="li">
                Add user
              </router-link>
            </span>
          </md-list-item>

          <md-list-item>
            <md-icon>lock</md-icon>
            <span class="md-list-item-text" v-on:click='logout'>Sign Out</span>
          </md-list-item>

          <md-divider></md-divider>

          <md-list-item>
            <span class="md-list-item-text md-caption">Version {{version}}</span>
          </md-list-item>

        </md-list>
      </md-app-drawer>

      <!-- main content area -->
      <md-app-content>

        <router-view/>

        <!-- logout snackbar -->
        <md-snackbar :md-active.sync="errorLogout">
          <span>Error: Can't Sign Out now!</span>
          <md-button class="md-accent" @click="errorLogout = false">Close</md-button>
        </md-snackbar>

      </md-app-content>

    </md-app>
  </div>
</template>

<script>
  import firebase from 'firebase'
  import version from '../../package'

  export default {
    name: 'HomeComponent',
    data: () => ({
      currentUser: firebase.auth().currentUser.email,
      version: version.version,
      successLogout: false,
      errorLogout: false
    }),
    methods: {
      logout: function () {
        /** logout here */
        firebase.auth().signOut()
        .then(() => {
          this.$router.replace('login')
        })
        .catch(err => {
          this.errorLogout = true
        })
      }
    }
  }
</script>

<style scoped>
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }
  .md-list-item-text {
    cursor: pointer;
  }
</style>