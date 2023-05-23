define([
    'require',
    'jquery',
    'base/js/namespace',
    './menu_bullets',
], function(requirejs, $, Jupyter, menu_bullets) {
    "use strict";

    var mod_name = 'widd';
    var mod_log_prefix = mod_name + '[' + mod_name + ']';

    var menus = [
        menu_bullets
    ];

    var default_menus = [
        {
            'name' : 'SAGE WIDD',
            'sub-menu-direction' : 'left',
            'sub-menu' : menus.menu_bullets
        },
    ];

    var options = {
        sibling : undefined,
        menus : [],
        hooks: {
            pre_config: undefined,
            post_config: undefined,
        }
    };

    var includable_submenu_keys = [
        'menu_bullets'
    ];

    //default parameters
    var cfg = {
        insert_as_new_cell: false,
        insert_before_sibling: false,
        include_submenu: {},
        sibling_selector: '#help_menu',
        top_level_submenu_goes_left: true
    };

    for (var ii=0; ii < includable_submenu_keys.length; ii++){
        cfg.include_submenu[includable_submenu_keys[[ii]]] == true;
    }

    function config_loaded_callback (){
        if (options['pre_config_hook'] !== undefined){
            options['pre_config_hook']();
        };

        // not sure what this line does
        cfg = $.extend(true, cfg, Jupyter.notebook.config.data.snippets);

        if(cfg.insert_as_new_cell){
            console.log(mod_log_prefix, 'Insertions will insert new cell');
        }
        if (options.menus.length > 0){
            console.log(mod_log_prefix, '`options_menus` was created in custom.js; skipping all other configuration.');
        } 
        else {
            options.menus = [
                {
                    'name' : 'WIDD',    
                    'sub-menu-direction' : cfg.top_level_submenu_goes_left ? 'left' : 'right',
                    'sub-menu' : [],
                },
            ];

            for(var ii=0; ii < includable_submenu_keys.length; ii++){
                var key = includable_submenu_keys[ii];
                if (cfg.include_submenu[key]){
                    console.log(mod_log_prefix,
                        'inserting default', key, 'sub-menu');
                        options.menus[0]['sub-menu'].push(menu_bullets);
                }
            }
        }


        if( options.hooks.post_config !== undefined){
            options.hooks.post_config();
        }
    
        if (options.sibling == undefined){
            options.sibling = $(cfg.sibling_selector).parent();
            if (options.sibling.length < 1) {
                options.sibling = $('#help_menu').parent();
            }
        }
    }

    function insert_snippet_code (snippet_code){
        if (cfg.insert_as_new_cell){
            var new_cell = Jupyter.notebook.insert_cell_above('markdown');
            new_cell.set_text(snippet_code);
            new_cell.focus_cell();

        }
        else {
            var selected_cell = Jupyter.notebook.get_selected_cell();
            Jupyter.notebook.edit_mode();
            selected_cell.code_mirror.replaceSelection(snippet_code, 'around');
        }
    }
    
    function callback_insert_snippet (evt) {
        insert_snippet_code($(evt.currentTarget).data('snippet-code'));

    }

    function build_menu_element (menu_item_spec, direction){
        var element = $('<li/>');

        if(typeof menu_item_spec =='string'){
            if (menu_item_spec != '---') {
                console.log(mod_log_prefix,
                    'Dont\'t understand sub-menu string "' + menu_item_spec + '"');
                return null;
            }
            return element.addClass('divider');

        }

        var a = $('<a/>')
            .attr('href', '#')
            .html(menu_item_spec.name)
            .appendTo(element);
            // snippet or widd
        if (menu_item_spec.hasOwnProperty('snippet')){
            var snippet = menu_item_spec.snippet;
            if (typeof snippet == 'string' || snippet instanceof String){
                snippet = [snippet];
            }
            a.attr({
                'title' : '',
                'data-snippet-code' : snippet.join('\n'),
            })
            .on('click', callback_insert_snippet)
            .addClass('snippet');
        }
        else if (menu_item_spec.hasOwnProperty('internal-link')){
            a.attr('href', menu_item_spec['internal-link']);
        }
        else if (menu_item_spec.hasOwnProperty('external-link')){
                a.empty();
                a.attr({
                    'target' : 'blank',
                    'title' : 'Opens in a new window',
                    'href' : menu_item_spec['external-link'],
                });
                $('<i class="fa fa-external-link menu-icon pull-right/>').appendTo(a);
                $('<span/>').html(menu_item_spec.name).appendTo(a);
            }

            if(menu_item_spec.hasOwnProperty('sub-menu')){
                element
                    .addClass('dropdown-submenu')
                    .toggleClass('dropdown-submenu-left', direction === 'left');
                var sub_element = $('<ul class="dropdown-menu"/>')
                    .toggleClass('dropdown-menu-compact', menu_item_spec.overlay === true)
                    .appendTo(element);
                
                var new_direction = (menu_item_spec['sub-menu-direction'] === 'left' ) ? 'left' : 'right';
                // in the following line: if I swap jj for j, the page slows down significantly.
                for (var j=0; j < menu_item_spec['sub-menu'].length; j++){
                    var sub_menu_item_spec = build_menu_element(menu_item_spec['sub-menu'][j], new_direction);
                    if(sub_menu_item_spec != null){
                        sub_menu_item_spec.appendTo(sub_element);
                    }
                }   
            }
        return element;
    }

    function menu_setup (menu_item_specs, sibling, insert_before_sibling){
        for (var i = 0; i < menu_item_specs.length; ++i){
            var menu_item_spec;
            if (insert_before_sibling) {
                menu_item_spec = menu_item_specs[i];
            } else {
                menu_item_spec = menu_item_specs[menu_item_specs.length - 1 - i];
            }
            var direction = (menu_item_spec['menu-direction'] == 'left') ? 'left' : 'right';
            var menu_element = build_menu_element(menu_item_spec, direction);
            // we need special properties if the item is in the navbar
            if ($(sibling).parent().is('ul.nav.navbar-nav')){
                menu_element
                    .addClass('dropdown')
                    .removeClass('dropdown-submenu dropdown-submenu-left');
                menu_element.children('a')
                    .addClass('dropdown-toggle')
                    .attr({
                        'data-toggle' : 'dropdown',
                        'aria-expanded' : 'false'
                    });
            }

            //insert menu element into DOM (What was dom again)?
            menu_element[insert_before_sibling ? 'insertBefore': 'insertAfter'](sibling);

            window.MathJax.Hub.Queue(['Typeset', window.MathJax.Hub, menu_element[0]]);

        }
    }


    function parseSnippetMenu(arr) {
        let flattenedPairs = [];
      
        function flatten(obj) {
          for (let key in obj) {
            if (typeof obj[key] === 'object') {
              flatten(obj[key]);
            } else {
              flattenedPairs.push({ key, value: obj[key] });
            }
          }
        }
        flatten(arr);

        var selected = ['0'];
        var flattenedPairs_filter = flattenedPairs.filter(({
        key
        }) => selected.includes(key));

        flattenedPairs_filter = flattenedPairs_filter.map(pair => pair.value);

        return flattenedPairs_filter;
      }



    function createDataDoc() {
        
        var bullet_list = parseSnippetMenu(menu_bullets);   
        var matchingCells = [];

        // get all cells
        var notebook = Jupyter.notebook;
        var nb_cells = notebook.get_cells();

    // Iterate over the cells in the notebook
    for (var i = 0; i < nb_cells.length; i++) {
        var cell = nb_cells[i];

        // if a cell has type markdown
        if (cell.cell_type === 'markdown'){

            // get the content of the cell 
            var cellContent = cell.get_text();
            // and check whether any of the elements in bullet_list
            for (var j = 0; j < bullet_list.length; j++){
                // appear in our cells
                if (cellContent.includes(bullet_list[j])){
                    // and if yes, add that cell to matchingCells
                    matchingCells.push(cell)
                }
            }
        }
    }

    // create pdf content from our selected cells
    var matching_markdown = [];
    for (var i = 0; i < matchingCells.length; i++){
        cell = matchingCells[i];
        cell = cell.get_text();
        matching_markdown.push(cell);
    }
    var collapsedMarkdown = matching_markdown.join("\n\n");
    var markdownDate = new Date(); 
    var markdownHeader = "# Data Documentation Sheet \n #### Date: " + markdownDate + "\n \n";
    var collapsedMarkdown = markdownHeader  + "\n\n" + collapsedMarkdown;

// Create the notebook structure from our selected cells
const notebookStructure = {
    cells: matchingCells,
    metadata: {
      kernel_info: {
        name: 'python',
        display_name: 'Python 3',
      },
      language_info: {
        name: 'python',
        mimetype: 'text/x-python',
        file_extension: '.py',
      },
    },
    nbformat: 4,
    nbformat_minor: 5,
  };
    

    const notebookJSON = JSON.stringify(notebookStructure);
    var blob = new Blob([collapsedMarkdown], {type: 'text/markdown'});

    var fileName = window.prompt("Please enter the filename, s'il te plaît.", "widd");

    if (fileName) {
      var a = document.createElement('a');
      a.href = window.URL.createObjectURL(blob);
      a.download = fileName + '.md';
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(a.href);
    }

      };

    $(document).ready(function() {

        Jupyter.toolbar.add_buttons_group([
            {
                'label' : 'Create WIDD',
                'icon' : 'fa fa-magic',
                'callback' : createDataDoc,
                'id' : 'widd-button'
            }
        ]);
    });



    function load_ipython_extension() {
        $('<link/>', {
            rel: 'stylesheet',
            type: 'text/css',
            href: requirejs.toUrl('./snippets_menu.css')
        }).appendTo('head');

        //Arrange menu as given by configuration
        Jupyter.notebook.config.loaded.then(
            config_loaded_callback
        ).then(function () {
            menu_setup(options.menus, options.sibling, cfg.insert_before_sibling);
        });

    };
    return {load_ipython_extension: load_ipython_extension,
            menu_setup : menu_setup,

            menu_bullets : menu_bullets,
            default_menus : default_menus,
        
            options : options,
            };
});