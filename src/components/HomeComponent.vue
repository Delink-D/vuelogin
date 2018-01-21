<template>
  <div class='home'>
    <md-app>
      <md-app-toolbar class="md-primary">
        <span class="md-title">Welcome Back </span>
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

          <md-divider></md-divider>

          <md-list-item>
            <span class="md-list-item-text md-caption">Version {{version}}</span>
          </md-list-item>

        </md-list>
      </md-app-drawer>

      <!-- main content area -->
      <md-app-content>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
  export default {
    name: 'HomeComponent',
    data: () => ({

    })
  }
</script>

<style>
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }
</style>