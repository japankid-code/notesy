function validateNote(note) {
  if (!note.title || typeof note.title !== 'string') {
    return false;
  }
  return true;
}

module.exports = { validateNote };
