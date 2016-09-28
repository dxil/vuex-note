<template>
  <div id="note-editor">
    <!-- <div class="form-group"> -->
      <input type="text" name="title"
        class="title form-control"
        placeholder="请输入标题"
        @input="updateNote"
        v-model="currentNote.title">
      <textarea
        v-model="currentNote.content" name="content"
        class="form-control" placeholder="请输入正文"
        @input="updateNote"></textarea>
    <!-- </div> -->
  </div>
</template>

<script>
  import { editNote } from '../vuex/actions';
  import { activeNote } from '../vuex/getters';

  export default {
    vuex: {
      getters: {
        activeNote,
      },
      actions: {
        editNote,
      },
    },
    computed: {
      // 通过计算属性得到一个对象，更愉快的使用v-model
      currentNote: activeNote,
    },
    methods: {
      // 由于严格模式下不能在模版中直接修改 state中的值，所以间接修改
      updateNote() {
        this.editNote(this.currentNote);
      },
    },
  };
</script>

<style lang="css">
  #note-editor {
    height: 100%;
    margin-left: 380px;
  }

  #note-editor textarea {
    height: calc(100% - 34px);
    border: 0;
    border-radius: 0;
  }

</style>
