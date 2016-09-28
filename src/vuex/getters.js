// 获取 noteList , 这里将会根据state.show 的状态做数据过滤
export const filteredNotes = (state) => { // eslint-disable-line
  if (state.show === 'all') {
    return state.notes || {};
  } else if (state.show === 'favorite') {
    return state.notes.filter(note => note.favorite) || {};
  }
};

// 获取列表的展示状态 all or favorite
export const show = (state) => state.show;


// 获取当前激活 Note
export const activeNote = (state) => state.activeNote;
