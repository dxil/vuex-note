<template >
  <div id="notes-list">
    <div id="list-header">
      <h2>Notes | <a href="http://dingxl.com" target="_blank">dingxl.com</a></h2>
      <div class="btn-group btn-group-justified" role="group">
        <!-- show all -->
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-default"
            @click="toogleShow('all')"
            :class="{active: show === 'all'}">All Notes
          </button>
        </div>

        <!-- show favorites  -->
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-default"
            @click="toogleShow('favorite')"
            :class="{active: show === 'favorite'}">Favorite
          </button>
        </div>
      </div>
    </div>

    <!-- 渲染笔记列表 -->
    <div class="container">
      <div class="list-group">
        <a v-for="note in filteredNotes"
          class="list-group-item" href="#"
          :class="{active: activeNote === note}"
          @click="updateActiveNote(note)">
          <h4 class="list-group-item-heading">
            {{note.title.trim().substring(0,30)}}
          </h4>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import { updateActiveNote, updateShow } from '../vuex/actions';
  import { show, filteredNotes, activeNote } from '../vuex/getters';

  export default {
    vuex: {
      getters: {
        show,
        filteredNotes,
        activeNote,
      },
      actions: {
        updateActiveNote,
        updateShow,
      },
    },
    methods: {
      toogleShow(show) { // eslint-disable-line
        this.updateShow(show);
      },
    },
  };
</script>

<style lang="scss" scoped>
  #notes-list {
    float: left;
    width: 300px;
    height: 100%;
    background-color: #f5f5f5;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
  }

  #list-header {
    padding: 5px 25px 25px 25px;

    h2 {
      font-weight: 300;
      text-transform: uppercase;
      text-align: center;
      font-size: 22px;
      padding-bottom: 8px;
    }
    a {
      text-decoration: none;
      color: inherit;
    }
  }

  #notes-list .container {
    height: calc(100% - 137px);
          max-height: calc(100% - 137px);
          overflow: hidden;
    width: 100%;
    padding: 0;

    .list-group-item {
      border: 0;
      border-radius: 0;
    }
  }

  .list-group-item-heading {
    font-weight: 300;
    font-size: 15px;
  }

</style>
