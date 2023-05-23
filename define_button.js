// Create a new notebook using the Notebook API
Jupyter.notebook.contents.newUntitled({ type: 'notebook' }).then((data) => {
  const newNotebookPath = data.path;

  // Save the notebook structure to the new notebook file
  Jupyter.notebook.contents.save({
    type: 'notebook',
    path: newNotebookPath,
    content: notebookJSON,
  }).then(() => {
    // Notebook creation successful
    console.log('New notebook created:', newNotebookPath);
  }).catch((error) => {
    // Error occurred while saving the new notebook
    console.error('Error saving new notebook:', error);
  });
}).catch((error) => {
  // Error occurred while creating a new untitled notebook
  console.error('Error creating new notebook:', error);
});