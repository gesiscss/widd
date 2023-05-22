define(['base/js/namespace', 'base/js/promises', 'base/js/dialog'], function(Jupyter, promises, dialog) {

    // Define the search strings
    var searchStrings = ['string1', 'string2'];
  
    // Define the function to search for matching cells and export them to Markdown
    function exportMatchingCells() {
      // Get the current notebook
      var notebook = Jupyter.notebook;
      // Create a MarkdownExporter object
      var exporter = new Jupyter.MarkdownExporter();
      // Create a list to store the matching cells
      var matchingCells = [];
      // Iterate over the cells in the notebook
      for (var i=0; i<notebook.ncells(); i++) {
        var cell = notebook.get_cell(i);
        // Check if the cell contains any of the search strings
        if (searchStrings.some(function(searchString) {
          return cell.get_text().indexOf(searchString) !== -1;
        })) {
          // If the cell matches, add it to the list of matching cells
          matchingCells.push(cell);
        }
      }
      // Create a new Markdown document
      var markdown = '';
      promises.when.all(matchingCells.map(function(cell) {
        // Export the cell to Markdown
        return exporter.from_notebook_node(cell).then(function(result) {
          markdown += result[0];
        });
      })).then(function() {
        // Display a dialog to save the Markdown document
        dialog.save(notebook.notebook_name, 'md', markdown);
      });
    }
  
    // Add a button to the toolbar that exports matching cells to Markdown
    function addExportButton() {
      if (!Jupyter.toolbar) {
        // If the toolbar doesn't exist yet, wait and try again
        setTimeout(addExportButton, 100);
        return;
      }
      // Create the button element
      var button = $('<button/>').addClass('btn btn-default')
        .attr('title', 'Export matching cells to Markdown')
        .html('Export to Markdown')
        .click(function() {
          exportMatchingCells();
        });
      // Add the button to the toolbar
      Jupyter.toolbar.add_buttons_group([button]);
    }
  
    // Call the addExportButton function when the notebook is fully loaded
    $([Jupyter.events]).on('notebook_loaded.Notebook', function() {
      addExportButton();
    });
  
  });