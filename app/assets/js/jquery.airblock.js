/**
 * AIRBLOCK
 * By Langit Studio
 * Copyright 2018
 * www.langitstudio.com
 */

 // jquery wrap function
(function( $ ){

$.fn.airblock = function( options ) {
    
    var self = this;
    var airblock = self.data('airblock');
    //console.log(airblock);
    /** Methods **/
    if (arguments[0] == 'getHtml') {
        if (airblock) {
            //console.log('satu');
            airblock.deinit();
            var html = self.html();
            airblock.init();
            return html;
        } else {
            //console.log('dua');
            //console.log(this.html());
            return self.html();
        }
    } 

    /** Initialize plugin */

    self.each(function(baseIndex, baseElem) {
        baseElem = $(baseElem);

        var settings = $.extend({
            'new_row_layouts'   : [ // Column layouts for add row buttons
                                    [12],
                                    [6, 6],
                                    [4, 4, 4],
                                    [3, 3, 3, 3],
                                    [2, 2, 2, 2, 2, 2],
                                    [2, 8, 2],
                                    [4, 8],
                                    [8, 4]
                                ],
            'row_classes'       : [{ label: 'Example class', cssClass: 'example-class'}],
            'col_classes'       : [{ label: 'Example class', cssClass: 'example-class'}],
            'col_tools'         : [], /* Example:
                                        [ {
                                            title: 'Set background image',
                                            iconClass: 'glyphicon-picture',
                                            on: { click: function() {} }
                                        } ]
                                    */
            'row_tools'         : [],
            'custom_filter'     : '',
            'content_types'     : ['tinymce'],
            'valid_col_sizes'   : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            'source_textarea'   : ''
        }, options);


        // Elems
        var canvas,
            mainControls,
            addRowGroup,
            htmlTextArea
        ;
        var colClasses = ['col-md-', 'col-sm-', 'col-xs-'];
        var curColClassIndex = 0; // Index of the column class we are manipulating currently
        var MAX_COL_SIZE = 12;
        
        // Copy html to sourceElement if a source textarea is given
        if (settings.source_textarea) {
            var sourceEl = $(settings.source_textarea);
            
            sourceEl.addClass('ge-html-output');
            htmlTextArea = sourceEl;
                
            if (sourceEl.val()) {
                baseElem.html(sourceEl.val());
            }
        }
        
        // Wrap content if it is non-bootstrap
        if (baseElem.children().length && !baseElem.find('div.row').length) {
            var children = baseElem.children();
            var newRow = $('<div class="row"><div class="col-md-12"/></div>').appendTo(baseElem);
            newRow.find('.col-md-12').append(children);
        }

        setup();
        init();

        function setup() {
            /* Setup canvas */
            canvas = baseElem.addClass('ge-canvas');
            
            if (typeof htmlTextArea === 'undefined' || !htmlTextArea.length) {
                htmlTextArea = $('<textarea class="ge-html-output"/>').insertBefore(canvas);
            }

            // Create main controls
            mainControls = $('<div class="ge-mainControls" style="display:none;"/>').insertBefore(htmlTextArea);
                var wrapper = $('<div class="ge-wrapper ge-top" />').appendTo(mainControls);

            // Add row
            addRowGroup = $('<div class="ge-addRowGroup btn-group" />').appendTo(wrapper);
            $.each(settings.new_row_layouts, function(j, layout) {
                var btn = $('<a class="btn btn-xs btn-primary" />')
                    .attr('title', 'Add row ' + layout.join('-'))
                    .on('click', function() {
                        var row = createRow().appendTo(canvas);
                        layout.forEach(function(i) {
                            createColumn(i).appendTo(row);
                        });
                        init();
                    })
                    .appendTo(addRowGroup)
                ;

                btn.append('<span class="glyphicon glyphicon-plus-sign"/>');

                var layoutName = layout.join(' - ');
                var icon = '<div class="row ge-row-icon">';
                layout.forEach(function(i) {
                    icon += '<div class="column col-xs-' + i + '"/>';
                });
                icon += '</div>';
                btn.append(icon);
            });

            // Buttons on right
            var layoutDropdown = $('.ge-layout-mode')
                .on('click', function(e) {
                    e.preventDefault();
                    var a = $(this);
                        i = $(this).data('layout');
                        console.log(i);
                    switchLayout(i);
                    //$('.ge-layout-mode').removeClass('active');
                    x = document.getElementsByClassName('ge-layout-mode');
                    [].forEach.call(x, function(el) {
                        el.classList.remove("active");
                    });
                    
                    $(this).addClass('active');
                })
                //.appendTo(wrapper)
            ;
            var btnGroup = $('<div class="btn-group pull-right"/>').appendTo(wrapper);
            var htmlButton = $('.gm-edit-mode')
                .on('click', function(e) {
                    e.preventDefault();
                    if (htmlButton.hasClass('active')) {
                        canvas.empty().html(htmlTextArea.val()).show();
                        init();
                        htmlTextArea.hide();
                    } else {
                        deinit();
                        htmlTextArea
                            .height(0.8 * $(window).height())
                            .val(canvas.html())
                            .show()
                        ;
                        canvas.hide();
                    }

                    htmlButton.toggleClass('active');
                })
                //.appendTo(btnGroup)
            ;
            var previewButton = $('.gm-preview')
                .on('mouseenter', function(){
                    canvas.removeClass('ge-editing');
                })
                .on('click', function(e) {
                    e.preventDefault();
                    previewButton.toggleClass('active').trigger('mouseleave');
                })
                .on('mouseleave', function() {
                    if (!previewButton.hasClass('active')) {
                        canvas.addClass('ge-editing');
                    }
                })
                //.appendTo(btnGroup)
            ;
           

            // Make controls fixed on scroll
            var $window = $(window);
            $window.on('scroll', function(e) {
                if (
                    $window.scrollTop() > mainControls.offset().top &&
                    $window.scrollTop() < canvas.offset().top + canvas.height()
                ) {
                    if (wrapper.hasClass('ge-top')) {
                        wrapper
                            .css({
                                left: wrapper.offset().left,
                                width: wrapper.outerWidth(),
                            })
                            .removeClass('ge-top')
                            .addClass('ge-fixed')
                        ;
                    }
                } else {
                    if (wrapper.hasClass('ge-fixed')) {
                        wrapper
                            .css({ left: '', width: '' })
                            .removeClass('ge-fixed')
                            .addClass('ge-top')
                        ;
                    }
                }
            });

            /* Init RTE on click */
            canvas.on('click', '.ge-content', function(e) {
                var rte = getRTE($(this).data('ge-content-type'));
                if (rte) {
                    rte.init(settings, $(this));
                }
            });
        }

        function reset() {
            deinit();
            init();
        }

        function init() {
            runFilter(true);
            canvas.addClass('ge-editing');
            addAllColClasses();
            wrapContent();
            createRowControls();
            createColControls();
            makeSortable();
            switchLayout(curColClassIndex);
            opSection();
        }

        function deinit() {
            canvas.removeClass('ge-editing');
            var contents = canvas.find('.ge-content').each(function() {
                var content = $(this);
                getRTE(content.data('ge-content-type')).deinit(settings, content);
            });
            canvas.find('.ge-tools-drawer').remove();
            removeSortable();
            runFilter();
        }

        function createRowControls() {
            // for section
            canvas.find('.airblock_section').each(function() {
                var section = $(this);
                if (section.find('> .ge-tools-drawer').length) { return; }

                var drawer = $('<div class="ge-tools-drawer" />').prependTo(section);
                createTool(drawer, 'Move', 'ge-move', 'glyphicon-move');
                createTool(drawer, 'Settings', '', 'glyphicon-cog', function() {
                    details.toggle();
                });
                createTool(drawer, 'Remove row', '', 'glyphicon-trash', function() {
                    if (window.confirm('Delete row?')) {
                        section.slideUp(function() {
                            section.remove();
                        });
                    }
                });

                var details = createDetails(section, settings.row_classes).appendTo(drawer);
            });
            
            // for row
            
            canvas.find('.row').each(function() {
                var row = $(this);
                if (row.find('> .ge-tools-drawer').length) { return; }

                var drawer = $('<div class="ge-tools-drawer" />').prependTo(row);
                // createTool(drawer, 'Move', 'ge-move', 'glyphicon-move');
                // createTool(drawer, 'Settings', '', 'glyphicon-cog', function() {
                //     details.toggle();
                // });
                // settings.row_tools.forEach(function(t) {
                //     createTool(drawer, t.title || '', t.className || '', t.iconClass || 'glyphicon-wrench', t.on);
                // });
                // createTool(drawer, 'Remove row', '', 'glyphicon-trash', function() {
                //     if (window.confirm('Delete row?')) {
                //         row.slideUp(function() {
                //             row.remove();
                //         });
                //     }
                // });
                // createTool(drawer, 'Add column', 'ge-add-column', 'glyphicon-plus-sign', function() {
                //     row.append(createColumn(3));
                //     init();
                // });

                var details = createDetails(row, settings.row_classes).appendTo(drawer);
            });
        }

        function createColControls() {
            canvas.find('.column').each(function() {
                var col = $(this);
                if (col.find('> .ge-tools-drawer').length) { return; }

                var drawer = $('<div class="ge-tools-drawer" />').prependTo(col);

                createTool(drawer, 'Move', 'ge-move', 'glyphicon-move');

                createTool(drawer, 'Make column narrower\n(hold shift for min)', 'ge-decrease-col-width', 'glyphicon-minus', function(e) {
                    var colSizes = settings.valid_col_sizes;
                    var curColClass = colClasses[curColClassIndex];
                    var curColSizeIndex = colSizes.indexOf(getColSize(col, curColClass));
                    var newSize = colSizes[clamp(curColSizeIndex - 1, 0, colSizes.length - 1)];
                    if (e.shiftKey) {
                        newSize = colSizes[0];
                    }
                    setColSize(col, curColClass, Math.max(newSize, 1));
                });

                createTool(drawer, 'Make column wider\n(hold shift for max)', 'ge-increase-col-width', 'glyphicon-plus', function(e) {
                    var colSizes = settings.valid_col_sizes;
                    var curColClass = colClasses[curColClassIndex];
                    var curColSizeIndex = colSizes.indexOf(getColSize(col, curColClass));
                    var newColSizeIndex = clamp(curColSizeIndex + 1, 0, colSizes.length - 1);
                    var newSize = colSizes[newColSizeIndex];
                    if (e.shiftKey) {
                        newSize = colSizes[colSizes.length - 1];
                    }
                    setColSize(col, curColClass, Math.min(newSize, MAX_COL_SIZE));
                });

                createTool(drawer, 'Settings', '', 'glyphicon-cog', function() {
                    details.toggle();
                });
                
                settings.col_tools.forEach(function(t) {
                    createTool(drawer, t.title || '', t.className || '', t.iconClass || 'glyphicon-wrench', t.on);
                });

                createTool(drawer, 'Remove col', '', 'glyphicon-trash', function() {
                    if (window.confirm('Delete column?')) {
                        col.animate({
                            opacity: 'hide',
                            width: 'hide',
                            height: 'hide'
                        }, 400, function() {
                            col.remove();
                        });
                    }
                });

                // createTool(drawer, 'Add row', 'ge-add-row', 'glyphicon-plus-sign', function() {
                //     var row = createRow();
                //     col.append(row);
                //     row.append(createColumn(6)).append(createColumn(6));
                //     init();
                // });

                var details = createDetails(col, settings.col_classes).appendTo(drawer);

            });
        }

        function createTool(drawer, title, className, iconClass, eventHandlers) {
            var tool = $('<a title="' + title + '" class="' + className + '"><span class="glyphicon ' + iconClass + '"></span></a>')
                .appendTo(drawer)
            ;
            if (typeof eventHandlers == 'function') {
                tool.on('click', eventHandlers);
            }
            if (typeof eventHandlers == 'object') {
                $.each(eventHandlers, function(name, func) {
                    tool.on(name, func);
                });
            }
        }

        function createDetails(container, cssClasses) {
            var detailsDiv = $('<div class="ge-details" />');

            $('<input class="ge-id" />')
                .attr('placeholder', 'id')
                .val(container.attr('id'))
                .attr('title', 'Set a unique identifier')
                .appendTo(detailsDiv)
            ;

            var classGroup = $('<div class="btn-group" />').appendTo(detailsDiv);
            cssClasses.forEach(function(rowClass) {
                var btn = $('<a class="btn btn-xs btn-default" />')
                    .html(rowClass.label)
                    .attr('title', rowClass.title ? rowClass.title : 'Toggle "' + rowClass.label + '" styling')
                    .toggleClass('active btn-primary', container.hasClass(rowClass.cssClass))
                    .on('click', function() {
                        btn.toggleClass('active btn-primary');
                        container.toggleClass(rowClass.cssClass, btn.hasClass('active'));
                    })
                    .appendTo(classGroup)
                ;
            });

            return detailsDiv;
        }

        function addAllColClasses() {
            canvas.find('.column, div[class*="col-"]').each(function() {
                var col = $(this);

                var size = 2;
                var sizes = getColSizes(col);
                if (sizes.length) {
                    size = sizes[0].size;
                }

                var elemClass = col.attr('class');
                colClasses.forEach(function(colClass) {
                    if (elemClass.indexOf(colClass) == -1) {
                        col.addClass(colClass + size);
                    }
                });

                col.addClass('column');
            });
        }

        /**
         * Return the column size for colClass, or a size from a different
         * class if it was not found.
         * Returns null if no size whatsoever was found.
         */
        function getColSize(col, colClass) {
            var sizes = getColSizes(col);
            for (var i = 0; i < sizes.length; i++) {
                if (sizes[i].colClass == colClass) {
                    return sizes[i].size;
                }
            }
            if (sizes.length) {
                return sizes[0].size;
            }
            return null;
        }

        function getColSizes(col) {
            var result = [];
            colClasses.forEach(function(colClass) {
                var re = new RegExp(colClass + '(\\d+)', 'i');
                if (re.test(col.attr('class'))) {
                    result.push({
                        colClass: colClass,
                        size: parseInt(re.exec(col.attr('class'))[1])
                    });
                }
            });
            return result;
        }

        function setColSize(col, colClass, size) {
            var re = new RegExp('(' + colClass + '(\\d+))', 'i');
            var reResult = re.exec(col.attr('class'));
            if (reResult && parseInt(reResult[2]) !== size) {
                col.switchClass(reResult[1], colClass + size, 50);
            } else {
                col.addClass(colClass + size);
            }
        }

        function makeSortable() {
            canvas.sortable({
                items: ".airblock_section",
                revert: true,
                handle: '> .ge-tools-drawer .ge-move',
                placeholder: "ui-state-highlight",
                dropOnEmpty: true,
                start: sortStart,
            });
            canvas.find('.airblock_section').sortable({
                connectWith: '> .row',
                forceHelperSize: true,
                forcePlaceholderSize: true,
                handle: '> .ge-tools-drawer .ge-move',
                opacity: 0.8,
                helper: 'clone',
                dropOnEmpty: true,
                start: sortStart,
            });
            canvas.find('.row').sortable({
                connectWith: '.airblock_section .row',
                forceHelperSize: true,
                forcePlaceholderSize: true,
                handle: '> .ge-tools-drawer .ge-move',
                opacity: 0.8,
                helper: 'clone',
                dropOnEmpty: true,
                start: sortStart,
            });
            // canvas.find('.row').sortable({
            //     items: '> .column',
            //     connectWith: '.ge-canvas, .airblock_section, .airblock_section .row',
            //     handle: '> .ge-tools-drawer .ge-move',
            //     start: sortStart,
            //     helper: 'clone',
            // });
            // canvas.add(canvas.find('.column')).sortable({
            //     items: '> .row, > .ge-content',
            //     connectsWith: '.ge-canvas, .airblock_section, .airblock_section .column',
            //     handle: '> .ge-tools-drawer .ge-move',
            //     start: sortStart,
            //     helper: 'clone',
            // });

            function sortStart(e, ui) {
                ui.placeholder.css({ height: ui.item.outerHeight()});
            }
        }

        function removeSortable() {
            //canvas.add(canvas.find('.column')).add(canvas.find('.row')).sortable('destroy');
        }

        function createRow() {
            return $('<div class="row" />');
        }

        function createColumn(size) {
            return $('<div/>')
                .addClass(colClasses.map(function(c) { return c + size; }).join(' '))
                .append(createDefaultContentWrapper()
                    .html(
                        (settings.content_types[0]).initialContent
                    )
                )
            ;
        }

        /**
         * Run custom content filter on init and deinit
         */
        function runFilter(isInit) {
            if (settings.custom_filter.length) {
                $.each(settings.custom_filter, function(key, func) {
                    if (typeof func == 'string') {
                        func = window[func];
                    }

                    func(canvas, isInit);
                });
            }
        }

        /**
         * Wrap column content in <div class="ge-content"> where neccesary
         */
        function wrapContent() {
            canvas.find('.column').each(function() {
                var col = $(this);
                var contents = $();
                col.children().each(function() {
                    var child = $(this);
                    if (child.is('.row, .ge-tools-drawer, .ge-content')) {
                        doWrap(contents);
                    } else {
                        contents = contents.add(child);
                    }
                });
                doWrap(contents);
            });
        }
        function doWrap(contents) {
            if (contents.length) {
                var container = createDefaultContentWrapper().insertAfter(contents.last());
                contents.appendTo(container);
                contents = $();
            }
        }

        function createDefaultContentWrapper() {
            return $('<div/>')
                .addClass('ge-content ge-content-type-' + settings.content_types[0])
                .attr('data-ge-content-type', settings.content_types[0])
            ;
        }

        function switchLayout(colClassIndex) {
            curColClassIndex = colClassIndex;

            console.log(colClassIndex);

            var layoutClasses = ['ge-layout-desktop', 'ge-layout-tablet', 'ge-layout-phone'];
            layoutClasses.forEach(function(cssClass, i) {
                canvas.toggleClass(cssClass, i == colClassIndex);
            });
        }
        
        function getRTE(type) {
            return $.fn.airblock.RTEs[type];
        }
        
        function clamp(input, min, max) {
            return Math.min(max, Math.max(min, input));
        }

        function opSection(){
            var $list           = $(".section_list > .section_item");
            var $filter         = $(".filter-section").on("click", function() {
            

            var active = 
                $filter.removeClass("active")
                .filter(this)
                .addClass("active")
                .data("group-section");
            
            $list
                .hide()
                .filter( "." + active )
                .fadeIn(300);

            });


            $('.side_menu-builder_nav').click(function(e){
                e.preventDefault();

                var layer = $(this).data('id');
                var nav_sections    = $('#layer_1');
                var nav_site        = $('#layer_2');

                //$('.option_layer').hide('slide', {direction: 'left'}, 100);

                if(layer=='nav_sections'){
                    nav_site.hide('slide', {direction: 'left'}, 200);
                    nav_sections.show('slide', {direction: 'left'}, 200);
                }
                if(layer=='nav_sites'){
                    nav_sections.hide('slide', {direction: 'left'}, 200);
                    nav_site.show('slide', {direction: 'left'}, 200);
                }
                if(layer=='nav_settings'){
                    
                }
                if(layer=='nav_widgets'){
                    
                }
            });

            $('.layer_1_close-btn, .layer_2_close-btn').click(function(){
                var nav_sections    = $('#layer_1');
                var nav_site        = $('#layer_2');

                nav_sections.hide('slide', {direction: 'left'}, 200);
                nav_site.hide('slide', {direction: 'left'}, 200);
              

            });
        }

        baseElem.data('airblock', {
            init: init,
            deinit: deinit,
        });

    });

    return self;
   
};

$.fn.airblock.RTEs = {};

})( jQuery );

(function( $ ){
    $.fn.airblock.RTEs.ckeditor = {

        init: function(settings, contentAreas) {

            if (!window.CKEDITOR) {
                console.error(
                    'CKEditor not available! Make sure you loaded the ckeditor and jquery adapter js files.'
                );
            }

            var self = this;
            contentAreas.each(function() {
                var contentArea = $(this);
                if (!contentArea.hasClass('active')) {
                    if (contentArea.html() == self.initialContent) {
                        // CKEditor kills this '&nbsp' creating a non usable box :/ 
                        contentArea.html('&nbsp;'); 
                    }
                    
                    // Add the .attr('contenteditable',''true') or CKEditor loads readonly
                    contentArea.addClass('active').attr('contenteditable', 'true');
                    
                    var configuration = $.extend(
                        {},
                        (settings.ckeditor && settings.ckeditor.config ? settings.ckeditor.config : {}), 
                        {
                            // Focus editor on creation
                            on: {
                                instanceReady: function( evt ) {
                                    // Call original instanceReady function, if one was passed in the config
                                    var callback;
                                    try {
                                        callback = settings.ckeditor.config.on.instanceReady;
                                    } catch (err) {
                                        // No callback passed
                                    }
                                    if (callback) {
                                        callback.call(this, evt);
                                    }
                                    
                                    instance.focus();
                                }
                            }
                        }
                    );
                    var instance = CKEDITOR.inline(contentArea.get(0), configuration);
                }
            });
        },

        deinit: function(settings, contentAreas) {
            contentAreas.filter('.active').each(function() {
                var contentArea = $(this);
                
                // Destroy all CKEditor instances
                $.each(CKEDITOR.instances, function(_, instance) {
                    instance.destroy();
                });

                // Cleanup
                contentArea
                    .removeClass('active cke_focus')
                    .removeAttr('id')
                    .removeAttr('style')
                    .removeAttr('spellcheck')
                    .removeAttr('contenteditable')
                ;
            });
        },

        initialContent: '<p>Lorem initius... </p>',
    };
})(jQuery);
(function( $ ){

    $.fn.airblock.RTEs.summernote = {

        init: function(settings, contentAreas) {
            
            if (!jQuery().summernote) {
                console.error('Summernote not available! Make sure you loaded the Summernote js file.');
            }

            var self = this;
            contentAreas.each(function() {
                var contentArea = $(this);
                if (!contentArea.hasClass('active')) {
                    if (contentArea.html() == self.initialContent) {
                        contentArea.html('');
                    }
                    contentArea.addClass('active');

                    var configuration = $.extend(
                        {},
                        (settings.summernote && settings.summernote.config ? settings.summernote.config : {}),
                        {
                            tabsize: 2,
                            airMode: true,
                            // Focus editor on creation
                            callbacks: {
                                onInit: function() {
                                    
                                    // Call original oninit function, if one was passed in the config
                                    var callback;
                                    try {
                                        callback = settings.summernote.config.callbacks.onInit;
                                    } catch (err) {
                                        // No callback passed
                                    }
                                    if (callback) {
                                        callback.call(this);
                                    }
                                    
                                    contentArea.summernote('focus');
                                }
                            }
                        }
                    );
                    contentArea.summernote(configuration);
                }
            });
        },

        deinit: function(settings, contentAreas) {
            contentAreas.filter('.active').each(function() {
                var contentArea = $(this);
                contentArea.summernote('destroy');
                contentArea
                    .removeClass('active')
                    .removeAttr('id')
                    .removeAttr('style')
                    .removeAttr('spellcheck')
                ;
            });
        },

        initialContent: '<p>Lorem ipsum dolores</p>',
    };
})(jQuery);

(function( $ ){
    $.fn.airblock.RTEs.tinymce = {
        init: function(settings, contentAreas) {
            if (!window.tinymce) {
                console.error('tinyMCE not available! Make sure you loaded the tinyMCE js file.');
            }
            if (!contentAreas.tinymce) {
                console.error('tinyMCE jquery integration not available! Make sure you loaded the jquery integration plugin.');
            }
            var self = this;
            contentAreas.each(function() {
                var contentArea = $(this);
                if (!contentArea.hasClass('active')) {
                    if (contentArea.html() == self.initialContent) {
                        contentArea.html('');
                    }
                    contentArea.addClass('active');
                    var configuration = $.extend(
                        {},
                        (settings.tinymce && settings.tinymce.config ? settings.tinymce.config : {}),
                        {
                            theme: 'inlite',
                            plugins: 'image media table link paste textpattern autolink codesample',
                            insert_toolbar: 'quickimage quicktable media codesample',
                            selection_toolbar: 'bold italic | quicklink h2 h3 blockquote',
                            inline: true,
                            paste_data_images: true,
                            content_css: [
                            //     '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
                                 '//localhost:3000/css/style.css'],
                            oninit: function(editor) {
                                // Bring focus to text field
                                $('#' + editor.settings.id).focus();
                                
                                // Call original oninit function, if one was passed in the config
                                var callback;
                                try {
                                    callback = settings.tinymce.config.oninit;
                                } catch (err) {
                                    // No callback passed
                                }
                                
                                if (callback) {
                                    callback.call(this);
                                }
                            }
                        }
                    );
                    var tiny = contentArea.tinymce(configuration);
                }
            });
        },

        deinit: function(settings, contentAreas) {
            contentAreas.filter('.active').each(function() {
                var contentArea = $(this);
                var tiny = contentArea.tinymce();
                if (tiny) {
                    tiny.remove();
                }
                contentArea
                    .removeClass('active')
                    .removeAttr('id')
                    .removeAttr('style')
                    .removeAttr('spellcheck')
                ;
            });
        },

        initialContent: '<p>Lorem ipsum dolores</p>',
    };
})(jQuery);
