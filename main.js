define(['base/js/namespace', 'base/js/events'], function(Jupyter, events) {
    function addMenu() {
        
        var menu = $("<li>").addClass("dropdown");
        var dropdown = $("<a>")
            .attr("href", "#")
            .addClass("dropdown-toggle")
            .attr("data-toggle", "dropdown")
            .text("My Menu");
        var submenu = $("<ul>").addClass("dropdown-menu");
        submenu.append($("<li>").append($("<a>").attr("href", "#").text("Menu Item 1")));
        submenu.append($("<li>").append($("<a>").attr("href", "#").text("Menu Item 2")));
        menu.append(dropdown);
        menu.append(submenu);
        $("#help_menu").before(menu);
    }
    function load_ipython_extension() {
        addMenu();
    }
    return {load_ipython_extension: load_ipython_extension};
});