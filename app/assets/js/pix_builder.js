function animate(e, t, i) {
    -1 != effects.indexOf(t) && (i ? $(e).removeClass("animate-out").removeClass(effects.join(" ")).addClass("animating infinite").addClass(t) : $(e).removeClass("animate-out infinite").removeClass(effects.join(" ")).addClass("animating").addClass(t).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
        $(e).removeClass("animating").removeClass(effects.join(" "))
    }))
}

function animateOut(e, t, i) {
    -1 != effects.indexOf(t) && $(e).removeClass("infinite").removeClass(effects.join(" ")).addClass("animating").addClass(t).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
        $(e).addClass("animate-out").removeClass("animating").removeClass(effects.join(" ")), i && $(e).remove()
    })
}

function animateEnd(e, t) {
    $(e).removeClass("animating infinite").removeClass(effects.join(" ")), t && $(e).remove()
}

function pix_pixbuilder_element(e) {
    return $(e).remove(), 0
}

function pix_duplicate_element(e) {
    var t = $("<div>").append(e.clone()).html();
    return e.after(" " + t), 0
}

function pix_remove_element(e) {
    return e.fadeOut(function() {
        e.remove()
    }), 0
}

function pix_field_edit(e, t) {
    switch ($("#pix_field_modal").modal("show"), t) {
        case "input":
            $(".pix_fields_modals").hide(), $("#pix_input_field_settings").show(), $("#pix_input_field_name").val($(e).attr("name")), $("#pix_input_field_place").val($(e).attr("placeholder")), $("#pix_input_required").prop("checked", $(e).prop("required")), $("#pix_field_settings_save").unbind("click").bind("click", function(t) {
                return t.preventDefault(), $(e).attr("name", $("#pix_input_field_name").val()), $(e).attr("placeholder", $("#pix_input_field_place").val()), $("#pix_input_required").is(":checked") ? $(e).prop("required", !0) : $(e).prop("required", !1), 0
            });
            break;
        case "textarea":
            $(".pix_fields_modals").hide(), $("#pix_txt_field_settings").show(), $("#pix_txt_field_name").val($(e).attr("name")), $("#pix_txt_field_place").val($(e).attr("placeholder")), $("#pix_txt_field_rows").val($(e).attr("rows")), $("#pix_txt_required").prop("checked", $(e).prop("required")), $("#pix_field_settings_save").unbind("click").bind("click", function(t) {
                return t.preventDefault(), $(e).attr("name", $("#pix_txt_field_name").val()), $(e).attr("placeholder", $("#pix_txt_field_place").val()), $(e).attr("rows", $("#pix_txt_field_rows").val()), $("#pix_txt_required").is(":checked") ? $(e).prop("required", !0) : $(e).prop("required", !1), 0
            });
            break;
        case "checkbox":
            $(".pix_fields_modals").hide(), $("#pix_check_field_settings").show(), $("#pix_check_name").val($(e).attr("name")), $("#pix_check_value").val($(e).attr("value")), $("#pix_check_required").prop("checked", $(e).prop("required")), $("#pix_field_settings_save").unbind("click").bind("click", function(t) {
                return t.preventDefault(), $(e).attr("name", $("#pix_check_name").val()), $(e).attr("value", $("#pix_check_value").val()), $("#pix_check_required").is(":checked") ? $(e).prop("required", !0) : $(e).prop("required", !1), 0
            });
            break;
        case "radio":
            $(".pix_fields_modals").hide(), $("#pix_radio_field_settings").show(), $("#pix_radio_name").val($(e).attr("name")), $("#pix_radio_value").val($(e).attr("value")), $("#pix_radio_required").prop("checked", $(e).prop("required")), $("#pix_field_settings_save").unbind("click").bind("click", function(t) {
                return t.preventDefault(), $(e).attr("name", $("#pix_radio_name").val()), $(e).attr("value", $("#pix_radio_value").val()), $("#pix_radio_required").is(":checked") ? $(e).prop("required", !0) : $(e).prop("required", !1), 0
            });
            break;
        case "select":
            $("#pix_select_options").val($(e).html()), $("#pix_select_required").prop("checked", $(e).prop("required")), $("#pix_field_settings_save").unbind("click").bind("click", function(t) {
                return t.preventDefault(), $(e).html($("#pix_select_options").val()), $("#pix_select_required").is(":checked") ? $(e).prop("required", !0) : $(e).prop("required", !1), 0
            })
    }
}

function pix_icon_edit(e) {
    var t = "",
        i = e.attr("class").split(/(\s+)/);
    $.each(i, function(e, i) {
        i.match("^pixicon-") && (t = i)
    });
    e.css("color");
    var n = e.css("font-size");
    "transparent" != e.css("color") && "none" != e.css("color") && "" != e.css("color") && "rgba(0, 0, 0, 0)" != e.css("color") ? ($("#pix_icon_color").val(e.css("color")), $("#pix_icon_color").change()) : ($("#pix_icon_color").val(section.css("transparent")), $("#pix-icon-color i").css("background-color", "transparent"), $("#pix_icon_color").change()), $("#pix_icon_size").val(n), $("#pix_icon_list_ul").find(".pix_icon_clicked").removeClass("pix_icon_clicked"), $('#pix_icon_list_ul a[data-pix="' + t + '"]').addClass("pix_icon_clicked"), $("#pix_icon_modal").modal("show"), $("#pix_icon_save").unbind("click").bind("click", function(t) {
        t.preventDefault();
        var i = $("#pix_icon_list_ul").find(".pix_icon_clicked").attr("data-pix");
        e.attr("class", i);
        var n = $("#pix_icon_color").val();
        e.css("color") != n && e.css("color", n);
        var o = $("#pix_icon_size").val();
        return e.css("font-size") != o && e.css("font-size", o), pixSave($("#pixGrid").html()), 0
    })
}

function mapDOM(e, t) {
    function i(e, t) {
        t.type = e.nodeName;
        var n = e.childNodes;
        if (null != n && n.length) {
            t.content = [];
            for (o = 0; o < n.length; o++) 3 == n[o].nodeType ? t.content.push(n[o].nodeValue) : (t.content.push({}), i(n[o], t.content[t.content.length - 1]))
        }
        if (null != e.attributes && e.attributes.length) {
            t.attributes = {};
            for (var o = 0; o < e.attributes.length; o++) t.attributes[e.attributes[o].nodeName] = e.attributes[o].nodeValue
        }
    }
    var n = {};
    return "string" == typeof e && (window.DOMParser ? (parser = new DOMParser, docNode = parser.parseFromString(e, "text/xml")) : (docNode = new ActiveXObject("Microsoft.XMLDOM"), docNode.async = !1, docNode.loadXML(e)), e = docNode.firstChild), i(e, n), t ? JSON.stringify(n) : n
}

function mapDOM2(e, t) {
    function i(e, t, n = "li_") {
        var o = {};
        "li" == e.nodeName && (o.id = n + t, o.type = "li", o.class = e.getAttribute("class"));
        var a = [],
            s = e.childNodes;
        if (("ul" == e.nodeName || "li" == e.nodeName) && null != s && s.length)
            for (var r = 0; r < s.length; r++)
                if (3 != s[r].nodeType) {
                    var l = i(s[r], t++, "" + n + n);
                    "li" == e.nodeName && "a" == s[r].nodeName ? (o.name = l.name, o.slug = l.slug, o.class = l.class, o.toggle = l.toggle) : l && 0 != Object.keys(l).length && ("li" == e.nodeName && (o.children = l), "ul" == e.nodeName && a.push(l))
                }
        if ("a" == e.nodeName) {
            var c = {},
                d = e.innerHTML;
            return c.name = d.replace(/<[^>]*>/g, ""), c.slug = e.getAttribute("href"), c.class = e.getAttribute("class"), c.toggle = e.getAttribute("data-toggle"), c
        }
        return "ul" == e.nodeName ? a : o
    }
    var n = {};
    return "string" == typeof e && (window.DOMParser ? (parser = new DOMParser, docNode = parser.parseFromString(e, "text/xml")) : (docNode = new ActiveXObject("Microsoft.XMLDOM"), docNode.async = !1, docNode.loadXML(e)), e = docNode.firstChild), n = i(e, 1, "li_"), t ? JSON.stringify(n) : n
}

function json_nav_options(e) {
    var t = '<ol class="dd-list">';
    return jQuery.each(e, function() {
        t += '<li class="dd-item" data-menu-id="' + this.id + '" data-class="' + this.class + '" data-name="' + this.name + '" data-slug="' + this.slug + '" data-toggle="' + this.toggle + '" data-new="1" data-deleted="0"><div class="dd-handle">' + this.name + '</div> <span class="button-delete btn btn-default btn-xs pull-right" data-owner-id="' + this.id + '"> <i class="material-icons">delete</i> </span><span class="button-edit btn btn-default btn-xs pull-right" data-owner-id="' + this.id + '"><i class="material-icons">edit</i></span>', this.children && this.children.length > 0 && (t += json_nav_options(this.children)), t += "</li>"
    }), t += "</ol>"
}

function pix_gen_navbar(e) {
    var t = "\n";
    return jQuery.each(e, function() {
        if (this.children && this.children.length > 0) {
            t += '<li class="dropdown">';
            e = this.class.split(" ");
            e = jQuery.unique(e), -1 != jQuery.inArray("pix-nav-link", e) ? t += '<a href="' + this.slug + '" class="' + e.join(" ") + '" data-toggle="dropdown">' + this.name + "</a>\n" : t += '<a href="' + this.slug + '" class="' + e.join(" ") + ' pix-nav-link" data-toggle="dropdown">' + this.name + "</a>\n", t += '<ul class="dropdown-menu dropdown-menu-left">\n', t += pix_gen_navbar(this.children), t += "</ul>\n"
        } else {
            this.class || (this.class = "");
            var e = this.class.split(" ");
            e = jQuery.unique(e);
            var i = "pix-nav-link"; - 1 != jQuery.inArray("pix-nav-link", e) && (i = ""), pix_is_popup_link(this.slug) ? t += '<li><a href="#" class="' + e.join(" ") + " " + i + '" data-toggle="modal" data-target="' + this.slug + '">' + this.name + "</a>\n" : t += '<li><a href="' + this.slug + '" class="' + e.join(" ") + " " + i + '" data-toggle="' + this.toggle + '">' + this.name + "</a>\n"
        }
        t += "</li>\n"
    }), t
}

function pix_is_popup_link(e) {
    if (0 == e.indexOf("#") && e.length > 1) {
        var t = $("#pixGrid " + e);
        if (t && t.hasClass("modal")) return !0
    }
    return !1
}

function menu_settings(e) {
    $("#right_sidebar").addClass("opened"), $("#right_sidebar .right_inner>div").hide(), $(".pix_menu_settings").show(), $("#right_sidebar .pix_right_slide").removeClass("opened"), $("#right_sidebar .pix_right_main").removeClass("slided");
    var t = json_nav_options(mapDOM2(e.find("#bs-example-navbar-collapse-1").html(), !1));
    $("#nestable").html(t), pix_menu_section = e, $("#nestable").nestable({
        maxDepth: 2
    }).on("change", function() {
        updateSection($("#nestable").data("output", $("#json-output")), e)
    }), $("#nestable .button-delete").on("click", deleteFromMenu), $("#nestable .button-edit").on("click", prepareEdit), e.hasClass("pix-fixed-top") && $("select#pix_header_style").selectpicker("val", "pix-fixed-top"), e.hasClass("pix-over-header") && $("select#pix_header_style").selectpicker("val", "pix-over-header"), $("#color-picker-header-text").val(e.find(".pix-header-nav>li>a").css("color")), $("#color-picker-header-text").change(), $("#color-picker-header-text").colorpicker().on("changeColor", function(t) {
        console.log(t.color.toString("rgba")), e.find(".pix-header-nav>li>a").css("color", t.color.toString("rgba"))
    }), $("#pix_header_style").on("changed.bs.select", function(t) {
        var i = $(this).find("option:selected").val();
        e.removeClass("pix-fixed-top pix-over-header"), e.addClass(i)
    })
}

function pix_fix_note() {
    $("#pixGrid .pix_edit_text").each(function() {
        $("div", $(this)).each(function() {
            var e, t, i;
            if (e = $(this), t = document.createElement("span"), i = e.attributes)
                for (var n = 0, o = i.length; n < o; n++) t.setAttribute(i[n].name, i[n].value);
            $(t).html(e.html()), $(this).before("<br>"), $(this).replaceWith(t)
        })
    })
}

function gallery_click_img() {
    $("#pix_img_edit_gallery .pix_img_div").on("click", "a.pix_g_img", function(e) {
        $("#pix_img_edit_gallery a.pix_g_img").not(this).removeClass("clicked"), $(this).addClass("clicked"), e.preventDefault()
    }), $("#pix_gallery_gallery .pix_img_div").on("click", "a", function(e) {
        $("#pix_gallery_gallery a.pix_g_img").not(this).removeClass("clicked"), $(this).addClass("clicked"), e.preventDefault()
    })
}

function gallery_delete_img() {
    $("#pix_img_edit_gallery .pix_img_div, #pix_gallery_imgs .pix_img_div").on("click", "a.pix_del_img_btn", function(e) {
        var t = {},
            i = $(this);
        t.file = $(this).attr("data-name"), $.confirm({
            title: "Delete File",
            boxWidth: "500px",
            useBootstrap: !1,
            theme: "pix-danger-modal",
            backgroundDismiss: !0,
            content: "Are you sure that you want to delete the file <strong>" + t.file + "</strong>",
            buttons: {
                cancel: {
                    text: "CANCEL",
                    btnClass: "btn-cancel"
                },
                deletefile: {
                    text: "DELETE",
                    btnClass: "btn-red",
                    keys: ["enter", "shift"],
                    action: function() {
                        $.ajax({
                            url: "delete_file",
                            dataType: "json",
                            data: t,
                            cache: !1,
                            type: "POST",
                            success: function(e) {
                                "success" == e.type ? (notyf.confirm(e.message), i.parent().hide("slow")) : notyf.alert(e.message)
                            },
                            error: function(e) {
                                alert("Error: Couldn't delete image!"), console.log(e)
                            }
                        })
                    }
                }
            }
        }), e.preventDefault()
    })
}

function init_imgs() {
    for (var e = document.getElementsByTagName("img"), t = 0; t < e.length; t++) e[t].getAttribute("data-src") && e[t].setAttribute("src", e[t].getAttribute("data-src"))
}

function pix_fix_heights() {
    $(".pix_nav_menu").each(function() {
        var e = 0;
        $(this).find(".pix-adjust-height").each(function(t) {
            $(this).outerHeight() > e && (e = $(this).outerHeight())
        }), e > 0 && $(this).find(".pix-adjust-height").each(function(t) {
            var i = +$(this).outerHeight();
            if (i < e) {
                var n = e - i;
                n /= 2, $(this).css("margin-top", n)
            }
        })
    })
}

function pix_open_page(e) {
    $("#pixGrid").pixbuilder("deinit");
    var t = $("#pixGrid").attr("data-page");
    pix_current_page = t, $("#" + t).attr("data-content", $("#pixGrid").html()), $("#pixGrid").html($("#" + e).attr("data-content")), $("#pixGrid").attr("data-page", e), $("#pixGrid").pixbuilder("init"), $("#header_page_name span").html($("#" + e).attr("pix-item")), $("#" + e).closest("li.pix_pages_list_item").addClass("active")
}

function saveTextAsFile(e, t) {
    var i = navigator.userAgent.match(/MSIE\s([\d.]+)/),
        n = navigator.userAgent.match(/Trident\/7.0/) && navigator.userAgent.match(/rv:11/),
        o = i ? i[1] : n ? 11 : -1;
    if (i && o < 10) console.log("No blobs on IE ver<10");
    else {
        var a = new Blob([t], {
            type: "text/plain"
        });
        if (i || n) window.navigator.msSaveBlob(a, e);
        else {
            var s = document.createElement("a");
            s.download = e, s.innerHTML = "Download File", null !== window.webkitURL ? s.href = window.webkitURL.createObjectURL(a) : (s.href = window.URL.createObjectURL(a), s.onclick = destroyClickedElement, s.style.display = "none", document.body.appendChild(s)), s.click()
        }
    }
}

function pix_ripple(e, t) {
    0 != $(t).find(".ripple").length && $(t).find(".ripple").remove();
    var i = $(t).offset().left,
        n = $(t).offset().top,
        o = $(t).width(),
        a = $(t).height();
    $(t).prepend("<span class='ripple'></span>"), o >= a ? a = o : o = a;
    var s = e.pageX - i - o / 2,
        r = e.pageY - n - a / 2;
    $(t).find(".ripple").css({
        width: o,
        height: a,
        top: r + "px",
        left: s + "px"
    }).addClass("rippleEffect")
}

function pix_img_scan(e, t) {
    var i = [];
    i = t;
    var n = new RegExp("^([a-z]+://|//)", "i");
    return $("#" + e + " *").each(function() {
        if ($(this).is("img")) n.test($(this).attr("src")) || i.push($(this).attr("src"));
        else {
            var e = $(this).css("background-image");
            if ("none" != e) {
                console.log("The test = " + e);
                var t = /url\(\"([\s\S]*)\"\)/;
                if (t.exec(e)) {
                    var o = t.exec(e)[1];
                    if (o) {
                        n.test(o) || i.push(o);
                        var a = /([\s\S]*)\/project\/([\s\S]*)\/images\/([\s\S]*)/;
                        if (a.exec(o)) {
                            l = a.exec(o)[3];
                            i.push("images/" + l)
                        }
                        var s = /([\s\S]*)\/items\/([\s\S]*)\/images\/([\s\S]*)/;
                        if (s.exec(o)) {
                            l = s.exec(o)[3];
                            i.push("images/" + l)
                        }
                        var r = /([\s\S]*)\/uploads\/([\s\S]*)/;
                        if (r.exec(o)) {
                            var l = r.exec(o)[2];
                            i.push("uploads/" + l)
                        }
                    }
                }
            }
        }
    }), i
}

function pix_img_scan2(e, t) {
    var i = [];
    i = t, $("#pix_temp").html(e);
    var n = new RegExp("^([a-z]+://|//)", "i");
    return $("#pix_temp *").each(function() {
        if ($(this).is("img")) n.test($(this).attr("src")) || i.push($(this).attr("src"));
        else {
            var e = $(this).css("background-image");
            if ("none" != e) {
                var t = /url\(\"([\s\S]*)\"\)/;
                if (t.exec(e)) {
                    var o = t.exec(e)[1];
                    if (o) {
                        n.test(o) || i.push(o);
                        var a = /([\s\S]*)\/megapack\/images\/([\s\S]*)/;
                        if (a.exec(o)) {
                            r = a.exec(o)[2];
                            i.push("megapack/" + r)
                        }
                        var s = /([\s\S]*)\/uploads\/([\s\S]*)/;
                        if (s.exec(o)) {
                            var r = s.exec(o)[2];
                            i.push("uploads/" + r)
                        }
                    }
                }
            }
        }
    }), $("#pix_temp").html(""), i
}

function pix_sortStart(e, t) {
    t.placeholder.css({
        height: t.item.outerHeight()
    })
}

function fixed_header_update() {
    if ($("#pixGrid").find(".pix_nav_menu")) {
        var e = $("#pixGrid").find(".pix_section.pix_nav_menu");
        if (e.hasClass("pix-over-header") || e.hasClass("pix-fixed-top")) {
            var t = e.index(),
                i = e.outerHeight();
            t++, $("[data-pix-offset]").each(function() {
                var e = $(this).css("padding-top").replace("px", "") - $(this).attr("data-pix-offset");
                $(this).css("padding-top", e), $(this).removeAttr("data-pix-offset")
            });
            var n = $("#pixGrid .pix_section").eq(t);
            if (n.length) {
                n.attr("data-pix-offset", i);
                var o = n.css("padding-top").replace("px", "");
                o = Number(o) + Number(i), n.css("padding-top", o)
            }
        } else $("[data-pix-offset]").each(function() {
            var e = $(this).css("padding-top").replace("px", "") - $(this).attr("data-pix-offset");
            $(this).css("padding-top", e), $(this).removeAttr("data-pix-offset")
        })
    }
}

function preview_btn_check() {
    $("#pix_preview").hasClass("active") && $("#pixGrid").removeClass("ge-editing")
}

function fix_sections_ids() {
    $("#pixGrid .pix_section").each(function() {
        var e = $(this).attr("id");
        if (void 0 === e || 0 == e) {
            for (var t = 1, i = "section_" + t; $("#pixGrid #" + i).length > 0;) i = "section_" + ++t;
            $(this).attr("id", i)
        }
    })
}

function fix_elements_ids() {
    $("#pixGrid .carousel[id]").each(function() {
        var e = this.id;
        if ($("[id=" + this.id + "]").length > 1) {
            var t = e,
                i = /(.*)_\d/;
            if (i.exec(e)) {
                var n = i.exec(e)[1];
                t = n
            }
            $("[id=" + e + "]").each(function() {
                for (var e = 0, i = t + "_" + e; $("[id=" + i + "]").length > 0;) i = t + "_" + e, e++;
                $(this).attr("id", i), $(this).find(".carousel-indicators").find("li").each(function() {
                    $(this).attr("data-target", "#" + i)
                }), $(this).find(".carousel-control").each(function() {
                    $(this).attr("href", "#" + i)
                })
            })
        }
    }), $("#pixGrid .panel-group[id]").each(function() {
        var e = this.id;
        if ($("[id=" + this.id + "]").length > 1) {
            var t = e,
                i = /(.*)_\d/;
            if (i.exec(e)) {
                var n = i.exec(e)[1];
                t = n
            }
            $("[id=" + e + "]").each(function() {
                for (var e = 0, i = t + "_" + e; $("[id=" + i + "]").length > 0;) i = t + "_" + e, e++;
                $(this).attr("id", i), $(this).find(".collapsed").each(function() {
                    $(this).attr("data-parent", "#" + i)
                })
            })
        }
    }), $("#pixGrid .panel-collapse[id]").each(function() {
        var e = this.id;
        if ($("[id=" + this.id + "]").length > 1) {
            var t = e,
                i = /(.*)_\d/;
            if (i.exec(e)) {
                var n = i.exec(e)[1];
                t = n
            }
            $("[id=" + e + "]").each(function() {
                for (var i = 0, n = t + "_" + i; $("[id=" + n + "]").length > 0;) n = t + "_" + i, i++;
                $(this).attr("id", n), $(this).closest(".panel-group").find("a[href=#" + e + "]").each(function() {
                    $(this).attr("href", "#" + n)
                })
            })
        }
    })
}

function test_upload() {
    console.log("test upload"), $("#pix_file_input").unbind();
    var e = null;
    $("#pix_file_input").filer({
        limit: 4,
        maxSize: 4,
        extensions: ["jpg", "jpeg", "png", "gif"],
        changeInput: '<button type="button" class="btn btn-upload"><i class="material-icons">cloud_upload</i> UPLOAD IMAGE</button>',
        showThumbs: !1,
        appendTo: "#pix_img_edit_gallery",
        templates: {
            box: '<ul class="jFiler-items-list jFiler-items-grid"></ul>',
            item: '<li class="jFiler-item">                        <div class="jFiler-item-container">                            <div class="jFiler-item-inner">                                <div class="jFiler-item-thumb">                                    <div class="jFiler-item-status"></div>                                    <div class="jFiler-item-info">                                        <span class="jFiler-item-title"><b title="{{fi-name}}">{{fi-name | limitTo: 25}}</b></span>                                        <span class="jFiler-item-others">{{fi-size2}}</span>                                    </div>                                    {{fi-image}}                                </div>                                <div class="jFiler-item-assets jFiler-row">                                    <ul class="list-inline pull-left">                                        <li>{{fi-progressBar}}</li>                                    </ul>                                    <ul class="list-inline pull-right">                                        <li><a class="icon-jfi-trash jFiler-item-trash-action"></a></li>                                    </ul>                                </div>                            </div>                        </div>                    </li>',
            itemAppend: '<div class="col-xs-6 col-md-15 pix_img_div"><a href="#" class="thumbnail clicked"><li class="jFiler-item">                            <div class="jFiler-item-container">                                <div class="jFiler-item-inner">                                    <div class="jFiler-item-thumb">                                        <div class="jFiler-item-status"></div>                                        <div class="jFiler-item-info">                                            <span class="jFiler-item-title"><b title="{{fi-name}}">{{fi-name | limitTo: 25}}</b></span>                                            <span class="jFiler-item-others">{{fi-size2}}</span>                                        </div>                                        {{fi-image}}                                    </div>                                    <div class="jFiler-item-assets jFiler-row">                                        <ul class="list-inline pull-left">                                            <li><span class="jFiler-item-others">{{fi-icon}}</span></li>                                        </ul>                                        <ul class="list-inline pull-right">                                            <li><a class="icon-jfi-trash jFiler-item-trash-action"></a></li>                                        </ul>                                    </div>                                </div>                            </div>                        </li></a></div>',
            progressBar: '<div class="bar"></div>',
            itemAppendToEnd: !1,
            removeConfirmation: !0,
            _selectors: {
                list: ".jFiler-items-list",
                item: ".jFiler-item",
                progressBar: ".bar",
                remove: ".jFiler-item-trash-action"
            }
        },
        dragDrop: {
            dragEnter: null,
            dragLeave: null,
            drop: null
        },
        uploadFile: {
            url: "upload_image",
            data: null,
            type: "POST",
            enctype: "multipart/form-data",
            beforeSend: function() {
                e = $.confirm({
                    theme: "pix-default-modal",
                    title: "Uploading Image",
                    boxWidth: "600px",
                    useBootstrap: !1,
                    backgroundDismiss: !0,
                    content: 'Please wait until the upload is complete.<div class=" jconfirm-box jconfirm-hilight-shake jconfirm-type-default  jconfirm-type-animated loading" role="dialog"></div>',
                    defaultButtons: !1,
                    buttons: {
                        cancel: {
                            text: "OK",
                            btnClass: "btn-cancel"
                        }
                    }
                })
            },
            success: function(t, i) {
                e && e.close();
                var n = i.find(".jFiler-jProgressBar").parent();
                i.find(".jFiler-jProgressBar").fadeOut("slow", function() {
                    $('<div class="jFiler-item-others text-success"><i class="icon-jfi-check-circle"></i> Success</div>').hide().appendTo(n).fadeIn("slow")
                });
                var o = JSON.parse(t);
                $("#pix_img_edit_gallery a").removeClass("clicked");
                var a = $('<div class="col-xs-6 col-md-15 pix_img_div"><a href="#" class="pix_g_img clicked"><img src="uploads/' + o.metas[0].name + '"></a><a href="#" class="pix_del_img_btn" data-name="' + o.metas[0].name + '">DELETE</a></div>');
                $(".pix_image_modal_imgs").prepend(a), $("#pix_img_edit_gallery a.clicked").click(), $(".pix_gallery_scroll.scrollbar-macosx").scrollTop(0), pix_system.imagesCollection.add_image(o.metas[0].name, "uploads")
            },
            error: function(t) {
                e && e.close(), $(".pix_modal_upload .btn-upload").remove(), test_upload()
            },
            statusCode: null,
            onProgress: null,
            onComplete: null
        },
        files: null,
        addMore: !1,
        clipBoardPaste: !0,
        excludeName: null,
        beforeRender: null,
        afterRender: null,
        beforeShow: null,
        beforeSelect: null,
        onSelect: null,
        afterShow: null,
        onRemove: function(e, t, i, n, o, a, s) {
            t = t.name
        },
        onEmpty: null,
        options: null,
        captions: {
            button: "Choose Files",
            feedback: "Choose files To Upload",
            feedback2: "files were chosen",
            drop: "Drop file here to Upload",
            removeConfirmation: "Are you sure you want to remove this file?",
            errors: {
                filesLimit: "Only {{fi-limit}} files are allowed to be uploaded.",
                filesType: "Only Images are allowed to be uploaded.",
                filesSize: "{{fi-name}} is too large! Please upload file up to {{fi-maxSize}} MB.",
                filesSizeAll: "Files you've choosed are too large! Please upload files up to {{fi-maxSize}} MB."
            }
        }
    })
}

function demo_popup() {
    $.confirm({
        title: "PURCHASE MEGAPACK",
        boxWidth: "600px",
        theme: "pix-purchase-modal",
        useBootstrap: !1,
        backgroundDismiss: !0,
        content: 'Get your license today and get access to the<br>most powerful page builder ever!<br><span class="note-text">Already got a licence? <a href="https://pixfort.com/register" target="_blank"><strong>create an account</strong></a> to start using PixFort builder.</span>',
        buttons: {
            purchase: {
                text: "PURCHASE",
                btnClass: "btn-green",
                keys: ["enter", "shift"],
                action: function() {
                    window.open("https://themeforest.net/item/megapack-premium-marketing-landing-pages-pack-page-builder/20350174?ref=PixFort", "_blank"), $.confirm({
                        title: '<svg version="1.1" id="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="80px" height="80px" viewBox="0 0 80 80" enable-background="new 0 0 80 80" xml:space="preserve"> <g> <g> <path fill="none" stroke="#BABABA" stroke-width="2.5" stroke-miterlimit="10" d="M45.7,50.3c-5.1-1.9-5.1-4.1-5.1-5.8v-2 c2.5-2.2,4.4-5.3,5.4-9c0,0,0,0,0.1,0c3.2,0,3.9-6.5,3.9-7.5s0.1-4.9-3.1-4.9C53.6,4.7,35.4-4,21.7,5.4c-5.7,0-6.1,7.5-4,15.7 c-3.2,0-3.1,3.9-3.1,4.9s0.7,7.5,3.9,7.5c0,0,0,0,0,0c1,3.7,2.9,6.8,5.4,9v2.1c0,2.1,0,5.2-10.4,7.2C1.5,54.1,1.5,63.1,1.5,63.1 h41.2"/> </g> <path fill="none" stroke="#1274E6" stroke-width="2.5" stroke-miterlimit="10" d="M78.5,60.5c0,9.9-8,18-18,18s-18-8-18-18 c0-9.9,8-18,18-18S78.5,50.6,78.5,60.5z"/> <line fill="none" stroke="#1274E6" stroke-width="2.5" stroke-linecap="round" stroke-miterlimit="10" x1="52.8" y1="60.5" x2="68.2" y2="60.5"/> <line fill="none" stroke="#1274E6" stroke-width="2.5" stroke-linecap="round" stroke-miterlimit="10" x1="60.5" y1="68.2" x2="60.5" y2="52.8"/> </g> </svg><br>What\'s Next?',
                        boxWidth: "400px",
                        theme: "pix-next-modal",
                        useBootstrap: !1,
                        backgroundDismiss: !0,
                        content: "After you purchase a copy of MEGAPACK create your account at pixfort.com and start building your website.",
                        buttons: {
                            next: {
                                text: "CREATE ACCOUNT",
                                btnClass: "btn-blue",
                                keys: ["enter", "shift"],
                                action: function() {
                                    window.open("https://pixfort.com/register", "_blank")
                                }
                            },
                            cancel: {
                                text: "CANCEL",
                                btnClass: "btn-cancel"
                            }
                        }
                    })
                }
            },
            cancel: {
                text: "CANCEL",
                btnClass: "btn-cancel"
            }
        }
    })
}

function find_new_id(e, t) {
    if (!$("#pixGrid").find("#" + e).length && "full" == t) return e;
    for (var i = 1; 0 != $("#pixGrid").find("#" + e + "_" + i).length;) i++;
    return "full" == t ? e + "_" + i : i
}

function login_popup() {
    $.confirm({
        title: "You have been logged out",
        boxWidth: "350px",
        useBootstrap: !1,
        content: "Please login to continue using the builder.",
        buttons: {
            cancel: function() {},
            heyThere: {
                text: "Login",
                btnClass: "btn-blue",
                keys: ["enter"],
                action: function() {
                    window.open(window.base_url + "login", "_blank").focus()
                }
            }
        }
    })
}
if ("undefined" == typeof jQuery) throw new Error("jquery-confirm requires jQuery");
var jconfirm, Jconfirm;
! function(e, t) {
    e.fn.confirm = function(t, i) {
        return void 0 === t && (t = {}), "string" == typeof t && (t = {
            content: t,
            title: i || !1
        }), e(this).each(function() {
            var i = e(this);
            i.attr("jc-attached") ? console.warn("jConfirm has already been attached to this element ", i[0]) : (i.on("click", function(n) {
                n.preventDefault();
                var o = e.extend({}, t);
                if (i.attr("data-title") && (o.title = i.attr("data-title")), i.attr("data-content") && (o.content = i.attr("data-content")), void 0 === o.buttons && (o.buttons = {}), o.$target = i, i.attr("href") && 0 == Object.keys(o.buttons).length) {
                    var a = e.extend(!0, {}, jconfirm.pluginDefaults.defaultButtons, (jconfirm.defaults || {}).defaultButtons || {}),
                        s = Object.keys(a)[0];
                    o.buttons = a, o.buttons[s].action = function() {
                        location.href = i.attr("href")
                    }
                }
                o.closeIcon = !1;
                e.confirm(o)
            }), i.attr("jc-attached", !0))
        }), e(this)
    }, e.confirm = function(t, i) {
        void 0 === t && (t = {}), "string" == typeof t && (t = {
            content: t,
            title: i || !1
        });
        var n = !(0 == t.buttons);
        if ("object" != typeof t.buttons && (t.buttons = {}), 0 == Object.keys(t.buttons).length && n) {
            var o = e.extend(!0, {}, jconfirm.pluginDefaults.defaultButtons, (jconfirm.defaults || {}).defaultButtons || {});
            t.buttons = o
        }
        return jconfirm(t)
    }, e.alert = function(t, i) {
        void 0 === t && (t = {}), "string" == typeof t && (t = {
            content: t,
            title: i || !1
        });
        var n = !(0 == t.buttons);
        if ("object" != typeof t.buttons && (t.buttons = {}), 0 == Object.keys(t.buttons).length && n) {
            var o = e.extend(!0, {}, jconfirm.pluginDefaults.defaultButtons, (jconfirm.defaults || {}).defaultButtons || {}),
                a = Object.keys(o)[0];
            t.buttons[a] = o[a]
        }
        return jconfirm(t)
    }, e.dialog = function(e, t) {
        return void 0 === e && (e = {}), "string" == typeof e && (e = {
            content: e,
            title: t || !1,
            closeIcon: function() {}
        }), e.buttons = {}, void 0 === e.closeIcon && (e.closeIcon = function() {}), e.confirmKeys = [13], jconfirm(e)
    }, jconfirm = function(t) {
        void 0 === t && (t = {});
        var i = e.extend(!0, {}, jconfirm.pluginDefaults);
        jconfirm.defaults && (i = e.extend(!0, i, jconfirm.defaults)), i = e.extend(!0, {}, i, t);
        var n = new Jconfirm(i);
        return jconfirm.instances.push(n), n
    }, (Jconfirm = function(t) {
        e.extend(this, t), this._init()
    }).prototype = {
        _init: function() {
            var t = this;
            jconfirm.instances.length || (jconfirm.lastFocused = e("body").find(":focus")), this._id = Math.round(99999 * Math.random()), this.contentParsed = e(document.createElement("div")), this.lazyOpen || setTimeout(function() {
                t.open()
            }, 0)
        },
        _buildHTML: function() {
            var t = this;
            this._parseAnimation(this.animation, "o"), this._parseAnimation(this.closeAnimation, "c"), this._parseBgDismissAnimation(this.backgroundDismissAnimation), this._parseColumnClass(this.columnClass), this._parseTheme(this.theme), this._parseType(this.type);
            var i = e(this.template);
            i.find(".jconfirm-box").addClass(this.animationParsed).addClass(this.backgroundDismissAnimationParsed).addClass(this.typeParsed), this.typeAnimated && i.find(".jconfirm-box").addClass("jconfirm-type-animated"), this.useBootstrap ? (i.find(".jc-bs3-row").addClass(this.bootstrapClasses.row), i.find(".jc-bs3-row").addClass("justify-content-md-center justify-content-sm-center justify-content-xs-center justify-content-lg-center"), i.find(".jconfirm-box-container").addClass(this.columnClassParsed), this.containerFluid ? i.find(".jc-bs3-container").addClass(this.bootstrapClasses.containerFluid) : i.find(".jc-bs3-container").addClass(this.bootstrapClasses.container)) : i.find(".jconfirm-box").css("width", this.boxWidth), this.titleClass && i.find(".jconfirm-title-c").addClass(this.titleClass), i.addClass(this.themeParsed);
            var n = "jconfirm-box" + this._id;
            i.find(".jconfirm-box").attr("aria-labelledby", n).attr("tabindex", -1), i.find(".jconfirm-content").attr("id", n), null !== this.bgOpacity && i.find(".jconfirm-bg").css("opacity", this.bgOpacity), this.rtl && i.addClass("jconfirm-rtl"), this.$el = i.appendTo(this.container), this.$jconfirmBoxContainer = this.$el.find(".jconfirm-box-container"), this.$jconfirmBox = this.$body = this.$el.find(".jconfirm-box"), this.$jconfirmBg = this.$el.find(".jconfirm-bg"), this.$title = this.$el.find(".jconfirm-title"), this.$titleContainer = this.$el.find(".jconfirm-title-c"), this.$content = this.$el.find("div.jconfirm-content"), this.$contentPane = this.$el.find(".jconfirm-content-pane"), this.$icon = this.$el.find(".jconfirm-icon-c"), this.$closeIcon = this.$el.find(".jconfirm-closeIcon"), this.$holder = this.$el.find(".jconfirm-holder"), this.$btnc = this.$el.find(".jconfirm-buttons"), this.$scrollPane = this.$el.find(".jconfirm-scrollpane"), t.setStartingPoint(), this._contentReady = e.Deferred(), this._modalReady = e.Deferred(), this.$holder.css({
                "padding-top": this.offsetTop,
                "padding-bottom": this.offsetBottom
            }), this.setTitle(), this.setIcon(), this._setButtons(), this._parseContent(), this.initDraggable(), this.isAjax && this.showLoading(!1), e.when(this._contentReady, this._modalReady).then(function() {
                t.isAjaxLoading ? setTimeout(function() {
                    t.isAjaxLoading = !1, t.setContent(), t.setTitle(), t.setIcon(), setTimeout(function() {
                        t.hideLoading(!1), t._updateContentMaxHeight()
                    }, 100), "function" == typeof t.onContentReady && t.onContentReady()
                }, 50) : (t._updateContentMaxHeight(), t.setTitle(), t.setIcon(), "function" == typeof t.onContentReady && t.onContentReady()), t.autoClose && t._startCountDown()
            }), this._watchContent(), "none" === this.animation && (this.animationSpeed = 1, this.animationBounce = 1), this.$body.css(this._getCSS(this.animationSpeed, this.animationBounce)), this.$contentPane.css(this._getCSS(this.animationSpeed, 1)), this.$jconfirmBg.css(this._getCSS(this.animationSpeed, 1)), this.$jconfirmBoxContainer.css(this._getCSS(this.animationSpeed, 1))
        },
        _typePrefix: "jconfirm-type-",
        typeParsed: "",
        _parseType: function(e) {
            this.typeParsed = this._typePrefix + e
        },
        setType: function(e) {
            var t = this.typeParsed;
            this._parseType(e), this.$jconfirmBox.removeClass(t).addClass(this.typeParsed)
        },
        themeParsed: "",
        _themePrefix: "jconfirm-",
        setTheme: function(e) {
            var t = this.theme;
            this.theme = e || this.theme, this._parseTheme(this.theme), t && this.$el.removeClass(t), this.$el.addClass(this.themeParsed), this.theme = e
        },
        _parseTheme: function(t) {
            var i = this;
            t = t.split(","), e.each(t, function(n, o) {
                -1 === o.indexOf(i._themePrefix) && (t[n] = i._themePrefix + e.trim(o))
            }), this.themeParsed = t.join(" ").toLowerCase()
        },
        backgroundDismissAnimationParsed: "",
        _bgDismissPrefix: "jconfirm-hilight-",
        _parseBgDismissAnimation: function(t) {
            var i = t.split(","),
                n = this;
            e.each(i, function(t, o) {
                -1 === o.indexOf(n._bgDismissPrefix) && (i[t] = n._bgDismissPrefix + e.trim(o))
            }), this.backgroundDismissAnimationParsed = i.join(" ").toLowerCase()
        },
        animationParsed: "",
        closeAnimationParsed: "",
        _animationPrefix: "jconfirm-animation-",
        setAnimation: function(e) {
            this.animation = e || this.animation, this._parseAnimation(this.animation, "o")
        },
        _parseAnimation: function(t, i) {
            i = i || "o";
            var n = t.split(","),
                o = this;
            e.each(n, function(t, i) {
                -1 === i.indexOf(o._animationPrefix) && (n[t] = o._animationPrefix + e.trim(i))
            });
            var a = n.join(" ").toLowerCase();
            return "o" === i ? this.animationParsed = a : this.closeAnimationParsed = a, a
        },
        setCloseAnimation: function(e) {
            this.closeAnimation = e || this.closeAnimation, this._parseAnimation(this.closeAnimation, "c")
        },
        setAnimationSpeed: function(e) {
            this.animationSpeed = e || this.animationSpeed
        },
        columnClassParsed: "",
        setColumnClass: function(e) {
            this.useBootstrap ? (this.columnClass = e || this.columnClass, this._parseColumnClass(this.columnClass), this.$jconfirmBoxContainer.addClass(this.columnClassParsed)) : console.warn("cannot set columnClass, useBootstrap is set to false")
        },
        _updateContentMaxHeight: function() {
            var i = e(t).height() - (this.$jconfirmBox.outerHeight() - this.$contentPane.outerHeight()) - (this.offsetTop + this.offsetBottom);
            this.$contentPane.css({
                "max-height": i + "px"
            })
        },
        setBoxWidth: function(e) {
            this.useBootstrap ? console.warn("cannot set boxWidth, useBootstrap is set to true") : (this.boxWidth = e, this.$jconfirmBox.css("width", e))
        },
        _parseColumnClass: function(e) {
            var t;
            switch (e = e.toLowerCase()) {
                case "xl":
                case "xlarge":
                    t = "col-md-12";
                    break;
                case "l":
                case "large":
                    t = "col-md-8 col-md-offset-2";
                    break;
                case "m":
                case "medium":
                    t = "col-md-6 col-md-offset-3";
                    break;
                case "s":
                case "small":
                    t = "col-md-4 col-md-offset-4";
                    break;
                case "xs":
                case "xsmall":
                    t = "col-md-2 col-md-offset-5";
                    break;
                default:
                    t = e
            }
            this.columnClassParsed = t
        },
        initDraggable: function() {
            var i = this,
                n = this.$titleContainer;
            this.resetDrag(), this.draggable && (n.on("mousedown", function(e) {
                n.addClass("jconfirm-hand"), i.mouseX = e.clientX, i.mouseY = e.clientY, i.isDrag = !0
            }), e(t).on("mousemove." + this._id, function(e) {
                i.isDrag && (i.movingX = e.clientX - i.mouseX + i.initialX, i.movingY = e.clientY - i.mouseY + i.initialY, i.setDrag())
            }), e(t).on("mouseup." + this._id, function() {
                n.removeClass("jconfirm-hand"), i.isDrag && (i.isDrag = !1, i.initialX = i.movingX, i.initialY = i.movingY)
            }))
        },
        resetDrag: function() {
            this.isDrag = !1, this.initialX = 0, this.initialY = 0, this.movingX = 0, this.movingY = 0, this.mouseX = 0, this.mouseY = 0, this.$jconfirmBoxContainer.css("transform", "translate(0px, 0px)")
        },
        setDrag: function() {
            if (this.draggable) {
                this.alignMiddle = !1;
                var i = this.$jconfirmBox.outerWidth(),
                    n = this.$jconfirmBox.outerHeight(),
                    o = e(t).width(),
                    a = e(t).height(),
                    s = this;
                if (s.movingX % 1 == 0 || s.movingY % 1 == 0) {
                    if (s.dragWindowBorder) {
                        var r = o / 2 - i / 2,
                            l = a / 2 - n / 2;
                        l -= s.dragWindowGap, (r -= s.dragWindowGap) + s.movingX < 0 ? s.movingX = -r : r - s.movingX < 0 && (s.movingX = r), l + s.movingY < 0 ? s.movingY = -l : l - s.movingY < 0 && (s.movingY = l)
                    }
                    s.$jconfirmBoxContainer.css("transform", "translate(" + s.movingX + "px, " + s.movingY + "px)")
                }
            }
        },
        _scrollTop: function() {
            if ("undefined" != typeof pageYOffset) return pageYOffset;
            var e = document.body,
                t = document.documentElement;
            return (t = t.clientHeight ? t : e).scrollTop
        },
        _watchContent: function() {
            var i = this;
            this._timer && clearInterval(this._timer);
            var n = 0;
            this._timer = setInterval(function() {
                if (i.smoothContent) {
                    var o = i.$content.outerHeight() || 0;
                    o !== n && (i.$contentPane.css({
                        height: o
                    }).scrollTop(0), n = o);
                    var a = e(t).height();
                    i.offsetTop + i.offsetBottom + i.$jconfirmBox.height() - i.$contentPane.height() + i.$content.height() < a ? i.$contentPane.addClass("no-scroll") : i.$contentPane.removeClass("no-scroll")
                }
            }, this.watchInterval)
        },
        _overflowClass: "jconfirm-overflow",
        _hilightAnimating: !1,
        highlight: function() {
            this.hiLightModal()
        },
        hiLightModal: function() {
            var e = this;
            if (!this._hilightAnimating) {
                e.$body.addClass("hilight");
                var t = parseFloat(e.$body.css("animation-duration")) || 2;
                this._hilightAnimating = !0, setTimeout(function() {
                    e._hilightAnimating = !1, e.$body.removeClass("hilight")
                }, 1e3 * t)
            }
        },
        _bindEvents: function() {
            var i = this;
            this.boxClicked = !1, this.$scrollPane.click(function(e) {
                if (!i.boxClicked) {
                    var t, n = !1,
                        o = !1;
                    if ("string" == typeof(t = "function" == typeof i.backgroundDismiss ? i.backgroundDismiss() : i.backgroundDismiss) && void 0 !== i.buttons[t] ? (n = t, o = !1) : o = void 0 === t || 1 == !!t, n) {
                        var a = i.buttons[n].action.apply(i);
                        o = void 0 === a || !!a
                    }
                    o ? i.close() : i.hiLightModal()
                }
                i.boxClicked = !1
            }), this.$jconfirmBox.click(function(e) {
                i.boxClicked = !0
            });
            var n = !1;
            e(t).on("jcKeyDown." + i._id, function(e) {
                n || (n = !0)
            }), e(t).on("keyup." + i._id, function(e) {
                n && (i.reactOnKey(e), n = !1)
            }), e(t).on("resize." + this._id, function() {
                i._updateContentMaxHeight(), setTimeout(function() {
                    i.resetDrag()
                }, 100)
            })
        },
        _cubic_bezier: "0.36, 0.55, 0.19",
        _getCSS: function(e, t) {
            return {
                "-webkit-transition-duration": e / 1e3 + "s",
                "transition-duration": e / 1e3 + "s",
                "-webkit-transition-timing-function": "cubic-bezier(" + this._cubic_bezier + ", " + t + ")",
                "transition-timing-function": "cubic-bezier(" + this._cubic_bezier + ", " + t + ")"
            }
        },
        _setButtons: function() {
            var t = this,
                i = 0;
            if ("object" != typeof this.buttons && (this.buttons = {}), e.each(this.buttons, function(n, o) {
                    i += 1, "function" == typeof o && (t.buttons[n] = o = {
                        action: o
                    }), t.buttons[n].text = o.text || n, t.buttons[n].btnClass = o.btnClass || "btn-default", t.buttons[n].action = o.action || function() {}, t.buttons[n].keys = o.keys || [], t.buttons[n].isHidden = o.isHidden || !1, t.buttons[n].isDisabled = o.isDisabled || !1, e.each(t.buttons[n].keys, function(e, i) {
                        t.buttons[n].keys[e] = i.toLowerCase()
                    });
                    var a = e('<button type="button" class="btn"></button>').html(t.buttons[n].text).addClass(t.buttons[n].btnClass).prop("disabled", t.buttons[n].isDisabled).css("display", t.buttons[n].isHidden ? "none" : "").click(function(e) {
                        e.preventDefault();
                        var i = t.buttons[n].action.apply(t, [t.buttons[n]]);
                        t.onAction.apply(t, [n, t.buttons[n]]), t._stopCountDown(), (void 0 === i || i) && t.close()
                    });
                    t.buttons[n].el = a, t.buttons[n].setText = function(e) {
                        a.html(e)
                    }, t.buttons[n].addClass = function(e) {
                        a.addClass(e)
                    }, t.buttons[n].removeClass = function(e) {
                        a.removeClass(e)
                    }, t.buttons[n].disable = function() {
                        t.buttons[n].isDisabled = !0, a.prop("disabled", !0)
                    }, t.buttons[n].enable = function() {
                        t.buttons[n].isDisabled = !1, a.prop("disabled", !1)
                    }, t.buttons[n].show = function() {
                        t.buttons[n].isHidden = !1, a.css("display", "")
                    }, t.buttons[n].hide = function() {
                        t.buttons[n].isHidden = !0, a.css("display", "none")
                    }, t["$_" + n] = t["$$" + n] = a, t.$btnc.append(a)
                }), 0 === i && this.$btnc.hide(), null === this.closeIcon && 0 === i && (this.closeIcon = !0), this.closeIcon) {
                if (this.closeIconClass) {
                    var n = '<i class="' + this.closeIconClass + '"></i>';
                    this.$closeIcon.html(n)
                }
                this.$closeIcon.click(function(e) {
                    e.preventDefault();
                    var i, n = !1,
                        o = !1;
                    if ("string" == typeof(i = "function" == typeof t.closeIcon ? t.closeIcon() : t.closeIcon) && void 0 !== t.buttons[i] ? (n = i, o = !1) : o = void 0 === i || 1 == !!i, n) {
                        var a = t.buttons[n].action.apply(t);
                        o = void 0 === a || !!a
                    }
                    o && t.close()
                }), this.$closeIcon.show()
            } else this.$closeIcon.hide()
        },
        setTitle: function(e, t) {
            if (t = t || !1, void 0 !== e)
                if ("string" == typeof e) this.title = e;
                else if ("function" == typeof e) {
                "function" == typeof e.promise && console.error("Promise was returned from title function, this is not supported.");
                var i = e();
                this.title = "string" == typeof i && i
            } else this.title = !1;
            this.isAjaxLoading && !t || (this.$title.html(this.title || ""), this.updateTitleContainer())
        },
        setIcon: function(e, t) {
            if (t = t || !1, void 0 !== e)
                if ("string" == typeof e) this.icon = e;
                else if ("function" == typeof e) {
                var i = e();
                this.icon = "string" == typeof i && i
            } else this.icon = !1;
            this.isAjaxLoading && !t || (this.$icon.html(this.icon ? '<i class="' + this.icon + '"></i>' : ""), this.updateTitleContainer())
        },
        updateTitleContainer: function() {
            this.title || this.icon ? this.$titleContainer.show() : this.$titleContainer.hide()
        },
        setContentPrepend: function(e, t) {
            e && this.contentParsed.prepend(e)
        },
        setContentAppend: function(e) {
            e && this.contentParsed.append(e)
        },
        setContent: function(e, t) {
            t = !!t;
            var i = this;
            e && this.contentParsed.html("").append(e), this.isAjaxLoading && !t || (this.$content.html(""), this.$content.append(this.contentParsed), setTimeout(function() {
                i.$body.find("input[autofocus]:visible:first").focus()
            }, 100))
        },
        loadingSpinner: !1,
        showLoading: function(e) {
            this.loadingSpinner = !0, this.$jconfirmBox.addClass("loading"), e && this.$btnc.find("button").prop("disabled", !0)
        },
        hideLoading: function(e) {
            this.loadingSpinner = !1, this.$jconfirmBox.removeClass("loading"), e && this.$btnc.find("button").prop("disabled", !1)
        },
        ajaxResponse: !1,
        contentParsed: "",
        isAjax: !1,
        isAjaxLoading: !1,
        _parseContent: function() {
            var t = this;
            if ("function" == typeof this.content) {
                var i = this.content.apply(this);
                "string" == typeof i ? this.content = i : "object" == typeof i && "function" == typeof i.always ? (this.isAjax = !0, this.isAjaxLoading = !0, i.always(function(e, i, n) {
                    t.ajaxResponse = {
                        data: e,
                        status: i,
                        xhr: n
                    }, t._contentReady.resolve(e, i, n), "function" == typeof t.contentLoaded && t.contentLoaded(e, i, n)
                }), this.content = "&nbsp;") : this.content = "&nbsp;"
            }
            if ("string" == typeof this.content && "url:" === this.content.substr(0, 4).toLowerCase()) {
                this.isAjax = !0, this.isAjaxLoading = !0;
                var n = this.content.substring(4, this.content.length);
                e.get(n).done(function(e) {
                    t.contentParsed.html(e)
                }).always(function(e, i, n) {
                    t.ajaxResponse = {
                        data: e,
                        status: i,
                        xhr: n
                    }, t._contentReady.resolve(e, i, n), "function" == typeof t.contentLoaded && t.contentLoaded(e, i, n)
                })
            }
            this.content || (this.content = "&nbsp;"), this.isAjax || (this.contentParsed.html(this.content), this.setContent(), t._contentReady.resolve())
        },
        _stopCountDown: function() {
            clearInterval(this.autoCloseInterval), this.$cd && this.$cd.remove()
        },
        _startCountDown: function() {
            var t = this,
                i = this.autoClose.split("|");
            if (2 !== i.length) return console.error("Invalid option for autoClose. example 'close|10000'"), !1;
            var n = i[0],
                o = parseInt(i[1]);
            if (void 0 === this.buttons[n]) return console.error("Invalid button key '" + n + "' for autoClose"), !1;
            var a = Math.ceil(o / 1e3);
            this.$cd = e('<span class="countdown"> (' + a + ")</span>").appendTo(this["$_" + n]), this.autoCloseInterval = setInterval(function() {
                t.$cd.html(" (" + (a -= 1) + ") "), a <= 0 && (t["$$" + n].trigger("click"), t._stopCountDown())
            }, 1e3)
        },
        _getKey: function(e) {
            switch (e) {
                case 192:
                    return "tilde";
                case 13:
                    return "enter";
                case 16:
                    return "shift";
                case 9:
                    return "tab";
                case 20:
                    return "capslock";
                case 17:
                    return "ctrl";
                case 91:
                    return "win";
                case 18:
                    return "alt";
                case 27:
                    return "esc";
                case 32:
                    return "space"
            }
            var t = String.fromCharCode(e);
            return !!/^[A-z0-9]+$/.test(t) && t.toLowerCase()
        },
        reactOnKey: function(t) {
            var i = this,
                n = e(".jconfirm");
            if (n.eq(n.length - 1)[0] !== this.$el[0]) return !1;
            var o = t.which;
            if (this.$content.find(":input").is(":focus") && /13|32/.test(o)) return !1;
            var a = this._getKey(o);
            if ("esc" === a && this.escapeKey)
                if (!0 === this.escapeKey) this.$scrollPane.trigger("click");
                else if ("string" == typeof this.escapeKey || "function" == typeof this.escapeKey) {
                var s;
                (s = "function" == typeof this.escapeKey ? this.escapeKey() : this.escapeKey) && (void 0 === this.buttons[s] ? console.warn("Invalid escapeKey, no buttons found with key " + s) : this["$_" + s].trigger("click"))
            }
            e.each(this.buttons, function(e, t) {
                -1 != t.keys.indexOf(a) && i["$_" + e].trigger("click")
            })
        },
        setDialogCenter: function() {
            console.info("setDialogCenter is deprecated, dialogs are centered with CSS3 tables")
        },
        _unwatchContent: function() {
            clearInterval(this._timer)
        },
        close: function() {
            var i = this;
            return "function" == typeof this.onClose && this.onClose(), this._unwatchContent(), e(t).unbind("resize." + this._id), e(t).unbind("keyup." + this._id), e(t).unbind("jcKeyDown." + this._id), this.draggable && (e(t).unbind("mousemove." + this._id), e(t).unbind("mouseup." + this._id), this.$titleContainer.unbind("mousedown")), i.$el.removeClass(i.loadedClass), e("body").removeClass("jconfirm-no-scroll-" + i._id), i.$jconfirmBoxContainer.removeClass("jconfirm-no-transition"), setTimeout(function() {
                i.$body.addClass(i.closeAnimationParsed), i.$jconfirmBg.addClass("jconfirm-bg-h");
                var n = "none" === i.closeAnimation ? 1 : i.animationSpeed;
                setTimeout(function() {
                    i.$el.remove();
                    jconfirm.instances;
                    var n = jconfirm.instances.length - 1;
                    for (n; n >= 0; n--) jconfirm.instances[n]._id === i._id && jconfirm.instances.splice(n, 1);
                    if (!jconfirm.instances.length && i.scrollToPreviousElement && jconfirm.lastFocused && jconfirm.lastFocused.length && e.contains(document, jconfirm.lastFocused[0])) {
                        var o = jconfirm.lastFocused;
                        if (i.scrollToPreviousElementAnimate) {
                            var a = e(t).scrollTop(),
                                s = jconfirm.lastFocused.offset().top,
                                r = e(t).height();
                            if (s > a && s < a + r) o.focus();
                            else {
                                var l = s - Math.round(r / 3);
                                e("html, body").animate({
                                    scrollTop: l
                                }, i.animationSpeed, "swing", function() {
                                    o.focus()
                                })
                            }
                        } else o.focus();
                        jconfirm.lastFocused = !1
                    }
                    "function" == typeof i.onDestroy && i.onDestroy()
                }, .4 * n)
            }, 50), !0
        },
        open: function() {
            return !this.isOpen() && (this._buildHTML(), this._bindEvents(), this._open(), !0)
        },
        setStartingPoint: function() {
            var i = !1;
            if (!0 !== this.animateFromElement && this.animateFromElement) i = this.animateFromElement, jconfirm.lastClicked = !1;
            else {
                if (!jconfirm.lastClicked || !0 !== this.animateFromElement) return !1;
                i = jconfirm.lastClicked, jconfirm.lastClicked = !1
            }
            if (!i) return !1;
            var n = i.offset(),
                o = i.outerHeight() / 2,
                a = i.outerWidth() / 2;
            o -= this.$jconfirmBox.outerHeight() / 2, a -= this.$jconfirmBox.outerWidth() / 2;
            var s = n.top + o;
            s -= this._scrollTop();
            var r = n.left + a,
                l = e(t).height() / 2,
                c = e(t).width() / 2;
            if (s -= l - this.$jconfirmBox.outerHeight() / 2, r -= c - this.$jconfirmBox.outerWidth() / 2, Math.abs(s) > l || Math.abs(r) > c) return !1;
            this.$jconfirmBoxContainer.css("transform", "translate(" + r + "px, " + s + "px)")
        },
        _open: function() {
            var e = this;
            "function" == typeof e.onOpenBefore && e.onOpenBefore(), this.$body.removeClass(this.animationParsed), this.$jconfirmBg.removeClass("jconfirm-bg-h"), this.$body.focus(), e.$jconfirmBoxContainer.css("transform", "translate(0px, 0px)"), setTimeout(function() {
                e.$body.css(e._getCSS(e.animationSpeed, 1)), e.$body.css({
                    "transition-property": e.$body.css("transition-property") + ", margin"
                }), e.$jconfirmBoxContainer.addClass("jconfirm-no-transition"), e._modalReady.resolve(), "function" == typeof e.onOpen && e.onOpen(), e.$el.addClass(e.loadedClass)
            }, this.animationSpeed)
        },
        loadedClass: "jconfirm-open",
        isClosed: function() {
            return !this.$el || "" === this.$el.css("display")
        },
        isOpen: function() {
            return !this.isClosed()
        },
        toggle: function() {
            this.isOpen() ? this.close() : this.open()
        }
    }, jconfirm.instances = [], jconfirm.lastFocused = !1, jconfirm.pluginDefaults = {
        template: '<div class="jconfirm"><div class="jconfirm-bg jconfirm-bg-h"></div><div class="jconfirm-scrollpane"><div class="jconfirm-row"><div class="jconfirm-cell"><div class="jconfirm-holder"><div class="jc-bs3-container"><div class="jc-bs3-row"><div class="jconfirm-box-container jconfirm-animated"><div class="jconfirm-box" role="dialog" aria-labelledby="labelled" tabindex="-1"><div class="jconfirm-closeIcon">&times;</div><div class="jconfirm-title-c"><span class="jconfirm-icon-c"></span><span class="jconfirm-title"></span></div><div class="jconfirm-content-pane"><div class="jconfirm-content"></div></div><div class="jconfirm-buttons"></div><div class="jconfirm-clear"></div></div></div></div></div></div></div></div></div></div>',
        title: "Hello",
        titleClass: "",
        type: "default",
        typeAnimated: !0,
        draggable: !0,
        dragWindowGap: 15,
        dragWindowBorder: !0,
        animateFromElement: !0,
        alignMiddle: !0,
        smoothContent: !0,
        content: "Are you sure to continue?",
        buttons: {},
        defaultButtons: {
            ok: {
                action: function() {}
            },
            close: {
                action: function() {}
            }
        },
        contentLoaded: function() {},
        icon: "",
        lazyOpen: !1,
        bgOpacity: null,
        theme: "light",
        animation: "scale",
        closeAnimation: "scale",
        animationSpeed: 400,
        animationBounce: 1,
        escapeKey: !0,
        rtl: !1,
        container: "body",
        containerFluid: !1,
        backgroundDismiss: !1,
        backgroundDismissAnimation: "shake",
        autoClose: !1,
        closeIcon: null,
        closeIconClass: !1,
        watchInterval: 100,
        columnClass: "col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1",
        boxWidth: "50%",
        scrollToPreviousElement: !0,
        scrollToPreviousElementAnimate: !0,
        useBootstrap: !0,
        offsetTop: 40,
        offsetBottom: 40,
        bootstrapClasses: {
            container: "container",
            containerFluid: "container-fluid",
            row: "row"
        },
        onContentReady: function() {},
        onOpenBefore: function() {},
        onOpen: function() {},
        onClose: function() {},
        onDestroy: function() {},
        onAction: function() {}
    };
    var i = !1;
    e(t).on("keydown", function(n) {
        if (!i) {
            var o = !1;
            e(n.target).closest(".jconfirm-box").length && (o = !0), o && e(t).trigger("jcKeyDown"), i = !0
        }
    }), e(t).on("keyup", function() {
        i = !1
    }), jconfirm.lastClicked = !1, e(document).on("mousedown", "button, a", function() {
        jconfirm.lastClicked = e(this)
    })
}(jQuery, window),
function() {
    "use strict";
    var e = function() {
        var e, t, i = [],
            n = -1,
            o = 0,
            a = !1;
        return t = function(e, t) {
            return e && "function" == typeof e[t] ? (a = !0, e[t](), a = !1, this) : this
        }, {
            add: function(t) {
                return a ? this : (i.splice(n + 1, i.length - n), i.push(t), o && i.length > o && function(e, t, i) {
                    e.splice(t, !i || 1 + i - t + (!(i < 0 ^ t >= 0) && (i < 0 || -1) * e.length)), e.length
                }(i, 0, -(o + 1)), n = i.length - 1, e && e(), this)
            },
            setCallback: function(t) {
                e = t
            },
            undo: function() {
                var o = i[n];
                return o ? (t(o, "undo"), n -= 1, e && e(), this) : this
            },
            redo: function() {
                var o = i[n + 1];
                return o ? (t(o, "redo"), n += 1, e && e(), this) : this
            },
            clear: function() {
                var t = i.length;
                i = [], n = -1, e && t > 0 && e()
            },
            hasUndo: function() {
                return n > 0
            },
            hasRedo: function() {
                return n < i.length - 1
            },
            getCommands: function() {
                return i
            },
            getIndex: function() {
                return n
            },
            setLimit: function(e) {
                o = e
            }
        }
    };
    "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function() {
        return e
    }) : "undefined" != typeof module && module.exports ? module.exports = e : window.UndoManager = e
}(),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery", "jquery-ui"], e) : e(jQuery)
}(function(e) {
    var t = {},
        i = function(e) {
            var t, i, n = document.createElement("div");
            for (t = 0; i = e.length, t < i; t++)
                if (void 0 != n.style[e[t]]) return e[t];
            return ""
        },
        n = !1;
    t.transform = i(["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"]), t.transition = i(["transition", "WebkitTransition", "MozTransition", "OTransition", "msTransition"]), n = t.transform && t.transition, e.widget("ui.sortable", e.ui.sortable, {
        options: {
            animation: 0
        },
        _rearrange: function(i, o) {
            var a, s, r = {},
                l = {},
                c = e.trim(this.options.axis);
            if (!parseInt(this.currentContainer.options.animation) || !c) return this._superApply(arguments);
            a = e(o.item[0]), s = ("up" == this.direction ? "" : "-") + a["x" == c ? "width" : "height"]() + "px", this._superApply(arguments), n ? r[t.transform] = ("x" == c ? "translateX" : "translateY") + "(" + s + ")" : (r = {
                position: "relative"
            })["x" == c ? "left" : "top"] = s, a.css(r), n ? (r[t.transition] = t.transform + " " + this.options.animation + "ms", r[t.transform] = "", l[t.transform] = "", l[t.transition] = "", setTimeout(function() {
                a.css(r)
            }, 0)) : (l.top = "", l.position = "", a.animate({
                top: "",
                position: ""
            }, this.options.animation)), setTimeout(function() {
                a.css(l)
            }, this.options.animation)
        }
    })
}),
function(e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
        var t;
        "undefined" != typeof window ? t = window : "undefined" != typeof global ? t = global : "undefined" != typeof self && (t = self), t.Countdown = e()
    }
}(function() {
    return function e(t, i, n) {
        function o(s, r) {
            if (!i[s]) {
                if (!t[s]) {
                    var l = "function" == typeof require && require;
                    if (!r && l) return l(s, !0);
                    if (a) return a(s, !0);
                    var c = new Error("Cannot find module '" + s + "'");
                    throw c.code = "MODULE_NOT_FOUND", c
                }
                var d = i[s] = {
                    exports: {}
                };
                t[s][0].call(d.exports, function(e) {
                    var i = t[s][1][e];
                    return o(i || e)
                }, d, d.exports, e, t, i, n)
            }
            return i[s].exports
        }
        for (var a = "function" == typeof require && require, s = 0; s < n.length; s++) o(n[s]);
        return o
    }({
        1: [function(e, t, i) {
            var n = {
                date: "June 7, 2087 15:03:25",
                refresh: 1e3,
                offset: 0,
                onEnd: function() {},
                render: function(e) {
                    this.el.innerHTML = e.years + " years, " + e.days + " days, " + this.leadingZeros(e.hours) + " hours, " + this.leadingZeros(e.min) + " min and " + this.leadingZeros(e.sec) + " sec"
                }
            };
            t.exports = function(e, t) {
                this.el = e, this.options = {}, this.interval = !1, this.mergeOptions = function(e) {
                    for (var t in n) n.hasOwnProperty(t) && (this.options[t] = void 0 !== e[t] ? e[t] : n[t], "date" === t && "object" != typeof this.options.date && (this.options.date = new Date(this.options.date)), "function" == typeof this.options[t] && (this.options[t] = this.options[t].bind(this)));
                    "object" != typeof this.options.date && (this.options.date = new Date(this.options.date))
                }.bind(this), this.mergeOptions(t), this.getDiffDate = function() {
                    var e = (this.options.date.getTime() - Date.now() + this.options.offset) / 1e3,
                        t = {
                            years: 0,
                            days: 0,
                            hours: 0,
                            min: 0,
                            sec: 0,
                            millisec: 0
                        };
                    return e <= 0 ? (this.interval && (this.stop(), this.options.onEnd()), t) : (e >= 31557600 && (t.years = Math.floor(e / 31557600), e -= 365.25 * t.years * 86400), e >= 86400 && (t.days = Math.floor(e / 86400), e -= 86400 * t.days), e >= 3600 && (t.hours = Math.floor(e / 3600), e -= 3600 * t.hours), e >= 60 && (t.min = Math.floor(e / 60), e -= 60 * t.min), t.sec = Math.round(e), t.millisec = e % 1 * 1e3, t)
                }.bind(this), this.leadingZeros = function(e, t) {
                    return t = t || 2, (e = String(e)).length > t ? e : (Array(t + 1).join("0") + e).substr(-t)
                }, this.update = function(e) {
                    return "object" != typeof e && (e = new Date(e)), this.options.date = e, this.render(), this
                }.bind(this), this.stop = function() {
                    return this.interval && (clearInterval(this.interval), this.interval = !1), this
                }.bind(this), this.render = function() {
                    return this.options.render(this.getDiffDate()), this
                }.bind(this), this.start = function() {
                    if (!this.interval) return this.render(), this.options.refresh && (this.interval = setInterval(this.render, this.options.refresh)), this
                }.bind(this), this.updateOffset = function(e) {
                    return this.options.offset = e, this
                }.bind(this), this.restart = function(e) {
                    return this.mergeOptions(e), this.interval = !1, this.start(), this
                }.bind(this), this.start()
            }
        }, {}],
        2: [function(e, t, i) {
            var n = e("./countdown.js");
            jQuery.fn.countdown = function(e) {
                return $.each(this, function(t, i) {
                    var o = $(i);
                    o.data("countdown") || (o.data("date") && (e.date = o.data("date")), o.data("countdown", new n(i, e)))
                })
            }, t.exports = n
        }, {
            "./countdown.js": 1
        }]
    }, {}, [2])(2)
}),
function(e, t) {
    "function" == typeof define && define.amd ? define(["jquery"], function(e) {
        return t(e)
    }) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
}(0, function(e) {
    ! function(e) {
        "use strict";

        function t(t) {
            return e.each([{
                re: /[\xC0-\xC6]/g,
                ch: "A"
            }, {
                re: /[\xE0-\xE6]/g,
                ch: "a"
            }, {
                re: /[\xC8-\xCB]/g,
                ch: "E"
            }, {
                re: /[\xE8-\xEB]/g,
                ch: "e"
            }, {
                re: /[\xCC-\xCF]/g,
                ch: "I"
            }, {
                re: /[\xEC-\xEF]/g,
                ch: "i"
            }, {
                re: /[\xD2-\xD6]/g,
                ch: "O"
            }, {
                re: /[\xF2-\xF6]/g,
                ch: "o"
            }, {
                re: /[\xD9-\xDC]/g,
                ch: "U"
            }, {
                re: /[\xF9-\xFC]/g,
                ch: "u"
            }, {
                re: /[\xC7-\xE7]/g,
                ch: "c"
            }, {
                re: /[\xD1]/g,
                ch: "N"
            }, {
                re: /[\xF1]/g,
                ch: "n"
            }], function() {
                t = t.replace(this.re, this.ch)
            }), t
        }

        function i(e) {
            var t = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#x27;",
                    "`": "&#x60;"
                },
                i = "(?:" + Object.keys(t).join("|") + ")",
                n = new RegExp(i),
                o = new RegExp(i, "g"),
                a = null == e ? "" : "" + e;
            return n.test(a) ? a.replace(o, function(e) {
                return t[e]
            }) : a
        }

        function n(t, i) {
            var n = arguments,
                a = t,
                s = i;
            [].shift.apply(n);
            var r, l = this.each(function() {
                var t = e(this);
                if (t.is("select")) {
                    var i = t.data("selectpicker"),
                        l = "object" == typeof a && a;
                    if (i) {
                        if (l)
                            for (var c in l) l.hasOwnProperty(c) && (i.options[c] = l[c])
                    } else {
                        var d = e.extend({}, o.DEFAULTS, e.fn.selectpicker.defaults || {}, t.data(), l);
                        d.template = e.extend({}, o.DEFAULTS.template, e.fn.selectpicker.defaults ? e.fn.selectpicker.defaults.template : {}, t.data().template, l.template), t.data("selectpicker", i = new o(this, d, s))
                    }
                    "string" == typeof a && (r = i[a] instanceof Function ? i[a].apply(i, n) : i.options[a])
                }
            });
            return void 0 !== r ? r : l
        }
        String.prototype.includes || function() {
            var e = {}.toString,
                t = function() {
                    try {
                        var e = {},
                            t = Object.defineProperty,
                            i = t(e, e, e) && t
                    } catch (e) {}
                    return i
                }(),
                i = "".indexOf,
                n = function(t) {
                    if (null == this) throw new TypeError;
                    var n = String(this);
                    if (t && "[object RegExp]" == e.call(t)) throw new TypeError;
                    var o = n.length,
                        a = String(t),
                        s = a.length,
                        r = arguments.length > 1 ? arguments[1] : void 0,
                        l = r ? Number(r) : 0;
                    l != l && (l = 0);
                    return !(s + Math.min(Math.max(l, 0), o) > o) && -1 != i.call(n, a, l)
                };
            t ? t(String.prototype, "includes", {
                value: n,
                configurable: !0,
                writable: !0
            }) : String.prototype.includes = n
        }(), String.prototype.startsWith || function() {
            var e = function() {
                    try {
                        var e = {},
                            t = Object.defineProperty,
                            i = t(e, e, e) && t
                    } catch (e) {}
                    return i
                }(),
                t = {}.toString,
                i = function(e) {
                    if (null == this) throw new TypeError;
                    var i = String(this);
                    if (e && "[object RegExp]" == t.call(e)) throw new TypeError;
                    var n = i.length,
                        o = String(e),
                        a = o.length,
                        s = arguments.length > 1 ? arguments[1] : void 0,
                        r = s ? Number(s) : 0;
                    r != r && (r = 0);
                    var l = Math.min(Math.max(r, 0), n);
                    if (a + l > n) return !1;
                    for (var c = -1; ++c < a;)
                        if (i.charCodeAt(l + c) != o.charCodeAt(c)) return !1;
                    return !0
                };
            e ? e(String.prototype, "startsWith", {
                value: i,
                configurable: !0,
                writable: !0
            }) : String.prototype.startsWith = i
        }(), Object.keys || (Object.keys = function(e, t, i) {
            i = [];
            for (t in e) i.hasOwnProperty.call(e, t) && i.push(t);
            return i
        }), e.fn.triggerNative = function(e) {
            var t, i = this[0];
            i.dispatchEvent ? ("function" == typeof Event ? t = new Event(e, {
                bubbles: !0
            }) : (t = document.createEvent("Event")).initEvent(e, !0, !1), i.dispatchEvent(t)) : (i.fireEvent && (t = document.createEventObject(), t.eventType = e, i.fireEvent("on" + e, t)), this.trigger(e))
        }, e.expr[":"].icontains = function(t, i, n) {
            var o = e(t);
            return (o.data("tokens") || o.text()).toUpperCase().includes(n[3].toUpperCase())
        }, e.expr[":"].ibegins = function(t, i, n) {
            var o = e(t);
            return (o.data("tokens") || o.text()).toUpperCase().startsWith(n[3].toUpperCase())
        }, e.expr[":"].aicontains = function(t, i, n) {
            var o = e(t);
            return (o.data("tokens") || o.data("normalizedText") || o.text()).toUpperCase().includes(n[3].toUpperCase())
        }, e.expr[":"].aibegins = function(t, i, n) {
            var o = e(t);
            return (o.data("tokens") || o.data("normalizedText") || o.text()).toUpperCase().startsWith(n[3].toUpperCase())
        };
        var o = function(t, i, n) {
            n && (n.stopPropagation(), n.preventDefault()), this.$element = e(t), this.$newElement = null, this.$button = null, this.$menu = null, this.$lis = null, this.options = i, null === this.options.title && (this.options.title = this.$element.attr("title")), this.val = o.prototype.val, this.render = o.prototype.render, this.refresh = o.prototype.refresh, this.setStyle = o.prototype.setStyle, this.selectAll = o.prototype.selectAll, this.deselectAll = o.prototype.deselectAll, this.destroy = o.prototype.destroy, this.remove = o.prototype.remove, this.show = o.prototype.show, this.hide = o.prototype.hide, this.init()
        };
        o.VERSION = "1.10.0", o.DEFAULTS = {
            noneSelectedText: "Nothing selected",
            noneResultsText: "No results matched {0}",
            countSelectedText: function(e, t) {
                return 1 == e ? "{0} item selected" : "{0} items selected"
            },
            maxOptionsText: function(e, t) {
                return [1 == e ? "Limit reached ({n} item max)" : "Limit reached ({n} items max)", 1 == t ? "Group limit reached ({n} item max)" : "Group limit reached ({n} items max)"]
            },
            selectAllText: "Select All",
            deselectAllText: "Deselect All",
            doneButton: !1,
            doneButtonText: "Close",
            multipleSeparator: ", ",
            styleBase: "btn",
            style: "btn-default",
            size: "auto",
            title: null,
            selectedTextFormat: "values",
            width: !1,
            container: !1,
            hideDisabled: !1,
            showSubtext: !1,
            showIcon: !0,
            showContent: !0,
            dropupAuto: !0,
            header: !1,
            liveSearch: !1,
            liveSearchPlaceholder: null,
            liveSearchNormalize: !1,
            liveSearchStyle: "contains",
            actionsBox: !1,
            iconBase: "glyphicon",
            tickIcon: "glyphicon-ok",
            showTick: !1,
            template: {
                caret: '<span class="caret"></span>'
            },
            maxOptions: !1,
            mobile: !1,
            selectOnTab: !1,
            dropdownAlignRight: !1
        }, o.prototype = {
            constructor: o,
            init: function() {
                var t = this,
                    i = this.$element.attr("id");
                this.$element.addClass("bs-select-hidden"), this.liObj = {}, this.multiple = this.$element.prop("multiple"), this.autofocus = this.$element.prop("autofocus"), this.$newElement = this.createView(), this.$element.after(this.$newElement).appendTo(this.$newElement), this.$button = this.$newElement.children("button"), this.$menu = this.$newElement.children(".dropdown-menu"), this.$menuInner = this.$menu.children(".inner"), this.$searchbox = this.$menu.find("input"), this.$element.removeClass("bs-select-hidden"), this.options.dropdownAlignRight && this.$menu.addClass("dropdown-menu-right"), void 0 !== i && (this.$button.attr("data-id", i), e('label[for="' + i + '"]').click(function(e) {
                    e.preventDefault(), t.$button.focus()
                })), this.checkDisabled(), this.clickListener(), this.options.liveSearch && this.liveSearchListener(), this.render(), this.setStyle(), this.setWidth(), this.options.container && this.selectPosition(), this.$menu.data("this", this), this.$newElement.data("this", this), this.options.mobile && this.mobile(), this.$newElement.on({
                    "hide.bs.dropdown": function(e) {
                        t.$element.trigger("hide.bs.select", e)
                    },
                    "hidden.bs.dropdown": function(e) {
                        t.$element.trigger("hidden.bs.select", e)
                    },
                    "show.bs.dropdown": function(e) {
                        t.$element.trigger("show.bs.select", e)
                    },
                    "shown.bs.dropdown": function(e) {
                        t.$element.trigger("shown.bs.select", e)
                    }
                }), t.$element[0].hasAttribute("required") && this.$element.on("invalid", function() {
                    t.$button.addClass("bs-invalid").focus(), t.$element.on({
                        "focus.bs.select": function() {
                            t.$button.focus(), t.$element.off("focus.bs.select")
                        },
                        "shown.bs.select": function() {
                            t.$element.val(t.$element.val()).off("shown.bs.select")
                        },
                        "rendered.bs.select": function() {
                            this.validity.valid && t.$button.removeClass("bs-invalid"), t.$element.off("rendered.bs.select")
                        }
                    })
                }), setTimeout(function() {
                    t.$element.trigger("loaded.bs.select")
                })
            },
            createDropdown: function() {
                var t = this.multiple || this.options.showTick ? " show-tick" : "",
                    n = this.$element.parent().hasClass("input-group") ? " input-group-btn" : "",
                    o = this.autofocus ? " autofocus" : "",
                    a = this.options.header ? '<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>' + this.options.header + "</div>" : "",
                    s = this.options.liveSearch ? '<div class="bs-searchbox"><input type="text" class="form-control" autocomplete="off"' + (null === this.options.liveSearchPlaceholder ? "" : ' placeholder="' + i(this.options.liveSearchPlaceholder) + '"') + "></div>" : "",
                    r = this.multiple && this.options.actionsBox ? '<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn btn-default">' + this.options.selectAllText + '</button><button type="button" class="actions-btn bs-deselect-all btn btn-default">' + this.options.deselectAllText + "</button></div></div>" : "",
                    l = this.multiple && this.options.doneButton ? '<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm btn-default">' + this.options.doneButtonText + "</button></div></div>" : "",
                    c = '<div class="btn-group bootstrap-select' + t + n + '"><button type="button" class="' + this.options.styleBase + ' dropdown-toggle" data-toggle="dropdown"' + o + '><span class="filter-option pull-left"></span>&nbsp;<span class="bs-caret">' + this.options.template.caret + '</span></button><div class="dropdown-menu open">' + a + s + r + '<ul class="dropdown-menu inner" role="menu"></ul>' + l + "</div></div>";
                return e(c)
            },
            createView: function() {
                var e = this.createDropdown(),
                    t = this.createLi();
                return e.find("ul")[0].innerHTML = t, e
            },
            reloadLi: function() {
                this.destroyLi();
                var e = this.createLi();
                this.$menuInner[0].innerHTML = e
            },
            destroyLi: function() {
                this.$menu.find("li").remove()
            },
            createLi: function() {
                var n = this,
                    o = [],
                    a = 0,
                    s = document.createElement("option"),
                    r = -1,
                    l = function(e, t, i, n) {
                        return "<li" + (void 0 !== i & "" !== i ? ' class="' + i + '"' : "") + (void 0 !== t & null !== t ? ' data-original-index="' + t + '"' : "") + (void 0 !== n & null !== n ? 'data-optgroup="' + n + '"' : "") + ">" + e + "</li>"
                    },
                    c = function(e, o, a, s) {
                        return '<a tabindex="0"' + (void 0 !== o ? ' class="' + o + '"' : "") + (void 0 !== a ? ' style="' + a + '"' : "") + (n.options.liveSearchNormalize ? ' data-normalized-text="' + t(i(e)) + '"' : "") + (void 0 !== s || null !== s ? ' data-tokens="' + s + '"' : "") + ">" + e + '<span class="' + n.options.iconBase + " " + n.options.tickIcon + ' check-mark"></span></a>'
                    };
                if (this.options.title && !this.multiple && (r--, !this.$element.find(".bs-title-option").length)) {
                    var d = this.$element[0];
                    s.className = "bs-title-option", s.appendChild(document.createTextNode(this.options.title)), s.value = "", d.insertBefore(s, d.firstChild), void 0 === e(d.options[d.selectedIndex]).attr("selected") && (s.selected = !0)
                }
                return this.$element.find("option").each(function(t) {
                    var i = e(this);
                    if (r++, !i.hasClass("bs-title-option")) {
                        var s = this.className || "",
                            d = this.style.cssText,
                            u = i.data("content") ? i.data("content") : i.html(),
                            p = i.data("tokens") ? i.data("tokens") : null,
                            h = void 0 !== i.data("subtext") ? '<small class="text-muted">' + i.data("subtext") + "</small>" : "",
                            m = void 0 !== i.data("icon") ? '<span class="' + n.options.iconBase + " " + i.data("icon") + '"></span> ' : "",
                            f = "OPTGROUP" === this.parentNode.tagName,
                            g = this.disabled || f && this.parentNode.disabled;
                        if ("" !== m && g && (m = "<span>" + m + "</span>"), n.options.hideDisabled && g && !f) return void r--;
                        if (i.data("content") || (u = m + '<span class="text">' + u + h + "</span>"), f && !0 !== i.data("divider")) {
                            var _ = " " + this.parentNode.className || "";
                            if (0 === i.index()) {
                                a += 1;
                                var v = this.parentNode.label,
                                    b = void 0 !== i.parent().data("subtext") ? '<small class="text-muted">' + i.parent().data("subtext") + "</small>" : "";
                                v = (i.parent().data("icon") ? '<span class="' + n.options.iconBase + " " + i.parent().data("icon") + '"></span> ' : "") + '<span class="text">' + v + b + "</span>", 0 !== t && o.length > 0 && (r++, o.push(l("", null, "divider", a + "div"))), r++, o.push(l(v, null, "dropdown-header" + _, a))
                            }
                            if (n.options.hideDisabled && g) return void r--;
                            o.push(l(c(u, "opt " + s + _, d, p), t, "", a))
                        } else !0 === i.data("divider") ? o.push(l("", t, "divider")) : !0 === i.data("hidden") ? o.push(l(c(u, s, d, p), t, "hidden is-hidden")) : (this.previousElementSibling && "OPTGROUP" === this.previousElementSibling.tagName && (r++, o.push(l("", null, "divider", a + "div"))), o.push(l(c(u, s, d, p), t)));
                        n.liObj[t] = r
                    }
                }), this.multiple || 0 !== this.$element.find("option:selected").length || this.options.title || this.$element.find("option").eq(0).prop("selected", !0).attr("selected", "selected"), o.join("")
            },
            findLis: function() {
                return null == this.$lis && (this.$lis = this.$menu.find("li")), this.$lis
            },
            render: function(t) {
                var i, n = this;
                !1 !== t && this.$element.find("option").each(function(e) {
                    var t = n.findLis().eq(n.liObj[e]);
                    n.setDisabled(e, this.disabled || "OPTGROUP" === this.parentNode.tagName && this.parentNode.disabled, t), n.setSelected(e, this.selected, t)
                }), this.tabIndex();
                var o = this.$element.find("option").map(function() {
                        if (this.selected) {
                            if (n.options.hideDisabled && (this.disabled || "OPTGROUP" === this.parentNode.tagName && this.parentNode.disabled)) return;
                            var t, i = e(this),
                                o = i.data("icon") && n.options.showIcon ? '<i class="' + n.options.iconBase + " " + i.data("icon") + '"></i> ' : "";
                            return t = n.options.showSubtext && i.data("subtext") && !n.multiple ? ' <small class="text-muted">' + i.data("subtext") + "</small>" : "", void 0 !== i.attr("title") ? i.attr("title") : i.data("content") && n.options.showContent ? i.data("content") : o + i.html() + t
                        }
                    }).toArray(),
                    a = this.multiple ? o.join(this.options.multipleSeparator) : o[0];
                if (this.multiple && this.options.selectedTextFormat.indexOf("count") > -1) {
                    var s = this.options.selectedTextFormat.split(">");
                    if (s.length > 1 && o.length > s[1] || 1 == s.length && o.length >= 2) {
                        i = this.options.hideDisabled ? ", [disabled]" : "";
                        var r = this.$element.find("option").not('[data-divider="true"], [data-hidden="true"]' + i).length;
                        a = ("function" == typeof this.options.countSelectedText ? this.options.countSelectedText(o.length, r) : this.options.countSelectedText).replace("{0}", o.length.toString()).replace("{1}", r.toString())
                    }
                }
                void 0 == this.options.title && (this.options.title = this.$element.attr("title")), "static" == this.options.selectedTextFormat && (a = this.options.title), a || (a = void 0 !== this.options.title ? this.options.title : this.options.noneSelectedText), this.$button.attr("title", e.trim(a.replace(/<[^>]*>?/g, ""))), this.$button.children(".filter-option").html(a), this.$element.trigger("rendered.bs.select")
            },
            setStyle: function(e, t) {
                this.$element.attr("class") && this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi, ""));
                var i = e || this.options.style;
                "add" == t ? this.$button.addClass(i) : "remove" == t ? this.$button.removeClass(i) : (this.$button.removeClass(this.options.style), this.$button.addClass(i))
            },
            liHeight: function(t) {
                if (t || !1 !== this.options.size && !this.sizeInfo) {
                    var i = document.createElement("div"),
                        n = document.createElement("div"),
                        o = document.createElement("ul"),
                        a = document.createElement("li"),
                        s = document.createElement("li"),
                        r = document.createElement("a"),
                        l = document.createElement("span"),
                        c = this.options.header && this.$menu.find(".popover-title").length > 0 ? this.$menu.find(".popover-title")[0].cloneNode(!0) : null,
                        d = this.options.liveSearch ? document.createElement("div") : null,
                        u = this.options.actionsBox && this.multiple && this.$menu.find(".bs-actionsbox").length > 0 ? this.$menu.find(".bs-actionsbox")[0].cloneNode(!0) : null,
                        p = this.options.doneButton && this.multiple && this.$menu.find(".bs-donebutton").length > 0 ? this.$menu.find(".bs-donebutton")[0].cloneNode(!0) : null;
                    if (l.className = "text", i.className = this.$menu[0].parentNode.className + " open", n.className = "dropdown-menu open", o.className = "dropdown-menu inner", a.className = "divider", l.appendChild(document.createTextNode("Inner text")), r.appendChild(l), s.appendChild(r), o.appendChild(s), o.appendChild(a), c && n.appendChild(c), d) {
                        var h = document.createElement("span");
                        d.className = "bs-searchbox", h.className = "form-control", d.appendChild(h), n.appendChild(d)
                    }
                    u && n.appendChild(u), n.appendChild(o), p && n.appendChild(p), i.appendChild(n), document.body.appendChild(i);
                    var m = r.offsetHeight,
                        f = c ? c.offsetHeight : 0,
                        g = d ? d.offsetHeight : 0,
                        _ = u ? u.offsetHeight : 0,
                        v = p ? p.offsetHeight : 0,
                        b = e(a).outerHeight(!0),
                        x = "function" == typeof getComputedStyle && getComputedStyle(n),
                        y = x ? null : e(n),
                        w = parseInt(x ? x.paddingTop : y.css("paddingTop")) + parseInt(x ? x.paddingBottom : y.css("paddingBottom")) + parseInt(x ? x.borderTopWidth : y.css("borderTopWidth")) + parseInt(x ? x.borderBottomWidth : y.css("borderBottomWidth")),
                        $ = w + parseInt(x ? x.marginTop : y.css("marginTop")) + parseInt(x ? x.marginBottom : y.css("marginBottom")) + 2;
                    document.body.removeChild(i), this.sizeInfo = {
                        liHeight: m,
                        headerHeight: f,
                        searchHeight: g,
                        actionsHeight: _,
                        doneButtonHeight: v,
                        dividerHeight: b,
                        menuPadding: w,
                        menuExtras: $
                    }
                }
            },
            setSize: function() {
                if (this.findLis(), this.liHeight(), this.options.header && this.$menu.css("padding-top", 0), !1 !== this.options.size) {
                    var t, i, n, o, a = this,
                        s = this.$menu,
                        r = this.$menuInner,
                        l = e(window),
                        c = this.$newElement[0].offsetHeight,
                        d = this.sizeInfo.liHeight,
                        u = this.sizeInfo.headerHeight,
                        p = this.sizeInfo.searchHeight,
                        h = this.sizeInfo.actionsHeight,
                        m = this.sizeInfo.doneButtonHeight,
                        f = this.sizeInfo.dividerHeight,
                        g = this.sizeInfo.menuPadding,
                        _ = this.sizeInfo.menuExtras,
                        v = this.options.hideDisabled ? ".disabled" : "",
                        b = function() {
                            n = a.$newElement.offset().top - l.scrollTop(), o = l.height() - n - c
                        };
                    if (b(), "auto" === this.options.size) {
                        var x = function() {
                            var l, c = function(t, i) {
                                    return function(n) {
                                        return i ? n.classList ? n.classList.contains(t) : e(n).hasClass(t) : !(n.classList ? n.classList.contains(t) : e(n).hasClass(t))
                                    }
                                },
                                f = a.$menuInner[0].getElementsByTagName("li"),
                                v = Array.prototype.filter ? Array.prototype.filter.call(f, c("hidden", !1)) : a.$lis.not(".hidden"),
                                x = Array.prototype.filter ? Array.prototype.filter.call(v, c("dropdown-header", !0)) : v.filter(".dropdown-header");
                            b(), t = o - _, a.options.container ? (s.data("height") || s.data("height", s.height()), i = s.data("height")) : i = s.height(), a.options.dropupAuto && a.$newElement.toggleClass("dropup", n > o && i > t - _), a.$newElement.hasClass("dropup") && (t = n - _), l = v.length + x.length > 3 ? 3 * d + _ - 2 : 0, s.css({
                                "max-height": t + "px",
                                overflow: "hidden",
                                "min-height": l + u + p + h + m + "px"
                            }), r.css({
                                "max-height": t - u - p - h - m - g + "px",
                                "overflow-y": "auto",
                                "min-height": Math.max(l - g, 0) + "px"
                            })
                        };
                        x(), this.$searchbox.off("input.getSize propertychange.getSize").on("input.getSize propertychange.getSize", x), l.off("resize.getSize scroll.getSize").on("resize.getSize scroll.getSize", x)
                    } else if (this.options.size && "auto" != this.options.size && this.$lis.not(v).length > this.options.size) {
                        var y = this.$lis.not(".divider").not(v).children().slice(0, this.options.size).last().parent().index(),
                            w = this.$lis.slice(0, y + 1).filter(".divider").length;
                        t = d * this.options.size + w * f + g, a.options.container ? (s.data("height") || s.data("height", s.height()), i = s.data("height")) : i = s.height(), a.options.dropupAuto && this.$newElement.toggleClass("dropup", n > o && i > t - _), s.css({
                            "max-height": t + u + p + h + m + "px",
                            overflow: "hidden",
                            "min-height": ""
                        }), r.css({
                            "max-height": t - g + "px",
                            "overflow-y": "auto",
                            "min-height": ""
                        })
                    }
                }
            },
            setWidth: function() {
                if ("auto" === this.options.width) {
                    this.$menu.css("min-width", "0");
                    var e = this.$menu.parent().clone().appendTo("body"),
                        t = this.options.container ? this.$newElement.clone().appendTo("body") : e,
                        i = e.children(".dropdown-menu").outerWidth(),
                        n = t.css("width", "auto").children("button").outerWidth();
                    e.remove(), t.remove(), this.$newElement.css("width", Math.max(i, n) + "px")
                } else "fit" === this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", "").addClass("fit-width")) : this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", this.options.width)) : (this.$menu.css("min-width", ""), this.$newElement.css("width", ""));
                this.$newElement.hasClass("fit-width") && "fit" !== this.options.width && this.$newElement.removeClass("fit-width")
            },
            selectPosition: function() {
                this.$bsContainer = e('<div class="bs-container" />');
                var t, i, n = this,
                    o = function(e) {
                        n.$bsContainer.addClass(e.attr("class").replace(/form-control|fit-width/gi, "")).toggleClass("dropup", e.hasClass("dropup")), t = e.offset(), i = e.hasClass("dropup") ? 0 : e[0].offsetHeight, n.$bsContainer.css({
                            top: t.top + i,
                            left: t.left,
                            width: e[0].offsetWidth
                        })
                    };
                this.$button.on("click", function() {
                    var t = e(this);
                    n.isDisabled() || (o(n.$newElement), n.$bsContainer.appendTo(n.options.container).toggleClass("open", !t.hasClass("open")).append(n.$menu))
                }), e(window).on("resize scroll", function() {
                    o(n.$newElement)
                }), this.$element.on("hide.bs.select", function() {
                    n.$menu.data("height", n.$menu.height()), n.$bsContainer.detach()
                })
            },
            setSelected: function(e, t, i) {
                i || (i = this.findLis().eq(this.liObj[e])), i.toggleClass("selected", t)
            },
            setDisabled: function(e, t, i) {
                i || (i = this.findLis().eq(this.liObj[e])), t ? i.addClass("disabled").children("a").attr("href", "#").attr("tabindex", -1) : i.removeClass("disabled").children("a").removeAttr("href").attr("tabindex", 0)
            },
            isDisabled: function() {
                return this.$element[0].disabled
            },
            checkDisabled: function() {
                var e = this;
                this.isDisabled() ? (this.$newElement.addClass("disabled"), this.$button.addClass("disabled").attr("tabindex", -1)) : (this.$button.hasClass("disabled") && (this.$newElement.removeClass("disabled"), this.$button.removeClass("disabled")), -1 != this.$button.attr("tabindex") || this.$element.data("tabindex") || this.$button.removeAttr("tabindex")), this.$button.click(function() {
                    return !e.isDisabled()
                })
            },
            tabIndex: function() {
                this.$element.data("tabindex") !== this.$element.attr("tabindex") && -98 !== this.$element.attr("tabindex") && "-98" !== this.$element.attr("tabindex") && (this.$element.data("tabindex", this.$element.attr("tabindex")), this.$button.attr("tabindex", this.$element.data("tabindex"))), this.$element.attr("tabindex", -98)
            },
            clickListener: function() {
                var t = this,
                    i = e(document);
                this.$newElement.on("touchstart.dropdown", ".dropdown-menu", function(e) {
                    e.stopPropagation()
                }), i.data("spaceSelect", !1), this.$button.on("keyup", function(e) {
                    /(32)/.test(e.keyCode.toString(10)) && i.data("spaceSelect") && (e.preventDefault(), i.data("spaceSelect", !1))
                }), this.$button.on("click", function() {
                    t.setSize()
                }), this.$element.on("shown.bs.select", function() {
                    if (t.options.liveSearch || t.multiple) {
                        if (!t.multiple) {
                            var e = t.liObj[t.$element[0].selectedIndex];
                            if ("number" != typeof e || !1 === t.options.size) return;
                            var i = t.$lis.eq(e)[0].offsetTop - t.$menuInner[0].offsetTop;
                            i = i - t.$menuInner[0].offsetHeight / 2 + t.sizeInfo.liHeight / 2, t.$menuInner[0].scrollTop = i
                        }
                    } else t.$menuInner.find(".selected a").focus()
                }), this.$menuInner.on("click", "li a", function(i) {
                    var n = e(this),
                        o = n.parent().data("originalIndex"),
                        a = t.$element.val(),
                        s = t.$element.prop("selectedIndex");
                    if (t.multiple && i.stopPropagation(), i.preventDefault(), !t.isDisabled() && !n.parent().hasClass("disabled")) {
                        var r = t.$element.find("option"),
                            l = r.eq(o),
                            c = l.prop("selected"),
                            d = l.parent("optgroup"),
                            u = t.options.maxOptions,
                            p = d.data("maxOptions") || !1;
                        if (t.multiple) {
                            if (l.prop("selected", !c), t.setSelected(o, !c), n.blur(), !1 !== u || !1 !== p) {
                                var h = u < r.filter(":selected").length,
                                    m = p < d.find("option:selected").length;
                                if (u && h || p && m)
                                    if (u && 1 == u) r.prop("selected", !1), l.prop("selected", !0), t.$menuInner.find(".selected").removeClass("selected"), t.setSelected(o, !0);
                                    else if (p && 1 == p) {
                                    d.find("option:selected").prop("selected", !1), l.prop("selected", !0);
                                    var f = n.parent().data("optgroup");
                                    t.$menuInner.find('[data-optgroup="' + f + '"]').removeClass("selected"), t.setSelected(o, !0)
                                } else {
                                    var g = "function" == typeof t.options.maxOptionsText ? t.options.maxOptionsText(u, p) : t.options.maxOptionsText,
                                        _ = g[0].replace("{n}", u),
                                        v = g[1].replace("{n}", p),
                                        b = e('<div class="notify"></div>');
                                    g[2] && (_ = _.replace("{var}", g[2][u > 1 ? 0 : 1]), v = v.replace("{var}", g[2][p > 1 ? 0 : 1])), l.prop("selected", !1), t.$menu.append(b), u && h && (b.append(e("<div>" + _ + "</div>")), t.$element.trigger("maxReached.bs.select")), p && m && (b.append(e("<div>" + v + "</div>")), t.$element.trigger("maxReachedGrp.bs.select")), setTimeout(function() {
                                        t.setSelected(o, !1)
                                    }, 10), b.delay(750).fadeOut(300, function() {
                                        e(this).remove()
                                    })
                                }
                            }
                        } else r.prop("selected", !1), l.prop("selected", !0), t.$menuInner.find(".selected").removeClass("selected"), t.setSelected(o, !0);
                        t.multiple ? t.options.liveSearch && t.$searchbox.focus() : t.$button.focus(), (a != t.$element.val() && t.multiple || s != t.$element.prop("selectedIndex") && !t.multiple) && t.$element.trigger("changed.bs.select", [o, l.prop("selected"), c]).triggerNative("change")
                    }
                }), this.$menu.on("click", "li.disabled a, .popover-title, .popover-title :not(.close)", function(i) {
                    i.currentTarget == this && (i.preventDefault(), i.stopPropagation(), t.options.liveSearch && !e(i.target).hasClass("close") ? t.$searchbox.focus() : t.$button.focus())
                }), this.$menuInner.on("click", ".divider, .dropdown-header", function(e) {
                    e.preventDefault(), e.stopPropagation(), t.options.liveSearch ? t.$searchbox.focus() : t.$button.focus()
                }), this.$menu.on("click", ".popover-title .close", function() {
                    t.$button.click()
                }), this.$searchbox.on("click", function(e) {
                    e.stopPropagation()
                }), this.$menu.on("click", ".actions-btn", function(i) {
                    t.options.liveSearch ? t.$searchbox.focus() : t.$button.focus(), i.preventDefault(), i.stopPropagation(), e(this).hasClass("bs-select-all") ? t.selectAll() : t.deselectAll()
                }), this.$element.change(function() {
                    t.render(!1)
                })
            },
            liveSearchListener: function() {
                var n = this,
                    o = e('<li class="no-results"></li>');
                this.$button.on("click.dropdown.data-api touchstart.dropdown.data-api", function() {
                    n.$menuInner.find(".active").removeClass("active"), n.$searchbox.val() && (n.$searchbox.val(""), n.$lis.not(".is-hidden").removeClass("hidden"), o.parent().length && o.remove()), n.multiple || n.$menuInner.find(".selected").addClass("active"), setTimeout(function() {
                        n.$searchbox.focus()
                    }, 10)
                }), this.$searchbox.on("click.dropdown.data-api focus.dropdown.data-api touchend.dropdown.data-api", function(e) {
                    e.stopPropagation()
                }), this.$searchbox.on("input propertychange", function() {
                    if (n.$searchbox.val()) {
                        var a = n.$lis.not(".is-hidden").removeClass("hidden").children("a");
                        (a = n.options.liveSearchNormalize ? a.not(":a" + n._searchStyle() + '("' + t(n.$searchbox.val()) + '")') : a.not(":" + n._searchStyle() + '("' + n.$searchbox.val() + '")')).parent().addClass("hidden"), n.$lis.filter(".dropdown-header").each(function() {
                            var t = e(this),
                                i = t.data("optgroup");
                            0 === n.$lis.filter("[data-optgroup=" + i + "]").not(t).not(".hidden").length && (t.addClass("hidden"), n.$lis.filter("[data-optgroup=" + i + "div]").addClass("hidden"))
                        });
                        var s = n.$lis.not(".hidden");
                        s.each(function(t) {
                            var i = e(this);
                            i.hasClass("divider") && (i.index() === s.first().index() || i.index() === s.last().index() || s.eq(t + 1).hasClass("divider")) && i.addClass("hidden")
                        }), n.$lis.not(".hidden, .no-results").length ? o.parent().length && o.remove() : (o.parent().length && o.remove(), o.html(n.options.noneResultsText.replace("{0}", '"' + i(n.$searchbox.val()) + '"')).show(), n.$menuInner.append(o))
                    } else n.$lis.not(".is-hidden").removeClass("hidden"), o.parent().length && o.remove();
                    n.$lis.filter(".active").removeClass("active"), n.$searchbox.val() && n.$lis.not(".hidden, .divider, .dropdown-header").eq(0).addClass("active").children("a").focus(), e(this).focus()
                })
            },
            _searchStyle: function() {
                return {
                    begins: "ibegins",
                    startsWith: "ibegins"
                }[this.options.liveSearchStyle] || "icontains"
            },
            val: function(e) {
                return void 0 !== e ? (this.$element.val(e), this.render(), this.$element) : this.$element.val()
            },
            changeAll: function(t) {
                void 0 === t && (t = !0), this.findLis();
                for (var i = this.$element.find("option"), n = this.$lis.not(".divider, .dropdown-header, .disabled, .hidden").toggleClass("selected", t), o = n.length, a = [], s = 0; o > s; s++) {
                    var r = n[s].getAttribute("data-original-index");
                    a[a.length] = i.eq(r)[0]
                }
                e(a).prop("selected", t), this.render(!1), this.$element.trigger("changed.bs.select").triggerNative("change")
            },
            selectAll: function() {
                return this.changeAll(!0)
            },
            deselectAll: function() {
                return this.changeAll(!1)
            },
            toggle: function(e) {
                (e = e || window.event) && e.stopPropagation(), this.$button.trigger("click")
            },
            keydown: function(i) {
                var n, o, a, s, r, l, c, d, u, p = e(this),
                    h = p.is("input") ? p.parent().parent() : p.parent(),
                    m = h.data("this"),
                    f = ":not(.disabled, .hidden, .dropdown-header, .divider)",
                    g = {
                        32: " ",
                        48: "0",
                        49: "1",
                        50: "2",
                        51: "3",
                        52: "4",
                        53: "5",
                        54: "6",
                        55: "7",
                        56: "8",
                        57: "9",
                        59: ";",
                        65: "a",
                        66: "b",
                        67: "c",
                        68: "d",
                        69: "e",
                        70: "f",
                        71: "g",
                        72: "h",
                        73: "i",
                        74: "j",
                        75: "k",
                        76: "l",
                        77: "m",
                        78: "n",
                        79: "o",
                        80: "p",
                        81: "q",
                        82: "r",
                        83: "s",
                        84: "t",
                        85: "u",
                        86: "v",
                        87: "w",
                        88: "x",
                        89: "y",
                        90: "z",
                        96: "0",
                        97: "1",
                        98: "2",
                        99: "3",
                        100: "4",
                        101: "5",
                        102: "6",
                        103: "7",
                        104: "8",
                        105: "9"
                    };
                if (m.options.liveSearch && (h = p.parent().parent()), m.options.container && (h = m.$menu), n = e("[role=menu] li", h), !(u = m.$newElement.hasClass("open")) && (i.keyCode >= 48 && i.keyCode <= 57 || i.keyCode >= 96 && i.keyCode <= 105 || i.keyCode >= 65 && i.keyCode <= 90) && (m.options.container ? m.$button.trigger("click") : (m.setSize(), m.$menu.parent().addClass("open"), u = !0), m.$searchbox.focus()), m.options.liveSearch && (/(^9$|27)/.test(i.keyCode.toString(10)) && u && 0 === m.$menu.find(".active").length && (i.preventDefault(), m.$menu.parent().removeClass("open"), m.options.container && m.$newElement.removeClass("open"), m.$button.focus()), n = e("[role=menu] li" + f, h), p.val() || /(38|40)/.test(i.keyCode.toString(10)) || 0 === n.filter(".active").length && (n = m.$menuInner.find("li"), n = m.options.liveSearchNormalize ? n.filter(":a" + m._searchStyle() + "(" + t(g[i.keyCode]) + ")") : n.filter(":" + m._searchStyle() + "(" + g[i.keyCode] + ")"))), n.length) {
                    if (/(38|40)/.test(i.keyCode.toString(10))) o = n.index(n.find("a").filter(":focus").parent()), s = n.filter(f).first().index(), r = n.filter(f).last().index(), a = n.eq(o).nextAll(f).eq(0).index(), l = n.eq(o).prevAll(f).eq(0).index(), c = n.eq(a).prevAll(f).eq(0).index(), m.options.liveSearch && (n.each(function(t) {
                        e(this).hasClass("disabled") || e(this).data("index", t)
                    }), o = n.index(n.filter(".active")), s = n.first().data("index"), r = n.last().data("index"), a = n.eq(o).nextAll().eq(0).data("index"), l = n.eq(o).prevAll().eq(0).data("index"), c = n.eq(a).prevAll().eq(0).data("index")), d = p.data("prevIndex"), 38 == i.keyCode ? (m.options.liveSearch && o--, o != c && o > l && (o = l), s > o && (o = s), o == d && (o = r)) : 40 == i.keyCode && (m.options.liveSearch && o++, -1 == o && (o = 0), o != c && a > o && (o = a), o > r && (o = r), o == d && (o = s)), p.data("prevIndex", o), m.options.liveSearch ? (i.preventDefault(), p.hasClass("dropdown-toggle") || (n.removeClass("active").eq(o).addClass("active").children("a").focus(), p.focus())) : n.eq(o).children("a").focus();
                    else if (!p.is("input")) {
                        var _, v = [];
                        n.each(function() {
                            e(this).hasClass("disabled") || e.trim(e(this).children("a").text().toLowerCase()).substring(0, 1) == g[i.keyCode] && v.push(e(this).index())
                        }), _ = e(document).data("keycount"), _++, e(document).data("keycount", _), e.trim(e(":focus").text().toLowerCase()).substring(0, 1) != g[i.keyCode] ? (_ = 1, e(document).data("keycount", _)) : _ >= v.length && (e(document).data("keycount", 0), _ > v.length && (_ = 1)), n.eq(v[_ - 1]).children("a").focus()
                    }
                    if ((/(13|32)/.test(i.keyCode.toString(10)) || /(^9$)/.test(i.keyCode.toString(10)) && m.options.selectOnTab) && u) {
                        if (/(32)/.test(i.keyCode.toString(10)) || i.preventDefault(), m.options.liveSearch) /(32)/.test(i.keyCode.toString(10)) || (m.$menuInner.find(".active a").click(), p.focus());
                        else {
                            var b = e(":focus");
                            b.click(), b.focus(), i.preventDefault(), e(document).data("spaceSelect", !0)
                        }
                        e(document).data("keycount", 0)
                    }(/(^9$|27)/.test(i.keyCode.toString(10)) && u && (m.multiple || m.options.liveSearch) || /(27)/.test(i.keyCode.toString(10)) && !u) && (m.$menu.parent().removeClass("open"), m.options.container && m.$newElement.removeClass("open"), m.$button.focus())
                }
            },
            mobile: function() {
                this.$element.addClass("mobile-device")
            },
            refresh: function() {
                this.$lis = null, this.liObj = {}, this.reloadLi(), this.render(), this.checkDisabled(), this.liHeight(!0), this.setStyle(), this.setWidth(), this.$lis && this.$searchbox.trigger("propertychange"), this.$element.trigger("refreshed.bs.select")
            },
            hide: function() {
                this.$newElement.hide()
            },
            show: function() {
                this.$newElement.show()
            },
            remove: function() {
                this.$newElement.remove(), this.$element.remove()
            },
            destroy: function() {
                this.$newElement.before(this.$element).remove(), this.$bsContainer ? this.$bsContainer.remove() : this.$menu.remove(), this.$element.off(".bs.select").removeData("selectpicker").removeClass("bs-select-hidden selectpicker")
            }
        };
        var a = e.fn.selectpicker;
        e.fn.selectpicker = n, e.fn.selectpicker.Constructor = o, e.fn.selectpicker.noConflict = function() {
            return e.fn.selectpicker = a, this
        }, e(document).data("keycount", 0).on("keydown.bs.select", '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="menu"], .bs-searchbox input', o.prototype.keydown).on("focusin.modal", '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="menu"], .bs-searchbox input', function(e) {
            e.stopPropagation()
        }), e(window).on("load.bs.select.data-api", function() {
            e(".selectpicker").each(function() {
                var t = e(this);
                n.call(t, t.data())
            })
        })
    }(e)
}),
function(e) {
    "use strict";
    "object" == typeof exports ? module.exports = e(window.jQuery) : "function" == typeof define && define.amd ? define(["jquery"], e) : window.jQuery && !window.jQuery.fn.colorpicker && e(window.jQuery)
}(function(e) {
    "use strict";
    var t = function(t, i) {
        this.value = {
            h: 0,
            s: 0,
            b: 0,
            a: 1
        }, this.origFormat = null, i && e.extend(this.colors, i), t && (void 0 !== t.toLowerCase ? (t += "", this.setColor(t)) : void 0 !== t.h && (this.value = t))
    };
    t.prototype = {
        constructor: t,
        colors: {
            aliceblue: "#f0f8ff",
            antiquewhite: "#faebd7",
            aqua: "#00ffff",
            aquamarine: "#7fffd4",
            azure: "#f0ffff",
            beige: "#f5f5dc",
            bisque: "#ffe4c4",
            black: "#000000",
            blanchedalmond: "#ffebcd",
            blue: "#0000ff",
            blueviolet: "#8a2be2",
            brown: "#a52a2a",
            burlywood: "#deb887",
            cadetblue: "#5f9ea0",
            chartreuse: "#7fff00",
            chocolate: "#d2691e",
            coral: "#ff7f50",
            cornflowerblue: "#6495ed",
            cornsilk: "#fff8dc",
            crimson: "#dc143c",
            cyan: "#00ffff",
            darkblue: "#00008b",
            darkcyan: "#008b8b",
            darkgoldenrod: "#b8860b",
            darkgray: "#a9a9a9",
            darkgreen: "#006400",
            darkkhaki: "#bdb76b",
            darkmagenta: "#8b008b",
            darkolivegreen: "#556b2f",
            darkorange: "#ff8c00",
            darkorchid: "#9932cc",
            darkred: "#8b0000",
            darksalmon: "#e9967a",
            darkseagreen: "#8fbc8f",
            darkslateblue: "#483d8b",
            darkslategray: "#2f4f4f",
            darkturquoise: "#00ced1",
            darkviolet: "#9400d3",
            deeppink: "#ff1493",
            deepskyblue: "#00bfff",
            dimgray: "#696969",
            dodgerblue: "#1e90ff",
            firebrick: "#b22222",
            floralwhite: "#fffaf0",
            forestgreen: "#228b22",
            fuchsia: "#ff00ff",
            gainsboro: "#dcdcdc",
            ghostwhite: "#f8f8ff",
            gold: "#ffd700",
            goldenrod: "#daa520",
            gray: "#808080",
            green: "#008000",
            greenyellow: "#adff2f",
            honeydew: "#f0fff0",
            hotpink: "#ff69b4",
            indianred: "#cd5c5c",
            indigo: "#4b0082",
            ivory: "#fffff0",
            khaki: "#f0e68c",
            lavender: "#e6e6fa",
            lavenderblush: "#fff0f5",
            lawngreen: "#7cfc00",
            lemonchiffon: "#fffacd",
            lightblue: "#add8e6",
            lightcoral: "#f08080",
            lightcyan: "#e0ffff",
            lightgoldenrodyellow: "#fafad2",
            lightgrey: "#d3d3d3",
            lightgreen: "#90ee90",
            lightpink: "#ffb6c1",
            lightsalmon: "#ffa07a",
            lightseagreen: "#20b2aa",
            lightskyblue: "#87cefa",
            lightslategray: "#778899",
            lightsteelblue: "#b0c4de",
            lightyellow: "#ffffe0",
            lime: "#00ff00",
            limegreen: "#32cd32",
            linen: "#faf0e6",
            magenta: "#ff00ff",
            maroon: "#800000",
            mediumaquamarine: "#66cdaa",
            mediumblue: "#0000cd",
            mediumorchid: "#ba55d3",
            mediumpurple: "#9370d8",
            mediumseagreen: "#3cb371",
            mediumslateblue: "#7b68ee",
            mediumspringgreen: "#00fa9a",
            mediumturquoise: "#48d1cc",
            mediumvioletred: "#c71585",
            midnightblue: "#191970",
            mintcream: "#f5fffa",
            mistyrose: "#ffe4e1",
            moccasin: "#ffe4b5",
            navajowhite: "#ffdead",
            navy: "#000080",
            oldlace: "#fdf5e6",
            olive: "#808000",
            olivedrab: "#6b8e23",
            orange: "#ffa500",
            orangered: "#ff4500",
            orchid: "#da70d6",
            palegoldenrod: "#eee8aa",
            palegreen: "#98fb98",
            paleturquoise: "#afeeee",
            palevioletred: "#d87093",
            papayawhip: "#ffefd5",
            peachpuff: "#ffdab9",
            peru: "#cd853f",
            pink: "#ffc0cb",
            plum: "#dda0dd",
            powderblue: "#b0e0e6",
            purple: "#800080",
            red: "#ff0000",
            rosybrown: "#bc8f8f",
            royalblue: "#4169e1",
            saddlebrown: "#8b4513",
            salmon: "#fa8072",
            sandybrown: "#f4a460",
            seagreen: "#2e8b57",
            seashell: "#fff5ee",
            sienna: "#a0522d",
            silver: "#c0c0c0",
            skyblue: "#87ceeb",
            slateblue: "#6a5acd",
            slategray: "#708090",
            snow: "#fffafa",
            springgreen: "#00ff7f",
            steelblue: "#4682b4",
            tan: "#d2b48c",
            teal: "#008080",
            thistle: "#d8bfd8",
            tomato: "#ff6347",
            turquoise: "#40e0d0",
            violet: "#ee82ee",
            wheat: "#f5deb3",
            white: "#ffffff",
            whitesmoke: "#f5f5f5",
            yellow: "#ffff00",
            yellowgreen: "#9acd32",
            transparent: "transparent"
        },
        _sanitizeNumber: function(e) {
            return "number" == typeof e ? e : isNaN(e) || null === e || "" === e || void 0 === e ? 1 : "" === e ? 0 : void 0 !== e.toLowerCase ? (e.match(/^\./) && (e = "0" + e), Math.ceil(100 * parseFloat(e)) / 100) : 1
        },
        isTransparent: function(e) {
            return !!e && ("transparent" === (e = e.toLowerCase().trim()) || e.match(/#?00000000/) || e.match(/(rgba|hsla)\(0,0,0,0?\.?0\)/))
        },
        rgbaIsTransparent: function(e) {
            return 0 === e.r && 0 === e.g && 0 === e.b && 0 === e.a
        },
        setColor: function(e) {
            (e = e.toLowerCase().trim()) && (this.isTransparent(e) ? this.value = {
                h: 0,
                s: 0,
                b: 0,
                a: 0
            } : this.value = this.stringToHSB(e) || {
                h: 0,
                s: 0,
                b: 0,
                a: 1
            })
        },
        stringToHSB: function(t) {
            t = t.toLowerCase();
            var i;
            void 0 !== this.colors[t] && (t = this.colors[t], i = "alias");
            var n = this,
                o = !1;
            return e.each(this.stringParsers, function(e, a) {
                var s = a.re.exec(t),
                    r = s && a.parse.apply(n, [s]),
                    l = i || a.format || "rgba";
                return !r || (o = l.match(/hsla?/) ? n.RGBtoHSB.apply(n, n.HSLtoRGB.apply(n, r)) : n.RGBtoHSB.apply(n, r), n.origFormat = l, !1)
            }), o
        },
        setHue: function(e) {
            this.value.h = 1 - e
        },
        setSaturation: function(e) {
            this.value.s = e
        },
        setBrightness: function(e) {
            this.value.b = 1 - e
        },
        setAlpha: function(e) {
            this.value.a = Math.round(parseInt(100 * (1 - e), 10) / 100 * 100) / 100
        },
        toRGB: function(e, t, i, n) {
            e || (e = this.value.h, t = this.value.s, i = this.value.b);
            var o, a, s, r, l;
            return e = (e *= 360) % 360 / 60, l = i * t, r = l * (1 - Math.abs(e % 2 - 1)), o = a = s = i - l, e = ~~e, o += [l, r, 0, 0, r, l][e], a += [r, l, l, r, 0, 0][e], s += [0, 0, r, l, l, r][e], {
                r: Math.round(255 * o),
                g: Math.round(255 * a),
                b: Math.round(255 * s),
                a: n || this.value.a
            }
        },
        toHex: function(e, t, i, n) {
            var o = this.toRGB(e, t, i, n);
            return this.rgbaIsTransparent(o) ? "transparent" : "#" + (1 << 24 | parseInt(o.r) << 16 | parseInt(o.g) << 8 | parseInt(o.b)).toString(16).substr(1)
        },
        toHSL: function(e, t, i, n) {
            e = e || this.value.h, t = t || this.value.s, i = i || this.value.b, n = n || this.value.a;
            var o = e,
                a = (2 - t) * i,
                s = t * i;
            return s /= a > 0 && a <= 1 ? a : 2 - a, a /= 2, s > 1 && (s = 1), {
                h: isNaN(o) ? 0 : o,
                s: isNaN(s) ? 0 : s,
                l: isNaN(a) ? 0 : a,
                a: isNaN(n) ? 0 : n
            }
        },
        toAlias: function(e, t, i, n) {
            var o = this.toHex(e, t, i, n);
            for (var a in this.colors)
                if (this.colors[a] === o) return a;
            return !1
        },
        RGBtoHSB: function(e, t, i, n) {
            e /= 255, t /= 255, i /= 255;
            var o, a, s, r;
            return s = Math.max(e, t, i), r = s - Math.min(e, t, i), o = 0 === r ? null : s === e ? (t - i) / r : s === t ? (i - e) / r + 2 : (e - t) / r + 4, o = (o + 360) % 6 * 60 / 360, a = 0 === r ? 0 : r / s, {
                h: this._sanitizeNumber(o),
                s: a,
                b: s,
                a: this._sanitizeNumber(n)
            }
        },
        HueToRGB: function(e, t, i) {
            return i < 0 ? i += 1 : i > 1 && (i -= 1), 6 * i < 1 ? e + (t - e) * i * 6 : 2 * i < 1 ? t : 3 * i < 2 ? e + (t - e) * (2 / 3 - i) * 6 : e
        },
        HSLtoRGB: function(e, t, i, n) {
            t < 0 && (t = 0);
            var o, a = 2 * i - (o = i <= .5 ? i * (1 + t) : i + t - i * t),
                s = e + 1 / 3,
                r = e,
                l = e - 1 / 3;
            return [Math.round(255 * this.HueToRGB(a, o, s)), Math.round(255 * this.HueToRGB(a, o, r)), Math.round(255 * this.HueToRGB(a, o, l)), this._sanitizeNumber(n)]
        },
        toString: function(e) {
            var t = !1;
            switch (e = e || "rgba") {
                case "rgb":
                    return t = this.toRGB(), this.rgbaIsTransparent(t) ? "transparent" : "rgb(" + t.r + "," + t.g + "," + t.b + ")";
                case "rgba":
                    return "rgba(" + (t = this.toRGB()).r + "," + t.g + "," + t.b + "," + t.a + ")";
                case "hsl":
                    return t = this.toHSL(), "hsl(" + Math.round(360 * t.h) + "," + Math.round(100 * t.s) + "%," + Math.round(100 * t.l) + "%)";
                case "hsla":
                    return t = this.toHSL(), "hsla(" + Math.round(360 * t.h) + "," + Math.round(100 * t.s) + "%," + Math.round(100 * t.l) + "%," + t.a + ")";
                case "hex":
                    return this.toHex();
                case "alias":
                    return this.toAlias() || this.toHex();
                default:
                    return t
            }
        },
        stringParsers: [{
            re: /rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*?\)/,
            format: "rgb",
            parse: function(e) {
                return [e[1], e[2], e[3], 1]
            }
        }, {
            re: /rgb\(\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*?\)/,
            format: "rgb",
            parse: function(e) {
                return [2.55 * e[1], 2.55 * e[2], 2.55 * e[3], 1]
            }
        }, {
            re: /rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d*(?:\.\d+)?)\s*)?\)/,
            format: "rgba",
            parse: function(e) {
                return [e[1], e[2], e[3], e[4]]
            }
        }, {
            re: /rgba\(\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*(?:,\s*(\d*(?:\.\d+)?)\s*)?\)/,
            format: "rgba",
            parse: function(e) {
                return [2.55 * e[1], 2.55 * e[2], 2.55 * e[3], e[4]]
            }
        }, {
            re: /hsl\(\s*(\d*(?:\.\d+)?)\s*,\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*?\)/,
            format: "hsl",
            parse: function(e) {
                return [e[1] / 360, e[2] / 100, e[3] / 100, e[4]]
            }
        }, {
            re: /hsla\(\s*(\d*(?:\.\d+)?)\s*,\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*(?:,\s*(\d*(?:\.\d+)?)\s*)?\)/,
            format: "hsla",
            parse: function(e) {
                return [e[1] / 360, e[2] / 100, e[3] / 100, e[4]]
            }
        }, {
            re: /#?([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,
            format: "hex",
            parse: function(e) {
                return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16), 1]
            }
        }, {
            re: /#?([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/,
            format: "hex",
            parse: function(e) {
                return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16), 1]
            }
        }],
        colorNameToHex: function(e) {
            return void 0 !== this.colors[e.toLowerCase()] && this.colors[e.toLowerCase()]
        }
    };
    var i = {
            horizontal: !1,
            inline: !1,
            color: !1,
            format: !1,
            input: "input",
            container: !1,
            component: ".add-on, .input-group-addon",
            sliders: {
                saturation: {
                    maxLeft: 100,
                    maxTop: 100,
                    callLeft: "setSaturation",
                    callTop: "setBrightness"
                },
                hue: {
                    maxLeft: 0,
                    maxTop: 100,
                    callLeft: !1,
                    callTop: "setHue"
                },
                alpha: {
                    maxLeft: 0,
                    maxTop: 100,
                    callLeft: !1,
                    callTop: "setAlpha"
                }
            },
            slidersHorz: {
                saturation: {
                    maxLeft: 100,
                    maxTop: 100,
                    callLeft: "setSaturation",
                    callTop: "setBrightness"
                },
                hue: {
                    maxLeft: 100,
                    maxTop: 0,
                    callLeft: "setHue",
                    callTop: !1
                },
                alpha: {
                    maxLeft: 100,
                    maxTop: 0,
                    callLeft: "setAlpha",
                    callTop: !1
                }
            },
            template: '<div class="colorpicker dropdown-menu"><div class="colorpicker-saturation"><i><b></b></i></div><div class="colorpicker-hue"><i></i></div><div class="colorpicker-alpha"><i></i></div><div class="colorpicker-color"><div /></div><div class="colorpicker-selectors"></div></div>',
            align: "right",
            customClass: null,
            colorSelectors: null
        },
        n = function(n, o) {
            if (this.element = e(n).addClass("colorpicker-element"), this.options = e.extend(!0, {}, i, this.element.data(), o), this.component = this.options.component, this.component = !1 !== this.component && this.element.find(this.component), this.component && 0 === this.component.length && (this.component = !1), this.container = !0 === this.options.container ? this.element : this.options.container, this.container = !1 !== this.container && e(this.container), this.input = this.element.is("input") ? this.element : !!this.options.input && this.element.find(this.options.input), this.input && 0 === this.input.length && (this.input = !1), this.color = new t(!1 !== this.options.color ? this.options.color : this.getValue(), this.options.colorSelectors), this.format = !1 !== this.options.format ? this.options.format : this.color.origFormat, !1 !== this.options.color && (this.updateInput(this.color), this.updateData(this.color)), this.picker = e(this.options.template), this.options.customClass && this.picker.addClass(this.options.customClass), this.options.inline ? this.picker.addClass("colorpicker-inline colorpicker-visible") : this.picker.addClass("colorpicker-hidden"), this.options.horizontal && this.picker.addClass("colorpicker-horizontal"), "rgba" !== this.format && "hsla" !== this.format && !1 !== this.options.format || this.picker.addClass("colorpicker-with-alpha"), "right" === this.options.align && this.picker.addClass("colorpicker-right"), !0 === this.options.inline && this.picker.addClass("colorpicker-no-arrow"), this.options.colorSelectors) {
                var a = this;
                e.each(this.options.colorSelectors, function(t, i) {
                    var n = e("<i />").css("background-color", i).data("class", t);
                    n.click(function() {
                        a.setValue(e(this).css("background-color"))
                    }), a.picker.find(".colorpicker-selectors").append(n)
                }), this.picker.find(".colorpicker-selectors").show()
            }
            this.picker.on("mousedown.colorpicker touchstart.colorpicker", e.proxy(this.mousedown, this)), this.picker.appendTo(this.container ? this.container : e("body")), !1 !== this.input && (this.input.on({
                "keyup.colorpicker": e.proxy(this.keyup, this)
            }), this.input.on({
                "change.colorpicker": e.proxy(this.change, this)
            }), !1 === this.component && this.element.on({
                "focus.colorpicker": e.proxy(this.show, this)
            }), !1 === this.options.inline && this.element.on({
                "focusout.colorpicker": e.proxy(this.hide, this)
            })), !1 !== this.component && this.component.on({
                "click.colorpicker": e.proxy(this.show, this)
            }), !1 === this.input && !1 === this.component && this.element.on({
                "click.colorpicker": e.proxy(this.show, this)
            }), !1 !== this.input && !1 !== this.component && "color" === this.input.attr("type") && this.input.on({
                "click.colorpicker": e.proxy(this.show, this),
                "focus.colorpicker": e.proxy(this.show, this)
            }), this.update(), e(e.proxy(function() {
                this.element.trigger("create")
            }, this))
        };
    n.Color = t, n.prototype = {
        constructor: n,
        destroy: function() {
            this.picker.remove(), this.element.removeData("colorpicker", "color").off(".colorpicker"), !1 !== this.input && this.input.off(".colorpicker"), !1 !== this.component && this.component.off(".colorpicker"), this.element.removeClass("colorpicker-element"), this.element.trigger({
                type: "destroy"
            })
        },
        reposition: function() {
            if (!1 !== this.options.inline || this.options.container) return !1;
            var e = this.container && this.container[0] !== document.body ? "position" : "offset",
                t = this.component || this.element,
                i = t[e]();
            "right" === this.options.align && (i.left -= this.picker.outerWidth() - t.outerWidth()), this.picker.css({
                top: i.top - window.scrollY + t.outerHeight(),
                left: i.left
            })
        },
        show: function(t) {
            if (this.isDisabled()) return !1;
            this.picker.addClass("colorpicker-visible").removeClass("colorpicker-hidden"), this.reposition(), e(window).on("resize.colorpicker", e.proxy(this.reposition, this)), !t || this.hasInput() && "color" !== this.input.attr("type") || t.stopPropagation && t.preventDefault && (t.stopPropagation(), t.preventDefault()), !this.component && this.input || !1 !== this.options.inline || e(window.document).on({
                "mousedown.colorpicker": e.proxy(this.hide, this)
            }), this.element.trigger({
                type: "showPicker",
                color: this.color
            })
        },
        hide: function() {
            this.picker.addClass("colorpicker-hidden").removeClass("colorpicker-visible"), e(window).off("resize.colorpicker", this.reposition), e(document).off({
                "mousedown.colorpicker": this.hide
            }), this.update(), this.element.trigger({
                type: "hidePicker",
                color: this.color
            })
        },
        updateData: function(e) {
            return e = e || this.color.toString(this.format), this.element.data("color", e), e
        },
        updateInput: function(e) {
            if (e = e || this.color.toString(this.format), !1 !== this.input) {
                if (this.options.colorSelectors) {
                    var i = new t(e, this.options.colorSelectors).toAlias();
                    void 0 !== this.options.colorSelectors[i] && (e = i)
                }
                this.input.prop("value", e)
            }
            return e
        },
        updatePicker: function(e) {
            void 0 !== e && (this.color = new t(e, this.options.colorSelectors));
            var i = !1 === this.options.horizontal ? this.options.sliders : this.options.slidersHorz,
                n = this.picker.find("i");
            if (0 !== n.length) return !1 === this.options.horizontal ? (i = this.options.sliders, n.eq(1).css("top", i.hue.maxTop * (1 - this.color.value.h)).end().eq(2).css("top", i.alpha.maxTop * (1 - this.color.value.a))) : (i = this.options.slidersHorz, n.eq(1).css("left", i.hue.maxLeft * (1 - this.color.value.h)).end().eq(2).css("left", i.alpha.maxLeft * (1 - this.color.value.a))), n.eq(0).css({
                top: i.saturation.maxTop - this.color.value.b * i.saturation.maxTop,
                left: this.color.value.s * i.saturation.maxLeft
            }), this.picker.find(".colorpicker-saturation").css("backgroundColor", this.color.toHex(this.color.value.h, 1, 1, 1)), this.picker.find(".colorpicker-alpha").css("backgroundColor", this.color.toHex()), this.picker.find(".colorpicker-color, .colorpicker-color div").css("backgroundColor", this.color.toString(this.format)), e
        },
        updateComponent: function(e) {
            if (e = e || this.color.toString(this.format), !1 !== this.component) {
                var t = this.component.find("i").eq(0);
                t.length > 0 ? t.css({
                    backgroundColor: e
                }) : this.component.css({
                    backgroundColor: e
                })
            }
            return e
        },
        update: function(e) {
            var t;
            return !1 === this.getValue(!1) && !0 !== e || (t = this.updateComponent(), this.updateInput(t), this.updateData(t), this.updatePicker()), t
        },
        setValue: function(e) {
            this.color = new t(e, this.options.colorSelectors), this.update(!0), this.element.trigger({
                type: "changeColor",
                color: this.color,
                value: e
            })
        },
        getValue: function(e) {
            e = void 0 === e ? "#000000" : e;
            var t;
            return void 0 !== (t = this.hasInput() ? this.input.val() : this.element.data("color")) && "" !== t && null !== t || (t = e), t
        },
        hasInput: function() {
            return !1 !== this.input
        },
        isDisabled: function() {
            return !!this.hasInput() && !0 === this.input.prop("disabled")
        },
        disable: function() {
            return !!this.hasInput() && (this.input.prop("disabled", !0), this.element.trigger({
                type: "disable",
                color: this.color,
                value: this.getValue()
            }), !0)
        },
        enable: function() {
            return !!this.hasInput() && (this.input.prop("disabled", !1), this.element.trigger({
                type: "enable",
                color: this.color,
                value: this.getValue()
            }), !0)
        },
        currentSlider: null,
        mousePointer: {
            left: 0,
            top: 0
        },
        mousedown: function(t) {
            !t.pageX && !t.pageY && t.originalEvent && t.originalEvent.touches && (t.pageX = t.originalEvent.touches[0].pageX, t.pageY = t.originalEvent.touches[0].pageY), t.stopPropagation(), t.preventDefault();
            var i = e(t.target).closest("div"),
                n = this.options.horizontal ? this.options.slidersHorz : this.options.sliders;
            if (!i.is(".colorpicker")) {
                if (i.is(".colorpicker-saturation")) this.currentSlider = e.extend({}, n.saturation);
                else if (i.is(".colorpicker-hue")) this.currentSlider = e.extend({}, n.hue);
                else {
                    if (!i.is(".colorpicker-alpha")) return !1;
                    this.currentSlider = e.extend({}, n.alpha)
                }
                var o = i.offset();
                this.currentSlider.guide = i.find("i")[0].style, this.currentSlider.left = t.pageX - o.left, this.currentSlider.top = t.pageY - o.top, this.mousePointer = {
                    left: t.pageX,
                    top: t.pageY
                }, e(document).on({
                    "mousemove.colorpicker": e.proxy(this.mousemove, this),
                    "touchmove.colorpicker": e.proxy(this.mousemove, this),
                    "mouseup.colorpicker": e.proxy(this.mouseup, this),
                    "touchend.colorpicker": e.proxy(this.mouseup, this)
                }).trigger("mousemove")
            }
            return !1
        },
        mousemove: function(e) {
            !e.pageX && !e.pageY && e.originalEvent && e.originalEvent.touches && (e.pageX = e.originalEvent.touches[0].pageX, e.pageY = e.originalEvent.touches[0].pageY), e.stopPropagation(), e.preventDefault();
            var t = Math.max(0, Math.min(this.currentSlider.maxLeft, this.currentSlider.left + ((e.pageX || this.mousePointer.left) - this.mousePointer.left))),
                i = Math.max(0, Math.min(this.currentSlider.maxTop, this.currentSlider.top + ((e.pageY || this.mousePointer.top) - this.mousePointer.top)));
            return this.currentSlider.guide.left = t + "px", this.currentSlider.guide.top = i + "px", this.currentSlider.callLeft && this.color[this.currentSlider.callLeft].call(this.color, t / this.currentSlider.maxLeft), this.currentSlider.callTop && this.color[this.currentSlider.callTop].call(this.color, i / this.currentSlider.maxTop), "setAlpha" === this.currentSlider.callTop && !1 === this.options.format && (1 !== this.color.value.a ? (this.format = "rgba", this.color.origFormat = "rgba") : (this.format = "hex", this.color.origFormat = "hex")), this.update(!0), this.element.trigger({
                type: "changeColor",
                color: this.color
            }), !1
        },
        mouseup: function(t) {
            return t.stopPropagation(), t.preventDefault(), e(document).off({
                "mousemove.colorpicker": this.mousemove,
                "touchmove.colorpicker": this.mousemove,
                "mouseup.colorpicker": this.mouseup,
                "touchend.colorpicker": this.mouseup
            }), !1
        },
        change: function(e) {
            this.keyup(e)
        },
        keyup: function(e) {
            38 === e.keyCode ? (this.color.value.a < 1 && (this.color.value.a = Math.round(100 * (this.color.value.a + .01)) / 100), this.update(!0)) : 40 === e.keyCode ? (this.color.value.a > 0 && (this.color.value.a = Math.round(100 * (this.color.value.a - .01)) / 100), this.update(!0)) : (this.color = new t(this.input.val(), this.options.colorSelectors), this.color.origFormat && !1 === this.options.format && (this.format = this.color.origFormat), !1 !== this.getValue(!1) && (this.updateData(), this.updateComponent(), this.updatePicker())), this.element.trigger({
                type: "changeColor",
                color: this.color,
                value: this.input.val()
            })
        }
    }, e.colorpicker = n, e.fn.colorpicker = function(t) {
        var i = arguments,
            o = null,
            a = this.each(function() {
                var a = e(this),
                    s = a.data("colorpicker"),
                    r = "object" == typeof t ? t : {};
                s || "string" == typeof t ? "string" == typeof t && (o = s[t].apply(s, Array.prototype.slice.call(i, 1))) : a.data("colorpicker", new n(this, r))
            });
        return "getValue" === t ? o : a
    }, e.fn.colorpicker.constructor = n
}),
function() {
    function e(e, t) {
        var i = document.createElement("div");
        i.className = "notyf__toast";
        var n = document.createElement("div");
        n.className = "notyf__wrapper";
        var o = document.createElement("div");
        o.className = "notyf__icon";
        var a = document.createElement("i");
        a.className = "material-icons", a.innerHTML = t;
        var s = document.createElement("div");
        s.className = "notyf__message", s.innerHTML = e, o.appendChild(a), n.appendChild(o), n.appendChild(s), i.appendChild(n);
        var r = this;
        return setTimeout(function() {
            i.className += " notyf--disappear", i.addEventListener(r.animationEnd, function(e) {
                e.target == i && r.container.removeChild(i)
            });
            var e = r.notifications.indexOf(i);
            r.notifications.splice(e, 1)
        }, r.options.delay), i
    }
    this.Notyf = function() {
        this.notifications = [];
        var e = {
            delay: 2e3,
            alertIcon: "notyf__icon--alert",
            confirmIcon: "notyf__icon--confirm"
        };
        arguments[0] && "object" == typeof arguments[0] ? this.options = function(e, t) {
            for (property in t) t.hasOwnProperty(property) && (e[property] = t[property]);
            return e
        }(e, arguments[0]) : this.options = e;
        var t = document.createDocumentFragment(),
            i = document.createElement("div");
        i.className = "notyf", t.appendChild(i), document.body.appendChild(t), this.container = i, this.animationEnd = function() {
            var e, t = document.createElement("fake"),
                i = {
                    transition: "animationend",
                    OTransition: "oAnimationEnd",
                    MozTransition: "animationend",
                    WebkitTransition: "webkitAnimationEnd"
                };
            for (e in i)
                if (void 0 !== t.style[e]) return i[e]
        }()
    }, this.Notyf.prototype.alert = function(t) {
        var i = e.call(this, t, this.options.alertIcon);
        i.className += " notyf--alert", this.container.appendChild(i), this.notifications.push(i)
    }, this.Notyf.prototype.confirm = function(t) {
        var i = e.call(this, t, this.options.confirmIcon);
        i.className += " notyf--confirm", this.container.appendChild(i), this.notifications.push(i)
    }
}(), "function" == typeof define && define.amd ? define("Notyf", function() {
        return Notyf
    }) : "undefined" != typeof module && module.exports ? module.exports = Notyf : window.Notyf = Notyf,
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery")) : e(window.jQuery)
    }(function($) {
        "use strict";
        var func = function() {
                var e = 0;
                return {
                    eq: function(e) {
                        return function(t) {
                            return e === t
                        }
                    },
                    eq2: function(e, t) {
                        return e === t
                    },
                    peq2: function(e) {
                        return function(t, i) {
                            return t[e] === i[e]
                        }
                    },
                    ok: function() {
                        return !0
                    },
                    fail: function() {
                        return !1
                    },
                    self: function(e) {
                        return e
                    },
                    not: function(e) {
                        return function() {
                            return !e.apply(e, arguments)
                        }
                    },
                    and: function(e, t) {
                        return function(i) {
                            return e(i) && t(i)
                        }
                    },
                    invoke: function(e, t) {
                        return function() {
                            return e[t].apply(e, arguments)
                        }
                    },
                    uniqueId: function(t) {
                        var i = ++e + "";
                        return t ? t + i : i
                    },
                    rect2bnd: function(e) {
                        var t = $(document);
                        return {
                            top: e.top + t.scrollTop(),
                            left: e.left + t.scrollLeft(),
                            width: e.right - e.left,
                            height: e.bottom - e.top
                        }
                    },
                    invertObject: function(e) {
                        var t = {};
                        for (var i in e) e.hasOwnProperty(i) && (t[e[i]] = i);
                        return t
                    },
                    namespaceToCamel: function(e, t) {
                        return (t = t || "") + e.split(".").map(function(e) {
                            return e.substring(0, 1).toUpperCase() + e.substring(1)
                        }).join("")
                    }
                }
            }(),
            list = function() {
                var e = function(e) {
                        return e[0]
                    },
                    t = function(e) {
                        return e[e.length - 1]
                    },
                    i = function(e) {
                        return e.slice(1)
                    },
                    n = function(e, t) {
                        return $.inArray(t, e)
                    },
                    o = function(e, t) {
                        return -1 !== n(e, t)
                    };
                return {
                    head: e,
                    last: t,
                    initial: function(e) {
                        return e.slice(0, e.length - 1)
                    },
                    tail: i,
                    prev: function(e, t) {
                        var i = n(e, t);
                        return -1 === i ? null : e[i - 1]
                    },
                    next: function(e, t) {
                        var i = n(e, t);
                        return -1 === i ? null : e[i + 1]
                    },
                    find: function(e, t) {
                        for (var i = 0, n = e.length; i < n; i++) {
                            var o = e[i];
                            if (t(o)) return o
                        }
                    },
                    contains: o,
                    all: function(e, t) {
                        for (var i = 0, n = e.length; i < n; i++)
                            if (!t(e[i])) return !1;
                        return !0
                    },
                    sum: function(e, t) {
                        return t = t || func.self, e.reduce(function(e, i) {
                            return e + t(i)
                        }, 0)
                    },
                    from: function(e) {
                        for (var t = [], i = -1, n = e.length; ++i < n;) t[i] = e[i];
                        return t
                    },
                    isEmpty: function(e) {
                        return !e || !e.length
                    },
                    clusterBy: function(n, o) {
                        if (!n.length) return [];
                        return i(n).reduce(function(e, i) {
                            var n = t(e);
                            return o(t(n), i) ? n[n.length] = i : e[e.length] = [i], e
                        }, [
                            [e(n)]
                        ])
                    },
                    compact: function(e) {
                        for (var t = [], i = 0, n = e.length; i < n; i++) e[i] && t.push(e[i]);
                        return t
                    },
                    unique: function(e) {
                        for (var t = [], i = 0, n = e.length; i < n; i++) o(t, e[i]) || t.push(e[i]);
                        return t
                    }
                }
            }(),
            isSupportAmd = "function" == typeof define && define.amd,
            isFontInstalled = function(e) {
                var t = "Comic Sans MS" === e ? "Courier New" : "Comic Sans MS",
                    i = $("<div>").css({
                        position: "absolute",
                        left: "-9999px",
                        top: "-9999px",
                        fontSize: "200px"
                    }).text("mmmmmmmmmwwwwwww").appendTo(document.body),
                    n = i.css("fontFamily", t).width(),
                    o = i.css("fontFamily", e + "," + t).width();
                return i.remove(), n !== o
            },
            userAgent = navigator.userAgent,
            isMSIE = /MSIE|Trident/i.test(userAgent),
            browserVersion;
        if (isMSIE) {
            var matches = /MSIE (\d+[.]\d+)/.exec(userAgent);
            matches && (browserVersion = parseFloat(matches[1])), matches = /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(userAgent), matches && (browserVersion = parseFloat(matches[1]))
        }
        var isEdge = /Edge\/\d+/.test(userAgent),
            hasCodeMirror = !!window.CodeMirror;
        if (!hasCodeMirror && isSupportAmd && "undefined" != typeof require)
            if (void 0 !== require.resolve) try {
                require.resolve("codemirror"), hasCodeMirror = !0
            } catch (e) {} else void 0 !== eval("require").specified && (hasCodeMirror = eval("require").specified("codemirror"));
        var agent = {
                isMac: navigator.appVersion.indexOf("Mac") > -1,
                isMSIE: isMSIE,
                isEdge: isEdge,
                isFF: !isEdge && /firefox/i.test(userAgent),
                isPhantom: /PhantomJS/i.test(userAgent),
                isWebkit: !isEdge && /webkit/i.test(userAgent),
                isChrome: !isEdge && /chrome/i.test(userAgent),
                isSafari: !isEdge && /safari/i.test(userAgent),
                browserVersion: browserVersion,
                jqueryVersion: parseFloat($.fn.jquery),
                isSupportAmd: isSupportAmd,
                hasCodeMirror: hasCodeMirror,
                isFontInstalled: isFontInstalled,
                isW3CRangeSupport: !!document.createRange
            },
            NBSP_CHAR = String.fromCharCode(160),
            ZERO_WIDTH_NBSP_CHAR = "\ufeff",
            dom = function() {
                var e = function(e) {
                        return e && $(e).hasClass("note-editable")
                    },
                    t = function(e) {
                        return e = e.toUpperCase(),
                            function(t) {
                                return t && t.nodeName.toUpperCase() === e
                            }
                    },
                    i = function(e) {
                        return e && 3 === e.nodeType
                    },
                    n = function(e) {
                        return e && /^BR|^IMG|^HR|^IFRAME|^BUTTON/.test(e.nodeName.toUpperCase())
                    },
                    o = function(t) {
                        return !e(t) && (t && /^DIV|^P|^LI|^H[1-7]/.test(t.nodeName.toUpperCase()))
                    },
                    a = t("PRE"),
                    s = t("LI"),
                    r = t("TABLE"),
                    l = function(e) {
                        return !(h(e) || c(e) || d(e) || o(e) || r(e) || p(e))
                    },
                    c = function(e) {
                        return e && /^UL|^OL/.test(e.nodeName.toUpperCase())
                    },
                    d = t("HR"),
                    u = function(e) {
                        return e && /^TD|^TH/.test(e.nodeName.toUpperCase())
                    },
                    p = t("BLOCKQUOTE"),
                    h = function(t) {
                        return u(t) || p(t) || e(t)
                    },
                    m = t("A"),
                    f = t("BODY"),
                    g = (agent.isMSIE && agent.browserVersion, "<br>"),
                    _ = function(e) {
                        return i(e) ? e.nodeValue.length : e.childNodes.length
                    },
                    v = function(e) {
                        var t = _(e);
                        return 0 === t || (!i(e) && 1 === t && e.innerHTML === g || !(!list.all(e.childNodes, i) || "" !== e.innerHTML))
                    },
                    b = function(e) {
                        n(e) || _(e) || (e.innerHTML = g)
                    },
                    x = function(t, i) {
                        for (; t;) {
                            if (i(t)) return t;
                            if (e(t)) break;
                            t = t.parentNode
                        }
                        return null
                    },
                    y = function(t, i) {
                        i = i || func.fail;
                        var n = [];
                        return x(t, function(t) {
                            return e(t) || n.push(t), i(t)
                        }), n
                    },
                    w = function(e, t) {
                        t = t || func.fail;
                        for (var i = []; e && !t(e);) i.push(e), e = e.nextSibling;
                        return i
                    },
                    k = function(e, t) {
                        var i = t.nextSibling,
                            n = t.parentNode;
                        return i ? n.insertBefore(e, i) : n.appendChild(e), e
                    },
                    C = function(e, t) {
                        return $.each(t, function(t, i) {
                            e.appendChild(i)
                        }), e
                    },
                    S = function(e) {
                        return 0 === e.offset
                    },
                    T = function(e) {
                        return e.offset === _(e.node)
                    },
                    j = function(e) {
                        return S(e) || T(e)
                    },
                    E = function(e, t) {
                        for (; e && e !== t;) {
                            if (0 !== I(e)) return !1;
                            e = e.parentNode
                        }
                        return !0
                    },
                    P = function(e, t) {
                        for (; e && e !== t;) {
                            if (I(e) !== _(e.parentNode) - 1) return !1;
                            e = e.parentNode
                        }
                        return !0
                    },
                    I = function(e) {
                        for (var t = 0; e = e.previousSibling;) t += 1;
                        return t
                    },
                    A = function(e) {
                        return !!(e && e.childNodes && e.childNodes.length)
                    },
                    F = function(t, i) {
                        var n, o;
                        if (0 === t.offset) {
                            if (e(t.node)) return null;
                            n = t.node.parentNode, o = I(t.node)
                        } else A(t.node) ? (n = t.node.childNodes[t.offset - 1], o = _(n)) : (n = t.node, o = i ? 0 : t.offset - 1);
                        return {
                            node: n,
                            offset: o
                        }
                    },
                    D = function(t, i) {
                        var n, o;
                        if (_(t.node) === t.offset) {
                            if (e(t.node)) return null;
                            n = t.node.parentNode, o = I(t.node) + 1
                        } else A(t.node) ? (n = t.node.childNodes[t.offset], o = 0) : (n = t.node, o = i ? _(t.node) : t.offset + 1);
                        return {
                            node: n,
                            offset: o
                        }
                    },
                    B = function(e, t) {
                        return e.node === t.node && e.offset === t.offset
                    },
                    L = function(e, t) {
                        var n = t && t.isSkipPaddingBlankHTML,
                            o = t && t.isNotSplitEdgePoint;
                        if (j(e) && (i(e.node) || o)) {
                            if (S(e)) return e.node;
                            if (T(e)) return e.node.nextSibling
                        }
                        if (i(e.node)) return e.node.splitText(e.offset);
                        var a = e.node.childNodes[e.offset],
                            s = k(e.node.cloneNode(!1), e.node);
                        return C(s, w(a)), n || (b(e.node), b(s)), s
                    },
                    N = function(e, t, i) {
                        var n = y(t.node, func.eq(e));
                        return n.length ? 1 === n.length ? L(t, i) : n.reduce(function(e, n) {
                            return e === t.node && (e = L(t, i)), L({
                                node: n,
                                offset: e ? dom.position(e) : _(n)
                            }, i)
                        }) : null
                    },
                    z = function(e) {
                        return document.createElement(e)
                    },
                    M = function(e, t) {
                        if (e && e.parentNode) {
                            if (e.removeNode) return e.removeNode(t);
                            var i = e.parentNode;
                            if (!t) {
                                var n, o, a = [];
                                for (n = 0, o = e.childNodes.length; n < o; n++) a.push(e.childNodes[n]);
                                for (n = 0, o = a.length; n < o; n++) i.insertBefore(a[n], e)
                            }
                            i.removeChild(e)
                        }
                    },
                    O = t("TEXTAREA"),
                    R = function(e, t) {
                        var i = O(e[0]) ? e.val() : e.html();
                        return t ? i.replace(/[\n\r]/g, "") : i
                    };
                return {
                    NBSP_CHAR: NBSP_CHAR,
                    ZERO_WIDTH_NBSP_CHAR: ZERO_WIDTH_NBSP_CHAR,
                    blank: g,
                    emptyPara: "<p>" + g + "</p>",
                    makePredByNodeName: t,
                    isEditable: e,
                    isControlSizing: function(e) {
                        return e && $(e).hasClass("note-control-sizing")
                    },
                    isText: i,
                    isElement: function(e) {
                        return e && 1 === e.nodeType
                    },
                    isVoid: n,
                    isPara: o,
                    isPurePara: function(e) {
                        return o(e) && !s(e)
                    },
                    isHeading: function(e) {
                        return e && /^H[1-7]/.test(e.nodeName.toUpperCase())
                    },
                    isInline: l,
                    isBlock: func.not(l),
                    isBodyInline: function(e) {
                        return l(e) && !x(e, o)
                    },
                    isBody: f,
                    isParaInline: function(e) {
                        return l(e) && !!x(e, o)
                    },
                    isPre: a,
                    isList: c,
                    isTable: r,
                    isCell: u,
                    isBlockquote: p,
                    isBodyContainer: h,
                    isAnchor: m,
                    isDiv: t("DIV"),
                    isLi: s,
                    isBR: t("BR"),
                    isSpan: t("SPAN"),
                    isB: t("B"),
                    isU: t("U"),
                    isS: t("S"),
                    isI: t("I"),
                    isImg: t("IMG"),
                    isTextarea: O,
                    isEmpty: v,
                    isEmptyAnchor: func.and(m, v),
                    isClosestSibling: function(e, t) {
                        return e.nextSibling === t || e.previousSibling === t
                    },
                    withClosestSiblings: function(e, t) {
                        t = t || func.ok;
                        var i = [];
                        return e.previousSibling && t(e.previousSibling) && i.push(e.previousSibling), i.push(e), e.nextSibling && t(e.nextSibling) && i.push(e.nextSibling), i
                    },
                    nodeLength: _,
                    isLeftEdgePoint: S,
                    isRightEdgePoint: T,
                    isEdgePoint: j,
                    isLeftEdgeOf: E,
                    isRightEdgeOf: P,
                    isLeftEdgePointOf: function(e, t) {
                        return S(e) && E(e.node, t)
                    },
                    isRightEdgePointOf: function(e, t) {
                        return T(e) && P(e.node, t)
                    },
                    prevPoint: F,
                    nextPoint: D,
                    isSamePoint: B,
                    isVisiblePoint: function(e) {
                        if (i(e.node) || !A(e.node) || v(e.node)) return !0;
                        var t = e.node.childNodes[e.offset - 1],
                            o = e.node.childNodes[e.offset];
                        return !(t && !n(t) || o && !n(o))
                    },
                    prevPointUntil: function(e, t) {
                        for (; e;) {
                            if (t(e)) return e;
                            e = F(e)
                        }
                        return null
                    },
                    nextPointUntil: function(e, t) {
                        for (; e;) {
                            if (t(e)) return e;
                            e = D(e)
                        }
                        return null
                    },
                    isCharPoint: function(e) {
                        if (!i(e.node)) return !1;
                        var t = e.node.nodeValue.charAt(e.offset - 1);
                        return t && " " !== t && t !== NBSP_CHAR
                    },
                    walkPoint: function(e, t, i, n) {
                        for (var o = e; o && (i(o), !B(o, t));) {
                            var a = n && e.node !== o.node && t.node !== o.node;
                            o = D(o, a)
                        }
                    },
                    ancestor: x,
                    singleChildAncestor: function(t, i) {
                        for (t = t.parentNode; t && 1 === _(t);) {
                            if (i(t)) return t;
                            if (e(t)) break;
                            t = t.parentNode
                        }
                        return null
                    },
                    listAncestor: y,
                    lastAncestor: function(e, t) {
                        var i = y(e);
                        return list.last(i.filter(t))
                    },
                    listNext: w,
                    listPrev: function(e, t) {
                        t = t || func.fail;
                        for (var i = []; e && !t(e);) i.push(e), e = e.previousSibling;
                        return i
                    },
                    listDescendant: function(e, t) {
                        var i = [];
                        return t = t || func.ok,
                            function n(o) {
                                e !== o && t(o) && i.push(o);
                                for (var a = 0, s = o.childNodes.length; a < s; a++) n(o.childNodes[a])
                            }(e), i
                    },
                    commonAncestor: function(e, t) {
                        for (var i = y(e), n = t; n; n = n.parentNode)
                            if ($.inArray(n, i) > -1) return n;
                        return null
                    },
                    wrap: function(e, t) {
                        var i = e.parentNode,
                            n = $("<" + t + ">")[0];
                        return i.insertBefore(n, e), n.appendChild(e), n
                    },
                    insertAfter: k,
                    appendChildNodes: C,
                    position: I,
                    hasChildren: A,
                    makeOffsetPath: function(e, t) {
                        return y(t, func.eq(e)).map(I).reverse()
                    },
                    fromOffsetPath: function(e, t) {
                        for (var i = e, n = 0, o = t.length; n < o; n++) i = i.childNodes.length <= t[n] ? i.childNodes[i.childNodes.length - 1] : i.childNodes[t[n]];
                        return i
                    },
                    splitTree: N,
                    splitPoint: function(e, t) {
                        var i, n, a = t ? o : h,
                            s = y(e.node, a),
                            r = list.last(s) || e.node;
                        a(r) ? (i = s[s.length - 2], n = r) : n = (i = r).parentNode;
                        var l = i && N(i, e, {
                            isSkipPaddingBlankHTML: t,
                            isNotSplitEdgePoint: t
                        });
                        return l || n !== e.node || (l = e.node.childNodes[e.offset]), {
                            rightNode: l,
                            container: n
                        }
                    },
                    create: z,
                    createText: function(e) {
                        return document.createTextNode(e)
                    },
                    remove: M,
                    removeWhile: function(t, i) {
                        for (; t && !e(t) && i(t);) {
                            var n = t.parentNode;
                            M(t), t = n
                        }
                    },
                    replace: function(e, t) {
                        if (e.nodeName.toUpperCase() === t.toUpperCase()) return e;
                        var i = z(t);
                        return e.style.cssText && (i.style.cssText = e.style.cssText), C(i, list.from(e.childNodes)), k(i, e), M(e), i
                    },
                    html: function(e, t) {
                        var i = R(e);
                        if (t) {
                            var n = /<(\/?)(\b(?!!)[^>\s]*)(.*?)(\s*\/?>)/g;
                            i = i.replace(n, function(e, t, i) {
                                i = i.toUpperCase();
                                var n = /^DIV|^TD|^TH|^P|^LI|^H[1-7]/.test(i) && !!t,
                                    o = /^BLOCKQUOTE|^TABLE|^TBODY|^TR|^HR|^UL|^OL/.test(i);
                                return e + (n || o ? "\n" : "")
                            }), i = $.trim(i)
                        }
                        return i
                    },
                    value: R,
                    posFromPlaceholder: function(e) {
                        var t = $(e),
                            i = t.offset(),
                            n = t.outerHeight(!0);
                        return {
                            left: i.left,
                            top: i.top + n
                        }
                    },
                    attachEvents: function(e, t) {
                        Object.keys(t).forEach(function(i) {
                            e.on(i, t[i])
                        })
                    },
                    detachEvents: function(e, t) {
                        Object.keys(t).forEach(function(i) {
                            e.off(i, t[i])
                        })
                    }
                }
            }(),
            Context = function(e, t) {
                var i = this,
                    n = $.summernote.ui;
                return this.memos = {}, this.modules = {}, this.layoutInfo = {}, this.options = t, this.initialize = function() {
                    return this.layoutInfo = n.createLayout(e, t), this._initialize(), e.hide(), this
                }, this.destroy = function() {
                    this._destroy(), e.removeData("summernote"), n.removeLayout(e, this.layoutInfo)
                }, this.reset = function() {
                    var e = i.isDisabled();
                    this.code(dom.emptyPara), this._destroy(), this._initialize(), e && i.disable()
                }, this._initialize = function() {
                    var e = $.extend({}, this.options.buttons);
                    Object.keys(e).forEach(function(t) {
                        i.memo("button." + t, e[t])
                    });
                    var t = $.extend({}, this.options.modules, $.summernote.plugins || {});
                    Object.keys(t).forEach(function(e) {
                        i.module(e, t[e], !0)
                    }), Object.keys(this.modules).forEach(function(e) {
                        i.initializeModule(e)
                    })
                }, this._destroy = function() {
                    Object.keys(this.modules).reverse().forEach(function(e) {
                        i.removeModule(e)
                    }), Object.keys(this.memos).forEach(function(e) {
                        i.removeMemo(e)
                    })
                }, this.code = function(t) {
                    var i = this.invoke("codeview.isActivated");
                    if (void 0 === t) return this.invoke("codeview.sync"), i ? this.layoutInfo.codable.val() : this.layoutInfo.editable.html();
                    i ? this.layoutInfo.codable.val(t) : this.layoutInfo.editable.html(t), e.val(t), this.triggerEvent("change", t)
                }, this.isDisabled = function() {
                    return "false" === this.layoutInfo.editable.attr("contenteditable")
                }, this.enable = function() {
                    this.layoutInfo.editable.attr("contenteditable", !0), this.invoke("toolbar.activate", !0)
                }, this.disable = function() {
                    this.invoke("codeview.isActivated") && this.invoke("codeview.deactivate"), this.layoutInfo.editable.attr("contenteditable", !1), this.invoke("toolbar.deactivate", !0)
                }, this.triggerEvent = function() {
                    var t = list.head(arguments),
                        i = list.tail(list.from(arguments)),
                        n = this.options.callbacks[func.namespaceToCamel(t, "on")];
                    n && n.apply(e[0], i), e.trigger("summernote." + t, i)
                }, this.initializeModule = function(t) {
                    var i = this.modules[t];
                    i.shouldInitialize = i.shouldInitialize || func.ok, i.shouldInitialize() && (i.initialize && i.initialize(), i.events && dom.attachEvents(e, i.events))
                }, this.module = function(e, t, i) {
                    if (1 === arguments.length) return this.modules[e];
                    this.modules[e] = new t(this), i || this.initializeModule(e)
                }, this.removeModule = function(t) {
                    var i = this.modules[t];
                    i.shouldInitialize() && (i.events && dom.detachEvents(e, i.events), i.destroy && i.destroy()), delete this.modules[t]
                }, this.memo = function(e, t) {
                    if (1 === arguments.length) return this.memos[e];
                    this.memos[e] = t
                }, this.removeMemo = function(e) {
                    this.memos[e] && this.memos[e].destroy && this.memos[e].destroy(), delete this.memos[e]
                }, this.createInvokeHandler = function(e, t) {
                    return function(n) {
                        n.preventDefault(), i.invoke(e, t || $(n.target).closest("[data-value]").data("value"))
                    }
                }, this.invoke = function() {
                    var e = list.head(arguments),
                        t = list.tail(list.from(arguments)),
                        i = e.split("."),
                        n = i.length > 1,
                        o = n && list.head(i),
                        a = n ? list.last(i) : list.head(i),
                        s = this.modules[o || "editor"];
                    return !o && this[a] ? this[a].apply(this, t) : s && s[a] && s.shouldInitialize() ? s[a].apply(s, t) : void 0
                }, this.initialize()
            };
        $.fn.extend({
            summernote: function() {
                var e = $.type(list.head(arguments)),
                    t = "string" === e,
                    i = "object" === e ? list.head(arguments) : {};
                (i = $.extend({}, $.summernote.options, i)).langInfo = $.extend(!0, {}, $.summernote.lang["en-US"], $.summernote.lang[i.lang]), i.icons = $.extend(!0, {}, $.summernote.options.icons, i.icons), this.each(function(e, t) {
                    var n = $(t);
                    if (!n.data("summernote")) {
                        var o = new Context(n, i);
                        n.data("summernote", o), n.data("summernote").triggerEvent("init", o.layoutInfo)
                    }
                });
                var n = this.first();
                if (n.length) {
                    var o = n.data("summernote");
                    if (t) return o.invoke.apply(o, list.from(arguments));
                    i.focus && o.invoke("editor.focus")
                }
                return this
            }
        });
        var Renderer = function(e, t, i, n) {
                this.render = function(o) {
                    var a = $(e);
                    if (i && i.contents && a.html(i.contents), i && i.className && a.addClass(i.className), i && i.data && $.each(i.data, function(e, t) {
                            a.attr("data-" + e, t)
                        }), i && i.click && a.on("click", i.click), t) {
                        var s = a.find(".note-children-container");
                        t.forEach(function(e) {
                            e.render(s.length ? s : a)
                        })
                    }
                    return n && n(a, i), i && i.callback && i.callback(a), o && o.append(a), a
                }
            },
            renderer = {
                create: function(e, t) {
                    return function() {
                        var i = $.isArray(arguments[0]) ? arguments[0] : [],
                            n = "object" == typeof arguments[1] ? arguments[1] : arguments[0];
                        return n && n.children && (i = n.children), new Renderer(e, i, n, t)
                    }
                }
            },
            editor = renderer.create('<div class="note-editor note-frame panel panel-default"/>'),
            toolbar = renderer.create('<div class="note-toolbar panel-heading"/>'),
            editingArea = renderer.create('<div class="note-editing-area"/>'),
            codable = renderer.create('<textarea class="note-codable"/>'),
            editable = renderer.create('<div class="note-editable panel-body" contentEditable="true"/>'),
            statusbar = renderer.create(['<div class="note-statusbar">', '  <div class="note-resizebar">', '    <div class="note-icon-bar"/>', '    <div class="note-icon-bar"/>', '    <div class="note-icon-bar"/>', "  </div>", "</div>"].join("")),
            airEditor = renderer.create('<div class="note-editor"/>'),
            airEditable = renderer.create('<div class="note-editable" contentEditable="true"/>'),
            buttonGroup = renderer.create('<div class="note-btn-group btn-group">'),
            button = renderer.create('<button type="button" class="note-btn btn btn-default btn-sm22">', function(e, t) {
                t && t.tooltip && e.attr({
                    title: t.tooltip
                })
            }),
            dropdown = renderer.create('<div class="dropdown-menu">', function(e, t) {
                var i = $.isArray(t.items) ? t.items.map(function(e) {
                    return '<li><a href="#" data-value="' + ("string" == typeof e ? e : e.value || "") + '">' + (t.template ? t.template(e) : e) + "</a></li>"
                }).join("") : t.items;
                e.html(i)
            }),
            dropdown2 = renderer.create('<div class="dropdown-menu ">', function(e, t) {
                $.isArray(t.items) ? t.items.map(function(e) {
                    return '<li><a href="#" data-value="' + ("string" == typeof e ? e : e.value || "") + '">' + (t.template ? t.template(e) : e) + "</a></li>"
                }).join("") : t.items;
                e.html('<a href="#">123</a>')
            }),
            dropdown_search = renderer.create('<select class="selectpicker" data-live-search="true">', function(e, t) {
                var i = $.isArray(t.items) ? t.items.map(function(e) {
                    return '<option data-value="' + ("string" == typeof e ? e : e.value || "") + '">' + (t.template ? t.template(e) : e) + "</option>"
                }).join("") : t.items;
                e.html(i)
            }),
            dropdownCheck = renderer.create('<div class="dropdown-menu note-check">', function(e, t) {
                var i = $.isArray(t.items) ? t.items.map(function(e) {
                    var i = "string" == typeof e ? e : e.value || "",
                        n = t.template ? t.template(e) : e;
                    return '<li><a href="#" data-value="' + i + '">' + icon(t.checkClassName) + " " + n + "</a></li>"
                }).join("") : t.items;
                e.html(i)
            }),
            palette = renderer.create('<div class="note-color-palette"/>', function(e, t) {
                for (var i = [], n = 0, o = t.colors.length; n < o; n++) {
                    for (var a = t.eventName, s = t.colors[n], r = [], l = 0, c = s.length; l < c; l++) {
                        var d = s[l];
                        r.push(['<button type="button" class="note-color-btn"', 'style="background-color:', d, '" ', 'data-event="', a, '" ', 'data-value="', d, '" ', 'title="', d, '" ', 'data-toggle="button" tabindex="-1"></button>'].join(""))
                    }
                    i.push('<div class="note-color-row">' + r.join("") + "</div>")
                }
                e.html(i.join("")), e.find(".note-color-btn").tooltip({
                    container: "body",
                    trigger: "hover",
                    placement: "bottom"
                })
            }),
            dialog = renderer.create('<div class="modal" aria-hidden="false" tabindex="-1"/>', function(e, t) {
                t.fade && e.addClass("fade"), e.html(['<div class="modal-dialog">', '  <div class="modal-content">', t.title ? '    <div class="modal-header">      <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>      <h4 class="modal-title">' + t.title + "</h4>    </div>" : "", '    <div class="modal-body">' + t.body + "</div>", t.footer ? '    <div class="modal-footer">' + t.footer + "</div>" : "", "  </div>", "</div>"].join(""))
            }),
            popover = renderer.create(['<div class="note-popover popover in">', '  <div class="arrow pix_arrow"/>', '  <div class="popover-content note-children-container"/>', "</div>"].join(""), function(e, t) {
                var i = void 0 !== t.direction ? t.direction : "bottom";
                e.addClass(i), t.hideArrow && e.find(".arrow").hide()
            }),
            icon = function(e, t) {
                return "<" + (t = t || "i") + ' class="' + e + '"/>'
            },
            ui = {
                editor: editor,
                toolbar: toolbar,
                editingArea: editingArea,
                codable: codable,
                editable: editable,
                statusbar: statusbar,
                airEditor: airEditor,
                airEditable: airEditable,
                buttonGroup: buttonGroup,
                button: button,
                dropdown: dropdown,
                dropdown2: dropdown2,
                dropdown_search: dropdown_search,
                dropdownCheck: dropdownCheck,
                palette: palette,
                dialog: dialog,
                popover: popover,
                icon: icon,
                toggleBtn: function(e, t) {
                    e.toggleClass("disabled", !t), e.attr("disabled", !t)
                },
                toggleBtnActive: function(e, t) {
                    e.toggleClass("active", t)
                },
                onDialogShown: function(e, t) {
                    e.one("shown.bs.modal", t)
                },
                onDialogHidden: function(e, t) {
                    e.one("hidden.bs.modal", t)
                },
                showDialog: function(e) {
                    e.modal("show"), e.css("z-index", "999999999999")
                },
                hideDialog: function(e) {
                    e.modal("hide")
                },
                createLayout: function(e, t) {
                    var i = (t.airMode ? ui.airEditor([ui.editingArea([ui.airEditable()])]) : ui.editor([ui.toolbar(), ui.editingArea([ui.codable(), ui.editable()]), ui.statusbar()])).render();
                    return i.insertAfter(e), {
                        note: e,
                        editor: i,
                        toolbar: i.find(".note-toolbar"),
                        editingArea: i.find(".note-editing-area"),
                        editable: i.find(".note-editable"),
                        codable: i.find(".note-codable"),
                        statusbar: i.find(".note-statusbar")
                    }
                },
                removeLayout: function(e, t) {
                    e.html(t.editable.html()), t.editor.remove(), e.show()
                }
            };
        $.summernote = $.summernote || {
            lang: {}
        }, $.extend($.summernote.lang, {
            "en-US": {
                font: {
                    bold: "Bold",
                    italic: "Italic",
                    underline: "Underline",
                    clear: "Remove Font Style",
                    height: "Line Height",
                    name: "Font Family",
                    strikethrough: "Strikethrough",
                    subscript: "Subscript",
                    superscript: "Superscript",
                    size: "Font Size"
                },
                image: {
                    image: "Picture",
                    insert: "Insert Image",
                    resizeFull: "Resize Full",
                    resizeHalf: "Resize Half",
                    resizeQuarter: "Resize Quarter",
                    floatLeft: "Float Left",
                    floatRight: "Float Right",
                    floatNone: "Float None",
                    shapeRounded: "Shape: Rounded",
                    shapeCircle: "Shape: Circle",
                    shapeThumbnail: "Shape: Thumbnail",
                    shapeNone: "Shape: None",
                    dragImageHere: "Drag image or text here",
                    dropImage: "Drop image or Text",
                    selectFromFiles: "Select from files",
                    maximumFileSize: "Maximum file size",
                    maximumFileSizeError: "Maximum file size exceeded.",
                    url: "Image URL",
                    remove: "Remove Image"
                },
                video: {
                    video: "Video",
                    videoLink: "Video Link",
                    insert: "Insert Video",
                    url: "Video URL?",
                    providers: "(YouTube, Vimeo, Vine, Instagram, DailyMotion or Youku)"
                },
                link: {
                    link: "Link",
                    insert: "Insert Link",
                    unlink: "Unlink",
                    edit: "Edit",
                    textToDisplay: "Text to display",
                    url: "To what URL should this link go?",
                    openInNewWindow: "Open in new window"
                },
                table: {
                    table: "Table"
                },
                hr: {
                    insert: "Insert Horizontal Rule"
                },
                style: {
                    style: "Style",
                    normal: "Normal",
                    blockquote: "Quote",
                    pre: "Code",
                    h1: "Header 1",
                    h2: "Header 2",
                    h3: "Header 3",
                    h4: "Header 4",
                    h5: "Header 5",
                    h6: "Header 6"
                },
                lists: {
                    unordered: "Unordered list",
                    ordered: "Ordered list"
                },
                options: {
                    help: "Help",
                    fullscreen: "Full Screen",
                    codeview: "Code View"
                },
                paragraph: {
                    paragraph: "Paragraph",
                    outdent: "Outdent",
                    indent: "Indent",
                    left: "Align left",
                    center: "Align center",
                    right: "Align right",
                    justify: "Justify full"
                },
                color: {
                    recent: "Recent Color",
                    more: "More Color",
                    background: "Background Color",
                    foreground: "Foreground Color",
                    transparent: "Transparent",
                    setTransparent: "Set transparent",
                    reset: "Reset",
                    resetToDefault: "Reset to default"
                },
                shortcut: {
                    shortcuts: "Keyboard shortcuts",
                    close: "Close",
                    textFormatting: "Text formatting",
                    action: "Action",
                    paragraphFormatting: "Paragraph formatting",
                    documentStyle: "Document Style",
                    extraKeys: "Extra keys"
                },
                help: {
                    undo: "Undoes the last command",
                    redo: "Redoes the last command",
                    tab: "Tab",
                    untab: "Untab",
                    bold: "Set a bold style",
                    italic: "Set a italic style",
                    underline: "Set a underline style",
                    strikethrough: "Set a strikethrough style",
                    removeFormat: "Clean a style",
                    justifyLeft: "Set left align",
                    justifyCenter: "Set center align",
                    justifyRight: "Set right align",
                    justifyFull: "Set full align",
                    insertUnorderedList: "Toggle unordered list",
                    insertOrderedList: "Toggle ordered list",
                    outdent: "Outdent on current paragraph",
                    indent: "Indent on current paragraph",
                    formatPara: "Change current block's format as a paragraph(P tag)",
                    formatH1: "Change current block's format as H1",
                    formatH2: "Change current block's format as H2",
                    formatH3: "Change current block's format as H3",
                    formatH4: "Change current block's format as H4",
                    formatH5: "Change current block's format as H5",
                    formatH6: "Change current block's format as H6",
                    insertHorizontalRule: "Insert horizontal rule",
                    "linkDialog.show": "Show Link Dialog"
                },
                history: {
                    undo: "Undo",
                    redo: "Redo"
                },
                specialChar: {
                    specialChar: "SPECIAL CHARACTERS",
                    select: "Select Special characters"
                }
            }
        });
        var key = function() {
                var e = {
                    BACKSPACE: 8,
                    TAB: 9,
                    ENTER: 13,
                    SPACE: 32,
                    LEFT: 37,
                    UP: 38,
                    RIGHT: 39,
                    DOWN: 40,
                    NUM0: 48,
                    NUM1: 49,
                    NUM2: 50,
                    NUM3: 51,
                    NUM4: 52,
                    NUM5: 53,
                    NUM6: 54,
                    NUM7: 55,
                    NUM8: 56,
                    B: 66,
                    E: 69,
                    I: 73,
                    J: 74,
                    K: 75,
                    L: 76,
                    R: 82,
                    S: 83,
                    U: 85,
                    V: 86,
                    Y: 89,
                    Z: 90,
                    SLASH: 191,
                    LEFTBRACKET: 219,
                    BACKSLASH: 220,
                    RIGHTBRACKET: 221
                };
                return {
                    isEdit: function(t) {
                        return list.contains([e.BACKSPACE, e.TAB, e.ENTER, e.SPACE], t)
                    },
                    isMove: function(t) {
                        return list.contains([e.LEFT, e.UP, e.RIGHT, e.DOWN], t)
                    },
                    nameFromCode: func.invertObject(e),
                    code: e
                }
            }(),
            range = function() {
                var e = function(e, t) {
                        var i, n, o = e.parentElement(),
                            a = document.body.createTextRange(),
                            s = list.from(o.childNodes);
                        for (i = 0; i < s.length; i++)
                            if (!dom.isText(s[i])) {
                                if (a.moveToElementText(s[i]), a.compareEndPoints("StartToStart", e) >= 0) break;
                                n = s[i]
                            }
                        if (0 !== i && dom.isText(s[i - 1])) {
                            var r = document.body.createTextRange(),
                                l = null;
                            r.moveToElementText(n || o), r.collapse(!n), l = n ? n.nextSibling : o.firstChild;
                            var c = e.duplicate();
                            c.setEndPoint("StartToStart", r);
                            for (var d = c.text.replace(/[\r\n]/g, "").length; d > l.nodeValue.length && l.nextSibling;) d -= l.nodeValue.length, l = l.nextSibling;
                            l.nodeValue;
                            t && l.nextSibling && dom.isText(l.nextSibling) && d === l.nodeValue.length && (d -= l.nodeValue.length, l = l.nextSibling), o = l, i = d
                        }
                        return {
                            cont: o,
                            offset: i
                        }
                    },
                    t = function(e) {
                        var t = function(e, i) {
                                var n, o;
                                if (dom.isText(e)) {
                                    var a = dom.listPrev(e, func.not(dom.isText)),
                                        s = list.last(a).previousSibling;
                                    n = s || e.parentNode, i += list.sum(list.tail(a), dom.nodeLength), o = !s
                                } else {
                                    if (n = e.childNodes[i] || e, dom.isText(n)) return t(n, 0);
                                    i = 0, o = !1
                                }
                                return {
                                    node: n,
                                    collapseToStart: o,
                                    offset: i
                                }
                            },
                            i = document.body.createTextRange(),
                            n = t(e.node, e.offset);
                        return i.moveToElementText(n.node), i.collapse(n.collapseToStart), i.moveStart("character", n.offset), i
                    },
                    i = function(e, n, o, a) {
                        this.sc = e, this.so = n, this.ec = o, this.eo = a;
                        var s = function() {
                            if (agent.isW3CRangeSupport) {
                                var i = document.createRange();
                                return i.setStart(e, n), i.setEnd(o, a), i
                            }
                            var s = t({
                                node: e,
                                offset: n
                            });
                            return s.setEndPoint("EndToEnd", t({
                                node: o,
                                offset: a
                            })), s
                        };
                        this.getPoints = function() {
                            return {
                                sc: e,
                                so: n,
                                ec: o,
                                eo: a
                            }
                        }, this.getStartPoint = function() {
                            return {
                                node: e,
                                offset: n
                            }
                        }, this.getEndPoint = function() {
                            return {
                                node: o,
                                offset: a
                            }
                        }, this.select = function() {
                            var e = s();
                            if (agent.isW3CRangeSupport) {
                                var t = document.getSelection();
                                t.rangeCount > 0 && t.removeAllRanges(), t.addRange(e)
                            } else e.select();
                            return this
                        }, this.scrollIntoView = function(e) {
                            var t = $(e).height();
                            return e.scrollTop + t < this.sc.offsetTop && (e.scrollTop += Math.abs(e.scrollTop + t - this.sc.offsetTop)), this
                        }, this.normalize = function() {
                            var e = function(e, t) {
                                    if (dom.isVisiblePoint(e) && !dom.isEdgePoint(e) || dom.isVisiblePoint(e) && dom.isRightEdgePoint(e) && !t || dom.isVisiblePoint(e) && dom.isLeftEdgePoint(e) && t || dom.isVisiblePoint(e) && dom.isBlock(e.node) && dom.isEmpty(e.node)) return e;
                                    var i = dom.ancestor(e.node, dom.isBlock);
                                    if ((dom.isLeftEdgePointOf(e, i) || dom.isVoid(dom.prevPoint(e).node)) && !t || (dom.isRightEdgePointOf(e, i) || dom.isVoid(dom.nextPoint(e).node)) && t) {
                                        if (dom.isVisiblePoint(e)) return e;
                                        t = !t
                                    }
                                    return (t ? dom.nextPointUntil(dom.nextPoint(e), dom.isVisiblePoint) : dom.prevPointUntil(dom.prevPoint(e), dom.isVisiblePoint)) || e
                                },
                                t = e(this.getEndPoint(), !1),
                                n = this.isCollapsed() ? t : e(this.getStartPoint(), !0);
                            return new i(n.node, n.offset, t.node, t.offset)
                        }, this.nodes = function(e, t) {
                            e = e || func.ok;
                            var i = t && t.includeAncestor,
                                n = t && t.fullyContains,
                                o = this.getStartPoint(),
                                a = this.getEndPoint(),
                                s = [],
                                r = [];
                            return dom.walkPoint(o, a, function(t) {
                                if (!dom.isEditable(t.node)) {
                                    var o;
                                    n ? (dom.isLeftEdgePoint(t) && r.push(t.node), dom.isRightEdgePoint(t) && list.contains(r, t.node) && (o = t.node)) : o = i ? dom.ancestor(t.node, e) : t.node, o && e(o) && s.push(o)
                                }
                            }, !0), list.unique(s)
                        }, this.commonAncestor = function() {
                            return dom.commonAncestor(e, o)
                        }, this.expand = function(t) {
                            var s = dom.ancestor(e, t),
                                r = dom.ancestor(o, t);
                            if (!s && !r) return new i(e, n, o, a);
                            var l = this.getPoints();
                            return s && (l.sc = s, l.so = 0), r && (l.ec = r, l.eo = dom.nodeLength(r)), new i(l.sc, l.so, l.ec, l.eo)
                        }, this.collapse = function(t) {
                            return t ? new i(e, n, e, n) : new i(o, a, o, a)
                        }, this.splitText = function() {
                            var t = e === o,
                                s = this.getPoints();
                            return dom.isText(o) && !dom.isEdgePoint(this.getEndPoint()) && o.splitText(a), dom.isText(e) && !dom.isEdgePoint(this.getStartPoint()) && (s.sc = e.splitText(n), s.so = 0, t && (s.ec = s.sc, s.eo = a - n)), new i(s.sc, s.so, s.ec, s.eo)
                        }, this.deleteContents = function() {
                            if (this.isCollapsed()) return this;
                            var e = this.splitText(),
                                t = e.nodes(null, {
                                    fullyContains: !0
                                }),
                                n = dom.prevPointUntil(e.getStartPoint(), function(e) {
                                    return !list.contains(t, e.node)
                                }),
                                o = [];
                            return $.each(t, function(e, t) {
                                var i = t.parentNode;
                                n.node !== i && 1 === dom.nodeLength(i) && o.push(i), dom.remove(t, !1)
                            }), $.each(o, function(e, t) {
                                dom.remove(t, !1)
                            }), new i(n.node, n.offset, n.node, n.offset).normalize()
                        };
                        var r = function(t) {
                            return function() {
                                var i = dom.ancestor(e, t);
                                return !!i && i === dom.ancestor(o, t)
                            }
                        };
                        this.isOnEditable = r(dom.isEditable), this.isOnList = r(dom.isList), this.isOnAnchor = r(dom.isAnchor), this.isOnCell = r(dom.isCell), this.isLeftEdgeOf = function(e) {
                            if (!dom.isLeftEdgePoint(this.getStartPoint())) return !1;
                            var t = dom.ancestor(this.sc, e);
                            return t && dom.isLeftEdgeOf(this.sc, t)
                        }, this.isCollapsed = function() {
                            return e === o && n === a
                        }, this.wrapBodyInlineWithPara = function() {
                            if (dom.isBodyContainer(e) && dom.isEmpty(e)) return e.innerHTML = dom.emptyPara, new i(e.firstChild, 0, e.firstChild, 0);
                            var t = this.normalize();
                            if (dom.isParaInline(e) || dom.isPara(e)) return t;
                            var n;
                            if (dom.isInline(t.sc)) {
                                var o = dom.listAncestor(t.sc, func.not(dom.isInline));
                                n = list.last(o), dom.isInline(n) || (n = o[o.length - 2] || t.sc.childNodes[t.so])
                            } else n = t.sc.childNodes[t.so > 0 ? t.so - 1 : 0];
                            var a = dom.listPrev(n, dom.isParaInline).reverse();
                            if ((a = a.concat(dom.listNext(n.nextSibling, dom.isParaInline))).length) {
                                var s = dom.wrap(list.head(a), "p");
                                dom.appendChildNodes(s, list.tail(a))
                            }
                            return this.normalize()
                        }, this.insertNode = function(e) {
                            var t = this.wrapBodyInlineWithPara().deleteContents(),
                                i = dom.splitPoint(t.getStartPoint(), dom.isInline(e));
                            return i.rightNode ? i.rightNode.parentNode.insertBefore(e, i.rightNode) : i.container.appendChild(e), e
                        }, this.pasteHTML = function(e) {
                            var t = $("<div></div>").html(e)[0],
                                i = list.from(t.childNodes),
                                n = this.wrapBodyInlineWithPara().deleteContents();
                            return i.reverse().map(function(e) {
                                return n.insertNode(e)
                            }).reverse()
                        }, this.toString = function() {
                            var e = s();
                            return agent.isW3CRangeSupport ? e.toString() : e.text
                        }, this.getWordRange = function(e) {
                            var t = this.getEndPoint();
                            if (!dom.isCharPoint(t)) return this;
                            var n = dom.prevPointUntil(t, function(e) {
                                return !dom.isCharPoint(e)
                            });
                            return e && (t = dom.nextPointUntil(t, function(e) {
                                return !dom.isCharPoint(e)
                            })), new i(n.node, n.offset, t.node, t.offset)
                        }, this.bookmark = function(t) {
                            return {
                                s: {
                                    path: dom.makeOffsetPath(t, e),
                                    offset: n
                                },
                                e: {
                                    path: dom.makeOffsetPath(t, o),
                                    offset: a
                                }
                            }
                        }, this.paraBookmark = function(t) {
                            return {
                                s: {
                                    path: list.tail(dom.makeOffsetPath(list.head(t), e)),
                                    offset: n
                                },
                                e: {
                                    path: list.tail(dom.makeOffsetPath(list.last(t), o)),
                                    offset: a
                                }
                            }
                        }, this.getClientRects = function() {
                            return s().getClientRects()
                        }
                    };
                return {
                    create: function(e, t, n, o) {
                        if (4 === arguments.length) return new i(e, t, n, o);
                        if (2 === arguments.length) return n = e, o = t, new i(e, t, n, o);
                        var a = this.createFromSelection();
                        return a || 1 !== arguments.length ? a : (a = this.createFromNode(arguments[0])).collapse(dom.emptyPara === arguments[0].innerHTML)
                    },
                    createFromSelection: function() {
                        var t, n, o, a;
                        if (agent.isW3CRangeSupport) {
                            var s = document.getSelection();
                            if (!s || 0 === s.rangeCount) return null;
                            if (dom.isBody(s.anchorNode)) return null;
                            var r = s.getRangeAt(0);
                            t = r.startContainer, n = r.startOffset, o = r.endContainer, a = r.endOffset
                        } else {
                            var l = document.selection.createRange(),
                                c = l.duplicate();
                            c.collapse(!1);
                            var d = l;
                            d.collapse(!0);
                            var u = e(d, !0),
                                p = e(c, !1);
                            dom.isText(u.node) && dom.isLeftEdgePoint(u) && dom.isTextNode(p.node) && dom.isRightEdgePoint(p) && p.node.nextSibling === u.node && (u = p), t = u.cont, n = u.offset, o = p.cont, a = p.offset
                        }
                        return new i(t, n, o, a)
                    },
                    createFromNode: function(e) {
                        var t = e,
                            i = 0,
                            n = e,
                            o = dom.nodeLength(n);
                        return dom.isVoid(t) && (i = dom.listPrev(t).length - 1, t = t.parentNode), dom.isBR(n) ? (o = dom.listPrev(n).length - 1, n = n.parentNode) : dom.isVoid(n) && (o = dom.listPrev(n).length, n = n.parentNode), this.create(t, i, n, o)
                    },
                    createFromNodeBefore: function(e) {
                        return this.createFromNode(e).collapse(!0)
                    },
                    createFromNodeAfter: function(e) {
                        return this.createFromNode(e).collapse()
                    },
                    createFromBookmark: function(e, t) {
                        var n = dom.fromOffsetPath(e, t.s.path),
                            o = t.s.offset,
                            a = dom.fromOffsetPath(e, t.e.path),
                            s = t.e.offset;
                        return new i(n, o, a, s)
                    },
                    createFromParaBookmark: function(e, t) {
                        var n = e.s.offset,
                            o = e.e.offset,
                            a = dom.fromOffsetPath(list.head(t), e.s.path),
                            s = dom.fromOffsetPath(list.last(t), e.e.path);
                        return new i(a, n, s, o)
                    }
                }
            }(),
            async = {
                readFileAsDataURL: function(e) {
                    return $.Deferred(function(t) {
                        $.extend(new FileReader, {
                            onload: function(e) {
                                var i = e.target.result;
                                t.resolve(i)
                            },
                            onerror: function() {
                                t.reject(this)
                            }
                        }).readAsDataURL(e)
                    }).promise()
                },
                createImage: function(e) {
                    return $.Deferred(function(t) {
                        var i = $("<img>");
                        i.one("load", function() {
                            i.off("error abort"), t.resolve(i)
                        }).one("error abort", function() {
                            i.off("load").detach(), t.reject(i)
                        }).css({
                            display: "none"
                        }).appendTo(document.body).attr("src", e)
                    }).promise()
                }
            },
            History = function(e) {
                var t = [],
                    i = -1,
                    n = e[0],
                    o = function(t) {
                        null !== t.contents && e.html(t.contents), null !== t.bookmark && range.createFromBookmark(n, t.bookmark).select()
                    };
                this.rewind = function() {
                    e.html() !== t[i].contents && this.recordUndo(), o(t[i = 0])
                }, this.reset = function() {
                    t = [], i = -1, e.html(""), this.recordUndo()
                }, this.undo = function() {
                    e.html() !== t[i].contents && this.recordUndo(), 0 < i && o(t[--i])
                }, this.redo = function() {
                    t.length - 1 > i && o(t[++i])
                }, this.recordUndo = function() {
                    i++, t.length > i && (t = t.slice(0, i)), t.push(function() {
                        var t = range.create(n);
                        return {
                            contents: e.html(),
                            bookmark: t ? t.bookmark(n) : {
                                s: {
                                    path: [],
                                    offset: 0
                                },
                                e: {
                                    path: [],
                                    offset: 0
                                }
                            }
                        }
                    }())
                }
            },
            Style = function() {
                this.fromNode = function(e) {
                    var t = function(e, t) {
                        if (agent.jqueryVersion < 1.9) {
                            var i = {};
                            return $.each(t, function(t, n) {
                                i[n] = e.css(n)
                            }), i
                        }
                        return e.css.call(e, t)
                    }(e, ["font-family", "font-size", "text-align", "list-style-type", "line-height"]) || {};
                    return t["font-size"] = parseInt(t["font-size"], 10), t
                }, this.stylePara = function(e, t) {
                    $.each(e.nodes(dom.isPara, {
                        includeAncestor: !0
                    }), function(e, i) {
                        $(i).css(t)
                    })
                }, this.styleNodes = function(e, t) {
                    e = e.splitText();
                    var i = t && t.nodeName || "SPAN",
                        n = !(!t || !t.expandClosestSibling),
                        o = !(!t || !t.onlyPartialContains);
                    if (e.isCollapsed()) return [e.insertNode(dom.create(i))];
                    var a = dom.makePredByNodeName(i),
                        s = e.nodes(dom.isText, {
                            fullyContains: !0
                        }).map(function(e) {
                            return dom.singleChildAncestor(e, a) || dom.wrap(e, i)
                        });
                    if (n) {
                        if (o) {
                            var r = e.nodes();
                            a = func.and(a, function(e) {
                                return list.contains(r, e)
                            })
                        }
                        return s.map(function(e) {
                            var t = dom.withClosestSiblings(e, a),
                                i = list.head(t),
                                n = list.tail(t);
                            return $.each(n, function(e, t) {
                                dom.appendChildNodes(i, t.childNodes), dom.remove(t)
                            }), list.head(t)
                        })
                    }
                    return s
                }, this.current = function(e) {
                    var t = $(dom.isElement(e.sc) ? e.sc : e.sc.parentNode),
                        i = this.fromNode(t);
                    try {
                        i = $.extend(i, {
                            "font-bold": document.queryCommandState("bold") ? "bold" : "normal",
                            "font-italic": document.queryCommandState("italic") ? "italic" : "normal",
                            "font-underline": document.queryCommandState("underline") ? "underline" : "normal",
                            "font-subscript": document.queryCommandState("subscript") ? "subscript" : "normal",
                            "font-superscript": document.queryCommandState("superscript") ? "superscript" : "normal",
                            "font-strikethrough": document.queryCommandState("strikethrough") ? "strikethrough" : "normal"
                        })
                    } catch (e) {}
                    if (e.isOnList()) {
                        var n = ["circle", "disc", "disc-leading-zero", "square"],
                            o = $.inArray(i["list-style-type"], n) > -1;
                        i["list-style"] = o ? "unordered" : "ordered"
                    } else i["list-style"] = "none";
                    var a = dom.ancestor(e.sc, dom.isPara);
                    if (a && a.style["line-height"]) i["line-height"] = a.style.lineHeight;
                    else {
                        var s = parseInt(i["line-height"], 10) / parseInt(i["font-size"], 10);
                        i["line-height"] = s.toFixed(1)
                    }
                    return i.anchor = e.isOnAnchor() && dom.ancestor(e.sc, dom.isAnchor), i.ancestors = dom.listAncestor(e.sc, dom.isEditable), i.range = e, i
                }
            },
            Bullet = function() {
                var e = this;
                this.insertOrderedList = function(e) {
                    this.toggleList("OL", e)
                }, this.insertUnorderedList = function(e) {
                    this.toggleList("UL", e)
                }, this.indent = function(e) {
                    var t = this,
                        i = range.create(e).wrapBodyInlineWithPara(),
                        n = i.nodes(dom.isPara, {
                            includeAncestor: !0
                        }),
                        o = list.clusterBy(n, func.peq2("parentNode"));
                    $.each(o, function(e, i) {
                        var n = list.head(i);
                        dom.isLi(n) ? t.wrapList(i, n.parentNode.nodeName) : $.each(i, function(e, t) {
                            $(t).css("marginLeft", function(e, t) {
                                return (parseInt(t, 10) || 0) + 25
                            })
                        })
                    }), i.select()
                }, this.outdent = function(e) {
                    var t = this,
                        i = range.create(e).wrapBodyInlineWithPara(),
                        n = i.nodes(dom.isPara, {
                            includeAncestor: !0
                        }),
                        o = list.clusterBy(n, func.peq2("parentNode"));
                    $.each(o, function(e, i) {
                        var n = list.head(i);
                        dom.isLi(n) ? t.releaseList([i]) : $.each(i, function(e, t) {
                            $(t).css("marginLeft", function(e, t) {
                                return (t = parseInt(t, 10) || 0) > 25 ? t - 25 : ""
                            })
                        })
                    }), i.select()
                }, this.toggleList = function(t, i) {
                    var n = range.create(i).wrapBodyInlineWithPara(),
                        o = n.nodes(dom.isPara, {
                            includeAncestor: !0
                        }),
                        a = n.paraBookmark(o),
                        s = list.clusterBy(o, func.peq2("parentNode"));
                    if (list.find(o, dom.isPurePara)) {
                        var r = [];
                        $.each(s, function(i, n) {
                            r = r.concat(e.wrapList(n, t))
                        }), o = r
                    } else {
                        var l = n.nodes(dom.isList, {
                            includeAncestor: !0
                        }).filter(function(e) {
                            return !$.nodeName(e, t)
                        });
                        l.length ? $.each(l, function(e, i) {
                            dom.replace(i, t)
                        }) : o = this.releaseList(s, !0)
                    }
                    range.createFromParaBookmark(a, o).select()
                }, this.wrapList = function(e, t) {
                    var i = list.head(e),
                        n = list.last(e),
                        o = dom.isList(i.previousSibling) && i.previousSibling,
                        a = dom.isList(n.nextSibling) && n.nextSibling,
                        s = o || dom.insertAfter(dom.create(t || "UL"), n);
                    return e = e.map(function(e) {
                        return dom.isPurePara(e) ? dom.replace(e, "LI") : e
                    }), dom.appendChildNodes(s, e), a && (dom.appendChildNodes(s, list.from(a.childNodes)), dom.remove(a)), e
                }, this.releaseList = function(e, t) {
                    var i = [];
                    return $.each(e, function(e, n) {
                        var o = list.head(n),
                            a = list.last(n),
                            s = t ? dom.lastAncestor(o, dom.isList) : o.parentNode,
                            r = s.childNodes.length > 1 ? dom.splitTree(s, {
                                node: a.parentNode,
                                offset: dom.position(a) + 1
                            }, {
                                isSkipPaddingBlankHTML: !0
                            }) : null,
                            l = dom.splitTree(s, {
                                node: o.parentNode,
                                offset: dom.position(o)
                            }, {
                                isSkipPaddingBlankHTML: !0
                            });
                        n = t ? dom.listDescendant(l, dom.isLi) : list.from(l.childNodes).filter(dom.isLi), !t && dom.isList(s.parentNode) || (n = n.map(function(e) {
                            return dom.replace(e, "P")
                        })), $.each(list.from(n).reverse(), function(e, t) {
                            dom.insertAfter(t, s)
                        });
                        var c = list.compact([s, l, r]);
                        $.each(c, function(e, t) {
                            var i = [t].concat(dom.listDescendant(t, dom.isList));
                            $.each(i.reverse(), function(e, t) {
                                dom.nodeLength(t) || dom.remove(t, !0)
                            })
                        }), i = i.concat(n)
                    }), i
                }
            },
            Typing = function() {
                var e = new Bullet;
                this.insertTab = function(e, t) {
                    var i = dom.createText(new Array(t + 1).join(dom.NBSP_CHAR));
                    (e = e.deleteContents()).insertNode(i, !0), (e = range.create(i, t)).select()
                }, this.insertParagraph = function(t) {
                    var i = range.create(t);
                    i = (i = i.deleteContents()).wrapBodyInlineWithPara();
                    var n, o = dom.ancestor(i.sc, dom.isPara);
                    if (o) {
                        if (dom.isEmpty(o) && dom.isLi(o)) return void e.toggleList(o.parentNode.nodeName);
                        if (dom.isEmpty(o) && dom.isPara(o) && dom.isBlockquote(o.parentNode)) dom.insertAfter(o, o.parentNode), n = o;
                        else {
                            n = dom.splitTree(o, i.getStartPoint());
                            var a = dom.listDescendant(o, dom.isEmptyAnchor);
                            a = a.concat(dom.listDescendant(n, dom.isEmptyAnchor)), $.each(a, function(e, t) {
                                dom.remove(t)
                            }), (dom.isHeading(n) || dom.isPre(n)) && dom.isEmpty(n) && (n = dom.replace(n, "p"))
                        }
                    } else {
                        var s = i.sc.childNodes[i.so];
                        n = $(dom.emptyPara)[0], s ? i.sc.insertBefore(n, s) : i.sc.appendChild(n)
                    }
                    range.create(n, 0).normalize().select().scrollIntoView(t)
                }
            },
            Table = function() {
                this.tab = function(e, t) {
                    var i = dom.ancestor(e.commonAncestor(), dom.isCell),
                        n = dom.ancestor(i, dom.isTable),
                        o = dom.listDescendant(n, dom.isCell),
                        a = list[t ? "prev" : "next"](o, i);
                    a && range.create(a, 0).select()
                }, this.createTable = function(e, t, i) {
                    for (var n, o = [], a = 0; a < e; a++) o.push("<td>" + dom.blank + "</td>");
                    n = o.join("");
                    for (var s, r = [], l = 0; l < t; l++) r.push("<tr>" + n + "</tr>");
                    s = r.join("");
                    var c = $("<table>" + s + "</table>");
                    return i && i.tableClassName && c.addClass(i.tableClassName), c[0]
                }
            },
            KEY_BOGUS = "bogus",
            Editor = function(e) {
                var t = this,
                    i = e.layoutInfo.note,
                    n = e.layoutInfo.editor,
                    o = e.layoutInfo.editable,
                    a = e.options,
                    s = a.langInfo,
                    r = o[0],
                    l = null,
                    c = new Style,
                    d = new Table,
                    u = new Typing,
                    p = new Bullet,
                    h = new History(o);
                this.initialize = function() {
                    o.on("keydown", function(i) {
                        i.keyCode === key.code.ENTER && (console.log(e), e.triggerEvent("enter", i)), e.triggerEvent("keydown", i), i.isDefaultPrevented() || (a.shortcuts ? t.handleKeyMap(i) : t.preventDefaultEditableShortCuts(i))
                    }).on("keyup", function(t) {
                        e.triggerEvent("keyup", t)
                    }).on("focus", function(t) {
                        e.triggerEvent("focus", t)
                    }).on("blur", function(t) {
                        e.triggerEvent("blur", t)
                    }).on("mousedown", function(t) {
                        e.triggerEvent("mousedown", t)
                    }).on("mouseup", function(t) {
                        e.triggerEvent("mouseup", t)
                    }).on("scroll", function(t) {
                        e.triggerEvent("scroll", t)
                    }).on("paste", function(t) {
                        e.triggerEvent("paste", t)
                    }), o.html(dom.html(i) || dom.emptyPara);
                    var s = agent.isMSIE ? "DOMCharacterDataModified DOMSubtreeModified DOMNodeInserted" : "input";
                    o.on(s, function() {
                        e.triggerEvent("change", o.html())
                    }), n.on("focusin", function(t) {
                        e.triggerEvent("focusin", t)
                    }).on("focusout", function(t) {
                        e.triggerEvent("focusout", t)
                    }), a.airMode || (a.width && n.outerWidth(a.width), a.height && o.outerHeight(a.height), a.maxHeight && o.css("max-height", a.maxHeight), a.minHeight && o.css("min-height", a.minHeight)), h.recordUndo()
                }, this.destroy = function() {
                    o.off()
                }, this.handleKeyMap = function(t) {
                    var i = a.keyMap[agent.isMac ? "mac" : "pc"],
                        n = [];
                    t.metaKey && n.push("CMD"), t.ctrlKey && !t.altKey && n.push("CTRL"), t.shiftKey && n.push("SHIFT");
                    var o = key.nameFromCode[t.keyCode];
                    o && n.push(o);
                    var s = i[n.join("+")];
                    s ? (t.preventDefault(), e.invoke(s)) : key.isEdit(t.keyCode) && this.afterCommand()
                }, this.preventDefaultEditableShortCuts = function(e) {
                    (e.ctrlKey || e.metaKey) && list.contains([66, 73, 85], e.keyCode) && e.preventDefault()
                }, this.createRange = function() {
                    return this.focus(), range.create(r)
                }, this.saveRange = function(e) {
                    l = this.createRange(), e && l.collapse().select()
                }, this.restoreRange = function() {
                    l && (l.select(), this.focus())
                }, this.saveTarget = function(e) {
                    o.data("target", e)
                }, this.clearTarget = function() {
                    o.removeData("target")
                }, this.restoreTarget = function() {
                    return o.data("target")
                }, this.currentStyle = function() {
                    var e = range.create();
                    return e && (e = e.normalize()), e ? c.current(e) : c.fromNode(o)
                }, this.styleFromNode = function(e) {
                    return c.fromNode(e)
                }, this.undo = function() {
                    e.triggerEvent("before.command", o.html()), h.undo(), e.triggerEvent("change", o.html())
                }, e.memo("help.undo", s.help.undo), this.redo = function() {
                    e.triggerEvent("before.command", o.html()), h.redo(), e.triggerEvent("change", o.html())
                }, e.memo("help.redo", s.help.redo);
                for (var m = this.beforeCommand = function() {
                        e.triggerEvent("before.command", o.html()), t.focus()
                    }, f = this.afterCommand = function(t) {
                        h.recordUndo(), t || e.triggerEvent("change", o.html())
                    }, g = ["bold", "italic", "underline", "strikethrough", "superscript", "subscript", "justifyLeft", "justifyCenter", "justifyRight", "justifyFull", "formatBlock", "removeFormat", "backColor", "fontName"], _ = 0, v = g.length; _ < v; _++) this[g[_]] = function(e) {
                    return function(t) {
                        m(), document.execCommand("styleWithCSS", !1, !0), document.execCommand(e, !1, t), f(!0)
                    }
                }(g[_]), e.memo("help." + g[_], s.help[g[_]]);
                this.tab = function() {
                    var e = this.createRange();
                    e.isCollapsed() && e.isOnCell() ? d.tab(e) : (m(), u.insertTab(e, a.tabSize), f())
                }, e.memo("help.tab", s.help.tab), this.untab = function() {
                    var e = this.createRange();
                    e.isCollapsed() && e.isOnCell() && d.tab(e, !0)
                }, e.memo("help.untab", s.help.untab), this.wrapCommand = function(e) {
                    return function() {
                        m(), e.apply(t, arguments), f()
                    }
                }, this.insertParagraph = this.wrapCommand(function() {
                    u.insertParagraph(r)
                }), e.memo("help.insertParagraph", s.help.insertParagraph), this.insertOrderedList = this.wrapCommand(function() {
                    p.insertOrderedList(r)
                }), e.memo("help.insertOrderedList", s.help.insertOrderedList), this.insertUnorderedList = this.wrapCommand(function() {
                    p.insertUnorderedList(r)
                }), e.memo("help.insertUnorderedList", s.help.insertUnorderedList), this.indent = this.wrapCommand(function() {
                    p.indent(r)
                }), e.memo("help.indent", s.help.indent), this.outdent = this.wrapCommand(function() {
                    p.outdent(r)
                }), e.memo("help.outdent", s.help.outdent), this.insertImage = function(t, i) {
                    return async.createImage(t, i).then(function(e) {
                        m(), "function" == typeof i ? i(e) : ("string" == typeof i && e.attr("data-filename", i), e.css("width", Math.min(o.width(), e.width()))), e.show(), range.create(r).insertNode(e[0]), range.createFromNodeAfter(e[0]).select(), f()
                    }).fail(function(t) {
                        e.triggerEvent("image.upload.error", t)
                    })
                }, this.insertImages = function(i) {
                    $.each(i, function(i, n) {
                        var o = n.name;
                        a.maximumImageFileSize && a.maximumImageFileSize < n.size ? e.triggerEvent("image.upload.error", s.image.maximumFileSizeError) : async.readFileAsDataURL(n).then(function(e) {
                            return t.insertImage(e, o)
                        }).fail(function() {
                            e.triggerEvent("image.upload.error")
                        })
                    })
                }, this.insertImagesOrCallback = function(t) {
                    a.callbacks.onImageUpload ? e.triggerEvent("image.upload", t) : this.insertImages(t)
                }, this.insertNode = this.wrapCommand(function(e) {
                    this.createRange().insertNode(e), range.createFromNodeAfter(e).select()
                }), this.insertText = this.wrapCommand(function(e) {
                    var t = this.createRange().insertNode(dom.createText(e));
                    range.create(t, dom.nodeLength(t)).select()
                }), this.getSelectedText = function() {
                    var e = this.createRange();
                    return e.isOnAnchor() && (e = range.createFromNode(dom.ancestor(e.sc, dom.isAnchor))), e.toString()
                }, this.pasteHTML = this.wrapCommand(function(e) {
                    var t = this.createRange().pasteHTML(e);
                    range.createFromNodeAfter(list.last(t)).select()
                }), this.formatBlock = this.wrapCommand(function(e) {
                    e = agent.isMSIE ? "<" + e + ">" : e, document.execCommand("FormatBlock", !1, e)
                }), this.formatPara = function() {
                    this.formatBlock("P")
                }, e.memo("help.formatPara", s.help.formatPara);
                for (_ = 1; _ <= 6; _++) this["formatH" + _] = function(e) {
                    return function() {
                        this.formatBlock("H" + e)
                    }
                }(_), e.memo("help.formatH" + _, s.help["formatH" + _]);
                this.fontSize = function(e) {
                    var t = this.createRange();
                    if (t && t.isCollapsed()) {
                        var i = c.styleNodes(t),
                            n = list.head(i);
                        $(i).css({
                            "font-size": e + "px"
                        }), n && !dom.nodeLength(n) && (n.innerHTML = dom.ZERO_WIDTH_NBSP_CHAR, range.createFromNodeAfter(n.firstChild).select(), o.data(KEY_BOGUS, n))
                    } else m(), $(c.styleNodes(t)).css({
                        "font-size": e + "px"
                    }), f()
                }, this.insertHorizontalRule = this.wrapCommand(function() {
                    var e = this.createRange().insertNode(dom.create("HR"));
                    e.nextSibling && range.create(e.nextSibling, 0).normalize().select()
                }), e.memo("help.insertHorizontalRule", s.help.insertHorizontalRule), this.removeBogus = function() {
                    var e = o.data(KEY_BOGUS);
                    if (e) {
                        var t = list.find(list.from(e.childNodes), dom.isText),
                            i = t.nodeValue.indexOf(dom.ZERO_WIDTH_NBSP_CHAR); - 1 !== i && t.deleteData(i, 1), dom.isEmpty(e) && dom.remove(e), o.removeData(KEY_BOGUS)
                    }
                }, this.lineHeight = this.wrapCommand(function(e) {
                    c.stylePara(this.createRange(), {
                        lineHeight: e
                    })
                }), this.unlink = function() {
                    var e = this.createRange();
                    if (e.isOnAnchor()) {
                        var t = dom.ancestor(e.sc, dom.isAnchor);
                        (e = range.createFromNode(t)).select(), m(), document.execCommand("unlink"), f()
                    }
                }, this.createLink = this.wrapCommand(function(e) {
                    var t = e.url,
                        i = e.text,
                        n = e.isNewWindow,
                        o = e.range || this.createRange(),
                        s = o.toString() !== i;
                    a.onCreateLink && (t = a.onCreateLink(t));
                    var r = [];
                    if (s) {
                        var l = (o = o.deleteContents()).insertNode($("<A>" + i + "</A>")[0]);
                        r.push(l)
                    } else r = c.styleNodes(o, {
                        nodeName: "A",
                        expandClosestSibling: !0,
                        onlyPartialContains: !0
                    });
                    $.each(r, function(e, i) {
                        $(i).attr("href", t), n ? $(i).attr("target", "_blank") : $(i).removeAttr("target")
                    });
                    var d = range.createFromNodeBefore(list.head(r)).getStartPoint(),
                        u = range.createFromNodeAfter(list.last(r)).getEndPoint();
                    range.create(d.node, d.offset, u.node, u.offset).select()
                }), this.getLinkInfo = function() {
                    var e = this.createRange().expand(dom.isAnchor),
                        t = $(list.head(e.nodes(dom.isAnchor)));
                    return {
                        range: e,
                        text: e.toString(),
                        isNewWindow: !!t.length && "_blank" === t.attr("target"),
                        url: t.length ? t.attr("href") : ""
                    }
                }, this.color = this.wrapCommand(function(e) {
                    var t = e.foreColor,
                        i = e.backColor;
                    t && document.execCommand("foreColor", !1, t), i && document.execCommand("backColor", !1, i)
                }), this.foreColor = this.wrapCommand(function(e) {
                    document.execCommand("styleWithCSS", !1, !0), document.execCommand("foreColor", !1, e)
                }), this.insertTable = this.wrapCommand(function(e) {
                    var t = e.split("x");
                    this.createRange().deleteContents().insertNode(d.createTable(t[0], t[1], a))
                }), this.floatMe = this.wrapCommand(function(e) {
                    $(this.restoreTarget()).css("float", e)
                }), this.resize = this.wrapCommand(function(e) {
                    $(this.restoreTarget()).css({
                        width: 100 * e + "%",
                        height: ""
                    })
                }), this.resizeTo = function(e, t, i) {
                    var n;
                    if (i) {
                        var o = e.y / e.x,
                            a = t.data("ratio");
                        n = {
                            width: a > o ? e.x : e.y / a,
                            height: a > o ? e.x * a : e.y
                        }
                    } else n = {
                        width: e.x,
                        height: e.y
                    };
                    t.css(n)
                }, this.removeMedia = this.wrapCommand(function() {
                    var t = $(this.restoreTarget()).detach();
                    e.triggerEvent("media.delete", t, o)
                }), this.hasFocus = function() {
                    return o.is(":focus")
                }, this.focus = function() {
                    this.hasFocus() || o.focus()
                }, this.isEmpty = function() {
                    return dom.isEmpty(o[0]) || dom.emptyPara === o.html()
                }, this.empty = function() {
                    e.invoke("code", dom.emptyPara)
                }
            },
            Clipboard = function(e) {
                var t = this,
                    i = e.layoutInfo.editable;
                this.events = {
                    "summernote.keydown": function(i, n) {
                        t.needKeydownHook() && (n.ctrlKey || n.metaKey) && n.keyCode === key.code.V && (e.invoke("editor.saveRange"), t.$paste.focus(), setTimeout(function() {
                            t.pasteByHook()
                        }, 0))
                    }
                }, this.needKeydownHook = function() {
                    return agent.isMSIE && agent.browserVersion > 10 || agent.isFF
                }, this.initialize = function() {
                    this.needKeydownHook() ? (this.$paste = $("<div />").attr("contenteditable", !0).css({
                        position: "absolute",
                        left: -1e5,
                        opacity: 0
                    }), i.before(this.$paste), this.$paste.on("paste", function(t) {
                        e.triggerEvent("paste", t)
                    })) : i.on("paste", this.pasteByEvent)
                }, this.destroy = function() {
                    this.needKeydownHook() && (this.$paste.remove(), this.$paste = null)
                }, this.pasteByHook = function() {
                    var t = this.$paste[0].firstChild;
                    if (dom.isImg(t)) {
                        for (var i = t.src, n = atob(i.split(",")[1]), o = new Uint8Array(n.length), a = 0; a < n.length; a++) o[a] = n.charCodeAt(a);
                        var s = new Blob([o], {
                            type: "image/png"
                        });
                        s.name = "clipboard.png", e.invoke("editor.restoreRange"), e.invoke("editor.focus"), e.invoke("editor.insertImagesOrCallback", [s])
                    } else {
                        var r = $("<div />").html(this.$paste.html()).html();
                        e.invoke("editor.restoreRange"), e.invoke("editor.focus"), r && e.invoke("editor.pasteHTML", r)
                    }
                    this.$paste.empty()
                }, this.pasteByEvent = function(t) {
                    var i = t.originalEvent.clipboardData;
                    if (i && i.items && i.items.length) {
                        var n = list.head(i.items);
                        "file" === n.kind && -1 !== n.type.indexOf("image/") && e.invoke("editor.insertImagesOrCallback", [n.getAsFile()]), e.invoke("editor.afterCommand")
                    }
                }
            },
            Dropzone = function(e) {
                var t = $(document),
                    i = e.layoutInfo.editor,
                    n = e.layoutInfo.editable,
                    o = e.options,
                    a = o.langInfo,
                    s = $(['<div class="note-dropzone">', '  <div class="note-dropzone-message"/>', "</div>"].join("")).prependTo(i);
                this.initialize = function() {
                    o.disableDragAndDrop ? t.on("drop", function(e) {
                        e.preventDefault()
                    }) : this.attachDragAndDropEvent()
                }, this.attachDragAndDropEvent = function() {
                    var o = $(),
                        r = s.find(".note-dropzone-message");
                    t.on("dragenter", function(t) {
                        var n = e.invoke("codeview.isActivated"),
                            l = i.width() > 0 && i.height() > 0;
                        n || o.length || !l || (i.addClass("dragover"), s.width(i.width()), s.height(i.height()), r.text(a.image.dragImageHere)), o = o.add(t.target)
                    }).on("dragleave", function(e) {
                        (o = o.not(e.target)).length || i.removeClass("dragover")
                    }).on("drop", function() {
                        o = $(), i.removeClass("dragover")
                    }), s.on("dragenter", function() {
                        s.addClass("hover"), r.text(a.image.dropImage)
                    }).on("dragleave", function() {
                        s.removeClass("hover"), r.text(a.image.dragImageHere)
                    }), s.on("drop", function(t) {
                        var i = t.originalEvent.dataTransfer;
                        i && i.files && i.files.length ? (t.preventDefault(), n.focus(), e.invoke("editor.insertImagesOrCallback", i.files)) : $.each(i.types, function(t, n) {
                            var o = i.getData(n);
                            n.toLowerCase().indexOf("text") > -1 ? e.invoke("editor.pasteHTML", o) : $(o).each(function() {
                                e.invoke("editor.insertNode", this)
                            })
                        })
                    }).on("dragover", !1)
                }
            },
            CodeMirror;
        agent.hasCodeMirror && (agent.isSupportAmd ? require(["codemirror"], function(e) {
            CodeMirror = e
        }) : CodeMirror = window.CodeMirror);
        var Codeview = function(e) {
                var t = e.layoutInfo.editor,
                    i = e.layoutInfo.editable,
                    n = e.layoutInfo.codable,
                    o = e.options;
                this.sync = function() {
                    this.isActivated() && agent.hasCodeMirror && n.data("cmEditor").save()
                }, this.isActivated = function() {
                    return t.hasClass("codeview")
                }, this.toggle = function() {
                    this.isActivated() ? this.deactivate() : this.activate(), e.triggerEvent("codeview.toggled")
                }, this.activate = function() {
                    if (n.val(dom.html(i, o.prettifyHtml)), n.height(i.height()), e.invoke("toolbar.updateCodeview", !0), t.addClass("codeview"), n.focus(), agent.hasCodeMirror) {
                        var a = CodeMirror.fromTextArea(n[0], o.codemirror);
                        if (o.codemirror.tern) {
                            var s = new CodeMirror.TernServer(o.codemirror.tern);
                            a.ternServer = s, a.on("cursorActivity", function(e) {
                                s.updateArgHints(e)
                            })
                        }
                        a.setSize(null, i.outerHeight()), n.data("cmEditor", a)
                    }
                }, this.deactivate = function() {
                    if (agent.hasCodeMirror) {
                        var a = n.data("cmEditor");
                        n.val(a.getValue()), a.toTextArea()
                    }
                    var s = dom.value(n, o.prettifyHtml) || dom.emptyPara,
                        r = i.html() !== s;
                    i.html(s), i.height(o.height ? n.height() : "auto"), t.removeClass("codeview"), r && e.triggerEvent("change", i.html(), i), i.focus(), e.invoke("toolbar.updateCodeview", !1)
                }, this.destroy = function() {
                    this.isActivated() && this.deactivate()
                }
            },
            EDITABLE_PADDING = 24,
            Statusbar = function(e) {
                var t = $(document),
                    i = e.layoutInfo.statusbar,
                    n = e.layoutInfo.editable,
                    o = e.options;
                this.initialize = function() {
                    o.airMode || o.disableResizeEditor || i.on("mousedown", function(e) {
                        e.preventDefault(), e.stopPropagation();
                        var i = n.offset().top - t.scrollTop();
                        t.on("mousemove", function(e) {
                            var t = e.clientY - (i + EDITABLE_PADDING);
                            t = o.minheight > 0 ? Math.max(t, o.minheight) : t, t = o.maxHeight > 0 ? Math.min(t, o.maxHeight) : t, n.height(t)
                        }).one("mouseup", function() {
                            t.off("mousemove")
                        })
                    })
                }, this.destroy = function() {
                    i.off()
                }
            },
            Fullscreen = function(e) {
                var t = e.layoutInfo.editor,
                    i = e.layoutInfo.toolbar,
                    n = e.layoutInfo.editable,
                    o = e.layoutInfo.codable,
                    a = $(window),
                    s = $("html, body");
                this.toggle = function() {
                    var r = function(e) {
                        n.css("height", e.h), o.css("height", e.h), o.data("cmeditor") && o.data("cmeditor").setsize(null, e.h)
                    };
                    t.toggleClass("fullscreen"), this.isFullscreen() ? (n.data("orgHeight", n.css("height")), a.on("resize", function() {
                        r({
                            h: a.height() - i.outerHeight()
                        })
                    }).trigger("resize"), s.css("overflow", "hidden")) : (a.off("resize"), r({
                        h: n.data("orgHeight")
                    }), s.css("overflow", "visible")), e.invoke("toolbar.updateFullscreen", this.isFullscreen())
                }, this.isFullscreen = function() {
                    return t.hasClass("fullscreen")
                }
            },
            Handle = function(e) {
                var t = this,
                    i = $(document),
                    n = e.layoutInfo.editingArea,
                    o = e.options;
                this.events = {
                    "summernote.mousedown": function(e, i) {
                        t.update(i.target) && i.preventDefault()
                    },
                    "summernote.keyup summernote.scroll summernote.change summernote.dialog.shown": function() {
                        t.update()
                    }
                }, this.initialize = function() {
                    this.$handle = $(['<div class="note-handle">', '<div class="note-control-selection">', '<div class="note-control-selection-bg"></div>', '<div class="note-control-holder note-control-nw"></div>', '<div class="note-control-holder note-control-ne"></div>', '<div class="note-control-holder note-control-sw"></div>', '<div class="', o.disableResizeImage ? "note-control-holder" : "note-control-sizing", ' note-control-se"></div>', o.disableResizeImage ? "" : '<div class="note-control-selection-info"></div>', "</div>", "</div>"].join("")).prependTo(n), this.$handle.on("mousedown", function(n) {
                        if (dom.isControlSizing(n.target)) {
                            n.preventDefault(), n.stopPropagation();
                            var o = t.$handle.find(".note-control-selection").data("target"),
                                a = o.offset(),
                                s = i.scrollTop();
                            i.on("mousemove", function(i) {
                                e.invoke("editor.resizeTo", {
                                    x: i.clientX - a.left,
                                    y: i.clientY - (a.top - s)
                                }, o, !i.shiftKey), t.update(o[0])
                            }).one("mouseup", function(t) {
                                t.preventDefault(), i.off("mousemove"), e.invoke("editor.afterCommand")
                            }), o.data("ratio") || o.data("ratio", o.height() / o.width())
                        }
                    })
                }, this.destroy = function() {
                    this.$handle.remove()
                }, this.update = function(t) {
                    var i = dom.isImg(t),
                        n = this.$handle.find(".note-control-selection");
                    if (e.invoke("imagePopover.update", t), i) {
                        var o = $(t),
                            a = o.position(),
                            s = {
                                w: o.outerWidth(!0),
                                h: o.outerHeight(!0)
                            };
                        n.css({
                            display: "block",
                            left: a.left,
                            top: a.top,
                            width: s.w,
                            height: s.h
                        }).data("target", o);
                        var r = s.w + "x" + s.h;
                        n.find(".note-control-selection-info").text(r), e.invoke("editor.saveTarget", t)
                    } else this.hide();
                    return i
                }, this.hide = function() {
                    e.invoke("editor.clearTarget"), this.$handle.children().hide()
                }
            },
            AutoLink = function(e) {
                var t = this,
                    i = /^(https?:\/\/|ssh:\/\/|ftp:\/\/|file:\/|mailto:[A-Z0-9._%+-]+@)?(www\.)?(.+)$/i;
                this.events = {
                    "summernote.keyup": function(e, i) {
                        i.isDefaultPrevented() || t.handleKeyup(i)
                    },
                    "summernote.keydown": function(e, i) {
                        t.handleKeydown(i)
                    }
                }, this.initialize = function() {
                    this.lastWordRange = null
                }, this.destroy = function() {
                    this.lastWordRange = null
                }, this.replace = function() {
                    if (this.lastWordRange) {
                        var t = this.lastWordRange.toString(),
                            n = t.match(i);
                        if (n && (n[1] || n[2])) {
                            var o = n[1] ? t : "http://" + t,
                                a = $("<a />").html(t).attr("href", o)[0];
                            this.lastWordRange.insertNode(a), this.lastWordRange = null, e.invoke("editor.focus")
                        }
                    }
                }, this.handleKeydown = function(t) {
                    if (list.contains([key.code.ENTER, key.code.SPACE], t.keyCode)) {
                        var i = e.invoke("editor.createRange").getWordRange();
                        this.lastWordRange = i
                    }
                }, this.handleKeyup = function(e) {
                    list.contains([key.code.ENTER, key.code.SPACE], e.keyCode) && this.replace()
                }
            },
            AutoSync = function(e) {
                var t = e.layoutInfo.note;
                this.events = {
                    "summernote.change": function() {
                        t.val(e.invoke("code"))
                    }
                }, this.shouldInitialize = function() {
                    return dom.isTextarea(t[0])
                }
            },
            Placeholder = function(e) {
                var t = this,
                    i = e.layoutInfo.editingArea,
                    n = e.options;
                this.events = {
                    "summernote.init summernote.change": function() {
                        t.update()
                    },
                    "summernote.codeview.toggled": function() {
                        t.update()
                    }
                }, this.shouldInitialize = function() {
                    return !!n.placeholder
                }, this.initialize = function() {
                    this.$placeholder = $('<div class="note-placeholder">'), this.$placeholder.on("click", function() {
                        e.invoke("focus")
                    }).text(n.placeholder).prependTo(i)
                }, this.destroy = function() {
                    this.$placeholder.remove()
                }, this.update = function() {
                    var t = !e.invoke("codeview.isActivated") && e.invoke("editor.isEmpty");
                    this.$placeholder.toggle(t)
                }
            },
            Buttons = function(e) {
                var t = this,
                    i = $.summernote.ui,
                    n = e.layoutInfo.toolbar,
                    o = e.options,
                    a = o.langInfo,
                    s = func.invertObject(o.keyMap[agent.isMac ? "mac" : "pc"]),
                    r = this.representShortcut = function(e) {
                        if (!o.shortcuts) return "";
                        var t = s[e];
                        return agent.isMac && (t = t.replace("CMD", "âŒ˜").replace("SHIFT", "â‡§")), " (" + (t = t.replace("BACKSLASH", "\\").replace("SLASH", "/").replace("LEFTBRACKET", "[").replace("RIGHTBRACKET", "]")) + ")"
                    };
                this.initialize = function() {
                    this.addToolbarButtons(), this.addImagePopoverButtons(), this.addLinkPopoverButtons(), this.fontInstalledMap = {}
                }, this.destroy = function() {
                    delete this.fontInstalledMap
                }, this.isFontInstalled = function(e) {
                    return t.fontInstalledMap.hasOwnProperty(e) || (t.fontInstalledMap[e] = agent.isFontInstalled(e) || list.contains(o.fontNamesIgnoreCheck, e)), t.fontInstalledMap[e]
                }, this.addToolbarButtons = function() {
                    e.memo("button.style", function() {
                        return i.buttonGroup([i.button({
                            className: "dropdown-toggle",
                            contents: i.icon(o.icons.magic) + " " + i.icon(o.icons.caret, "span"),
                            tooltip: a.style.style,
                            data: {
                                toggle: "dropdown"
                            }
                        }), i.dropdown({
                            className: "dropdown-style",
                            items: e.options.styleTags,
                            template: function(e) {
                                "string" == typeof e && (e = {
                                    tag: e,
                                    title: a.style.hasOwnProperty(e) ? a.style[e] : e
                                });
                                var t = e.tag,
                                    i = e.title;
                                return "<" + t + (e.style ? ' style="' + e.style + '" ' : "") + (e.className ? ' className="' + e.className + '"' : "") + ">" + i + "</" + t + ">"
                            },
                            click: e.createInvokeHandler("editor.formatBlock")
                        })]).render()
                    }), e.memo("button.bold", function() {
                        return i.button({
                            className: "note-btn-bold",
                            contents: '<i class="material-icons">format_bold</i>',
                            tooltip: a.font.bold + r("bold"),
                            click: e.createInvokeHandler("editor.bold")
                        }).render()
                    }), e.memo("button.italic", function() {
                        return i.button({
                            className: "note-btn-italic",
                            contents: '<i class="material-icons">format_italic</i>',
                            tooltip: a.font.italic + r("italic"),
                            click: e.createInvokeHandler("editor.italic")
                        }).render()
                    }), e.memo("button.underline", function() {
                        return i.button({
                            className: "note-btn-underline",
                            contents: '<i class="material-icons">format_underlined</i>',
                            tooltip: a.font.underline + r("underline"),
                            click: e.createInvokeHandler("editor.underline")
                        }).render()
                    }), e.memo("button.clear", function() {
                        return i.button({
                            contents: o.icons.eraser,
                            tooltip: a.font.clear + r("removeFormat"),
                            click: e.createInvokeHandler("editor.removeFormat")
                        }).render()
                    }), e.memo("button.strikethrough", function() {
                        return i.button({
                            className: "note-btn-strikethrough",
                            contents: i.icon(o.icons.strikethrough),
                            tooltip: a.font.strikethrough + r("strikethrough"),
                            click: e.createInvokeHandler("editor.strikethrough")
                        }).render()
                    }), e.memo("button.superscript", function() {
                        return i.button({
                            className: "note-btn-superscript",
                            contents: i.icon(o.icons.superscript),
                            tooltip: a.font.superscript,
                            click: e.createInvokeHandler("editor.superscript")
                        }).render()
                    }), e.memo("button.subscript", function() {
                        return i.button({
                            className: "note-btn-subscript",
                            contents: i.icon(o.icons.subscript),
                            tooltip: a.font.subscript,
                            click: e.createInvokeHandler("editor.subscript")
                        }).render()
                    }), e.memo("button.fontname", function() {
                        return i.buttonGroup([i.button({
                            className: "dropdown-toggle",
                            contents: '<span class="note-current-fontname"/> ' + i.icon(o.icons.caret, "span"),
                            tooltip: a.font.name,
                            data: {
                                toggle: "dropdown"
                            }
                        }), i.dropdownCheck({
                            className: "dropdown-fontname",
                            checkClassName: o.icons.menuCheck,
                            items: o.fontNames.filter(t.isFontInstalled),
                            template: function(e) {
                                return '<span style="font-family:' + e + ',tahoma;">' + e + "</span>"
                            },
                            click: e.createInvokeHandler("editor.fontName")
                        })]).render()
                    }), e.memo("button.fontsize", function() {
                        return i.buttonGroup([i.button({
                            className: "dropdown-toggle",
                            contents: '<span class="note-current-fontsize"/><i class="material-icons">format_size</i>',
                            tooltip: a.font.size,
                            data: {
                                toggle: "dropdown"
                            }
                        }), i.dropdownCheck({
                            className: "dropdown-fontsize",
                            checkClassName: o.icons.menuCheck,
                            items: o.fontSizes,
                            click: e.createInvokeHandler("editor.fontSize")
                        })]).render()
                    }), e.memo("button.color", function() {
                        return i.buttonGroup({
                            className: "note-color",
                            children: [i.button({
                                className: "note-current-color-button",
                                contents: i.icon(o.icons.font + " note-recent-color"),
                                tooltip: a.color.recent,
                                click: function(t) {
                                    var i = $(t.currentTarget);
                                    e.invoke("editor.color", {
                                        backColor: i.attr("data-backColor"),
                                        foreColor: i.attr("data-foreColor")
                                    })
                                },
                                callback: function(e) {
                                    e.find(".note-recent-color").css("background-color", "#FFFF00"), e.attr("data-backColor", "#FFFF00")
                                }
                            }), i.button({
                                className: "dropdown-toggle",
                                contents: i.icon(o.icons.caret, "span"),
                                tooltip: a.color.more,
                                data: {
                                    toggle: "dropdown"
                                }
                            }), i.dropdown({
                                items: ["<li>", '<div class="btn-group">', '  <div class="note-palette-title">' + a.color.background + "</div>", "  <div>", '    <button type="button" class="note-color-reset btn btn-default" data-event="backColor" data-value="inherit">', a.color.transparent, "    </button>", "  </div>", '  <div class="note-holder" data-event="backColor"/>', "</div>", '<div class="btn-group">', '  <div class="note-palette-title">' + a.color.foreground + "</div>", "  <div>", '    <button type="button" class="note-color-reset btn btn-default" data-event="removeFormat" data-value="foreColor">', a.color.resetToDefault, "    </button>", "  </div>", '  <div class="note-holder" data-event="foreColor"/>', "</div>", '<div class="input-group colorpicker-component firas99"><input type="text" value="" class="form-control"/><span class="input-group-addon"><i></i></span></div>', '<div id="cp7" class="inl-bl"></div>', "</li>"].join(""),
                                callback: function(e) {
                                    e.find(".note-holder").each(function() {
                                        var e = $(this);
                                        e.append(i.palette({
                                            colors: o.colors,
                                            eventName: e.data("event")
                                        }).render())
                                    })
                                },
                                click: function(t) {
                                    var i = $(t.target),
                                        n = i.data("event"),
                                        o = i.data("value");
                                    if (n && o) {
                                        var a = "backColor" === n ? "background-color" : "color",
                                            s = i.closest(".note-color").find(".note-recent-color"),
                                            r = i.closest(".note-color").find(".note-current-color-button");
                                        s.css(a, o), r.attr("data-" + n, o), e.invoke("editor." + n, o)
                                    }
                                }
                            })]
                        }).render()
                    }), e.memo("button.eventColor2", function() {
                        return i.buttonGroup({
                            className: "note-color note-color2",
                            children: [i.button({
                                contents: '<i class="material-icons">format_color_text</i>',
                                tooltip: "Text Color",
                                data: {
                                    toggle: "dropdown"
                                }
                            }), i.dropdown({
                                items: ["<li>", '<div class="btn-group">', '<div id="cp7" class="inl-bl"></div>', '<div class="input-group"><input type="text" value="" class="form-control pix_color_air_input"/></div>', '<button type="button" class="note-color-choose btn btn-primary pix_color_air_btn" data-event="foreColor" data-value="#eee">Choose</button>', "</div>", "</li>"].join(""),
                                callback: function(e) {
                                    e.find(".note-holder").each(function() {
                                        var e = $(this);
                                        e.append(i.palette({
                                            colors: o.colors,
                                            eventName: e.data("event")
                                        }).render())
                                    })
                                },
                                click: function(t) {
                                    var i = $(t.target),
                                        n = i.data("event"),
                                        o = i.data("value");
                                    if (o = $(t.target).attr("data-value"), n && o) {
                                        i.closest(".note-color").find(".note-recent-color"), i.closest(".note-color").find(".note-current-color-button");
                                        e.invoke("editor." + n, o)
                                    }
                                }
                            })]
                        }).render()
                    }), e.memo("button.ul", function() {
                        return i.button({
                            contents: '<i class="material-icons">format_list_bulleted</i>',
                            tooltip: a.lists.unordered + r("insertUnorderedList"),
                            click: e.createInvokeHandler("editor.insertUnorderedList")
                        }).render()
                    }), e.memo("button.ol", function() {
                        return i.button({
                            contents: '<i class="material-icons">format_list_numbered</i>',
                            tooltip: a.lists.ordered + r("insertOrderedList"),
                            click: e.createInvokeHandler("editor.insertOrderedList")
                        }).render()
                    });
                    var n = i.button({
                            contents: o.icons.alignLeft,
                            tooltip: a.paragraph.left + r("justifyLeft"),
                            click: e.createInvokeHandler("editor.justifyLeft")
                        }),
                        s = i.button({
                            contents: i.icon(o.icons.alignCenter),
                            tooltip: a.paragraph.center + r("justifyCenter"),
                            click: e.createInvokeHandler("editor.justifyCenter")
                        }),
                        l = i.button({
                            contents: i.icon(o.icons.alignRight),
                            tooltip: a.paragraph.right + r("justifyRight"),
                            click: e.createInvokeHandler("editor.justifyRight")
                        }),
                        c = i.button({
                            contents: i.icon(o.icons.alignJustify),
                            tooltip: a.paragraph.justify + r("justifyFull"),
                            click: e.createInvokeHandler("editor.justifyFull")
                        }),
                        d = i.button({
                            contents: i.icon(o.icons.outdent),
                            tooltip: a.paragraph.outdent + r("outdent"),
                            click: e.createInvokeHandler("editor.outdent")
                        }),
                        u = i.button({
                            contents: i.icon(o.icons.indent),
                            tooltip: a.paragraph.indent + r("indent"),
                            click: e.createInvokeHandler("editor.indent")
                        });
                    e.memo("button.justifyLeft", func.invoke(n, "render")), e.memo("button.justifyCenter", func.invoke(s, "render")), e.memo("button.justifyRight", func.invoke(l, "render")), e.memo("button.justifyFull", func.invoke(c, "render")), e.memo("button.outdent", func.invoke(d, "render")), e.memo("button.indent", func.invoke(u, "render")), e.memo("button.paragraph", function() {
                        return i.buttonGroup([i.button({
                            className: "dropdown-toggle",
                            contents: o.icons.alignLeft,
                            tooltip: a.paragraph.paragraph,
                            data: {
                                toggle: "dropdown"
                            }
                        }), i.dropdown([i.buttonGroup({
                            className: "note-align",
                            children: [n, s, l, c]
                        }), i.buttonGroup({
                            className: "note-list",
                            children: [d, u]
                        })])]).render()
                    }), e.memo("button.height", function() {
                        return i.buttonGroup([i.button({
                            className: "dropdown-toggle",
                            contents: i.icon(o.icons.textHeight) + " " + i.icon(o.icons.caret, "span"),
                            tooltip: a.font.height,
                            data: {
                                toggle: "dropdown"
                            }
                        }), i.dropdownCheck({
                            items: o.lineHeights,
                            checkClassName: o.icons.menuCheck,
                            className: "dropdown-line-height",
                            click: e.createInvokeHandler("editor.lineHeight")
                        })]).render()
                    }), e.memo("button.table", function() {
                        return i.buttonGroup([i.button({
                            className: "dropdown-toggle",
                            contents: i.icon(o.icons.table) + " " + i.icon(o.icons.caret, "span"),
                            tooltip: a.table.table,
                            data: {
                                toggle: "dropdown"
                            }
                        }), i.dropdown({
                            className: "note-table",
                            items: ['<div class="note-dimension-picker">', '  <div class="note-dimension-picker-mousecatcher" data-event="insertTable" data-value="1x1"/>', '  <div class="note-dimension-picker-highlighted"/>', '  <div class="note-dimension-picker-unhighlighted"/>', "</div>", '<div class="note-dimension-display">1 x 1</div>'].join("")
                        })], {
                            callback: function(i) {
                                i.find(".note-dimension-picker-mousecatcher").css({
                                    width: o.insertTableMaxSize.col + "em",
                                    height: o.insertTableMaxSize.row + "em"
                                }).mousedown(e.createInvokeHandler("editor.insertTable")).on("mousemove", t.tableMoveHandler)
                            }
                        }).render()
                    }), e.memo("button.link", function() {
                        return i.button({
                            contents: '<i class="material-icons">insert_link</i>',
                            tooltip: a.link.link + r("linkDialog.show"),
                            click: e.createInvokeHandler("linkDialog.show")
                        }).render()
                    }), e.memo("button.picture", function() {
                        return i.button({
                            contents: i.icon(o.icons.picture),
                            tooltip: a.image.image,
                            click: e.createInvokeHandler("imageDialog.show")
                        }).render()
                    }), e.memo("button.video", function() {
                        return i.button({
                            contents: i.icon(o.icons.video),
                            tooltip: a.video.video,
                            click: e.createInvokeHandler("videoDialog.show")
                        }).render()
                    }), e.memo("button.hr", function() {
                        return i.button({
                            contents: i.icon(o.icons.minus),
                            tooltip: a.hr.insert + r("insertHorizontalRule"),
                            click: e.createInvokeHandler("editor.insertHorizontalRule")
                        }).render()
                    }), e.memo("button.fullscreen", function() {
                        return i.button({
                            className: "btn-fullscreen",
                            contents: i.icon(o.icons.arrowsAlt),
                            tooltip: a.options.fullscreen,
                            click: e.createInvokeHandler("fullscreen.toggle")
                        }).render()
                    }), e.memo("button.codeview", function() {
                        return i.button({
                            className: "btn-codeview",
                            contents: i.icon(o.icons.code),
                            tooltip: a.options.codeview,
                            click: e.createInvokeHandler("codeview.toggle")
                        }).render()
                    }), e.memo("button.redo", function() {
                        return i.button({
                            contents: i.icon(o.icons.redo),
                            tooltip: a.history.redo + r("redo"),
                            click: e.createInvokeHandler("editor.redo")
                        }).render()
                    }), e.memo("button.undo", function() {
                        return i.button({
                            contents: i.icon(o.icons.undo),
                            tooltip: a.history.undo + r("undo"),
                            click: e.createInvokeHandler("editor.undo")
                        }).render()
                    }), e.memo("button.help", function() {
                        return i.button({
                            contents: i.icon(o.icons.question),
                            tooltip: a.options.help,
                            click: e.createInvokeHandler("helpDialog.show")
                        }).render()
                    })
                }, this.addImagePopoverButtons = function() {
                    e.memo("button.imageSize100", function() {
                        return i.button({
                            contents: '<span class="note-fontsize-10">100%</span>',
                            tooltip: a.image.resizeFull,
                            click: e.createInvokeHandler("editor.resize", "1")
                        }).render()
                    }), e.memo("button.imageSize50", function() {
                        return i.button({
                            contents: '<span class="note-fontsize-10">50%</span>',
                            tooltip: a.image.resizeHalf,
                            click: e.createInvokeHandler("editor.resize", "0.5")
                        }).render()
                    }), e.memo("button.imageSize25", function() {
                        return i.button({
                            contents: '<span class="note-fontsize-10">25%</span>',
                            tooltip: a.image.resizeQuarter,
                            click: e.createInvokeHandler("editor.resize", "0.25")
                        }).render()
                    }), e.memo("button.floatLeft", function() {
                        return i.button({
                            contents: i.icon(o.icons.alignLeft),
                            tooltip: a.image.floatLeft,
                            click: e.createInvokeHandler("editor.floatMe", "left")
                        }).render()
                    }), e.memo("button.floatRight", function() {
                        return i.button({
                            contents: i.icon(o.icons.alignRight),
                            tooltip: a.image.floatRight,
                            click: e.createInvokeHandler("editor.floatMe", "right")
                        }).render()
                    }), e.memo("button.floatNone", function() {
                        return i.button({
                            contents: i.icon(o.icons.alignJustify),
                            tooltip: a.image.floatNone,
                            click: e.createInvokeHandler("editor.floatMe", "none")
                        }).render()
                    }), e.memo("button.removeMedia", function() {
                        return i.button({
                            contents: i.icon(o.icons.trash),
                            tooltip: a.image.remove,
                            click: e.createInvokeHandler("editor.removeMedia")
                        }).render()
                    })
                }, this.addLinkPopoverButtons = function() {
                    e.memo("button.linkDialogShow", function() {
                        return i.button({
                            contents: i.icon(o.icons.link),
                            tooltip: a.link.edit,
                            click: e.createInvokeHandler("linkDialog.show")
                        }).render()
                    }), e.memo("button.unlink", function() {
                        return i.button({
                            contents: i.icon(o.icons.unlink),
                            tooltip: a.link.unlink,
                            click: e.createInvokeHandler("editor.unlink")
                        }).render()
                    })
                }, this.build = function(t, n) {
                    for (var o = 0, a = n.length; o < a; o++) {
                        for (var s = n[o], r = s[0], l = s[1], c = i.buttonGroup({
                                className: "note-" + r
                            }).render(), d = 0, u = l.length; d < u; d++) {
                            var p = e.memo("button." + l[d]);
                            p && c.append("function" == typeof p ? p(e) : p)
                        }
                        c.appendTo(t)
                    }
                }, this.updateCurrentStyle = function() {
                    var i = e.invoke("editor.currentStyle");
                    if (this.updateBtnStates({
                            ".note-btn-bold": function() {
                                return "bold" === i["font-bold"]
                            },
                            ".note-btn-italic": function() {
                                return "italic" === i["font-italic"]
                            },
                            ".note-btn-underline": function() {
                                return "underline" === i["font-underline"]
                            },
                            ".note-btn-subscript": function() {
                                return "subscript" === i["font-subscript"]
                            },
                            ".note-btn-superscript": function() {
                                return "superscript" === i["font-superscript"]
                            },
                            ".note-btn-strikethrough": function() {
                                return "strikethrough" === i["font-strikethrough"]
                            }
                        }), i["font-family"]) {
                        var o = i["font-family"].split(",").map(function(e) {
                                return e.replace(/[\'\"]/g, "").replace(/\s+$/, "").replace(/^\s+/, "")
                            }),
                            a = list.find(o, t.isFontInstalled);
                        n.find(".dropdown-fontname li a").each(function() {
                            var e = $(this).data("value") + "" == a + "";
                            this.className = e ? "checked" : ""
                        }), n.find(".note-current-fontname").text(a)
                    }
                    if (i["font-size"]) {
                        var s = i["font-size"];
                        n.find(".dropdown-fontsize li a").each(function() {
                            var e = $(this).data("value") + "" == s + "";
                            this.className = e ? "checked" : ""
                        }), n.find(".note-current-fontsize").text(s)
                    }
                    if (i["line-height"]) {
                        var r = i["line-height"];
                        n.find(".dropdown-line-height li a").each(function() {
                            var e = $(this).data("value") + "" == r + "";
                            this.className = e ? "checked" : ""
                        })
                    }
                }, this.updateBtnStates = function(e) {
                    $.each(e, function(e, t) {
                        i.toggleBtnActive(n.find(e), t())
                    })
                }, this.tableMoveHandler = function(e) {
                    var t, i = $(e.target.parentNode),
                        n = i.next(),
                        a = i.find(".note-dimension-picker-mousecatcher"),
                        s = i.find(".note-dimension-picker-highlighted"),
                        r = i.find(".note-dimension-picker-unhighlighted");
                    if (void 0 === e.offsetX) {
                        var l = $(e.target).offset();
                        t = {
                            x: e.pageX - l.left,
                            y: e.pageY - l.top
                        }
                    } else t = {
                        x: e.offsetX,
                        y: e.offsetY
                    };
                    var c = Math.ceil(t.x / 18) || 1,
                        d = Math.ceil(t.y / 18) || 1;
                    s.css({
                        width: c + "em",
                        height: d + "em"
                    }), a.data("value", c + "x" + d), 3 < c && c < o.insertTableMaxSize.col && r.css({
                        width: c + 1 + "em"
                    }), 3 < d && d < o.insertTableMaxSize.row && r.css({
                        height: d + 1 + "em"
                    }), n.html(c + " x " + d)
                }
            },
            Toolbar = function(e) {
                var t = $.summernote.ui,
                    i = e.layoutInfo.note,
                    n = e.layoutInfo.toolbar,
                    o = e.options;
                this.shouldInitialize = function() {
                    return !o.airMode
                }, this.initialize = function() {
                    o.toolbar = o.toolbar || [], o.toolbar.length ? e.invoke("buttons.build", n, o.toolbar) : n.hide(), o.toolbarContainer && n.appendTo(o.toolbarContainer), i.on("summernote.keyup summernote.mouseup summernote.change", function() {
                        e.invoke("buttons.updateCurrentStyle")
                    }), e.invoke("buttons.updateCurrentStyle")
                }, this.destroy = function() {
                    n.children().remove()
                }, this.updateFullscreen = function(e) {
                    t.toggleBtnActive(n.find(".btn-fullscreen"), e)
                }, this.updateCodeview = function(e) {
                    t.toggleBtnActive(n.find(".btn-codeview"), e), e ? this.deactivate() : this.activate()
                }, this.activate = function(e) {
                    var i = n.find("button");
                    e || (i = i.not(".btn-codeview")), t.toggleBtn(i, !0)
                }, this.deactivate = function(e) {
                    var i = n.find("button");
                    e || (i = i.not(".btn-codeview")), t.toggleBtn(i, !1)
                }
            },
            LinkDialog = function(e) {
                var t = this,
                    i = $.summernote.ui,
                    n = (e.layoutInfo.editor, e.options),
                    o = n.langInfo;
                this.initialize = function() {
                    n.dialogsInBody && $(document.body);
                    var e = '<div class="form-group"><label>' + o.link.textToDisplay + '</label><input class="note-link-text form-control" type="text" /></div><div class="form-group"><label>' + o.link.url + '</label><input class="note-link-url form-control" type="text" value="http://" /></div>' + (n.disableLinkTarget ? "" : '<div class="checkbox"><label><input type="checkbox" checked> ' + o.link.openInNewWindow + "</label></div>"),
                        t = '<button href="#" class="btn btn-primary note-link-btn disabled" disabled>' + o.link.insert + "</button>";
                    this.$dialog = i.dialog({
                        className: "link-dialog",
                        title: o.link.insert,
                        fade: n.dialogsFade,
                        body: e,
                        footer: t
                    }).render().appendTo("body")
                }, this.destroy = function() {
                    i.hideDialog(this.$dialog), this.$dialog.remove()
                }, this.bindEnterKey = function(e, t) {
                    e.on("keypress", function(e) {
                        e.keyCode === key.code.ENTER && t.trigger("click")
                    })
                }, this.showLinkDialog = function(n) {
                    return $.Deferred(function(o) {
                        var a = t.$dialog.find(".note-link-text"),
                            s = t.$dialog.find(".note-link-url"),
                            r = t.$dialog.find(".note-link-btn"),
                            l = t.$dialog.find("input[type=checkbox]");
                        i.onDialogShown(t.$dialog, function() {
                            e.triggerEvent("dialog.shown"), a.val(n.text), a.on("input", function() {
                                i.toggleBtn(r, a.val() && s.val()), n.text = a.val()
                            }), n.url || (n.url = n.text || "http://", i.toggleBtn(r, n.text)), s.on("input", function() {
                                i.toggleBtn(r, a.val() && s.val()), n.text || a.val(s.val())
                            }).val(n.url).trigger("focus"), t.bindEnterKey(s, r), t.bindEnterKey(a, r), l.prop("checked", n.isNewWindow), r.one("click", function(e) {
                                e.preventDefault(), o.resolve({
                                    range: n.range,
                                    url: s.val(),
                                    text: a.val(),
                                    isNewWindow: l.is(":checked")
                                }), t.$dialog.modal("hide")
                            })
                        }), i.onDialogHidden(t.$dialog, function() {
                            a.off("input keypress"), s.off("input keypress"), r.off("click"), "pending" === o.state() && o.reject()
                        }), i.showDialog(t.$dialog)
                    }).promise()
                }, this.show = function() {
                    var t = e.invoke("editor.getLinkInfo");
                    e.invoke("editor.saveRange"), this.showLinkDialog(t).then(function(t) {
                        e.invoke("editor.restoreRange"), e.invoke("editor.createLink", t)
                    }).fail(function() {
                        e.invoke("editor.restoreRange")
                    })
                }, e.memo("help.linkDialog.show", n.langInfo.help["linkDialog.show"])
            },
            LinkPopover = function(e) {
                var t = this,
                    i = $.summernote.ui,
                    n = e.options;
                this.events = {
                    "summernote.keyup summernote.mouseup summernote.change summernote.scroll": function() {
                        t.update()
                    },
                    "summernote.dialog.shown": function() {
                        t.hide()
                    }
                }, this.shouldInitialize = function() {
                    return !list.isEmpty(n.popover.link)
                }, this.initialize = function() {
                    this.$popover = i.popover({
                        className: "note-link-popover",
                        callback: function(e) {
                            e.find(".popover-content").prepend('<span><a target="_blank"></a>&nbsp;</span>')
                        }
                    }).render().appendTo("body");
                    var t = this.$popover.find(".popover-content");
                    e.invoke("buttons.build", t, n.popover.link)
                }, this.destroy = function() {
                    this.$popover.remove()
                }, this.update = function() {
                    if (e.invoke("editor.hasFocus")) {
                        var t = e.invoke("editor.createRange");
                        if (t.isCollapsed() && t.isOnAnchor()) {
                            var i = dom.ancestor(t.sc, dom.isAnchor),
                                n = $(i).attr("href");
                            this.$popover.find("a").attr("href", n).html(n);
                            var o = dom.posFromPlaceholder(i);
                            this.$popover.css({
                                display: "block",
                                left: o.left,
                                top: o.top
                            })
                        } else this.hide()
                    } else this.hide()
                }, this.hide = function() {
                    this.$popover.hide()
                }
            },
            ImageDialog = function(e) {
                var t = this,
                    i = $.summernote.ui,
                    n = e.layoutInfo.editor,
                    o = e.options,
                    a = o.langInfo;
                this.initialize = function() {
                    var e = o.dialogsInBody ? $(document.body) : n,
                        t = "";
                    if (o.maximumImageFileSize) {
                        var s = Math.floor(Math.log(o.maximumImageFileSize) / Math.log(1024)),
                            r = 1 * (o.maximumImageFileSize / Math.pow(1024, s)).toFixed(2) + " " + " KMGTP" [s] + "B";
                        t = "<small>" + a.image.maximumFileSize + " : " + r + "</small>"
                    }
                    var l = '<div class="form-group note-group-select-from-files"><label>' + a.image.selectFromFiles + '</label><input class="note-image-input form-control" type="file" name="files" accept="image/*" multiple="multiple" />' + t + '</div><div class="form-group note-group-image-url" style="overflow:auto;"><label>' + a.image.url + '</label><input class="note-image-url form-control col-md-12" type="text" /></div>',
                        c = '<button href="#" class="btn btn-primary note-image-btn disabled" disabled>' + a.image.insert + "</button>";
                    this.$dialog = i.dialog({
                        title: a.image.insert,
                        fade: o.dialogsFade,
                        body: l,
                        footer: c
                    }).render().appendTo(e)
                }, this.destroy = function() {
                    i.hideDialog(this.$dialog), this.$dialog.remove()
                }, this.bindEnterKey = function(e, t) {
                    e.on("keypress", function(e) {
                        e.keyCode === key.code.ENTER && t.trigger("click")
                    })
                }, this.show = function() {
                    e.invoke("editor.saveRange"), this.showImageDialog().then(function(n) {
                        i.hideDialog(t.$dialog), e.invoke("editor.restoreRange"), "string" == typeof n ? e.invoke("editor.insertImage", n) : e.invoke("editor.insertImagesOrCallback", n)
                    }).fail(function() {
                        e.invoke("editor.restoreRange")
                    })
                }, this.showImageDialog = function() {
                    return $.Deferred(function(n) {
                        var o = t.$dialog.find(".note-image-input"),
                            a = t.$dialog.find(".note-image-url"),
                            s = t.$dialog.find(".note-image-btn");
                        i.onDialogShown(t.$dialog, function() {
                            e.triggerEvent("dialog.shown"), o.replaceWith(o.clone().on("change", function() {
                                n.resolve(this.files || this.value)
                            }).val("")), s.click(function(e) {
                                e.preventDefault(), n.resolve(a.val())
                            }), a.on("keyup paste", function() {
                                var e = a.val();
                                i.toggleBtn(s, e)
                            }).val("").trigger("focus"), t.bindEnterKey(a, s)
                        }), i.onDialogHidden(t.$dialog, function() {
                            o.off("change"), a.off("keyup paste keypress"), s.off("click"), "pending" === n.state() && n.reject()
                        }), i.showDialog(t.$dialog)
                    })
                }
            },
            ImagePopover = function(e) {
                var t = $.summernote.ui,
                    i = e.options;
                this.shouldInitialize = function() {
                    return !list.isEmpty(i.popover.image)
                }, this.initialize = function() {
                    this.$popover = t.popover({
                        className: "note-image-popover"
                    }).render().appendTo("body");
                    var n = this.$popover.find(".popover-content");
                    e.invoke("buttons.build", n, i.popover.image)
                }, this.destroy = function() {
                    this.$popover.remove()
                }, this.update = function(e) {
                    if (dom.isImg(e)) {
                        var t = dom.posFromPlaceholder(e);
                        this.$popover.css({
                            display: "block",
                            left: t.left,
                            top: t.top
                        })
                    } else this.hide()
                }, this.hide = function() {
                    this.$popover.hide()
                }
            },
            VideoDialog = function(e) {
                var t = this,
                    i = $.summernote.ui,
                    n = e.layoutInfo.editor,
                    o = e.options,
                    a = o.langInfo;
                this.initialize = function() {
                    var e = o.dialogsInBody ? $(document.body) : n,
                        t = '<div class="form-group row-fluid"><label>' + a.video.url + ' <small class="text-muted">' + a.video.providers + '</small></label><input class="note-video-url form-control span12" type="text" /></div>',
                        s = '<button href="#" class="btn btn-primary note-video-btn disabled" disabled>' + a.video.insert + "</button>";
                    this.$dialog = i.dialog({
                        title: a.video.insert,
                        fade: o.dialogsFade,
                        body: t,
                        footer: s
                    }).render().appendTo(e)
                }, this.destroy = function() {
                    i.hideDialog(this.$dialog), this.$dialog.remove()
                }, this.bindEnterKey = function(e, t) {
                    e.on("keypress", function(e) {
                        e.keyCode === key.code.ENTER && t.trigger("click")
                    })
                }, this.createVideoNode = function(e) {
                    var t, i = e.match(/^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/),
                        n = e.match(/\/\/instagram.com\/p\/(.[a-zA-Z0-9_-]*)/),
                        o = e.match(/\/\/vine.co\/v\/(.[a-zA-Z0-9]*)/),
                        a = e.match(/\/\/(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/),
                        s = e.match(/.+dailymotion.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/),
                        r = e.match(/\/\/v\.youku\.com\/v_show\/id_(\w+)=*\.html/),
                        l = e.match(/^.+.(mp4|m4v)$/),
                        c = e.match(/^.+.(ogg|ogv)$/),
                        d = e.match(/^.+.(webm)$/);
                    if (i && 11 === i[1].length) {
                        var u = i[1];
                        t = $("<iframe>").attr("frameborder", 0).attr("src", "//www.youtube.com/embed/" + u).attr("width", "640").attr("height", "360")
                    } else if (n && n[0].length) t = $("<iframe>").attr("frameborder", 0).attr("src", n[0] + "/embed/").attr("width", "612").attr("height", "710").attr("scrolling", "no").attr("allowtransparency", "true");
                    else if (o && o[0].length) t = $("<iframe>").attr("frameborder", 0).attr("src", o[0] + "/embed/simple").attr("width", "600").attr("height", "600").attr("class", "vine-embed");
                    else if (a && a[3].length) t = $("<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>").attr("frameborder", 0).attr("src", "//player.vimeo.com/video/" + a[3]).attr("width", "640").attr("height", "360");
                    else if (s && s[2].length) t = $("<iframe>").attr("frameborder", 0).attr("src", "//www.dailymotion.com/embed/video/" + s[2]).attr("width", "640").attr("height", "360");
                    else if (r && r[1].length) t = $("<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>").attr("frameborder", 0).attr("height", "498").attr("width", "510").attr("src", "//player.youku.com/embed/" + r[1]);
                    else {
                        if (!(l || c || d)) return !1;
                        t = $("<video controls>").attr("src", e).attr("width", "640").attr("height", "360")
                    }
                    return t.addClass("note-video-clip"), t[0]
                }, this.show = function() {
                    var n = e.invoke("editor.getSelectedText");
                    e.invoke("editor.saveRange"), this.showVideoDialog(n).then(function(n) {
                        i.hideDialog(t.$dialog), e.invoke("editor.restoreRange");
                        var o = t.createVideoNode(n);
                        o && e.invoke("editor.insertNode", o)
                    }).fail(function() {
                        e.invoke("editor.restoreRange")
                    })
                }, this.showVideoDialog = function(n) {
                    return $.Deferred(function(o) {
                        var a = t.$dialog.find(".note-video-url"),
                            s = t.$dialog.find(".note-video-btn");
                        i.onDialogShown(t.$dialog, function() {
                            e.triggerEvent("dialog.shown"), a.val(n).on("input", function() {
                                i.toggleBtn(s, a.val())
                            }).trigger("focus"), s.click(function(e) {
                                e.preventDefault(), o.resolve(a.val())
                            }), t.bindEnterKey(a, s)
                        }), i.onDialogHidden(t.$dialog, function() {
                            a.off("input"), s.off("click"), "pending" === o.state() && o.reject()
                        }), i.showDialog(t.$dialog)
                    })
                }
            },
            HelpDialog = function(e) {
                var t = this,
                    i = $.summernote.ui,
                    n = e.layoutInfo.editor,
                    o = e.options,
                    a = o.langInfo;
                this.createShortCutList = function() {
                    var t = o.keyMap[agent.isMac ? "mac" : "pc"];
                    return Object.keys(t).map(function(i) {
                        var n = t[i],
                            o = $('<div><div class="help-list-item"/></div>');
                        return o.append($("<label><kbd>" + i + "</kdb></label>").css({
                            width: 180,
                            "margin-right": 10
                        })).append($("<span/>").html(e.memo("help." + n) || n)), o.html()
                    }).join("")
                }, this.initialize = function() {
                    var e = o.dialogsInBody ? $(document.body) : n,
                        t = ['<p class="text-center">', '<a href="http://summernote.org/" target="_blank">Summernote 0.8.2</a> Â· ', '<a href="https://github.com/summernote/summernote" target="_blank">Project</a> Â· ', '<a href="https://github.com/summernote/summernote/issues" target="_blank">Issues</a>', "</p>"].join("");
                    this.$dialog = i.dialog({
                        title: a.options.help,
                        fade: o.dialogsFade,
                        body: this.createShortCutList(),
                        footer: t,
                        callback: function(e) {
                            e.find(".modal-body").css({
                                "max-height": 300,
                                overflow: "scroll"
                            })
                        }
                    }).render().appendTo(e)
                }, this.destroy = function() {
                    i.hideDialog(this.$dialog), this.$dialog.remove()
                }, this.showHelpDialog = function() {
                    return $.Deferred(function(n) {
                        i.onDialogShown(t.$dialog, function() {
                            e.triggerEvent("dialog.shown"), n.resolve()
                        }), i.showDialog(t.$dialog)
                    }).promise()
                }, this.show = function() {
                    e.invoke("editor.saveRange"), this.showHelpDialog().then(function() {
                        e.invoke("editor.restoreRange")
                    })
                }
            },
            AirPopover = function(e) {
                var t = this,
                    i = $.summernote.ui,
                    n = e.options;
                this.events = {
                    "summernote.keyup summernote.mouseup summernote.scroll": function() {
                        t.update()
                    },
                    "summernote.change summernote.dialog.shown": function() {},
                    "summernote.focusout": function(e, i) {
                        agent.isFF || i.relatedTarget && dom.ancestor(i.relatedTarget, func.eq(t.$popover[0])) || t.hide()
                    }
                }, this.shouldInitialize = function() {
                    return n.airMode && !list.isEmpty(n.popover.air)
                }, this.initialize = function() {
                    this.$popover = i.popover({
                        className: "note-air-popover"
                    }).render().appendTo("body");
                    var t = this.$popover.find(".popover-content");
                    e.invoke("buttons.build", t, n.popover.air)
                }, this.destroy = function() {
                    this.$popover.remove()
                }, this.update = function() {
                    var t = e.invoke("editor.currentStyle");
                    if (t.range && !t.range.isCollapsed()) {
                        var i = list.last(t.range.getClientRects());
                        if (i) {
                            var n = func.rect2bnd(i);
                            this.$popover.css({
                                display: "block",
                                left: Math.max(n.left + n.width / 2, 0) - 20,
                                top: n.top + n.height
                            })
                        }
                    } else this.hide()
                }, this.hide = function() {
                    this.$popover.hide()
                }
            },
            HintPopover = function(e) {
                var t = this,
                    i = $.summernote.ui,
                    n = e.options.hint || [],
                    o = e.options.hintDirection || "bottom",
                    a = $.isArray(n) ? n : [n];
                this.events = {
                    "summernote.keyup": function(e, i) {
                        i.isDefaultPrevented() || t.handleKeyup(i)
                    },
                    "summernote.keydown": function(e, i) {
                        t.handleKeydown(i)
                    },
                    "summernote.dialog.shown": function() {
                        t.hide()
                    }
                }, this.shouldInitialize = function() {
                    return a.length > 0
                }, this.initialize = function() {
                    this.lastWordRange = null, this.$popover = i.popover({
                        className: "note-hint-popover",
                        hideArrow: !0,
                        direction: ""
                    }).render().appendTo("body"), this.$popover.hide(), this.$content = this.$popover.find(".popover-content"), this.$content.on("click", ".note-hint-item", function() {
                        t.$content.find(".active").removeClass("active"), $(this).addClass("active"), t.replace()
                    })
                }, this.destroy = function() {
                    this.$popover.remove()
                }, this.selectItem = function(e) {
                    this.$content.find(".active").removeClass("active"), e.addClass("active"), this.$content[0].scrollTop = e[0].offsetTop - this.$content.innerHeight() / 2
                }, this.moveDown = function() {
                    var e = this.$content.find(".note-hint-item.active"),
                        t = e.next();
                    if (t.length) this.selectItem(t);
                    else {
                        var i = e.parent().next();
                        i.length || (i = this.$content.find(".note-hint-group").first()), this.selectItem(i.find(".note-hint-item").first())
                    }
                }, this.moveUp = function() {
                    var e = this.$content.find(".note-hint-item.active"),
                        t = e.prev();
                    if (t.length) this.selectItem(t);
                    else {
                        var i = e.parent().prev();
                        i.length || (i = this.$content.find(".note-hint-group").last()), this.selectItem(i.find(".note-hint-item").last())
                    }
                }, this.replace = function() {
                    var t = this.$content.find(".note-hint-item.active");
                    if (t.length) {
                        var i = this.nodeFromItem(t);
                        this.lastWordRange.insertNode(i), range.createFromNode(i).collapse().select(), this.lastWordRange = null, this.hide(), e.invoke("editor.focus")
                    }
                }, this.nodeFromItem = function(e) {
                    var t = a[e.data("index")],
                        i = e.data("item"),
                        n = t.content ? t.content(i) : i;
                    return "string" == typeof n && (n = dom.createText(n)), n
                }, this.createItemTemplates = function(e, t) {
                    var i = a[e];
                    return t.map(function(t, n) {
                        var o = $('<div class="note-hint-item"/>');
                        return o.append(i.template ? i.template(t) : t + ""), o.data({
                            index: e,
                            item: t
                        }), 0 === e && 0 === n && o.addClass("active"), o
                    })
                }, this.handleKeydown = function(e) {
                    this.$popover.is(":visible") && (e.keyCode === key.code.ENTER ? (e.preventDefault(), this.replace()) : e.keyCode === key.code.UP ? (e.preventDefault(), this.moveUp()) : e.keyCode === key.code.DOWN && (e.preventDefault(), this.moveDown()))
                }, this.searchKeyword = function(e, t, i) {
                    var n = a[e];
                    if (n && n.match.test(t) && n.search) {
                        var o = n.match.exec(t);
                        n.search(o[1], i)
                    } else i()
                }, this.createGroup = function(e, i) {
                    var n = $('<div class="note-hint-group note-hint-group-' + e + '"/>');
                    return this.searchKeyword(e, i, function(i) {
                        (i = i || []).length && (n.html(t.createItemTemplates(e, i)), t.show())
                    }), n
                }, this.handleKeyup = function(i) {
                    if (list.contains([key.code.ENTER, key.code.UP, key.code.DOWN], i.keyCode)) {
                        if (i.keyCode === key.code.ENTER && this.$popover.is(":visible")) return
                    } else {
                        var n = e.invoke("editor.createRange").getWordRange(),
                            s = n.toString();
                        if (a.length && s) {
                            this.$content.empty();
                            var r = func.rect2bnd(list.last(n.getClientRects()));
                            r && (this.$popover.hide(), this.lastWordRange = n, a.forEach(function(e, i) {
                                e.match.test(s) && t.createGroup(i, s).appendTo(t.$content)
                            }), "top" === o ? this.$popover.css({
                                left: r.left,
                                top: r.top - this.$popover.outerHeight() - 5
                            }) : this.$popover.css({
                                left: r.left,
                                top: r.top + r.height + 5
                            }))
                        } else this.hide()
                    }
                }, this.show = function() {
                    this.$popover.show()
                }, this.hide = function() {
                    this.$popover.hide()
                }
            };
        $.summernote = $.extend($.summernote, {
            version: "0.8.2",
            ui: ui,
            plugins: {},
            options: {
                modules: {
                    editor: Editor,
                    clipboard: Clipboard,
                    dropzone: Dropzone,
                    codeview: Codeview,
                    statusbar: Statusbar,
                    fullscreen: Fullscreen,
                    handle: Handle,
                    hintPopover: HintPopover,
                    autoLink: AutoLink,
                    autoSync: AutoSync,
                    placeholder: Placeholder,
                    buttons: Buttons,
                    toolbar: Toolbar,
                    linkDialog: LinkDialog,
                    linkPopover: LinkPopover,
                    imageDialog: ImageDialog,
                    imagePopover: ImagePopover,
                    videoDialog: VideoDialog,
                    helpDialog: HelpDialog,
                    airPopover: AirPopover
                },
                buttons: {},
                lang: "en-US",
                toolbar: [
                    ["style", ["style"]],
                    ["font", ["bold", "underline", "clear"]],
                    ["fontname", ["fontname"]],
                    ["color", ["color"]],
                    ["para", ["ul", "ol", "paragraph"]],
                    ["table", ["table"]],
                    ["insert", ["link", "picture", "video"]],
                    ["view", ["fullscreen", "codeview", "help"]]
                ],
                popover: {
                    image: [
                        ["imagesize", ["imageSize100", "imageSize50", "imageSize25"]],
                        ["float", ["floatLeft", "floatRight", "floatNone"]],
                        ["remove", ["removeMedia"]]
                    ],
                    link: [
                        ["link", ["linkDialogShow", "unlink"]]
                    ],
                    air: [
                        ["color", ["color"]],
                        ["font", ["bold", "underline", "clear"]],
                        ["para", ["ul", "paragraph"]],
                        ["table", ["table"]],
                        ["insert", ["link", "picture"]]
                    ]
                },
                airMode: !1,
                width: null,
                height: null,
                focus: !1,
                tabSize: 4,
                styleWithSpan: !0,
                shortcuts: !0,
                textareaAutoSync: !0,
                direction: null,
                styleTags: ["p", "blockquote", "pre", "h1", "h2", "h3", "h4", "h5", "h6"],
                fontNames: ["Arial", "Arial Black", "Comic Sans MS", "Courier New", "Helvetica Neue", "Helvetica", "Impact", "Lucida Grande", "Tahoma", "Times New Roman", "Verdana"],
                fontSizes: ["10", "12", "14", "16", "18", "20", "24", "28", "36", "48"],
                colors: [
                    ["#000000", "#424242", "#636363", "#9C9C94", "#CEC6CE", "#EFEFEF", "#F7F7F7", "#FFFFFF"],
                    ["#FF0000", "#FF9C00", "#FFFF00", "#00FF00", "#00FFFF", "#0000FF", "#9C00FF", "#FF00FF"],
                    ["#F7C6CE", "#FFE7CE", "#FFEFC6", "#D6EFD6", "#CEDEE7", "#CEE7F7", "#D6D6E7", "#E7D6DE"],
                    ["#E79C9C", "#FFC69C", "#FFE79C", "#B5D6A5", "#A5C6CE", "#9CC6EF", "#B5A5D6", "#D6A5BD"],
                    ["#E76363", "#F7AD6B", "#FFD663", "#94BD7B", "#73A5AD", "#6BADDE", "#8C7BC6", "#C67BA5"],
                    ["#CE0000", "#E79439", "#EFC631", "#6BA54A", "#4A7B8C", "#3984C6", "#634AA5", "#A54A7B"],
                    ["#9C0000", "#B56308", "#BD9400", "#397B21", "#104A5A", "#085294", "#311873", "#731842"],
                    ["#630000", "#7B3900", "#846300", "#295218", "#083139", "#003163", "#21104A", "#4A1031"]
                ],
                lineHeights: ["1.0", "1.2", "1.4", "1.5", "1.6", "1.8", "2.0", "3.0"],
                tableClassName: "table table-bordered",
                insertTableMaxSize: {
                    col: 10,
                    row: 10
                },
                dialogsInBody: !1,
                dialogsFade: !1,
                maximumImageFileSize: null,
                callbacks: {
                    onInit: null,
                    onFocus: null,
                    onBlur: null,
                    onEnter: null,
                    onKeyup: null,
                    onKeydown: null,
                    onSubmit: null,
                    onImageUpload: null,
                    onImageUploadError: null
                },
                codemirror: {
                    mode: "text/html",
                    htmlMode: !0,
                    lineNumbers: !0
                },
                keyMap: {
                    pc: {
                        "CTRL+Z": "undo",
                        "CTRL+Y": "redo",
                        TAB: "tab",
                        "SHIFT+TAB": "untab",
                        "CTRL+B": "bold",
                        "CTRL+I": "italic",
                        "CTRL+U": "underline",
                        "CTRL+SHIFT+S": "strikethrough",
                        "CTRL+BACKSLASH": "removeFormat",
                        "CTRL+SHIFT+L": "justifyLeft",
                        "CTRL+SHIFT+E": "justifyCenter",
                        "CTRL+SHIFT+R": "justifyRight",
                        "CTRL+SHIFT+J": "justifyFull",
                        "CTRL+SHIFT+NUM7": "insertUnorderedList",
                        "CTRL+SHIFT+NUM8": "insertOrderedList",
                        "CTRL+LEFTBRACKET": "outdent",
                        "CTRL+RIGHTBRACKET": "indent",
                        "CTRL+NUM0": "formatPara",
                        "CTRL+NUM1": "formatH1",
                        "CTRL+NUM2": "formatH2",
                        "CTRL+NUM3": "formatH3",
                        "CTRL+NUM4": "formatH4",
                        "CTRL+NUM5": "formatH5",
                        "CTRL+NUM6": "formatH6",
                        "CTRL+ENTER": "insertHorizontalRule",
                        "CTRL+K": "linkDialog.show"
                    },
                    mac: {
                        "CMD+Z": "undo",
                        "CMD+SHIFT+Z": "redo",
                        TAB: "tab",
                        "SHIFT+TAB": "untab",
                        "CMD+B": "bold",
                        "CMD+I": "italic",
                        "CMD+U": "underline",
                        "CMD+SHIFT+S": "strikethrough",
                        "CMD+BACKSLASH": "removeFormat",
                        "CMD+SHIFT+L": "justifyLeft",
                        "CMD+SHIFT+E": "justifyCenter",
                        "CMD+SHIFT+R": "justifyRight",
                        "CMD+SHIFT+J": "justifyFull",
                        "CMD+SHIFT+NUM7": "insertUnorderedList",
                        "CMD+SHIFT+NUM8": "insertOrderedList",
                        "CMD+LEFTBRACKET": "outdent",
                        "CMD+RIGHTBRACKET": "indent",
                        "CMD+NUM0": "formatPara",
                        "CMD+NUM1": "formatH1",
                        "CMD+NUM2": "formatH2",
                        "CMD+NUM3": "formatH3",
                        "CMD+NUM4": "formatH4",
                        "CMD+NUM5": "formatH5",
                        "CMD+NUM6": "formatH6",
                        "CMD+ENTER": "insertHorizontalRule",
                        "CMD+K": "linkDialog.show"
                    }
                },
                icons: {
                    align: '<i class="material-icons">format_align_left</i>',
                    alignCenter: "note-icon-align-center",
                    alignJustify: "note-icon-align-justify",
                    alignLeft: '<i class="material-icons">format_align_left</i>',
                    alignRight: "note-icon-align-right",
                    indent: "note-icon-align-indent",
                    outdent: "note-icon-align-outdent",
                    arrowsAlt: "note-icon-arrows-alt",
                    bold: '<i class="material-icons">format_bold</i>',
                    caret: "note-icon-caret",
                    circle: "note-icon-circle",
                    close: "note-icon-close",
                    code: "note-icon-code",
                    eraser: '<i class="material-icons">format_color_reset</i>',
                    font: "note-icon-font",
                    frame: "note-icon-frame",
                    italic: "note-icon-italic",
                    link: "note-icon-link",
                    unlink: "note-icon-chain-broken",
                    magic: "note-icon-magic",
                    menuCheck: "note-icon-check",
                    minus: "note-icon-minus",
                    orderedlist: "note-icon-orderedlist",
                    pencil: "note-icon-pencil",
                    picture: "note-icon-picture",
                    question: "note-icon-question",
                    redo: "note-icon-redo",
                    square: "note-icon-square",
                    strikethrough: "note-icon-strikethrough",
                    subscript: "note-icon-subscript",
                    superscript: "note-icon-superscript",
                    table: "note-icon-table",
                    textHeight: "note-icon-text-height",
                    trash: "note-icon-trash",
                    underline: "note-icon-underline",
                    undo: "note-icon-undo",
                    unorderedlist: "note-icon-unorderedlist",
                    video: "note-icon-video"
                }
            }
        })
    }),
    function(e) {
        function t(e) {
            var t = e.length,
                n = i.type(e);
            return "function" !== n && !i.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
        }
        if (!e.jQuery) {
            var i = function(e, t) {
                return new i.fn.init(e, t)
            };
            i.isWindow = function(e) {
                return null != e && e == e.window
            }, i.type = function(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? o[s.call(e)] || "object" : typeof e
            }, i.isArray = Array.isArray || function(e) {
                return "array" === i.type(e)
            }, i.isPlainObject = function(e) {
                var t;
                if (!e || "object" !== i.type(e) || e.nodeType || i.isWindow(e)) return !1;
                try {
                    if (e.constructor && !a.call(e, "constructor") && !a.call(e.constructor.prototype, "isPrototypeOf")) return !1
                } catch (e) {
                    return !1
                }
                for (t in e);
                return void 0 === t || a.call(e, t)
            }, i.each = function(e, i, n) {
                var o = 0,
                    a = e.length,
                    s = t(e);
                if (n) {
                    if (s)
                        for (; a > o && !1 !== i.apply(e[o], n); o++);
                    else
                        for (o in e)
                            if (!1 === i.apply(e[o], n)) break
                } else if (s)
                    for (; a > o && !1 !== i.call(e[o], o, e[o]); o++);
                else
                    for (o in e)
                        if (!1 === i.call(e[o], o, e[o])) break;
                return e
            }, i.data = function(e, t, o) {
                if (void 0 === o) {
                    var a = (s = e[i.expando]) && n[s];
                    if (void 0 === t) return a;
                    if (a && t in a) return a[t]
                } else if (void 0 !== t) {
                    var s = e[i.expando] || (e[i.expando] = ++i.uuid);
                    return n[s] = n[s] || {}, n[s][t] = o, o
                }
            }, i.removeData = function(e, t) {
                var o = e[i.expando],
                    a = o && n[o];
                a && i.each(t, function(e, t) {
                    delete a[t]
                })
            }, i.extend = function() {
                var e, t, n, o, a, s, r = arguments[0] || {},
                    l = 1,
                    c = arguments.length,
                    d = !1;
                for ("boolean" == typeof r && (d = r, r = arguments[l] || {}, l++), "object" != typeof r && "function" !== i.type(r) && (r = {}), l === c && (r = this, l--); c > l; l++)
                    if (null != (a = arguments[l]))
                        for (o in a) e = r[o], n = a[o], r !== n && (d && n && (i.isPlainObject(n) || (t = i.isArray(n))) ? (t ? (t = !1, s = e && i.isArray(e) ? e : []) : s = e && i.isPlainObject(e) ? e : {}, r[o] = i.extend(d, s, n)) : void 0 !== n && (r[o] = n));
                return r
            }, i.queue = function(e, n, o) {
                if (e) {
                    n = (n || "fx") + "queue";
                    var a = i.data(e, n);
                    return o ? (!a || i.isArray(o) ? a = i.data(e, n, function(e, i) {
                        var n = i || [];
                        return null != e && (t(Object(e)) ? function(e, t) {
                            for (var i = +t.length, n = 0, o = e.length; i > n;) e[o++] = t[n++];
                            if (i != i)
                                for (; void 0 !== t[n];) e[o++] = t[n++];
                            e.length = o
                        }(n, "string" == typeof e ? [e] : e) : [].push.call(n, e)), n
                    }(o)) : a.push(o), a) : a || []
                }
            }, i.dequeue = function(e, t) {
                i.each(e.nodeType ? [e] : e, function(e, n) {
                    t = t || "fx";
                    var o = i.queue(n, t),
                        a = o.shift();
                    "inprogress" === a && (a = o.shift()), a && ("fx" === t && o.unshift("inprogress"), a.call(n, function() {
                        i.dequeue(n, t)
                    }))
                })
            }, i.fn = i.prototype = {
                init: function(e) {
                    if (e.nodeType) return this[0] = e, this;
                    throw new Error("Not a DOM node.")
                },
                offset: function() {
                    var t = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                        top: 0,
                        left: 0
                    };
                    return {
                        top: t.top + (e.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                        left: t.left + (e.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                    }
                },
                position: function() {
                    function e() {
                        for (var e = this.offsetParent || document; e && "html" === !e.nodeType.toLowerCase && "static" === e.style.position;) e = e.offsetParent;
                        return e || document
                    }
                    var t = this[0],
                        e = e.apply(t),
                        n = this.offset(),
                        o = /^(?:body|html)$/i.test(e.nodeName) ? {
                            top: 0,
                            left: 0
                        } : i(e).offset();
                    return n.top -= parseFloat(t.style.marginTop) || 0, n.left -= parseFloat(t.style.marginLeft) || 0, e.style && (o.top += parseFloat(e.style.borderTopWidth) || 0, o.left += parseFloat(e.style.borderLeftWidth) || 0), {
                        top: n.top - o.top,
                        left: n.left - o.left
                    }
                }
            };
            var n = {};
            i.expando = "velocity" + (new Date).getTime(), i.uuid = 0;
            for (var o = {}, a = o.hasOwnProperty, s = o.toString, r = "Boolean Number String Function Array Date RegExp Object Error".split(" "), l = 0; l < r.length; l++) o["[object " + r[l] + "]"] = r[l].toLowerCase();
            i.fn.init.prototype = i.fn, e.Velocity = {
                Utilities: i
            }
        }
    }(window),
    function(e) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : e()
    }(function() {
        return function(e, t, i, n) {
            function o(e) {
                return h.isWrapped(e) ? e = [].slice.call(e) : h.isNode(e) && (e = [e]), e
            }

            function a(e) {
                var t = d.data(e, "velocity");
                return null === t ? n : t
            }

            function s(e, i, n, o) {
                function a(e, t) {
                    return 1 - 3 * t + 3 * e
                }

                function s(e, t) {
                    return 3 * t - 6 * e
                }

                function r(e) {
                    return 3 * e
                }

                function l(e, t, i) {
                    return ((a(t, i) * e + s(t, i)) * e + r(t)) * e
                }

                function c(e, t, i) {
                    return 3 * a(t, i) * e * e + 2 * s(t, i) * e + r(t)
                }

                function d(t) {
                    for (var i = 0, o = 1, a = g - 1; o != a && x[o] <= t; ++o) i += _;
                    var s = i + (t - x[--o]) / (x[o + 1] - x[o]) * _,
                        r = c(s, e, n);
                    return r >= h ? function(t, i) {
                        for (var o = 0; p > o; ++o) {
                            var a = c(i, e, n);
                            if (0 === a) return i;
                            i -= (l(i, e, n) - t) / a
                        }
                        return i
                    }(t, s) : 0 == r ? s : function(t, i, o) {
                        var a, s, r = 0;
                        do {
                            s = i + (o - i) / 2, (a = l(s, e, n) - t) > 0 ? o = s : i = s
                        } while (Math.abs(a) > m && ++r < f);
                        return s
                    }(t, i, i + _)
                }

                function u() {
                    y = !0, (e != i || n != o) && function() {
                        for (var t = 0; g > t; ++t) x[t] = l(t * _, e, n)
                    }()
                }
                var p = 4,
                    h = .001,
                    m = 1e-7,
                    f = 10,
                    g = 11,
                    _ = 1 / (g - 1),
                    v = "Float32Array" in t;
                if (4 !== arguments.length) return !1;
                for (var b = 0; 4 > b; ++b)
                    if ("number" != typeof arguments[b] || isNaN(arguments[b]) || !isFinite(arguments[b])) return !1;
                e = Math.min(e, 1), n = Math.min(n, 1), e = Math.max(e, 0), n = Math.max(n, 0);
                var x = v ? new Float32Array(g) : new Array(g),
                    y = !1,
                    w = function(t) {
                        return y || u(), e === i && n === o ? t : 0 === t ? 0 : 1 === t ? 1 : l(d(t), i, o)
                    };
                w.getControlPoints = function() {
                    return [{
                        x: e,
                        y: i
                    }, {
                        x: n,
                        y: o
                    }]
                };
                var $ = "generateBezier(" + [e, i, n, o] + ")";
                return w.toString = function() {
                    return $
                }, w
            }

            function r(e, t) {
                var i = e;
                return h.isString(e) ? _.Easings[e] || (i = !1) : i = h.isArray(e) && 1 === e.length ? function(e) {
                    return function(t) {
                        return Math.round(t * e) * (1 / e)
                    }
                }.apply(null, e) : h.isArray(e) && 2 === e.length ? v.apply(null, e.concat([t])) : !(!h.isArray(e) || 4 !== e.length) && s.apply(null, e), !1 === i && (i = _.Easings[_.defaults.easing] ? _.defaults.easing : g), i
            }

            function l(e) {
                if (e) {
                    var t = (new Date).getTime(),
                        i = _.State.calls.length;
                    i > 1e4 && (_.State.calls = function(e) {
                        for (var t = -1, i = e ? e.length : 0, n = []; ++t < i;) {
                            var o = e[t];
                            o && n.push(o)
                        }
                        return n
                    }(_.State.calls));
                    for (var o = 0; i > o; o++)
                        if (_.State.calls[o]) {
                            var s = _.State.calls[o],
                                r = s[0],
                                u = s[2],
                                p = s[3],
                                m = !!p,
                                f = null;
                            p || (p = _.State.calls[o][3] = t - 16);
                            for (var g = Math.min((t - p) / u.duration, 1), v = 0, x = r.length; x > v; v++) {
                                var w = r[v],
                                    $ = w.element;
                                if (a($)) {
                                    var k = !1;
                                    if (u.display !== n && null !== u.display && "none" !== u.display) {
                                        if ("flex" === u.display) {
                                            var C = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                                            d.each(C, function(e, t) {
                                                b.setPropertyValue($, "display", t)
                                            })
                                        }
                                        b.setPropertyValue($, "display", u.display)
                                    }
                                    u.visibility !== n && "hidden" !== u.visibility && b.setPropertyValue($, "visibility", u.visibility);
                                    for (var S in w)
                                        if ("element" !== S) {
                                            var T, j = w[S],
                                                E = h.isString(j.easing) ? _.Easings[j.easing] : j.easing;
                                            if (1 === g) T = j.endValue;
                                            else {
                                                var P = j.endValue - j.startValue;
                                                if (T = j.startValue + P * E(g, u, P), !m && T === j.currentValue) continue
                                            }
                                            if (j.currentValue = T, "tween" === S) f = T;
                                            else {
                                                if (b.Hooks.registered[S]) {
                                                    var I = b.Hooks.getRoot(S),
                                                        A = a($).rootPropertyValueCache[I];
                                                    A && (j.rootPropertyValue = A)
                                                }
                                                var F = b.setPropertyValue($, S, j.currentValue + (0 === parseFloat(T) ? "" : j.unitType), j.rootPropertyValue, j.scrollData);
                                                b.Hooks.registered[S] && (a($).rootPropertyValueCache[I] = b.Normalizations.registered[I] ? b.Normalizations.registered[I]("extract", null, F[1]) : F[1]), "transform" === F[0] && (k = !0)
                                            }
                                        }
                                    u.mobileHA && a($).transformCache.translate3d === n && (a($).transformCache.translate3d = "(0px, 0px, 0px)", k = !0), k && b.flushTransformCache($)
                                }
                            }
                            u.display !== n && "none" !== u.display && (_.State.calls[o][2].display = !1), u.visibility !== n && "hidden" !== u.visibility && (_.State.calls[o][2].visibility = !1), u.progress && u.progress.call(s[1], s[1], g, Math.max(0, p + u.duration - t), p, f), 1 === g && c(o)
                        }
                }
                _.State.isTicking && y(l)
            }

            function c(e, t) {
                if (!_.State.calls[e]) return !1;
                for (var i = _.State.calls[e][0], o = _.State.calls[e][1], s = _.State.calls[e][2], r = _.State.calls[e][4], l = !1, c = 0, u = i.length; u > c; c++) {
                    var p = i[c].element;
                    if (t || s.loop || ("none" === s.display && b.setPropertyValue(p, "display", s.display), "hidden" === s.visibility && b.setPropertyValue(p, "visibility", s.visibility)), !0 !== s.loop && (d.queue(p)[1] === n || !/\.velocityQueueEntryFlag/i.test(d.queue(p)[1])) && a(p)) {
                        a(p).isAnimating = !1, a(p).rootPropertyValueCache = {};
                        var h = !1;
                        d.each(b.Lists.transforms3D, function(e, t) {
                            var i = /^scale/.test(t) ? 1 : 0,
                                o = a(p).transformCache[t];
                            a(p).transformCache[t] !== n && new RegExp("^\\(" + i + "[^.]").test(o) && (h = !0, delete a(p).transformCache[t])
                        }), s.mobileHA && (h = !0, delete a(p).transformCache.translate3d), h && b.flushTransformCache(p), b.Values.removeClass(p, "velocity-animating")
                    }
                    if (!t && s.complete && !s.loop && c === u - 1) try {
                        s.complete.call(o, o)
                    } catch (e) {
                        setTimeout(function() {
                            throw e
                        }, 1)
                    }
                    r && !0 !== s.loop && r(o), a(p) && !0 === s.loop && !t && (d.each(a(p).tweensContainer, function(e, t) {
                        /^rotate/.test(e) && 360 === parseFloat(t.endValue) && (t.endValue = 0, t.startValue = 360), /^backgroundPosition/.test(e) && 100 === parseFloat(t.endValue) && "%" === t.unitType && (t.endValue = 0, t.startValue = 100)
                    }), _(p, "reverse", {
                        loop: !0,
                        delay: s.delay
                    })), !1 !== s.queue && d.dequeue(p, s.queue)
                }
                _.State.calls[e] = !1;
                for (var m = 0, f = _.State.calls.length; f > m; m++)
                    if (!1 !== _.State.calls[m]) {
                        l = !0;
                        break
                    }!1 === l && (_.State.isTicking = !1, delete _.State.calls, _.State.calls = [])
            }
            var d, u = function() {
                    if (i.documentMode) return i.documentMode;
                    for (var e = 7; e > 4; e--) {
                        var t = i.createElement("div");
                        if (t.innerHTML = "\x3c!--[if IE " + e + "]><span></span><![endif]--\x3e", t.getElementsByTagName("span").length) return t = null, e
                    }
                    return n
                }(),
                p = function() {
                    var e = 0;
                    return t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function(t) {
                        var i, n = (new Date).getTime();
                        return i = Math.max(0, 16 - (n - e)), e = n + i, setTimeout(function() {
                            t(n + i)
                        }, i)
                    }
                }(),
                h = {
                    isString: function(e) {
                        return "string" == typeof e
                    },
                    isArray: Array.isArray || function(e) {
                        return "[object Array]" === Object.prototype.toString.call(e)
                    },
                    isFunction: function(e) {
                        return "[object Function]" === Object.prototype.toString.call(e)
                    },
                    isNode: function(e) {
                        return e && e.nodeType
                    },
                    isNodeList: function(e) {
                        return "object" == typeof e && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e)) && e.length !== n && (0 === e.length || "object" == typeof e[0] && e[0].nodeType > 0)
                    },
                    isWrapped: function(e) {
                        return e && (e.jquery || t.Zepto && t.Zepto.zepto.isZ(e))
                    },
                    isSVG: function(e) {
                        return t.SVGElement && e instanceof t.SVGElement
                    },
                    isEmptyObject: function(e) {
                        for (var t in e) return !1;
                        return !0
                    }
                },
                m = !1;
            if (e.fn && e.fn.jquery ? (d = e, m = !0) : d = t.Velocity.Utilities, 8 >= u && !m) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
            if (!(7 >= u)) {
                var f = 400,
                    g = "swing",
                    _ = {
                        State: {
                            isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                            isAndroid: /Android/i.test(navigator.userAgent),
                            isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                            isChrome: t.chrome,
                            isFirefox: /Firefox/i.test(navigator.userAgent),
                            prefixElement: i.createElement("div"),
                            prefixMatches: {},
                            scrollAnchor: null,
                            scrollPropertyLeft: null,
                            scrollPropertyTop: null,
                            isTicking: !1,
                            calls: []
                        },
                        CSS: {},
                        Utilities: d,
                        Redirects: {},
                        Easings: {},
                        Promise: t.Promise,
                        defaults: {
                            queue: "",
                            duration: f,
                            easing: g,
                            begin: n,
                            complete: n,
                            progress: n,
                            display: n,
                            visibility: n,
                            loop: !1,
                            delay: !1,
                            mobileHA: !0,
                            _cacheValues: !0
                        },
                        init: function(e) {
                            d.data(e, "velocity", {
                                isSVG: h.isSVG(e),
                                isAnimating: !1,
                                computedStyle: null,
                                tweensContainer: null,
                                rootPropertyValueCache: {},
                                transformCache: {}
                            })
                        },
                        hook: null,
                        mock: !1,
                        version: {
                            major: 1,
                            minor: 2,
                            patch: 2
                        },
                        debug: !1
                    };
                t.pageYOffset !== n ? (_.State.scrollAnchor = t, _.State.scrollPropertyLeft = "pageXOffset", _.State.scrollPropertyTop = "pageYOffset") : (_.State.scrollAnchor = i.documentElement || i.body.parentNode || i.body, _.State.scrollPropertyLeft = "scrollLeft", _.State.scrollPropertyTop = "scrollTop");
                var v = function() {
                    function e(e) {
                        return -e.tension * e.x - e.friction * e.v
                    }

                    function t(t, i, n) {
                        var o = {
                            x: t.x + n.dx * i,
                            v: t.v + n.dv * i,
                            tension: t.tension,
                            friction: t.friction
                        };
                        return {
                            dx: o.v,
                            dv: e(o)
                        }
                    }

                    function i(i, n) {
                        var o = {
                                dx: i.v,
                                dv: e(i)
                            },
                            a = t(i, .5 * n, o),
                            s = t(i, .5 * n, a),
                            r = t(i, n, s),
                            l = 1 / 6 * (o.dx + 2 * (a.dx + s.dx) + r.dx),
                            c = 1 / 6 * (o.dv + 2 * (a.dv + s.dv) + r.dv);
                        return i.x = i.x + l * n, i.v = i.v + c * n, i
                    }
                    return function e(t, n, o) {
                        var a, s, r, l = {
                                x: -1,
                                v: 0,
                                tension: null,
                                friction: null
                            },
                            c = [0],
                            d = 0;
                        for (t = parseFloat(t) || 500, n = parseFloat(n) || 20, o = o || null, l.tension = t, l.friction = n, (a = null !== o) ? (d = e(t, n), s = d / o * .016) : s = .016; r = i(r || l, s), c.push(1 + r.x), d += 16, Math.abs(r.x) > 1e-4 && Math.abs(r.v) > 1e-4;);
                        return a ? function(e) {
                            return c[e * (c.length - 1) | 0]
                        } : d
                    }
                }();
                _.Easings = {
                    linear: function(e) {
                        return e
                    },
                    swing: function(e) {
                        return .5 - Math.cos(e * Math.PI) / 2
                    },
                    spring: function(e) {
                        return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e)
                    }
                }, d.each([
                    ["ease", [.25, .1, .25, 1]],
                    ["ease-in", [.42, 0, 1, 1]],
                    ["ease-out", [0, 0, .58, 1]],
                    ["ease-in-out", [.42, 0, .58, 1]],
                    ["easeInSine", [.47, 0, .745, .715]],
                    ["easeOutSine", [.39, .575, .565, 1]],
                    ["easeInOutSine", [.445, .05, .55, .95]],
                    ["easeInQuad", [.55, .085, .68, .53]],
                    ["easeOutQuad", [.25, .46, .45, .94]],
                    ["easeInOutQuad", [.455, .03, .515, .955]],
                    ["easeInCubic", [.55, .055, .675, .19]],
                    ["easeOutCubic", [.215, .61, .355, 1]],
                    ["easeInOutCubic", [.645, .045, .355, 1]],
                    ["easeInQuart", [.895, .03, .685, .22]],
                    ["easeOutQuart", [.165, .84, .44, 1]],
                    ["easeInOutQuart", [.77, 0, .175, 1]],
                    ["easeInQuint", [.755, .05, .855, .06]],
                    ["easeOutQuint", [.23, 1, .32, 1]],
                    ["easeInOutQuint", [.86, 0, .07, 1]],
                    ["easeInExpo", [.95, .05, .795, .035]],
                    ["easeOutExpo", [.19, 1, .22, 1]],
                    ["easeInOutExpo", [1, 0, 0, 1]],
                    ["easeInCirc", [.6, .04, .98, .335]],
                    ["easeOutCirc", [.075, .82, .165, 1]],
                    ["easeInOutCirc", [.785, .135, .15, .86]]
                ], function(e, t) {
                    _.Easings[t[0]] = s.apply(null, t[1])
                });
                var b = _.CSS = {
                    RegEx: {
                        isHex: /^#([A-f\d]{3}){1,2}$/i,
                        valueUnwrap: /^[A-z]+\((.*)\)$/i,
                        wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                        valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
                    },
                    Lists: {
                        colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                        transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                        transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
                    },
                    Hooks: {
                        templates: {
                            textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                            boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                            clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                            backgroundPosition: ["X Y", "0% 0%"],
                            transformOrigin: ["X Y Z", "50% 50% 0px"],
                            perspectiveOrigin: ["X Y", "50% 50%"]
                        },
                        registered: {},
                        register: function() {
                            for (a = 0; a < b.Lists.colors.length; a++) {
                                var e = "color" === b.Lists.colors[a] ? "0 0 0 1" : "255 255 255 1";
                                b.Hooks.templates[b.Lists.colors[a]] = ["Red Green Blue Alpha", e]
                            }
                            var t, i, n;
                            if (u)
                                for (t in b.Hooks.templates) {
                                    n = (i = b.Hooks.templates[t])[0].split(" ");
                                    var o = i[1].match(b.RegEx.valueSplit);
                                    "Color" === n[0] && (n.push(n.shift()), o.push(o.shift()), b.Hooks.templates[t] = [n.join(" "), o.join(" ")])
                                }
                            for (t in b.Hooks.templates) {
                                n = (i = b.Hooks.templates[t])[0].split(" ");
                                for (var a in n) {
                                    var s = t + n[a],
                                        r = a;
                                    b.Hooks.registered[s] = [t, r]
                                }
                            }
                        },
                        getRoot: function(e) {
                            var t = b.Hooks.registered[e];
                            return t ? t[0] : e
                        },
                        cleanRootPropertyValue: function(e, t) {
                            return b.RegEx.valueUnwrap.test(t) && (t = t.match(b.RegEx.valueUnwrap)[1]), b.Values.isCSSNullValue(t) && (t = b.Hooks.templates[e][1]), t
                        },
                        extractValue: function(e, t) {
                            var i = b.Hooks.registered[e];
                            if (i) {
                                var n = i[0],
                                    o = i[1];
                                return (t = b.Hooks.cleanRootPropertyValue(n, t)).toString().match(b.RegEx.valueSplit)[o]
                            }
                            return t
                        },
                        injectValue: function(e, t, i) {
                            var n = b.Hooks.registered[e];
                            if (n) {
                                var o, a = n[0],
                                    s = n[1];
                                return i = b.Hooks.cleanRootPropertyValue(a, i), o = i.toString().match(b.RegEx.valueSplit), o[s] = t, o.join(" ")
                            }
                            return i
                        }
                    },
                    Normalizations: {
                        registered: {
                            clip: function(e, t, i) {
                                switch (e) {
                                    case "name":
                                        return "clip";
                                    case "extract":
                                        var n;
                                        return b.RegEx.wrappedValueAlreadyExtracted.test(i) ? n = i : (n = i.toString().match(b.RegEx.valueUnwrap), n = n ? n[1].replace(/,(\s+)?/g, " ") : i), n;
                                    case "inject":
                                        return "rect(" + i + ")"
                                }
                            },
                            blur: function(e, t, i) {
                                switch (e) {
                                    case "name":
                                        return _.State.isFirefox ? "filter" : "-webkit-filter";
                                    case "extract":
                                        var n = parseFloat(i);
                                        if (!n && 0 !== n) {
                                            var o = i.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                            n = o ? o[1] : 0
                                        }
                                        return n;
                                    case "inject":
                                        return parseFloat(i) ? "blur(" + i + ")" : "none"
                                }
                            },
                            opacity: function(e, t, i) {
                                if (8 >= u) switch (e) {
                                    case "name":
                                        return "filter";
                                    case "extract":
                                        var n = i.toString().match(/alpha\(opacity=(.*)\)/i);
                                        return i = n ? n[1] / 100 : 1;
                                    case "inject":
                                        return t.style.zoom = 1, parseFloat(i) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(i), 10) + ")"
                                } else switch (e) {
                                    case "name":
                                        return "opacity";
                                    case "extract":
                                    case "inject":
                                        return i
                                }
                            }
                        },
                        register: function() {
                            9 >= u || _.State.isGingerbread || (b.Lists.transformsBase = b.Lists.transformsBase.concat(b.Lists.transforms3D));
                            for (e = 0; e < b.Lists.transformsBase.length; e++) ! function() {
                                var t = b.Lists.transformsBase[e];
                                b.Normalizations.registered[t] = function(e, i, o) {
                                    switch (e) {
                                        case "name":
                                            return "transform";
                                        case "extract":
                                            return a(i) === n || a(i).transformCache[t] === n ? /^scale/i.test(t) ? 1 : 0 : a(i).transformCache[t].replace(/[()]/g, "");
                                        case "inject":
                                            var s = !1;
                                            switch (t.substr(0, t.length - 1)) {
                                                case "translate":
                                                    s = !/(%|px|em|rem|vw|vh|\d)$/i.test(o);
                                                    break;
                                                case "scal":
                                                case "scale":
                                                    _.State.isAndroid && a(i).transformCache[t] === n && 1 > o && (o = 1), s = !/(\d)$/i.test(o);
                                                    break;
                                                case "skew":
                                                    s = !/(deg|\d)$/i.test(o);
                                                    break;
                                                case "rotate":
                                                    s = !/(deg|\d)$/i.test(o)
                                            }
                                            return s || (a(i).transformCache[t] = "(" + o + ")"), a(i).transformCache[t]
                                    }
                                }
                            }();
                            for (var e = 0; e < b.Lists.colors.length; e++) ! function() {
                                var t = b.Lists.colors[e];
                                b.Normalizations.registered[t] = function(e, i, o) {
                                    switch (e) {
                                        case "name":
                                            return t;
                                        case "extract":
                                            var a;
                                            if (b.RegEx.wrappedValueAlreadyExtracted.test(o)) a = o;
                                            else {
                                                var s, r = {
                                                    black: "rgb(0, 0, 0)",
                                                    blue: "rgb(0, 0, 255)",
                                                    gray: "rgb(128, 128, 128)",
                                                    green: "rgb(0, 128, 0)",
                                                    red: "rgb(255, 0, 0)",
                                                    white: "rgb(255, 255, 255)"
                                                };
                                                /^[A-z]+$/i.test(o) ? s = r[o] !== n ? r[o] : r.black : b.RegEx.isHex.test(o) ? s = "rgb(" + b.Values.hexToRgb(o).join(" ") + ")" : /^rgba?\(/i.test(o) || (s = r.black), a = (s || o).toString().match(b.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                            }
                                            return 8 >= u || 3 !== a.split(" ").length || (a += " 1"), a;
                                        case "inject":
                                            return 8 >= u ? 4 === o.split(" ").length && (o = o.split(/\s+/).slice(0, 3).join(" ")) : 3 === o.split(" ").length && (o += " 1"), (8 >= u ? "rgb" : "rgba") + "(" + o.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                                    }
                                }
                            }()
                        }
                    },
                    Names: {
                        camelCase: function(e) {
                            return e.replace(/-(\w)/g, function(e, t) {
                                return t.toUpperCase()
                            })
                        },
                        SVGAttribute: function(e) {
                            var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                            return (u || _.State.isAndroid && !_.State.isChrome) && (t += "|transform"), new RegExp("^(" + t + ")$", "i").test(e)
                        },
                        prefixCheck: function(e) {
                            if (_.State.prefixMatches[e]) return [_.State.prefixMatches[e], !0];
                            for (var t = ["", "Webkit", "Moz", "ms", "O"], i = 0, n = t.length; n > i; i++) {
                                var o;
                                if (o = 0 === i ? e : t[i] + e.replace(/^\w/, function(e) {
                                        return e.toUpperCase()
                                    }), h.isString(_.State.prefixElement.style[o])) return _.State.prefixMatches[e] = o, [o, !0]
                            }
                            return [e, !1]
                        }
                    },
                    Values: {
                        hexToRgb: function(e) {
                            var t;
                            return e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(e, t, i, n) {
                                return t + t + i + i + n + n
                            }), (t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e)) ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] : [0, 0, 0]
                        },
                        isCSSNullValue: function(e) {
                            return 0 == e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)
                        },
                        getUnitType: function(e) {
                            return /^(rotate|skew)/i.test(e) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e) ? "" : "px"
                        },
                        getDisplayType: function(e) {
                            var t = e && e.tagName.toString().toLowerCase();
                            return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t) ? "inline" : /^(li)$/i.test(t) ? "list-item" : /^(tr)$/i.test(t) ? "table-row" : /^(table)$/i.test(t) ? "table" : /^(tbody)$/i.test(t) ? "table-row-group" : "block"
                        },
                        addClass: function(e, t) {
                            e.classList ? e.classList.add(t) : e.className += (e.className.length ? " " : "") + t
                        },
                        removeClass: function(e, t) {
                            e.classList ? e.classList.remove(t) : e.className = e.className.toString().replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)", "gi"), " ")
                        }
                    },
                    getPropertyValue: function(e, i, o, s) {
                        function r(e, i) {
                            function o() {
                                c && b.setPropertyValue(e, "display", "none")
                            }
                            var l = 0;
                            if (8 >= u) l = d.css(e, i);
                            else {
                                var c = !1;
                                if (/^(width|height)$/.test(i) && 0 === b.getPropertyValue(e, "display") && (c = !0, b.setPropertyValue(e, "display", b.Values.getDisplayType(e))), !s) {
                                    if ("height" === i && "border-box" !== b.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                        var p = e.offsetHeight - (parseFloat(b.getPropertyValue(e, "borderTopWidth")) || 0) - (parseFloat(b.getPropertyValue(e, "borderBottomWidth")) || 0) - (parseFloat(b.getPropertyValue(e, "paddingTop")) || 0) - (parseFloat(b.getPropertyValue(e, "paddingBottom")) || 0);
                                        return o(), p
                                    }
                                    if ("width" === i && "border-box" !== b.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                        var h = e.offsetWidth - (parseFloat(b.getPropertyValue(e, "borderLeftWidth")) || 0) - (parseFloat(b.getPropertyValue(e, "borderRightWidth")) || 0) - (parseFloat(b.getPropertyValue(e, "paddingLeft")) || 0) - (parseFloat(b.getPropertyValue(e, "paddingRight")) || 0);
                                        return o(), h
                                    }
                                }
                                var m;
                                m = a(e) === n ? t.getComputedStyle(e, null) : a(e).computedStyle ? a(e).computedStyle : a(e).computedStyle = t.getComputedStyle(e, null), "borderColor" === i && (i = "borderTopColor"), ("" === (l = 9 === u && "filter" === i ? m.getPropertyValue(i) : m[i]) || null === l) && (l = e.style[i]), o()
                            }
                            if ("auto" === l && /^(top|right|bottom|left)$/i.test(i)) {
                                var f = r(e, "position");
                                ("fixed" === f || "absolute" === f && /top|left/i.test(i)) && (l = d(e).position()[i] + "px")
                            }
                            return l
                        }
                        var l;
                        if (b.Hooks.registered[i]) {
                            var c = i,
                                p = b.Hooks.getRoot(c);
                            o === n && (o = b.getPropertyValue(e, b.Names.prefixCheck(p)[0])), b.Normalizations.registered[p] && (o = b.Normalizations.registered[p]("extract", e, o)), l = b.Hooks.extractValue(c, o)
                        } else if (b.Normalizations.registered[i]) {
                            var h, m;
                            "transform" !== (h = b.Normalizations.registered[i]("name", e)) && (m = r(e, b.Names.prefixCheck(h)[0]), b.Values.isCSSNullValue(m) && b.Hooks.templates[i] && (m = b.Hooks.templates[i][1])), l = b.Normalizations.registered[i]("extract", e, m)
                        }
                        if (!/^[\d-]/.test(l))
                            if (a(e) && a(e).isSVG && b.Names.SVGAttribute(i))
                                if (/^(height|width)$/i.test(i)) try {
                                    l = e.getBBox()[i]
                                } catch (e) {
                                    l = 0
                                } else l = e.getAttribute(i);
                                else l = r(e, b.Names.prefixCheck(i)[0]);
                        return b.Values.isCSSNullValue(l) && (l = 0), _.debug >= 2 && console.log("Get " + i + ": " + l), l
                    },
                    setPropertyValue: function(e, i, n, o, s) {
                        var r = i;
                        if ("scroll" === i) s.container ? s.container["scroll" + s.direction] = n : "Left" === s.direction ? t.scrollTo(n, s.alternateValue) : t.scrollTo(s.alternateValue, n);
                        else if (b.Normalizations.registered[i] && "transform" === b.Normalizations.registered[i]("name", e)) b.Normalizations.registered[i]("inject", e, n), r = "transform", n = a(e).transformCache[i];
                        else {
                            if (b.Hooks.registered[i]) {
                                var l = i,
                                    c = b.Hooks.getRoot(i);
                                o = o || b.getPropertyValue(e, c), n = b.Hooks.injectValue(l, n, o), i = c
                            }
                            if (b.Normalizations.registered[i] && (n = b.Normalizations.registered[i]("inject", e, n), i = b.Normalizations.registered[i]("name", e)), r = b.Names.prefixCheck(i)[0], 8 >= u) try {
                                e.style[r] = n
                            } catch (e) {
                                _.debug && console.log("Browser does not support [" + n + "] for [" + r + "]")
                            } else a(e) && a(e).isSVG && b.Names.SVGAttribute(i) ? e.setAttribute(i, n) : e.style[r] = n;
                            _.debug >= 2 && console.log("Set " + i + " (" + r + "): " + n)
                        }
                        return [r, n]
                    },
                    flushTransformCache: function(e) {
                        function t(t) {
                            return parseFloat(b.getPropertyValue(e, t))
                        }
                        var i = "";
                        if ((u || _.State.isAndroid && !_.State.isChrome) && a(e).isSVG) {
                            var n = {
                                translate: [t("translateX"), t("translateY")],
                                skewX: [t("skewX")],
                                skewY: [t("skewY")],
                                scale: 1 !== t("scale") ? [t("scale"), t("scale")] : [t("scaleX"), t("scaleY")],
                                rotate: [t("rotateZ"), 0, 0]
                            };
                            d.each(a(e).transformCache, function(e) {
                                /^translate/i.test(e) ? e = "translate" : /^scale/i.test(e) ? e = "scale" : /^rotate/i.test(e) && (e = "rotate"), n[e] && (i += e + "(" + n[e].join(" ") + ") ", delete n[e])
                            })
                        } else {
                            var o, s;
                            d.each(a(e).transformCache, function(t) {
                                return o = a(e).transformCache[t], "transformPerspective" === t ? (s = o, !0) : (9 === u && "rotateZ" === t && (t = "rotate"), void(i += t + o + " "))
                            }), s && (i = "perspective" + s + " " + i)
                        }
                        b.setPropertyValue(e, "transform", i)
                    }
                };
                b.Hooks.register(), b.Normalizations.register(), _.hook = function(e, t, i) {
                    var s = n;
                    return e = o(e), d.each(e, function(e, o) {
                        if (a(o) === n && _.init(o), i === n) s === n && (s = _.CSS.getPropertyValue(o, t));
                        else {
                            var r = _.CSS.setPropertyValue(o, t, i);
                            "transform" === r[0] && _.CSS.flushTransformCache(o), s = r
                        }
                    }), s
                };
                var x = function() {
                    function e() {
                        return s ? C.promise || null : u
                    }
                    var s, u, p, m, g, v, y = arguments[0] && (arguments[0].p || d.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || h.isString(arguments[0].properties));
                    if (h.isWrapped(this) ? (s = !1, p = 0, m = this, u = this) : (s = !0, p = 1, m = y ? arguments[0].elements || arguments[0].e : arguments[0]), m = o(m)) {
                        y ? (g = arguments[0].properties || arguments[0].p, v = arguments[0].options || arguments[0].o) : (g = arguments[p], v = arguments[p + 1]);
                        var w = m.length,
                            $ = 0;
                        if (!/^(stop|finish)$/i.test(g) && !d.isPlainObject(v)) {
                            v = {};
                            for (var k = p + 1; k < arguments.length; k++) h.isArray(arguments[k]) || !/^(fast|normal|slow)$/i.test(arguments[k]) && !/^\d/.test(arguments[k]) ? h.isString(arguments[k]) || h.isArray(arguments[k]) ? v.easing = arguments[k] : h.isFunction(arguments[k]) && (v.complete = arguments[k]) : v.duration = arguments[k]
                        }
                        var C = {
                            promise: null,
                            resolver: null,
                            rejecter: null
                        };
                        s && _.Promise && (C.promise = new _.Promise(function(e, t) {
                            C.resolver = e, C.rejecter = t
                        }));
                        var S;
                        switch (g) {
                            case "scroll":
                                S = "scroll";
                                break;
                            case "reverse":
                                S = "reverse";
                                break;
                            case "finish":
                            case "stop":
                                d.each(m, function(e, t) {
                                    a(t) && a(t).delayTimer && (clearTimeout(a(t).delayTimer.setTimeout), a(t).delayTimer.next && a(t).delayTimer.next(), delete a(t).delayTimer)
                                });
                                var T = [];
                                return d.each(_.State.calls, function(e, t) {
                                    t && d.each(t[1], function(i, o) {
                                        var s = v === n ? "" : v;
                                        return !0 !== s && t[2].queue !== s && (v !== n || !1 !== t[2].queue) || void d.each(m, function(i, n) {
                                            n === o && ((!0 === v || h.isString(v)) && (d.each(d.queue(n, h.isString(v) ? v : ""), function(e, t) {
                                                h.isFunction(t) && t(null, !0)
                                            }), d.queue(n, h.isString(v) ? v : "", [])), "stop" === g ? (a(n) && a(n).tweensContainer && !1 !== s && d.each(a(n).tweensContainer, function(e, t) {
                                                t.endValue = t.currentValue
                                            }), T.push(e)) : "finish" === g && (t[2].duration = 1))
                                        })
                                    })
                                }), "stop" === g && (d.each(T, function(e, t) {
                                    c(t, !0)
                                }), C.promise && C.resolver(m)), e();
                            default:
                                if (!d.isPlainObject(g) || h.isEmptyObject(g)) {
                                    if (h.isString(g) && _.Redirects[g]) {
                                        var j = (D = d.extend({}, v)).duration,
                                            E = D.delay || 0;
                                        return !0 === D.backwards && (m = d.extend(!0, [], m).reverse()), d.each(m, function(e, t) {
                                            parseFloat(D.stagger) ? D.delay = E + parseFloat(D.stagger) * e : h.isFunction(D.stagger) && (D.delay = E + D.stagger.call(t, e, w)), D.drag && (D.duration = parseFloat(j) || (/^(callout|transition)/.test(g) ? 1e3 : f), D.duration = Math.max(D.duration * (D.backwards ? 1 - e / w : (e + 1) / w), .75 * D.duration, 200)), _.Redirects[g].call(t, t, D || {}, e, w, m, C.promise ? C : n)
                                        }), e()
                                    }
                                    var P = "Velocity: First argument (" + g + ") was not a property map, a known action, or a registered redirect. Aborting.";
                                    return C.promise ? C.rejecter(new Error(P)) : console.log(P), e()
                                }
                                S = "start"
                        }
                        var I = {
                                lastParent: null,
                                lastPosition: null,
                                lastFontSize: null,
                                lastPercentToPxWidth: null,
                                lastPercentToPxHeight: null,
                                lastEmToPx: null,
                                remToPx: null,
                                vwToPx: null,
                                vhToPx: null
                            },
                            A = [];
                        d.each(m, function(e, o) {
                            h.isNode(o) && function() {
                                function e(e) {
                                    function p(e, t) {
                                        var i = n,
                                            o = n,
                                            a = n;
                                        return h.isArray(e) ? (i = e[0], !h.isArray(e[1]) && /^[\d-]/.test(e[1]) || h.isFunction(e[1]) || b.RegEx.isHex.test(e[1]) ? a = e[1] : (h.isString(e[1]) && !b.RegEx.isHex.test(e[1]) || h.isArray(e[1])) && (o = t ? e[1] : r(e[1], c.duration), e[2] !== n && (a = e[2]))) : i = e, t || (o = o || c.easing), h.isFunction(i) && (i = i.call(s, $, w)), h.isFunction(a) && (a = a.call(s, $, w)), [i || 0, o, a]
                                    }

                                    function f(e, t) {
                                        var i, n;
                                        return n = (t || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(e) {
                                            return i = e, ""
                                        }), i || (i = b.Values.getUnitType(e)), [n, i]
                                    }

                                    function x() {
                                        var e = {
                                                myParent: s.parentNode || i.body,
                                                position: b.getPropertyValue(s, "position"),
                                                fontSize: b.getPropertyValue(s, "fontSize")
                                            },
                                            n = e.position === I.lastPosition && e.myParent === I.lastParent,
                                            o = e.fontSize === I.lastFontSize;
                                        I.lastParent = e.myParent, I.lastPosition = e.position, I.lastFontSize = e.fontSize;
                                        var r = {};
                                        if (o && n) r.emToPx = I.lastEmToPx, r.percentToPxWidth = I.lastPercentToPxWidth, r.percentToPxHeight = I.lastPercentToPxHeight;
                                        else {
                                            var l = a(s).isSVG ? i.createElementNS("http://www.w3.org/2000/svg", "rect") : i.createElement("div");
                                            _.init(l), e.myParent.appendChild(l), d.each(["overflow", "overflowX", "overflowY"], function(e, t) {
                                                _.CSS.setPropertyValue(l, t, "hidden")
                                            }), _.CSS.setPropertyValue(l, "position", e.position), _.CSS.setPropertyValue(l, "fontSize", e.fontSize), _.CSS.setPropertyValue(l, "boxSizing", "content-box"), d.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(e, t) {
                                                _.CSS.setPropertyValue(l, t, "100%")
                                            }), _.CSS.setPropertyValue(l, "paddingLeft", "100em"), r.percentToPxWidth = I.lastPercentToPxWidth = (parseFloat(b.getPropertyValue(l, "width", null, !0)) || 1) / 100, r.percentToPxHeight = I.lastPercentToPxHeight = (parseFloat(b.getPropertyValue(l, "height", null, !0)) || 1) / 100, r.emToPx = I.lastEmToPx = (parseFloat(b.getPropertyValue(l, "paddingLeft")) || 1) / 100, e.myParent.removeChild(l)
                                        }
                                        return null === I.remToPx && (I.remToPx = parseFloat(b.getPropertyValue(i.body, "fontSize")) || 16), null === I.vwToPx && (I.vwToPx = parseFloat(t.innerWidth) / 100, I.vhToPx = parseFloat(t.innerHeight) / 100), r.remToPx = I.remToPx, r.vwToPx = I.vwToPx, r.vhToPx = I.vhToPx, _.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(r), s), r
                                    }
                                    if (c.begin && 0 === $) try {
                                        c.begin.call(m, m)
                                    } catch (e) {
                                        setTimeout(function() {
                                            throw e
                                        }, 1)
                                    }
                                    if ("scroll" === S) {
                                        var y, k, T, j = /^x$/i.test(c.axis) ? "Left" : "Top",
                                            E = parseFloat(c.offset) || 0;
                                        c.container ? h.isWrapped(c.container) || h.isNode(c.container) ? (c.container = c.container[0] || c.container, y = c.container["scroll" + j], T = y + d(s).position()[j.toLowerCase()] + E) : c.container = null : (y = _.State.scrollAnchor[_.State["scrollProperty" + j]], k = _.State.scrollAnchor[_.State["scrollProperty" + ("Left" === j ? "Top" : "Left")]], T = d(s).offset()[j.toLowerCase()] + E), u = {
                                            scroll: {
                                                rootPropertyValue: !1,
                                                startValue: y,
                                                currentValue: y,
                                                endValue: T,
                                                unitType: "",
                                                easing: c.easing,
                                                scrollData: {
                                                    container: c.container,
                                                    direction: j,
                                                    alternateValue: k
                                                }
                                            },
                                            element: s
                                        }, _.debug && console.log("tweensContainer (scroll): ", u.scroll, s)
                                    } else if ("reverse" === S) {
                                        if (!a(s).tweensContainer) return void d.dequeue(s, c.queue);
                                        "none" === a(s).opts.display && (a(s).opts.display = "auto"), "hidden" === a(s).opts.visibility && (a(s).opts.visibility = "visible"), a(s).opts.loop = !1, a(s).opts.begin = null, a(s).opts.complete = null, v.easing || delete c.easing, v.duration || delete c.duration, c = d.extend({}, a(s).opts, c), D = d.extend(!0, {}, a(s).tweensContainer);
                                        for (var P in D)
                                            if ("element" !== P) {
                                                var F = D[P].startValue;
                                                D[P].startValue = D[P].currentValue = D[P].endValue, D[P].endValue = F, h.isEmptyObject(v) || (D[P].easing = c.easing), _.debug && console.log("reverse tweensContainer (" + P + "): " + JSON.stringify(D[P]), s)
                                            }
                                        u = D
                                    } else if ("start" === S) {
                                        var D;
                                        a(s).tweensContainer && !0 === a(s).isAnimating && (D = a(s).tweensContainer), d.each(g, function(e, t) {
                                            if (RegExp("^" + b.Lists.colors.join("$|^") + "$").test(e)) {
                                                var i = p(t, !0),
                                                    o = i[0],
                                                    a = i[1],
                                                    s = i[2];
                                                if (b.RegEx.isHex.test(o)) {
                                                    for (var r = ["Red", "Green", "Blue"], l = b.Values.hexToRgb(o), c = s ? b.Values.hexToRgb(s) : n, d = 0; d < r.length; d++) {
                                                        var u = [l[d]];
                                                        a && u.push(a), c !== n && u.push(c[d]), g[e + r[d]] = u
                                                    }
                                                    delete g[e]
                                                }
                                            }
                                        });
                                        for (var B in g) {
                                            var L = p(g[B]),
                                                N = L[0],
                                                z = L[1],
                                                M = L[2];
                                            B = b.Names.camelCase(B);
                                            var O = b.Hooks.getRoot(B),
                                                R = !1;
                                            if (a(s).isSVG || "tween" === O || !1 !== b.Names.prefixCheck(O)[1] || b.Normalizations.registered[O] !== n) {
                                                (c.display !== n && null !== c.display && "none" !== c.display || c.visibility !== n && "hidden" !== c.visibility) && /opacity|filter/.test(B) && !M && 0 !== N && (M = 0), c._cacheValues && D && D[B] ? (M === n && (M = D[B].endValue + D[B].unitType), R = a(s).rootPropertyValueCache[O]) : b.Hooks.registered[B] ? M === n ? (R = b.getPropertyValue(s, O), M = b.getPropertyValue(s, B, R)) : R = b.Hooks.templates[O][1] : M === n && (M = b.getPropertyValue(s, B));
                                                var H, V, Y, X = !1;
                                                if (H = f(B, M), M = H[0], Y = H[1], H = f(B, N), N = H[0].replace(/^([+-\/*])=/, function(e, t) {
                                                        return X = t, ""
                                                    }), V = H[1], M = parseFloat(M) || 0, N = parseFloat(N) || 0, "%" === V && (/^(fontSize|lineHeight)$/.test(B) ? (N /= 100, V = "em") : /^scale/.test(B) ? (N /= 100, V = "") : /(Red|Green|Blue)$/i.test(B) && (N = N / 100 * 255, V = "")), /[\/*]/.test(X)) V = Y;
                                                else if (Y !== V && 0 !== M)
                                                    if (0 === N) V = Y;
                                                    else {
                                                        o = o || x();
                                                        var U = /margin|padding|left|right|width|text|word|letter/i.test(B) || /X$/.test(B) || "x" === B ? "x" : "y";
                                                        switch (Y) {
                                                            case "%":
                                                                M *= "x" === U ? o.percentToPxWidth : o.percentToPxHeight;
                                                                break;
                                                            case "px":
                                                                break;
                                                            default:
                                                                M *= o[Y + "ToPx"]
                                                        }
                                                        switch (V) {
                                                            case "%":
                                                                M *= 1 / ("x" === U ? o.percentToPxWidth : o.percentToPxHeight);
                                                                break;
                                                            case "px":
                                                                break;
                                                            default:
                                                                M *= 1 / o[V + "ToPx"]
                                                        }
                                                    }
                                                switch (X) {
                                                    case "+":
                                                        N = M + N;
                                                        break;
                                                    case "-":
                                                        N = M - N;
                                                        break;
                                                    case "*":
                                                        N *= M;
                                                        break;
                                                    case "/":
                                                        N = M / N
                                                }
                                                u[B] = {
                                                    rootPropertyValue: R,
                                                    startValue: M,
                                                    currentValue: M,
                                                    endValue: N,
                                                    unitType: V,
                                                    easing: z
                                                }, _.debug && console.log("tweensContainer (" + B + "): " + JSON.stringify(u[B]), s)
                                            } else _.debug && console.log("Skipping [" + O + "] due to a lack of browser support.")
                                        }
                                        u.element = s
                                    }
                                    u.element && (b.Values.addClass(s, "velocity-animating"), A.push(u), "" === c.queue && (a(s).tweensContainer = u, a(s).opts = c), a(s).isAnimating = !0, $ === w - 1 ? (_.State.calls.push([A, m, c, null, C.resolver]), !1 === _.State.isTicking && (_.State.isTicking = !0, l())) : $++)
                                }
                                var o, s = this,
                                    c = d.extend({}, _.defaults, v),
                                    u = {};
                                switch (a(s) === n && _.init(s), parseFloat(c.delay) && !1 !== c.queue && d.queue(s, c.queue, function(e) {
                                    _.velocityQueueEntryFlag = !0, a(s).delayTimer = {
                                        setTimeout: setTimeout(e, parseFloat(c.delay)),
                                        next: e
                                    }
                                }), c.duration.toString().toLowerCase()) {
                                    case "fast":
                                        c.duration = 200;
                                        break;
                                    case "normal":
                                        c.duration = f;
                                        break;
                                    case "slow":
                                        c.duration = 600;
                                        break;
                                    default:
                                        c.duration = parseFloat(c.duration) || 1
                                }!1 !== _.mock && (!0 === _.mock ? c.duration = c.delay = 1 : (c.duration *= parseFloat(_.mock) || 1, c.delay *= parseFloat(_.mock) || 1)), c.easing = r(c.easing, c.duration), c.begin && !h.isFunction(c.begin) && (c.begin = null), c.progress && !h.isFunction(c.progress) && (c.progress = null), c.complete && !h.isFunction(c.complete) && (c.complete = null), c.display !== n && null !== c.display && (c.display = c.display.toString().toLowerCase(), "auto" === c.display && (c.display = _.CSS.Values.getDisplayType(s))), c.visibility !== n && null !== c.visibility && (c.visibility = c.visibility.toString().toLowerCase()), c.mobileHA = c.mobileHA && _.State.isMobile && !_.State.isGingerbread, !1 === c.queue ? c.delay ? setTimeout(e, c.delay) : e() : d.queue(s, c.queue, function(t, i) {
                                    return !0 === i ? (C.promise && C.resolver(m), !0) : (_.velocityQueueEntryFlag = !0, void e())
                                }), "" !== c.queue && "fx" !== c.queue || "inprogress" === d.queue(s)[0] || d.dequeue(s)
                            }.call(o)
                        });
                        var F, D = d.extend({}, _.defaults, v);
                        if (D.loop = parseInt(D.loop), F = 2 * D.loop - 1, D.loop)
                            for (var B = 0; F > B; B++) {
                                var L = {
                                    delay: D.delay,
                                    progress: D.progress
                                };
                                B === F - 1 && (L.display = D.display, L.visibility = D.visibility, L.complete = D.complete), x(m, "reverse", L)
                            }
                        return e()
                    }
                };
                (_ = d.extend(x, _)).animate = x;
                var y = t.requestAnimationFrame || p;
                return _.State.isMobile || i.hidden === n || i.addEventListener("visibilitychange", function() {
                    i.hidden ? (y = function(e) {
                        return setTimeout(function() {
                            e(!0)
                        }, 16)
                    }, l()) : y = t.requestAnimationFrame || p
                }), e.Velocity = _, e !== t && (e.fn.velocity = x, e.fn.velocity.defaults = _.defaults), d.each(["Down", "Up"], function(e, t) {
                    _.Redirects["slide" + t] = function(e, i, o, a, s, r) {
                        var l = d.extend({}, i),
                            c = l.begin,
                            u = l.complete,
                            p = {
                                height: "",
                                marginTop: "",
                                marginBottom: "",
                                paddingTop: "",
                                paddingBottom: ""
                            },
                            h = {};
                        l.display === n && (l.display = "Down" === t ? "inline" === _.CSS.Values.getDisplayType(e) ? "inline-block" : "block" : "none"), l.begin = function() {
                            c && c.call(s, s);
                            for (var i in p) {
                                h[i] = e.style[i];
                                var n = _.CSS.getPropertyValue(e, i);
                                p[i] = "Down" === t ? [n, 0] : [0, n]
                            }
                            h.overflow = e.style.overflow, e.style.overflow = "hidden"
                        }, l.complete = function() {
                            for (var t in h) e.style[t] = h[t];
                            u && u.call(s, s), r && r.resolver(s)
                        }, _(e, p, l)
                    }
                }), d.each(["In", "Out"], function(e, t) {
                    _.Redirects["fade" + t] = function(e, i, o, a, s, r) {
                        var l = d.extend({}, i),
                            c = {
                                opacity: "In" === t ? 1 : 0
                            },
                            u = l.complete;
                        l.complete = o !== a - 1 ? l.begin = null : function() {
                            u && u.call(s, s), r && r.resolver(s)
                        }, l.display === n && (l.display = "In" === t ? "auto" : "none"), _(this, c, l)
                    }
                }), _
            }
            jQuery.fn.velocity = jQuery.fn.animate
        }(window.jQuery || window.Zepto || window, window, document)
    }),
    function(e) {
        "function" == typeof require && "object" == typeof exports ? module.exports = e() : "function" == typeof define && define.amd ? define(["velocity"], e) : e()
    }(function() {
        return function(e, t, i, n) {
            if (e.Velocity && e.Velocity.Utilities) {
                var o = e.Velocity,
                    a = o.Utilities;
                if (function(e, t) {
                        var i = [];
                        return !(!e || !t) && (a.each([e, t], function(e, t) {
                            var n = [];
                            a.each(t, function(e, t) {
                                for (; t.toString().length < 5;) t = "0" + t;
                                n.push(t)
                            }), i.push(n.join(""))
                        }), parseFloat(i[0]) > parseFloat(i[1]))
                    }({
                        major: 1,
                        minor: 1,
                        patch: 0
                    }, o.version)) {
                    var s = "Velocity UI Pack: You need to update Velocity (jquery.velocity.js) to a newer version. Visit http://github.com/julianshapiro/velocity.";
                    throw alert(s), new Error(s)
                }
                o.RegisterEffect = o.RegisterUI = function(e, t) {
                    function i(e, t, i, n) {
                        var s, r = 0;
                        a.each(e.nodeType ? [e] : e, function(e, t) {
                            n && (i += e * n), s = t.parentNode, a.each(["height", "paddingTop", "paddingBottom", "marginTop", "marginBottom"], function(e, i) {
                                r += parseFloat(o.CSS.getPropertyValue(t, i))
                            })
                        }), o.animate(s, {
                            height: ("In" === t ? "+" : "-") + "=" + r
                        }, {
                            queue: !1,
                            easing: "ease-in-out",
                            duration: i * ("In" === t ? .6 : 1)
                        })
                    }
                    return o.Redirects[e] = function(s, r, l, c, d, u) {
                        function p() {
                            r.display !== n && "none" !== r.display || !/Out$/.test(e) || a.each(d.nodeType ? [d] : d, function(e, t) {
                                o.CSS.setPropertyValue(t, "display", "none")
                            }), r.complete && r.complete.call(d, d), u && u.resolver(d || s)
                        }
                        var h = l === c - 1;
                        t.defaultDuration = "function" == typeof t.defaultDuration ? t.defaultDuration.call(d, d) : parseFloat(t.defaultDuration);
                        for (var m = 0; m < t.calls.length; m++) {
                            var f = t.calls[m],
                                g = f[0],
                                _ = r.duration || t.defaultDuration || 1e3,
                                v = f[1],
                                b = f[2] || {},
                                x = {};
                            if (x.duration = _ * (v || 1), x.queue = r.queue || "", x.easing = b.easing || "ease", x.delay = parseFloat(b.delay) || 0, x._cacheValues = b._cacheValues || !0, 0 === m) {
                                if (x.delay += parseFloat(r.delay) || 0, 0 === l && (x.begin = function() {
                                        r.begin && r.begin.call(d, d);
                                        var t = e.match(/(In|Out)$/);
                                        t && "In" === t[0] && g.opacity !== n && a.each(d.nodeType ? [d] : d, function(e, t) {
                                            o.CSS.setPropertyValue(t, "opacity", 0)
                                        }), r.animateParentHeight && t && i(d, t[0], _ + x.delay, r.stagger)
                                    }), null !== r.display)
                                    if (r.display !== n && "none" !== r.display) x.display = r.display;
                                    else if (/In$/.test(e)) {
                                    var y = o.CSS.Values.getDisplayType(s);
                                    x.display = "inline" === y ? "inline-block" : y
                                }
                                r.visibility && "hidden" !== r.visibility && (x.visibility = r.visibility)
                            }
                            m === t.calls.length - 1 && (x.complete = function() {
                                if (t.reset) {
                                    for (var e in t.reset) {
                                        var i = t.reset[e];
                                        o.CSS.Hooks.registered[e] !== n || "string" != typeof i && "number" != typeof i || (t.reset[e] = [t.reset[e], t.reset[e]])
                                    }
                                    var a = {
                                        duration: 0,
                                        queue: !1
                                    };
                                    h && (a.complete = p), o.animate(s, t.reset, a)
                                } else h && p()
                            }, "hidden" === r.visibility && (x.visibility = r.visibility)), o.animate(s, g, x)
                        }
                    }, o
                }, o.RegisterEffect.packagedEffects = {
                    "callout.bounce": {
                        defaultDuration: 550,
                        calls: [
                            [{
                                translateY: -30
                            }, .25],
                            [{
                                translateY: 0
                            }, .125],
                            [{
                                translateY: -15
                            }, .125],
                            [{
                                translateY: 0
                            }, .25]
                        ]
                    },
                    "callout.shake": {
                        defaultDuration: 800,
                        calls: [
                            [{
                                translateX: -11
                            }, .125],
                            [{
                                translateX: 11
                            }, .125],
                            [{
                                translateX: -11
                            }, .125],
                            [{
                                translateX: 11
                            }, .125],
                            [{
                                translateX: -11
                            }, .125],
                            [{
                                translateX: 11
                            }, .125],
                            [{
                                translateX: -11
                            }, .125],
                            [{
                                translateX: 0
                            }, .125]
                        ]
                    },
                    "callout.flash": {
                        defaultDuration: 1100,
                        calls: [
                            [{
                                opacity: [0, "easeInOutQuad", 1]
                            }, .25],
                            [{
                                opacity: [1, "easeInOutQuad"]
                            }, .25],
                            [{
                                opacity: [0, "easeInOutQuad"]
                            }, .25],
                            [{
                                opacity: [1, "easeInOutQuad"]
                            }, .25]
                        ]
                    },
                    "callout.pulse": {
                        defaultDuration: 825,
                        calls: [
                            [{
                                scaleX: 1.1,
                                scaleY: 1.1
                            }, .5, {
                                easing: "easeInExpo"
                            }],
                            [{
                                scaleX: 1,
                                scaleY: 1
                            }, .5]
                        ]
                    },
                    "callout.swing": {
                        defaultDuration: 950,
                        calls: [
                            [{
                                rotateZ: 15
                            }, .2],
                            [{
                                rotateZ: -10
                            }, .2],
                            [{
                                rotateZ: 5
                            }, .2],
                            [{
                                rotateZ: -5
                            }, .2],
                            [{
                                rotateZ: 0
                            }, .2]
                        ]
                    },
                    "callout.tada": {
                        defaultDuration: 1e3,
                        calls: [
                            [{
                                scaleX: .9,
                                scaleY: .9,
                                rotateZ: -3
                            }, .1],
                            [{
                                scaleX: 1.1,
                                scaleY: 1.1,
                                rotateZ: 3
                            }, .1],
                            [{
                                scaleX: 1.1,
                                scaleY: 1.1,
                                rotateZ: -3
                            }, .1],
                            ["reverse", .125],
                            ["reverse", .125],
                            ["reverse", .125],
                            ["reverse", .125],
                            ["reverse", .125],
                            [{
                                scaleX: 1,
                                scaleY: 1,
                                rotateZ: 0
                            }, .2]
                        ]
                    },
                    "transition.fadeIn": {
                        defaultDuration: 500,
                        calls: [
                            [{
                                opacity: [1, 0]
                            }]
                        ]
                    },
                    "transition.fadeOut": {
                        defaultDuration: 500,
                        calls: [
                            [{
                                opacity: [0, 1]
                            }]
                        ]
                    },
                    "transition.flipXIn": {
                        defaultDuration: 700,
                        calls: [
                            [{
                                opacity: [1, 0],
                                transformPerspective: [800, 800],
                                rotateY: [0, -55]
                            }]
                        ],
                        reset: {
                            transformPerspective: 0
                        }
                    },
                    "transition.flipXOut": {
                        defaultDuration: 700,
                        calls: [
                            [{
                                opacity: [0, 1],
                                transformPerspective: [800, 800],
                                rotateY: 55
                            }]
                        ],
                        reset: {
                            transformPerspective: 0,
                            rotateY: 0
                        }
                    },
                    "transition.flipYIn": {
                        defaultDuration: 800,
                        calls: [
                            [{
                                opacity: [1, 0],
                                transformPerspective: [800, 800],
                                rotateX: [0, -45]
                            }]
                        ],
                        reset: {
                            transformPerspective: 0
                        }
                    },
                    "transition.flipYOut": {
                        defaultDuration: 800,
                        calls: [
                            [{
                                opacity: [0, 1],
                                transformPerspective: [800, 800],
                                rotateX: 25
                            }]
                        ],
                        reset: {
                            transformPerspective: 0,
                            rotateX: 0
                        }
                    },
                    "transition.flipBounceXIn": {
                        defaultDuration: 900,
                        calls: [
                            [{
                                opacity: [.725, 0],
                                transformPerspective: [400, 400],
                                rotateY: [-10, 90]
                            }, .5],
                            [{
                                opacity: .8,
                                rotateY: 10
                            }, .25],
                            [{
                                opacity: 1,
                                rotateY: 0
                            }, .25]
                        ],
                        reset: {
                            transformPerspective: 0
                        }
                    },
                    "transition.flipBounceXOut": {
                        defaultDuration: 800,
                        calls: [
                            [{
                                opacity: [.9, 1],
                                transformPerspective: [400, 400],
                                rotateY: -10
                            }, .5],
                            [{
                                opacity: 0,
                                rotateY: 90
                            }, .5]
                        ],
                        reset: {
                            transformPerspective: 0,
                            rotateY: 0
                        }
                    },
                    "transition.flipBounceYIn": {
                        defaultDuration: 850,
                        calls: [
                            [{
                                opacity: [.725, 0],
                                transformPerspective: [400, 400],
                                rotateX: [-10, 90]
                            }, .5],
                            [{
                                opacity: .8,
                                rotateX: 10
                            }, .25],
                            [{
                                opacity: 1,
                                rotateX: 0
                            }, .25]
                        ],
                        reset: {
                            transformPerspective: 0
                        }
                    },
                    "transition.flipBounceYOut": {
                        defaultDuration: 800,
                        calls: [
                            [{
                                opacity: [.9, 1],
                                transformPerspective: [400, 400],
                                rotateX: -15
                            }, .5],
                            [{
                                opacity: 0,
                                rotateX: 90
                            }, .5]
                        ],
                        reset: {
                            transformPerspective: 0,
                            rotateX: 0
                        }
                    },
                    "transition.swoopIn": {
                        defaultDuration: 850,
                        calls: [
                            [{
                                opacity: [1, 0],
                                transformOriginX: ["100%", "50%"],
                                transformOriginY: ["100%", "100%"],
                                scaleX: [1, 0],
                                scaleY: [1, 0],
                                translateX: [0, -700],
                                translateZ: 0
                            }]
                        ],
                        reset: {
                            transformOriginX: "50%",
                            transformOriginY: "50%"
                        }
                    },
                    "transition.swoopOut": {
                        defaultDuration: 850,
                        calls: [
                            [{
                                opacity: [0, 1],
                                transformOriginX: ["50%", "100%"],
                                transformOriginY: ["100%", "100%"],
                                scaleX: 0,
                                scaleY: 0,
                                translateX: -700,
                                translateZ: 0
                            }]
                        ],
                        reset: {
                            transformOriginX: "50%",
                            transformOriginY: "50%",
                            scaleX: 1,
                            scaleY: 1,
                            translateX: 0
                        }
                    },
                    "transition.whirlIn": {
                        defaultDuration: 850,
                        calls: [
                            [{
                                opacity: [1, 0],
                                transformOriginX: ["50%", "50%"],
                                transformOriginY: ["50%", "50%"],
                                scaleX: [1, 0],
                                scaleY: [1, 0],
                                rotateY: [0, 160]
                            }, 1, {
                                easing: "easeInOutSine"
                            }]
                        ]
                    },
                    "transition.whirlOut": {
                        defaultDuration: 750,
                        calls: [
                            [{
                                opacity: [0, "easeInOutQuint", 1],
                                transformOriginX: ["50%", "50%"],
                                transformOriginY: ["50%", "50%"],
                                scaleX: 0,
                                scaleY: 0,
                                rotateY: 160
                            }, 1, {
                                easing: "swing"
                            }]
                        ],
                        reset: {
                            scaleX: 1,
                            scaleY: 1,
                            rotateY: 0
                        }
                    },
                    "transition.shrinkIn": {
                        defaultDuration: 750,
                        calls: [
                            [{
                                opacity: [1, 0],
                                transformOriginX: ["50%", "50%"],
                                transformOriginY: ["50%", "50%"],
                                scaleX: [1, 1.5],
                                scaleY: [1, 1.5],
                                translateZ: 0
                            }]
                        ]
                    },
                    "transition.shrinkOut": {
                        defaultDuration: 600,
                        calls: [
                            [{
                                opacity: [0, 1],
                                transformOriginX: ["50%", "50%"],
                                transformOriginY: ["50%", "50%"],
                                scaleX: 1.3,
                                scaleY: 1.3,
                                translateZ: 0
                            }]
                        ],
                        reset: {
                            scaleX: 1,
                            scaleY: 1
                        }
                    },
                    "transition.expandIn": {
                        defaultDuration: 700,
                        calls: [
                            [{
                                opacity: [1, 0],
                                transformOriginX: ["50%", "50%"],
                                transformOriginY: ["50%", "50%"],
                                scaleX: [1, .625],
                                scaleY: [1, .625],
                                translateZ: 0
                            }]
                        ]
                    },
                    "transition.expandOut": {
                        defaultDuration: 700,
                        calls: [
                            [{
                                opacity: [0, 1],
                                transformOriginX: ["50%", "50%"],
                                transformOriginY: ["50%", "50%"],
                                scaleX: .5,
                                scaleY: .5,
                                translateZ: 0
                            }]
                        ],
                        reset: {
                            scaleX: 1,
                            scaleY: 1
                        }
                    },
                    "transition.bounceIn": {
                        defaultDuration: 800,
                        calls: [
                            [{
                                opacity: [1, 0],
                                scaleX: [1.05, .3],
                                scaleY: [1.05, .3]
                            }, .4],
                            [{
                                scaleX: .9,
                                scaleY: .9,
                                translateZ: 0
                            }, .2],
                            [{
                                scaleX: 1,
                                scaleY: 1
                            }, .5]
                        ]
                    },
                    "transition.bounceOut": {
                        defaultDuration: 800,
                        calls: [
                            [{
                                scaleX: .95,
                                scaleY: .95
                            }, .35],
                            [{
                                scaleX: 1.1,
                                scaleY: 1.1,
                                translateZ: 0
                            }, .35],
                            [{
                                opacity: [0, 1],
                                scaleX: .3,
                                scaleY: .3
                            }, .3]
                        ],
                        reset: {
                            scaleX: 1,
                            scaleY: 1
                        }
                    },
                    "transition.bounceUpIn": {
                        defaultDuration: 800,
                        calls: [
                            [{
                                opacity: [1, 0],
                                translateY: [-30, 1e3]
                            }, .6, {
                                easing: "easeOutCirc"
                            }],
                            [{
                                translateY: 10
                            }, .2],
                            [{
                                translateY: 0
                            }, .2]
                        ]
                    },
                    "transition.bounceUpOut": {
                        defaultDuration: 1e3,
                        calls: [
                            [{
                                translateY: 20
                            }, .2],
                            [{
                                opacity: [0, "easeInCirc", 1],
                                translateY: -1e3
                            }, .8]
                        ],
                        reset: {
                            translateY: 0
                        }
                    },
                    "transition.bounceDownIn": {
                        defaultDuration: 800,
                        calls: [
                            [{
                                opacity: [1, 0],
                                translateY: [30, -1e3]
                            }, .6, {
                                easing: "easeOutCirc"
                            }],
                            [{
                                translateY: -10
                            }, .2],
                            [{
                                translateY: 0
                            }, .2]
                        ]
                    },
                    "transition.bounceDownOut": {
                        defaultDuration: 1e3,
                        calls: [
                            [{
                                translateY: -20
                            }, .2],
                            [{
                                opacity: [0, "easeInCirc", 1],
                                translateY: 1e3
                            }, .8]
                        ],
                        reset: {
                            translateY: 0
                        }
                    },
                    "transition.bounceLeftIn": {
                        defaultDuration: 750,
                        calls: [
                            [{
                                opacity: [1, 0],
                                translateX: [30, -1250]
                            }, .6, {
                                easing: "easeOutCirc"
                            }],
                            [{
                                translateX: -10
                            }, .2],
                            [{
                                translateX: 0
                            }, .2]
                        ]
                    },
                    "transition.bounceLeftOut": {
                        defaultDuration: 750,
                        calls: [
                            [{
                                translateX: 30
                            }, .2],
                            [{
                                opacity: [0, "easeInCirc", 1],
                                translateX: -1250
                            }, .8]
                        ],
                        reset: {
                            translateX: 0
                        }
                    },
                    "transition.bounceRightIn": {
                        defaultDuration: 750,
                        calls: [
                            [{
                                opacity: [1, 0],
                                translateX: [-30, 1250]
                            }, .6, {
                                easing: "easeOutCirc"
                            }],
                            [{
                                translateX: 10
                            }, .2],
                            [{
                                translateX: 0
                            }, .2]
                        ]
                    },
                    "transition.bounceRightOut": {
                        defaultDuration: 750,
                        calls: [
                            [{
                                translateX: -30
                            }, .2],
                            [{
                                opacity: [0, "easeInCirc", 1],
                                translateX: 1250
                            }, .8]
                        ],
                        reset: {
                            translateX: 0
                        }
                    },
                    "transition.slideUpIn": {
                        defaultDuration: 900,
                        calls: [
                            [{
                                opacity: [1, 0],
                                translateY: [0, 20],
                                translateZ: 0
                            }]
                        ]
                    },
                    "transition.slideUpOut": {
                        defaultDuration: 900,
                        calls: [
                            [{
                                opacity: [0, 1],
                                translateY: -20,
                                translateZ: 0
                            }]
                        ],
                        reset: {
                            translateY: 0
                        }
                    },
                    "transition.slideDownIn": {
                        defaultDuration: 900,
                        calls: [
                            [{
                                opacity: [1, 0],
                                translateY: [0, -20],
                                translateZ: 0
                            }]
                        ]
                    },
                    "transition.slideDownOut": {
                        defaultDuration: 900,
                        calls: [
                            [{
                                opacity: [0, 1],
                                translateY: 20,
                                translateZ: 0
                            }]
                        ],
                        reset: {
                            translateY: 0
                        }
                    },
                    "transition.slideLeftIn": {
                        defaultDuration: 1e3,
                        calls: [
                            [{
                                opacity: [1, 0],
                                translateX: [0, -20],
                                translateZ: 0
                            }]
                        ]
                    },
                    "transition.slideLeftOut": {
                        defaultDuration: 1050,
                        calls: [
                            [{
                                opacity: [0, 1],
                                translateX: -20,
                                translateZ: 0
                            }]
                        ],
                        reset: {
                            translateX: 0
                        }
                    },
                    "transition.slideRightIn": {
                        defaultDuration: 1e3,
                        calls: [
                            [{
                                opacity: [1, 0],
                                translateX: [0, 20],
                                translateZ: 0
                            }]
                        ]
                    },
                    "transition.slideRightOut": {
                        defaultDuration: 1050,
                        calls: [
                            [{
                                opacity: [0, 1],
                                translateX: 20,
                                translateZ: 0
                            }]
                        ],
                        reset: {
                            translateX: 0
                        }
                    },
                    "transition.slideUpBigIn": {
                        defaultDuration: 850,
                        calls: [
                            [{
                                opacity: [1, 0],
                                translateY: [0, 75],
                                translateZ: 0
                            }]
                        ]
                    },
                    "transition.slideUpBigOut": {
                        defaultDuration: 800,
                        calls: [
                            [{
                                opacity: [0, 1],
                                translateY: -75,
                                translateZ: 0
                            }]
                        ],
                        reset: {
                            translateY: 0
                        }
                    },
                    "transition.slideDownBigIn": {
                        defaultDuration: 850,
                        calls: [
                            [{
                                opacity: [1, 0],
                                translateY: [0, -75],
                                translateZ: 0
                            }]
                        ]
                    },
                    "transition.slideDownBigOut": {
                        defaultDuration: 800,
                        calls: [
                            [{
                                opacity: [0, 1],
                                translateY: 75,
                                translateZ: 0
                            }]
                        ],
                        reset: {
                            translateY: 0
                        }
                    },
                    "transition.slideLeftBigIn": {
                        defaultDuration: 800,
                        calls: [
                            [{
                                opacity: [1, 0],
                                translateX: [0, -75],
                                translateZ: 0
                            }]
                        ]
                    },
                    "transition.slideLeftBigOut": {
                        defaultDuration: 750,
                        calls: [
                            [{
                                opacity: [0, 1],
                                translateX: -75,
                                translateZ: 0
                            }]
                        ],
                        reset: {
                            translateX: 0
                        }
                    },
                    "transition.slideRightBigIn": {
                        defaultDuration: 800,
                        calls: [
                            [{
                                opacity: [1, 0],
                                translateX: [0, 75],
                                translateZ: 0
                            }]
                        ]
                    },
                    "transition.slideRightBigOut": {
                        defaultDuration: 750,
                        calls: [
                            [{
                                opacity: [0, 1],
                                translateX: 75,
                                translateZ: 0
                            }]
                        ],
                        reset: {
                            translateX: 0
                        }
                    },
                    "transition.perspectiveUpIn": {
                        defaultDuration: 800,
                        calls: [
                            [{
                                opacity: [1, 0],
                                transformPerspective: [800, 800],
                                transformOriginX: [0, 0],
                                transformOriginY: ["100%", "100%"],
                                rotateX: [0, -180]
                            }]
                        ],
                        reset: {
                            transformPerspective: 0,
                            transformOriginX: "50%",
                            transformOriginY: "50%"
                        }
                    },
                    "transition.perspectiveUpOut": {
                        defaultDuration: 850,
                        calls: [
                            [{
                                opacity: [0, 1],
                                transformPerspective: [800, 800],
                                transformOriginX: [0, 0],
                                transformOriginY: ["100%", "100%"],
                                rotateX: -180
                            }]
                        ],
                        reset: {
                            transformPerspective: 0,
                            transformOriginX: "50%",
                            transformOriginY: "50%",
                            rotateX: 0
                        }
                    },
                    "transition.perspectiveDownIn": {
                        defaultDuration: 800,
                        calls: [
                            [{
                                opacity: [1, 0],
                                transformPerspective: [800, 800],
                                transformOriginX: [0, 0],
                                transformOriginY: [0, 0],
                                rotateX: [0, 180]
                            }]
                        ],
                        reset: {
                            transformPerspective: 0,
                            transformOriginX: "50%",
                            transformOriginY: "50%"
                        }
                    },
                    "transition.perspectiveDownOut": {
                        defaultDuration: 850,
                        calls: [
                            [{
                                opacity: [0, 1],
                                transformPerspective: [800, 800],
                                transformOriginX: [0, 0],
                                transformOriginY: [0, 0],
                                rotateX: 180
                            }]
                        ],
                        reset: {
                            transformPerspective: 0,
                            transformOriginX: "50%",
                            transformOriginY: "50%",
                            rotateX: 0
                        }
                    },
                    "transition.perspectiveLeftIn": {
                        defaultDuration: 950,
                        calls: [
                            [{
                                opacity: [1, 0],
                                transformPerspective: [2e3, 2e3],
                                transformOriginX: [0, 0],
                                transformOriginY: [0, 0],
                                rotateY: [0, -180]
                            }]
                        ],
                        reset: {
                            transformPerspective: 0,
                            transformOriginX: "50%",
                            transformOriginY: "50%"
                        }
                    },
                    "transition.perspectiveLeftOut": {
                        defaultDuration: 950,
                        calls: [
                            [{
                                opacity: [0, 1],
                                transformPerspective: [2e3, 2e3],
                                transformOriginX: [0, 0],
                                transformOriginY: [0, 0],
                                rotateY: -180
                            }]
                        ],
                        reset: {
                            transformPerspective: 0,
                            transformOriginX: "50%",
                            transformOriginY: "50%",
                            rotateY: 0
                        }
                    },
                    "transition.perspectiveRightIn": {
                        defaultDuration: 950,
                        calls: [
                            [{
                                opacity: [1, 0],
                                transformPerspective: [2e3, 2e3],
                                transformOriginX: ["100%", "100%"],
                                transformOriginY: [0, 0],
                                rotateY: [0, 180]
                            }]
                        ],
                        reset: {
                            transformPerspective: 0,
                            transformOriginX: "50%",
                            transformOriginY: "50%"
                        }
                    },
                    "transition.perspectiveRightOut": {
                        defaultDuration: 950,
                        calls: [
                            [{
                                opacity: [0, 1],
                                transformPerspective: [2e3, 2e3],
                                transformOriginX: ["100%", "100%"],
                                transformOriginY: [0, 0],
                                rotateY: 180
                            }]
                        ],
                        reset: {
                            transformPerspective: 0,
                            transformOriginX: "50%",
                            transformOriginY: "50%",
                            rotateY: 0
                        }
                    }
                };
                for (var r in o.RegisterEffect.packagedEffects) o.RegisterEffect(r, o.RegisterEffect.packagedEffects[r]);
                o.RunSequence = function(e) {
                    var t = a.extend(!0, [], e);
                    t.length > 1 && (a.each(t.reverse(), function(e, i) {
                        var n = t[e + 1];
                        if (n) {
                            var s = i.o || i.options,
                                r = n.o || n.options,
                                l = s && !1 === s.sequenceQueue ? "begin" : "complete",
                                c = r && r[l],
                                d = {};
                            d[l] = function() {
                                var e = n.e || n.elements,
                                    t = e.nodeType ? [e] : e;
                                c && c.call(t, t), o(i)
                            }, n.o ? n.o = a.extend({}, r, d) : n.options = a.extend({}, r, d)
                        }
                    }), t.reverse()), o(t[0])
                }
            } else t.console && console.log("Velocity UI Pack: Velocity must be loaded first. Aborting.")
        }(window.jQuery || window.Zepto || window, window, document)
    }),
    function(e, t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t(e.jQuery)
    }(this, function(e) {
        "use strict";

        function t(t) {
            if (n.webkit && !t) return {
                height: 0,
                width: 0
            };
            if (!n.data.outer) {
                var i = {
                    border: "none",
                    "box-sizing": "content-box",
                    height: "200px",
                    margin: "0",
                    padding: "0",
                    width: "200px"
                };
                n.data.inner = e("<div>").css(e.extend({}, i)), n.data.outer = e("<div>").css(e.extend({
                    left: "-1000px",
                    overflow: "scroll",
                    position: "absolute",
                    top: "-1000px"
                }, i)).append(n.data.inner).appendTo("body")
            }
            return n.data.outer.scrollLeft(1e3).scrollTop(1e3), {
                height: Math.ceil(n.data.outer.offset().top - n.data.inner.offset().top || 0),
                width: Math.ceil(n.data.outer.offset().left - n.data.inner.offset().left || 0)
            }
        }

        function i(e) {
            var t = e.originalEvent;
            return (!t.axis || t.axis !== t.HORIZONTAL_AXIS) && !t.wheelDeltaX
        }
        var n = {
            data: {
                index: 0,
                name: "scrollbar"
            },
            macosx: /mac/i.test(navigator.platform),
            mobile: /android|webos|iphone|ipad|ipod|blackberry/i.test(navigator.userAgent),
            overlay: null,
            scroll: null,
            scrolls: [],
            webkit: /webkit/i.test(navigator.userAgent) && !/edge\/\d+/i.test(navigator.userAgent)
        };
        n.scrolls.add = function(e) {
            this.remove(e).push(e)
        }, n.scrolls.remove = function(t) {
            for (; e.inArray(t, this) >= 0;) this.splice(e.inArray(t, this), 1);
            return this
        };
        var o = {
                autoScrollSize: !0,
                autoUpdate: !0,
                debug: !1,
                disableBodyScroll: !1,
                duration: 200,
                ignoreMobile: !1,
                ignoreOverlay: !1,
                scrollStep: 30,
                showArrows: !1,
                stepScrolling: !0,
                scrollx: null,
                scrolly: null,
                onDestroy: null,
                onInit: null,
                onScroll: null,
                onUpdate: null
            },
            a = function(i) {
                n.scroll || (n.overlay = function() {
                    var e = t(!0);
                    return !(e.height || e.width)
                }(), n.scroll = t(), r(), e(window).resize(function() {
                    var e = !1;
                    if (n.scroll && (n.scroll.height || n.scroll.width)) {
                        var i = t();
                        i.height === n.scroll.height && i.width === n.scroll.width || (n.scroll = i, e = !0)
                    }
                    r(e)
                })), this.container = i, this.namespace = ".scrollbar_" + n.data.index++, this.options = e.extend({}, o, window.jQueryScrollbarOptions || {}), this.scrollTo = null, this.scrollx = {}, this.scrolly = {}, i.data(n.data.name, this), n.scrolls.add(this)
            };
        a.prototype = {
            destroy: function() {
                if (this.wrapper) {
                    this.container.removeData(n.data.name), n.scrolls.remove(this);
                    var t = this.container.scrollLeft(),
                        i = this.container.scrollTop();
                    this.container.insertBefore(this.wrapper).css({
                        height: "",
                        margin: "",
                        "max-height": ""
                    }).removeClass("scroll-content scroll-scrollx_visible scroll-scrolly_visible").off(this.namespace).scrollLeft(t).scrollTop(i), this.scrollx.scroll.removeClass("scroll-scrollx_visible").find("div").andSelf().off(this.namespace), this.scrolly.scroll.removeClass("scroll-scrolly_visible").find("div").andSelf().off(this.namespace), this.wrapper.remove(), e(document).add("body").off(this.namespace), e.isFunction(this.options.onDestroy) && this.options.onDestroy.apply(this, [this.container])
                }
            },
            init: function(t) {
                var o = this,
                    a = this.container,
                    s = this.containerWrapper || a,
                    r = this.namespace,
                    l = e.extend(this.options, t || {}),
                    c = {
                        x: this.scrollx,
                        y: this.scrolly
                    },
                    d = this.wrapper,
                    u = {
                        scrollLeft: a.scrollLeft(),
                        scrollTop: a.scrollTop()
                    };
                if (n.mobile && l.ignoreMobile || n.overlay && l.ignoreOverlay || n.macosx && !n.webkit) return !1;
                if (d) s.css({
                    height: "auto",
                    "margin-bottom": -1 * n.scroll.height + "px",
                    "margin-right": -1 * n.scroll.width + "px",
                    "max-height": ""
                });
                else {
                    if (this.wrapper = d = e("<div>").addClass("scroll-wrapper").addClass(a.attr("class")).css("position", "absolute" == a.css("position") ? "absolute" : "relative").insertBefore(a).append(a), a.is("textarea") && (this.containerWrapper = s = e("<div>").insertBefore(a).append(a), d.addClass("scroll-textarea")), s.addClass("scroll-content").css({
                            height: "auto",
                            "margin-bottom": -1 * n.scroll.height + "px",
                            "margin-right": -1 * n.scroll.width + "px",
                            "max-height": ""
                        }), a.on("scroll" + r, function(t) {
                            e.isFunction(l.onScroll) && l.onScroll.call(o, {
                                maxScroll: c.y.maxScrollOffset,
                                scroll: a.scrollTop(),
                                size: c.y.size,
                                visible: c.y.visible
                            }, {
                                maxScroll: c.x.maxScrollOffset,
                                scroll: a.scrollLeft(),
                                size: c.x.size,
                                visible: c.x.visible
                            }), c.x.isVisible && c.x.scroll.bar.css("left", a.scrollLeft() * c.x.kx + "px"), c.y.isVisible && c.y.scroll.bar.css("top", a.scrollTop() * c.y.kx + "px")
                        }), d.on("scroll" + r, function() {
                            d.scrollTop(0).scrollLeft(0)
                        }), l.disableBodyScroll) {
                        var p = function(e) {
                            i(e) ? c.y.isVisible && c.y.mousewheel(e) : c.x.isVisible && c.x.mousewheel(e)
                        };
                        d.on("MozMousePixelScroll" + r, p), d.on("mousewheel" + r, p), n.mobile && d.on("touchstart" + r, function(t) {
                            var i = t.originalEvent.touches && t.originalEvent.touches[0] || t,
                                n = i.pageX,
                                o = i.pageY,
                                s = a.scrollLeft(),
                                l = a.scrollTop();
                            e(document).on("touchmove" + r, function(e) {
                                var t = e.originalEvent.targetTouches && e.originalEvent.targetTouches[0] || e;
                                a.scrollLeft(s + n - t.pageX), a.scrollTop(l + o - t.pageY), e.preventDefault()
                            }), e(document).on("touchend" + r, function() {
                                e(document).off(r)
                            })
                        })
                    }
                    e.isFunction(l.onInit) && l.onInit.apply(this, [a])
                }
                e.each(c, function(t, n) {
                    var s = null,
                        d = 1,
                        u = "x" === t ? "scrollLeft" : "scrollTop",
                        p = l.scrollStep,
                        h = function() {
                            var e = a[u]();
                            a[u](e + p), 1 == d && e + p >= m && (e = a[u]()), -1 == d && e + p <= m && (e = a[u]()), a[u]() == e && s && s()
                        },
                        m = 0;
                    n.scroll || (n.scroll = o._getScroll(l["scroll" + t]).addClass("scroll-" + t), l.showArrows && n.scroll.addClass("scroll-element_arrows_visible"), n.mousewheel = function(e) {
                        if (!n.isVisible || "x" === t && i(e)) return !0;
                        if ("y" === t && !i(e)) return c.x.mousewheel(e), !0;
                        var s = -1 * e.originalEvent.wheelDelta || e.originalEvent.detail,
                            r = n.size - n.visible - n.offset;
                        return (s > 0 && m < r || s < 0 && m > 0) && ((m += s) < 0 && (m = 0), m > r && (m = r), o.scrollTo = o.scrollTo || {}, o.scrollTo[u] = m, setTimeout(function() {
                            o.scrollTo && (a.stop().animate(o.scrollTo, 240, "linear", function() {
                                m = a[u]()
                            }), o.scrollTo = null)
                        }, 1)), e.preventDefault(), !1
                    }, n.scroll.on("MozMousePixelScroll" + r, n.mousewheel).on("mousewheel" + r, n.mousewheel).on("mouseenter" + r, function() {
                        m = a[u]()
                    }), n.scroll.find(".scroll-arrow, .scroll-element_track").on("mousedown" + r, function(i) {
                        if (1 != i.which) return !0;
                        d = 1;
                        var r = i["x" === t ? "pageX" : "pageY"],
                            c = n.size - n.visible - n.offset,
                            f = n.scroll.bar.offset()["x" === t ? "left" : "top"],
                            g = n.scroll.bar["x" === t ? "outerWidth" : "outerHeight"](),
                            _ = 0,
                            v = 0;
                        return e(this).hasClass("scroll-arrow") ? (d = e(this).hasClass("scroll-arrow_more") ? 1 : -1, p = l.scrollStep * d, m = d > 0 ? c : 0) : (d = r > f + g ? 1 : r < f ? -1 : 0, p = Math.round(.75 * n.visible) * d, m = r - f - (l.stepScrolling ? 1 == d ? g : 0 : Math.round(g / 2)), m = a[u]() + m / n.kx), o.scrollTo = o.scrollTo || {}, o.scrollTo[u] = l.stepScrolling ? a[u]() + p : m, l.stepScrolling && (s = function() {
                            m = a[u](), clearInterval(v), clearTimeout(_), _ = 0, v = 0
                        }, _ = setTimeout(function() {
                            v = setInterval(h, 40)
                        }, l.duration + 100)), setTimeout(function() {
                            o.scrollTo && (a.animate(o.scrollTo, l.duration), o.scrollTo = null)
                        }, 1), o._handleMouseDown(s, i)
                    }), n.scroll.bar.on("mousedown" + r, function(i) {
                        if (1 != i.which) return !0;
                        var s = i["x" === t ? "pageX" : "pageY"],
                            l = a[u]();
                        return n.scroll.addClass("scroll-draggable"), e(document).on("mousemove" + r, function(e) {
                            var i = parseInt((e["x" === t ? "pageX" : "pageY"] - s) / n.kx, 10);
                            a[u](l + i)
                        }), o._handleMouseDown(function() {
                            n.scroll.removeClass("scroll-draggable"), m = a[u]()
                        }, i)
                    }))
                }), e.each(c, function(e, t) {
                    var i = "scroll-scroll" + e + "_visible",
                        n = "x" == e ? c.y : c.x;
                    t.scroll.removeClass(i), n.scroll.removeClass(i), s.removeClass(i)
                }), e.each(c, function(t, i) {
                    e.extend(i, "x" == t ? {
                        offset: parseInt(a.css("left"), 10) || 0,
                        size: a.prop("scrollWidth"),
                        visible: d.width()
                    } : {
                        offset: parseInt(a.css("top"), 10) || 0,
                        size: a.prop("scrollHeight"),
                        visible: d.height()
                    })
                }), this._updateScroll("x", this.scrollx), this._updateScroll("y", this.scrolly), e.isFunction(l.onUpdate) && l.onUpdate.apply(this, [a]), e.each(c, function(e, t) {
                    var i = "x" === e ? "left" : "top",
                        n = "x" === e ? "outerWidth" : "outerHeight",
                        o = "x" === e ? "width" : "height",
                        s = parseInt(a.css(i), 10) || 0,
                        r = t.size,
                        c = t.visible + s,
                        d = t.scroll.size[n]() + (parseInt(t.scroll.size.css(i), 10) || 0);
                    l.autoScrollSize && (t.scrollbarSize = parseInt(d * c / r, 10), t.scroll.bar.css(o, t.scrollbarSize + "px")), t.scrollbarSize = t.scroll.bar[n](), t.kx = (d - t.scrollbarSize) / (r - c) || 1, t.maxScrollOffset = r - c
                }), a.scrollLeft(u.scrollLeft).scrollTop(u.scrollTop).trigger("scroll")
            },
            _getScroll: function(t) {
                var i = {
                    advanced: ['<div class="scroll-element">', '<div class="scroll-element_corner"></div>', '<div class="scroll-arrow scroll-arrow_less"></div>', '<div class="scroll-arrow scroll-arrow_more"></div>', '<div class="scroll-element_outer">', '<div class="scroll-element_size"></div>', '<div class="scroll-element_inner-wrapper">', '<div class="scroll-element_inner scroll-element_track">', '<div class="scroll-element_inner-bottom"></div>', "</div>", "</div>", '<div class="scroll-bar">', '<div class="scroll-bar_body">', '<div class="scroll-bar_body-inner"></div>', "</div>", '<div class="scroll-bar_bottom"></div>', '<div class="scroll-bar_center"></div>', "</div>", "</div>", "</div>"].join(""),
                    simple: ['<div class="scroll-element">', '<div class="scroll-element_outer">', '<div class="scroll-element_size"></div>', '<div class="scroll-element_track"></div>', '<div class="scroll-bar"></div>', "</div>", "</div>"].join("")
                };
                return i[t] && (t = i[t]), t || (t = i.simple), t = "string" == typeof t ? e(t).appendTo(this.wrapper) : e(t), e.extend(t, {
                    bar: t.find(".scroll-bar"),
                    size: t.find(".scroll-element_size"),
                    track: t.find(".scroll-element_track")
                }), t
            },
            _handleMouseDown: function(t, i) {
                var n = this.namespace;
                return e(document).on("blur" + n, function() {
                    e(document).add("body").off(n), t && t()
                }), e(document).on("dragstart" + n, function(e) {
                    return e.preventDefault(), !1
                }), e(document).on("mouseup" + n, function() {
                    e(document).add("body").off(n), t && t()
                }), e("body").on("selectstart" + n, function(e) {
                    return e.preventDefault(), !1
                }), i && i.preventDefault(), !1
            },
            _updateScroll: function(t, i) {
                var o = this.container,
                    a = this.containerWrapper || o,
                    s = "scroll-scroll" + t + "_visible",
                    r = "x" === t ? this.scrolly : this.scrollx,
                    l = parseInt(this.container.css("x" === t ? "left" : "top"), 10) || 0,
                    c = this.wrapper,
                    d = i.size,
                    u = i.visible + l;
                i.isVisible = d - u > 1, i.isVisible ? (i.scroll.addClass(s), r.scroll.addClass(s), a.addClass(s)) : (i.scroll.removeClass(s), r.scroll.removeClass(s), a.removeClass(s)), "y" === t && (o.is("textarea") || d < u ? a.css({
                    height: u + n.scroll.height + "px",
                    "max-height": "none"
                }) : a.css({
                    "max-height": u + n.scroll.height + "px"
                })), i.size == o.prop("scrollWidth") && r.size == o.prop("scrollHeight") && i.visible == c.width() && r.visible == c.height() && i.offset == (parseInt(o.css("left"), 10) || 0) && r.offset == (parseInt(o.css("top"), 10) || 0) || (e.extend(this.scrollx, {
                    offset: parseInt(o.css("left"), 10) || 0,
                    size: o.prop("scrollWidth"),
                    visible: c.width()
                }), e.extend(this.scrolly, {
                    offset: parseInt(o.css("top"), 10) || 0,
                    size: this.container.prop("scrollHeight"),
                    visible: c.height()
                }), this._updateScroll("x" === t ? "y" : "x", r))
            }
        };
        var s = a;
        e.fn.scrollbar = function(t, i) {
            return "string" != typeof t && (i = t, t = "init"), void 0 === i && (i = []), e.isArray(i) || (i = [i]), this.not("body, .scroll-wrapper").each(function() {
                var o = e(this),
                    a = o.data(n.data.name);
                (a || "init" === t) && (a || (a = new s(o)), a[t] && a[t].apply(a, i))
            }), this
        }, e.fn.scrollbar.options = o;
        var r = function() {
            var e = 0,
                t = 0;
            return function(i) {
                var o, a, s, l, c, d, u;
                for (o = 0; o < n.scrolls.length; o++) a = (l = n.scrolls[o]).container, s = l.options, c = l.wrapper, d = l.scrollx, u = l.scrolly, (i || s.autoUpdate && c && c.is(":visible") && (a.prop("scrollWidth") != d.size || a.prop("scrollHeight") != u.size || c.width() != d.visible || c.height() != u.visible)) && (l.init(), s.debug && (window.console && console.log({
                    scrollHeight: a.prop("scrollHeight") + ":" + l.scrolly.size,
                    scrollWidth: a.prop("scrollWidth") + ":" + l.scrollx.size,
                    visibleHeight: c.height() + ":" + l.scrolly.visible,
                    visibleWidth: c.width() + ":" + l.scrollx.visible
                }, !0), t++));
                clearTimeout(e), e = setTimeout(r, 300)
            }
        }();
        window.angular && function(e) {
            e.module("jQueryScrollbar", []).provider("jQueryScrollbar", function() {
                var t = o;
                return {
                    setOptions: function(i) {
                        e.extend(t, i)
                    },
                    $get: function() {
                        return {
                            options: e.copy(t)
                        }
                    }
                }
            }).directive("jqueryScrollbar", ["jQueryScrollbar", "$parse", function(e, t) {
                return {
                    restrict: "AC",
                    link: function(i, n, o) {
                        var a = t(o.jqueryScrollbar)(i);
                        n.scrollbar(a || e.options).on("$destroy", function() {
                            n.scrollbar("destroy")
                        })
                    }
                }
            }])
        }(window.angular)
    }),
    function(e) {
        e.fn.appear = function(t, i) {
            var n = e.extend({
                data: void 0,
                one: !0,
                accX: 0,
                accY: 0
            }, i);
            return this.each(function() {
                var i = e(this);
                if (i.appeared = !1, t) {
                    var o = e(window),
                        a = function() {
                            if (i.is(":visible")) {
                                var e = o.scrollLeft(),
                                    t = o.scrollTop(),
                                    a = i.offset(),
                                    s = a.left,
                                    r = a.top,
                                    l = n.accX,
                                    c = n.accY,
                                    d = i.height(),
                                    u = o.height(),
                                    p = i.width(),
                                    h = o.width();
                                r + d + c >= t && r <= t + u + c && s + p + l >= e && s <= e + h + l ? i.appeared || i.trigger("appear", n.data) : i.appeared = !1
                            } else i.appeared = !1
                        },
                        s = function() {
                            if (i.appeared = !0, n.one) {
                                o.unbind("scroll", a);
                                var s = e.inArray(a, e.fn.appear.checks);
                                s >= 0 && e.fn.appear.checks.splice(s, 1)
                            }
                            t.apply(this, arguments)
                        };
                    n.one ? i.one("appear", n.data, s) : i.bind("appear", n.data, s), o.scroll(a), e.fn.appear.checks.push(a), a()
                } else i.trigger("appear", n.data)
            })
        }, e.extend(e.fn.appear, {
            checks: [],
            timeout: null,
            checkAll: function() {
                var t = e.fn.appear.checks.length;
                if (t > 0)
                    for (; t--;) e.fn.appear.checks[t]()
            },
            run: function() {
                e.fn.appear.timeout && clearTimeout(e.fn.appear.timeout), e.fn.appear.timeout = setTimeout(e.fn.appear.checkAll, 20)
            }
        }), e.each(["append", "prepend", "after", "before", "attr", "removeAttr", "addClass", "removeClass", "toggleClass", "remove", "css", "show", "hide"], function(t, i) {
            var n = e.fn[i];
            n && (e.fn[i] = function() {
                var t = n.apply(this, arguments);
                return e.fn.appear.run(), t
            })
        })
    }(jQuery), $(document).ready(function() {
        $("html").hasClass("no-js") && $("html").toggleClass("no-js js"), $(window).width() <= 568 ? $(".pix-animate-in").removeClass("pix-animate-in animating animate-out infinite").removeClass(effects.join(" ")) : $(".pix-animate-in").each(function(e, t) {
            var i = $(t).attr("data-anim-type"),
                n = $(t).attr("data-anim-delay");
            $(t).appear(function() {
                setTimeout(function() {
                    $(t).addClass("animating").addClass(i).addClass("pix-animate-in")
                }, n), $(t).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
                    $(t).removeClass("animating")
                })
            }, {
                accX: -1,
                accY: -10
            })
        })
    }), $(window).resize(function() {
        $(window).width() <= 568 && $(".pix-animate-in").removeClass("pix-animate-in animating animate-out infinite").removeClass(effects.join(" "))
    });
var effects = ["fade-in", "fade-in-up", "fade-in-up-big", "fade-in-up-large", "fade-in-down", "fade-in-down-big", "fade-in-down-large", "fade-in-left", "fade-in-left-big", "fade-in-left-large", "fade-in-right", "fade-in-right-big", "fade-in-right-large", "fade-in-up-left", "fade-in-up-left-big", "fade-in-up-left-large", "fade-in-up-right", "fade-in-up-right-big", "fade-in-up-right-large", "fade-in-down-left", "fade-in-down-left-big", "fade-in-down-left-large", "fade-in-down-right", "fade-in-down-right-big", "fade-in-down-right-large", "fade-out", "fade-out-up", "fade-out-up-big", "fade-out-up-large", "fade-out-down", "fade-out-down-big", "fade-out-down-large", "fade-out-left", "fade-out-left-big", "fade-out-left-large", "fade-out-right", "fade-out-right-big", "fade-out-right-large", "fade-out-up-left", "fade-out-up-left-big", "fade-out-up-left-large", "fade-out-up-right", "fade-out-up-right-big", "fade-out-up-right-large", "fade-out-down-left", "fade-out-down-left-big", "fade-out-down-left-large", "fade-out-down-right", "fade-out-down-right-big", "fade-out-down-right-large", "bounce-in", "bounce-in-big", "bounce-in-large", "bounce-in-up", "bounce-in-up-big", "bounce-in-up-large", "bounce-in-down", "bounce-in-down-big", "bounce-in-down-large", "bounce-in-left", "bounce-in-left-big", "bounce-in-left-large", "bounce-in-right", "bounce-in-right-big", "bounce-in-right-large", "bounce-in-up-left", "bounce-in-up-left-big", "bounce-in-up-left-large", "bounce-in-up-right", "bounce-in-up-right-big", "bounce-in-up-right-large", "bounce-in-down-left", "bounce-in-down-left-big", "bounce-in-down-left-large", "bounce-in-down-right", "bounce-in-down-right-big", "bounce-in-down-right-large", "bounce-out", "bounce-out-big", "bounce-out-large", "bounce-out-up", "bounce-out-up-big", "bounce-out-up-large", "bounce-out-down", "bounce-out-down-big", "bounce-out-down-large", "bounce-out-left", "bounce-out-left-big", "bounce-out-left-large", "bounce-out-right", "bounce-out-right-big", "bounce-out-right-large", "bounce-out-up-left", "bounce-out-up-left-big", "bounce-out-up-left-large", "bounce-out-up-right", "bounce-out-up-right-big", "bounce-out-up-right-large", "bounce-out-down-left", "bounce-out-down-left-big", "bounce-out-down-left-large", "bounce-out-down-right", "bounce-out-down-right-big", "bounce-out-down-right-large", "zoom-in", "zoom-in-up", "zoom-in-up-big", "zoom-in-up-large", "zoom-in-down", "zoom-in-down-big", "zoom-in-down-large", "zoom-in-left", "zoom-in-left-big", "zoom-in-left-large", "zoom-in-right", "zoom-in-right-big", "zoom-in-right-large", "zoom-in-up-left", "zoom-in-up-left-big", "zoom-in-up-left-large", "zoom-in-up-right", "zoom-in-up-right-big", "zoom-in-up-right-large", "zoom-in-down-left", "zoom-in-down-left-big", "zoom-in-down-left-large", "zoom-in-down-right", "zoom-in-down-right-big", "zoom-in-down-right-large", "zoom-out", "zoom-out-up", "zoom-out-up-big", "zoom-out-up-large", "zoom-out-down", "zoom-out-down-big", "zoom-out-down-large", "zoom-out-left", "zoom-out-left-big", "zoom-out-left-large", "zoom-out-right", "zoom-out-right-big", "zoom-out-right-large", "zoom-out-up-left", "zoom-out-up-left-big", "zoom-out-up-left-large", "zoom-out-up-right", "zoom-out-up-right-big", "zoom-out-up-right-large", "zoom-out-down-left", "zoom-out-down-left-big", "zoom-out-down-left-large", "zoom-out-down-right", "zoom-out-down-right-big", "zoom-out-down-right-large", "flip-in-x", "flip-in-y", "flip-in-top-front", "flip-in-top-back", "flip-in-bottom-front", "flip-in-bottom-back", "flip-in-left-front", "flip-in-left-back", "flip-in-right-front", "flip-in-right-back", "flip-out-x", "flip-out-y", "flip-out-top-front", "flip-out-top-back", "flip-out-bottom-front", "flip-out-bottom-back", "flip-out-left-front", "flip-out-left-back", "flip-out-right-front", "flip-out-right-back", "flash", "strobe", "shake-x", "shake-y", "bounce", "tada", "rubber-band", "swing", "spin", "spin-reverse", "slingshot", "slingshot-reverse", "wobble", "pulse", "pulsate", "heartbeat", "panic"];
! function(e, t, i, n) {
    function o(t, n) {
        this.w = e(i), this.el = e(t), this.options = e.extend({}, r, n), this.init()
    }
    var a = "ontouchstart" in i,
        s = function() {
            var e = i.createElement("div"),
                n = i.documentElement;
            if (!("pointerEvents" in e.style)) return !1;
            e.style.pointerEvents = "auto", e.style.pointerEvents = "x", n.appendChild(e);
            var o = t.getComputedStyle && "auto" === t.getComputedStyle(e, "").pointerEvents;
            return n.removeChild(e), !!o
        }(),
        r = {
            listNodeName: "ol",
            itemNodeName: "li",
            rootClass: "dd",
            listClass: "dd-list",
            itemClass: "dd-item",
            dragClass: "dd-dragel",
            handleClass: "dd-handle",
            collapsedClass: "dd-collapsed",
            placeClass: "dd-placeholder",
            noDragClass: "dd-nodrag",
            emptyClass: "dd-empty",
            expandBtnHTML: '<button data-action="expand" type="button">Expand</button>',
            collapseBtnHTML: '<button data-action="collapse" type="button">Collapse</button>',
            group: 0,
            maxDepth: 2,
            threshold: 20
        };
    o.prototype = {
        init: function() {
            var i = this;
            i.reset(), i.el.data("nestable-group", this.options.group), i.placeEl = e('<div class="' + i.options.placeClass + '"/>'), e.each(this.el.find(i.options.itemNodeName), function(t, n) {
                i.setParent(e(n))
            }), i.el.on("click", "button", function(t) {
                if (!i.dragEl) {
                    var n = e(t.currentTarget),
                        o = n.data("action"),
                        a = n.parent(i.options.itemNodeName);
                    "collapse" === o && i.collapseItem(a), "expand" === o && i.expandItem(a)
                }
            });
            var n = function(t) {
                    var n = e(t.target);
                    if (!n.hasClass(i.options.handleClass)) {
                        if (n.closest("." + i.options.noDragClass).length) return;
                        n = n.closest("." + i.options.handleClass)
                    }
                    n.length && !i.dragEl && (i.isTouch = /^touch/.test(t.type), i.isTouch && 1 !== t.touches.length || (t.preventDefault(), i.dragStart(t.touches ? t.touches[0] : t)))
                },
                o = function(e) {
                    i.dragEl && (e.preventDefault(), i.dragMove(e.touches ? e.touches[0] : e))
                },
                s = function(e) {
                    i.dragEl && (e.preventDefault(), i.dragStop(e.touches ? e.touches[0] : e))
                };
            a && (i.el[0].addEventListener("touchstart", n, !1), t.addEventListener("touchmove", o, !1), t.addEventListener("touchend", s, !1), t.addEventListener("touchcancel", s, !1)), i.el.on("mousedown", n), i.w.on("mousemove", o), i.w.on("mouseup", s)
        },
        serialize: function() {
            var t = this;
            return step = function(i, n) {
                var o = [];
                return i.children(t.options.itemNodeName).each(function() {
                    var i = e(this),
                        a = e.extend({}, i.data()),
                        s = i.children(t.options.listNodeName);
                    s.length && (a.children = step(s, n + 1)), o.push(a)
                }), o
            }, step(t.el.find(t.options.listNodeName).first(), 0)
        },
        serialise: function() {
            return this.serialize()
        },
        reset: function() {
            this.mouse = {
                offsetX: 0,
                offsetY: 0,
                startX: 0,
                startY: 0,
                lastX: 0,
                lastY: 0,
                nowX: 0,
                nowY: 0,
                distX: 0,
                distY: 0,
                dirAx: 0,
                dirX: 0,
                dirY: 0,
                lastDirX: 0,
                lastDirY: 0,
                distAxX: 0,
                distAxY: 0
            }, this.isTouch = !1, this.moving = !1, this.dragEl = null, this.dragRootEl = null, this.dragDepth = 0, this.hasNewRoot = !1, this.pointEl = null
        },
        expandItem: function(e) {
            e.removeClass(this.options.collapsedClass), e.children('[data-action="expand"]').hide(), e.children('[data-action="collapse"]').show(), e.children(this.options.listNodeName).show()
        },
        collapseItem: function(e) {
            e.children(this.options.listNodeName).length && (e.addClass(this.options.collapsedClass), e.children('[data-action="collapse"]').hide(), e.children('[data-action="expand"]').show(), e.children(this.options.listNodeName).hide())
        },
        expandAll: function() {
            var t = this;
            t.el.find(t.options.itemNodeName).each(function() {
                t.expandItem(e(this))
            })
        },
        collapseAll: function() {
            var t = this;
            t.el.find(t.options.itemNodeName).each(function() {
                t.collapseItem(e(this))
            })
        },
        setParent: function(t) {
            t.children(this.options.listNodeName).length && (t.prepend(e(this.options.expandBtnHTML)), t.prepend(e(this.options.collapseBtnHTML))), t.children('[data-action="expand"]').hide()
        },
        unsetParent: function(e) {
            e.removeClass(this.options.collapsedClass), e.children("[data-action]").remove(), e.children(this.options.listNodeName).remove()
        },
        dragStart: function(t) {
            var n = this.mouse,
                o = e(t.target),
                a = o.closest(this.options.itemNodeName);
            this.placeEl.css("height", a.height()), n.offsetX = void 0 !== t.offsetX ? t.offsetX : t.pageX - o.offset().left, n.offsetY = void 0 !== t.offsetY ? t.offsetY : t.pageY - o.offset().top, n.startX = n.lastX = t.pageX, n.startY = n.lastY = t.pageY, this.dragRootEl = this.el, this.dragEl = e(i.createElement(this.options.listNodeName)).addClass(this.options.listClass + " " + this.options.dragClass), this.dragEl.css("width", a.width()), a.after(this.placeEl), a[0].parentNode.removeChild(a[0]), a.appendTo(this.dragEl), e(i.body).append(this.dragEl), this.dragEl.css({
                left: t.pageX - n.offsetX,
                top: t.pageY - n.offsetY
            });
            var s, r, l = this.dragEl.find(this.options.itemNodeName);
            for (s = 0; s < l.length; s++)(r = e(l[s]).parents(this.options.listNodeName).length) > this.dragDepth && (this.dragDepth = r)
        },
        dragStop: function(e) {
            var t = this.dragEl.children(this.options.itemNodeName).first();
            t[0].parentNode.removeChild(t[0]), this.placeEl.replaceWith(t), this.dragEl.remove(), this.el.trigger("change"), this.hasNewRoot && this.dragRootEl.trigger("change"), this.reset()
        },
        dragMove: function(n) {
            var o, a, r, l = this.options,
                c = this.mouse;
            this.dragEl.css({
                left: n.pageX - c.offsetX,
                top: n.pageY - c.offsetY
            }), c.lastX = c.nowX, c.lastY = c.nowY, c.nowX = n.pageX, c.nowY = n.pageY, c.distX = c.nowX - c.lastX, c.distY = c.nowY - c.lastY, c.lastDirX = c.dirX, c.lastDirY = c.dirY, c.dirX = 0 === c.distX ? 0 : c.distX > 0 ? 1 : -1, c.dirY = 0 === c.distY ? 0 : c.distY > 0 ? 1 : -1;
            var d = Math.abs(c.distX) > Math.abs(c.distY) ? 1 : 0;
            if (!c.moving) return c.dirAx = d, void(c.moving = !0);
            c.dirAx !== d ? (c.distAxX = 0, c.distAxY = 0) : (c.distAxX += Math.abs(c.distX), 0 !== c.dirX && c.dirX !== c.lastDirX && (c.distAxX = 0), c.distAxY += Math.abs(c.distY), 0 !== c.dirY && c.dirY !== c.lastDirY && (c.distAxY = 0)), c.dirAx = d, c.dirAx && c.distAxX >= l.threshold && (c.distAxX = 0, r = this.placeEl.prev(l.itemNodeName), c.distX > 0 && r.length && !r.hasClass(l.collapsedClass) && (o = r.find(l.listNodeName).last(), this.placeEl.parents(l.listNodeName).length + this.dragDepth <= l.maxDepth && (o.length ? (o = r.children(l.listNodeName).last()).append(this.placeEl) : ((o = e("<" + l.listNodeName + "/>").addClass(l.listClass)).append(this.placeEl), r.append(o), this.setParent(r)))), c.distX < 0 && (this.placeEl.next(l.itemNodeName).length || (a = this.placeEl.parent(), this.placeEl.closest(l.itemNodeName).after(this.placeEl), a.children().length || this.unsetParent(a.parent()))));
            var u = !1;
            if (s || (this.dragEl[0].style.visibility = "hidden"), this.pointEl = e(i.elementFromPoint(n.pageX - i.body.scrollLeft, n.pageY - (t.pageYOffset || i.documentElement.scrollTop))), s || (this.dragEl[0].style.visibility = "visible"), this.pointEl.hasClass(l.handleClass) && (this.pointEl = this.pointEl.parent(l.itemNodeName)), this.pointEl.hasClass(l.emptyClass)) u = !0;
            else if (!this.pointEl.length || !this.pointEl.hasClass(l.itemClass)) return;
            var p = this.pointEl.closest("." + l.rootClass),
                h = this.dragRootEl.data("nestable-id") !== p.data("nestable-id");
            if (!c.dirAx || h || u) {
                if (h && l.group !== p.data("nestable-group")) return;
                if (this.dragDepth - 1 + this.pointEl.parents(l.listNodeName).length > l.maxDepth) return;
                var m = n.pageY < this.pointEl.offset().top + this.pointEl.height() / 2;
                a = this.placeEl.parent(), u ? ((o = e(i.createElement(l.listNodeName)).addClass(l.listClass)).append(this.placeEl), this.pointEl.replaceWith(o)) : m ? this.pointEl.before(this.placeEl) : this.pointEl.after(this.placeEl), a.children().length || this.unsetParent(a.parent()), this.dragRootEl.find(l.itemNodeName).length || this.dragRootEl.append('<div class="' + l.emptyClass + '"/>'), h && (this.dragRootEl = p, this.hasNewRoot = this.el[0] !== this.dragRootEl[0])
            }
        }
    }, e.fn.nestable = function(t) {
        var i = this;
        return this.each(function() {
            var n = e(this).data("nestable");
            n ? "string" == typeof t && "function" == typeof n[t] && (i = n[t]()) : (e(this).data("nestable", new o(this, t)), e(this).data("nestable-id", (new Date).getTime()))
        }), i || this
    }
}(window.jQuery || window.Zepto, window, document),
function() {
    function e(e) {
        return function(t, i, n, o) {
            i = b(i, o, 4);
            var a = !S(t) && v.keys(t),
                s = (a || t).length,
                r = e > 0 ? 0 : s - 1;
            return arguments.length < 3 && (n = t[a ? a[r] : r], r += e),
                function(t, i, n, o, a, s) {
                    for (; a >= 0 && s > a; a += e) {
                        var r = o ? o[a] : a;
                        n = i(n, t[r], r, t)
                    }
                    return n
                }(t, i, n, a, r, s)
        }
    }

    function t(e) {
        return function(t, i, n) {
            i = x(i, n);
            for (var o = C(t), a = e > 0 ? 0 : o - 1; a >= 0 && o > a; a += e)
                if (i(t[a], a, t)) return a;
            return -1
        }
    }

    function i(e, t, i) {
        return function(n, o, a) {
            var s = 0,
                r = C(n);
            if ("number" == typeof a) e > 0 ? s = a >= 0 ? a : Math.max(a + r, s) : r = a >= 0 ? Math.min(a + 1, r) : a + r + 1;
            else if (i && a && r) return a = i(n, o), n[a] === o ? a : -1;
            if (o != o) return (a = t(d.call(n, s, r), v.isNaN)) >= 0 ? a + s : -1;
            for (a = e > 0 ? s : r - 1; a >= 0 && r > a; a += e)
                if (n[a] === o) return a;
            return -1
        }
    }

    function n(e, t) {
        var i = I.length,
            n = e.constructor,
            o = v.isFunction(n) && n.prototype || r,
            a = "constructor";
        for (v.has(e, a) && !v.contains(t, a) && t.push(a); i--;)(a = I[i]) in e && e[a] !== o[a] && !v.contains(t, a) && t.push(a)
    }
    var o = this,
        a = o._,
        s = Array.prototype,
        r = Object.prototype,
        l = Function.prototype,
        c = s.push,
        d = s.slice,
        u = r.toString,
        p = r.hasOwnProperty,
        h = Array.isArray,
        m = Object.keys,
        f = l.bind,
        g = Object.create,
        _ = function() {},
        v = function(e) {
            return e instanceof v ? e : this instanceof v ? void(this._wrapped = e) : new v(e)
        };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = v), exports._ = v) : o._ = v, v.VERSION = "1.8.3";
    var b = function(e, t, i) {
            if (void 0 === t) return e;
            switch (null == i ? 3 : i) {
                case 1:
                    return function(i) {
                        return e.call(t, i)
                    };
                case 2:
                    return function(i, n) {
                        return e.call(t, i, n)
                    };
                case 3:
                    return function(i, n, o) {
                        return e.call(t, i, n, o)
                    };
                case 4:
                    return function(i, n, o, a) {
                        return e.call(t, i, n, o, a)
                    }
            }
            return function() {
                return e.apply(t, arguments)
            }
        },
        x = function(e, t, i) {
            return null == e ? v.identity : v.isFunction(e) ? b(e, t, i) : v.isObject(e) ? v.matcher(e) : v.property(e)
        };
    v.iteratee = function(e, t) {
        return x(e, t, 1 / 0)
    };
    var y = function(e, t) {
            return function(i) {
                var n = arguments.length;
                if (2 > n || null == i) return i;
                for (var o = 1; n > o; o++)
                    for (var a = arguments[o], s = e(a), r = s.length, l = 0; r > l; l++) {
                        var c = s[l];
                        t && void 0 !== i[c] || (i[c] = a[c])
                    }
                return i
            }
        },
        w = function(e) {
            if (!v.isObject(e)) return {};
            if (g) return g(e);
            _.prototype = e;
            var t = new _;
            return _.prototype = null, t
        },
        $ = function(e) {
            return function(t) {
                return null == t ? void 0 : t[e]
            }
        },
        k = Math.pow(2, 53) - 1,
        C = $("length"),
        S = function(e) {
            var t = C(e);
            return "number" == typeof t && t >= 0 && k >= t
        };
    v.each = v.forEach = function(e, t, i) {
        t = b(t, i);
        var n, o;
        if (S(e))
            for (n = 0, o = e.length; o > n; n++) t(e[n], n, e);
        else {
            var a = v.keys(e);
            for (n = 0, o = a.length; o > n; n++) t(e[a[n]], a[n], e)
        }
        return e
    }, v.map = v.collect = function(e, t, i) {
        t = x(t, i);
        for (var n = !S(e) && v.keys(e), o = (n || e).length, a = Array(o), s = 0; o > s; s++) {
            var r = n ? n[s] : s;
            a[s] = t(e[r], r, e)
        }
        return a
    }, v.reduce = v.foldl = v.inject = e(1), v.reduceRight = v.foldr = e(-1), v.find = v.detect = function(e, t, i) {
        var n;
        return void 0 !== (n = S(e) ? v.findIndex(e, t, i) : v.findKey(e, t, i)) && -1 !== n ? e[n] : void 0
    }, v.filter = v.select = function(e, t, i) {
        var n = [];
        return t = x(t, i), v.each(e, function(e, i, o) {
            t(e, i, o) && n.push(e)
        }), n
    }, v.reject = function(e, t, i) {
        return v.filter(e, v.negate(x(t)), i)
    }, v.every = v.all = function(e, t, i) {
        t = x(t, i);
        for (var n = !S(e) && v.keys(e), o = (n || e).length, a = 0; o > a; a++) {
            var s = n ? n[a] : a;
            if (!t(e[s], s, e)) return !1
        }
        return !0
    }, v.some = v.any = function(e, t, i) {
        t = x(t, i);
        for (var n = !S(e) && v.keys(e), o = (n || e).length, a = 0; o > a; a++) {
            var s = n ? n[a] : a;
            if (t(e[s], s, e)) return !0
        }
        return !1
    }, v.contains = v.includes = v.include = function(e, t, i, n) {
        return S(e) || (e = v.values(e)), ("number" != typeof i || n) && (i = 0), v.indexOf(e, t, i) >= 0
    }, v.invoke = function(e, t) {
        var i = d.call(arguments, 2),
            n = v.isFunction(t);
        return v.map(e, function(e) {
            var o = n ? t : e[t];
            return null == o ? o : o.apply(e, i)
        })
    }, v.pluck = function(e, t) {
        return v.map(e, v.property(t))
    }, v.where = function(e, t) {
        return v.filter(e, v.matcher(t))
    }, v.findWhere = function(e, t) {
        return v.find(e, v.matcher(t))
    }, v.max = function(e, t, i) {
        var n, o, a = -1 / 0,
            s = -1 / 0;
        if (null == t && null != e)
            for (var r = 0, l = (e = S(e) ? e : v.values(e)).length; l > r; r++)(n = e[r]) > a && (a = n);
        else t = x(t, i), v.each(e, function(e, i, n) {
            ((o = t(e, i, n)) > s || o === -1 / 0 && a === -1 / 0) && (a = e, s = o)
        });
        return a
    }, v.min = function(e, t, i) {
        var n, o, a = 1 / 0,
            s = 1 / 0;
        if (null == t && null != e)
            for (var r = 0, l = (e = S(e) ? e : v.values(e)).length; l > r; r++) n = e[r], a > n && (a = n);
        else t = x(t, i), v.each(e, function(e, i, n) {
            o = t(e, i, n), (s > o || 1 / 0 === o && 1 / 0 === a) && (a = e, s = o)
        });
        return a
    }, v.shuffle = function(e) {
        for (var t, i = S(e) ? e : v.values(e), n = i.length, o = Array(n), a = 0; n > a; a++)(t = v.random(0, a)) !== a && (o[a] = o[t]), o[t] = i[a];
        return o
    }, v.sample = function(e, t, i) {
        return null == t || i ? (S(e) || (e = v.values(e)), e[v.random(e.length - 1)]) : v.shuffle(e).slice(0, Math.max(0, t))
    }, v.sortBy = function(e, t, i) {
        return t = x(t, i), v.pluck(v.map(e, function(e, i, n) {
            return {
                value: e,
                index: i,
                criteria: t(e, i, n)
            }
        }).sort(function(e, t) {
            var i = e.criteria,
                n = t.criteria;
            if (i !== n) {
                if (i > n || void 0 === i) return 1;
                if (n > i || void 0 === n) return -1
            }
            return e.index - t.index
        }), "value")
    };
    var T = function(e) {
        return function(t, i, n) {
            var o = {};
            return i = x(i, n), v.each(t, function(n, a) {
                var s = i(n, a, t);
                e(o, n, s)
            }), o
        }
    };
    v.groupBy = T(function(e, t, i) {
        v.has(e, i) ? e[i].push(t) : e[i] = [t]
    }), v.indexBy = T(function(e, t, i) {
        e[i] = t
    }), v.countBy = T(function(e, t, i) {
        v.has(e, i) ? e[i]++ : e[i] = 1
    }), v.toArray = function(e) {
        return e ? v.isArray(e) ? d.call(e) : S(e) ? v.map(e, v.identity) : v.values(e) : []
    }, v.size = function(e) {
        return null == e ? 0 : S(e) ? e.length : v.keys(e).length
    }, v.partition = function(e, t, i) {
        t = x(t, i);
        var n = [],
            o = [];
        return v.each(e, function(e, i, a) {
            (t(e, i, a) ? n : o).push(e)
        }), [n, o]
    }, v.first = v.head = v.take = function(e, t, i) {
        return null == e ? void 0 : null == t || i ? e[0] : v.initial(e, e.length - t)
    }, v.initial = function(e, t, i) {
        return d.call(e, 0, Math.max(0, e.length - (null == t || i ? 1 : t)))
    }, v.last = function(e, t, i) {
        return null == e ? void 0 : null == t || i ? e[e.length - 1] : v.rest(e, Math.max(0, e.length - t))
    }, v.rest = v.tail = v.drop = function(e, t, i) {
        return d.call(e, null == t || i ? 1 : t)
    }, v.compact = function(e) {
        return v.filter(e, v.identity)
    };
    var j = function(e, t, i, n) {
        for (var o = [], a = 0, s = n || 0, r = C(e); r > s; s++) {
            var l = e[s];
            if (S(l) && (v.isArray(l) || v.isArguments(l))) {
                t || (l = j(l, t, i));
                var c = 0,
                    d = l.length;
                for (o.length += d; d > c;) o[a++] = l[c++]
            } else i || (o[a++] = l)
        }
        return o
    };
    v.flatten = function(e, t) {
        return j(e, t, !1)
    }, v.without = function(e) {
        return v.difference(e, d.call(arguments, 1))
    }, v.uniq = v.unique = function(e, t, i, n) {
        v.isBoolean(t) || (n = i, i = t, t = !1), null != i && (i = x(i, n));
        for (var o = [], a = [], s = 0, r = C(e); r > s; s++) {
            var l = e[s],
                c = i ? i(l, s, e) : l;
            t ? (s && a === c || o.push(l), a = c) : i ? v.contains(a, c) || (a.push(c), o.push(l)) : v.contains(o, l) || o.push(l)
        }
        return o
    }, v.union = function() {
        return v.uniq(j(arguments, !0, !0))
    }, v.intersection = function(e) {
        for (var t = [], i = arguments.length, n = 0, o = C(e); o > n; n++) {
            var a = e[n];
            if (!v.contains(t, a)) {
                for (var s = 1; i > s && v.contains(arguments[s], a); s++);
                s === i && t.push(a)
            }
        }
        return t
    }, v.difference = function(e) {
        var t = j(arguments, !0, !0, 1);
        return v.filter(e, function(e) {
            return !v.contains(t, e)
        })
    }, v.zip = function() {
        return v.unzip(arguments)
    }, v.unzip = function(e) {
        for (var t = e && v.max(e, C).length || 0, i = Array(t), n = 0; t > n; n++) i[n] = v.pluck(e, n);
        return i
    }, v.object = function(e, t) {
        for (var i = {}, n = 0, o = C(e); o > n; n++) t ? i[e[n]] = t[n] : i[e[n][0]] = e[n][1];
        return i
    }, v.findIndex = t(1), v.findLastIndex = t(-1), v.sortedIndex = function(e, t, i, n) {
        for (var o = (i = x(i, n, 1))(t), a = 0, s = C(e); s > a;) {
            var r = Math.floor((a + s) / 2);
            i(e[r]) < o ? a = r + 1 : s = r
        }
        return a
    }, v.indexOf = i(1, v.findIndex, v.sortedIndex), v.lastIndexOf = i(-1, v.findLastIndex), v.range = function(e, t, i) {
        null == t && (t = e || 0, e = 0), i = i || 1;
        for (var n = Math.max(Math.ceil((t - e) / i), 0), o = Array(n), a = 0; n > a; a++, e += i) o[a] = e;
        return o
    };
    var E = function(e, t, i, n, o) {
        if (!(n instanceof t)) return e.apply(i, o);
        var a = w(e.prototype),
            s = e.apply(a, o);
        return v.isObject(s) ? s : a
    };
    v.bind = function(e, t) {
        if (f && e.bind === f) return f.apply(e, d.call(arguments, 1));
        if (!v.isFunction(e)) throw new TypeError("Bind must be called on a function");
        var i = d.call(arguments, 2),
            n = function() {
                return E(e, n, t, this, i.concat(d.call(arguments)))
            };
        return n
    }, v.partial = function(e) {
        var t = d.call(arguments, 1),
            i = function() {
                for (var n = 0, o = t.length, a = Array(o), s = 0; o > s; s++) a[s] = t[s] === v ? arguments[n++] : t[s];
                for (; n < arguments.length;) a.push(arguments[n++]);
                return E(e, i, this, this, a)
            };
        return i
    }, v.bindAll = function(e) {
        var t, i, n = arguments.length;
        if (1 >= n) throw new Error("bindAll must be passed function names");
        for (t = 1; n > t; t++) i = arguments[t], e[i] = v.bind(e[i], e);
        return e
    }, v.memoize = function(e, t) {
        var i = function(n) {
            var o = i.cache,
                a = "" + (t ? t.apply(this, arguments) : n);
            return v.has(o, a) || (o[a] = e.apply(this, arguments)), o[a]
        };
        return i.cache = {}, i
    }, v.delay = function(e, t) {
        var i = d.call(arguments, 2);
        return setTimeout(function() {
            return e.apply(null, i)
        }, t)
    }, v.defer = v.partial(v.delay, v, 1), v.throttle = function(e, t, i) {
        var n, o, a, s = null,
            r = 0;
        i || (i = {});
        var l = function() {
            r = !1 === i.leading ? 0 : v.now(), s = null, a = e.apply(n, o), s || (n = o = null)
        };
        return function() {
            var c = v.now();
            r || !1 !== i.leading || (r = c);
            var d = t - (c - r);
            return n = this, o = arguments, 0 >= d || d > t ? (s && (clearTimeout(s), s = null), r = c, a = e.apply(n, o), s || (n = o = null)) : s || !1 === i.trailing || (s = setTimeout(l, d)), a
        }
    }, v.debounce = function(e, t, i) {
        var n, o, a, s, r, l = function() {
            var c = v.now() - s;
            t > c && c >= 0 ? n = setTimeout(l, t - c) : (n = null, i || (r = e.apply(a, o), n || (a = o = null)))
        };
        return function() {
            a = this, o = arguments, s = v.now();
            var c = i && !n;
            return n || (n = setTimeout(l, t)), c && (r = e.apply(a, o), a = o = null), r
        }
    }, v.wrap = function(e, t) {
        return v.partial(t, e)
    }, v.negate = function(e) {
        return function() {
            return !e.apply(this, arguments)
        }
    }, v.compose = function() {
        var e = arguments,
            t = e.length - 1;
        return function() {
            for (var i = t, n = e[t].apply(this, arguments); i--;) n = e[i].call(this, n);
            return n
        }
    }, v.after = function(e, t) {
        return function() {
            return --e < 1 ? t.apply(this, arguments) : void 0
        }
    }, v.before = function(e, t) {
        var i;
        return function() {
            return --e > 0 && (i = t.apply(this, arguments)), 1 >= e && (t = null), i
        }
    }, v.once = v.partial(v.before, 2);
    var P = !{
            toString: null
        }.propertyIsEnumerable("toString"),
        I = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
    v.keys = function(e) {
        if (!v.isObject(e)) return [];
        if (m) return m(e);
        var t = [];
        for (var i in e) v.has(e, i) && t.push(i);
        return P && n(e, t), t
    }, v.allKeys = function(e) {
        if (!v.isObject(e)) return [];
        var t = [];
        for (var i in e) t.push(i);
        return P && n(e, t), t
    }, v.values = function(e) {
        for (var t = v.keys(e), i = t.length, n = Array(i), o = 0; i > o; o++) n[o] = e[t[o]];
        return n
    }, v.mapObject = function(e, t, i) {
        t = x(t, i);
        for (var n, o = v.keys(e), a = o.length, s = {}, r = 0; a > r; r++) n = o[r], s[n] = t(e[n], n, e);
        return s
    }, v.pairs = function(e) {
        for (var t = v.keys(e), i = t.length, n = Array(i), o = 0; i > o; o++) n[o] = [t[o], e[t[o]]];
        return n
    }, v.invert = function(e) {
        for (var t = {}, i = v.keys(e), n = 0, o = i.length; o > n; n++) t[e[i[n]]] = i[n];
        return t
    }, v.functions = v.methods = function(e) {
        var t = [];
        for (var i in e) v.isFunction(e[i]) && t.push(i);
        return t.sort()
    }, v.extend = y(v.allKeys), v.extendOwn = v.assign = y(v.keys), v.findKey = function(e, t, i) {
        t = x(t, i);
        for (var n, o = v.keys(e), a = 0, s = o.length; s > a; a++)
            if (n = o[a], t(e[n], n, e)) return n
    }, v.pick = function(e, t, i) {
        var n, o, a = {},
            s = e;
        if (null == s) return a;
        v.isFunction(t) ? (o = v.allKeys(s), n = b(t, i)) : (o = j(arguments, !1, !1, 1), n = function(e, t, i) {
            return t in i
        }, s = Object(s));
        for (var r = 0, l = o.length; l > r; r++) {
            var c = o[r],
                d = s[c];
            n(d, c, s) && (a[c] = d)
        }
        return a
    }, v.omit = function(e, t, i) {
        if (v.isFunction(t)) t = v.negate(t);
        else {
            var n = v.map(j(arguments, !1, !1, 1), String);
            t = function(e, t) {
                return !v.contains(n, t)
            }
        }
        return v.pick(e, t, i)
    }, v.defaults = y(v.allKeys, !0), v.create = function(e, t) {
        var i = w(e);
        return t && v.extendOwn(i, t), i
    }, v.clone = function(e) {
        return v.isObject(e) ? v.isArray(e) ? e.slice() : v.extend({}, e) : e
    }, v.tap = function(e, t) {
        return t(e), e
    }, v.isMatch = function(e, t) {
        var i = v.keys(t),
            n = i.length;
        if (null == e) return !n;
        for (var o = Object(e), a = 0; n > a; a++) {
            var s = i[a];
            if (t[s] !== o[s] || !(s in o)) return !1
        }
        return !0
    };
    var A = function(e, t, i, n) {
        if (e === t) return 0 !== e || 1 / e == 1 / t;
        if (null == e || null == t) return e === t;
        e instanceof v && (e = e._wrapped), t instanceof v && (t = t._wrapped);
        var o = u.call(e);
        if (o !== u.call(t)) return !1;
        switch (o) {
            case "[object RegExp]":
            case "[object String]":
                return "" + e == "" + t;
            case "[object Number]":
                return +e != +e ? +t != +t : 0 == +e ? 1 / +e == 1 / t : +e == +t;
            case "[object Date]":
            case "[object Boolean]":
                return +e == +t
        }
        var a = "[object Array]" === o;
        if (!a) {
            if ("object" != typeof e || "object" != typeof t) return !1;
            var s = e.constructor,
                r = t.constructor;
            if (s !== r && !(v.isFunction(s) && s instanceof s && v.isFunction(r) && r instanceof r) && "constructor" in e && "constructor" in t) return !1
        }
        i = i || [], n = n || [];
        for (var l = i.length; l--;)
            if (i[l] === e) return n[l] === t;
        if (i.push(e), n.push(t), a) {
            if ((l = e.length) !== t.length) return !1;
            for (; l--;)
                if (!A(e[l], t[l], i, n)) return !1
        } else {
            var c, d = v.keys(e);
            if (l = d.length, v.keys(t).length !== l) return !1;
            for (; l--;)
                if (c = d[l], !v.has(t, c) || !A(e[c], t[c], i, n)) return !1
        }
        return i.pop(), n.pop(), !0
    };
    v.isEqual = function(e, t) {
        return A(e, t)
    }, v.isEmpty = function(e) {
        return null == e || (S(e) && (v.isArray(e) || v.isString(e) || v.isArguments(e)) ? 0 === e.length : 0 === v.keys(e).length)
    }, v.isElement = function(e) {
        return !(!e || 1 !== e.nodeType)
    }, v.isArray = h || function(e) {
        return "[object Array]" === u.call(e)
    }, v.isObject = function(e) {
        var t = typeof e;
        return "function" === t || "object" === t && !!e
    }, v.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(e) {
        v["is" + e] = function(t) {
            return u.call(t) === "[object " + e + "]"
        }
    }), v.isArguments(arguments) || (v.isArguments = function(e) {
        return v.has(e, "callee")
    }), "function" != typeof /./ && "object" != typeof Int8Array && (v.isFunction = function(e) {
        return "function" == typeof e || !1
    }), v.isFinite = function(e) {
        return isFinite(e) && !isNaN(parseFloat(e))
    }, v.isNaN = function(e) {
        return v.isNumber(e) && e !== +e
    }, v.isBoolean = function(e) {
        return !0 === e || !1 === e || "[object Boolean]" === u.call(e)
    }, v.isNull = function(e) {
        return null === e
    }, v.isUndefined = function(e) {
        return void 0 === e
    }, v.has = function(e, t) {
        return null != e && p.call(e, t)
    }, v.noConflict = function() {
        return o._ = a, this
    }, v.identity = function(e) {
        return e
    }, v.constant = function(e) {
        return function() {
            return e
        }
    }, v.noop = function() {}, v.property = $, v.propertyOf = function(e) {
        return null == e ? function() {} : function(t) {
            return e[t]
        }
    }, v.matcher = v.matches = function(e) {
        return e = v.extendOwn({}, e),
            function(t) {
                return v.isMatch(t, e)
            }
    }, v.times = function(e, t, i) {
        var n = Array(Math.max(0, e));
        t = b(t, i, 1);
        for (var o = 0; e > o; o++) n[o] = t(o);
        return n
    }, v.random = function(e, t) {
        return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
    }, v.now = Date.now || function() {
        return (new Date).getTime()
    };
    var F = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
        },
        D = v.invert(F),
        B = function(e) {
            var t = function(t) {
                    return e[t]
                },
                i = "(?:" + v.keys(e).join("|") + ")",
                n = RegExp(i),
                o = RegExp(i, "g");
            return function(e) {
                return e = null == e ? "" : "" + e, n.test(e) ? e.replace(o, t) : e
            }
        };
    v.escape = B(F), v.unescape = B(D), v.result = function(e, t, i) {
        var n = null == e ? void 0 : e[t];
        return void 0 === n && (n = i), v.isFunction(n) ? n.call(e) : n
    };
    var L = 0;
    v.uniqueId = function(e) {
        var t = ++L + "";
        return e ? e + t : t
    }, v.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var N = /(.)^/,
        z = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        M = /\\|'|\r|\n|\u2028|\u2029/g,
        O = function(e) {
            return "\\" + z[e]
        };
    v.template = function(e, t, i) {
        !t && i && (t = i), t = v.defaults({}, t, v.templateSettings);
        var n = RegExp([(t.escape || N).source, (t.interpolate || N).source, (t.evaluate || N).source].join("|") + "|$", "g"),
            o = 0,
            a = "__p+='";
        e.replace(n, function(t, i, n, s, r) {
            return a += e.slice(o, r).replace(M, O), o = r + t.length, i ? a += "'+\n((__t=(" + i + "))==null?'':_.escape(__t))+\n'" : n ? a += "'+\n((__t=(" + n + "))==null?'':__t)+\n'" : s && (a += "';\n" + s + "\n__p+='"), t
        }), a += "';\n", t.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
        try {
            var s = new Function(t.variable || "obj", "_", a)
        } catch (e) {
            throw e.source = a, e
        }
        var r = function(e) {
                return s.call(this, e, v)
            },
            l = t.variable || "obj";
        return r.source = "function(" + l + "){\n" + a + "}", r
    }, v.chain = function(e) {
        var t = v(e);
        return t._chain = !0, t
    };
    var R = function(e, t) {
        return e._chain ? v(t).chain() : t
    };
    v.mixin = function(e) {
        v.each(v.functions(e), function(t) {
            var i = v[t] = e[t];
            v.prototype[t] = function() {
                var e = [this._wrapped];
                return c.apply(e, arguments), R(this, i.apply(v, e))
            }
        })
    }, v.mixin(v), v.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(e) {
        var t = s[e];
        v.prototype[e] = function() {
            var i = this._wrapped;
            return t.apply(i, arguments), "shift" !== e && "splice" !== e || 0 !== i.length || delete i[0], R(this, i)
        }
    }), v.each(["concat", "join", "slice"], function(e) {
        var t = s[e];
        v.prototype[e] = function() {
            return R(this, t.apply(this._wrapped, arguments))
        }
    }), v.prototype.value = function() {
        return this._wrapped
    }, v.prototype.valueOf = v.prototype.toJSON = v.prototype.value, v.prototype.toString = function() {
        return "" + this._wrapped
    }, "function" == typeof define && define.amd && define("underscore", [], function() {
        return v
    })
}.call(this),
    function(e) {
        var t = "object" == typeof self && self.self === self && self || "object" == typeof global && global.global === global && global;
        if ("function" == typeof define && define.amd) define(["underscore", "jquery", "exports"], function(i, n, o) {
            t.Backbone = e(t, o, i, n)
        });
        else if ("undefined" != typeof exports) {
            var i, n = require("underscore");
            try {
                i = require("jquery")
            } catch (e) {}
            e(t, exports, n, i)
        } else t.Backbone = e(t, {}, t._, t.jQuery || t.Zepto || t.ender || t.$)
    }(function(e, t, i, n) {
        var o = e.Backbone,
            a = Array.prototype.slice;
        t.VERSION = "1.3.3", t.$ = n, t.noConflict = function() {
            return e.Backbone = o, this
        }, t.emulateHTTP = !1, t.emulateJSON = !1;
        var s = function(e, t, n) {
                i.each(t, function(t, o) {
                    i[o] && (e.prototype[o] = function(e, t, n) {
                        switch (e) {
                            case 1:
                                return function() {
                                    return i[t](this[n])
                                };
                            case 2:
                                return function(e) {
                                    return i[t](this[n], e)
                                };
                            case 3:
                                return function(e, o) {
                                    return i[t](this[n], r(e, this), o)
                                };
                            case 4:
                                return function(e, o, a) {
                                    return i[t](this[n], r(e, this), o, a)
                                };
                            default:
                                return function() {
                                    var e = a.call(arguments);
                                    return e.unshift(this[n]), i[t].apply(i, e)
                                }
                        }
                    }(t, o, n))
                })
            },
            r = function(e, t) {
                return i.isFunction(e) ? e : i.isObject(e) && !t._isModel(e) ? l(e) : i.isString(e) ? function(t) {
                    return t.get(e)
                } : e
            },
            l = function(e) {
                var t = i.matches(e);
                return function(e) {
                    return t(e.attributes)
                }
            },
            c = t.Events = {},
            d = /\s+/,
            u = function(e, t, n, o, a) {
                var s, r = 0;
                if (n && "object" == typeof n) {
                    void 0 !== o && "context" in a && void 0 === a.context && (a.context = o);
                    for (s = i.keys(n); r < s.length; r++) t = u(e, t, s[r], n[s[r]], a)
                } else if (n && d.test(n))
                    for (s = n.split(d); r < s.length; r++) t = e(t, s[r], o, a);
                else t = e(t, n, o, a);
                return t
            };
        c.on = function(e, t, i) {
            return p(this, e, t, i)
        };
        var p = function(e, t, i, n, o) {
            if (e._events = u(h, e._events || {}, t, i, {
                    context: n,
                    ctx: e,
                    listening: o
                }), o) {
                (e._listeners || (e._listeners = {}))[o.id] = o
            }
            return e
        };
        c.listenTo = function(e, t, n) {
            if (!e) return this;
            var o = e._listenId || (e._listenId = i.uniqueId("l")),
                a = this._listeningTo || (this._listeningTo = {}),
                s = a[o];
            if (!s) {
                var r = this._listenId || (this._listenId = i.uniqueId("l"));
                s = a[o] = {
                    obj: e,
                    objId: o,
                    id: r,
                    listeningTo: a,
                    count: 0
                }
            }
            return p(e, t, n, this, s), this
        };
        var h = function(e, t, i, n) {
            if (i) {
                var o = e[t] || (e[t] = []),
                    a = n.context,
                    s = n.ctx,
                    r = n.listening;
                r && r.count++, o.push({
                    callback: i,
                    context: a,
                    ctx: a || s,
                    listening: r
                })
            }
            return e
        };
        c.off = function(e, t, i) {
            return this._events ? (this._events = u(m, this._events, e, t, {
                context: i,
                listeners: this._listeners
            }), this) : this
        }, c.stopListening = function(e, t, n) {
            var o = this._listeningTo;
            if (!o) return this;
            for (var a = e ? [e._listenId] : i.keys(o), s = 0; s < a.length; s++) {
                var r = o[a[s]];
                if (!r) break;
                r.obj.off(t, n, this)
            }
            return this
        };
        var m = function(e, t, n, o) {
            if (e) {
                var a, s = 0,
                    r = o.context,
                    l = o.listeners;
                if (t || n || r) {
                    for (var c = t ? [t] : i.keys(e); s < c.length; s++) {
                        var d = e[t = c[s]];
                        if (!d) break;
                        for (var u = [], p = 0; p < d.length; p++) {
                            var h = d[p];
                            n && n !== h.callback && n !== h.callback._callback || r && r !== h.context ? u.push(h) : (a = h.listening) && 0 == --a.count && (delete l[a.id], delete a.listeningTo[a.objId])
                        }
                        u.length ? e[t] = u : delete e[t]
                    }
                    return e
                }
                for (var m = i.keys(l); s < m.length; s++) delete l[(a = l[m[s]]).id], delete a.listeningTo[a.objId]
            }
        };
        c.once = function(e, t, n) {
            var o = u(f, {}, e, t, i.bind(this.off, this));
            return "string" == typeof e && null == n && (t = void 0), this.on(o, t, n)
        }, c.listenToOnce = function(e, t, n) {
            var o = u(f, {}, t, n, i.bind(this.stopListening, this, e));
            return this.listenTo(e, o)
        };
        var f = function(e, t, n, o) {
            if (n) {
                var a = e[t] = i.once(function() {
                    o(t, a), n.apply(this, arguments)
                });
                a._callback = n
            }
            return e
        };
        c.trigger = function(e) {
            if (!this._events) return this;
            for (var t = Math.max(0, arguments.length - 1), i = Array(t), n = 0; n < t; n++) i[n] = arguments[n + 1];
            return u(g, this._events, e, void 0, i), this
        };
        var g = function(e, t, i, n) {
                if (e) {
                    var o = e[t],
                        a = e.all;
                    o && a && (a = a.slice()), o && _(o, n), a && _(a, [t].concat(n))
                }
                return e
            },
            _ = function(e, t) {
                var i, n = -1,
                    o = e.length,
                    a = t[0],
                    s = t[1],
                    r = t[2];
                switch (t.length) {
                    case 0:
                        for (; ++n < o;)(i = e[n]).callback.call(i.ctx);
                        return;
                    case 1:
                        for (; ++n < o;)(i = e[n]).callback.call(i.ctx, a);
                        return;
                    case 2:
                        for (; ++n < o;)(i = e[n]).callback.call(i.ctx, a, s);
                        return;
                    case 3:
                        for (; ++n < o;)(i = e[n]).callback.call(i.ctx, a, s, r);
                        return;
                    default:
                        for (; ++n < o;)(i = e[n]).callback.apply(i.ctx, t);
                        return
                }
            };
        c.bind = c.on, c.unbind = c.off, i.extend(t, c);
        var v = t.Model = function(e, t) {
            var n = e || {};
            t || (t = {}), this.cid = i.uniqueId(this.cidPrefix), this.attributes = {}, t.collection && (this.collection = t.collection), t.parse && (n = this.parse(n, t) || {});
            var o = i.result(this, "defaults");
            n = i.defaults(i.extend({}, o, n), o), this.set(n, t), this.changed = {}, this.initialize.apply(this, arguments)
        };
        i.extend(v.prototype, c, {
            changed: null,
            validationError: null,
            idAttribute: "id",
            cidPrefix: "c",
            initialize: function() {},
            toJSON: function(e) {
                return i.clone(this.attributes)
            },
            sync: function() {
                return t.sync.apply(this, arguments)
            },
            get: function(e) {
                return this.attributes[e]
            },
            escape: function(e) {
                return i.escape(this.get(e))
            },
            has: function(e) {
                return null != this.get(e)
            },
            matches: function(e) {
                return !!i.iteratee(e, this)(this.attributes)
            },
            set: function(e, t, n) {
                if (null == e) return this;
                var o;
                if ("object" == typeof e ? (o = e, n = t) : (o = {})[e] = t, n || (n = {}), !this._validate(o, n)) return !1;
                var a = n.unset,
                    s = n.silent,
                    r = [],
                    l = this._changing;
                this._changing = !0, l || (this._previousAttributes = i.clone(this.attributes), this.changed = {});
                var c = this.attributes,
                    d = this.changed,
                    u = this._previousAttributes;
                for (var p in o) t = o[p], i.isEqual(c[p], t) || r.push(p), i.isEqual(u[p], t) ? delete d[p] : d[p] = t, a ? delete c[p] : c[p] = t;
                if (this.idAttribute in o && (this.id = this.get(this.idAttribute)), !s) {
                    r.length && (this._pending = n);
                    for (var h = 0; h < r.length; h++) this.trigger("change:" + r[h], this, c[r[h]], n)
                }
                if (l) return this;
                if (!s)
                    for (; this._pending;) n = this._pending, this._pending = !1, this.trigger("change", this, n);
                return this._pending = !1, this._changing = !1, this
            },
            unset: function(e, t) {
                return this.set(e, void 0, i.extend({}, t, {
                    unset: !0
                }))
            },
            clear: function(e) {
                var t = {};
                for (var n in this.attributes) t[n] = void 0;
                return this.set(t, i.extend({}, e, {
                    unset: !0
                }))
            },
            hasChanged: function(e) {
                return null == e ? !i.isEmpty(this.changed) : i.has(this.changed, e)
            },
            changedAttributes: function(e) {
                if (!e) return !!this.hasChanged() && i.clone(this.changed);
                var t = this._changing ? this._previousAttributes : this.attributes,
                    n = {};
                for (var o in e) {
                    var a = e[o];
                    i.isEqual(t[o], a) || (n[o] = a)
                }
                return !!i.size(n) && n
            },
            previous: function(e) {
                return null != e && this._previousAttributes ? this._previousAttributes[e] : null
            },
            previousAttributes: function() {
                return i.clone(this._previousAttributes)
            },
            fetch: function(e) {
                var t = this,
                    n = (e = i.extend({
                        parse: !0
                    }, e)).success;
                return e.success = function(i) {
                    var o = e.parse ? t.parse(i, e) : i;
                    if (!t.set(o, e)) return !1;
                    n && n.call(e.context, t, i, e), t.trigger("sync", t, i, e)
                }, N(this, e), this.sync("read", this, e)
            },
            save: function(e, t, n) {
                var o;
                null == e || "object" == typeof e ? (o = e, n = t) : (o = {})[e] = t;
                var a = (n = i.extend({
                    validate: !0,
                    parse: !0
                }, n)).wait;
                if (o && !a) {
                    if (!this.set(o, n)) return !1
                } else if (!this._validate(o, n)) return !1;
                var s = this,
                    r = n.success,
                    l = this.attributes;
                n.success = function(e) {
                    s.attributes = l;
                    var t = n.parse ? s.parse(e, n) : e;
                    if (a && (t = i.extend({}, o, t)), t && !s.set(t, n)) return !1;
                    r && r.call(n.context, s, e, n), s.trigger("sync", s, e, n)
                }, N(this, n), o && a && (this.attributes = i.extend({}, l, o));
                var c = this.isNew() ? "create" : n.patch ? "patch" : "update";
                "patch" !== c || n.attrs || (n.attrs = o);
                var d = this.sync(c, this, n);
                return this.attributes = l, d
            },
            destroy: function(e) {
                var t = this,
                    n = (e = e ? i.clone(e) : {}).success,
                    o = e.wait,
                    a = function() {
                        t.stopListening(), t.trigger("destroy", t, t.collection, e)
                    };
                e.success = function(i) {
                    o && a(), n && n.call(e.context, t, i, e), t.isNew() || t.trigger("sync", t, i, e)
                };
                var s = !1;
                return this.isNew() ? i.defer(e.success) : (N(this, e), s = this.sync("delete", this, e)), o || a(), s
            },
            url: function() {
                var e = i.result(this, "urlRoot") || i.result(this.collection, "url") || L();
                if (this.isNew()) return e;
                var t = this.get(this.idAttribute);
                return e.replace(/[^\/]$/, "$&/") + encodeURIComponent(t)
            },
            parse: function(e, t) {
                return e
            },
            clone: function() {
                return new this.constructor(this.attributes)
            },
            isNew: function() {
                return !this.has(this.idAttribute)
            },
            isValid: function(e) {
                return this._validate({}, i.extend({}, e, {
                    validate: !0
                }))
            },
            _validate: function(e, t) {
                if (!t.validate || !this.validate) return !0;
                e = i.extend({}, this.attributes, e);
                var n = this.validationError = this.validate(e, t) || null;
                return !n || (this.trigger("invalid", this, n, i.extend(t, {
                    validationError: n
                })), !1)
            }
        });
        s(v, {
            keys: 1,
            values: 1,
            pairs: 1,
            invert: 1,
            pick: 0,
            omit: 0,
            chain: 1,
            isEmpty: 1
        }, "attributes");
        var b = t.Collection = function(e, t) {
                t || (t = {}), t.model && (this.model = t.model), void 0 !== t.comparator && (this.comparator = t.comparator), this._reset(), this.initialize.apply(this, arguments), e && this.reset(e, i.extend({
                    silent: !0
                }, t))
            },
            x = {
                add: !0,
                remove: !0,
                merge: !0
            },
            y = {
                add: !0,
                remove: !1
            },
            w = function(e, t, i) {
                i = Math.min(Math.max(i, 0), e.length);
                var n, o = Array(e.length - i),
                    a = t.length;
                for (n = 0; n < o.length; n++) o[n] = e[n + i];
                for (n = 0; n < a; n++) e[n + i] = t[n];
                for (n = 0; n < o.length; n++) e[n + a + i] = o[n]
            };
        i.extend(b.prototype, c, {
            model: v,
            initialize: function() {},
            toJSON: function(e) {
                return this.map(function(t) {
                    return t.toJSON(e)
                })
            },
            sync: function() {
                return t.sync.apply(this, arguments)
            },
            add: function(e, t) {
                return this.set(e, i.extend({
                    merge: !1
                }, t, y))
            },
            remove: function(e, t) {
                t = i.extend({}, t);
                var n = !i.isArray(e);
                e = n ? [e] : e.slice();
                var o = this._removeModels(e, t);
                return !t.silent && o.length && (t.changes = {
                    added: [],
                    merged: [],
                    removed: o
                }, this.trigger("update", this, t)), n ? o[0] : o
            },
            set: function(e, t) {
                if (null != e) {
                    (t = i.extend({}, x, t)).parse && !this._isModel(e) && (e = this.parse(e, t) || []);
                    var n = !i.isArray(e);
                    e = n ? [e] : e.slice();
                    var o = t.at;
                    null != o && (o = +o), o > this.length && (o = this.length), o < 0 && (o += this.length + 1);
                    var a, s, r = [],
                        l = [],
                        c = [],
                        d = [],
                        u = {},
                        p = t.add,
                        h = t.merge,
                        m = t.remove,
                        f = !1,
                        g = this.comparator && null == o && !1 !== t.sort,
                        _ = i.isString(this.comparator) ? this.comparator : null;
                    for (s = 0; s < e.length; s++) {
                        a = e[s];
                        var v = this.get(a);
                        if (v) {
                            if (h && a !== v) {
                                var b = this._isModel(a) ? a.attributes : a;
                                t.parse && (b = v.parse(b, t)), v.set(b, t), c.push(v), g && !f && (f = v.hasChanged(_))
                            }
                            u[v.cid] || (u[v.cid] = !0, r.push(v)), e[s] = v
                        } else p && (a = e[s] = this._prepareModel(a, t)) && (l.push(a), this._addReference(a, t), u[a.cid] = !0, r.push(a))
                    }
                    if (m) {
                        for (s = 0; s < this.length; s++) u[(a = this.models[s]).cid] || d.push(a);
                        d.length && this._removeModels(d, t)
                    }
                    var y = !1,
                        $ = !g && p && m;
                    if (r.length && $ ? (y = this.length !== r.length || i.some(this.models, function(e, t) {
                            return e !== r[t]
                        }), this.models.length = 0, w(this.models, r, 0), this.length = this.models.length) : l.length && (g && (f = !0), w(this.models, l, null == o ? this.length : o), this.length = this.models.length), f && this.sort({
                            silent: !0
                        }), !t.silent) {
                        for (s = 0; s < l.length; s++) null != o && (t.index = o + s), (a = l[s]).trigger("add", a, this, t);
                        (f || y) && this.trigger("sort", this, t), (l.length || d.length || c.length) && (t.changes = {
                            added: l,
                            removed: d,
                            merged: c
                        }, this.trigger("update", this, t))
                    }
                    return n ? e[0] : e
                }
            },
            reset: function(e, t) {
                t = t ? i.clone(t) : {};
                for (var n = 0; n < this.models.length; n++) this._removeReference(this.models[n], t);
                return t.previousModels = this.models, this._reset(), e = this.add(e, i.extend({
                    silent: !0
                }, t)), t.silent || this.trigger("reset", this, t), e
            },
            push: function(e, t) {
                return this.add(e, i.extend({
                    at: this.length
                }, t))
            },
            pop: function(e) {
                var t = this.at(this.length - 1);
                return this.remove(t, e)
            },
            unshift: function(e, t) {
                return this.add(e, i.extend({
                    at: 0
                }, t))
            },
            shift: function(e) {
                var t = this.at(0);
                return this.remove(t, e)
            },
            slice: function() {
                return a.apply(this.models, arguments)
            },
            get: function(e) {
                if (null != e) return this._byId[e] || this._byId[this.modelId(e.attributes || e)] || e.cid && this._byId[e.cid]
            },
            has: function(e) {
                return null != this.get(e)
            },
            at: function(e) {
                return e < 0 && (e += this.length), this.models[e]
            },
            where: function(e, t) {
                return this[t ? "find" : "filter"](e)
            },
            findWhere: function(e) {
                return this.where(e, !0)
            },
            sort: function(e) {
                var t = this.comparator;
                if (!t) throw new Error("Cannot sort a set without a comparator");
                e || (e = {});
                var n = t.length;
                return i.isFunction(t) && (t = i.bind(t, this)), 1 === n || i.isString(t) ? this.models = this.sortBy(t) : this.models.sort(t), e.silent || this.trigger("sort", this, e), this
            },
            pluck: function(e) {
                return this.map(e + "")
            },
            fetch: function(e) {
                var t = (e = i.extend({
                        parse: !0
                    }, e)).success,
                    n = this;
                return e.success = function(i) {
                    var o = e.reset ? "reset" : "set";
                    n[o](i, e), t && t.call(e.context, n, i, e), n.trigger("sync", n, i, e)
                }, N(this, e), this.sync("read", this, e)
            },
            create: function(e, t) {
                var n = (t = t ? i.clone(t) : {}).wait;
                if (!(e = this._prepareModel(e, t))) return !1;
                n || this.add(e, t);
                var o = this,
                    a = t.success;
                return t.success = function(e, t, i) {
                    n && o.add(e, i), a && a.call(i.context, e, t, i)
                }, e.save(null, t), e
            },
            parse: function(e, t) {
                return e
            },
            clone: function() {
                return new this.constructor(this.models, {
                    model: this.model,
                    comparator: this.comparator
                })
            },
            modelId: function(e) {
                return e[this.model.prototype.idAttribute || "id"]
            },
            _reset: function() {
                this.length = 0, this.models = [], this._byId = {}
            },
            _prepareModel: function(e, t) {
                if (this._isModel(e)) return e.collection || (e.collection = this), e;
                (t = t ? i.clone(t) : {}).collection = this;
                var n = new this.model(e, t);
                return n.validationError ? (this.trigger("invalid", this, n.validationError, t), !1) : n
            },
            _removeModels: function(e, t) {
                for (var i = [], n = 0; n < e.length; n++) {
                    var o = this.get(e[n]);
                    if (o) {
                        var a = this.indexOf(o);
                        this.models.splice(a, 1), this.length--, delete this._byId[o.cid];
                        var s = this.modelId(o.attributes);
                        null != s && delete this._byId[s], t.silent || (t.index = a, o.trigger("remove", o, this, t)), i.push(o), this._removeReference(o, t)
                    }
                }
                return i
            },
            _isModel: function(e) {
                return e instanceof v
            },
            _addReference: function(e, t) {
                this._byId[e.cid] = e;
                var i = this.modelId(e.attributes);
                null != i && (this._byId[i] = e), e.on("all", this._onModelEvent, this)
            },
            _removeReference: function(e, t) {
                delete this._byId[e.cid];
                var i = this.modelId(e.attributes);
                null != i && delete this._byId[i], this === e.collection && delete e.collection, e.off("all", this._onModelEvent, this)
            },
            _onModelEvent: function(e, t, i, n) {
                if (t) {
                    if (("add" === e || "remove" === e) && i !== this) return;
                    if ("destroy" === e && this.remove(t, n), "change" === e) {
                        var o = this.modelId(t.previousAttributes()),
                            a = this.modelId(t.attributes);
                        o !== a && (null != o && delete this._byId[o], null != a && (this._byId[a] = t))
                    }
                }
                this.trigger.apply(this, arguments)
            }
        });
        s(b, {
            forEach: 3,
            each: 3,
            map: 3,
            collect: 3,
            reduce: 0,
            foldl: 0,
            inject: 0,
            reduceRight: 0,
            foldr: 0,
            find: 3,
            detect: 3,
            filter: 3,
            select: 3,
            reject: 3,
            every: 3,
            all: 3,
            some: 3,
            any: 3,
            include: 3,
            includes: 3,
            contains: 3,
            invoke: 0,
            max: 3,
            min: 3,
            toArray: 1,
            size: 1,
            first: 3,
            head: 3,
            take: 3,
            initial: 3,
            rest: 3,
            tail: 3,
            drop: 3,
            last: 3,
            without: 0,
            difference: 0,
            indexOf: 3,
            shuffle: 1,
            lastIndexOf: 3,
            isEmpty: 1,
            chain: 1,
            sample: 3,
            partition: 3,
            groupBy: 3,
            countBy: 3,
            sortBy: 3,
            indexBy: 3,
            findIndex: 3,
            findLastIndex: 3
        }, "models");
        var $ = t.View = function(e) {
                this.cid = i.uniqueId("view"), i.extend(this, i.pick(e, C)), this._ensureElement(), this.initialize.apply(this, arguments)
            },
            k = /^(\S+)\s*(.*)$/,
            C = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
        i.extend($.prototype, c, {
            tagName: "div",
            $: function(e) {
                return this.$el.find(e)
            },
            initialize: function() {},
            render: function() {
                return this
            },
            remove: function() {
                return this._removeElement(), this.stopListening(), this
            },
            _removeElement: function() {
                this.$el.remove()
            },
            setElement: function(e) {
                return this.undelegateEvents(), this._setElement(e), this.delegateEvents(), this
            },
            _setElement: function(e) {
                this.$el = e instanceof t.$ ? e : t.$(e), this.el = this.$el[0]
            },
            delegateEvents: function(e) {
                if (e || (e = i.result(this, "events")), !e) return this;
                this.undelegateEvents();
                for (var t in e) {
                    var n = e[t];
                    if (i.isFunction(n) || (n = this[n]), n) {
                        var o = t.match(k);
                        this.delegate(o[1], o[2], i.bind(n, this))
                    }
                }
                return this
            },
            delegate: function(e, t, i) {
                return this.$el.on(e + ".delegateEvents" + this.cid, t, i), this
            },
            undelegateEvents: function() {
                return this.$el && this.$el.off(".delegateEvents" + this.cid), this
            },
            undelegate: function(e, t, i) {
                return this.$el.off(e + ".delegateEvents" + this.cid, t, i), this
            },
            _createElement: function(e) {
                return document.createElement(e)
            },
            _ensureElement: function() {
                if (this.el) this.setElement(i.result(this, "el"));
                else {
                    var e = i.extend({}, i.result(this, "attributes"));
                    this.id && (e.id = i.result(this, "id")), this.className && (e.class = i.result(this, "className")), this.setElement(this._createElement(i.result(this, "tagName"))), this._setAttributes(e)
                }
            },
            _setAttributes: function(e) {
                this.$el.attr(e)
            }
        }), t.sync = function(e, n, o) {
            var a = S[e];
            i.defaults(o || (o = {}), {
                emulateHTTP: t.emulateHTTP,
                emulateJSON: t.emulateJSON
            });
            var s = {
                type: a,
                dataType: "json"
            };
            if (o.url || (s.url = i.result(n, "url") || L()), null != o.data || !n || "create" !== e && "update" !== e && "patch" !== e || (s.contentType = "application/json", s.data = JSON.stringify(o.attrs || n.toJSON(o))), o.emulateJSON && (s.contentType = "application/x-www-form-urlencoded", s.data = s.data ? {
                    model: s.data
                } : {}), o.emulateHTTP && ("PUT" === a || "DELETE" === a || "PATCH" === a)) {
                s.type = "POST", o.emulateJSON && (s.data._method = a);
                var r = o.beforeSend;
                o.beforeSend = function(e) {
                    if (e.setRequestHeader("X-HTTP-Method-Override", a), r) return r.apply(this, arguments)
                }
            }
            "GET" === s.type || o.emulateJSON || (s.processData = !1);
            var l = o.error;
            o.error = function(e, t, i) {
                o.textStatus = t, o.errorThrown = i, l && l.call(o.context, e, t, i)
            };
            var c = o.xhr = t.ajax(i.extend(s, o));
            return n.trigger("request", n, c, o), c
        };
        var S = {
            create: "POST",
            update: "PUT",
            patch: "PATCH",
            delete: "DELETE",
            read: "GET"
        };
        t.ajax = function() {
            return t.$.ajax.apply(t.$, arguments)
        };
        var T = t.Router = function(e) {
                e || (e = {}), e.routes && (this.routes = e.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
            },
            j = /\((.*?)\)/g,
            E = /(\(\?)?:\w+/g,
            P = /\*\w+/g,
            I = /[\-{}\[\]+?.,\\\^$|#\s]/g;
        i.extend(T.prototype, c, {
            initialize: function() {},
            route: function(e, n, o) {
                i.isRegExp(e) || (e = this._routeToRegExp(e)), i.isFunction(n) && (o = n, n = ""), o || (o = this[n]);
                var a = this;
                return t.history.route(e, function(i) {
                    var s = a._extractParameters(e, i);
                    !1 !== a.execute(o, s, n) && (a.trigger.apply(a, ["route:" + n].concat(s)), a.trigger("route", n, s), t.history.trigger("route", a, n, s))
                }), this
            },
            execute: function(e, t, i) {
                e && e.apply(this, t)
            },
            navigate: function(e, i) {
                return t.history.navigate(e, i), this
            },
            _bindRoutes: function() {
                if (this.routes) {
                    this.routes = i.result(this, "routes");
                    for (var e, t = i.keys(this.routes); null != (e = t.pop());) this.route(e, this.routes[e])
                }
            },
            _routeToRegExp: function(e) {
                return e = e.replace(I, "\\$&").replace(j, "(?:$1)?").replace(E, function(e, t) {
                    return t ? e : "([^/?]+)"
                }).replace(P, "([^?]*?)"), new RegExp("^" + e + "(?:\\?([\\s\\S]*))?$")
            },
            _extractParameters: function(e, t) {
                var n = e.exec(t).slice(1);
                return i.map(n, function(e, t) {
                    return t === n.length - 1 ? e || null : e ? decodeURIComponent(e) : null
                })
            }
        });
        var A = t.History = function() {
                this.handlers = [], this.checkUrl = i.bind(this.checkUrl, this), "undefined" != typeof window && (this.location = window.location, this.history = window.history)
            },
            F = /^[#\/]|\s+$/g,
            D = /^\/+|\/+$/g,
            B = /#.*$/;
        A.started = !1, i.extend(A.prototype, c, {
            interval: 50,
            atRoot: function() {
                return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root && !this.getSearch()
            },
            matchRoot: function() {
                return this.decodeFragment(this.location.pathname).slice(0, this.root.length - 1) + "/" === this.root
            },
            decodeFragment: function(e) {
                return decodeURI(e.replace(/%25/g, "%2525"))
            },
            getSearch: function() {
                var e = this.location.href.replace(/#.*/, "").match(/\?.+/);
                return e ? e[0] : ""
            },
            getHash: function(e) {
                var t = (e || this).location.href.match(/#(.*)$/);
                return t ? t[1] : ""
            },
            getPath: function() {
                var e = this.decodeFragment(this.location.pathname + this.getSearch()).slice(this.root.length - 1);
                return "/" === e.charAt(0) ? e.slice(1) : e
            },
            getFragment: function(e) {
                return null == e && (e = this._usePushState || !this._wantsHashChange ? this.getPath() : this.getHash()), e.replace(F, "")
            },
            start: function(e) {
                if (A.started) throw new Error("Backbone.history has already been started");
                if (A.started = !0, this.options = i.extend({
                        root: "/"
                    }, this.options, e), this.root = this.options.root, this._wantsHashChange = !1 !== this.options.hashChange, this._hasHashChange = "onhashchange" in window && (void 0 === document.documentMode || document.documentMode > 7), this._useHashChange = this._wantsHashChange && this._hasHashChange, this._wantsPushState = !!this.options.pushState, this._hasPushState = !(!this.history || !this.history.pushState), this._usePushState = this._wantsPushState && this._hasPushState, this.fragment = this.getFragment(), this.root = ("/" + this.root + "/").replace(D, "/"), this._wantsHashChange && this._wantsPushState) {
                    if (!this._hasPushState && !this.atRoot()) {
                        var t = this.root.slice(0, -1) || "/";
                        return this.location.replace(t + "#" + this.getPath()), !0
                    }
                    this._hasPushState && this.atRoot() && this.navigate(this.getHash(), {
                        replace: !0
                    })
                }
                if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
                    this.iframe = document.createElement("iframe"), this.iframe.src = "javascript:0", this.iframe.style.display = "none", this.iframe.tabIndex = -1;
                    var n = document.body,
                        o = n.insertBefore(this.iframe, n.firstChild).contentWindow;
                    o.document.open(), o.document.close(), o.location.hash = "#" + this.fragment
                }
                var a = window.addEventListener || function(e, t) {
                    return attachEvent("on" + e, t)
                };
                if (this._usePushState ? a("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe ? a("hashchange", this.checkUrl, !1) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), !this.options.silent) return this.loadUrl()
            },
            stop: function() {
                var e = window.removeEventListener || function(e, t) {
                    return detachEvent("on" + e, t)
                };
                this._usePushState ? e("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe && e("hashchange", this.checkUrl, !1), this.iframe && (document.body.removeChild(this.iframe), this.iframe = null), this._checkUrlInterval && clearInterval(this._checkUrlInterval), A.started = !1
            },
            route: function(e, t) {
                this.handlers.unshift({
                    route: e,
                    callback: t
                })
            },
            checkUrl: function(e) {
                var t = this.getFragment();
                if (t === this.fragment && this.iframe && (t = this.getHash(this.iframe.contentWindow)), t === this.fragment) return !1;
                this.iframe && this.navigate(t), this.loadUrl()
            },
            loadUrl: function(e) {
                return !!this.matchRoot() && (e = this.fragment = this.getFragment(e), i.some(this.handlers, function(t) {
                    if (t.route.test(e)) return t.callback(e), !0
                }))
            },
            navigate: function(e, t) {
                if (!A.started) return !1;
                t && !0 !== t || (t = {
                    trigger: !!t
                }), e = this.getFragment(e || "");
                var i = this.root;
                "" !== e && "?" !== e.charAt(0) || (i = i.slice(0, -1) || "/");
                var n = i + e;
                if (e = this.decodeFragment(e.replace(B, "")), this.fragment !== e) {
                    if (this.fragment = e, this._usePushState) this.history[t.replace ? "replaceState" : "pushState"]({}, document.title, n);
                    else {
                        if (!this._wantsHashChange) return this.location.assign(n);
                        if (this._updateHash(this.location, e, t.replace), this.iframe && e !== this.getHash(this.iframe.contentWindow)) {
                            var o = this.iframe.contentWindow;
                            t.replace || (o.document.open(), o.document.close()), this._updateHash(o.location, e, t.replace)
                        }
                    }
                    return t.trigger ? this.loadUrl(e) : void 0
                }
            },
            _updateHash: function(e, t, i) {
                if (i) {
                    var n = e.href.replace(/(javascript:|#).*$/, "");
                    e.replace(n + "#" + t)
                } else e.hash = "#" + t
            }
        }), t.history = new A;
        v.extend = b.extend = T.extend = $.extend = A.extend = function(e, t) {
            var n, o = this;
            return n = e && i.has(e, "constructor") ? e.constructor : function() {
                return o.apply(this, arguments)
            }, i.extend(n, o, t), n.prototype = i.create(o.prototype, e), n.prototype.constructor = n, n.__super__ = o.prototype, n
        };
        var L = function() {
                throw new Error('A "url" property or function must be specified')
            },
            N = function(e, t) {
                var i = t.error;
                t.error = function(n) {
                    i && i.call(t.context, e, n, t), e.trigger("error", e, n, t)
                }
            };
        return t
    }),
    function(e, t, i, n) {
        "use strict";

        function o(e) {
            var t = e.currentTarget,
                n = e.data ? e.data.options : {},
                o = n.selector ? i(n.selector) : e.data ? e.data.items : [],
                a = i(t).attr("data-fancybox") || "",
                s = 0,
                r = i.fancybox.getInstance();
            e.preventDefault(), r && r.current.opts.$orig.is(t) || (a ? (o = o.length ? o.filter('[data-fancybox="' + a + '"]') : i('[data-fancybox="' + a + '"]'), (s = o.index(t)) < 0 && (s = 0)) : o = [t], i.fancybox.open(o, n, s))
        }
        if (i) {
            if (i.fn.fancybox) return void i.error("fancyBox already initialized");
            var a = {
                    loop: !1,
                    margin: [44, 0],
                    gutter: 50,
                    keyboard: !0,
                    arrows: !0,
                    infobar: !1,
                    toolbar: !0,
                    buttons: ["slideShow", "fullScreen", "thumbs", "close"],
                    idleTime: 4,
                    smallBtn: "auto",
                    protect: !1,
                    modal: !1,
                    image: {
                        preload: "auto"
                    },
                    ajax: {
                        settings: {
                            data: {
                                fancybox: !0
                            }
                        }
                    },
                    iframe: {
                        tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',
                        preload: !0,
                        css: {},
                        attr: {
                            scrolling: "auto"
                        }
                    },
                    animationEffect: "zoom",
                    animationDuration: 366,
                    zoomOpacity: "auto",
                    transitionEffect: "fade",
                    transitionDuration: 366,
                    slideClass: "",
                    baseClass: "",
                    baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><button data-fancybox-prev title="{{PREV}}" class="fancybox-button fancybox-button--left"></button><div class="fancybox-infobar__body"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><button data-fancybox-next title="{{NEXT}}" class="fancybox-button fancybox-button--right"></button></div><div class="fancybox-toolbar">{{BUTTONS}}</div><div class="fancybox-navigation"><button data-fancybox-prev title="{{PREV}}" class="fancybox-arrow fancybox-arrow--left" /><button data-fancybox-next title="{{NEXT}}" class="fancybox-arrow fancybox-arrow--right" /></div><div class="fancybox-stage"></div><div class="fancybox-caption-wrap"><div class="fancybox-caption"></div></div></div></div>',
                    spinnerTpl: '<div class="fancybox-loading"></div>',
                    errorTpl: '<div class="fancybox-error"><p>{{ERROR}}<p></div>',
                    btnTpl: {
                        slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"></button>',
                        fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="{{FULL_SCREEN}}"></button>',
                        thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"></button>',
                        close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"></button>',
                        smallBtn: '<button data-fancybox-close class="fancybox-close-small" title="{{CLOSE}}"></button>'
                    },
                    parentEl: "body",
                    autoFocus: !0,
                    backFocus: !0,
                    trapFocus: !0,
                    fullScreen: {
                        autoStart: !1
                    },
                    touch: {
                        vertical: !0,
                        momentum: !0
                    },
                    hash: null,
                    media: {},
                    slideShow: {
                        autoStart: !1,
                        speed: 4e3
                    },
                    thumbs: {
                        autoStart: !1,
                        hideOnClose: !0
                    },
                    onInit: i.noop,
                    beforeLoad: i.noop,
                    afterLoad: i.noop,
                    beforeShow: i.noop,
                    afterShow: i.noop,
                    beforeClose: i.noop,
                    afterClose: i.noop,
                    onActivate: i.noop,
                    onDeactivate: i.noop,
                    clickContent: function(e, t) {
                        return "image" === e.type && "zoom"
                    },
                    clickSlide: "close",
                    clickOutside: "close",
                    dblclickContent: !1,
                    dblclickSlide: !1,
                    dblclickOutside: !1,
                    mobile: {
                        clickContent: function(e, t) {
                            return "image" === e.type && "toggleControls"
                        },
                        clickSlide: function(e, t) {
                            return "image" === e.type ? "toggleControls" : "close"
                        },
                        dblclickContent: function(e, t) {
                            return "image" === e.type && "zoom"
                        },
                        dblclickSlide: function(e, t) {
                            return "image" === e.type && "zoom"
                        }
                    },
                    lang: "en",
                    i18n: {
                        en: {
                            CLOSE: "Close",
                            NEXT: "Next",
                            PREV: "Previous",
                            ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
                            PLAY_START: "Start slideshow",
                            PLAY_STOP: "Pause slideshow",
                            FULL_SCREEN: "Full screen",
                            THUMBS: "Thumbnails"
                        },
                        de: {
                            CLOSE: "Schliessen",
                            NEXT: "Weiter",
                            PREV: "ZurÃ¼ck",
                            ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es spÃ¤ter nochmal.",
                            PLAY_START: "Diaschau starten",
                            PLAY_STOP: "Diaschau beenden",
                            FULL_SCREEN: "Vollbild",
                            THUMBS: "Vorschaubilder"
                        }
                    }
                },
                s = i(e),
                r = i(t),
                l = 0,
                c = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || function(t) {
                    return e.setTimeout(t, 1e3 / 60)
                },
                d = function() {
                    var e, i = t.createElement("fakeelement"),
                        o = {
                            transition: "transitionend",
                            OTransition: "oTransitionEnd",
                            MozTransition: "transitionend",
                            WebkitTransition: "webkitTransitionEnd"
                        };
                    for (e in o)
                        if (i.style[e] !== n) return o[e]
                }(),
                u = function(e) {
                    return e && e.length && e[0].offsetHeight
                },
                p = function(e, n, o) {
                    this.opts = i.extend(!0, {
                        index: o
                    }, a, n || {}), n && i.isArray(n.buttons) && (this.opts.buttons = n.buttons), this.id = this.opts.id || ++l, this.group = [], this.currIndex = parseInt(this.opts.index, 10) || 0, this.prevIndex = null, this.prevPos = null, this.currPos = 0, this.firstRun = null, this.createGroup(e), this.group.length && (this.$lastFocus = i(t.activeElement).blur(), this.slides = {}, this.init(e))
                };
            i.extend(p.prototype, {
                init: function() {
                    var e, t, n, o = this,
                        a = o.group[o.currIndex].opts;
                    o.scrollTop = r.scrollTop(), o.scrollLeft = r.scrollLeft(), i.fancybox.getInstance() || i.fancybox.isMobile || "hidden" === i("body").css("overflow") || (e = i("body").width(), i("html").addClass("fancybox-enabled"), (e = i("body").width() - e) > 1 && i("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar, .fancybox-enabled body { margin-right: ' + e + "px; }</style>")), n = "", i.each(a.buttons, function(e, t) {
                        n += a.btnTpl[t] || ""
                    }), t = i(o.translate(o, a.baseTpl.replace("{{BUTTONS}}", n))).addClass("fancybox-is-hidden").attr("id", "fancybox-container-" + o.id).addClass(a.baseClass).data("FancyBox", o).prependTo(a.parentEl), o.$refs = {
                        container: t
                    }, ["bg", "inner", "infobar", "toolbar", "stage", "caption"].forEach(function(e) {
                        o.$refs[e] = t.find(".fancybox-" + e)
                    }), (!a.arrows || o.group.length < 2) && t.find(".fancybox-navigation").remove(), a.infobar || o.$refs.infobar.remove(), a.toolbar || o.$refs.toolbar.remove(), o.trigger("onInit"), o.activate(), o.jumpTo(o.currIndex)
                },
                translate: function(e, t) {
                    var i = e.opts.i18n[e.opts.lang];
                    return t.replace(/\{\{(\w+)\}\}/g, function(e, t) {
                        var o = i[t];
                        return o === n ? e : o
                    })
                },
                createGroup: function(e) {
                    var t = this,
                        o = i.makeArray(e);
                    i.each(o, function(e, o) {
                        var a, s, r, l, c = {},
                            d = {},
                            u = [];
                        i.isPlainObject(o) ? (c = o, d = o.opts || o) : "object" === i.type(o) && i(o).length ? (a = i(o), u = a.data(), d = "options" in u ? u.options : {}, d = "object" === i.type(d) ? d : {}, c.src = "src" in u ? u.src : d.src || a.attr("href"), ["width", "height", "thumb", "type", "filter"].forEach(function(e) {
                            e in u && (d[e] = u[e])
                        }), "srcset" in u && (d.image = {
                            srcset: u.srcset
                        }), d.$orig = a, c.type || c.src || (c.type = "inline", c.src = o)) : c = {
                            type: "html",
                            src: o + ""
                        }, c.opts = i.extend(!0, {}, t.opts, d), i.fancybox.isMobile && (c.opts = i.extend(!0, {}, c.opts, c.opts.mobile)), s = c.type || c.opts.type, r = c.src || "", !s && r && (r.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? s = "image" : r.match(/\.(pdf)((\?|#).*)?$/i) ? s = "pdf" : "#" === r.charAt(0) && (s = "inline")), c.type = s, c.index = t.group.length, c.opts.$orig && !c.opts.$orig.length && delete c.opts.$orig, !c.opts.$thumb && c.opts.$orig && (c.opts.$thumb = c.opts.$orig.find("img:first")), c.opts.$thumb && !c.opts.$thumb.length && delete c.opts.$thumb, "function" === i.type(c.opts.caption) ? c.opts.caption = c.opts.caption.apply(o, [t, c]) : "caption" in u && (c.opts.caption = u.caption), c.opts.caption = c.opts.caption === n ? "" : c.opts.caption + "", "ajax" === s && (l = r.split(/\s+/, 2)).length > 1 && (c.src = l.shift(), c.opts.filter = l.shift()), "auto" == c.opts.smallBtn && (i.inArray(s, ["html", "inline", "ajax"]) > -1 ? (c.opts.toolbar = !1, c.opts.smallBtn = !0) : c.opts.smallBtn = !1), "pdf" === s && (c.type = "iframe", c.opts.iframe.preload = !1), c.opts.modal && (c.opts = i.extend(!0, c.opts, {
                            infobar: 0,
                            toolbar: 0,
                            smallBtn: 0,
                            keyboard: 0,
                            slideShow: 0,
                            fullScreen: 0,
                            thumbs: 0,
                            touch: 0,
                            clickContent: !1,
                            clickSlide: !1,
                            clickOutside: !1,
                            dblclickContent: !1,
                            dblclickSlide: !1,
                            dblclickOutside: !1
                        })), t.group.push(c)
                    })
                },
                addEvents: function() {
                    var n = this;
                    n.removeEvents(), n.$refs.container.on("click.fb-close", "[data-fancybox-close]", function(e) {
                        e.stopPropagation(), e.preventDefault(), n.close(e)
                    }).on("click.fb-prev touchend.fb-prev", "[data-fancybox-prev]", function(e) {
                        e.stopPropagation(), e.preventDefault(), n.previous()
                    }).on("click.fb-next touchend.fb-next", "[data-fancybox-next]", function(e) {
                        e.stopPropagation(), e.preventDefault(), n.next()
                    }), s.on("orientationchange.fb resize.fb", function(e) {
                        e && e.originalEvent && "resize" === e.originalEvent.type ? c(function() {
                            n.update()
                        }) : (n.$refs.stage.hide(), setTimeout(function() {
                            n.$refs.stage.show(), n.update()
                        }, 500))
                    }), r.on("focusin.fb", function(e) {
                        var o = i.fancybox ? i.fancybox.getInstance() : null;
                        o.isClosing || !o.current || !o.current.opts.trapFocus || i(e.target).hasClass("fancybox-container") || i(e.target).is(t) || o && "fixed" !== i(e.target).css("position") && !o.$refs.container.has(e.target).length && (e.stopPropagation(), o.focus(), s.scrollTop(n.scrollTop).scrollLeft(n.scrollLeft))
                    }), r.on("keydown.fb", function(e) {
                        var t = n.current,
                            o = e.keyCode || e.which;
                        if (t && t.opts.keyboard && !i(e.target).is("input") && !i(e.target).is("textarea")) return 8 === o || 27 === o ? (e.preventDefault(), void n.close(e)) : 37 === o || 38 === o ? (e.preventDefault(), void n.previous()) : 39 === o || 40 === o ? (e.preventDefault(), void n.next()) : void n.trigger("afterKeydown", e, o)
                    }), n.group[n.currIndex].opts.idleTime && (n.idleSecondsCounter = 0, r.on("mousemove.fb-idle mouseenter.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function() {
                        n.idleSecondsCounter = 0, n.isIdle && n.showControls(), n.isIdle = !1
                    }), n.idleInterval = e.setInterval(function() {
                        n.idleSecondsCounter++, n.idleSecondsCounter >= n.group[n.currIndex].opts.idleTime && (n.isIdle = !0, n.idleSecondsCounter = 0, n.hideControls())
                    }, 1e3))
                },
                removeEvents: function() {
                    s.off("orientationchange.fb resize.fb"), r.off("focusin.fb keydown.fb .fb-idle"), this.$refs.container.off(".fb-close .fb-prev .fb-next"), this.idleInterval && (e.clearInterval(this.idleInterval), this.idleInterval = null)
                },
                previous: function(e) {
                    return this.jumpTo(this.currPos - 1, e)
                },
                next: function(e) {
                    return this.jumpTo(this.currPos + 1, e)
                },
                jumpTo: function(e, t, o) {
                    var a, s, r, l, c, d, p, h = this,
                        m = h.group.length;
                    if (!(h.isSliding || h.isClosing || h.isAnimating && h.firstRun)) {
                        if (e = parseInt(e, 10), !(s = h.current ? h.current.opts.loop : h.opts.loop) && (e < 0 || e >= m)) return !1;
                        if (a = h.firstRun = null === h.firstRun, !(m < 2 && !a && h.isSliding)) {
                            if (l = h.current, h.prevIndex = h.currIndex, h.prevPos = h.currPos, r = h.createSlide(e), m > 1 && ((s || r.index > 0) && h.createSlide(e - 1), (s || r.index < m - 1) && h.createSlide(e + 1)), h.current = r, h.currIndex = r.index, h.currPos = r.pos, h.trigger("beforeShow", a), h.updateControls(), d = i.fancybox.getTranslate(r.$slide), r.isMoved = (0 !== d.left || 0 !== d.top) && !r.$slide.hasClass("fancybox-animated"), r.forcedDuration = n, i.isNumeric(t) ? r.forcedDuration = t : t = r.opts[a ? "animationDuration" : "transitionDuration"], t = parseInt(t, 10), a) return r.opts.animationEffect && t && h.$refs.container.css("transition-duration", t + "ms"), h.$refs.container.removeClass("fancybox-is-hidden"), u(h.$refs.container), h.$refs.container.addClass("fancybox-is-open"), r.$slide.addClass("fancybox-slide--current"), h.loadSlide(r), void h.preload();
                            i.each(h.slides, function(e, t) {
                                i.fancybox.stop(t.$slide)
                            }), r.$slide.removeClass("fancybox-slide--next fancybox-slide--previous").addClass("fancybox-slide--current"), r.isMoved ? (c = Math.round(r.$slide.width()), i.each(h.slides, function(e, n) {
                                var o = n.pos - r.pos;
                                i.fancybox.animate(n.$slide, {
                                    top: 0,
                                    left: o * c + o * n.opts.gutter
                                }, t, function() {
                                    n.$slide.removeAttr("style").removeClass("fancybox-slide--next fancybox-slide--previous"), n.pos === h.currPos && (r.isMoved = !1, h.complete())
                                })
                            })) : h.$refs.stage.children().removeAttr("style"), r.isLoaded ? h.revealContent(r) : h.loadSlide(r), h.preload(), l.pos !== r.pos && (p = "fancybox-slide--" + (l.pos > r.pos ? "next" : "previous"), l.$slide.removeClass("fancybox-slide--complete fancybox-slide--current fancybox-slide--next fancybox-slide--previous"), l.isComplete = !1, t && (r.isMoved || r.opts.transitionEffect) && (r.isMoved ? l.$slide.addClass(p) : (p = "fancybox-animated " + p + " fancybox-fx-" + r.opts.transitionEffect, i.fancybox.animate(l.$slide, p, t, function() {
                                l.$slide.removeClass(p).removeAttr("style")
                            }))))
                        }
                    }
                },
                createSlide: function(e) {
                    var t, n;
                    return n = e % this.group.length, n = n < 0 ? this.group.length + n : n, !this.slides[e] && this.group[n] && (t = i('<div class="fancybox-slide"></div>').appendTo(this.$refs.stage), this.slides[e] = i.extend(!0, {}, this.group[n], {
                        pos: e,
                        $slide: t,
                        isLoaded: !1
                    }), this.updateSlide(this.slides[e])), this.slides[e]
                },
                scaleToActual: function(e, t, o) {
                    var a, s, r, l, c, d = this,
                        u = d.current,
                        p = u.$content,
                        h = parseInt(u.$slide.width(), 10),
                        m = parseInt(u.$slide.height(), 10),
                        f = u.width,
                        g = u.height;
                    "image" != u.type || u.hasError || !p || d.isAnimating || (i.fancybox.stop(p), d.isAnimating = !0, e = e === n ? .5 * h : e, t = t === n ? .5 * m : t, a = i.fancybox.getTranslate(p), l = f / a.width, c = g / a.height, s = .5 * h - .5 * f, r = .5 * m - .5 * g, f > h && ((s = a.left * l - (e * l - e)) > 0 && (s = 0), s < h - f && (s = h - f)), g > m && ((r = a.top * c - (t * c - t)) > 0 && (r = 0), r < m - g && (r = m - g)), d.updateCursor(f, g), i.fancybox.animate(p, {
                        top: r,
                        left: s,
                        scaleX: l,
                        scaleY: c
                    }, o || 330, function() {
                        d.isAnimating = !1
                    }), d.SlideShow && d.SlideShow.isActive && d.SlideShow.stop())
                },
                scaleToFit: function(e) {
                    var t, n = this,
                        o = n.current,
                        a = o.$content;
                    "image" != o.type || o.hasError || !a || n.isAnimating || (i.fancybox.stop(a), n.isAnimating = !0, t = n.getFitPos(o), n.updateCursor(t.width, t.height), i.fancybox.animate(a, {
                        top: t.top,
                        left: t.left,
                        scaleX: t.width / a.width(),
                        scaleY: t.height / a.height()
                    }, e || 330, function() {
                        n.isAnimating = !1
                    }))
                },
                getFitPos: function(e) {
                    var t, n, o, a, r, l = e.$content,
                        c = e.width,
                        d = e.height,
                        u = e.opts.margin;
                    return !(!l || !l.length || !c && !d) && ("number" === i.type(u) && (u = [u, u]), 2 == u.length && (u = [u[0], u[1], u[0], u[1]]), s.width() < 800 && (u = [0, 0, 0, 0]), t = parseInt(this.$refs.stage.width(), 10) - (u[1] + u[3]), n = parseInt(this.$refs.stage.height(), 10) - (u[0] + u[2]), o = Math.min(1, t / c, n / d), a = Math.floor(o * c), r = Math.floor(o * d), {
                        top: Math.floor(.5 * (n - r)) + u[0],
                        left: Math.floor(.5 * (t - a)) + u[3],
                        width: a,
                        height: r
                    })
                },
                update: function() {
                    var e = this;
                    i.each(e.slides, function(t, i) {
                        e.updateSlide(i)
                    })
                },
                updateSlide: function(e) {
                    var t = e.$content;
                    t && (e.width || e.height) && (i.fancybox.stop(t), i.fancybox.setTranslate(t, this.getFitPos(e)), e.pos === this.currPos && this.updateCursor()), e.$slide.trigger("refresh"), this.trigger("onUpdate", e)
                },
                updateCursor: function(e, t) {
                    var i = this.$refs.container.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-drag fancybox-can-zoomOut");
                    this.current && !this.isClosing && (this.isZoomable() ? (i.addClass("fancybox-is-zoomable"), (e !== n && t !== n ? e < this.current.width && t < this.current.height : this.isScaledDown()) ? i.addClass("fancybox-can-zoomIn") : this.current.opts.touch ? i.addClass("fancybox-can-drag") : i.addClass("fancybox-can-zoomOut")) : this.current.opts.touch && i.addClass("fancybox-can-drag"))
                },
                isZoomable: function() {
                    var e, t = this.current;
                    if (t && !this.isClosing) return !!("image" === t.type && t.isLoaded && !t.hasError && ("zoom" === t.opts.clickContent || i.isFunction(t.opts.clickContent) && "zoom" === t.opts.clickContent(t)) && (e = this.getFitPos(t), t.width > e.width || t.height > e.height))
                },
                isScaledDown: function() {
                    var e = this.current,
                        t = e.$content,
                        n = !1;
                    return t && (n = i.fancybox.getTranslate(t), n = n.width < e.width || n.height < e.height), n
                },
                canPan: function() {
                    var e = this.current,
                        t = e.$content,
                        i = !1;
                    return t && (i = this.getFitPos(e), i = Math.abs(t.width() - i.width) > 1 || Math.abs(t.height() - i.height) > 1), i
                },
                loadSlide: function(e) {
                    var t, n, o, a = this;
                    if (!e.isLoading && !e.isLoaded) {
                        switch (e.isLoading = !0, a.trigger("beforeLoad", e), t = e.type, (n = e.$slide).off("refresh").trigger("onReset").addClass("fancybox-slide--" + (t || "unknown")).addClass(e.opts.slideClass), t) {
                            case "image":
                                a.setImage(e);
                                break;
                            case "iframe":
                                a.setIframe(e);
                                break;
                            case "html":
                                a.setContent(e, e.src || e.content);
                                break;
                            case "inline":
                                i(e.src).length ? a.setContent(e, i(e.src)) : a.setError(e);
                                break;
                            case "ajax":
                                a.showLoading(e), o = i.ajax(i.extend({}, e.opts.ajax.settings, {
                                    url: e.src,
                                    success: function(t, i) {
                                        "success" === i && a.setContent(e, t)
                                    },
                                    error: function(t, i) {
                                        t && "abort" !== i && a.setError(e)
                                    }
                                })), n.one("onReset", function() {
                                    o.abort()
                                });
                                break;
                            default:
                                a.setError(e)
                        }
                        return !0
                    }
                },
                setImage: function(t) {
                    var n, o, a, s, r = this,
                        l = t.opts.image.srcset;
                    if (l) {
                        a = e.devicePixelRatio || 1, s = e.innerWidth * a, (o = l.split(",").map(function(e) {
                            var t = {};
                            return e.trim().split(/\s+/).forEach(function(e, i) {
                                var n = parseInt(e.substring(0, e.length - 1), 10);
                                return 0 === i ? t.url = e : void(n && (t.value = n, t.postfix = e[e.length - 1]))
                            }), t
                        })).sort(function(e, t) {
                            return e.value - t.value
                        });
                        for (var c = 0; c < o.length; c++) {
                            var d = o[c];
                            if ("w" === d.postfix && d.value >= s || "x" === d.postfix && d.value >= a) {
                                n = d;
                                break
                            }
                        }!n && o.length && (n = o[o.length - 1]), n && (t.src = n.url, t.width && t.height && "w" == n.postfix && (t.height = t.width / t.height * n.value, t.width = n.value))
                    }
                    t.$content = i('<div class="fancybox-image-wrap"></div>').addClass("fancybox-is-hidden").appendTo(t.$slide), !1 !== t.opts.preload && t.opts.width && t.opts.height && (t.opts.thumb || t.opts.$thumb) ? (t.width = t.opts.width, t.height = t.opts.height, t.$ghost = i("<img />").one("error", function() {
                        i(this).remove(), t.$ghost = null, r.setBigImage(t)
                    }).one("load", function() {
                        r.afterLoad(t), r.setBigImage(t)
                    }).addClass("fancybox-image").appendTo(t.$content).attr("src", t.opts.thumb || t.opts.$thumb.attr("src"))) : r.setBigImage(t)
                },
                setBigImage: function(e) {
                    var t = this,
                        n = i("<img />");
                    e.$image = n.one("error", function() {
                        t.setError(e)
                    }).one("load", function() {
                        clearTimeout(e.timouts), e.timouts = null, t.isClosing || (e.width = this.naturalWidth, e.height = this.naturalHeight, e.opts.image.srcset && n.attr("sizes", "100vw").attr("srcset", e.opts.image.srcset), t.hideLoading(e), e.$ghost ? e.timouts = setTimeout(function() {
                            e.timouts = null, e.$ghost.hide()
                        }, Math.min(300, Math.max(1e3, e.height / 1600))) : t.afterLoad(e))
                    }).addClass("fancybox-image").attr("src", e.src).appendTo(e.$content), (n[0].complete || "complete" == n[0].readyState) && n[0].naturalWidth && n[0].naturalHeight ? n.trigger("load") : n[0].error ? n.trigger("error") : e.timouts = setTimeout(function() {
                        n[0].complete || e.hasError || t.showLoading(e)
                    }, 100)
                },
                setIframe: function(e) {
                    var t, o = this,
                        a = e.opts.iframe,
                        s = e.$slide;
                    e.$content = i('<div class="fancybox-content' + (a.preload ? " fancybox-is-hidden" : "") + '"></div>').css(a.css).appendTo(s), t = i(a.tpl.replace(/\{rnd\}/g, (new Date).getTime())).attr(a.attr).appendTo(e.$content), a.preload ? (o.showLoading(e), t.on("load.fb error.fb", function(t) {
                        this.isReady = 1, e.$slide.trigger("refresh"), o.afterLoad(e)
                    }), s.on("refresh.fb", function() {
                        var i, o, s = e.$content,
                            r = a.css.width,
                            l = a.css.height;
                        if (1 === t[0].isReady) {
                            try {
                                o = t.contents().find("body")
                            } catch (e) {}
                            o && o.length && (r === n && (i = t[0].contentWindow.document.documentElement.scrollWidth, r = Math.ceil(o.outerWidth(!0) + (s.width() - i)), r += s.outerWidth() - s.innerWidth()), l === n && (l = Math.ceil(o.outerHeight(!0)), l += s.outerHeight() - s.innerHeight()), r && s.width(r), l && s.height(l)), s.removeClass("fancybox-is-hidden")
                        }
                    })) : this.afterLoad(e), t.attr("src", e.src), !0 === e.opts.smallBtn && e.$content.prepend(o.translate(e, e.opts.btnTpl.smallBtn)), s.one("onReset", function() {
                        try {
                            i(this).find("iframe").hide().attr("src", "//about:blank")
                        } catch (e) {}
                        i(this).empty(), e.isLoaded = !1
                    })
                },
                setContent: function(e, t) {
                    this.isClosing || (this.hideLoading(e), e.$slide.empty(), function(e) {
                        return e && e.hasOwnProperty && e instanceof i
                    }(t) && t.parent().length ? (t.parent(".fancybox-slide--inline").trigger("onReset"), e.$placeholder = i("<div></div>").hide().insertAfter(t), t.css("display", "inline-block")) : e.hasError || ("string" === i.type(t) && 3 === (t = i("<div>").append(i.trim(t)).contents())[0].nodeType && (t = i("<div>").html(t)), e.opts.filter && (t = i("<div>").html(t).find(e.opts.filter))), e.$slide.one("onReset", function() {
                        e.$placeholder && (e.$placeholder.after(t.hide()).remove(), e.$placeholder = null), e.$smallBtn && (e.$smallBtn.remove(), e.$smallBtn = null), e.hasError || (i(this).empty(), e.isLoaded = !1)
                    }), e.$content = i(t).appendTo(e.$slide), e.opts.smallBtn && !e.$smallBtn && (e.$smallBtn = i(this.translate(e, e.opts.btnTpl.smallBtn)).appendTo(e.$content.filter("div").first())), this.afterLoad(e))
                },
                setError: function(e) {
                    e.hasError = !0, e.$slide.removeClass("fancybox-slide--" + e.type), this.setContent(e, this.translate(e, e.opts.errorTpl))
                },
                showLoading: function(e) {
                    (e = e || this.current) && !e.$spinner && (e.$spinner = i(this.opts.spinnerTpl).appendTo(e.$slide))
                },
                hideLoading: function(e) {
                    (e = e || this.current) && e.$spinner && (e.$spinner.remove(), delete e.$spinner)
                },
                afterLoad: function(e) {
                    this.isClosing || (e.isLoading = !1, e.isLoaded = !0, this.trigger("afterLoad", e), this.hideLoading(e), e.opts.protect && e.$content && !e.hasError && (e.$content.on("contextmenu.fb", function(e) {
                        return 2 == e.button && e.preventDefault(), !0
                    }), "image" === e.type && i('<div class="fancybox-spaceball"></div>').appendTo(e.$content)), this.revealContent(e))
                },
                revealContent: function(e) {
                    var t, o, a, s, r, l = this,
                        c = e.$slide,
                        d = !1;
                    return t = e.opts[l.firstRun ? "animationEffect" : "transitionEffect"], a = e.opts[l.firstRun ? "animationDuration" : "transitionDuration"], a = parseInt(e.forcedDuration === n ? a : e.forcedDuration, 10), !e.isMoved && e.pos === l.currPos && a || (t = !1), "zoom" !== t || e.pos === l.currPos && a && "image" === e.type && !e.hasError && (d = l.getThumbPos(e)) || (t = "fade"), "zoom" === t ? (r = l.getFitPos(e), r.scaleX = r.width / d.width, r.scaleY = r.height / d.height, delete r.width, delete r.height, "auto" == (s = e.opts.zoomOpacity) && (s = Math.abs(e.width / e.height - d.width / d.height) > .1), s && (d.opacity = .1, r.opacity = 1), i.fancybox.setTranslate(e.$content.removeClass("fancybox-is-hidden"), d), u(e.$content), void i.fancybox.animate(e.$content, r, a, function() {
                        l.complete()
                    })) : (l.updateSlide(e), t ? (i.fancybox.stop(c), o = "fancybox-animated fancybox-slide--" + (e.pos > l.prevPos ? "next" : "previous") + " fancybox-fx-" + t, c.removeAttr("style").removeClass("fancybox-slide--current fancybox-slide--next fancybox-slide--previous").addClass(o), e.$content.removeClass("fancybox-is-hidden"), u(c), void i.fancybox.animate(c, "fancybox-slide--current", a, function(t) {
                        c.removeClass(o).removeAttr("style"), e.pos === l.currPos && l.complete()
                    }, !0)) : (u(c), e.$content.removeClass("fancybox-is-hidden"), void(e.pos === l.currPos && l.complete())))
                },
                getThumbPos: function(n) {
                    var o, a = !1,
                        s = n.opts.$thumb,
                        r = s ? s.offset() : 0;
                    return r && s[0].ownerDocument === t && function(t) {
                        for (var n = t[0], o = n.getBoundingClientRect(), a = []; null !== n.parentElement;) "hidden" !== i(n.parentElement).css("overflow") && "auto" !== i(n.parentElement).css("overflow") || a.push(n.parentElement.getBoundingClientRect()), n = n.parentElement;
                        return a.every(function(e) {
                            var t = Math.min(o.right, e.right) - Math.max(o.left, e.left),
                                i = Math.min(o.bottom, e.bottom) - Math.max(o.top, e.top);
                            return t > 0 && i > 0
                        }) && o.bottom > 0 && o.right > 0 && o.left < i(e).width() && o.top < i(e).height()
                    }(s) && (o = this.$refs.stage.offset(), a = {
                        top: r.top - o.top + parseFloat(s.css("border-top-width") || 0),
                        left: r.left - o.left + parseFloat(s.css("border-left-width") || 0),
                        width: s.width(),
                        height: s.height(),
                        scaleX: 1,
                        scaleY: 1
                    }), a
                },
                complete: function() {
                    var e = this,
                        n = e.current,
                        o = {};
                    n.isMoved || !n.isLoaded || n.isComplete || (n.isComplete = !0, n.$slide.siblings().trigger("onReset"), u(n.$slide), n.$slide.addClass("fancybox-slide--complete"), i.each(e.slides, function(t, n) {
                        n.pos >= e.currPos - 1 && n.pos <= e.currPos + 1 ? o[n.pos] = n : n && (i.fancybox.stop(n.$slide), n.$slide.off().remove())
                    }), e.slides = o, e.updateCursor(), e.trigger("afterShow"), (i(t.activeElement).is("[disabled]") || n.opts.autoFocus && "image" != n.type && "iframe" !== n.type) && e.focus())
                },
                preload: function() {
                    var e, t;
                    this.group.length < 2 || (e = this.slides[this.currPos + 1], t = this.slides[this.currPos - 1], e && "image" === e.type && this.loadSlide(e), t && "image" === t.type && this.loadSlide(t))
                },
                focus: function() {
                    var e, t = this.current;
                    this.isClosing || (t && t.isComplete && ((e = t.$slide.find("input[autofocus]:enabled:visible:first")).length || (e = t.$slide.find("button,:input,[tabindex],a").filter(":enabled:visible:first"))), (e = e && e.length ? e : this.$refs.container).focus())
                },
                activate: function() {
                    var e = this;
                    i(".fancybox-container").each(function() {
                        var t = i(this).data("FancyBox");
                        t && t.uid !== e.uid && !t.isClosing && t.trigger("onDeactivate")
                    }), e.current && (e.$refs.container.index() > 0 && e.$refs.container.prependTo(t.body), e.updateControls()), e.trigger("onActivate"), e.addEvents()
                },
                close: function(e, t) {
                    var n, o, a, s, r, l, u = this,
                        p = u.current,
                        h = function() {
                            u.cleanUp(e)
                        };
                    return !(u.isClosing || (u.isClosing = !0, !1 === u.trigger("beforeClose", e) ? (u.isClosing = !1, c(function() {
                        u.update()
                    }), 1) : (u.removeEvents(), p.timouts && clearTimeout(p.timouts), a = p.$content, n = p.opts.animationEffect, o = i.isNumeric(t) ? t : n ? p.opts.animationDuration : 0, p.$slide.off(d).removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"), p.$slide.siblings().trigger("onReset").remove(), o && u.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing"), u.hideLoading(p), u.hideControls(), u.updateCursor(), "zoom" !== n || !0 !== e && a && o && "image" === p.type && !p.hasError && (l = u.getThumbPos(p)) || (n = "fade"), "zoom" === n ? (i.fancybox.stop(a), r = i.fancybox.getTranslate(a), r.width = r.width * r.scaleX, r.height = r.height * r.scaleY, "auto" == (s = p.opts.zoomOpacity) && (s = Math.abs(p.width / p.height - l.width / l.height) > .1), s && (l.opacity = 0), r.scaleX = r.width / l.width, r.scaleY = r.height / l.height, r.width = l.width, r.height = l.height, i.fancybox.setTranslate(p.$content, r), i.fancybox.animate(p.$content, l, o, h), 0) : (n && o ? !0 === e ? setTimeout(h, o) : i.fancybox.animate(p.$slide.removeClass("fancybox-slide--current"), "fancybox-animated fancybox-slide--previous fancybox-fx-" + n, o, h) : h(), 0))))
                },
                cleanUp: function(e) {
                    var t;
                    this.current.$slide.trigger("onReset"), this.$refs.container.empty().remove(), this.trigger("afterClose", e), this.$lastFocus && this.current.opts.backFocus && this.$lastFocus.focus(), this.current = null, (t = i.fancybox.getInstance()) ? t.activate() : (s.scrollTop(this.scrollTop).scrollLeft(this.scrollLeft), i("html").removeClass("fancybox-enabled"), i("#fancybox-style-noscroll").remove())
                },
                trigger: function(e, t) {
                    var n, o = Array.prototype.slice.call(arguments, 1),
                        a = t && t.opts ? t : this.current;
                    return a ? o.unshift(a) : a = this, o.unshift(this), i.isFunction(a.opts[e]) && (n = a.opts[e].apply(a, o)), !1 === n ? n : void("afterClose" === e ? r.trigger(e + ".fb", o) : this.$refs.container.trigger(e + ".fb", o))
                },
                updateControls: function(e) {
                    var t = this.current,
                        n = t.index,
                        o = t.opts,
                        a = o.caption,
                        s = this.$refs.caption;
                    t.$slide.trigger("refresh"), this.$caption = a && a.length ? s.html(a) : null, this.isHiddenControls || this.showControls(), i("[data-fancybox-count]").html(this.group.length), i("[data-fancybox-index]").html(n + 1), i("[data-fancybox-prev]").prop("disabled", !o.loop && n <= 0), i("[data-fancybox-next]").prop("disabled", !o.loop && n >= this.group.length - 1)
                },
                hideControls: function() {
                    this.isHiddenControls = !0, this.$refs.container.removeClass("fancybox-show-infobar fancybox-show-toolbar fancybox-show-caption fancybox-show-nav")
                },
                showControls: function() {
                    var e = this.current ? this.current.opts : this.opts,
                        t = this.$refs.container;
                    this.isHiddenControls = !1, this.idleSecondsCounter = 0, t.toggleClass("fancybox-show-toolbar", !(!e.toolbar || !e.buttons)).toggleClass("fancybox-show-infobar", !!(e.infobar && this.group.length > 1)).toggleClass("fancybox-show-nav", !!(e.arrows && this.group.length > 1)).toggleClass("fancybox-is-modal", !!e.modal), this.$caption ? t.addClass("fancybox-show-caption ") : t.removeClass("fancybox-show-caption")
                },
                toggleControls: function() {
                    this.isHiddenControls ? this.showControls() : this.hideControls()
                }
            }), i.fancybox = {
                version: "3.1.28",
                defaults: a,
                getInstance: function(e) {
                    var t = i('.fancybox-container:not(".fancybox-is-closing"):first').data("FancyBox"),
                        n = Array.prototype.slice.call(arguments, 1);
                    return t instanceof p && ("string" === i.type(e) ? t[e].apply(t, n) : "function" === i.type(e) && e.apply(t, n), t)
                },
                open: function(e, t, i) {
                    return new p(e, t, i)
                },
                close: function(e) {
                    var t = this.getInstance();
                    t && (t.close(), !0 === e && this.close())
                },
                destroy: function() {
                    this.close(!0), r.off("click.fb-start")
                },
                isMobile: t.createTouch !== n && /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent),
                use3d: function() {
                    var i = t.createElement("div");
                    return e.getComputedStyle && e.getComputedStyle(i).getPropertyValue("transform") && !(t.documentMode && t.documentMode < 11)
                }(),
                getTranslate: function(e) {
                    var t;
                    if (!e || !e.length) return !1;
                    if ((t = e.eq(0).css("transform")) && -1 !== t.indexOf("matrix") ? (t = t.split("(")[1], t = t.split(")")[0], t = t.split(",")) : t = [], t.length) t = t.length > 10 ? [t[13], t[12], t[0], t[5]] : [t[5], t[4], t[0], t[3]], t = t.map(parseFloat);
                    else {
                        t = [0, 0, 1, 1];
                        var i = /\.*translate\((.*)px,(.*)px\)/i.exec(e.eq(0).attr("style"));
                        i && (t[0] = parseFloat(i[2]), t[1] = parseFloat(i[1]))
                    }
                    return {
                        top: t[0],
                        left: t[1],
                        scaleX: t[2],
                        scaleY: t[3],
                        opacity: parseFloat(e.css("opacity")),
                        width: e.width(),
                        height: e.height()
                    }
                },
                setTranslate: function(e, t) {
                    var i = "",
                        o = {};
                    if (e && t) return t.left === n && t.top === n || (i = (t.left === n ? e.position().left : t.left) + "px, " + (t.top === n ? e.position().top : t.top) + "px", i = this.use3d ? "translate3d(" + i + ", 0px)" : "translate(" + i + ")"), t.scaleX !== n && t.scaleY !== n && (i = (i.length ? i + " " : "") + "scale(" + t.scaleX + ", " + t.scaleY + ")"), i.length && (o.transform = i), t.opacity !== n && (o.opacity = t.opacity), t.width !== n && (o.width = t.width), t.height !== n && (o.height = t.height), e.css(o)
                },
                animate: function(e, t, o, a, s) {
                    var r = d || "transitionend";
                    i.isFunction(o) && (a = o, o = null), i.isPlainObject(t) || e.removeAttr("style"), e.on(r, function(o) {
                        (!o || !o.originalEvent || e.is(o.originalEvent.target) && "z-index" != o.originalEvent.propertyName) && (e.off(r), i.isPlainObject(t) ? t.scaleX !== n && t.scaleY !== n && (e.css("transition-duration", "0ms"), t.width = Math.round(e.width() * t.scaleX), t.height = Math.round(e.height() * t.scaleY), t.scaleX = 1, t.scaleY = 1, i.fancybox.setTranslate(e, t)) : !0 !== s && e.removeClass(t), i.isFunction(a) && a(o))
                    }), i.isNumeric(o) && e.css("transition-duration", o + "ms"), i.isPlainObject(t) ? i.fancybox.setTranslate(e, t) : e.addClass(t), e.data("timer", setTimeout(function() {
                        e.trigger("transitionend")
                    }, o + 16))
                },
                stop: function(e) {
                    clearTimeout(e.data("timer")), e.off(d)
                }
            }, i.fn.fancybox = function(e) {
                var t;
                return e = e || {}, (t = e.selector || !1) ? i("body").off("click.fb-start", t).on("click.fb-start", t, {
                    options: e
                }, o) : this.off("click.fb-start").on("click.fb-start", {
                    items: this,
                    options: e
                }, o), this
            }, r.on("click.fb-start", "[data-fancybox]", o)
        }
    }(window, document, window.jQuery || jQuery),
    function(e) {
        "use strict";
        var t = function(t, i, n) {
                if (t) return n = n || "", "object" === e.type(n) && (n = e.param(n, !0)), e.each(i, function(e, i) {
                    t = t.replace("$" + e, i || "")
                }), n.length && (t += (t.indexOf("?") > 0 ? "&" : "?") + n), t
            },
            i = {
                youtube: {
                    matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
                    params: {
                        autoplay: 1,
                        autohide: 1,
                        fs: 1,
                        rel: 0,
                        hd: 1,
                        wmode: "transparent",
                        enablejsapi: 1,
                        html5: 1
                    },
                    paramPlace: 8,
                    type: "iframe",
                    url: "//www.youtube.com/embed/$4",
                    thumb: "//img.youtube.com/vi/$4/hqdefault.jpg"
                },
                vimeo: {
                    matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
                    params: {
                        autoplay: 1,
                        hd: 1,
                        show_title: 1,
                        show_byline: 1,
                        show_portrait: 0,
                        fullscreen: 1,
                        api: 1
                    },
                    paramPlace: 3,
                    type: "iframe",
                    url: "//player.vimeo.com/video/$2"
                },
                metacafe: {
                    matcher: /metacafe.com\/watch\/(\d+)\/(.*)?/,
                    type: "iframe",
                    url: "//www.metacafe.com/embed/$1/?ap=1"
                },
                dailymotion: {
                    matcher: /dailymotion.com\/video\/(.*)\/?(.*)/,
                    params: {
                        additionalInfos: 0,
                        autoStart: 1
                    },
                    type: "iframe",
                    url: "//www.dailymotion.com/embed/video/$1"
                },
                vine: {
                    matcher: /vine.co\/v\/([a-zA-Z0-9\?\=\-]+)/,
                    type: "iframe",
                    url: "//vine.co/v/$1/embed/simple"
                },
                instagram: {
                    matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
                    type: "image",
                    url: "//$1/p/$2/media/?size=l"
                },
                gmap_place: {
                    matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
                    type: "iframe",
                    url: function(e) {
                        return "//maps.google." + e[2] + "/?ll=" + (e[9] ? e[9] + "&z=" + Math.floor(e[10]) + (e[12] ? e[12].replace(/^\//, "&") : "") : e[12]) + "&output=" + (e[12] && e[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
                    }
                },
                gmap_search: {
                    matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
                    type: "iframe",
                    url: function(e) {
                        return "//maps.google." + e[2] + "/maps?q=" + e[5].replace("query=", "q=").replace("api=1", "") + "&output=embed"
                    }
                }
            };
        e(document).on("onInit.fb", function(n, o) {
            e.each(o.group, function(n, o) {
                var a, s, r, l, c, d, u, p = o.src || "",
                    h = !1;
                o.type || (a = e.extend(!0, {}, i, o.opts.media), e.each(a, function(i, n) {
                    if (r = p.match(n.matcher), d = {}, u = i, r) {
                        if (h = n.type, n.paramPlace && r[n.paramPlace]) {
                            "?" == (c = r[n.paramPlace])[0] && (c = c.substring(1)), c = c.split("&");
                            for (var a = 0; a < c.length; ++a) {
                                var m = c[a].split("=", 2);
                                2 == m.length && (d[m[0]] = decodeURIComponent(m[1].replace(/\+/g, " ")))
                            }
                        }
                        return l = e.extend(!0, {}, n.params, o.opts[i], d), p = "function" === e.type(n.url) ? n.url.call(this, r, l, o) : t(n.url, r, l), s = "function" === e.type(n.thumb) ? n.thumb.call(this, r, l, o) : t(n.thumb, r), "vimeo" === u && (p = p.replace("&%23", "#")), !1
                    }
                }), h ? (o.src = p, o.type = h, o.opts.thumb || o.opts.$thumb && o.opts.$thumb.length || (o.opts.thumb = s), "iframe" === h && (e.extend(!0, o.opts, {
                    iframe: {
                        preload: !1,
                        attr: {
                            scrolling: "no"
                        }
                    }
                }), o.contentProvider = u, o.opts.slideClass += " fancybox-slide--" + ("gmap_place" == u || "gmap_search" == u ? "map" : "video"))) : o.type = "image")
            })
        })
    }(window.jQuery),
    function(e, t, i) {
        "use strict";
        var n = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || function(t) {
                return e.setTimeout(t, 1e3 / 60)
            },
            o = e.cancelAnimationFrame || e.webkitCancelAnimationFrame || e.mozCancelAnimationFrame || e.oCancelAnimationFrame || function(t) {
                e.clearTimeout(t)
            },
            a = function(t) {
                var i = [];
                t = (t = t.originalEvent || t || e.e).touches && t.touches.length ? t.touches : t.changedTouches && t.changedTouches.length ? t.changedTouches : [t];
                for (var n in t) t[n].pageX ? i.push({
                    x: t[n].pageX,
                    y: t[n].pageY
                }) : t[n].clientX && i.push({
                    x: t[n].clientX,
                    y: t[n].clientY
                });
                return i
            },
            s = function(e, t, i) {
                return t && e ? "x" === i ? e.x - t.x : "y" === i ? e.y - t.y : Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)) : 0
            },
            r = function(e) {
                if (e.is("a,button,input,select,textarea,label") || i.isFunction(e.get(0).onclick) || e.data("selectable")) return !0;
                for (var t = 0, n = e[0].attributes, o = n.length; t < o; t++)
                    if ("data-fancybox-" === n[t].nodeName.substr(0, 14)) return !0;
                return !1
            },
            l = function(t) {
                var i = e.getComputedStyle(t)["overflow-y"],
                    n = e.getComputedStyle(t)["overflow-x"],
                    o = ("scroll" === i || "auto" === i) && t.scrollHeight > t.clientHeight,
                    a = ("scroll" === n || "auto" === n) && t.scrollWidth > t.clientWidth;
                return o || a
            },
            c = function(e) {
                for (var t = !1; !(t = l(e.get(0))) && ((e = e.parent()).length && !e.hasClass("fancybox-stage") && !e.is("body")););
                return t
            },
            d = function(e) {
                this.instance = e, this.$bg = e.$refs.bg, this.$stage = e.$refs.stage, this.$container = e.$refs.container, this.destroy(), this.$container.on("touchstart.fb.touch mousedown.fb.touch", i.proxy(this, "ontouchstart"))
            };
        d.prototype.destroy = function() {
            this.$container.off(".fb.touch")
        }, d.prototype.ontouchstart = function(n) {
            var o = this,
                l = i(n.target),
                d = o.instance,
                u = d.current,
                p = u.$content,
                h = "touchstart" == n.type;
            if (h && o.$container.off("mousedown.fb.touch"), !u || o.instance.isAnimating || o.instance.isClosing) return n.stopPropagation(), void n.preventDefault();
            if ((!n.originalEvent || 2 != n.originalEvent.button) && l.length && !r(l) && !r(l.parent()) && !(n.originalEvent.clientX > l[0].clientWidth + l.offset().left) && (o.startPoints = a(n), o.startPoints && !(o.startPoints.length > 1 && d.isSliding))) {
                if (o.$target = l, o.$content = p, o.canTap = !0, i(t).off(".fb.touch"), i(t).on(h ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", i.proxy(o, "ontouchend")), i(t).on(h ? "touchmove.fb.touch" : "mousemove.fb.touch", i.proxy(o, "ontouchmove")), !d.current.opts.touch && !d.canPan() || !l.is(o.$stage) && !o.$stage.find(l).length) return void(l.is("img") && n.preventDefault());
                n.stopPropagation(), i.fancybox.isMobile && (c(o.$target) || c(o.$target.parent())) || n.preventDefault(), o.canvasWidth = Math.round(u.$slide[0].clientWidth), o.canvasHeight = Math.round(u.$slide[0].clientHeight), o.startTime = (new Date).getTime(), o.distanceX = o.distanceY = o.distance = 0, o.isPanning = !1, o.isSwiping = !1, o.isZooming = !1, o.sliderStartPos = o.sliderLastPos || {
                    top: 0,
                    left: 0
                }, o.contentStartPos = i.fancybox.getTranslate(o.$content), o.contentLastPos = null, 1 !== o.startPoints.length || o.isZooming || (o.canTap = !d.isSliding, "image" === u.type && (o.contentStartPos.width > o.canvasWidth + 1 || o.contentStartPos.height > o.canvasHeight + 1) ? (i.fancybox.stop(o.$content), o.$content.css("transition-duration", "0ms"), o.isPanning = !0) : o.isSwiping = !0, o.$container.addClass("fancybox-controls--isGrabbing")), 2 !== o.startPoints.length || d.isAnimating || u.hasError || "image" !== u.type || !u.isLoaded && !u.$ghost || (o.isZooming = !0, o.isSwiping = !1, o.isPanning = !1, i.fancybox.stop(o.$content), o.$content.css("transition-duration", "0ms"), o.centerPointStartX = .5 * (o.startPoints[0].x + o.startPoints[1].x) - i(e).scrollLeft(), o.centerPointStartY = .5 * (o.startPoints[0].y + o.startPoints[1].y) - i(e).scrollTop(), o.percentageOfImageAtPinchPointX = (o.centerPointStartX - o.contentStartPos.left) / o.contentStartPos.width, o.percentageOfImageAtPinchPointY = (o.centerPointStartY - o.contentStartPos.top) / o.contentStartPos.height, o.startDistanceBetweenFingers = s(o.startPoints[0], o.startPoints[1]))
            }
        }, d.prototype.ontouchmove = function(e) {
            var t = this;
            if (t.newPoints = a(e), i.fancybox.isMobile && (c(t.$target) || c(t.$target.parent()))) return e.stopPropagation(), void(t.canTap = !1);
            if ((t.instance.current.opts.touch || t.instance.canPan()) && t.newPoints && t.newPoints.length && (t.distanceX = s(t.newPoints[0], t.startPoints[0], "x"), t.distanceY = s(t.newPoints[0], t.startPoints[0], "y"), t.distance = s(t.newPoints[0], t.startPoints[0]), t.distance > 0)) {
                if (!t.$target.is(t.$stage) && !t.$stage.find(t.$target).length) return;
                e.stopPropagation(), e.preventDefault(), t.isSwiping ? t.onSwipe() : t.isPanning ? t.onPan() : t.isZooming && t.onZoom()
            }
        }, d.prototype.onSwipe = function() {
            var t, a = this,
                s = a.isSwiping,
                r = a.sliderStartPos.left || 0;
            !0 === s ? Math.abs(a.distance) > 10 && (a.canTap = !1, a.instance.group.length < 2 && a.instance.opts.touch.vertical ? a.isSwiping = "y" : a.instance.isSliding || !1 === a.instance.opts.touch.vertical || "auto" === a.instance.opts.touch.vertical && i(e).width() > 800 ? a.isSwiping = "x" : (t = Math.abs(180 * Math.atan2(a.distanceY, a.distanceX) / Math.PI), a.isSwiping = t > 45 && t < 135 ? "y" : "x"), a.instance.isSliding = a.isSwiping, a.startPoints = a.newPoints, i.each(a.instance.slides, function(e, t) {
                i.fancybox.stop(t.$slide), t.$slide.css("transition-duration", "0ms"), t.inTransition = !1, t.pos === a.instance.current.pos && (a.sliderStartPos.left = i.fancybox.getTranslate(t.$slide).left)
            }), a.instance.SlideShow && a.instance.SlideShow.isActive && a.instance.SlideShow.stop()) : ("x" == s && (a.distanceX > 0 && (a.instance.group.length < 2 || 0 === a.instance.current.index && !a.instance.current.opts.loop) ? r += Math.pow(a.distanceX, .8) : a.distanceX < 0 && (a.instance.group.length < 2 || a.instance.current.index === a.instance.group.length - 1 && !a.instance.current.opts.loop) ? r -= Math.pow(-a.distanceX, .8) : r += a.distanceX), a.sliderLastPos = {
                top: "x" == s ? 0 : a.sliderStartPos.top + a.distanceY,
                left: r
            }, a.requestId && (o(a.requestId), a.requestId = null), a.requestId = n(function() {
                a.sliderLastPos && (i.each(a.instance.slides, function(e, t) {
                    var n = t.pos - a.instance.currPos;
                    i.fancybox.setTranslate(t.$slide, {
                        top: a.sliderLastPos.top,
                        left: a.sliderLastPos.left + n * a.canvasWidth + n * t.opts.gutter
                    })
                }), a.$container.addClass("fancybox-is-sliding"))
            }))
        }, d.prototype.onPan = function() {
            var e, t, a, s = this;
            s.canTap = !1, e = s.contentStartPos.width > s.canvasWidth ? s.contentStartPos.left + s.distanceX : s.contentStartPos.left, t = s.contentStartPos.top + s.distanceY, (a = s.limitMovement(e, t, s.contentStartPos.width, s.contentStartPos.height)).scaleX = s.contentStartPos.scaleX, a.scaleY = s.contentStartPos.scaleY, s.contentLastPos = a, s.requestId && (o(s.requestId), s.requestId = null), s.requestId = n(function() {
                i.fancybox.setTranslate(s.$content, s.contentLastPos)
            })
        }, d.prototype.limitMovement = function(e, t, i, n) {
            var o, a, s, r, l = this.canvasWidth,
                c = this.canvasHeight,
                d = this.contentStartPos.left,
                u = this.contentStartPos.top,
                p = this.distanceX,
                h = this.distanceY;
            return o = Math.max(0, .5 * l - .5 * i), a = Math.max(0, .5 * c - .5 * n), s = Math.min(l - i, .5 * l - .5 * i), r = Math.min(c - n, .5 * c - .5 * n), i > l && (p > 0 && e > o && (e = o - 1 + Math.pow(-o + d + p, .8) || 0), p < 0 && e < s && (e = s + 1 - Math.pow(s - d - p, .8) || 0)), n > c && (h > 0 && t > a && (t = a - 1 + Math.pow(-a + u + h, .8) || 0), h < 0 && t < r && (t = r + 1 - Math.pow(r - u - h, .8) || 0)), {
                top: t,
                left: e
            }
        }, d.prototype.limitPosition = function(e, t, i, n) {
            var o = this.canvasWidth,
                a = this.canvasHeight;
            return i > o ? (e = e > 0 ? 0 : e, e = e < o - i ? o - i : e) : e = Math.max(0, o / 2 - i / 2), n > a ? (t = t > 0 ? 0 : t, t = t < a - n ? a - n : t) : t = Math.max(0, a / 2 - n / 2), {
                top: t,
                left: e
            }
        }, d.prototype.onZoom = function() {
            var t = this,
                a = t.contentStartPos.width,
                r = t.contentStartPos.height,
                l = t.contentStartPos.left,
                c = t.contentStartPos.top,
                d = s(t.newPoints[0], t.newPoints[1]) / t.startDistanceBetweenFingers,
                u = Math.floor(a * d),
                p = Math.floor(r * d),
                h = (a - u) * t.percentageOfImageAtPinchPointX,
                m = (r - p) * t.percentageOfImageAtPinchPointY,
                f = (t.newPoints[0].x + t.newPoints[1].x) / 2 - i(e).scrollLeft(),
                g = (t.newPoints[0].y + t.newPoints[1].y) / 2 - i(e).scrollTop(),
                _ = f - t.centerPointStartX,
                v = {
                    top: c + (m + (g - t.centerPointStartY)),
                    left: l + (h + _),
                    scaleX: t.contentStartPos.scaleX * d,
                    scaleY: t.contentStartPos.scaleY * d
                };
            t.canTap = !1, t.newWidth = u, t.newHeight = p, t.contentLastPos = v, t.requestId && (o(t.requestId), t.requestId = null), t.requestId = n(function() {
                i.fancybox.setTranslate(t.$content, t.contentLastPos)
            })
        }, d.prototype.ontouchend = function(e) {
            var n = Math.max((new Date).getTime() - this.startTime, 1),
                s = this.isSwiping,
                r = this.isPanning,
                l = this.isZooming;
            return this.endPoints = a(e), this.$container.removeClass("fancybox-controls--isGrabbing"), i(t).off(".fb.touch"), this.requestId && (o(this.requestId), this.requestId = null), this.isSwiping = !1, this.isPanning = !1, this.isZooming = !1, this.canTap ? this.onTap(e) : (this.speed = 366, this.velocityX = this.distanceX / n * .5, this.velocityY = this.distanceY / n * .5, this.speedX = Math.max(.5 * this.speed, Math.min(1.5 * this.speed, 1 / Math.abs(this.velocityX) * this.speed)), void(r ? this.endPanning() : l ? this.endZooming() : this.endSwiping(s)))
        }, d.prototype.endSwiping = function(e) {
            var t = !1;
            this.instance.isSliding = !1, this.sliderLastPos = null, "y" == e && Math.abs(this.distanceY) > 50 ? (i.fancybox.animate(this.instance.current.$slide, {
                top: this.sliderStartPos.top + this.distanceY + 150 * this.velocityY,
                opacity: 0
            }, 150), t = this.instance.close(!0, 300)) : "x" == e && this.distanceX > 50 && this.instance.group.length > 1 ? t = this.instance.previous(this.speedX) : "x" == e && this.distanceX < -50 && this.instance.group.length > 1 && (t = this.instance.next(this.speedX)), !1 !== t || "x" != e && "y" != e || this.instance.jumpTo(this.instance.current.index, 150), this.$container.removeClass("fancybox-is-sliding")
        }, d.prototype.endPanning = function() {
            var e, t, n;
            this.contentLastPos && (!1 === this.instance.current.opts.touch.momentum ? (e = this.contentLastPos.left, t = this.contentLastPos.top) : (e = this.contentLastPos.left + this.velocityX * this.speed, t = this.contentLastPos.top + this.velocityY * this.speed), n = this.limitPosition(e, t, this.contentStartPos.width, this.contentStartPos.height), n.width = this.contentStartPos.width, n.height = this.contentStartPos.height, i.fancybox.animate(this.$content, n, 330))
        }, d.prototype.endZooming = function() {
            var e, t, n, o, a = this.instance.current,
                s = this.newWidth,
                r = this.newHeight;
            this.contentLastPos && (e = this.contentLastPos.left, t = this.contentLastPos.top, o = {
                top: t,
                left: e,
                width: s,
                height: r,
                scaleX: 1,
                scaleY: 1
            }, i.fancybox.setTranslate(this.$content, o), s < this.canvasWidth && r < this.canvasHeight ? this.instance.scaleToFit(150) : s > a.width || r > a.height ? this.instance.scaleToActual(this.centerPointStartX, this.centerPointStartY, 150) : (n = this.limitPosition(e, t, s, r), i.fancybox.setTranslate(this.content, i.fancybox.getTranslate(this.$content)), i.fancybox.animate(this.$content, n, 150)))
        }, d.prototype.onTap = function(e) {
            var t, n = this,
                o = i(e.target),
                s = n.instance,
                r = s.current,
                l = e && a(e) || n.startPoints,
                c = l[0] ? l[0].x - n.$stage.offset().left : 0,
                d = l[0] ? l[0].y - n.$stage.offset().top : 0,
                u = function(t) {
                    var o = r.opts[t];
                    if (i.isFunction(o) && (o = o.apply(s, [r, e])), o) switch (o) {
                        case "close":
                            s.close(n.startEvent);
                            break;
                        case "toggleControls":
                            s.toggleControls(!0);
                            break;
                        case "next":
                            s.next();
                            break;
                        case "nextOrClose":
                            s.group.length > 1 ? s.next() : s.close(n.startEvent);
                            break;
                        case "zoom":
                            "image" == r.type && (r.isLoaded || r.$ghost) && (s.canPan() ? s.scaleToFit() : s.isScaledDown() ? s.scaleToActual(c, d) : s.group.length < 2 && s.close(n.startEvent))
                    }
                };
            if (!(e.originalEvent && 2 == e.originalEvent.button || s.isSliding || c > o[0].clientWidth + o.offset().left)) {
                if (o.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) t = "Outside";
                else if (o.is(".fancybox-slide")) t = "Slide";
                else {
                    if (!s.current.$content || !s.current.$content.has(e.target).length) return;
                    t = "Content"
                }
                if (n.tapped) {
                    if (clearTimeout(n.tapped), n.tapped = null, Math.abs(c - n.tapX) > 50 || Math.abs(d - n.tapY) > 50 || s.isSliding) return this;
                    u("dblclick" + t)
                } else n.tapX = c, n.tapY = d, r.opts["dblclick" + t] && r.opts["dblclick" + t] !== r.opts["click" + t] ? n.tapped = setTimeout(function() {
                    n.tapped = null, u("click" + t)
                }, 300) : u("click" + t);
                return this
            }
        }, i(t).on("onActivate.fb", function(e, t) {
            t && !t.Guestures && (t.Guestures = new d(t))
        }), i(t).on("beforeClose.fb", function(e, t) {
            t && t.Guestures && t.Guestures.destroy()
        })
    }(window, document, window.jQuery),
    function(e, t) {
        "use strict";
        var i = function(e) {
            this.instance = e, this.init()
        };
        t.extend(i.prototype, {
            timer: null,
            isActive: !1,
            $button: null,
            speed: 3e3,
            init: function() {
                var e = this;
                e.$button = e.instance.$refs.toolbar.find("[data-fancybox-play]").on("click", function() {
                    e.toggle()
                }), (e.instance.group.length < 2 || !e.instance.group[e.instance.currIndex].opts.slideShow) && e.$button.hide()
            },
            set: function() {
                var e = this;
                e.instance && e.instance.current && (e.instance.current.opts.loop || e.instance.currIndex < e.instance.group.length - 1) ? e.timer = setTimeout(function() {
                    e.instance.next()
                }, e.instance.current.opts.slideShow.speed || e.speed) : (e.stop(), e.instance.idleSecondsCounter = 0, e.instance.showControls())
            },
            clear: function() {
                clearTimeout(this.timer), this.timer = null
            },
            start: function() {
                var e = this.instance.current;
                this.instance && e && (e.opts.loop || e.index < this.instance.group.length - 1) && (this.isActive = !0, this.$button.attr("title", e.opts.i18n[e.opts.lang].PLAY_STOP).addClass("fancybox-button--pause"), e.isComplete && this.set())
            },
            stop: function() {
                var e = this.instance.current;
                this.clear(), this.$button.attr("title", e.opts.i18n[e.opts.lang].PLAY_START).removeClass("fancybox-button--pause"), this.isActive = !1
            },
            toggle: function() {
                this.isActive ? this.stop() : this.start()
            }
        }), t(e).on({
            "onInit.fb": function(e, t) {
                t && !t.SlideShow && (t.SlideShow = new i(t))
            },
            "beforeShow.fb": function(e, t, i, n) {
                var o = t && t.SlideShow;
                n ? o && i.opts.slideShow.autoStart && o.start() : o && o.isActive && o.clear()
            },
            "afterShow.fb": function(e, t, i) {
                var n = t && t.SlideShow;
                n && n.isActive && n.set()
            },
            "afterKeydown.fb": function(i, n, o, a, s) {
                var r = n && n.SlideShow;
                !r || !o.opts.slideShow || 80 !== s && 32 !== s || t(e.activeElement).is("button,a,input") || (a.preventDefault(), r.toggle())
            },
            "beforeClose.fb onDeactivate.fb": function(e, t) {
                var i = t && t.SlideShow;
                i && i.stop()
            }
        }), t(e).on("visibilitychange", function() {
            var i = t.fancybox.getInstance(),
                n = i && i.SlideShow;
            n && n.isActive && (e.hidden ? n.clear() : n.set())
        })
    }(document, window.jQuery),
    function(e, t) {
        "use strict";
        var i = function() {
            var t, i, n, o = [
                    ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                    ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                    ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                    ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                    ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
                ],
                a = {};
            for (i = 0; i < o.length; i++)
                if ((t = o[i]) && t[1] in e) {
                    for (n = 0; n < t.length; n++) a[o[0][n]] = t[n];
                    return a
                }
            return !1
        }();
        if (i) {
            var n = {
                request: function(t) {
                    (t = t || e.documentElement)[i.requestFullscreen](t.ALLOW_KEYBOARD_INPUT)
                },
                exit: function() {
                    e[i.exitFullscreen]()
                },
                toggle: function(t) {
                    t = t || e.documentElement, this.isFullscreen() ? this.exit() : this.request(t)
                },
                isFullscreen: function() {
                    return Boolean(e[i.fullscreenElement])
                },
                enabled: function() {
                    return Boolean(e[i.fullscreenEnabled])
                }
            };
            t(e).on({
                "onInit.fb": function(e, t) {
                    var i, o = t.$refs.toolbar.find("[data-fancybox-fullscreen]");
                    t && !t.FullScreen && t.group[t.currIndex].opts.fullScreen ? ((i = t.$refs.container).on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function(e) {
                        e.stopPropagation(), e.preventDefault(), n.toggle(i[0])
                    }), t.opts.fullScreen && !0 === t.opts.fullScreen.autoStart && n.request(i[0]), t.FullScreen = n) : o.hide()
                },
                "afterKeydown.fb": function(e, t, i, n, o) {
                    t && t.FullScreen && 70 === o && (n.preventDefault(), t.FullScreen.toggle(t.$refs.container[0]))
                },
                "beforeClose.fb": function(e) {
                    e && e.FullScreen && n.exit()
                }
            }), t(e).on(i.fullscreenchange, function() {
                var e = t.fancybox.getInstance();
                e.current && "image" === e.current.type && e.isAnimating && (e.current.$content.css("transition", "none"), e.isAnimating = !1, e.update(!0, !0, 0)), e.trigger("onFullscreenChange", n.isFullscreen())
            })
        } else t && t.fancybox && (t.fancybox.defaults.btnTpl.fullScreen = !1)
    }(document, window.jQuery),
    function(e, t) {
        "use strict";
        var i = function(e) {
            this.instance = e, this.init()
        };
        t.extend(i.prototype, {
            $button: null,
            $grid: null,
            $list: null,
            isVisible: !1,
            init: function() {
                var e = this,
                    t = e.instance.group[0],
                    i = e.instance.group[1];
                e.$button = e.instance.$refs.toolbar.find("[data-fancybox-thumbs]"), e.instance.group.length > 1 && e.instance.group[e.instance.currIndex].opts.thumbs && ("image" == t.type || t.opts.thumb || t.opts.$thumb) && ("image" == i.type || i.opts.thumb || i.opts.$thumb) ? (e.$button.on("click", function() {
                    e.toggle()
                }), e.isActive = !0) : (e.$button.hide(), e.isActive = !1)
            },
            create: function() {
                var e, i, n = this.instance;
                this.$grid = t('<div class="fancybox-thumbs"></div>').appendTo(n.$refs.container), e = "<ul>", t.each(n.group, function(t, n) {
                    (i = n.opts.thumb || (n.opts.$thumb ? n.opts.$thumb.attr("src") : null)) || "image" !== n.type || (i = n.src), i && i.length && (e += '<li data-index="' + t + '"  tabindex="0" class="fancybox-thumbs-loading"><img data-src="' + i + '" /></li>')
                }), e += "</ul>", this.$list = t(e).appendTo(this.$grid).on("click", "li", function() {
                    n.jumpTo(t(this).data("index"))
                }), this.$list.find("img").hide().one("load", function() {
                    var e, i, n, o, a = t(this).parent().removeClass("fancybox-thumbs-loading"),
                        s = a.outerWidth(),
                        r = a.outerHeight();
                    e = this.naturalWidth || this.width, o = (i = this.naturalHeight || this.height) / r, (n = e / s) >= 1 && o >= 1 && (n > o ? (e /= o, i = r) : (e = s, i /= n)), t(this).css({
                        width: Math.floor(e),
                        height: Math.floor(i),
                        "margin-top": Math.min(0, Math.floor(.3 * r - .3 * i)),
                        "margin-left": Math.min(0, Math.floor(.5 * s - .5 * e))
                    }).show()
                }).each(function() {
                    this.src = t(this).data("src")
                })
            },
            focus: function() {
                this.instance.current && this.$list.children().removeClass("fancybox-thumbs-active").filter('[data-index="' + this.instance.current.index + '"]').addClass("fancybox-thumbs-active").focus()
            },
            close: function() {
                this.$grid.hide()
            },
            update: function() {
                this.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible), this.isVisible ? (this.$grid || this.create(), this.instance.trigger("onThumbsShow"), this.focus()) : this.$grid && this.instance.trigger("onThumbsHide"), this.instance.update()
            },
            hide: function() {
                this.isVisible = !1, this.update()
            },
            show: function() {
                this.isVisible = !0, this.update()
            },
            toggle: function() {
                this.isVisible = !this.isVisible, this.update()
            }
        }), t(e).on({
            "onInit.fb": function(e, t) {
                t && !t.Thumbs && (t.Thumbs = new i(t))
            },
            "beforeShow.fb": function(e, t, i, n) {
                var o = t && t.Thumbs;
                if (o && o.isActive) {
                    if (i.modal) return o.$button.hide(), void o.hide();
                    n && !0 === i.opts.thumbs.autoStart && o.show(), o.isVisible && o.focus()
                }
            },
            "afterKeydown.fb": function(e, t, i, n, o) {
                var a = t && t.Thumbs;
                a && a.isActive && 71 === o && (n.preventDefault(), a.toggle())
            },
            "beforeClose.fb": function(e, t) {
                var i = t && t.Thumbs;
                i && i.isVisible && !1 !== t.opts.thumbs.hideOnClose && i.close()
            }
        })
    }(document, window.jQuery),
    function(e, t, i) {
        "use strict";

        function n() {
            var e = t.location.hash.substr(1),
                i = e.split("-"),
                n = i.length > 1 && /^\+?\d+$/.test(i[i.length - 1]) ? parseInt(i.pop(-1), 10) || 1 : 1,
                o = i.join("-");
            return n < 1 && (n = 1), {
                hash: e,
                index: n,
                gallery: o
            }
        }

        function o(e) {
            var t;
            "" !== e.gallery && ((t = i("[data-fancybox='" + i.escapeSelector(e.gallery) + "']").eq(e.index - 1)).length || (t = i("#" + i.escapeSelector(e.gallery))), t.length && (s = !1, t.trigger("click")))
        }

        function a(e) {
            var t;
            return !!e && ((t = e.current ? e.current.opts : e.opts).hash || (t.$orig ? t.$orig.data("fancybox") : ""))
        }
        i.escapeSelector || (i.escapeSelector = function(e) {
            return (e + "").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, function(e, t) {
                return t ? "\0" === e ? "ï¿½" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            })
        });
        var s = !0,
            r = null,
            l = null;
        i(function() {
            setTimeout(function() {
                !1 !== i.fancybox.defaults.hash && (i(e).on({
                    "onInit.fb": function(e, t) {
                        var i, o;
                        !1 !== t.group[t.currIndex].opts.hash && (i = n(), (o = a(t)) && i.gallery && o == i.gallery && (t.currIndex = i.index - 1))
                    },
                    "beforeShow.fb": function(i, n, o) {
                        var c;
                        o && !1 !== o.opts.hash && (c = a(n)) && "" !== c && (t.location.hash.indexOf(c) < 0 && (n.opts.origHash = t.location.hash), r = c + (n.group.length > 1 ? "-" + (o.index + 1) : ""), "replaceState" in t.history ? (l && clearTimeout(l), l = setTimeout(function() {
                            t.history[s ? "pushState" : "replaceState"]({}, e.title, t.location.pathname + t.location.search + "#" + r), l = null, s = !1
                        }, 300)) : t.location.hash = r)
                    },
                    "beforeClose.fb": function(n, o, s) {
                        var c, d;
                        l && clearTimeout(l), !1 !== s.opts.hash && (c = a(o), d = o && o.opts.origHash ? o.opts.origHash : "", c && "" !== c && ("replaceState" in history ? t.history.replaceState({}, e.title, t.location.pathname + t.location.search + d) : (t.location.hash = d, i(t).scrollTop(o.scrollTop).scrollLeft(o.scrollLeft))), r = null)
                    }
                }), i(t).on("hashchange.fb", function() {
                    var e = n();
                    i.fancybox.getInstance() ? !r || r === e.gallery + "-" + e.index || 1 === e.index && r == e.gallery || (r = null, i.fancybox.close()) : "" !== e.gallery && o(e)
                }), o(n()))
            }, 50)
        })
    }(document, window, window.jQuery), window.pix_values = {
        animation: {
            "": "None",
            "fade-in": "Fade In",
            "fade-in-up": "Fade In Up",
            "fade-in-up-big": "Fade In Up Big",
            "fade-in-up-large": "Fade In Up Large",
            "fade-in-down": "Fade In Down",
            "fade-in-down-big": "Fade In Down Big",
            "fade-in-down-large": "Fade In Down Large",
            "fade-in-left": "Fade In Left",
            "fade-in-left-big": "Fade In Left Big",
            "fade-in-left-large": "Fade In Left Large",
            "fade-in-right": "Fade In Right",
            "fade-in-right-big": "Fade In Right Big",
            "fade-in-right-large": "Fade In Right Large",
            "fade-in-up-left": "Fade In Up Left",
            "fade-in-up-left-big": "Fade In Up Left Big",
            "fade-in-up-left-large": "Fade In Up Left Large",
            "fade-in-up-right": "Fade In Up Right",
            "fade-in-up-right-big": "Fade In Up Right Big",
            "fade-in-up-right-large": "Fade In Up Right Large",
            "fade-in-down-left": "Fade In Down Left",
            "fade-in-down-left-big": "Fade In Down Left Big",
            "fade-in-down-left-large": "Fade In Down Left Large",
            "fade-in-down-right": "Fade In Down Right",
            "fade-in-down-right-big": "Fade In Down Right Big",
            "fade-in-down-right-large": "Fade In Down Right Large",
            "bounce-in": "Bounce In",
            "bounce-in-big": "Bounce In Big",
            "bounce-in-large": "Bounce In Large",
            "bounce-in-up": "Bounce In Up",
            "bounce-in-up-big": "Bounce In Up Big",
            "bounce-in-up-large": "Bounce In Up Large",
            "bounce-in-down": "Bounce In Down",
            "bounce-in-down-big": "Bounce In Down Big",
            "bounce-in-down-large": "Bounce In Down Large",
            "bounce-in-left": "Bounce In Left",
            "bounce-in-left-big": "Bounce In Left Big",
            "bounce-in-left-large": "Bounce In Left Large",
            "bounce-in-right": "Bounce In Right",
            "bounce-in-right-big": "Bounce In Right Big",
            "bounce-in-right-large": "Bounce In Right Large",
            "bounce-in-up-left": "Bounce In Up Left",
            "bounce-in-up-left-big": "Bounce In Up Left Big",
            "bounce-in-up-left-large": "Bounce In Up Left Large",
            "bounce-in-up-right": "Bounce In Up Right",
            "bounce-in-up-right-big": "Bounce In Up Right Big",
            "bounce-in-up-right-large": "Bounce In Up Right Large",
            "bounce-in-down-left": "Bounce In Down Left",
            "bounce-in-down-left-big": "Bounce In Down Left Big",
            "bounce-in-down-left-large": "Bounce In Down Left Large",
            "bounce-in-down-right": "Bounce In Down Right",
            "bounce-in-down-right-big": "Bounce In Down Right Big",
            "bounce-in-down-right-large": "Bounce In Down Right Large",
            "zoom-in": "Zoom In",
            "zoom-in-up": "Zoom In Up",
            "zoom-in-up-big": "Zoom In Up Big",
            "zoom-in-up-large": "Zoom In Up Large",
            "zoom-in-down": "Zoom In Down",
            "zoom-in-down-big": "Zoom In Down Big",
            "zoom-in-down-large": "Zoom In Down Large",
            "zoom-in-left": "Zoom In Left",
            "zoom-in-left-big": "Zoom In Left Big",
            "zoom-in-left-large": "Zoom In Left Large",
            "zoom-in-right": "Zoom In Right",
            "zoom-in-right-big": "Zoom In Right Big",
            "zoom-in-right-large": "Zoom In Right Large",
            "zoom-in-up-left": "Zoom In Up Left",
            "zoom-in-up-left-big": "Zoom In Up Left Big",
            "zoom-in-up-left-large": "Zoom In Up Left Large",
            "zoom-in-up-right": "Zoom In Up Right",
            "zoom-in-up-right-big": "Zoom In Up Right Big",
            "zoom-in-up-right-large": "Zoom In Up Right Large",
            "zoom-in-down-left": "Zoom In Down Left",
            "zoom-in-down-left-big": "Zoom In Down Left Big",
            "zoom-in-down-left-large": "Zoom In Down Left Large",
            "zoom-in-down-right": "Zoom In Down Right",
            "zoom-in-down-right-big": "Zoom In Down Right Big",
            "zoom-in-down-right-large": "Zoom In Down Right Large",
            "flip-in-x": "Flip In X",
            "flip-in-y": "Flip In Y",
            "flip-in-top-front": "Flip In Top Front",
            "flip-in-top-back": "Flip In Top Back",
            "flip-in-bottom-front": "Flip In Bottom Front",
            "flip-in-bottom-back": "Flip In Bottom Back",
            "flip-in-left-front": "Flip In Left Front",
            "flip-in-left-back": "Flip In Left Back",
            "flip-in-right-front": "Flip In Right Front",
            "flip-in-right-back": "Flip In Right Back",
            flash: "Flash",
            strobe: "Strobe",
            "shake-x": "Shake X",
            "shake-y": "Shake Y",
            bounce: "Bounce",
            tada: "Tada",
            "rubber-band": "Rubber Band",
            swing: "Swing",
            spin: "Spin",
            "spin-reverse": "Spin Reverse",
            slingshot: "Slingshot",
            "slingshot-reverse": "Slingshot Reverse",
            wobble: "Wobble",
            pulse: "Pulse",
            pulsate: "Pulsate",
            heartbeat: "Heartbeat",
            panic: "Panic"
        },
        animation_dur: {
            "": "Default (1 second)",
            "slow-mo": "slow-mo (2 second)",
            "super-slow-mo": "super-slow-mo (3 second)",
            "ultra-slow-mo": "ultra-slow-mo (4 second)",
            "hyper-slow-mo": "hyper-slow-mo (5 second)"
        },
        form_type: {
            ce: "Custom Email",
            smtp: "Custom Email (SMTP)",
            mc: "Mailchimp",
            cm: "Campaign Monitor",
            gr: "GetResponse",
            aw: "AWeber",
            ac: "Active Campaign",
            ml: "mailer lite",
            fm: "Freshmail",
            sl: "sendloop",
            mw: "MailWizz"
        },
        auto_popup: {
            "": "Disabled",
            1: "Open Directly",
            5: "After 5 second",
            10: "After 10 seconds",
            15: "After 15 seconds",
            20: "After 20 seconds"
        },
        pix_imgs: '["images\\/agency\\/bg-intro-agency.jpg","images\\/agency\\/circle-image-1.jpg","images\\/agency\\/circle-image-2.jpg","images\\/agency\\/showcase-image-1.jpg","images\\/agency\\/showcase-image-2.jpg","images\\/business\\/bg-intro.jpg","images\\/business\\/business-image-1.jpg","images\\/business\\/business-image-2.jpg","images\\/business\\/video-section-bg.jpg","images\\/car_rental\\/bg-highlight-left.jpg","images\\/car_rental\\/car-intro.jpg","images\\/construction\\/09w.jpg","images\\/construction\\/10m.jpg","images\\/construction\\/main.jpg","images\\/construction\\/workers.jpg","images\\/corporate\\/bg-highlight-right.jpg","images\\/corporate\\/bg.jpg","images\\/creative\\/bg-clients-section.jpg","images\\/creative\\/bg-intro-creative.jpg","images\\/creative\\/bg-video-section.jpg","images\\/eBook\\/intro-bg-ebook.jpg","images\\/elegant\\/elegant-image-2.jpg","images\\/elegant\\/person-1.jpg","images\\/elegant\\/person-2.jpg","images\\/event\\/intro-bg.jpg","images\\/hotel\\/box-bg.jpg","images\\/hotel\\/hotel-image-1.jpg","images\\/hotel\\/hotel-image-2.jpg","images\\/hotel\\/hotel-image-3.jpg","images\\/hotel\\/intro-bg-hotel.jpg","images\\/hotel\\/testimonials-man.jpg","images\\/medical\\/bg-intro.jpg","images\\/medical\\/health_insurance_plans_of_florida.jpg","images\\/modern\\/gallery-image-1.jpg","images\\/modern\\/gallery-image-2.jpg","images\\/modern\\/gallery-image-3.jpg","images\\/modern\\/gallery-image-4.jpg","images\\/modern\\/gallery-image-5.jpg","images\\/modern\\/gallery-image-6.jpg","images\\/modern\\/intro-modern-bg.jpg","images\\/original\\/bg-image.jpg","images\\/popups\\/popup-16.jpg","images\\/popups\\/popup-17.jpg","images\\/popups\\/popup-18.jpg","images\\/popups\\/popup-19.jpg","images\\/popups\\/popup-20.jpg","images\\/product\\/bg-video-product.jpg","images\\/product\\/image-1.jpg","images\\/product\\/image-2.jpg","images\\/product\\/image-3.jpg","images\\/product\\/image-product-1.jpg","images\\/product\\/image-product-2.jpg","images\\/real_estate\\/bg-highlight-left.jpg","images\\/real_estate\\/intro-bg.jpg","images\\/real_estate\\/proto.jpg","images\\/real_estate\\/team_1.jpg","images\\/real_estate\\/team_2.jpg","images\\/real_estate\\/team_3.jpg","images\\/restaurant\\/highlight-bg.jpg","images\\/restaurant\\/image-1.jpg","images\\/restaurant\\/image-2.jpg","images\\/restaurant\\/image-3.jpg","images\\/restaurant\\/image-4.jpg","images\\/restaurant\\/intro-bg.jpg","images\\/saas\\/collection-3.jpg","images\\/shop\\/features-image-1.jpg","images\\/shop\\/features-image-2.jpg","images\\/shop\\/features-image-3.jpg","images\\/showcase\\/bg-highlight-left.jpg","images\\/showcase\\/bg-highlight-right.jpg","images\\/showcase\\/bg-intro-showcase.jpg","images\\/showcase\\/bg-intro.jpg","images\\/slider\\/slider-image-1.jpg","images\\/slider\\/slider-image-2.jpg","images\\/slider\\/slider-image-3.jpg","images\\/slider\\/slider-image-4.jpg","images\\/slider\\/slider-image-5.jpg","images\\/slider\\/slider-image-6.jpg","images\\/software\\/intro-bg.jpg","images\\/software\\/team_4.jpg","images\\/software\\/team_5.jpg","images\\/software\\/team_6.jpg","images\\/sport\\/form-section-bg.jpg","images\\/sport\\/intro-bg-stade.jpg","images\\/sport\\/intro-bg.jpg","images\\/startup\\/client-1.jpg","images\\/startup\\/client-2.jpg","images\\/startup\\/deal-image-2.jpg","images\\/startup\\/intro-bg.jpg","images\\/studio\\/studio-form-bg.jpg","images\\/studio\\/studio-image-1.jpg","images\\/studio\\/studio-intro.jpg","images\\/studio\\/studio-testimonials-bg.jpg","images\\/travel\\/deal-image-1.jpg","images\\/travel\\/deal-image-2.jpg","images\\/travel\\/intro-bg-2.jpg","images\\/travel\\/intro-bg-3.jpg","images\\/travel\\/intro-bg.jpg","images\\/agency\\/image-box-1.png","images\\/agency\\/image-box-2.png","images\\/agency\\/image-box-3.png","images\\/app\\/app-logo-2.png","images\\/app\\/app-logo.png","images\\/app\\/browser.png","images\\/app\\/code.png","images\\/app\\/image-left.png","images\\/app\\/image-right.png","images\\/app\\/laptop.png","images\\/app\\/logo-dark.png","images\\/app\\/notes.png","images\\/app\\/pattern-bg.png","images\\/app\\/phones-intro-app.png","images\\/app\\/screenshot-1.png","images\\/app\\/screenshot-2.png","images\\/app\\/screenshot-3.png","images\\/app\\/server.png","images\\/business\\/business-services-image-1.png","images\\/business\\/business-services-image-2.png","images\\/business\\/business-services-image-3.png","images\\/business\\/business-services-image-4.png","images\\/business\\/logo-1.png","images\\/business\\/logo-2.png","images\\/business\\/logo-3.png","images\\/car_rental\\/car-1.png","images\\/car_rental\\/car-2.png","images\\/car_rental\\/car-intro-image.png","images\\/car_rental\\/car-intro.png","images\\/car_rental\\/car-rental-intro-bg.png","images\\/car_rental\\/icon-1.png","images\\/car_rental\\/icon-2.png","images\\/car_rental\\/icon-3.png","images\\/clients\\/bigcommerce.png","images\\/clients\\/client-1.png","images\\/clients\\/client-2.png","images\\/clients\\/client-3.png","images\\/clients\\/client-4.png","images\\/clients\\/client-5.png","images\\/clients\\/client-6.png","images\\/clients\\/foursquare.png","images\\/clients\\/popsugar.png","images\\/clients\\/squarespace.png","images\\/clients\\/surveymonkey.png","images\\/clients\\/taskrabbit.png","images\\/clients\\/ted.png","images\\/clients\\/teespring.png","images\\/clients\\/theguardian.png","images\\/clients\\/wolfram.png","images\\/company\\/box.png","images\\/company\\/calendar.png","images\\/company\\/card.png","images\\/company\\/company-client-1.png","images\\/company\\/company-client-2.png","images\\/company\\/company-client-3.png","images\\/company\\/company-client-4.png","images\\/company\\/company-image-1.png","images\\/company\\/company-image-2.png","images\\/company\\/company-image-3.png","images\\/company\\/help.png","images\\/company\\/intro-company-pattern.png","images\\/company\\/letter.png","images\\/company\\/money.png","images\\/company\\/site.png","images\\/company\\/store.png","images\\/company\\/ticket.png","images\\/construction\\/worker.png","images\\/corporate\\/ipad-silver-1.png","images\\/creative\\/creative-elements-mockup.png","images\\/creative\\/image-1.png","images\\/creative\\/image-2.png","images\\/creative\\/image-3.png","images\\/deal\\/bag.png","images\\/deal\\/box-2.png","images\\/deal\\/box-cta.png","images\\/deal\\/box-section-1.png","images\\/deal\\/boxes-mini-1.png","images\\/deal\\/boxes-mini-2.png","images\\/deal\\/dialog.png","images\\/deal\\/intro-box.png","images\\/deal\\/intro-pattern.png","images\\/deal\\/letter.png","images\\/deal\\/map.png","images\\/deal\\/newsletter-pattern.png","images\\/deal\\/pantone.png","images\\/eBook\\/bg-intro-book.png","images\\/eBook\\/book-mockup-inner.png","images\\/eBook\\/book-mockup-intro-2.png","images\\/eBook\\/book-mockup-intro.png","images\\/eBook\\/book-mockup-table-1.png","images\\/eBook\\/book-mockup-table-2.png","images\\/eBook\\/book-mockup.png","images\\/eBook\\/image-book.png","images\\/elegant\\/White Chair.I11.2k.png","images\\/elegant\\/elegant-image-1.png","images\\/elegant\\/elegant-image-3.png","images\\/elegant\\/elegant-logo-dark.png","images\\/elegant\\/elegant-logo.png","images\\/elegant\\/icon-1.png","images\\/elegant\\/icon-2.png","images\\/elegant\\/icon-3.png","images\\/elegant\\/intro-bg.png","images\\/hotel\\/paris-icon.png","images\\/hotel\\/rome-icon.png","images\\/hotel\\/sidney-icon.png","images\\/main\\/logo-big-light.png","images\\/main\\/logo-big.png","images\\/main\\/logo-lg-light.png","images\\/main\\/logo-md-light.png","images\\/main\\/logo-md.png","images\\/main\\/logo-thin-light.png","images\\/main\\/newsletter-pattern.png","images\\/main\\/slider-placeholder.png","images\\/marketing\\/image-promo-left.png","images\\/medical\\/cta-icon.png","images\\/medical\\/f1.png","images\\/medical\\/f2.png","images\\/medical\\/home-icon.png","images\\/medical\\/icon-1.png","images\\/medical\\/icon-2.png","images\\/medical\\/icon-3.png","images\\/medical\\/phone-icon.png","images\\/medical\\/s1.png","images\\/medical\\/s2.png","images\\/modern\\/megapack-logo-black.png","images\\/modern\\/megapack-logo-gray.png","images\\/modern\\/modern-image-1.png","images\\/original\\/envato-logo.png","images\\/original\\/focus-1.png","images\\/original\\/focus-2.png","images\\/original\\/pixfort-client.png","images\\/original\\/services-image-1.png","images\\/original\\/services-image-2.png","images\\/original\\/stars.png","images\\/original\\/unbounce-logo.png","images\\/popups\\/popup-13.png","images\\/product\\/cup-image-2.png","images\\/product\\/logo.png","images\\/real_estate\\/image-1.png","images\\/real_estate\\/image-2.png","images\\/real_estate\\/image-3.png","images\\/saas\\/bg-intro.png","images\\/saas\\/client-1.png","images\\/saas\\/client-2.png","images\\/saas\\/client-3.png","images\\/saas\\/client-4.png","images\\/saas\\/client-5.png","images\\/saas\\/client-6.png","images\\/saas\\/collection-1.png","images\\/saas\\/collection-2.png","images\\/saas\\/collection-4.png","images\\/saas\\/features-1.png","images\\/saas\\/features-2.png","images\\/saas\\/features-3.png","images\\/saas\\/phones-intro.png","images\\/saas\\/promo-image.png","images\\/saas\\/video-play-icon.png","images\\/seo\\/icon-1.png","images\\/seo\\/icon-2.png","images\\/seo\\/icon-3.png","images\\/seo\\/icon-4.png","images\\/seo\\/promo-left-seo.png","images\\/seo\\/seo-intro-bg.png","images\\/services\\/airbnb-logo.png","images\\/services\\/apple-logo.png","images\\/services\\/disney-logo.png","images\\/services\\/megapack-logo-black.png","images\\/services\\/megapack-logo-white.png","images\\/services\\/services-image-hero.png","images\\/services\\/services-intro-image.png","images\\/shop\\/american-express-icon.png","images\\/shop\\/logo.png","images\\/shop\\/master-card-icon.png","images\\/shop\\/promo-image.png","images\\/shop\\/shop-intro-image.png","images\\/shop\\/visa-icon.png","images\\/showcase\\/big-image.png","images\\/showcase\\/features-image-1.png","images\\/showcase\\/features-image-2.png","images\\/showcase\\/features-image-3.png","images\\/showcase\\/logo-thin.png","images\\/software\\/icon-1.png","images\\/software\\/icon-2.png","images\\/software\\/icon-3.png","images\\/software\\/icon-4.png","images\\/software\\/icon-5.png","images\\/software\\/icon-6.png","images\\/software\\/promo-image-1.png","images\\/software\\/promo-image-2.png","images\\/software\\/service-1.png","images\\/software\\/service-2.png","images\\/software\\/service-3.png","images\\/software\\/software-browser.png","images\\/sport\\/icon-intro.png","images\\/sport\\/image-1.png","images\\/sport\\/image-2.png","images\\/sport\\/logo-thin.png","images\\/sport\\/sport-promo-image.png","images\\/startup\\/arrow-down.png","images\\/startup\\/image-1.png","images\\/startup\\/image-2.png","images\\/startup\\/image-cta.png","images\\/startup\\/logo.png","images\\/studio\\/airbnb.png","images\\/studio\\/apple-logo.png","images\\/studio\\/deloitte.png","images\\/studio\\/megapack-icon.png","images\\/studio\\/megapack-logo-navy-blue.png","images\\/studio\\/pixfort.png","images\\/studio\\/sap-logo.png","images\\/studio\\/studio-image-2.png","images\\/studio\\/studio-image-3.png"]'
    };
var PixAccordion = function() {
    this.items = new Backbone.Collection, this.ids = []
};
PixAccordion.prototype.useID = function() {
    for (var e = 1; this.ids.includes(e);) e++;
    return this.ids.push(e), e
}, PixAccordion.prototype.bindHTML = function(e) {
    var t = 0,
        i = this;
    e.find(".panel").each(function() {
        i.items.add({
            id: t,
            title: $(this).find(".panel-title a").html().trim(),
            content: $(this).find(".panel-body").html()
        }), t++
    }), console.log(this.items)
}, PixAccordion.prototype.getOptions = function() {
    var e = "",
        t = this;
    e += '<div class="pix_sidebar_elem"><div class="pix_el_inner"><div class="col-md-12 pix_no_padding"><label for="el_sdasda" class="pix_line_label">Accordion Items</label></div><div class="col-md-12 pix_no_padding"><div class="pix_right_div right_accordion"><div class="panel-group " id="accordion">\n';
    var i = 1;
    return this.items.each(function(n) {
        e += t.createItem(n.get("title"), n.get("content")), i++
    }), e += "</div>", e += '<a href="#" class="pix-btn-primary pix_green_bg pix_md_btn pix_side_btn pix_add_item" style="display: block; width: 100%;">Add new Item</a>', e += "</div></div></div></div>"
}, PixAccordion.prototype.createItem = function(e, t) {
    var i = "",
        n = "pix_side_collapse_" + this.useID();
    return i += '  <div class="panel panel-default">\n    <div class="panel-heading">\n      <h4 class="panel-title">\n        <a data-toggle="collapse" data-parent="#accordion" href="#pix_side_collapse_' + n + '" class="pix_accordion_title">\n' + e + '</a><a class="pix_accordion_edit" data-toggle="collapse" data-parent="#accordion" href="#pix_side_collapse_' + n + '"><i class="material-icons">edit</i></a>\n</a><a href="#" class="pix_accordion_clone"><i class="material-icons">filter_none</i></a>\n</a><a href="#" class="pix_accordion_close"><i class="material-icons">delete</i></a>\n      </h4>\n    </div>\n    <div id="pix_side_collapse_' + n + '" class="panel-collapse collapse">\n      <div class="panel-body"><div class="col-md-12 pix_no_padding"><label for="el_" class="pix_line_label">Title</label></div><div class="col-md-12 pix_no_padding"><div class=" "><div class="input-group input-component"><input type="text" value="' + e + '" class="form-control pix_right_input title_input" id="el_" placeholder="Item Title"/></div></div></div><div class="col-md-12 pix_no_padding"><label for="el_" class="pix_line_label">Content</label></div><div class="col-md-12 pix_no_padding"><div class=" "><div class="input-group input-component"><textarea class="form-control pix_right_input pix_sidebar_value item_content" rows="10" id="el_" placeholder="Item Content">' + t + "</textarea></div></div></div></div>\n</div>\n</div>\n"
}, PixAccordion.prototype.getHTML = function(e) {
    var t = "",
        i = 1;
    return $("#accordion").find(".panel").each(function() {
        t += '  <div class="panel panel-default">\n    <div class="panel-heading">\n      <h4 class="panel-title">\n        <a data-toggle="collapse" data-parent="#' + e + '" href="#c_' + i + "_" + e + '">' + $(this).find(".title_input").val() + '</a>\n      </h4>\n    </div>\n    <div id="c_' + i + "_" + e + '" class="panel-collapse collapse">\n      <div class="panel-body">' + $(this).find(".item_content").val() + "</div>\n    </div>\n  </div>\n", i++
    }), t
}, "undefined" != typeof module && void 0 !== module.exports ? module.exports = new PixAccordion : window.PixAccordion = PixAccordion, window.getUnusedId = function(e) {
    for (var t = 1, i = e + t; 0 != $("body").find("#" + i).length;) i = e + ++t;
    return i
}, window.PixAccordionView = Backbone.View.extend({
    events: {
        "keyup input.title_input": "changeTitle",
        "click a.pix_accordion_clone": "cloneItem",
        "click a.pix_accordion_close": "removeItem",
        "click a.pix_add_item": "createItem"
    },
    initialize: function(e) {
        this.options = e, _.bindAll(this, "render")
    },
    changeTitle: function(e) {
        var t = $(e.currentTarget).val();
        $(e.currentTarget).closest(".panel").find(".pix_accordion_title").html(t)
    },
    cloneItem: function(e) {
        e.preventDefault();
        var t = $(e.currentTarget).closest(".panel"),
            i = this.options.comp.createItem(t.find(".title_input").val(), t.find(".item_content").val());
        t.after(" " + i)
    },
    removeItem: function(e) {
        e.preventDefault();
        var t = $(e.currentTarget).closest(".panel");
        t.fadeOut(function() {
            t.remove()
        })
    },
    createItem: function(e) {
        e.preventDefault();
        var t = $("#accordion"),
            i = this.options.comp.createItem("New Accordion Item", "Lorem ipsum dolor sit amet, consectetur adipisicing elit.");
        return t.append(" " + i), !1
    }
});
var PixCarousel = function(e) {
    this.items = new Backbone.Collection, this.ids = [], this.id = e, this.item_height = "item-450 test"
};
PixCarousel.prototype.useID = function() {
    for (var e = 1; this.ids.includes(e);) e++;
    return this.ids.push(e), e
}, PixCarousel.prototype.bindHTML = function(e) {
    var t = 0,
        i = this;
    e.find(".carousel-inner").hasClass("item-600") && (i.item_height = "item-600"), e.find(".item").each(function() {
        var e = "";
        $(this).find(".pix-slider-btn").length > 0 && (e = $(this).find(".pix-slider-btn").html()), i.items.add({
            id: t,
            title: $(this).find(".carousel-title").html(),
            content: $(this).find(".carousel-text").html(),
            img: $(this).find("img").attr("src"),
            btn: e
        }), t++
    })
}, PixCarousel.prototype.getOptions = function() {
    var e = "",
        t = this;
    e += '<div class="pix_sidebar_elem"><div class="pix_el_inner"><div class="col-md-12 pix_no_padding"><label for="el_sdasda" class="pix_line_label">Slides</label></div><div class="col-md-12 pix_no_padding"><div class="pix_right_div right_accordion"><div class="panel-group " id="accordion">\n';
    var i = 1;
    return this.items.each(function(n) {
        e += t.createItem(n.get("title"), n.get("img"), n.get("content"), n.get("id")), i++
    }), e += "</div>", e += '<a href="#" class="pix-btn-primary pix_green_bg pix_md_btn pix_side_btn pix_add_item" style="display: block; width: 100%;">Add new Item</a>', e += "</div></div></div></div>"
}, PixCarousel.prototype.createItem = function(e, t, i, n) {
    var o = "",
        a = "pix_side_collapse_" + this.useID();
    return o += '  <div class="panel panel-default">\n    <div class="panel-heading">\n      <h4 class="panel-title">\n        <a data-toggle="collapse" data-parent="#accordion" href="#pix_side_collapse_' + a + '" class="pix_accordion_title">\n' + e + '</a><a class="pix_accordion_edit" data-toggle="collapse" data-parent="#accordion" href="#pix_side_collapse_' + a + '"><i class="material-icons">edit</i></a>\n</a><a href="#" class="pix_accordion_clone"><i class="material-icons">filter_none</i></a>\n</a><a href="#" class="pix_accordion_close"><i class="material-icons">delete</i></a>\n      </h4>\n    </div>\n    <div id="pix_side_collapse_' + a + '" class="panel-collapse collapse">\n      <div class="panel-body"><div class="col-md-12 pix_no_padding"><label for="el_" class="pix_line_label">Title</label></div><div class="col-md-12 pix_no_padding"><div class=" "><div class="input-group input-component"><input type="text" value="' + e + '" class="form-control pix_right_input title_input" id="el_" placeholder="Item Title"/><input type="hidden" value="' + t + '" class="img_input"/><input type="hidden" value="' + n + '" class="item_cid"/></div></div></div><div class="col-md-12 pix_no_padding"><label for="el_" class="pix_line_label">Content</label></div><div class="col-md-12 pix_no_padding"><div class=" "><div class="input-group input-component"><textarea class="form-control pix_right_input pix_sidebar_value item_content" rows="10" id="el_" placeholder="Item Content">' + i + "</textarea></div></div></div></div>\n</div>\n</div>\n"
}, PixCarousel.prototype.getHTML = function() {
    var e = "";
    return e += '<div id="' + this.id + '" class="carousel slide pix-slider" data-ride="carousel" data-interval="false">\n', e += this.genIndicators(this.id, $("#accordion").find(".panel").length), e += '<div class="carousel-inner">', e += this.genItems(), e += this.genControls(this.id), e += "</div>", e += "</div>"
}, PixCarousel.prototype.genDefault = function(e) {
    var t = "";
    return t += '<div id="' + e + '" class="carousel slide" data-ride="carousel">\n', t += this.genIndicators(e, 3), t += this.genItems(), t += this.genControls(e), t += "</div>"
}, PixCarousel.prototype.genIndicators = function(e, t) {
    var n = '<ol class="carousel-indicators">\n';
    for (i = 0; i < t; i++) 0 == i ? n += '    <li data-target="#' + e + '" data-slide-to="0" class="active"></li>\n' : n += '    <li data-target="#' + e + '" data-slide-to="' + i + '"></li>\n';
    return n += "  </ol>\n"
}, PixCarousel.prototype.genItems = function() {
    var e = "";
    e += '<div class="carousel-inner ' + this.item_height + '">\n';
    var t = 0,
        i = this;
    return $("#accordion").find(".panel").each(function() {
        e += 0 == t ? '<div class="item active">\n' : '<div class="item">\n';
        var n = i.items.get({
                id: $(this).find(".item_cid").val()
            }),
            o = "";
        n && (o = n.get("btn")), e += '      <img src="' + $(this).find(".img_input").val() + '" alt="Chania">\n      <div class="carousel-caption">\n        <h2 class="carousel-title secondary-font">' + $(this).find(".title_input").val() + '</h2>\n        <h5 class="carousel-text secondary-font">' + $(this).find(".item_content").val() + '</h5>\n        <div class="pix-slider-btn pix-padding-top-15">' + o + "</div>\n      </div>\n    </div>", t++
    }), e += "</div>"
}, PixCarousel.prototype.genControls = function(e) {
    return '<a class="left carousel-control" href="#' + e + '" data-slide="prev">\n    <span class="glyphicon glyphicon-chevron-left"></span>\n    <span class="sr-only">Previous</span>\n  </a>\n  <a class="right carousel-control" href="#' + e + '" data-slide="next">\n    <span class="glyphicon glyphicon-chevron-right"></span>\n    <span class="sr-only">Next</span>\n  </a>\n'
}, "undefined" != typeof module && void 0 !== module.exports ? module.exports = new PixCarousel : window.PixCarousel = PixCarousel, window.PixCarouselView = Backbone.View.extend({
    events: {
        "keyup input.title_input": "changeTitle",
        "click a.pix_accordion_clone": "cloneItem",
        "click a.pix_accordion_close": "removeItem",
        "click a.pix_add_item": "createItem"
    },
    initialize: function(e) {
        this.options = e, _.bindAll(this, "render")
    },
    changeTitle: function(e) {
        var t = $(e.currentTarget).val();
        $(e.currentTarget).closest(".panel").find(".pix_accordion_title").html(t)
    },
    cloneItem: function(e) {
        e.preventDefault();
        var t = $(e.currentTarget).closest(".panel"),
            i = this.options.comp.createItem(t.find(".title_input").val(), t.find(".img_input").val(), t.find(".item_content").val(), t.find(".item_cid").val());
        t.after(" " + i)
    },
    removeItem: function(e) {
        e.preventDefault();
        var t = $(e.currentTarget).closest(".panel");
        t.fadeOut(function() {
            t.remove()
        })
    },
    createItem: function() {
        var e = $("#accordion"),
            t = this.options.comp.createItem("Slide Title", "images/main/slider-placeholder.png", "Slide Tagline goes here!");
        e.append(" " + t)
    }
}), window.is_demo = !0, window.pix_system = function() {
    var e = {
            views: {},
            models: {},
            collections: {},
            content: null,
            pagesCollection: null,
            imagesCollection: null,
            router: null,
            current_cid: null,
            images_html: null,
            ViewsFactory: null,
            init: function() {
                localStorage.clear(), this.content = $("body"), this.pagesCollection = new e.collections.pages, this.imagesCollection = new e.collections.images, this.ViewsFactory = t, t.builder("body"), t.gallery("body"), t.grid("body");
                var i = t.pages("pages");
                if (window.is_demo) {
                    var n = this.pagesCollection.add_page("new", "index", "Index", "", "", "", "", "");
                    this.current_cid = n.cid, i.save_current(), this.imagesCollection.add_demo_images()
                } else this.pagesCollection.get_pages();
                return window.onbeforeunload = function(e) {
                    var t = "Any unsaved changes will be lost. Are you sure you want to leave?";
                    return (e = e || window.event) && (e.returnValue = t), t
                }, Backbone.history.start(), this
            },
            changeContent: function(e) {
                return this.content.empty().append(e), this
            },
            title: function(e) {
                return $("#title").text(e), this
            }
        },
        t = {
            builder: function() {
                return this.builderView || (this.builderView = new e.views.builder({
                    model: e.pagesCollection,
                    elem: "body"
                })), this.builderView
            },
            gallery: function() {
                return this.galleryView || (this.galleryView = new e.views.gallery({
                    model: e.imagesCollection,
                    elem: "body"
                })), this.galleryView
            },
            pages: function() {
                return this.pagesView || (this.pagesView = new e.views.pages({
                    model: e.pagesCollection,
                    elem: "#pix_left_pages_view"
                })), this.pagesView
            },
            grid: function() {
                return this.gridView || (this.gridView = new e.views.grid({
                    model: e.pagesCollection,
                    elem: "body"
                })), this.gridView
            },
            client: function() {}
        },
        i = Backbone.Router.extend({
            routes: {
                test: "client"
            },
            client: function() {
                alert("Test")
            }
        });
    return e.router = new i, e
}(), pix_system.views.builder = Backbone.View.extend({
    template: _.template(""),
    events: {
        "submit #pix_saveform": "save_project",
        "click #pix_header_preview": "preview_page",
        "click #pix_empty_page": "empty_page",
        "click #pix_export_zip": "export_zip",
        "click #pix_export_ftp": "export_ftp",
        "click #pix_project_settings": "project_settings",
        "click #pix_edit_source": "edit_source",
        "click #pix_custom_css": "custom_css",
        "click .demo_popup": "demo_popup"
    },
    initialize: function(e) {
        this.$el = $(e.elem), this.render()
    },
    render: function() {
        return this.delegateEvents(), this
    },
    save_project: function(e) {
        e.preventDefault();
        var t = this;
        pix_system.ViewsFactory.pages().save_current();
        var i = JSON.stringify(this.scan_images()),
            n = {
                pages: this.model.toJSON(),
                images: i,
                req: "SAVEPROJECT"
            },
            o = $.confirm({
                theme: "pix-default-modal",
                title: "Saving Project",
                boxWidth: "600px",
                useBootstrap: !1,
                backgroundDismiss: !0,
                content: 'Please Don\'t close the page until you get the success notification.<div class=" jconfirm-box jconfirm-hilight-shake jconfirm-type-default  jconfirm-type-animated loading" role="dialog"></div>',
                defaultButtons: !1,
                buttons: {
                    cancel: {
                        text: "OK",
                        btnClass: "btn-cancel"
                    }
                }
            });
        return $.ajax({
            url: "dev_save",
            data: n,
            cache: !1,
            type: "POST",
            success: function(e) {
                var i = $.parseJSON(e);
                if (console.log(i), i)
                    if (o.close(), i.result) {
                        notyf.confirm("Your changes have been successfully saved!");
                        var n = i.new_pages;
                        n && $.each(n, function(e, i) {
                            t.model.set_pid(e, i)
                        })
                    } else notyf.alert("Error while saving the project! please try again.");
                else notyf.alert("Error while saving the project! please try again.")
            },
            error: function(e) {
                notyf.alert("Error: Couldn't save the project!")
            }
        }), !1
    },
    scan_images: function() {
        var e = [],
            t = $("<div>"),
            i = new RegExp("^([a-z]+://|//)", "i");
        return this.model.each(function(n, o) {
            t.html(n.get("page_code")), t.find("*").each(function() {
                if ($(this).is("img")) i.test($(this).attr("src")) || e.push($(this).attr("src"));
                else {
                    var t = $(this).css("background-image");
                    if ("none" != t) {
                        var n = /url\(\"([\s\S]*)\"\)/;
                        if (n.exec(t)) {
                            var o = n.exec(t)[1];
                            if (o) {
                                i.test(o) || e.push(o);
                                var a = /([\s\S]*)\/megapack\/images\/([\s\S]*)/;
                                if (a.exec(o)) {
                                    r = a.exec(o)[2];
                                    e.push("megapack/" + r)
                                }
                                var s = /([\s\S]*)\/uploads\/([\s\S]*)/;
                                if (s.exec(o)) {
                                    var r = s.exec(o)[2];
                                    e.push("uploads/" + r)
                                }
                            }
                        }
                    }
                }
            })
        }), console.log(e), e
    },
    preview_page: function(e) {
        e.preventDefault();
        var t = $("#pixGrid").pixbuilder("getHtml");
        return t = t.replace(/assets\/images\//g, "images/"), $("#markupField2").val(t), $.confirm({
            title: "Preview Current Page",
            boxWidth: "600px",
            useBootstrap: !1,
            theme: "pix-default-modal",
            backgroundDismiss: !0,
            content: "<strong>Please note:</strong> you can only preview a single page; links to other pages won't work. When you make changes to your page, reloading the preview won't work, instead you'll have to use the \"Preview\" button again.",
            buttons: {
                cancel: {
                    text: "CANCEL",
                    btnClass: "btn-cancel"
                },
                showpreview: {
                    text: "SHOW PREVIEW",
                    btnClass: "btn-blue",
                    keys: ["enter", "shift"],
                    action: function() {
                        var e = $("#pix_page_style").text(),
                            t = {
                                title: "PixFort",
                                contents: $("#pixGrid").pixbuilder("getHtml"),
                                custom_css: e
                            };
                        $("#pix_previewform").find(".pix-input").remove();
                        var i = document.createElement("input");
                        i.setAttribute("type", "hidden"), i.setAttribute("name", "page_data"), i.setAttribute("class", "pix-input"), i.setAttribute("value", JSON.stringify(t)), $("#pix_previewform").prepend(i), $("#pix_previewform").submit(), preview_btn_check()
                    }
                }
            }
        }), preview_btn_check(), !1
    },
    empty_page: function(e) {
        return e.preventDefault(), $.confirm({
            title: "Empty Page",
            boxWidth: "600px",
            useBootstrap: !1,
            theme: "pix-danger-modal",
            backgroundDismiss: !0,
            content: "<strong>Please note:</strong> This will empty the contents of current the page, this action can't be undone.",
            buttons: {
                cancel: {
                    text: "CANCEL",
                    btnClass: "btn-cancel"
                },
                showpreview: {
                    text: "Empty Page",
                    btnClass: "btn-red",
                    keys: ["enter", "shift"],
                    action: function() {
                        $("#pixGrid").pixbuilder("deinit"), $("#pixGrid").html(""), $("#pixGrid").pixbuilder("init"), $("#pix_page_style").text(""), $("#pix_start_panel").show()
                    }
                }
            }
        }), !1
    },
    export_zip: function(e) {
        return e.preventDefault(), $.confirm({
            title: "Export as .Zip file",
            boxWidth: "600px",
            useBootstrap: !1,
            theme: "pix-default-modal",
            backgroundDismiss: !0,
            content: "Don't forget to save the project before exporting it.",
            buttons: {
                cancel: {
                    text: "CANCEL",
                    btnClass: "btn-cancel"
                },
                publish: {
                    text: "GO TO EXPORT PAGE",
                    btnClass: "btn-blue",
                    keys: ["enter", "shift"],
                    action: function() {
                        window.open("export", "_blank")
                    }
                }
            }
        }), !1
    },
    export_ftp: function(e) {
        return e.preventDefault(), $.confirm({
            title: "Publish via FTP",
            boxWidth: "600px",
            useBootstrap: !1,
            theme: "pix-default-modal",
            backgroundDismiss: !0,
            content: "Don't forget to save the project before publishing it.",
            buttons: {
                cancel: {
                    text: "CANCEL",
                    btnClass: "btn-cancel"
                },
                publish: {
                    text: "GO TO PUBLISH PAGE",
                    btnClass: "btn-blue",
                    keys: ["enter", "shift"],
                    action: function() {
                        window.open("export#FTP", "_blank")
                    }
                }
            }
        }), !1
    },
    project_settings: function(e) {
        return e.preventDefault(), $.confirm({
            title: "Project Settings",
            boxWidth: "1000px",
            useBootstrap: !1,
            theme: "pix-settings-modal",
            backgroundDismiss: !0,
            content: '<div id="pix-project-settings-div" style="display:none;">Google Fonts: <select name="combobox" class="selectpicker font-select-picker combobox" data-live-search="true"></select></div>\n\n',
            onContentReady: function() {
                $("#pix-project-settings-div").height(.65 * $(window).height()).show()
            },
            buttons: {
                cancel: {
                    text: "CANCEL",
                    btnClass: "btn-cancel"
                },
                publish: {
                    text: "APPLY",
                    btnClass: "btn-blue",
                    keys: ["enter", "shift"],
                    action: function() {
                        window.open("export#FTP", "_blank")
                    }
                }
            }
        }), !1
    },
    edit_source: function(e) {
        e.preventDefault(), ace.require("ace/ext/language_tools");
        var t = null;
        return $.confirm({
            title: "Page Source Code",
            boxWidth: "75%",
            useBootstrap: !1,
            theme: "pix-code-modal",
            content: '<div id="pix_output_source_div"></div>',
            onContentReady: function() {
                (t = ace.edit("pix_output_source_div")).setTheme("ace/theme/monokai"), t.getSession().setMode("ace/mode/html"), t.setOptions({
                    enableBasicAutocompletion: !0,
                    enableSnippets: !0,
                    showPrintMargin: !1
                }), t.setValue($("#pixGrid").pixbuilder("getHtml")), $("#pix_output_source_div").height(.65 * $(window).height()).val($("#pixGrid").pixbuilder("getHtml")).show(), t.gotoLine(1);
                $("#pix_preview").hasClass("active") && $("#pixGrid").removeClass("ge-editing"), this.$body.append('<div class="pix_modal_text_notice"><i class="material-icons">info_outline</i>Note: Changing HTML code may break page layout, custom modifications will not be supported!</div>'), this.$body.find(".pix_modal_text_notice").fadeIn()
            },
            buttons: {
                cancel: {
                    text: "CANCEL",
                    btnClass: "btn-cancel"
                },
                apply: {
                    text: "APPLY",
                    btnClass: "btn-blue",
                    action: function() {
                        $("#pixGrid").pixbuilder("deinit");
                        var e = $("<div>").append(t.getValue()).html();
                        $("#pixGrid").html(e), $("#pixGrid").pixbuilder("init");
                        $("#pix_preview").hasClass("active") && $("#pixGrid").removeClass("ge-editing")
                    }
                }
            }
        }), !1
    },
    custom_css: function(e) {
        e.preventDefault();
        var t = null,
            i = this.model.get({
                cid: pix_system.current_cid
            });
        return $.confirm({
            title: "Page Custom CSS",
            boxWidth: "70%",
            useBootstrap: !1,
            theme: "pix-code-modal",
            content: '<div id="pix_output_css"></div>',
            onContentReady: function() {
                (t = ace.edit("pix_output_css")).setTheme("ace/theme/monokai"), t.getSession().setMode("ace/mode/css"), t.setOptions({
                    enableBasicAutocompletion: !0,
                    enableSnippets: !0,
                    showPrintMargin: !1,
                    enableLiveAutocompletion: !0
                });
                var e = i.get("page_css");
                e || (e = ""), t.setValue(e), $("#pix_output_css").height(.65 * $(window).height()).val(e).show(), t.gotoLine(1), this.$body.append('<div class="pix_modal_text_notice"><i class="material-icons">info_outline</i>Note: Changing CSS Style may break page layout, custom modifications will not be supported!</div>'), this.$body.find(".pix_modal_text_notice").fadeIn()
            },
            buttons: {
                cancel: {
                    text: "CANCEL",
                    btnClass: "btn-cancel"
                },
                apply: {
                    text: "APPLY",
                    btnClass: "btn-blue",
                    action: function() {
                        var e = t.getValue(),
                            n = $("#pix_page_style"),
                            o = "",
                            a = {};
                        a.org_css = e, i.set({
                            page_css: e
                        }), $.post("core/php/pix_css.php", a, function(e) {
                            e ? (o = e.text, n ? n.html(o) : (style = document.createElement("style"), style.type = "text/css", style.id = "pix_page_style", style.styleSheet ? style.styleSheet.cssText = o : style.appendChild(document.createTextNode(o)), head = document.find("head")[0], head.appendChild(style)), i.set({
                                page_builder_css: o
                            })) : alert("error")
                        }, "json")
                    }
                }
            }
        }), !1
    },
    demo_popup: function() {
        demo_popup()
    }
}), pix_system.views.gallery = Backbone.View.extend({
    template: _.template(""),
    events: {
        "click .pix_g_img": "imageClick",
        "click a.pix_del_img_btn": "imageDelete",
        "click a.pix_select_img.pix_btn_click": "sidebarImage",
        "change .pix_img_url": "changeGalleryImage"
    },
    initialize: function(e) {
        this.$el = $(e.elem), this.render();
        var t = _.bind(this.render, this);
        this.model.bind("change", t), this.model.bind("add", t), this.model.bind("remove", t)
    },
    render: function() {
        return this.model.generate_html2(), this.delegateEvents(), this
    },
    render_images: function() {
        for (var e = $(".pix_gallery_images").find("img"), t = 0; t < e.length; t++) e[t].getAttribute("data-src") && e[t].setAttribute("src", e[t].getAttribute("data-src"))
    },
    imageClick: function(e) {
        return e.preventDefault(), $("#pix_img_edit_gallery a.pix_g_img").not($(e.currentTarget)).removeClass("clicked"), $(e.currentTarget).addClass("clicked"), $("#pix_gallery_modal_url").val($(e.currentTarget).find("img").attr("src")), $(".pix_img_preview").find("a").attr("href", $(e.currentTarget).find("img").attr("src")), $(".pix_img_preview").find("img").attr("src", $(e.currentTarget).find("img").attr("src")), !1
    },
    changeGalleryImage: function() {
        $(".pix_img_preview").find("a").attr("href", $("#pix_gallery_modal_url").val()), $(".pix_img_preview").find("img").attr("src", $("#pix_gallery_modal_url").val()), $("#pix_img_edit_gallery a.pix_g_img").removeClass("clicked"), $(".pix_image_modal_imgs").find('img[src="' + $("#pix_gallery_modal_url").val() + '"]').parent().addClass("clicked"), $(".pix_image_modal_imgs").find('img[src="' + $("#pix_gallery_modal_url").val() + '"]').length > 0 && $(".pix_gallery_scroll.scrollbar-macosx").scrollTop($(".pix_image_modal_imgs").find('img[src="' + $("#pix_gallery_modal_url").val() + '"]').closest(".pix_img_div").position().top)
    },
    chooseImage: function(e, t) {
        $(".pix_img_preview").find("a").attr("href", e), $(".pix_img_preview").find("img").attr("src", e), $("#pix_gallery_modal_url").val(e), $("#pix_gallery_modal_alt").val(t), $("#pix_img_edit_gallery a.pix_g_img").removeClass("clicked"), $(".pix_image_modal_imgs").find('img[src="' + e + '"]').parent().addClass("clicked"), $(".pix_image_modal_imgs").find('img[src="' + e + '"]').length > 0 && $(".pix_gallery_scroll.scrollbar-macosx").scrollTop($(".pix_image_modal_imgs").find('img[src="' + e + '"]').closest(".pix_img_div").position().top)
    },
    imageDelete: function(e) {
        e.preventDefault();
        var t = {},
            i = $(e.currentTarget),
            n = i.attr("data-name");
        return t.file = n, $.confirm({
            title: "Delete File",
            boxWidth: "500px",
            useBootstrap: !1,
            theme: "pix-danger-modal",
            backgroundDismiss: !0,
            content: "Are you sure that you want to delete the file <strong>" + t.file + "</strong>",
            buttons: {
                cancel: {
                    text: "CANCEL",
                    btnClass: "btn-cancel"
                },
                deletefile: {
                    text: "DELETE",
                    btnClass: "btn-red",
                    keys: ["enter", "shift"],
                    action: function() {
                        $.ajax({
                            url: "delete_file",
                            dataType: "json",
                            data: t,
                            cache: !1,
                            type: "POST",
                            success: function(e) {
                                "success" == e.type ? (notyf.confirm(e.message), i.parent().hide("slow"), pix_system.imagesCollection.remove_image(n)) : notyf.alert(e.message)
                            },
                            error: function(e) {
                                alert("Error: Couldn't delete image!"), console.log(e)
                            }
                        })
                    }
                }
            }
        }), !1
    },
    edit_img: function(e) {
        var t = this.template({});
        t += _.template($("#tpl-gallery-popup").html())({});
        var i = this;
        $.confirm({
            title: "Image Gallery",
            boxWidth: "1100px",
            useBootstrap: !1,
            animation: "bottom",
            theme: "pix-gallery-modal",
            closeIcon: !0,
            content: t,
            onContentReady: function() {
                $("#pix_output_gallery_div").show(), window.is_demo ? this.$body.append('<div class="pix_modal_upload"><button type="button" class="btn btn-upload demo_popup"><i class="material-icons">cloud_upload</i> UPLOAD IMAGE</button></div>') : this.$body.append('<div class="pix_modal_upload"><input type="file" name="files[]" id="pix_file_input" multiple="multiple"></div>'), this.$body.find(".pix_modal_upload").delay("slow").fadeIn(), test_upload(), this.$body.find(".pix_image_modal_imgs").append(pix_system.images_html), $(".scrollbar-macosx").scrollbar(), $(".pix_current_image_div").height(90).show();
                var t = .5 * $(window).height();
                $(".pix_small_content_window").css("max-height", t + "px"), $(".pix_gallery_images").delay("slow").height(t).show(), i.chooseImage(e.attr("src"), e.attr("alt")), i.render_images()
            },
            buttons: {
                cancel: {
                    text: "CANCEL",
                    btnClass: "btn-cancel"
                },
                showpreview: {
                    text: "APPLY",
                    btnClass: "btn-blue",
                    keys: ["enter", "shift"],
                    action: function() {
                        e.attr("src", $("#pix_gallery_modal_url").val()), e.attr("alt", $("#pix_gallery_modal_alt").val());
                        var t = e.closest("a");
                        t && (console.log(t), $(t).attr("data-fancybox") && t.attr("href", $("#pix_gallery_modal_url").val())), setTimeout(function() {
                            fixed_header_update(), pix_fix_heights()
                        }, 500), pixSave($("#pixGrid").html())
                    }
                }
            }
        })
    },
    sidebarImage: function(e) {
        e.preventDefault();
        var t = $(e.currentTarget),
            i = $("#" + t.attr("data-pix-field")),
            n = $("#" + t.attr("data-pix-preview")),
            o = i.val(),
            a = this.template({});
        a += _.template($("#tpl-gallery-popup").html())({});
        var s = this;
        return $.confirm({
            title: "Image Gallery",
            boxWidth: "1100px",
            useBootstrap: !1,
            animation: "bottom",
            theme: "pix-gallery-modal",
            closeIcon: !0,
            content: a,
            onContentReady: function() {
                $(".pix_modal_alt_div").hide(), $("#pix_output_gallery_div").show(), window.is_demo ? this.$body.append('<div class="pix_modal_upload"><button type="button" class="btn btn-upload demo_popup"><i class="material-icons">cloud_upload</i> UPLOAD IMAGE</button></div>') : this.$body.append('<div class="pix_modal_upload"><input type="file" name="files[]" id="pix_file_input" multiple="multiple"></div>'), this.$body.find(".pix_modal_upload").delay("slow").fadeIn(), test_upload(), this.$body.find(".pix_image_modal_imgs").append(pix_system.images_html), $(".scrollbar-macosx").scrollbar(), $(".pix_current_image_div").height(90).show();
                var e = .5 * $(window).height();
                $(".pix_small_content_window").css("max-height", e + "px"), $(".pix_gallery_images").delay("slow").height(e).show(), s.chooseImage(o, ""), s.render_images()
            },
            buttons: {
                cancel: {
                    text: "CANCEL",
                    btnClass: "btn-cancel"
                },
                showpreview: {
                    text: "APPLY",
                    btnClass: "btn-blue",
                    keys: ["enter", "shift"],
                    action: function() {
                        i.val($("#pix_gallery_modal_url").val()), n.attr("src", $("#pix_gallery_modal_url").val())
                    }
                }
            }
        }), !1
    },
    image_gallery: function(e) {
        var t = this.template({});
        t += _.template($("#tpl-gallery-popup").html())({}), $.confirm({
            title: "Image Gallery",
            boxWidth: "1100px",
            useBootstrap: !1,
            theme: "pix-gallery-modal",
            closeIcon: !0,
            content: t,
            onContentReady: function() {
                $("#pix_output_gallery_div").height(650).show(), this.$body.append('<div class="pix_modal_upload"><input type="file" name="files[]" id="pix_file_input" multiple="multiple"></div>'), this.$body.find(".pix_modal_upload").delay("slow").fadeIn(), test_upload(), this.$body.find(".pix_image_modal_imgs").append(pix_system.images_html), $(".scrollbar-macosx").scrollbar(), $(".pix_current_image_div").height(90).show(), $(".pix_gallery_images").delay("slow").height(530).show()
            },
            buttons: {
                cancel: {
                    text: "CANCEL",
                    btnClass: "btn-cancel"
                },
                showpreview: {
                    text: "APPLY",
                    btnClass: "btn-blue",
                    keys: ["enter", "shift"],
                    action: function() {}
                }
            }
        })
    }
}), pix_system.views.pages = Backbone.View.extend({
    template: _.template(""),
    events: {
        "click a.pix_item_page_name": "choose_page",
        "click a.pix_duplicate_btn": "duplicate",
        "click a.pix_seo_btn": "seo",
        "click a.pix_del_btn": "delete",
        "click a.pix_edit_page_name": "rename",
        "click a.pix_add_new_page": "add_new"
    },
    initialize: function(e) {
        console.log(e.elem), this.$el = $(e.elem), this.render();
        var t = _.bind(this.render, this);
        this.model.bind("change", t), this.model.bind("add", t), this.model.bind("remove", t)
    },
    render: function() {
        var e = this.template({});
        return this.model.each(function(t) {
            if ("deleted" != t.get("status")) {
                var i = _.template($("#tpl-page-item").html()),
                    n = "";
                t.cid == pix_system.current_cid && (n = "active"), e += i({
                    active_class: n,
                    name: t.get("name"),
                    cid: t.cid
                })
            }
        }), $("#pix_left_pages_ul").html(e), this.delegateEvents(), this
    },
    add_new: function(e) {
        e.preventDefault(), this.save_current();
        var t = this.model.get_unused_name(),
            i = this.model.add_page("new", t, "New Page", "", "", "", "", "", "");
        this.load_page(i.cid), pix_system.current_cid = i.cid, this.render()
    },
    choose_page: function(e) {
        e.preventDefault();
        var t = $(e.currentTarget).data("cid");
        if (t) {
            this.save_current(), $("#pixGrid").pixbuilder("deinit");
            var i = $("#pixGrid").html(),
                n = this.model.get({
                    cid: pix_system.current_cid
                });
            n && n.set({
                page_code: i
            }), this.load_page(t)
        }
    },
    save_current: function() {
        $("#pixGrid").pixbuilder("init"), $("#pixGrid").pixbuilder("deinit");
        var e = $("#pixGrid").html(),
            t = this.model.get({
                cid: pix_system.current_cid
            });
        t && t.set({
            page_code: e
        }), $("#pixGrid").pixbuilder("init")
    },
    load_page: function(e) {
        var t = this.model.get({
            cid: e
        });
        t && ($("#pixGrid").html(t.get("page_code")), $("#pix_page_style").text(t.get("page_builder_css")), pix_system.current_cid = e, $("#pixGrid").pixbuilder("init"), $("#header_page_name span").html(t.get("name")), $("#pixGrid").find(".pix_section").length < 1 ? $("#pix_start_panel").show() : $("#pix_start_panel").hide(), this.render())
    },
    duplicate: function(e) {
        e.preventDefault();
        var t = $(e.currentTarget).data("cid"),
            i = this.model.clone_page(t),
            n = this.model.get_unused_name();
        i.set({
            pid: "new",
            name: n
        }), this.save_current(), this.load_page(i.cid)
    },
    delete: function(e) {
        if (e.preventDefault(), this.model.active_pages_length() > 1) {
            var t = $(e.currentTarget).data("cid"),
                i = this;
            $.confirm({
                title: "DELETE PAGE",
                useBootstrap: !1,
                theme: "pix-danger-modal",
                boxWidth: "600px",
                backgroundDismiss: !0,
                content: "<strong>Are you sure you want to delete the page?</strong>",
                buttons: {
                    cancel: {
                        text: "CANCEL",
                        btnClass: "btn-cancel"
                    },
                    delete_popup: {
                        text: "DELETE",
                        btnClass: "btn-red",
                        keys: ["enter", "shift"],
                        action: function() {
                            i.model.remove_page(t), pix_system.current_cid = i.model.first().cid, i.load_page(pix_system.current_cid), i.render()
                        }
                    }
                }
            })
        } else notyf.alert("You can't delete all pages, you should keep at least one page!")
    },
    rename: function(e) {
        e.preventDefault();
        var t = $(e.currentTarget).data("cid"),
            i = this.model.get({
                cid: t
            }),
            n = this;
        return i && $.confirm({
            title: "Rename Page",
            boxWidth: "560px",
            useBootstrap: !1,
            theme: "pix-default-modal",
            content: '<form action="" class="formName"><div class="form-group"><label>Edit page name</label><input type="text" placeholder="Your name" class="name form-control" value="' + i.get("name") + '" required /></div><p>*Note: this is the name of the .html file, to change page title please open the SEO settings of the page.</p></form>',
            buttons: {
                cancel: {
                    text: "CANCEL",
                    btnClass: "btn-cancel"
                },
                formSubmit: {
                    text: "APPLY",
                    btnClass: "btn-blue",
                    action: function() {
                        var e = this.$content.find(".name").val();
                        return e ? n.model.name_exist(e) ? ($.alert("This name is already used in another page, please choose a unique page name!"), !1) : void i.set({
                            name: e
                        }) : ($.alert("provide a valid name"), !1)
                    }
                }
            },
            onContentReady: function() {
                var e = this;
                this.$content.find("form").on("submit", function(t) {
                    t.preventDefault(), e.$$formSubmit.trigger("click")
                })
            }
        }), !1
    },
    seo: function(e) {
        e.preventDefault();
        var t = $(e.currentTarget).data("cid"),
            i = this.model.get({
                cid: t
            }),
            n = this.template({});
        n += _.template($("#tpl-seo-popup").html())({
            title: i.get("title"),
            page_description: i.get("page_description"),
            page_keywords: i.get("page_keywords"),
            page_includes: i.get("page_includes")
        }), $.confirm({
            title: "SEO Settings!",
            boxWidth: "600px",
            useBootstrap: !1,
            theme: "pix-settings-modal",
            content: "" + n,
            buttons: {
                cancel: {
                    text: "CANCEL",
                    btnClass: "btn-cancel"
                },
                formSubmit: {
                    text: "APPLY",
                    btnClass: "btn-blue",
                    action: function() {
                        var e = this.$content.find(".title").val(),
                            t = this.$content.find(".page_description").val(),
                            n = this.$content.find(".page_keywords").val(),
                            o = this.$content.find(".page_includes").val();
                        i.set({
                            title: e,
                            page_description: t,
                            page_keywords: n,
                            page_includes: o
                        })
                    }
                }
            },
            onContentReady: function() {
                var e = this;
                this.$content.find("form").on("submit", function(t) {
                    t.preventDefault(), e.$$formSubmit.trigger("click")
                })
            }
        })
    }
}), pix_system.views.grid = Backbone.View.extend({
    events: {},
    rightClickedElement: null,
    initialize: function(e) {
        this.$el = $(e.elem), this.render()
    },
    render: function() {
        return this.delegateEvents(), this
    },
    setContent: function(e) {
        this.$el.html(e), this.render()
    },
    closeMenu: function(e) {
        e.preventDefault();
        var t = document.getElementById("pix_grid_context_menu");
        return t && t.remove(), !1
    },
    menuClick: function(e) {
        return e.preventDefault(), !1
    },
    onRightClick: function(e) {
        var t = '<ul id="pix_grid_context_menu" class="custom-menu btn-group-vertical" role="group">';
        t += '<li class="pix_menu_item pix_field_input" data-action="pix_field_settings_in">Test</li>', t += "</ul>";
        var i = document.getElementById("pix_grid_context_menu");
        return i && i.remove(), $("body").append(t), rightClickedElement = $(e.target), $("#pix_grid_context_menu").finish().fadeIn(200).css({
            top: e.pageY + "px",
            left: e.pageX + "px"
        }), e.preventDefault(), !1
    },
    test: function() {}
}), pix_system.models.page = Backbone.Model.extend({
    defaults: {
        page_cid: "",
        pid: "",
        name: "",
        title: "",
        page_css: "",
        page_builder_css: "",
        page_code: ""
    }
}), pix_system.models.image = Backbone.Model.extend({
    defaults: {
        url: "",
        idAttribute: "url",
        s_type: ""
    }
}), pix_system.collections.pages = Backbone.Collection.extend({
    initialize: function() {},
    add_page: function(e, t, i, n, o, a, s, r, l) {
        var c = pix_system.pagesCollection.add({
            pid: e,
            name: t,
            title: i,
            page_description: n,
            page_keywords: a,
            page_includes: o,
            page_css: s,
            page_builder_css: r,
            page_code: l
        });
        return pix_system.pagesCollection.get({
            cid: c.cid
        }).set({
            page_cid: c.cid
        }), c
    },
    clone_page: function(e) {
        var t = pix_system.pagesCollection.get(e).clone();
        return pix_system.pagesCollection.add(t), this.trigger("change"), t
    },
    set_pid: function(e, t) {
        var i = pix_system.pagesCollection.get({
            cid: e
        });
        i && i.set({
            pid: t
        })
    },
    get_pages: function() {
        var e = this;
        $.ajax({
            type: "GET",
            dataType: "json",
            accepts: {
                json: "application/json"
            },
            url: "get_project_data",
            success: function(t, i) {
                if (t.pages) {
                    e.clear(), $.each(t.pages, function(t, i) {
                        e.add_page(i.id, i.name, i.title, i.page_description, i.page_includes, i.page_keywords, i.page_css, "", i.page_code)
                    }), pix_system.current_cid = e.first().cid, $("#pixGrid").html(e.first().get("page_code")), e.each(function(e) {
                        var t = e.get("page_css");
                        if (t && "" != t) {
                            var i = {};
                            i.org_css = t, $.post("core/php/pix_css.php", i, function(t) {
                                t ? (builder_css = t.text, e.set({
                                    page_builder_css: builder_css
                                })) : alert("Error Loading page css data! E00C1")
                            }, "json")
                        }
                    });
                    var n = e.first().get("page_css");
                    if (n && "" != n) {
                        var o = {};
                        o.org_css = n, $.post("core/php/pix_css.php", o, function(t) {
                            t ? (builder_css = t.text, e.first().set({
                                page_builder_css: builder_css
                            }), $("#pix_page_style").text(builder_css)) : alert("Error Loading page css data! E00C2")
                        }, "json")
                    }
                    $("#pixGrid").pixbuilder("init"), $("#pixGrid").find(".pix_section").length < 1 ? $("#pix_start_panel").show() : $("#pix_start_panel").hide(), e.trigger("change"), pix_system.imagesCollection.add_images(t.project_imgs)
                }
            },
            error: function(e, t, i) {
                alert(t)
            }
        })
    },
    remove_page: function(e) {
        var t = this.get({
            cid: e
        });
        t && ("new" == t.get("pid") ? this.remove({
            cid: e
        }) : (t.set({
            status: "deleted"
        }), t.set({
            page_code: ""
        }), t.set({
            page_css: ""
        })))
    },
    active_pages_length: function() {
        var e = 0;
        return this.each(function(t, i) {
            "deleted" != t.get("status") && e++
        }), e
    },
    clear: function() {
        return this.reset(), this
    },
    name_exist: function(e) {
        var t = !1;
        return this.each(function(i, n) {
            i.get("name") === e && (t = !0)
        }), t
    },
    get_unused_name: function() {
        var e = 1,
            t = "new_page";
        if (!this.name_exist(t)) return t;
        for (; this.name_exist(t + "_" + e);) e++;
        return t + "_" + e
    },
    model: pix_system.models.page
}), pix_system.collections.images = Backbone.Collection.extend({
    initialize: function() {},
    add_image: function(e, t) {
        return res = this.add({
            url: e,
            s_type: t
        })
    },
    remove_image: function(e) {
        this.remove(this.where({
            url: e
        }))
    },
    generate_html: function() {
        var e = $("<div>");
        this.each(function(t) {
            "uploads" === t.get("s_type") && e.append($('<div class="col-xs-6 col-md-15 pix_img_div"><a href="#" class="pix_g_img"><img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-src="uploads/' + t.get("url") + '"></a><a href="#" class="pix_del_img_btn" data-name="' + t.get("url") + '">DELETE</a></div>'))
        }), this.each(function(t) {
            "item" === t.get("s_type") && e.append($('<div class="col-xs-6 col-md-15 pix_img_div"><a href="#" class="pix_g_img"><img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-src="' + t.get("url") + '"></a></div>'))
        }), pix_system.images_html = e.html()
    },
    generate_html2: function() {
        var e = "";
        this.each(function(t) {
            "uploads" === t.get("s_type") && (e += '<div class="col-xs-6 col-md-15 pix_img_div"><a href="#" class="pix_g_img"><img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-src="uploads/' + t.get("url") + '"></a><a href="#" class="pix_del_img_btn" data-name="' + t.get("url") + '">DELETE</a></div>')
        }), this.each(function(t) {
            "item" === t.get("s_type") && (e += '<div class="col-xs-6 col-md-15 pix_img_div"><a href="#" class="pix_g_img"><img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-src="' + t.get("url") + '"></a></div>')
        }), pix_system.images_html = e
    },
    get_images: function() {
        var e = this;
        $.ajax({
            url: "get_images",
            dataType: "json",
            success: function(t) {
                t.uploads && $.each(JSON.parse(t.uploads), function(t, i) {
                    e.add_image(i, "uploads")
                }), t.item && $.each(JSON.parse(t.item), function(t, i) {
                    e.add_image(i, "item")
                }), e.generate_html()
            },
            error: function(e, t, i) {
                alert(t)
            }
        })
    },
    add_images: function(e) {
        var t = this;
        e && e.uploads && $.each(JSON.parse(e.uploads), function(e, i) {
            t.add_image(i, "uploads")
        }), pix_values.pix_imgs && $.each(JSON.parse(pix_values.pix_imgs), function(e, i) {
            t.add_image(i, "item")
        }), t.generate_html2()
    },
    add_demo_images: function() {
        console.log("demo images loaded!");
        var e = this;
        pix_values.pix_imgs && $.each(JSON.parse(pix_values.pix_imgs), function(t, i) {
            e.add_image(i, "item")
        }), e.generate_html2()
    },
    clear: function() {
        return this.reset(), this
    },
    model: pix_system.models.image
});
var site_addr = "",
    pix_sections2 = [{
        id: "headers",
        name: "Headers",
        contents: [{
            url: site_addr + "get_section/s_3_1",
            thumb: site_addr + "core/images/thumbs/23.png"
        }, {
            url: site_addr + "get_section/s_4_1",
            thumb: site_addr + "core/images/thumbs/36.png"
        }, {
            url: site_addr + "get_section/s_17_1",
            thumb: site_addr + "core/images/thumbs/165.png"
        }, {
            url: site_addr + "get_section/s_18_1",
            thumb: site_addr + "core/images/thumbs/174.png"
        }, {
            url: site_addr + "get_section/s_30_1",
            thumb: site_addr + "core/images/thumbs/269.png"
        }, {
            url: site_addr + "get_section/s_12_1",
            thumb: site_addr + "core/images/thumbs/121.png"
        }, {
            url: site_addr + "get_section/s_7_1",
            thumb: site_addr + "core/images/thumbs/71-1.png"
        }, {
            url: site_addr + "get_section/s_7_1_2",
            thumb: site_addr + "core/images/thumbs/71.png"
        }, {
            url: site_addr + "get_section/s_7_1_3",
            thumb: site_addr + "core/images/thumbs/71-2.png"
        }, {
            url: site_addr + "get_section/s_7_1_4",
            thumb: site_addr + "core/images/thumbs/71-3.png"
        }, {
            url: site_addr + "get_section/s_8_1",
            thumb: site_addr + "core/images/thumbs/81.png"
        }, {
            url: site_addr + "get_section/s_10_1",
            thumb: site_addr + "core/images/thumbs/104.png"
        }, {
            url: site_addr + "get_section/s_11_1",
            thumb: site_addr + "core/images/thumbs/114.png"
        }, {
            url: site_addr + "get_section/s_11_1_2",
            thumb: site_addr + "core/images/thumbs/114-1.png"
        }, {
            url: site_addr + "get_section/s_11_1_3",
            thumb: site_addr + "core/images/thumbs/114-2.png"
        }, {
            url: site_addr + "get_section/s_11_1_4",
            thumb: site_addr + "core/images/thumbs/114-3.png"
        }, {
            url: site_addr + "get_section/s_15_1",
            thumb: site_addr + "core/images/thumbs/149.png"
        }, {
            url: site_addr + "get_section/s_22_1",
            thumb: site_addr + "core/images/thumbs/208.png"
        }, {
            url: site_addr + "get_section/s_1_1",
            thumb: site_addr + "core/images/thumbs/1.jpg"
        }, {
            url: site_addr + "get_section/s_2_1",
            thumb: site_addr + "core/images/thumbs/12.jpg"
        }, {
            url: site_addr + "get_section/s_29_1",
            thumb: site_addr + "core/images/thumbs/261.jpg"
        }, {
            url: site_addr + "get_section/s_6_1",
            thumb: site_addr + "core/images/thumbs/58.jpg"
        }, {
            url: site_addr + "get_section/s_25_1",
            thumb: site_addr + "core/images/thumbs/235.png"
        }, {
            url: site_addr + "get_section/s_27_1",
            thumb: site_addr + "core/images/thumbs/247.jpg"
        }, {
            url: site_addr + "get_section/s_14_1",
            thumb: site_addr + "core/images/thumbs/138.jpg"
        }, {
            url: site_addr + "get_section/s_19_1",
            thumb: site_addr + "core/images/thumbs/182.jpg"
        }]
    }, {
        id: "intros",
        name: "Intros",
        contents: [{
            url: site_addr + "get_section/s_3_20",
            thumb: site_addr + "core/images/thumbs/24.jpg"
        }, {
            url: site_addr + "get_section/s_7_55",
            thumb: site_addr + "core/images/thumbs/72.jpg"
        }, {
            url: site_addr + "get_section/s_30_2",
            thumb: site_addr + "core/images/thumbs/270.jpg"
        }, {
            url: site_addr + "get_section/s_8_60",
            thumb: site_addr + "core/images/thumbs/82.jpg"
        }, {
            url: site_addr + "get_section/s_9_68",
            thumb: site_addr + "core/images/thumbs/94.jpg"
        }, {
            url: site_addr + "get_section/s_5_2",
            thumb: site_addr + "core/images/thumbs/47.jpg",
            title: "s_5_2"
        }, {
            url: site_addr + "get_section/s_20_136",
            thumb: site_addr + "core/images/thumbs/195.png",
            title: "s_20_136"
        }, {
            url: site_addr + "get_section/s_10_76",
            thumb: site_addr + "core/images/thumbs/105.png"
        }, {
            url: site_addr + "get_section/s_4_30",
            thumb: site_addr + "core/images/thumbs/37.jpg"
        }, {
            url: site_addr + "get_section/s_12_87",
            thumb: site_addr + "core/images/thumbs/122.jpg"
        }, {
            url: site_addr + "get_section/s_15_106",
            thumb: site_addr + "core/images/thumbs/150.jpg",
            title: "s_15_106"
        }, {
            url: site_addr + "get_section/s_17_117",
            thumb: site_addr + "core/images/thumbs/166.jpg",
            title: "s_17_117"
        }, {
            url: site_addr + "get_section/s_18_122",
            thumb: site_addr + "core/images/thumbs/175.jpg",
            title: "s_18_122"
        }, {
            url: site_addr + "get_section/s_21_140",
            thumb: site_addr + "core/images/thumbs/202.jpg",
            title: "s_21_140"
        }]
    }, {
        id: "sliders",
        name: "Sliders",
        contents: [{
            url: site_addr + "get_section/s_28_1",
            thumb: site_addr + "core/images/thumbs/254.jpg"
        }, {
            url: site_addr + "get_section/s_slider_2",
            thumb: site_addr + "core/images/thumbs/280.jpg"
        }, {
            url: site_addr + "get_section/s_slider_3",
            thumb: site_addr + "core/images/thumbs/281.jpg"
        }, {
            url: site_addr + "get_section/s_slider_4",
            thumb: site_addr + "core/images/thumbs/282.jpg"
        }, {
            url: site_addr + "get_section/s_slider_5",
            thumb: site_addr + "core/images/thumbs/283.jpg"
        }, {
            url: site_addr + "get_section/s_slider_6",
            thumb: site_addr + "core/images/thumbs/284.jpg"
        }, {
            url: site_addr + "get_section/s_slider_7",
            thumb: site_addr + "core/images/thumbs/285.jpg"
        }]
    }, {
        id: "features",
        name: "Features",
        contents: [{
            url: site_addr + "get_section/s_2",
            thumb: site_addr + "core/images/thumbs/2.png"
        }, {
            url: site_addr + "get_section/s_28_2",
            thumb: site_addr + "core/images/thumbs/255.png"
        }, {
            url: site_addr + "get_section/s_30_3",
            thumb: site_addr + "core/images/thumbs/271.png"
        }, {
            url: site_addr + "get_section/s_6",
            thumb: site_addr + "core/images/thumbs/6.png"
        }, {
            url: site_addr + "get_section/s_2_13",
            thumb: site_addr + "core/images/thumbs/15.png"
        }, {
            url: site_addr + "get_section/s_2_17",
            thumb: site_addr + "core/images/thumbs/19.png"
        }, {
            url: site_addr + "get_section/s_3_21",
            thumb: site_addr + "core/images/thumbs/25.png"
        }, {
            url: site_addr + "get_section/s_4_31",
            thumb: site_addr + "core/images/thumbs/38.png"
        }, {
            url: site_addr + "get_section/s_5_37",
            thumb: site_addr + "core/images/thumbs/48.png"
        }, {
            url: site_addr + "get_section/s_5_38",
            thumb: site_addr + "core/images/thumbs/49.jpg",
            title: "s_5_38"
        }, {
            url: site_addr + "get_section/s_5_44",
            thumb: site_addr + "core/images/thumbs/55.jpg"
        }, {
            url: site_addr + "get_section/s_6_46",
            thumb: site_addr + "core/images/thumbs/59.jpg"
        }, {
            url: site_addr + "get_section/s_8_62",
            thumb: site_addr + "core/images/thumbs/84.png"
        }, {
            url: site_addr + "get_section/s_8_63",
            thumb: site_addr + "core/images/thumbs/85.jpg"
        }, {
            url: site_addr + "get_section/s_9_69",
            thumb: site_addr + "core/images/thumbs/95.png"
        }, {
            url: site_addr + "get_section/s_9_70",
            thumb: site_addr + "core/images/thumbs/96.jpg",
            title: "s_9_70"
        }, {
            url: site_addr + "get_section/s_9_73",
            thumb: site_addr + "core/images/thumbs/99.png",
            title: "s_9_73"
        }, {
            url: site_addr + "get_section/s_10_78",
            thumb: site_addr + "core/images/thumbs/107.png",
            title: "s_10_78"
        }, {
            url: site_addr + "get_section/s_11_83",
            thumb: site_addr + "core/images/thumbs/116.png",
            title: "s_11_83"
        }, {
            url: site_addr + "get_section/s_11_85",
            thumb: site_addr + "core/images/thumbs/118.png",
            title: "s_11_85"
        }, {
            url: site_addr + "get_section/s_12_88",
            thumb: site_addr + "core/images/thumbs/123.jpg",
            title: "s_12_88"
        }, {
            url: site_addr + "get_section/s_13_92",
            thumb: site_addr + "core/images/thumbs/131.png",
            title: "s_13_92"
        }, {
            url: site_addr + "get_section/s_13_95",
            thumb: site_addr + "core/images/thumbs/134.png",
            title: "s_13_95"
        }, {
            url: site_addr + "get_section/s_14_98",
            thumb: site_addr + "core/images/thumbs/139.png",
            title: "s_14_98"
        }, {
            url: site_addr + "get_section/s_14_100",
            thumb: site_addr + "core/images/thumbs/141.png",
            title: "s_14_100"
        }, {
            url: site_addr + "get_section/s_16_111",
            thumb: site_addr + "core/images/thumbs/157.png",
            title: "s_16_111"
        }, {
            url: site_addr + "get_section/s_17_118",
            thumb: site_addr + "core/images/thumbs/167.png",
            title: "s_17_118"
        }, {
            url: site_addr + "get_section/s_18_123",
            thumb: site_addr + "core/images/thumbs/176.jpg",
            title: "s_18_123"
        }, {
            url: site_addr + "get_section/s_19_127",
            thumb: site_addr + "core/images/thumbs/184.png",
            title: "s_19_127"
        }, {
            url: site_addr + "get_section/s_19_128",
            thumb: site_addr + "core/images/thumbs/185.png",
            title: "s_19_128"
        }, {
            url: site_addr + "get_section/s_20_138",
            thumb: site_addr + "core/images/thumbs/197.png",
            title: "s_20_138"
        }, {
            url: site_addr + "get_section/s_21_141",
            thumb: site_addr + "core/images/thumbs/203.png",
            title: "s_21_141"
        }, {
            url: site_addr + "get_section/s_23_151",
            thumb: site_addr + "core/images/thumbs/220.png",
            title: "s_23_151"
        }, {
            url: site_addr + "get_section/s_24_157",
            thumb: site_addr + "core/images/thumbs/229.png",
            title: "s_24_157"
        }, {
            url: site_addr + "get_section/s_24_158",
            thumb: site_addr + "core/images/thumbs/230.png",
            title: "s_24_158"
        }, {
            url: site_addr + "get_section/s_24_161",
            thumb: site_addr + "core/images/thumbs/233.png",
            title: "s_24_161"
        }, {
            url: site_addr + "get_section/s_26_3",
            thumb: site_addr + "core/images/thumbs/241.png"
        }, {
            url: site_addr + "get_section/s_27_2",
            thumb: site_addr + "core/images/thumbs/248.png"
        }, {
            url: site_addr + "get_section/s_27_3",
            thumb: site_addr + "core/images/thumbs/249.png"
        }]
    }, {
        id: "titles",
        name: "Titles",
        contents: [{
            url: site_addr + "get_section/s_3",
            thumb: site_addr + "core/images/thumbs/3.png"
        }, {
            url: site_addr + "get_section/s_2_12",
            thumb: site_addr + "core/images/thumbs/14.png"
        }, {
            url: site_addr + "get_section/s_3_24",
            thumb: site_addr + "core/images/thumbs/28.png"
        }, {
            url: site_addr + "get_section/s_6_47",
            thumb: site_addr + "core/images/thumbs/60.png"
        }, {
            url: site_addr + "get_section/s_8_61",
            thumb: site_addr + "core/images/thumbs/83.png"
        }, {
            url: site_addr + "get_section/s_10_77",
            thumb: site_addr + "core/images/thumbs/106.png"
        }, {
            url: site_addr + "get_section/s_12_90",
            thumb: site_addr + "core/images/thumbs/125.png",
            title: "s_12_90"
        }, {
            url: site_addr + "get_section/s_14_99",
            thumb: site_addr + "core/images/thumbs/140.png",
            title: "s_14_99"
        }, {
            url: site_addr + "get_section/s_16_115",
            thumb: site_addr + "core/images/thumbs/161.png",
            title: "s_16_115"
        }, {
            url: site_addr + "get_section/s_19_126",
            thumb: site_addr + "core/images/thumbs/183.png",
            title: "s_19_126"
        }, {
            url: site_addr + "get_section/s_20_137",
            thumb: site_addr + "core/images/thumbs/196.png",
            title: "s_20_137"
        }]
    }, {
        id: "content",
        name: "Content",
        contents: [{
            url: site_addr + "get_section/s_4",
            thumb: site_addr + "core/images/thumbs/4.png",
            title: "s_4"
        }, {
            url: site_addr + "get_section/s_5",
            thumb: site_addr + "core/images/thumbs/5.png"
        }, {
            url: site_addr + "get_section/s_2_14",
            thumb: site_addr + "core/images/thumbs/16.jpg"
        }, {
            url: site_addr + "get_section/s_2_15",
            thumb: site_addr + "core/images/thumbs/17.jpg"
        }, {
            url: site_addr + "get_section/s_3_22",
            thumb: site_addr + "core/images/thumbs/26.jpg"
        }, {
            url: site_addr + "get_section/s_3_23",
            thumb: site_addr + "core/images/thumbs/27.jpg"
        }, {
            url: site_addr + "get_section/s_30_5",
            thumb: site_addr + "core/images/thumbs/273.jpg"
        }, {
            url: site_addr + "get_section/s_30_4",
            thumb: site_addr + "core/images/thumbs/272.png"
        }, {
            url: site_addr + "get_section/s_28_3",
            thumb: site_addr + "core/images/thumbs/256.jpg"
        }, {
            url: site_addr + "get_section/s_29_2",
            thumb: site_addr + "core/images/thumbs/262.png"
        }, {
            url: site_addr + "get_section/s_29_3",
            thumb: site_addr + "core/images/thumbs/263.png"
        }, {
            url: site_addr + "get_section/s_3_27",
            thumb: site_addr + "core/images/thumbs/31.jpg"
        }, {
            url: site_addr + "get_section/s_3_29",
            thumb: site_addr + "core/images/thumbs/33.jpg"
        }, {
            url: site_addr + "get_section/s_4_32",
            thumb: site_addr + "core/images/thumbs/39.png"
        }, {
            url: site_addr + "get_section/s_4_33",
            thumb: site_addr + "core/images/thumbs/40.png"
        }, {
            url: site_addr + "get_section/s_25_2",
            thumb: site_addr + "core/images/thumbs/236.png"
        }, {
            url: site_addr + "get_section/s_25_3",
            thumb: site_addr + "core/images/thumbs/237.png"
        }, {
            url: site_addr + "get_section/s_25_4",
            thumb: site_addr + "core/images/thumbs/238.png"
        }, {
            url: site_addr + "get_section/s_27_4",
            thumb: site_addr + "core/images/thumbs/250.png"
        }, {
            url: site_addr + "get_section/s_26_4",
            thumb: site_addr + "core/images/thumbs/242.png"
        }, {
            url: site_addr + "get_section/s_26_5",
            thumb: site_addr + "core/images/thumbs/243.png"
        }, {
            url: site_addr + "get_section/s_5_39",
            thumb: site_addr + "core/images/thumbs/50.png"
        }, {
            url: site_addr + "get_section/s_5_45",
            thumb: site_addr + "core/images/thumbs/56.png"
        }, {
            url: site_addr + "get_section/s_6_48",
            thumb: site_addr + "core/images/thumbs/61.png"
        }, {
            url: site_addr + "get_section/s_6_50",
            thumb: site_addr + "core/images/thumbs/63.png"
        }, {
            url: site_addr + "get_section/s_6_51",
            thumb: site_addr + "core/images/thumbs/64.png"
        }, {
            url: site_addr + "get_section/s_6_52",
            thumb: site_addr + "core/images/thumbs/65.png"
        }, {
            url: site_addr + "get_section/s_7_57",
            thumb: site_addr + "core/images/thumbs/76.jpg"
        }, {
            url: site_addr + "get_section/s_7_59",
            thumb: site_addr + "core/images/thumbs/79.jpg"
        }, {
            url: site_addr + "get_section/s_9_72",
            thumb: site_addr + "core/images/thumbs/98.jpg",
            title: "s_9_72"
        }, {
            url: site_addr + "get_section/s_10_79",
            thumb: site_addr + "core/images/thumbs/108.png",
            title: "s_10_79"
        }, {
            url: site_addr + "get_section/s_10_80",
            thumb: site_addr + "core/images/thumbs/109.png",
            title: "s_10_80"
        }, {
            url: site_addr + "get_section/s_12_89",
            thumb: site_addr + "core/images/thumbs/124.png",
            title: "s_12_89"
        }, {
            url: site_addr + "get_section/s_13_93",
            thumb: site_addr + "core/images/thumbs/132.png",
            title: "s_13_93"
        }, {
            url: site_addr + "get_section/s_14_102",
            thumb: site_addr + "core/images/thumbs/144.jpg",
            title: "s_14_102"
        }, {
            url: site_addr + "get_section/s_14_8",
            thumb: site_addr + "core/images/thumbs/146.jpg",
            title: "s_14_8"
        }, {
            url: site_addr + "get_section/s_15_107",
            thumb: site_addr + "core/images/thumbs/151.png",
            title: "s_15_107"
        }, {
            url: site_addr + "get_section/s_15_108",
            thumb: site_addr + "core/images/thumbs/152.png",
            title: "s_15_108"
        }, {
            url: site_addr + "get_section/s_15_109",
            thumb: site_addr + "core/images/thumbs/153.png",
            title: "s_15_109"
        }, {
            url: site_addr + "get_section/s_16_112",
            thumb: site_addr + "core/images/thumbs/158.png",
            title: "s_16_112"
        }, {
            url: site_addr + "get_section/s_16_113",
            thumb: site_addr + "core/images/thumbs/159.png",
            title: "s_16_113"
        }, {
            url: site_addr + "get_section/s_16_114",
            thumb: site_addr + "core/images/thumbs/160.png",
            title: "s_16_114"
        }, {
            url: site_addr + "get_section/s_17_119",
            thumb: site_addr + "core/images/thumbs/168.png",
            title: "s_17_119"
        }, {
            url: site_addr + "get_section/s_17_120",
            thumb: site_addr + "core/images/thumbs/169.jpg",
            title: "s_17_120"
        }, {
            url: site_addr + "get_section/s_18_124",
            thumb: site_addr + "core/images/thumbs/177.png",
            title: "s_18_124"
        }, {
            url: site_addr + "get_section/s_18_125",
            thumb: site_addr + "core/images/thumbs/180.png",
            title: "s_18_125"
        }, {
            url: site_addr + "get_section/s_19_129",
            thumb: site_addr + "core/images/thumbs/186.png",
            title: "s_19_129"
        }, {
            url: site_addr + "get_section/s_19_130",
            thumb: site_addr + "core/images/thumbs/187.png",
            title: "s_19_130"
        }, {
            url: site_addr + "get_section/s_19_135",
            thumb: site_addr + "core/images/thumbs/192.jpg",
            title: "s_19_135"
        }, {
            url: site_addr + "get_section/s_21_142",
            thumb: site_addr + "core/images/thumbs/204.jpg",
            title: "s_21_142"
        }, {
            url: site_addr + "get_section/s_22_144",
            thumb: site_addr + "core/images/thumbs/210.png",
            title: "s_22_144"
        }, {
            url: site_addr + "get_section/s_22_145",
            thumb: site_addr + "core/images/thumbs/211.jpg",
            title: "s_22_145"
        }, {
            url: site_addr + "get_section/s_22_146",
            thumb: site_addr + "core/images/thumbs/212.png",
            title: "s_22_146"
        }, {
            url: site_addr + "get_section/s_22_147",
            thumb: site_addr + "core/images/thumbs/213.jpg",
            title: "s_22_147"
        }, {
            url: site_addr + "get_section/s_14_5",
            thumb: site_addr + "core/images/thumbs/143.jpg",
            title: "s_14_5"
        }, {
            url: site_addr + "get_section/s_17_6",
            thumb: site_addr + "core/images/thumbs/170.jpg",
            title: "s_17_6"
        }, {
            url: site_addr + "get_section/s_20_3",
            thumb: site_addr + "core/images/thumbs/198.png",
            title: "s_20_3"
        }, {
            url: site_addr + "get_section/s_22_7",
            thumb: site_addr + "core/images/thumbs/215.png",
            title: "s_22_7"
        }, {
            url: site_addr + "get_section/s_22_148",
            thumb: site_addr + "core/images/thumbs/214.png",
            title: "s_22_148"
        }, {
            url: site_addr + "get_section/s_23_152",
            thumb: site_addr + "core/images/thumbs/221.png",
            title: "s_23_152"
        }, {
            url: site_addr + "get_section/s_5_6",
            thumb: site_addr + "core/images/thumbs/51.jpg",
            title: "s_5_6"
        }, {
            url: site_addr + "get_section/s_6_10",
            thumb: site_addr + "core/images/thumbs/67.jpg",
            title: "s_6_10"
        }, {
            url: site_addr + "get_section/s_7_4",
            thumb: site_addr + "core/images/thumbs/74.jpg",
            title: "s_7_4"
        }, {
            url: site_addr + "get_section/s_7_5",
            thumb: site_addr + "core/images/thumbs/75.jpg",
            title: "s_7_5"
        }, {
            url: site_addr + "get_section/s_8_5",
            thumb: site_addr + "core/images/thumbs/86.jpg",
            title: "s_8_5"
        }, {
            url: site_addr + "get_section/s_12_6",
            thumb: site_addr + "core/images/thumbs/127.jpg",
            title: "s_12_6"
        }]
    }, {
        id: "videos",
        name: "Videos",
        contents: [{
            url: site_addr + "get_section/s_29_4",
            thumb: site_addr + "core/images/thumbs/264.png"
        }, {
            url: site_addr + "get_section/s_1_7",
            thumb: site_addr + "core/images/thumbs/7.png"
        }, {
            url: site_addr + "get_section/s_14_5",
            thumb: site_addr + "core/images/thumbs/143.jpg",
            title: "s_14_5"
        }, {
            url: site_addr + "get_section/s_20_3",
            thumb: site_addr + "core/images/thumbs/198.png",
            title: "s_20_3"
        }, {
            url: site_addr + "get_section/s_22_7",
            thumb: site_addr + "core/images/thumbs/215.png",
            title: "s_22_7"
        }]
    }, {
        id: "countdown",
        name: "Countdown",
        contents: [{
            url: site_addr + "get_section/count_down",
            thumb: site_addr + "core/images/thumbs/50.png"
        }, {
            url: site_addr + "get_section/s_26_2",
            thumb: site_addr + "core/images/thumbs/240.png"
        }]
    }, {
        id: "forms",
        name: "Forms",
        contents: [{
            url: site_addr + "get_section/s_6_53-2",
            thumb: site_addr + "core/images/thumbs/68.png"
        }, {
            url: site_addr + "get_section/s_3_11",
            thumb: site_addr + "core/images/thumbs/34.png"
        }, {
            url: site_addr + "get_section/s_28_6",
            thumb: site_addr + "core/images/thumbs/259.png"
        }, {
            url: site_addr + "get_section/s_30_6",
            thumb: site_addr + "core/images/thumbs/274.jpg"
        }, {
            url: site_addr + "get_section/s_4_8",
            thumb: site_addr + "core/images/thumbs/43.png"
        }, {
            url: site_addr + "get_section/s_7_7",
            thumb: site_addr + "core/images/thumbs/78.png"
        }, {
            url: site_addr + "get_section/s_8_9",
            thumb: site_addr + "core/images/thumbs/90.png"
        }, {
            url: site_addr + "get_section/s_9_9",
            thumb: site_addr + "core/images/thumbs/101.jpg"
        }, {
            url: site_addr + "get_section/s_11_2",
            thumb: site_addr + "core/images/thumbs/115.png"
        }, {
            url: site_addr + "get_section/s_13_2",
            thumb: site_addr + "core/images/thumbs/130.jpg"
        }, {
            url: site_addr + "get_section/s_15_7",
            thumb: site_addr + "core/images/thumbs/155.jpg"
        }, {
            url: site_addr + "get_section/s_16_8",
            thumb: site_addr + "core/images/thumbs/163.png"
        }, {
            url: site_addr + "get_section/s_17_7",
            thumb: site_addr + "core/images/thumbs/172.png"
        }, {
            url: site_addr + "get_section/s_18_6",
            thumb: site_addr + "core/images/thumbs/179.jpg"
        }, {
            url: site_addr + "get_section/s_19_11",
            thumb: site_addr + "core/images/thumbs/193.png"
        }, {
            url: site_addr + "get_section/s_20_5",
            thumb: site_addr + "core/images/thumbs/198-2.jpg"
        }, {
            url: site_addr + "get_section/s_21_7",
            thumb: site_addr + "core/images/thumbs/206.jpg"
        }, {
            url: site_addr + "get_section/s_22_2",
            thumb: site_addr + "core/images/thumbs/209.jpg"
        }, {
            url: site_addr + "get_section/s_24_2",
            thumb: site_addr + "core/images/thumbs/228.jpg"
        }, {
            url: site_addr + "get_section/s_26_6",
            thumb: site_addr + "core/images/thumbs/244.png"
        }, {
            url: site_addr + "get_section/s_27_6",
            thumb: site_addr + "core/images/thumbs/252.png"
        }]
    }, {
        id: "gallery",
        name: "Gallery",
        contents: [{
            url: site_addr + "get_section/s_28_4",
            thumb: site_addr + "core/images/thumbs/257.jpg"
        }, {
            url: site_addr + "get_section/s_4_33_2",
            thumb: site_addr + "core/images/thumbs/40.png"
        }]
    }, {
        id: "testimonials",
        name: "Testimonials",
        contents: [{
            url: site_addr + "get_section/s_14_103",
            thumb: site_addr + "core/images/thumbs/145.png",
            title: "s_14_103"
        }, {
            url: site_addr + "get_section/s_30_9",
            thumb: site_addr + "core/images/thumbs/277.jpg"
        }, {
            url: site_addr + "get_section/s_29_6",
            thumb: site_addr + "core/images/thumbs/266.png"
        }, {
            url: site_addr + "get_section/s_8",
            thumb: site_addr + "core/images/thumbs/8.png"
        }, {
            url: site_addr + "get_section/s_2_18",
            thumb: site_addr + "core/images/thumbs/20.png"
        }, {
            url: site_addr + "get_section/s_4_35",
            thumb: site_addr + "core/images/thumbs/42.png"
        }, {
            url: site_addr + "get_section/s_6_53",
            thumb: site_addr + "core/images/thumbs/66.png"
        }, {
            url: site_addr + "get_section/s_8_66",
            thumb: site_addr + "core/images/thumbs/89.png"
        }, {
            url: site_addr + "get_section/s_13_94",
            thumb: site_addr + "core/images/thumbs/133.png"
        }, {
            url: site_addr + "get_section/s_16_116",
            thumb: site_addr + "core/images/thumbs/162.png",
            title: "s_16_116"
        }, {
            url: site_addr + "get_section/s_19_134",
            thumb: site_addr + "core/images/thumbs/191.png",
            title: "s_19_134"
        }, {
            url: site_addr + "get_section/s_24_160",
            thumb: site_addr + "core/images/thumbs/232.png",
            title: "s_24_160"
        }, {
            url: site_addr + "get_section/s_27_5",
            thumb: site_addr + "core/images/thumbs/251.png"
        }]
    }, {
        id: "clients",
        name: "Clients",
        contents: [{
            url: site_addr + "get_section/s_30_7",
            thumb: site_addr + "core/images/thumbs/275.png"
        }, {
            url: site_addr + "get_section/s_25_5",
            thumb: site_addr + "core/images/thumbs/239.png"
        }, {
            url: site_addr + "get_section/s_9",
            thumb: site_addr + "core/images/thumbs/9.png"
        }, {
            url: site_addr + "get_section/s_2_16",
            thumb: site_addr + "core/images/thumbs/18.png"
        }, {
            url: site_addr + "get_section/s_3_28",
            thumb: site_addr + "core/images/thumbs/32.png"
        }, {
            url: site_addr + "get_section/s_5_40",
            thumb: site_addr + "core/images/thumbs/52.jpg"
        }, {
            url: site_addr + "get_section/s_8_64",
            thumb: site_addr + "core/images/thumbs/87.png"
        }, {
            url: site_addr + "get_section/s_9_71",
            thumb: site_addr + "core/images/thumbs/97.png"
        }, {
            url: site_addr + "get_section/s_9_74",
            thumb: site_addr + "core/images/thumbs/100.png"
        }, {
            url: site_addr + "get_section/s_12_91",
            thumb: site_addr + "core/images/thumbs/126.png",
            title: "s_12_91"
        }, {
            url: site_addr + "get_section/s_14_101",
            thumb: site_addr + "core/images/thumbs/142.jpg",
            title: "s_14_101"
        }]
    }, {
        id: "call_to_action",
        name: "Call to Action",
        contents: [{
            url: site_addr + "get_section/s_30_10",
            thumb: site_addr + "core/images/thumbs/278.png"
        }, {
            url: site_addr + "get_section/s_10",
            thumb: site_addr + "core/images/thumbs/10.png"
        }, {
            url: site_addr + "get_section/s_2_3",
            thumb: site_addr + "core/images/thumbs/13.png"
        }, {
            url: site_addr + "get_section/s_2_19",
            thumb: site_addr + "core/images/thumbs/21.png"
        }, {
            url: site_addr + "get_section/s_4_34",
            thumb: site_addr + "core/images/thumbs/41.png"
        }, {
            url: site_addr + "get_section/s_5_43",
            thumb: site_addr + "core/images/thumbs/54.jpg"
        }, {
            url: site_addr + "get_section/s_6_49",
            thumb: site_addr + "core/images/thumbs/62.png"
        }, {
            url: site_addr + "get_section/s_7_58",
            thumb: site_addr + "core/images/thumbs/77.png"
        }, {
            url: site_addr + "get_section/s_8_67",
            thumb: site_addr + "core/images/thumbs/91.png"
        }, {
            url: site_addr + "get_section/s_9_75",
            thumb: site_addr + "core/images/thumbs/102.png"
        }, {
            url: site_addr + "get_section/s_10_82",
            thumb: site_addr + "core/images/thumbs/112.png"
        }, {
            url: site_addr + "get_section/s_11_84",
            thumb: site_addr + "core/images/thumbs/117.jpg"
        }, {
            url: site_addr + "get_section/s_11_86",
            thumb: site_addr + "core/images/thumbs/119.png"
        }, {
            url: site_addr + "get_section/s_13_97",
            thumb: site_addr + "core/images/thumbs/136.png"
        }, {
            url: site_addr + "get_section/s_14_105",
            thumb: site_addr + "core/images/thumbs/147.png",
            title: "s_14_105"
        }, {
            url: site_addr + "get_section/s_17_121",
            thumb: site_addr + "core/images/thumbs/171.png",
            title: "s_17_121"
        }, {
            url: site_addr + "get_section/s_19_131",
            thumb: site_addr + "core/images/thumbs/188.jpg",
            title: "s_19_131"
        }, {
            url: site_addr + "get_section/s_21_143",
            thumb: site_addr + "core/images/thumbs/205.png",
            title: "s_21_143"
        }, {
            url: site_addr + "get_section/s_23_153",
            thumb: site_addr + "core/images/thumbs/222.png",
            title: "s_23_153"
        }, {
            url: site_addr + "get_section/s_23_156",
            thumb: site_addr + "core/images/thumbs/225.png",
            title: "s_23_156"
        }, {
            url: site_addr + "get_section/s_24_159",
            thumb: site_addr + "core/images/thumbs/231.png",
            title: "s_24_159"
        }, {
            url: site_addr + "get_section/s_26_7",
            thumb: site_addr + "core/images/thumbs/245.png"
        }]
    }, {
        id: "accordions",
        name: "Accordions",
        contents: [{
            url: site_addr + "get_section/s_28_5",
            thumb: site_addr + "core/images/thumbs/258.png"
        }, {
            url: site_addr + "get_section/s_29_7",
            thumb: site_addr + "core/images/thumbs/267.png"
        }]
    }, {
        id: "team",
        name: "Team",
        contents: [{
            url: site_addr + "get_section/s_5_41",
            thumb: site_addr + "core/images/thumbs/53.jpg"
        }, {
            url: site_addr + "get_section/s_13_96",
            thumb: site_addr + "core/images/thumbs/135.png"
        }, {
            url: site_addr + "get_section/s_22_149",
            thumb: site_addr + "core/images/thumbs/216.png",
            title: "s_22_149"
        }, {
            url: site_addr + "get_section/s_23_155",
            thumb: site_addr + "core/images/thumbs/224.png",
            title: "s_23_155"
        }]
    }, {
        id: "pricing",
        name: "Pricing Tables",
        contents: [{
            url: site_addr + "get_section/s_3_25",
            thumb: site_addr + "core/images/thumbs/29.png"
        }, {
            url: site_addr + "get_section/s_8_65",
            thumb: site_addr + "core/images/thumbs/88.png"
        }, {
            url: site_addr + "get_section/s_29_5",
            thumb: site_addr + "core/images/thumbs/265.png"
        }, {
            url: site_addr + "get_section/s_10_81",
            thumb: site_addr + "core/images/thumbs/110.png",
            title: "s_10_81"
        }, {
            url: site_addr + "get_section/s_2_17",
            thumb: site_addr + "core/images/thumbs/19.png"
        }, {
            url: site_addr + "get_section/s_15_110",
            thumb: site_addr + "core/images/thumbs/154.png",
            title: "s_15_110"
        }, {
            url: site_addr + "get_section/s_19_132",
            thumb: site_addr + "core/images/thumbs/189.png",
            title: "s_19_132"
        }, {
            url: site_addr + "get_section/s_23_154",
            thumb: site_addr + "core/images/thumbs/223.png",
            title: "s_23_154"
        }]
    }, {
        id: "social",
        name: "Social",
        contents: [{
            url: site_addr + "get_section/s_6_54",
            thumb: site_addr + "core/images/thumbs/69.png"
        }, {
            url: site_addr + "get_section/s_20_139",
            thumb: site_addr + "core/images/thumbs/199.png",
            title: "s_20_139"
        }]
    }, {
        id: "faq",
        name: "FAQ",
        contents: [{
            url: site_addr + "get_section/s_30_8",
            thumb: site_addr + "core/images/thumbs/276.png"
        }, {
            url: site_addr + "get_section/s_3_26",
            thumb: site_addr + "core/images/thumbs/30.jpg"
        }, {
            url: site_addr + "get_section/s_19_133",
            thumb: site_addr + "core/images/thumbs/190.png",
            title: "s_19_133"
        }, {
            url: site_addr + "get_section/s_22_150",
            thumb: site_addr + "core/images/thumbs/217.png",
            title: "s_22_150"
        }]
    }, {
        id: "footer",
        name: "Footer",
        contents: [{
            url: site_addr + "get_section/s_30_11",
            thumb: site_addr + "core/images/thumbs/279.png"
        }, {
            url: site_addr + "get_section/s_29_8",
            thumb: site_addr + "core/images/thumbs/268.png"
        }, {
            url: site_addr + "get_section/s_28_7",
            thumb: site_addr + "core/images/thumbs/260.png"
        }, {
            url: site_addr + "get_section/s_1_11",
            thumb: site_addr + "core/images/thumbs/11.png"
        }, {
            url: site_addr + "get_section/s_2_10",
            thumb: site_addr + "core/images/thumbs/22.png"
        }, {
            url: site_addr + "get_section/s_3_12",
            thumb: site_addr + "core/images/thumbs/35.png"
        }, {
            url: site_addr + "get_section/s_4_10",
            thumb: site_addr + "core/images/thumbs/45.png"
        }, {
            url: site_addr + "get_section/s_5_12",
            thumb: site_addr + "core/images/thumbs/57.png"
        }, {
            url: site_addr + "get_section/s_6_13",
            thumb: site_addr + "core/images/thumbs/70.png"
        }, {
            url: site_addr + "get_section/s_7_9",
            thumb: site_addr + "core/images/thumbs/80.png"
        }, {
            url: site_addr + "get_section/s_8_11",
            thumb: site_addr + "core/images/thumbs/92.png"
        }, {
            url: site_addr + "get_section/s_9_11",
            thumb: site_addr + "core/images/thumbs/103.png"
        }, {
            url: site_addr + "get_section/s_10_9",
            thumb: site_addr + "core/images/thumbs/113.png"
        }, {
            url: site_addr + "get_section/s_11_8",
            thumb: site_addr + "core/images/thumbs/120.png"
        }, {
            url: site_addr + "get_section/s_12_7",
            thumb: site_addr + "core/images/thumbs/128.png"
        }, {
            url: site_addr + "get_section/s_13_9",
            thumb: site_addr + "core/images/thumbs/137.png"
        }, {
            url: site_addr + "get_section/s_14_10",
            thumb: site_addr + "core/images/thumbs/148.png"
        }, {
            url: site_addr + "get_section/s_16_9",
            thumb: site_addr + "core/images/thumbs/164.png"
        }, {
            url: site_addr + "get_section/s_17_8",
            thumb: site_addr + "core/images/thumbs/173.png"
        }, {
            url: site_addr + "get_section/s_18_9",
            thumb: site_addr + "core/images/thumbs/181.png"
        }, {
            url: site_addr + "get_section/s_20_7",
            thumb: site_addr + "core/images/thumbs/200.png"
        }, {
            url: site_addr + "get_section/s_21_9",
            thumb: site_addr + "core/images/thumbs/207.png"
        }, {
            url: site_addr + "get_section/s_22_10",
            thumb: site_addr + "core/images/thumbs/218.png"
        }, {
            url: site_addr + "get_section/s_23_9",
            thumb: site_addr + "core/images/thumbs/226.png"
        }, {
            url: site_addr + "get_section/s_24_8",
            thumb: site_addr + "core/images/thumbs/234.png"
        }, {
            url: site_addr + "get_section/s_26_8",
            thumb: site_addr + "core/images/thumbs/246.png"
        }, {
            url: site_addr + "get_section/s_27_7",
            thumb: site_addr + "core/images/thumbs/253.jpg"
        }]
    }],
    pix_fonts = ["Arial", "tahoma", "Open Sans", "Roboto", "Montserrat", "Comic Sans MS", "Times New Roman"],
    pix_current_page = "page_0";
$(function() {
    "use strict";

    function e() {
        s.hasUndo() ? $(n).removeClass("disabled") : $(n).addClass("disabled"), s.hasRedo() ? $(o).removeClass("disabled") : $(o).addClass("disabled")
    }
    var t, i, n, o, a, s = new UndoManager,
        r = {};
    s.setLimit(29), n = document.getElementById("pix_undo"), o = document.getElementById("pix_redo"), s.setCallback(e), n.onclick = function() {
        s.hasUndo() && (s.undo(), e(), preview_btn_check(), $("#pixGrid").find(".pix_section").length < 1 ? $("#pix_start_panel").show() : $("#pix_start_panel").hide())
    }, o.onclick = function() {
        s.redo(), e(), preview_btn_check(), $("#pixGrid").find(".pix_section").length < 1 ? $("#pix_start_panel").show() : $("#pix_start_panel").hide()
    };
    var l = 1;
    t = function(e, t) {
        r[e] = t;
        if (Object.keys(r).length > 30) {
            var i = Object.keys(r)[0];
            delete r[i]
        }
    }, i = function(e) {
        delete r[e];
        var t = Object.keys(r),
            i = t[t.length - 1];
        r[i] && $("#pixGrid").html(r[i]), $("#right_sidebar").removeClass("opened"), $("#pixGrid").pixbuilder("restart")
    };
    a = function(e, n) {
        t(e, n), s.add({
            undo: function() {
                i(e), sidebar.close()
            },
            redo: function() {
                t(e, n), $("#pixGrid").html(n), $("#pixGrid").pixbuilder("init"), sidebar.close()
            }
        })
    };
    window.pixSave = function(e) {
        a(l, e), l++
    }, window.pixResetPages = function() {
        s.clear()
    }
});
var notyf = new Notyf({
    alertIcon: "error",
    confirmIcon: "check_circle"
});
$(window).load(function() {
        var e, t, i;
        $("#pix_loader").velocity("fadeOut", "slow"), $("body").removeClass("pix_loading"), notyf.confirm("Project loaded successfully!"), $("*").removeClass("pix-animate-in"), $("#pix_saveform222").submit(function(e) {
            e.preventDefault(), pix_fix_note()
        }), $("#pixGrid").bind("contextmenu", function(n) {
            e = $(n.target), i = $(n.target), t = null;
            var o = !1;
            if ($("#pix_context_menu .pix_menu_item").hide(), "IMG" == n.target.nodeName && ($("#pix_context_menu .pix_image_menu").show(), $("#pix_context_menu .pix_element_menu").show(), $(n.target).parents("a").length && ($("#pix_context_menu .pix_link_menu_parent").show(), t = $(n.target).parents("a")), o = !0), $(n.target).parents("a").length && "IMG" != n.target.nodeName && !$(n.target).hasClass("pix-i-option") && $(n.target).closest(".nav").length < 1 && (n.preventDefault(), $("#pix_context_menu .pix_link_menu_parent").show(), $("#pix_context_menu .pix_element_menu").show(), t = $(n.target).parents("a"), o = !0), "A" == n.target.nodeName && !$(n.target).hasClass("pix-a-option") && $(n.target).closest(".nav").length < 1 && (n.preventDefault(), $("#pix_context_menu .pix_link_menu").show(), $("#pix_context_menu .pix_element_menu").show(), o = !0), "I" != n.target.nodeName || $(n.target).hasClass("pix-i-option") || ($("#pix_context_menu .pix_icon_menu").show(), $("#pix_context_menu .pix_element_menu").show(), o = !0), "BUTTON" == n.target.nodeName && ($("#pix_context_menu .pix_button_menu").show(), o = !0), ("INPUT" == n.target.nodeName || ($(n.target).hasClass("form-group") || "LABEL" == n.target.nodeName) && $(n.target).find("input")) && ($(".pix_fields_modals").hide(), $("#pix_context_menu .pix_menu_item").hide(), "checkbox" == $(n.target).attr("type") || "checkbox" == $(n.target).find("input").attr("type") ? ($("#pix_check_field_settings").show(), $("#pix_context_menu .pix_field_check").show()) : "radio" == $(n.target).attr("type") || "radio" == $(n.target).find("input").attr("type") ? ($("#pix_radio_field_settings").show(), $("#pix_context_menu .pix_field_radio").show()) : ($("#pix_input_field_settings").show(), $("#pix_context_menu .pix_field_input").show()), $("#pix_context_menu .pix_form_menu").show(), o = !0), ("TEXTAREA" == n.target.nodeName || $(n.target).hasClass("form-group") && $(n.target).find("textarea") || $(n.target).hasClass("checkbox") || $(n.target).hasClass("radio")) && ($(".pix_fields_modals").hide(), $("#pix_input_field_settings").hide(), $("#pix_txt_field_settings").show(), $("#pix_context_menu .pix_menu_item").hide(), $("#pix_context_menu .pix_form_menu").show(), $("#pix_context_menu .pix_field_text").show(), o = !0), o) return n.preventDefault(), $("#pix_context_menu").finish().fadeIn(200).css({
                top: n.pageY + "px",
                left: n.pageX + "px"
            }), !1
        }), $("body").bind("contextmenu", function(e) {
            if (console.log(e.target), $(e.target).hasClass("pix_menu_item")) return e.preventDefault(), !1
        }), $(document).bind("mousedown", function(e) {
            !$(e.target).parents(".custom-menu").length > 0 && ($(e.target).hasClass("custom-menu") || $("#pix_img_menu, #pix_link_menu, #pix_context_menu").fadeOut(200))
        }), $(".custom-menu li").click(function() {
            switch ($(this).attr("data-action")) {
                case "pix_img_edit":
                    pix_system.ViewsFactory.gallery().edit_img(e);
                    break;
                case "pix_link_edit":
                    sidebar.init(e, "link");
                    break;
                case "pix_link_edit_parent":
                    sidebar.init(t, "link");
                    break;
                case "pix_icon_edit":
                    pix_icon_edit(e);
                    break;
                case "pix_element_delete":
                    pix_remove_element(t ? t : e);
                    break;
                case "pix_element_duplicate":
                    pix_duplicate_element(t ? t : e);
                    break;
                case "pix_field_settings_in":
                    pix_field_edit(e, "input");
                    break;
                case "pix_field_settings_txt":
                    pix_field_edit(e, "textarea");
                    break;
                case "pix_field_settings_check":
                    console.log(e);
                    i = e;
                    "input" != e.nodeName && (i = e.find("input")), pix_field_edit(i, "checkbox");
                    break;
                case "pix_field_settings_radio":
                    var i = e;
                    "input" != e.nodeName && (i = e.find("input")), pix_field_edit(i, "radio");
                    break;
                case "pix_field_delete":
                    e.closest(".form-group").slideUp(function() {
                        e.closest(".form-group").remove()
                    });
                    break;
                case "pix_field_pixbuilder":
                    pix_pixbuilder_element(e);
                    break;
                case "pix_button_edit":
                    sidebar.init(e, "button")
            }
            $(".custom-menu").hide(100)
        }), $("#pixGrid .dropdown-menu>li .pix_edit_text").on("click", function(e) {
            e.preventDefault()
        }), $("#imageEdit .pix_save_btn").on("click", function(t) {
            e.attr("src", $("#imageEdit .pix_img_url").val()), e.attr("alt", $("#imageEdit .pix_img_alt").val()), setTimeout(function() {
                fixed_header_update(), pix_fix_heights()
            }, 500), pixSave($("#pixGrid").html())
        }), $("#pix_img_save").on("click", function() {
            var e = "";
            $("#pix_gallery_div .thumbnail.clicked img").each(function() {
                e = $(this).attr("src"), e = decodeURI(e)
            }), "pix_section_img_field" == $("#pix_img_save").attr("data-return") && ($("#pix_section_img_field").val(e), $("#pix_section_img").attr("src", e)), "pix_element_img_field" == $("#pix_img_save").attr("data-return") && ($("#pix_element_img_field").val(e), $("#pix_element_img").attr("src", e))
        }), $(document).on("mouseenter", ".pix-content .pixfort-form .form-group, .pix-content .pixfort-form .checkbox, .pix-content .pixfort-form .radio", function(e) {
            $("<div/>", {
                class: "pix_handle",
                style: "display:none;",
                html: '<span class="pix_form_handle_options"><a class="form_handle_del_btn pix-a-option" href="#"><i class="material-icons pix-i-option">delete</i></a><a class="form_handle_edit_btn pix-a-option" href="#"><i class="material-icons pix-i-option">mode_edit</i></a><a class="form_handle_move_btn pix-a-option" href="#"><i class="material-icons pix-i-option">open_with</i></a></span>'
            }).appendTo($(this)).fadeIn(150)
        }), $(document).on("click", ".form_handle_edit_btn", function(e) {
            $(".pix_fields_modals").hide(), $(this).closest(".form-group").find("input").length > 0 && (console.log("input"), $("#pix_input_field_settings").show(), pix_field_edit($(this).closest(".form-group").find("input"), "input")), $(this).closest(".form-group").find("textarea").length > 0 && (console.log("textarea"), $("#pix_input_field_settings").show(), pix_field_edit($(this).closest(".form-group").find("textarea"), "textarea")), $(this).closest(".form-group").find("select").length > 0 && (console.log("select"), $("#pix_select_field_settings").show(), pix_field_edit($(this).closest(".form-group").find("select"), "select")), $(this).closest(".checkbox").length > 0 && (console.log("checkbox"), $("#pix_check_field_settings").show(), pix_field_edit($(this).closest(".checkbox").find("input"), "checkbox")), $(this).closest(".radio").length > 0 && (console.log("radio"), $("#pix_radio_field_settings").show(), pix_field_edit($(this).closest(".radio").find("input"), "radio"))
        }), $(document).on("click", ".form_handle_del_btn", function(e) {
            $(this).closest(".form-group").fadeOut(200, function() {
                $(this).closest(".form-group").remove()
            }), $(this).closest(".checkbox").fadeOut(200, function() {
                $(this).closest(".checkbox").remove()
            }), $(this).closest(".radio").fadeOut(200, function() {
                $(this).closest(".radio").remove()
            })
        }), $(document).on("mouseleave", ".pix-content .pixfort-form .form-group, .pix-content .pixfort-form .checkbox, .pix-content .pixfort-form .radio", function(e) {
            $(this).children(".pix_handle").remove()
        }), $("form.pixfort-form").sortable({
            handle: ".pix_handle"
        })
    }), $.fn.moveUp = function() {
        $.each(this, function() {
            $(this).after($(this).prev())
        })
    }, $.fn.moveDown = function() {
        $.each(this, function() {
            $(this).before($(this).next())
        })
    },
    function(e) {
        e.fn.pixbuilder = function(t) {
            var i = this,
                n = i.data("pixbuilder");
            if ("getHtml" == arguments[0]) {
                if (n) {
                    n.deinit();
                    var o = i.html();
                    return o = o.replace(/(^[ \t]*\n)/gm, ""), n.init(), o
                }
                return i.html()
            }
            return "deinit" == arguments[0] ? (n && n.deinit(), 0) : "init" == arguments[0] ? (n && n.init(), 0) : "restart" == arguments[0] ? (n && (n.init(), n.deinit(), n.init()), 0) : (i.each(function(i, n) {
                function o() {
                    h(!0), x.addClass("ge-editing"), x.find('.column, div[class*="col-"]').each(function() {
                            var t = e(this),
                                i = 2,
                                n = c(t);
                            n.length && (i = n[0].size);
                            var o = t.attr("class");
                            w.forEach(function(e) {
                                -1 == o.indexOf(e) && t.addClass(e + i)
                            }), t.addClass("column")
                        }), x.find(".column").each(function() {
                            var t = e(this),
                                i = e();
                            t.children().each(function() {
                                var t = e(this);
                                t.is(".pix_section, .ge-tools-drawer, .pix-content") ? m(i) : i = i.add(t)
                            }), m(i)
                        }), x.find(".pix_section:not(.no_builder)").each(function() {
                            var t = e(this),
                                i = e(this).find("> .container, > .container-fluid");
                            if (!i.find("> .ge-tools-drawer").length) {
                                var n = e('<div class="ge-tools-drawer" />').prependTo(i);
                                t.hasClass("pix_static") || r(n, "Move", "ge-move", '<i class="pix-i-option material-icons">open_with</i>'), t.hasClass("pix_nav_menu") ? r(n, "Menu", "pix-menu", '<i class="pix-i-option material-icons">settings</i>', function() {
                                    sidebar.init(t, "header")
                                }) : r(n, "Settings", "", '<i class="pix-i-option material-icons pix-i-option">settings</i>', function() {
                                    sidebar.init(t, "section")
                                }), t.hasClass("pix_static") || t.hasClass("pix_nav_menu") || (r(n, "Duplicate", "", '<i class="pix-i-option material-icons">filter_none</i>', function() {
                                    var i = e(this).closest(".pix_section");
                                    a();
                                    var n = e("<div>").append(i.clone()).html();
                                    t.after(n), o(), fix_elements_ids()
                                }), r(n, "Section Code", "", '<i class="pix-i-option material-icons">code</i>', function() {
                                    var t = e(this).closest(".pix_section");
                                    a();
                                    var i = e("<div>").append(t.clone()).html();
                                    ace.require("ace/ext/language_tools");
                                    var n = null;
                                    e.confirm({
                                        title: "Page Source Code",
                                        boxWidth: "75%",
                                        useBootstrap: !1,
                                        theme: "pix-code-modal",
                                        content: '<div id="pix_output_source_div"></div>',
                                        onContentReady: function() {
                                            (n = ace.edit("pix_output_source_div")).setTheme("ace/theme/monokai"), n.getSession().setMode("ace/mode/html"), n.setOptions({
                                                enableBasicAutocompletion: !0,
                                                enableSnippets: !0,
                                                showPrintMargin: !1
                                            }), n.setValue(i), e("#pix_output_source_div").height(.65 * e(window).height()).val(i).show(), n.gotoLine(1), this.$body.append('<div class="pix_modal_text_notice"><i class="material-icons">info_outline</i>Note: Changing HTML code may break page layout, custom modifications will not be supported!</div>'), this.$body.find(".pix_modal_text_notice").fadeIn()
                                        },
                                        buttons: {
                                            cancel: {
                                                text: "CANCEL",
                                                btnClass: "btn-cancel"
                                            },
                                            apply: {
                                                text: "APPLY",
                                                btnClass: "btn-blue",
                                                action: function() {
                                                    a();
                                                    var i = e("<div>").append(n.getValue()).html();
                                                    t.replaceWith(i), o(), e("form.pixfort-form").sortable({
                                                        handle: ".pix_handle",
                                                        start: pix_sortStart
                                                    })
                                                }
                                            }
                                        }
                                    }), o()
                                })), y.row_tools.forEach(function(e) {
                                    s(n, e.title || "", e.className || "", e.iconClass || "glyphicon-wrench", e.on)
                                }), t.hasClass("pix_static") || r(n, "Remove row", "", '<i class="material-icons pix-i-option">delete</i>', function() {
                                    i.parent().slideUp(function() {
                                        i.parent().remove(), p()
                                    }), setTimeout(function() {
                                        fixed_header_update(), pixSave(e("#pixGrid").pixbuilder("getHtml"))
                                    }, 500)
                                })
                            }
                        }), x.find(".column:not(.pix-inner-col)").each(function() {
                            var t = e(this);
                            if (!t.find("> .ge-tools-drawer").length && !t.find(".pix_no_controls").length) {
                                var i = e('<div class="ge-tools-drawer text-left" />').prependTo(t);
                                s(i, "Move", "ge-move", "pixicon-move"), r(i, "Make column narrower\n(hold shift for min)", "ge-decrease-col-width", '<i class="material-icons pix-i-option">remove_circle_outline</i>', function(i) {
                                    var n = y.valid_col_sizes,
                                        o = w[$],
                                        a = n.indexOf(l(t, o)),
                                        s = n[v(a - 1, 0, n.length - 1)];
                                    i.shiftKey && (s = n[0]), d(t, o, Math.max(s, 1)), pixSave(e("#pixGrid").pixbuilder("getHtml"))
                                }), r(i, "Make column wider\n(hold shift for max)", "ge-increase-col-width", '<i class="material-icons pix-i-option">add_circle_outline</i>', function(i) {
                                    var n = y.valid_col_sizes,
                                        o = w[$],
                                        a = v(n.indexOf(l(t, o)) + 1, 0, n.length - 1),
                                        s = n[a];
                                    i.shiftKey && (s = n[n.length - 1]), d(t, o, Math.min(s, k)), pixSave(e("#pixGrid").pixbuilder("getHtml"))
                                }), r(i, "Settings", "", '<i class="material-icons pix-i-option">settings</i>', function() {
                                    sidebar.init(t.find("> .pix-content"), "col")
                                }), r(i, "Duplicate", "", '<i class="material-icons">filter_none</i>', function() {
                                    var i = e(this).closest(".column");
                                    a();
                                    var n = e("<div>").append(i.clone()).html();
                                    t.after(n), o(), e("form.pixfort-form").sortable({
                                        handle: ".pix_handle",
                                        start: pix_sortStart
                                    }), pixSave(e("#pixGrid").pixbuilder("getHtml")), fix_elements_ids()
                                }), t.find(".pixfort-form").length > 0 && r(i, "Form Settings", "", '<i class="material-icons pix-i-option">mail_outline</i>', function() {
                                    sidebar.init(t.find(".pixfort-form"), "form")
                                }), t.find("iframe").length > 0 && r(i, "iframe Settings", "", '<i class="material-icons">public</i>', function() {
                                    sidebar.init(t.find("iframe"), "iframe")
                                }), t.find(".pix_accordion").length > 0 && r(i, "Test Settings", "", '<i class="material-icons">view_day</i>', function() {
                                    sidebar.init(t.find(".pix_accordion"), "accordion")
                                }), t.find(".carousel").length > 0 && r(i, "Test Settings", "", '<i class="material-icons">view_carousel</i>', function() {
                                    sidebar.init(t.find(".carousel"), "carousel")
                                }), t.find(".pix-countdown").length > 0 && r(i, "Count Down Settings", "", '<i class="material-icons">timer</i>', function() {
                                    sidebar.init(t.find(".pix-countdown"), "countdown")
                                }), y.col_tools.forEach(function(e) {
                                    s(i, e.title || "", e.className || "", e.iconClass || "glyphicon-wrench", e.on)
                                }), r(i, "Remove col", "", '<i class="material-icons pix-i-option">delete</i>', function() {
                                    t.animate({
                                        opacity: "hide",
                                        width: "hide",
                                        height: "hide"
                                    }, 400, function() {
                                        t.remove(), u()
                                    }), pixSave(e("#pixGrid").pixbuilder("getHtml"))
                                })
                            }
                        }),
                        function() {
                            x.find(".pix_section:not(.no_builder, .popup_section)").sortable({
                                items: "> div > .row > div",
                                connectWith: ".ge-canvas .pix_section",
                                cursor: "move",
                                dropOnEmpty: !0,
                                handle: "> .ge-tools-drawer",
                                start: function(e, t) {
                                    t.placeholder.css({
                                        height: t.item.outerHeight()
                                    }), t.placeholder.html('<div class="inner_placeholder"><i class="material-icons">add_circle_outline</i></div>')
                                },
                                helper: "clone",
                                scroll: !0,
                                receive: function(t, i) {
                                    0 == e(t.target).find("div .row").children().length && e(i.item).appendTo(e(t.target).find(".container .row")), u()
                                },
                                change: function(t, i) {
                                    0 == e(t.target).find("div .row div").children().length && (e(i.item).appendTo(e(t.target).find("div .row")), e(i.placeholder).appendTo(e(t.target).find("div .row")))
                                },
                                update: function(e, t) {},
                                stop: function(t, i) {
                                    pixSave(e("#pixGrid").pixbuilder("getHtml"))
                                }
                            }), x.find(".pix_section.popup_section").sortable({
                                items: "> div > .row > div",
                                connectWith: ".ge-canvas .pix_section.popup_section",
                                cursor: "move",
                                dropOnEmpty: !0,
                                handle: "> .ge-tools-drawer",
                                start: function(e, t) {
                                    t.placeholder.css({
                                        height: t.item.outerHeight()
                                    })
                                },
                                helper: "clone",
                                scroll: !0,
                                receive: function(t, i) {
                                    0 == e(t.target).find("div .row").children().length && e(i.item).appendTo(e(t.target).find(".container .row"))
                                },
                                change: function(t, i) {
                                    0 == e(t.target).find("div .row div").children().length && (e(i.item).appendTo(e(t.target).find("div .row")), e(i.placeholder).appendTo(e(t.target).find("div .row")))
                                },
                                update: function(e, t) {},
                                stop: function(t, i) {
                                    pixSave(e("#pixGrid").pixbuilder("getHtml"))
                                }
                            });
                            var t = "sortable",
                                i = "",
                                n = "";
                            x.add(x.find(".column")).sortable({
                                items: "> .pix_section:not(.pix_static), > .pix-content",
                                connectsWith: ".ge-canvas, .ge-canvas .column",
                                handle: "> .container > .ge-tools-drawer .ge-move, > .container-fluid > .ge-tools-drawer .ge-move",
                                helper: function() {
                                    return e('<div class="pix_section_drag"><i class="material-icons">add_circle_outline</i></div>')
                                },
                                cursor: "move",
                                cursorAt: {
                                    top: 0,
                                    left: 0
                                },
                                greedy: !0,
                                scrollSensitivity: 100,
                                scroll: !0,
                                start: function(t, i) {
                                    e(".pix_static", this).each(function() {
                                        var t = e(this),
                                            i = t.index();
                                        t.data("pos", i)
                                    }), e("#pix_start_panel").hide(), i.placeholder.velocity({
                                        height: 200
                                    }, {
                                        duration: 400
                                    }), i.helper.fadeIn(500)
                                },
                                change: function() {
                                    $sortable = e(this), $statics = e(".pix_static", this).detach(), $helper = e('<div class="pix_section firas99"></div>').prependTo(this), $statics.each(function() {
                                        var t = e(this),
                                            i = t.data("pos");
                                        t.insertAfter(e(".pix_section", $sortable).eq(i))
                                    }), $helper.remove()
                                },
                                stop: function(e, t) {
                                    fixed_header_update()
                                },
                                receive: function(a, s) {
                                    "draggable" === t && (console.log(n), "headers" != n || e("#pixGrid").find(".pix_nav_menu").length < 1 ? (s.helper.removeClass("pix_placeholder"), s.helper.addClass("pix_placeholder_dropped"), s.helper.css({
                                        width: "auto",
                                        height: "auto"
                                    }), e.ajax({
                                        url: "demo/" + i,
                                        success: function(i) {
                                            if (i && "logout" != i) {
                                                var a = /<body.*?>([\s\S]*)<\/body>/.exec(i)[1],
                                                    r = e("<div>").append(e(a));
                                                fix_sections_ids();
                                                var l = 1;
                                                n && "undefined" != n ? n += "_" : n = "";
                                                for (var c = "section_" + n + l; e("#pixGrid #" + c).length > 0;) c = "section_" + n + ++l;
                                                r.find(".pix_section").attr("id", c).addClass("firas_test_in"), a = "\n" + r.html(), s.helper.replaceWith(a), e(".firas_test_in").slideDown(), setTimeout(function() {
                                                    fixed_header_update(), pix_fix_heights()
                                                }, 500), e(".firas_test_in").removeClass("firas_test_in"), t = "sortable", o(), e("form.pixfort-form").sortable({
                                                    handle: ".pix_handle",
                                                    start: pix_sortStart
                                                }), fixed_header_update(), preview_btn_check(), fix_elements_ids()
                                            } else s.helper.replaceWith(""), "logout" == i && login_popup()
                                        },
                                        error: function(t) {
                                            e.alert("Connection Error!"), s.helper.replaceWith(""), console.log(t)
                                        }
                                    })) : (s.helper.replaceWith(""), notyf.alert("You can't add more than one header to each page!")))
                                }
                            }).droppable({
                                scroll: !0,
                                greedy: !0,
                                drop: function(e, t) {
                                    console.log("DROP")
                                }
                            }), e("#sections_panel .pix_items div").draggable({
                                helper: function(t) {
                                    return i = e(this).attr("data-content"), section_image = e(this).attr("data-image"), n = e(this).attr("data-id"), e('<div class="pix_section pix_section_dragged" style="z-index: 999999999999; box-shadow: 0 0 9px 9px rgba(0,0,0,0) !important;display:inline-block;"><div style=" box-shadow: 0 0 5px 1px rgba(0,0,0,0.08),0 0px 10px 0 rgba(0,0,0,0.08) !important;display:inline-block;border-radius:3px;overflow:hidden;"><img style="width:220px !important;height:auto;z-index: 99999999999;" src="' + section_image + '"></div></div>')
                                },
                                revert: "invalid",
                                appendTo: "body",
                                start: function() {
                                    t = "draggable", console.log("start 22"), e("#pix_start_panel").hide()
                                },
                                connectToSortable: ".ge-canvas"
                            })
                        }(), g($), e("#pixGrid form").attr("novalidate", "true"), e("form.pixfort-form").sortable({
                            handle: ".pix_handle",
                            start: pix_sortStart
                        }), app.count_init()
                }

                function a() {
                    x.removeClass("ge-editing");
                    x.find(".pix-content .pix_edit_text").each(function() {
                        var t = e(this);
                        _("summernote").deinit(y, t)
                    });
                    x.find(".ge-tools-drawer").remove(), x.add(x.find(".column")).add(x.find(".pix_section")).sortable("destroy"), e("#pixGrid form").removeAttr("novalidate"), h()
                }

                function s(t, i, n, o, a) {
                    var s = e('<a title="' + i + '" class="pix-a-option ' + n + ' pix-a-option"><i class="glyphicon pix-i-option ' + o + '"></i></a>').appendTo(t);
                    "function" == typeof a && s.on("click", a), "object" == typeof a && e.each(a, function(e, t) {
                        s.on(e, t)
                    })
                }

                function r(t, i, n, o, a) {
                    var s = e('<a title="' + i + '" class="pix-a-option ' + n + ' pix-a-option">' + o + "</a>").appendTo(t);
                    "function" == typeof a && s.on("click", a), "object" == typeof a && e.each(a, function(e, t) {
                        s.on(e, t)
                    })
                }

                function l(e, t) {
                    for (var i = c(e), n = 0; n < i.length; n++)
                        if (i[n].colClass == t) return i[n].size;
                    return i.length ? i[0].size : null
                }

                function c(e) {
                    var t = [];
                    return w.forEach(function(i) {
                        var n = new RegExp(i + "(\\d+)", "i");
                        n.test(e.attr("class")) && t.push({
                            colClass: i,
                            size: parseInt(n.exec(e.attr("class"))[1])
                        })
                    }), t
                }

                function d(e, t, i) {
                    var n = new RegExp("(" + t + "(\\d+))", "i").exec(e.attr("class"));
                    n && parseInt(n[2]) !== i ? e.switchClass(n[1], t + i, 50) : e.addClass(t + i)
                }

                function u() {
                    e(".pix_section > .container > .row").each(function(t, i) {
                        e(i).children().size() < 1 && e(i).closest(".pix_section").slideUp(function() {
                            e(i).closest(".pix_section").remove()
                        })
                    })
                }

                function p() {
                    e("#pixGrid").find(".pix_section").length < 1 ? e("#pix_start_panel").show() : e("#pix_start_panel").hide()
                }

                function h(t) {
                    y.custom_filter.length && e.each(y.custom_filter, function(e, i) {
                        "string" == typeof i && (i = window[i]), i(x, t)
                    })
                }

                function m(t) {
                    if (t.length) {
                        var i = f().insertAfter(t.last());
                        t.appendTo(i), t = e()
                    }
                }

                function f() {
                    return e("<div/>").addClass("pix-content")
                }

                function g(e) {
                    $ = e;
                    ["ge-layout-desktop", "ge-layout-tablet", "ge-layout-phone"].forEach(function(t, i) {
                        x.toggleClass(t, i == e)
                    })
                }

                function _(t) {
                    return e.fn.pixbuilder.RTEs[t]
                }

                function v(e, t, i) {
                    return Math.min(i, Math.max(t, e))
                }
                if ((n = e(n)).children().length && !n.find("div.row").length) {
                    var b = n.children();
                    e('<div class="row"><div class="col-md-12"/></div>').appendTo(n).find(".col-md-12").append(b)
                }
                var x, y = e.extend({
                        col_tools: [],
                        row_tools: [],
                        custom_filter: "",
                        content_types: ["summernote"],
                        valid_col_sizes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
                    }, t),
                    w = ["col-md-", "col-sm-", "col-xs-"],
                    $ = 0,
                    k = 12;
                ! function() {
                    x = n.addClass("ge-canvas"), p();
                    var t = 2;
                    pix_sections2.forEach(function(i) {
                        "sliders" == i.id || "sliders" == i.id || "countdown" == i.id || "gallery" == i.id || "accordions" == i.id ? e("ul.pix_sec_cat_ul").append('<li><a href="#" class="pix_sec_cat" data-left-sidebar="section_panel_' + t + '" data-panel-parent="add_section">' + i.name + ' <span class="label label-success" style="position:relative;top:-2px;left:5px;background:#f44336;padding: .2em .6em .2em;">NEW</span></a></li>') : e("ul.pix_sec_cat_ul").append('<li><a href="#" class="pix_sec_cat" data-left-sidebar="section_panel_' + t + '" data-panel-parent="add_section">' + i.name + "</a></li>"), e("#pix_sub_sec_area").append('<div class="sub_left_panel" id="section_panel_' + t + '"><div class="left_inner pix_sections_inner"><div class="panel_title"><a href="#" class="return_button" data-left-sidebar="sections_panel" data-panel-parent="add_section"><i class="pixicon-arrow-left"></i></a>' + i.name + '<a class="close" aria-label="Close"><i class="pixicon-close"></i></a></div><div class="items_div scrollbar-macosx"><div class="pix_items"></div></div></div></div>');
                        var n = "section_panel_" + t;
                        e("#section_panel_1 .pix_items").append('<span class="pix_section_name">' + i.name + "</span>"), i.contents.forEach(function(t) {
                            var o = "";
                            t.title && (o = t.title), e("#section_panel_1 .pix_items").append('<div class="pix_item" data-id="' + i.id + '" data-content="' + t.url + '" data-image="' + t.thumb + '"><img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-src="' + t.thumb + '" title="' + o + '"></div>'), e("#" + n + " .pix_items, .section_panel_1 .pix_items").append('<div class="pix_item" data-id="' + i.id + '" data-content="' + t.url + '" data-image="' + t.thumb + '"><img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-src="' + t.thumb + '" title="' + o + '"></div>')
                        }), t++
                    });
                    var i = e("#pix_mode");
                    i.on("click", "a", function(t) {
                        t.preventDefault(), e("#pix_mode a").removeClass("active"), e(this).addClass("active");
                        var n = e(this);
                        g(n.index());
                        var o = i.find("button");
                        return o.find("span").remove(), o.append(n.find("span").clone()), 0
                    });
                    var o = e("#pix_preview");
                    o.on("mouseenter", function() {
                        o.hasClass("active") || x.removeClass("ge-editing")
                    }).on("click", function() {
                        o.toggleClass("active").trigger("mouseleave")
                    }).on("mouseleave", function() {
                        o.hasClass("active") ? x.removeClass("ge-editing") : x.addClass("ge-editing")
                    }), x.on("click", ".pix_edit_text", function(t) {
                        t.preventDefault(), x.find(".pix-content .pix_edit_text").not(this).each(function() {
                            var t = e(this);
                            _("summernote").deinit(y, t)
                        });
                        var i = _("summernote");
                        return i && (document.createRange && document.getSelection().removeAllRanges(), i.init(y, e(this))), !1
                    }), fixed_header_update()
                }(), o(), n.data("pixbuilder", {
                    init: o,
                    deinit: a
                })
            }), i)
        }, e.fn.pixbuilder.RTEs = {}
    }(jQuery),
    function() {
        var e = function(e) {
                var t = $.summernote.ui;
                return t.buttonGroup([t.button({
                    contents: '<i class="material-icons">font_download</i> <i class="fa fa-caret-down" aria-hidden="true"></i>',
                    tooltip: "Font Family",
                    data: {
                        toggle: "dropdown"
                    }
                }), t.dropdown({
                    items: pix_fonts,
                    callback: function(t) {
                        $(t).find("li a").on("click", function(t) {
                            return t.preventDefault(), e.invoke("editor.fontName", $(this).html()), !1
                        })
                    }
                })]).render()
            },
            t = function(e) {
                var t = $.summernote.ui;
                return t.buttonGroup([t.button({
                    contents: 'Color <i class="material-icons">format_color_text</i>',
                    tooltip: "Text Color",
                    data: {
                        toggle: "dropdown"
                    }
                }), t.dropdown({
                    items: pix_fonts,
                    callback: function(t) {
                        $(t).find("li a").on("click", function(t) {
                            return t.preventDefault(), e.invoke("editor.fontName", $(this).html()), !1
                        })
                    }
                })]).render()
            };
        $.fn.pixbuilder.RTEs.summernote = {
            init: function(i, n) {
                jQuery().summernote || console.error("Summernote not available! Make sure you loaded the Summernote js file.");
                var o = this;
                n.each(function() {
                    var n = $(this);
                    if (!n.hasClass("active")) {
                        n.html() == o.initialContent && n.html(""), n.addClass("active");
                        var a = $.extend(i.summernote && i.summernote.config ? i.summernote.config : {}, {
                            tabsize: 2,
                            airMode: !0,
                            toolbar: [
                                ["eventButton2", ["eventColor"]],
                                ["eventButton", ["event"]]
                            ],
                            buttons: {
                                eventColor: t,
                                event: e
                            },
                            fontNames: ["Arial", "Open Sans", "Shrikhand", "Comic Sans MS", "Courier New"],
                            fontNamesIgnoreCheck: ["Shrikhand"],
                            popover: {
                                air: [
                                    ["colorbutton", ["eventColor2", "bold", "underline", "italic", "clear", "fontsize", "event", "ul", "ol", "paragraph", "link"]]
                                ]
                            },
                            callbacks: {
                                onInit: function() {
                                    try {
                                        i.summernote.config.callbacks.onInit.call(this)
                                    } catch (e) {}
                                    n.summernote("focus"), $(".colorpicker-component").colorpicker({
                                        customClass: "custom-size",
                                        format: "hex",
                                        sliders: {
                                            saturation: {
                                                maxLeft: 250,
                                                maxTop: 250
                                            },
                                            hue: {
                                                maxTop: 250
                                            },
                                            alpha: {
                                                maxTop: 250
                                            }
                                        }
                                    });
                                    var e = n.css("color");
                                    $(".pix_color_air_btn").attr("data-value", e), $(".pix_color_air_input").val(e), $("#cp7").colorpicker({
                                        customClass: "colorpicker-2x",
                                        color: e,
                                        format: "hex",
                                        container: !0,
                                        inline: !0,
                                        sliders: {
                                            saturation: {
                                                maxLeft: 200,
                                                maxTop: 200
                                            },
                                            hue: {
                                                maxTop: 200
                                            },
                                            alpha: {
                                                maxTop: 200
                                            }
                                        },
                                        colorSelectors: {
                                            default: "#777777",
                                            primary: "#337ab7",
                                            success: "#5cb85c",
                                            info: "#5bc0de",
                                            warning: "#f0ad4e",
                                            danger: "#d9534f"
                                        }
                                    }).on("changeColor", function(e) {
                                        $(".pix_color_air_input").val(e.color.toHex()), $(".pix_color_air_btn").attr("data-value", e.color.toHex())
                                    });
                                    var t = !1;
                                    $(".note-color2 .dropdown-menu input").click(function(e) {
                                        e.stopPropagation()
                                    }), $("input.pix_color_air_input").focusin(function() {
                                        t || (n.summernote("saveRange"), t = !0)
                                    }), $("input.pix_color_air_input").focusout(function() {
                                        n.summernote("restoreRange"), $(".pix_color_air_btn").attr("data-value", $(".pix_color_air_input").val()), t = !1
                                    })
                                },
                                onBlur: function(e) {
                                    "" == (str = e.target.innerText.replace(/\s/g, "")) && (e.target.innerText = "Text"), pix_fix_note()
                                }
                            }
                        });
                        n.summernote(a)
                    }
                })
            },
            deinit: function(e, t) {
                t.filter(".active").each(function() {
                    var e = $(this);
                    e.summernote("destroy"), e.removeClass("active").removeAttr("id").removeAttr("style").removeAttr("spellcheck")
                }), pix_fix_note()
            },
            initialContent: "<p>Lorem ipsum dolores</p>"
        }
    }(), window.onload = init_imgs, $(function() {
        $("#pixGrid").pixbuilder();
        app.init()
    }), $(window).load(function() {
        pix_fix_heights();
        var e = $(window).height() - $("#pixbuilder_header").height() - $("#pix_footer_div").height() - 32;
        $("#pixGrid, #firas, #F1").css("min-height", e), $(document).on("click", "#pixGrid .pix_section a", function(e) {
            return e.stopPropagation(), e.preventDefault(), !1
        }), $(document).on("submit", "#pixGrid form", function(e) {
            return e.stopPropagation(), e.preventDefault(), !1
        }), $(document).on({
            mouseenter: function() {
                var e = $(this).children(".dropdown-menu");
                e.is(":visible") && e.parent().toggleClass("open")
            },
            mouseleave: function() {
                var e = $(this).children(".dropdown-menu");
                e.is(":visible") && e.parent().toggleClass("open")
            }
        }, ".pix-header-nav .dropdown, .pix-header-nav .btn-group"), $("body").on("paste", ".note-editable", function(e) {
            e.preventDefault();
            var t = "";
            console.log(e.originalEvent.clipboardData), e.clipboardData || e.originalEvent.clipboardData ? t = (e.originalEvent || e).clipboardData.getData("text/plain") : window.clipboardData && (t = window.clipboardData.getData("Text")), document.queryCommandSupported("insertText") ? document.execCommand("insertText", !1, t) : document.execCommand("paste", !1, t)
        }), $(".scrollbar-macosx").scrollbar(), $(".selectpicker").selectpicker({
            dropupAuto: !1,
            size: 10
        }), $("body").on("changed.bs.select change", ".selectpicker.pix_linked_value, input.pix_linked_value", function(e, t, i, n) {
            var o = $(e.currentTarget).attr("data-linked");
            if (o && "" != o) {
                var a = $(e.currentTarget).val();
                $('[data-linked="' + o + '"]').each(function() {
                    $(this).hasClass("selectpicker") ? $(this).selectpicker("val", a) : $(this).val(a)
                })
            }
        }), $(".selectpicker .dropdown-menu").on("click", function(e) {
            e.stopPropagation()
        }), $('[data-tooltip="tooltip"]').tooltip(), $(".pix_icons_div .pix_icon_elm").on("click", function(e) {
            return e.preventDefault(), $(this).parent().parent().parent().find(".pix_icon_clicked").removeClass("pix_icon_clicked"), $(this).addClass("pix_icon_clicked"), 0
        }), $("#pix_popups").on("click", function(e) {
            e.preventDefault(), $(".pix_popups_div .dropdown-menu").html("");
            var t = !1;
            return $(".pix_popup").each(function() {
                $(this).attr("id") && (t = !0, $(".pix_popups_div .dropdown-menu").append('<li><a href="#" data-toggle="pix-modal" data-target="#' + $(this).attr("id") + '" class="pix_pop_name">' + $(this).attr("data-name") + '</a><div class="pix_popup_tools">\t<a href="#" class="pix_pop_opt popup_settings" data-target="#' + $(this).attr("id") + '" title="Settings"><i class="material-icons">settings</i></a>\t\t<a href="#" class="pix_pop_opt popup_delete" data-target="#' + $(this).attr("id") + '"><i class="material-icons">delete</i></a></div></li>'))
            }), t ? $(".pix_popups_div .dropdown-menu").append('<li><a class="pix_add_popup" data-toggle="pix-modal" data-target="#pix_add_popups" href="#">Add New Popup</a></li>') : $("#pix_add_popups").modal("show"), $(".pix_popups_div li .pix_pop_name").on("click", function(e) {
                return e.preventDefault(), $("html, body").animate({
                    scrollTop: 0
                }, "slow"), $(".modal").modal("hide"), 0
            }), $(".pix_popups_div li .popup_settings").on("click", function(e) {
                return e.preventDefault(), sidebar.init($($(this).attr("data-target")).find(".modal-content"), "popup"), 0
            }), $(".pix_popups_div li .popup_delete").on("click", function(e) {
                if (e.preventDefault(), $(this).attr("data-target") && $($(this).attr("data-target"))) {
                    var t = $($(this).attr("data-target"));
                    $.confirm({
                        title: "DELETE POPUP",
                        useBootstrap: !1,
                        theme: "pix-danger-modal",
                        backgroundDismiss: !0,
                        content: "<strong>Are you sure you want to delete the popup?</strong>",
                        buttons: {
                            cancel: {
                                text: "CANCEL",
                                btnClass: "btn-cancel"
                            },
                            delete_popup: {
                                text: "DELETE",
                                btnClass: "btn-red",
                                keys: ["enter", "shift"],
                                action: function() {
                                    t.remove()
                                }
                            }
                        }
                    })
                } else alert("Error: Popup not found!");
                return 0
            }), 0
        }), $("#imageGallery2").on("hidden.bs.modal", function() {
            $("#imageGallery2 .modal-dialog").css("top", "auto")
        }), $("#imageGallery2").on("shown.bs.modal", function() {
            var e = $(window).scrollTop();
            e -= 20, $("#imageGallery2 .modal-dialog").css("top", e + "px")
        }), $("#left_sidebar .left_buttons .left_button, .return_button, .pix_start_btn").on("click", function(e) {
            e.preventDefault();
            var t = $(this).attr("data-left-sidebar"),
                i = $(this).attr("data-left-active-btn");
            if (t) {
                if ($(".left_panel").removeClass("opened"), $("#" + t).addClass("opened"), $(".left_buttons a").removeClass("active"), $(this).addClass("active"), i && $("#" + i).addClass("active"), $(this).attr("data-panel-parent") && "" != $(this).attr("data-panel-parent")) {
                    var n = $(this).attr("data-panel-parent");
                    $("#" + n).addClass("active")
                }
                $(".panel_main").show(), $(".sub_left_panel").removeClass("opened"), $(".panel_main").removeClass("closed")
            }
            return 0
        }), $(".pix_btn_group .pix_btn").on("click", function(e) {
            return e.preventDefault(), $(this).parent().find(".active").removeClass("active"), $(this).addClass("active"), 0
        }), $(".pix_click, .pix_settings_tab li a, .pix_btn_click, .pix_md_btn").click(function(e) {
            if ($(".left_button").not(this).find(".ripple").remove(), $(".pix_settings_tab li a").not(this).find(".ripple").remove(), $(".pix_btn_click, .pix_md_btn").find(".ripple").remove(), 0 == $(this).find(".ripple").length) {
                var t = $(this).offset().left,
                    i = $(this).offset().top,
                    n = $(this).width(),
                    o = $(this).height();
                $(this).prepend("<span class='ripple'></span>"), n >= o ? o = n : n = o;
                var a = e.pageX - t - n / 2,
                    s = e.pageY - i - o / 2;
                $(".ripple").css({
                    width: n,
                    height: o,
                    top: s + "px",
                    left: a + "px"
                }).addClass("rippleEffect")
            }
        }), $(".pix_sec_cat").on("click", function(e) {
            e.preventDefault();
            var t = $(this).attr("data-left-sidebar");
            return t && ($(".panel_main").addClass("closed"), $("#" + t).addClass("opened")), 0
        }), $("#pixbuilder_control").on("mouseleave", function() {
            $(".left_panel").removeClass("opened"), $(".left_buttons a").removeClass("active")
        }), $(".left_panel .close").on("click", function(e) {
            return e.preventDefault(), $(".left_panel").removeClass("opened"), $(".left_buttons a").removeClass("active"), $(".left_button").find(".ripple").remove(), 0
        }), $("a").not("#pix_logo, .pixbuilder_out_link").on("click", function(e) {
            return e.preventDefault(), 0
        }), $("#pix_icon_filter").keyup(function() {
            var e = $(this).val(),
                t = !1;
            $("#pix_no_icons_found").hide(), $("#pix_icon_list_ul li").each(function() {
                $(this).find(".pix_icon_elm").attr("data-pix").search(new RegExp(e, "i")) < 0 ? $(this).fadeOut("slow") : ($(this).show(), t = !0)
            }), t || $("#pix_no_icons_found").show()
        }), $(".colorpicker-component").colorpicker({
            customClass: "custom-size",
            format: "hex",
            sliders: {
                saturation: {
                    maxLeft: 210,
                    maxTop: 210
                },
                hue: {
                    maxTop: 210
                },
                alpha: {
                    maxTop: 210
                }
            }
        }), $(".colorpicker-component-2").colorpicker({
            customClass: "custom-size",
            format: "rgba",
            sliders: {
                saturation: {
                    maxLeft: 250,
                    maxTop: 250
                },
                hue: {
                    maxTop: 220
                },
                alpha: {
                    maxTop: 250
                }
            }
        }), $(".modal").each(function(e) {
            $(this).on("show.bs.modal", function(e) {
                var t = $(this).attr("data-easein");
                "shake" == t ? $(".modal-dialog").velocity("callout." + t) : "pulse" == t ? $(".modal-dialog").velocity("callout." + t) : "tada" == t ? $(".modal-dialog").velocity("callout." + t) : "flash" == t ? $(".modal-dialog").velocity("callout." + t) : "bounce" == t ? $(".modal-dialog").velocity("callout." + t) : "swing" == t ? $(".modal-dialog").velocity("callout." + t) : $(".modal-dialog").velocity("transition." + t)
            })
        })
    });
var Sidebar = function() {
    function e(e) {
        return isNaN(e) ? e : e + "px"
    }
    var t = {
            el: null,
            main: $("#pix-right-sidebar"),
            header_h: $("#pixbuilder_header").height(),
            footer_h: $("#pix_footer_div").height(),
            side_header_h: $("#pix-right-sidebar-header").height(),
            title: "Settings",
            sidebar_contents: null,
            init: function(e, t) {
                if (!e) return this;
                var n = this;
                this.close(), this.title = "Settings";
                var a = this.get_values(e, t);
                console.log(a);
                var s = "";
                if ("section" == t && ($("#pix-sidebar-tabs").html('<li class="active"><a href="#" data-target="#pix_style1" data-toggle="tab">Style</a></li><li><a href="#" data-target="#pix_animation2" data-toggle="tab">Animation</a></li><li><a href="#" data-target="#pix_advanced2" data-toggle="tab">Advanced</a></li>'), s += '<div class="tab-content"><div class="tab-pane active" id="pix_style1">', s += o.pix_img(a.bg_img), s += o.pix_color("Background color", a.bg_color), s += o.pix_radio(a.bg_size, a.bg_attachment, 1), s += "</div>", s += '<div class="tab-pane" id="pix_animation2">', s += o.pix_select("Choose an Animation below", pix_values.animation, a.animation_type, "animation", "type"), s += o.pix_text_input("Animation delay", "In Milliseconds", "animation", "delay", a.animation_delay), s += o.pix_select("Animation duration", pix_values.animation_dur, a.animation_dur, "animation", "duration"), s += "</div>", s += '<div class="tab-pane" id="pix_advanced2">', s += o.pix_color_overlay("Background overlay", a.bg_over), s += o.pix_padding(a.padding_top, a.padding_bottom), s += "</div>", s += "</div>", s += o.pix_save()), "popup" == t && ($("#pix-sidebar-tabs").html('<li class="active"><a href="#" data-target="#pix_style1" data-toggle="tab">Style</a></li><li><a href="#" data-target="#pix_animation2" data-toggle="tab">Animation</a></li><li><a href="#" data-target="#pix_advanced2" data-toggle="tab">Advanced</a></li>'), s += '<div class="tab-content"><div class="tab-pane active" id="pix_style1">', s += o.pix_img(a.bg_img), s += o.pix_color("Background color", a.bg_color), s += o.pix_radio(a.bg_size, a.bg_attachment, 1), s += "</div>", s += '<div class="tab-pane" id="pix_animation2">', s += o.pix_select("Choose an Animation below", pix_values.animation, a.animation_type, "animation", "type"), s += o.pix_text_input("Animation delay", "In Milliseconds", "animation", "delay", a.animation_delay), s += o.pix_select("Animation duration", pix_values.animation_dur, a.animation_dur, "animation", "duration"), s += "</div>", s += '<div class="tab-pane" id="pix_advanced2">', s += o.pix_color_overlay("Background overlay", a.bg_over), s += o.pix_padding(a.padding_top, a.padding_bottom), s += o.pix_select("Automatic Popup", pix_values.auto_popup, a.popup_wait, "popup", "open"), s += "</div>", s += "</div>", s += o.pix_save()), "col" == t && ($("#pix-sidebar-tabs").html('<li class="active"><a href="#" data-target="#pix_style1" data-toggle="tab">Style</a></li><li><a href="#" data-target="#pix_animation2" data-toggle="tab">Animation</a></li><li><a href="#" data-target="#pix_advanced2" data-toggle="tab">Advanced</a></li>'), s += '<div class="tab-content"><div class="tab-pane active" id="pix_style1">', s += o.pix_img(a.bg_img), s += o.pix_color("Background color", a.bg_color), s += o.pix_radio(a.size, a.attachment, 1), s += o.pix_align(a.text_align), s += "</div>", s += '<div class="tab-pane" id="pix_animation2">', s += o.pix_select("Choose an Animation below", pix_values.animation, a.animation_type, "animation", "type"), s += o.pix_text_input("Animation delay", "In Milliseconds", "animation", "delay", a.animation_delay), s += o.pix_select("Animation duration", pix_values.animation_dur, a.animation_dur, "animation", "duration"), s += "</div>", s += '<div class="tab-pane" id="pix_advanced2">', s += o.pix_color_overlay("Background overlay", a.bg_over), s += o.pix_padding_margin(a), s += "</div>", s += "</div>", s += o.pix_save()), "header" == t && ($("#pix-sidebar-tabs").html('<li class="active"><a href="#" data-target="#pix_menu" data-toggle="tab">Menu</a></li><li class=""><a href="#" data-target="#pix_style1" data-toggle="tab">Style</a></li><li><a href="#" data-target="#pix_advanced" data-toggle="tab">Advanced</a></li>'), s += '<div class="tab-content"><div class="tab-pane active" id="pix_menu">', s += o.pix_menu(a.pages, a.sections, a.popups), s += "</div>", s += '<div class="tab-pane" id="pix_style1">', s += o.pix_header_style(a.hstyle, a.hformat), s += "</div>", s += '<div class="tab-pane" id="pix_advanced">', s += o.pix_img(a.bg_img), s += o.pix_color("Background color", a.bg_color), s += o.pix_color("Links Color", a.menu_color, "menu"), s += o.pix_color("Scroll Background", a.scroll_bg, "scroll"), s += o.pix_radio(a.size, a.attachment, 1), s += o.pix_color_overlay("Background overlay", a.bg_over), s += o.pix_padding(a.padding_top, a.padding_bottom), s += o.pix_select("Choose an Animation below", pix_values.animation, a.animation_type, "animation", "type"), s += o.pix_text_input("Animation delay", "In Milliseconds", "animation", "delay", a.animation_delay), s += o.pix_select("Animation duration", pix_values.animation_dur, a.animation_dur, "animation", "duration"), s += "</div>", s += "</div>", s += o.pix_save()), "link" == t && ($("#pix-sidebar-tabs").html('<li class="active"><a href="#" data-target="#pix_link_tab" data-toggle="tab">Link</a></li><li><a href="#" data-target="#pix_style_tab" data-toggle="tab">Style</a></li><li><a href="#" data-target="#pix_animation_tab" data-toggle="tab">Animation</a></li>'), s += '<div class="tab-content"><div class="tab-pane active" id="pix_link_tab">', s += o.pix_link(a.href, a.pages, a.href, a.sections, a.href, a.popups, a.popup_id), s += "</div>", s += '<div class="tab-pane" id="pix_style_tab">', s += o.pix_color("Button color", a.bg_color), s += o.pix_btn_style(a.btn_size, a.btn_style, a.btn_corners), s += "</div>", s += '<div class="tab-pane" id="pix_animation_tab">', s += o.pix_select("Choose an Animation below", pix_values.animation, a.animation_type, "animation", "type"), s += o.pix_text_input("Animation delay", "In Milliseconds", "animation", "delay", a.animation_delay), s += o.pix_select("Animation duration", pix_values.animation_dur, a.animation_dur, "animation", "duration"), s += "</div>", s += "</div>", s += o.pix_save()), "button" == t && ($("#pix-sidebar-tabs").html('<li class="active"><a href="#" data-target="#pix_style_tab" data-toggle="tab">Style</a></li><li><a href="#" data-target="#pix_animation_tab" data-toggle="tab">Animation</a></li>'), s += '<div class="tab-content">', s += '<div class="tab-pane active" id="pix_style_tab">', s += o.pix_color("Button color", a.bg_color), s += o.pix_btn_style(a.btn_size, a.btn_style, a.btn_corners), s += "</div>", s += '<div class="tab-pane" id="pix_animation_tab">', s += o.pix_select("Choose an Animation below", pix_values.animation, a.animation_type, "animation", "type"), s += o.pix_text_input("Animation delay", "In Milliseconds", "animation", "delay", a.animation_delay), s += o.pix_select("Animation duration", pix_values.animation_dur, a.animation_dur, "animation", "duration"), s += "</div>", s += "</div>", s += o.pix_save()), "form" == t && (this.title = "Form Settings", $("#pix-sidebar-tabs").html('<li class="active"><a href="#" data-target="#pix_link_tab" data-toggle="tab">Fields</a></li><li><a href="#" data-target="#pix_style_tab" data-toggle="tab">Settings</a></li>'), s += '<div class="tab-content"><div class="tab-pane active" id="pix_link_tab">', s += o.pix_form(), s += "</div>", s += '<div class="tab-pane" id="pix_style_tab">', s += o.pix_select("Confirmation Popup", a.popups, a.confirm_popup, "form", "popup_id"), s += o.pix_text_input("Redirect URL", "http://site.com", "form", "redirect_url", a.form_redirect), s += o.pix_select("Form type", pix_values.form_type, a.form_type, "form", "form_type"), s += o.pix_text_input("List ID", "List ID", "form", "list_id", a.form_list_id), s += "</div>", s += "</div>", s += o.pix_save()), "iframe" == t && (this.title = "iframe", $("#pix-sidebar-tabs").html(""), s += '<div class="tab-content "><div class="tab-pane active" id="pix_link_tab">', s += o.pix_textarea_input("Embed code", "", "iframe", "code", a.iframe), s += "</div>", s += o.pix_save()), "countdown" == t && (this.title = "Count Down Settings", $("#pix-sidebar-tabs").html(""), s += '<div class="tab-content "><div class="tab-pane active" id="pix_link_tab">', s += o.pix_date_input("Count down end time", "", "countdown", "time", a.countdown_time), s += o.pix_color("Numbers color", a.count_color, "count"), s += o.pix_select("Show Popup when count ends", a.popups, a.countdown_popup, "countdown", "popup_id"), s += o.pix_text_input("Redirect URL", "http://site.com", "countdown", "redirect_url", a.countdown_redirect), s += "</div>", s += o.pix_save()), "accordion" == t) {
                    this.title = "Accordion Builder";
                    var r = new PixAccordion;
                    r.bindHTML(e), $("#pix-sidebar-tabs").html(""), s += '<div class="tab-content "><div class="tab-pane active" id="pix_link_tab">', s += r.getOptions(), s += "</div>", s += o.pix_save()
                }
                if ("carousel" == t) {
                    this.title = "Slider Builder";
                    var l = new PixCarousel(e.attr("id"));
                    l.bindHTML(e), $("#pix-sidebar-tabs").html(""), s += '<div class="tab-content "><div class="tab-pane active" id="pix_link_tab">', s += l.getOptions(), s += "</div>", s += o.pix_save()
                }
                if ($("#pix-sidebar-content").html('<div class="scrollbar-macosx">' + s + "</div>"), "accordion" == t && new window.PixAccordionView({
                        el: $(".right_accordion"),
                        comp: r
                    }), "carousel" == t && new window.PixCarouselView({
                        el: $(".right_accordion"),
                        comp: l
                    }), $("#pix_save_btn22").unbind("click").bind("click", function(o) {
                        return o.preventDefault(), i.save_settings(e), "accordion" == t && (e.html(r.getHTML(e.attr("id"))), n.close()), "carousel" == t && (e.replaceWith(l.getHTML()), n.close()), app.count_init(), fix_elements_ids(), 0
                    }), $("#pix-right-sidebar .pix_side_cancel").on("click", function(e) {
                        return e.preventDefault(), n.close(), 0
                    }), this.resize(), $(".selectpicker") && $(".selectpicker").selectpicker({
                        size: 10
                    }), $(".selectpicker .dropdown-menu").on("click", function(e) {
                        e.stopPropagation()
                    }), $('[data-tooltip="tooltip"]').tooltip(), $(".colorpicker-component").colorpicker({
                        customClass: "custom-size",
                        format: "hex",
                        sliders: {
                            saturation: {
                                maxLeft: 210,
                                maxTop: 210
                            },
                            hue: {
                                maxTop: 210
                            },
                            alpha: {
                                maxTop: 210
                            }
                        }
                    }), $(".colorpicker-component-2").colorpicker({
                        customClass: "custom-size",
                        format: "rgba",
                        sliders: {
                            saturation: {
                                maxLeft: 250,
                                maxTop: 250
                            },
                            hue: {
                                maxTop: 220
                            },
                            alpha: {
                                maxTop: 250
                            }
                        }
                    }), $(".pix_btn_group .pix_btn").on("click", function(e) {
                        return e.preventDefault(), $(this).parent().find(".active").removeClass("active"), $(this).addClass("active"), 0
                    }), $(".pix_radio_group .pix_btn").on("click", function(e) {
                        return e.preventDefault(), $(this).parent().find(".active").removeClass("active"), $(this).addClass("active"), 0
                    }), e.find("#pix-navbar-collapse").length) {
                    var c = json_nav_options(mapDOM2(e.find("#pix-navbar-collapse").html(), !1));
                    $("#nestable").html(c), $("#nestable").nestable({
                        maxDepth: 2
                    }).on("change", function() {}), $("#nestable .button-delete").on("click", deleteFromMenu), $("#nestable .button-edit").on("click", prepareEdit), $("#pix_navbar_add_btn").on("click", function(e) {
                        e.preventDefault(), $("#pix-right-sidebar #pix_menu_add_slide").addClass("opened"), $("#pix-right-sidebar .pix_right_main").addClass("slided"), $("#addInputName, #addInputSlug").val("")
                    }), $("#pix-right-sidebar .pix_close_slide").on("click", function(e) {
                        e.preventDefault(), $("#pix-right-sidebar .pix_right_slide").removeClass("opened"), $("#pix-right-sidebar .pix_right_main").removeClass("slided")
                    })
                }
                if ("header" == t && ($("#pix-menu-add").submit(function(t) {
                        t.preventDefault(), addToMenu(e)
                    }), $("#menu-editor").submit(function(e) {
                        e.preventDefault()
                    }), $(".button-edit").on("click", prepareEdit), $("#editButton").on("click", editMenuItem)), "form" == t) {
                    var d = "field_sortable",
                        u = "";
                    $(e).sortable({
                        handle: ".pix_handle",
                        start: pix_sortStart
                    }).droppable({
                        scroll: !0,
                        drop: function(e, t) {
                            "field_draggable" === d && (window.setTimeout(function() {
                                t.draggable.replaceWith(u)
                            }, 10), d = "field_sortable")
                        }
                    }), $("#pix_form_builder_elms div").draggable({
                        helper: function(e) {
                            return u = $(this).attr("data-content"), $('<div class="pix_field_drag_place"><span>DROP ELEMENT</span></div>')
                        },
                        revert: "invalid",
                        appendTo: "body",
                        start: function() {
                            d = "field_draggable"
                        },
                        connectToSortable: e
                    })
                }
                return $("#accordion").sortable({
                    handle: ".panel-heading",
                    axis: "y"
                }), this.open(), this
            },
            get_values: function(e, t) {
                var i = {
                    bg_img: e.css("background-image"),
                    bg_over: "",
                    bg_color: e.css("background-color"),
                    bg_size: e.css("background-size"),
                    bg_attachment: e.css("background-attachment"),
                    bg_repeat: e.css("background-repeat"),
                    text_align: e.css("text-align"),
                    padding_top: e.css("padding-top").replace("px", ""),
                    padding_bottom: e.css("padding-bottom").replace("px", ""),
                    padding_left: e.css("padding-left").replace("px", ""),
                    padding_right: e.css("padding-right").replace("px", ""),
                    margin_top: e.css("margin-top").replace("px", ""),
                    margin_bottom: e.css("margin-bottom").replace("px", ""),
                    margin_left: e.css("margin-left").replace("px", ""),
                    margin_right: e.css("margin-right").replace("px", "")
                };
                if (e.hasClass("highlight-section") && (e.find(".highlight-right").length > 0 ? i.bg_img = e.find(".highlight-right").css("background-image") : i.bg_img = e.find(".highlight-left").css("background-image")), ("transparent" == i.bg_color || "none" == i.bg_color || "" == i.bg_color && "rgba(0, 0, 0, 0)" == i.bg_color) && (i.bg_color = transparent), i.bg_color.startsWith("rgba") && ("rgba(0, 0, 0, 0)" != i.bg_color && (i.bg_over = i.bg_color), i.bg_color = ""), -1 !== i.bg_size.indexOf(",")) {
                    n = i.bg_size.split(",");
                    i.bg_size = n[0]
                }
                if (-1 !== i.bg_attachment.indexOf(",")) {
                    var n = i.bg_attachment.split(",");
                    i.bg_attachment = n[0]
                }
                var o = "",
                    a = "";
                if (i.bg_img && "none" != i.bg_img) {
                    var s = i.bg_img,
                        r = /url\(\"([\s\S]*)\"\)/;
                    r.exec(i.bg_img) ? (o = r.exec(i.bg_img)[1], i.bg_img = o) : i.bg_img = "";
                    try {
                        var l = /linear-gradient\(([\s\S\,]*)\)/;
                        if (l.exec(s) && (a = l.exec(s)[1])) {
                            a = /rgba\(([\s\d\.\,]*)\)/.exec(a)[1], i.bg_over = "rgba(" + a + ")"
                        }
                    } catch (e) {
                        console.log(e)
                    }
                } else i.bg_img = "";
                o.match(/builder$/) && (i.bg_img = ""), e.find(".pix-header-nav") && (e.hasClass("pix-over-header") && (i.hstyle = "pix-over-header"), e.hasClass("pix-fixed-top") && (i.hformat = "pix-fixed-top"), e.hasClass("pix_scroll_header") && (i.hformat = "pix_scroll_header"));
                var c = [];
                if (e.attr("class") && (c = e.attr("class").split(" ")), -1 !== $.inArray("btn", c)) {
                    var d = !1; - 1 !== $.inArray("btn-sm", c) && (i.btn_size = "btn-sm", d = !0), -1 !== $.inArray("btn-xl", c) && (i.btn_size = "btn-xl", d = !0), -1 !== $.inArray("btn-lg", c) && (i.btn_size = "btn-lg", d = !0), -1 !== $.inArray("btn-md", c) && (i.btn_size = "btn-md", d = !0), d || (i.btn_size = "btn"), -1 !== $.inArray("btn-flat", c) ? i.btn_style = "btn-flat" : -1 !== $.inArray("pix-line", c) ? i.btn_style = "pix-line" : i.btn_style = "normal", -1 !== $.inArray("btn-round-lg", c) ? i.btn_corners = "btn-round-lg" : -1 !== $.inArray("btn-round-xl", c) ? i.btn_corners = "btn-round-lg" : i.btn_corners = "normal"
                }
                if ("header" == t && (i.menu_color = "#333", i.menu_color = e.find(".nav > li > a").css("color"), i.scroll_bg = e.attr("data-scroll-bg")), "link" == t || "header" == t || "form" == t || "countdown" == t) {
                    if ($("#pix_pages_list>li:not(.pix_deleted)").length > 0) {
                        var u = {};
                        u[""] = "None", $("#pix_pages_list>li:not(.pix_deleted)").each(function(e, t) {
                            $(t).find(".pix_seo_btn").attr("data-seo-title") ? u[$(t).attr("pix-item") + ".html"] = $(t).find(".pix_seo_btn").attr("data-seo-title") : u[$(t).attr("pix-item") + ".html"] = $(t).attr("pix-item")
                        }), i.pages = u
                    }
                    var p = {};
                    p[""] = "None", $(".pix_popup").each(function() {
                        $(this).attr("data-name") ? p["#" + $(this).attr("id")] = $(this).attr("data-name") : p["#" + $(this).attr("id")] = $(this).attr("id")
                    }), i.popups = p, fix_sections_ids();
                    var h = {};
                    h[""] = "None", $("#pixGrid .pix_section").each(function() {
                        var e = $(this).attr("id");
                        void 0 !== e && !1 !== e && (h["#" + e] = e)
                    }), i.sections = h, i.href = e.attr("href"), "modal" == e.attr("data-toggle") && (i.popup_id = e.attr("data-target")), e.hasClass("pixfort-form") && e.attr("pix-popup") && (i.confirm_popup = e.attr("pix-popup")), e.attr("pix-form-type") ? i.form_type = e.attr("pix-form-type") : i.form_type = "", e.attr("pix-list-id") ? i.form_list_id = e.attr("pix-list-id") : i.form_list_id = "", e.attr("pix-redirect") ? i.form_redirect = e.attr("pix-redirect") : i.form_redirect = "", e.attr("data-popup") && (i.countdown_popup = e.attr("data-popup")), e.attr("data-redirect") && (i.countdown_redirect = e.attr("data-redirect"))
                }
                if (e.attr("data-anim-delay") && (i.animation_delay = e.attr("data-anim-delay")), c) {
                    var m = "slow-mo super-slow-mo ultra-slow-mo hyper-slow-mo";
                    m = m.split(" "), c.forEach(function(e) {
                        -1 !== $.inArray(e, effects) && (i.animation_type = e), -1 !== $.inArray(e, m) && (i.animation_dur = e)
                    })
                }
                return "iframe" == t && (i.iframe = $("<div>").append(e.clone()).html()), "countdown" == t && (i.countdown_time = e.attr("data-date"), i.count_color = e.find(".pix-count-num").css("color")), e.hasClass("modal-content") && e.closest(".pix_popup").length > 0 && (e.closest(".pix_popup").attr("data-wait") ? i.popup_wait = e.closest(".pix_popup").attr("data-wait") : i.popup_wait = ""), console.log(i), i
            },
            deinit: function() {
                return $("#pix-sidebars-tabs").html(""), $("#pix-sidebar-content").html(""), !1
            },
            open: function() {
                this.resize(), this.setTitle(this.title), this.main.addClass("opened")
            },
            close: function() {
                this.main.removeClass("opened"), this.deinit()
            },
            resize: function() {
                var e = $(window).height() - this.header_h - this.footer_h - 30;
                this.main.css("height", e), this.side_header_h = $("#pix-right-sidebar-header").height();
                var t = e - this.side_header_h;
                $("#pix-sidebar-content").css("height", t + "px"), $("#pix-sidebar-content .scroll-content").css("min-height", t + "px")
            },
            setTitle: function(e) {
                $("#pix-right-sidebar-title").html(e)
            }
        },
        i = {
            save_settings: function(t) {
                var i = {};
                if ($(".pix_sidebar_value").each(function(e, t) {
                        if ($(t).attr("pix-type") && $(t).attr("pix-dest")) {
                            var n = $(t).attr("pix-type");
                            switch (n) {
                                case "radio":
                                    if ($(t).hasClass("active") || $(t).is(":checked")) {
                                        var o = $(t).attr("pix-dest"),
                                            a = $(t).attr("pix-rtype");
                                        i[o] || (i[o] = {}), i[o][a] = $(t).attr("pix-value")
                                    }
                                    break;
                                case "color":
                                    if ($(t).val() && "" != $(t).val()) {
                                        o = $(t).attr("pix-dest");
                                        i[o] || (i[o] = {}), i[o][n] = $(t).val()
                                    } else {
                                        o = $(t).attr("pix-dest");
                                        i[o] || (i[o] = {}), i[o][n] = "Transparent"
                                    }
                                    break;
                                default:
                                    if ($(t).val() && "" != $(t).val()) {
                                        o = $(t).attr("pix-dest");
                                        i[o] || (i[o] = {}), i[o][n] = $(t).val()
                                    }
                            }
                        }
                    }), i.bg) {
                    if (t.hasClass("highlight-section")) {
                        var n;
                        if (n = t.find(".highlight-right").length > 0 ? t.find(".highlight-right") : t.find(".highlight-left"), i.bg.img) {
                            o = 'url("' + i.bg.img + '")';
                            i.bg.overlay ? n.css("background-image", "linear-gradient( " + i.bg.overlay + " ," + i.bg.overlay + ")," + o) : i.bg.img && t.css("background-image") != i.bg.img && n.css("background-image", o)
                        } else i.bg.overlay && n.css("background-image", "linear-gradient( " + i.bg.overlay + " ," + i.bg.overlay + ")")
                    } else if (i.bg.img) {
                        var o = 'url("' + i.bg.img + '")';
                        i.bg.overlay ? t.css("background-image", "linear-gradient( " + i.bg.overlay + " ," + i.bg.overlay + ")," + o) : i.bg.img && t.css("background-image") != i.bg.img && t.css("background-image", o)
                    } else i.bg.overlay && t.css("background-image", "linear-gradient( " + i.bg.overlay + " ," + i.bg.overlay + ")");
                    i.bg.color && "Transparent" != i.bg.color && t.css("background-color") != i.bg.color && (t.css("background-color", i.bg.color), "" == i.bg.color && t.css("background-color", "auto")), i.bg.size && t.css("background-size") != i.bg.size && t.css("background-size", i.bg.size), i.bg.repeat && t.css("background-repeat") != i.bg.repeat && t.css("background-repeat", i.bg.repeat), i.bg.attachment && t.css("background-attachment") != i.bg.attachment && t.css("background-attachment", i.bg.attachment), i.bg.paddingTop && t.css("padding-top") != i.bg.paddingTop && t.css("padding-top", e(i.bg.paddingTop)), i.bg.paddingBottom && t.css("padding-bottom") != i.bg.paddingBottom && t.css("padding-bottom", e(i.bg.paddingBottom)), i.bg.paddingLeft && t.css("padding-left") != i.bg.paddingLeft && t.css("padding-left", e(i.bg.paddingLeft)), i.bg.paddingRight && t.css("padding-right") != i.bg.paddingRight && t.css("padding-right", e(i.bg.paddingRight)), i.bg.marginTop && t.css("margin-top") != i.bg.marginTop && t.css("margin-top", e(i.bg.marginTop)), i.bg.marginBottom && t.css("margin-bottom") != i.bg.marginBottom && t.css("margin-bottom", e(i.bg.marginBottom)), i.bg.marginLeft && t.css("margin-left") != i.bg.marginLeft && t.css("margin-left", e(i.bg.marginLeft)), i.bg.marginRight && t.css("margin-right") != i.bg.marginRight && t.css("margin-right", e(i.bg.marginRight)), i.bg.align && t.css("text-align") != i.bg.align && t.css("text-align", i.bg.align)
                }
                i.header && i.header.hstyle && (t.removeClass("pix-over-header"), t.addClass(i.header.hstyle)), i.header && i.header.hformat && (t.removeClass("pix-fixed-top pix_scroll_header"), t.addClass(i.header.hformat)), $("#nestable") && updateSection($("#nestable").data("output", $("#json-output")), t), i.scroll && i.scroll.color && t.attr("data-scroll-bg", i.scroll.color), i.menu && i.menu.color && (console.log(t.html()), t.find(".nav > li > a").each(function() {
                    console.log($(this).html()), $(this).css("color", i.menu.color)
                })), i.btn && (t.addClass("pix_builder_elm_anim"), i.btn.btnsize && (t.removeClass("btn-sm btn-md btn-lg btn-xl"), t.addClass(i.btn.btnsize)), i.btn.btnstyle && (t.removeClass("btn-flat pix-line"), t.addClass(i.btn.btnstyle), "pix-line" == i.btn.btnstyle ? (t.css("background", "transparent"), i.bg.color && "Transparent" != i.bg.color && "transparent" != i.bg.color ? t.css({
                    "border-color": i.bg.color,
                    color: i.bg.color
                }) : t.css({
                    "border-color": "",
                    color: ""
                })) : (t.css("color", ""), console.log(t.css("background-color")), console.log(t.css("color")))), i.btn.btncorners && (t.removeClass("btn-round-lg btn-round-xl"), t.addClass(i.btn.btncorners)), setTimeout(function() {
                    t.removeClass("pix_builder_elm_anim")
                }, 200)), i.form && (i.form.popup_id && t.attr("pix-popup", i.form.popup_id), i.form.redirect_url && t.attr("pix-redirect", i.form.redirect_url), i.form.form_type && t.attr("pix-form-type", i.form.form_type), i.form.list_id && t.attr("pix-list-id", i.form.list_id)), i.link && (i.link.href && t.attr("href", i.link.href), i.link.page && t.attr("href", i.link.page), i.link.popup ? (t.attr("href", "#"), t.attr("data-toggle", "modal"), t.attr("data-target", i.link.popup)) : t.removeAttr("data-toggle").removeAttr("data-target")), i.iframe && i.iframe.code && t.replaceWith(i.iframe.code), i.countdown && (i.countdown.time && t.attr("data-date", i.countdown.time), i.count && t.find(".pix-count-num").css("color", i.count.color), i.countdown.popup_id ? t.attr("data-popup", i.countdown.popup_id) : t.attr("data-popup", ""), i.countdown.redirect_url ? t.attr("data-redirect", i.countdown.redirect_url) : t.attr("data-redirect", "")), t.removeClass("animate-in slow-mo super-slow-mo ultra-slow-mo hyper-slow-mo"), t.removeAttr("data-anim-type data-anim-delay"), t.removeClass(effects.join(" ")), i.animation && (i.animation.delay && t.attr("data-anim-delay", i.animation.delay), i.animation.duration && t.addClass(i.animation.duration), i.animation.type && t.addClass(i.animation.type).addClass("pix-animate-in").addClass("animating"), t.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
                    t.removeClass("animating").addClass(i.animation.type).addClass("animate-in")
                })), t.closest(".pix_popup") && t.closest(".pix_popup").attr("data-wait", ""), i.popup && i.popup.open && t.closest(".pix_popup").attr("data-wait", i.popup.open), console.log(i), fixed_header_update(), pixSave($("#pixGrid").pixbuilder("getHtml")), preview_btn_check(), notyf.confirm("Your changes have been successfully applied!")
            }
        },
        n = 1,
        o = {
            pix_img: function(e, t = "bg") {
                var i = "";
                return i += '<div class="pix_sidebar_elem"><div class="pix_el_inner"><label for="el_' + n + '" class="img_label">Background Image</label><div class="img_box"><a href="#" class="img_btn pix_select_img pix_btn_click" data-pix-field="el_' + n + '" data-pix-preview="pix_section_img"><i class="pixicon-uniE08C"></i> Change</a><div class="img_box_inner">', i += e ? '<img class="media-object2" id="pix_section_img" src="' + e + '" alt="No Background Image">' : '<img class="media-object2" id="pix_section_img" src="core/images/no-background-image.png" alt="No Background Image">', i += "</div>", i += e ? '<input type="text" pix-dest="' + t + '" class="form-control img_url pix_sidebar_value" pix-type="img" pix-dest="bg" id="el_' + n + '" pix-key="bg_img" placeholder="Image URL" value="' + e + '">' : '<input type="text" pix-dest="' + t + '" class="form-control img_url pix_sidebar_value" pix-type="img" pix-dest="bg" id="el_' + n + '" pix-key="bg_img" placeholder="Image URL" value="">', i += "</div></div></div>", n++, i
            },
            pix_color: function(e, t = "", i = "bg") {
                var o = "";
                return o += '<div class="pix_sidebar_elem"><div class="pix_el_inner"><div class="col-md-7 pix_no_padding"><label for="el_' + n + '" class="pix_line_label">' + e + '</label></div><div class="col-md-5 pix_no_padding"><div class=" "><div id="" class="input-group colorpicker-component"><input type="text" class="form-control pix_right_input pix_right_input_color pix_sidebar_value" pix-type="color" pix-dest="' + i + '" id="el_' + n + '" value="' + t + '"/><span class="input-group-addon"><i></i></span></div></div></div></div></div>', n++, o
            },
            pix_color_overlay: function(e, t = "", i = "bg") {
                var o = "";
                return o += '<div class="pix_sidebar_elem"><div class="pix_el_inner"><div class="col-md-7 pix_no_padding"><label for="el_' + n + '" class="pix_line_label">' + e + '</label></div><div class="col-md-5 pix_no_padding"><div class=" "><div id="" class="input-group colorpicker-component-2"><input type="text" pix-type="overlay" pix-dest="' + i + '" value="' + t + '" class="form-control pix_right_input pix_right_input_color pix_sidebar_value" id="el_' + n + '"/><span class="input-group-addon"><i></i></span></div></div></div></div></div>', n++, o
            },
            pix_radio: function(e, t, i) {
                var o = "",
                    a = "",
                    s = "";
                e && "cover" == e ? e = "active" : (a = "active", e = ""), t && "fixed" == t ? t = "active" : (s = "active", t = ""), o += '<div class="pix_sidebar_elem"><div class="pix_el_inner"><div class="col-md-6 pix_small_group pix_no_padding"><label>Size</label><div class="pix_btn_group" id="pix_sec_size"><a href="#" class="pix_btn pix_first pix_sidebar_value ' + e + '" pix-rtype="size" pix-type="radio" pix-dest="bg" pix-value="cover" data-tooltip="tooltip" data-placement="top" title="Cover" data-content="auto"><i class="material-icons">aspect_ratio</i></a><a href="#" class="pix_btn pix_last pix_sidebar_value ' + a + '" pix-rtype="size" pix-type="radio" pix-dest="bg" pix-value="auto" data-tooltip="tooltip" data-placement="top" title="Auto" data-content="auto"><i class="material-icons">picture_in_picture</i></a></div></div><div class="col-md-6 pix_small_group_right pix_no_padding"><label>Fixed</label><div class="pix_btn_group pix_float_right pix_spacing2 pix_sidebar_value" id="pix_sec_att"><a href="#" class="pix_btn pix_first pix_sidebar_value ' + t + '" pix-rtype="attachment" pix-type="radio" pix-dest="bg" pix-value="fixed" data-tooltip="tooltip" data-placement="top" title="Fixed" data-content="fixed"><i class="material-icons">check</i></a><a href="#" class="pix_btn pix_last pix_sidebar_value ' + s + '" pix-rtype="attachment" pix-type="radio" pix-dest="bg" pix-value="scroll" data-tooltip="tooltip" data-placement="top" title="Scroll" data-content="scroll"><i class="material-icons">close</i></a></div></div></div></div>';
                var r = "",
                    l = "",
                    c = "",
                    d = "";
                switch (i) {
                    case 1:
                        l = "active";
                        break;
                    case 2:
                        c = "active";
                        break;
                    case 3:
                        d = "active";
                        break;
                    default:
                        r = "active"
                }
                return o += '<div class="pix_sidebar_elem"><div class="pix_el_inner"><div class="col-md-4 pix_btn_label pix_no_padding"><label>Image Tile</label></div><div class="col-md-8 group_right pix_no_padding"><div class="pix_btn_group pix_sidebar_value" id="pix_sec_repeat"><a href="#" class="pix_btn pix_first pix_sidebar_value ' + r + '" pix-rtype="repeat" pix-type="radio" pix-dest="bg" pix-value="repeat" data-tooltip="tooltip" data-placement="top" title="repeat" data-content="repeat"><i class="material-icons">apps</i></a><a href="#" class="pix_btn pix_sidebar_value ' + l + '" pix-rtype="repeat" pix-type="radio" pix-dest="bg" pix-value="repeat-x" data-tooltip="tooltip" data-placement="top" title="repeat-x" data-content="repeat-x"><i class="material-icons">more_horiz</i></a><a href="#" class="pix_btn pix_sidebar_value ' + c + '" pix-rtype="repeat" pix-type="radio" pix-dest="bg" pix-value="repeat-y" data-tooltip="tooltip" data-placement="top" title="repeat-y" data-content="repeat-y"><i class="material-icons">more_vert</i></a><a href="#" class="pix_btn pix_last pix_sidebar_value ' + d + '" pix-rtype="repeat" pix-type="radio" pix-dest="bg" pix-value="no-repeat" data-tooltip="tooltip" data-placement="top" title="no-repeat" data-content="no-repeat" data-content="auto"><i class="material-icons">close</i></a></div></div></div></div>', n++, o
            },
            pix_align: function(e) {
                var t, i, o = "",
                    a = "";
                switch (e) {
                    case "left":
                        t = "active";
                        break;
                    case "center":
                        i = "active";
                        break;
                    case "right":
                        a = "active"
                }
                return o += '<div class="pix_sidebar_elem"><div class="pix_el_inner"><div class="col-md-4 pix_btn_label pix_no_padding"><label>Content align</label></div><div class="col-md-8 group_right pix_no_padding"><div class="pix_btn_group" id="pix_sec_size"><a href="#" class="pix_btn pix_first pix_sidebar_value ' + t + '" pix-rtype="align" pix-type="radio" pix-dest="bg" pix-value="left" data-tooltip="tooltip" data-placement="top" title="Left" data-content="auto"><i class="material-icons">format_align_left</i></a><a href="#" class="pix_btn  pix_sidebar_value ' + i + '" pix-rtype="align" pix-type="radio" pix-dest="bg" pix-value="center" data-tooltip="tooltip" data-placement="top" title="Center" data-content="auto"><i class="material-icons">format_align_center</i></a><a href="#" class="pix_btn pix_last pix_sidebar_value ' + a + '" pix-rtype="align" pix-type="radio" pix-dest="bg" pix-value="right" data-tooltip="tooltip" data-placement="top" title="Right" data-content="auto"><i class="material-icons">format_align_right</i></a></div></div></div></div>', n++, o
            },
            pix_header_style: function(e = "", t = "") {
                var i = "",
                    o = "",
                    a = "",
                    s = "",
                    r = "",
                    l = "";
                switch ("pix-over-header" == e ? a = "active" : o = "active", t) {
                    case "pix-fixed-top":
                        r = "active";
                        break;
                    case "pix_scroll_header":
                        l = "active";
                        break;
                    default:
                        s = "active"
                }
                return i += '<div class="pix_sidebar_elem"><div class="pix_el_inner"><div class="pix_sub_item"><label class="img_label">Header Style</label><div class="col-md-12 group_right pix_no_padding"><div class=" btn-group-justified pix_radio_group pix_big_btn_group"><a href="#" class="btn pix_btn pix_sidebar_value ' + o + '" pix-rtype="hstyle" pix-type="radio" pix-dest="header" pix-value="normal"><div class="radio_item_icon"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="80px" height="60px" viewBox="0 0 80 60" enable-background="new 0 0 80 60" xml:space="preserve"><g id="page"><g id="bg"><polyline fill="#7B7B7B" fill-opacity="0.15" points="0,15.5 80,15.5 80,60 59.109,60 59,41.25 20.165,41.25 20.165,60 0,60 0,16 "/></g><g><rect x="1" y="15.031" opacity="0.15" fill="none" width="78" height="43.969"/><path fill="#7B7B7B" d="M78,16.031V58H2V16.031H78 M80,14.031H0V60h80V14.031L80,14.031z"/></g></g><g id="Header"><g><rect x="1" y="1" opacity="0" fill="#7B7B7B" width="78" height="14"/><path fill="#7B7B7B" d="M78,2v12H2V2H78 M80,0H0v16h80V0L80,0z"/></g><g><path fill="#7B7B7B" d="M7.964,9.477h1.91v0.656H7.109V5.867h0.855V9.477z"/><path fill="#7B7B7B" d="M13.821,8.384c0,0.525-0.165,0.958-0.495,1.299s-0.76,0.511-1.289,0.511c-0.527,0-0.955-0.171-1.283-0.513s-0.492-0.774-0.492-1.298V7.616c0-0.521,0.164-0.954,0.491-1.296s0.753-0.514,1.279-0.514c0.529,0,0.96,0.171,1.292,0.514s0.498,0.775,0.498,1.296V8.384z M12.968,7.61c0-0.332-0.083-0.604-0.249-0.817s-0.396-0.319-0.688-0.319c-0.289,0-0.514,0.106-0.675,0.319s-0.242,0.485-0.242,0.817v0.773c0,0.338,0.081,0.613,0.243,0.826s0.389,0.319,0.68,0.319c0.293,0,0.521-0.106,0.686-0.319s0.246-0.488,0.246-0.826V7.61z"/><path fill="#7B7B7B" d="M17.767,9.55c-0.133,0.174-0.331,0.325-0.595,0.453s-0.604,0.192-1.02,0.192c-0.516,0-0.938-0.162-1.266-0.486s-0.492-0.745-0.492-1.263V7.555c0-0.516,0.159-0.936,0.478-1.261S15.6,5.806,16.1,5.806c0.521,0,0.921,0.124,1.198,0.371s0.411,0.577,0.401,0.989l-0.006,0.018h-0.806c0-0.227-0.065-0.403-0.196-0.529s-0.321-0.189-0.571-0.189c-0.262,0-0.473,0.101-0.633,0.303s-0.24,0.462-0.24,0.781v0.896c0,0.322,0.082,0.585,0.246,0.788s0.384,0.305,0.659,0.305c0.203,0,0.364-0.021,0.482-0.062s0.209-0.093,0.274-0.155V8.495h-0.82V7.903h1.679V9.55z"/><path fill="#7B7B7B" d="M21.945,8.384c0,0.525-0.165,0.958-0.495,1.299s-0.76,0.511-1.289,0.511c-0.527,0-0.955-0.171-1.283-0.513s-0.492-0.774-0.492-1.298V7.616c0-0.521,0.164-0.954,0.491-1.296s0.753-0.514,1.279-0.514c0.529,0,0.96,0.171,1.292,0.514s0.498,0.775,0.498,1.296V8.384z M21.092,7.61c0-0.332-0.083-0.604-0.249-0.817s-0.396-0.319-0.688-0.319c-0.289,0-0.514,0.106-0.675,0.319s-0.242,0.485-0.242,0.817v0.773c0,0.338,0.081,0.613,0.243,0.826s0.389,0.319,0.68,0.319c0.293,0,0.521-0.106,0.686-0.319s0.246-0.488,0.246-0.826V7.61z"/></g><rect x="66" y="7" fill="#7B7B7B" width="6" height="2"/><rect x="56" y="7" fill="#7B7B7B" width="6" height="2"/><rect x="46" y="7" fill="#7B7B7B" width="6" height="2"/><g><path fill="#7B7B7B" d="M59.109,42v16h-38V42H59.109 M59.109,40h-38c-1.104,0-2,0.896-2,2v16c0,1.104,0.896,2,2,2h38c1.105,0,2-0.896,2-2V42C61.109,40.896,60.215,40,59.109,40L59.109,40z"/></g><g id="text"><rect x="27" y="22" fill="#7B7B7B" width="26" height="3"/><rect x="23" y="29" fill="#7B7B7B" width="34" height="1"/><rect x="29" y="33" fill="#7B7B7B" width="22" height="1"/></g></g></svg></div><div class="radio_item_text">Normal</div></a><a href="#" class="btn pix_btn pix_sidebar_value ' + a + '" pix-rtype="hstyle" pix-type="radio" pix-dest="header" pix-value="pix-over-header"><div class="radio_item_icon"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="80px" height="60px" viewBox="0 0 80 60" enable-background="new 0 0 80 60" xml:space="preserve"><g id="page"><g id="bg"><polyline display="none" fill="#7B7B7B" fill-opacity="0.15" points="0,15.5 80,15.5 80,60 59.109,60 59,41.25 20.165,41.25 20.165,60 0,60 0,16 "/><g id="Layer_5"></g><polyline opacity="0.15" fill="#7B7B7B" points="0,0 80,0 80,60 80,60 59.891,60 59.813,41.063 20.5,41.063 20.188,60 0,60 0,0 "/></g><g><path fill="#7B7B7B" d="M78,2v56H2V2H78 M80,0H0v60h80V0L80,0z"/></g></g><g id="Header"><g><path fill="#7B7B7B" d="M7.964,9.477h1.91v0.656H7.109V5.867h0.855V9.477z"/><path fill="#7B7B7B" d="M13.821,8.384c0,0.525-0.165,0.958-0.495,1.299s-0.76,0.511-1.289,0.511c-0.527,0-0.955-0.171-1.283-0.513s-0.492-0.774-0.492-1.298V7.616c0-0.521,0.164-0.954,0.491-1.296s0.753-0.514,1.279-0.514c0.529,0,0.96,0.171,1.292,0.514s0.498,0.775,0.498,1.296V8.384z M12.968,7.61c0-0.332-0.083-0.604-0.249-0.817s-0.396-0.319-0.688-0.319c-0.289,0-0.514,0.106-0.675,0.319s-0.242,0.485-0.242,0.817v0.773c0,0.338,0.081,0.613,0.243,0.826s0.389,0.319,0.68,0.319c0.293,0,0.521-0.106,0.686-0.319s0.246-0.488,0.246-0.826V7.61z"/><path fill="#7B7B7B" d="M17.767,9.55c-0.133,0.174-0.331,0.325-0.595,0.453s-0.604,0.192-1.02,0.192c-0.516,0-0.938-0.162-1.266-0.486s-0.492-0.745-0.492-1.263V7.555c0-0.516,0.159-0.936,0.478-1.261S15.6,5.806,16.1,5.806c0.521,0,0.921,0.124,1.198,0.371s0.411,0.577,0.401,0.989l-0.006,0.018h-0.806c0-0.227-0.065-0.403-0.196-0.529s-0.321-0.189-0.571-0.189c-0.262,0-0.473,0.101-0.633,0.303s-0.24,0.462-0.24,0.781v0.896c0,0.322,0.082,0.585,0.246,0.788s0.384,0.305,0.659,0.305c0.203,0,0.364-0.021,0.482-0.062s0.209-0.093,0.274-0.155V8.495h-0.82V7.903h1.679V9.55z"/><path fill="#7B7B7B" d="M21.945,8.384c0,0.525-0.165,0.958-0.495,1.299s-0.76,0.511-1.289,0.511c-0.527,0-0.955-0.171-1.283-0.513s-0.492-0.774-0.492-1.298V7.616c0-0.521,0.164-0.954,0.491-1.296s0.753-0.514,1.279-0.514c0.529,0,0.96,0.171,1.292,0.514s0.498,0.775,0.498,1.296V8.384z M21.092,7.61c0-0.332-0.083-0.604-0.249-0.817s-0.396-0.319-0.688-0.319c-0.289,0-0.514,0.106-0.675,0.319s-0.242,0.485-0.242,0.817v0.773c0,0.338,0.081,0.613,0.243,0.826s0.389,0.319,0.68,0.319c0.293,0,0.521-0.106,0.686-0.319s0.246-0.488,0.246-0.826V7.61z"/></g><rect x="66" y="7" fill="#7B7B7B" width="6" height="2"/><rect x="56" y="7" fill="#7B7B7B" width="6" height="2"/><rect x="46" y="7" fill="#7B7B7B" width="6" height="2"/><g><path fill="#7B7B7B" d="M59.109,42v16h-38V42H59.109 M59.109,40h-38c-1.104,0-2,0.896-2,2v16c0,1.104,0.896,2,2,2h38c1.105,0,2-0.896,2-2V42C61.109,40.896,60.215,40,59.109,40L59.109,40z"/></g><g id="text"><rect x="27" y="22" fill="#7B7B7B" width="26" height="3"/><rect x="23" y="29" fill="#7B7B7B" width="34" height="1"/><rect x="29" y="33" fill="#7B7B7B" width="22" height="1"/></g></g></svg></div><div class="radio_item_text">Transparent</div></a></div></div></div><div class="pix_sub_item"><label class="img_label">Header Format</label><div class="col-md-12 group_right pix_no_padding"><div class="btn-group btn-group-justified pix_big_btn_group pix_big_btn_group_2 pix_radio_group"><a href="#" class="btn pix_btn ' + s + ' pix_sidebar_value" pix-rtype="hformat" pix-type="radio" pix-dest="header" pix-value="none"><div class="radio_item_icon"><i class="material-icons">close</i></div><div class="radio_item_text">None</div></a><a href="#" class="btn pix_btn pix_sidebar_value ' + r + '" pix-rtype="hformat" pix-type="radio" pix-dest="header" pix-value="pix-fixed-top"><div class="radio_item_icon"><i class="material-icons">vertical_align_top</i></div><div class="radio_item_text">Fixed</div></a><a href="#" class="btn pix_btn pix_sidebar_value ' + l + '" pix-rtype="hformat" pix-type="radio" pix-dest="header" pix-value="pix_scroll_header"><div class="radio_item_icon"><i class="material-icons">swap_vert</i></div><div class="radio_item_text">Scroll</div></a></div></div></div></div></div>', n++, i
            },
            pix_select: function(e = "Choose a value", t, i, o = "", a = "overlay", s) {
                var r = "",
                    l = "";
                if (s && "" != s && (l = "pix_linked_value"), r += '<div class="pix_sidebar_elem"><div class="pix_el_inner"><div class="pix_no_padding pix_select_el"><label>' + e + '</label><select data-dropup-auto="false" id="" data-placeholder="Your Favorite Types of Bear" class="selectpicker ' + l + ' pix_sidebar_value" data-live-search="true" pix-type="' + a + '" pix-dest="' + o + '" data-linked="' + s + '">', t)
                    for (var c in t) r += c == i ? '<option value="' + c + '" selected>' + t[c] + "</option>" : '<option value="' + c + '">' + t[c] + "</option>";
                return r += "</select></div></div></div>", n++, r
            },
            pix_text_input: function(e, t, i = "", o = "overlay", a = "") {
                var s = "";
                return s += '<div class="pix_sidebar_elem"><div class="pix_el_inner"><div class="col-md-7 pix_no_padding"><label for="el_' + n + '" class="pix_line_label">' + e + '</label></div><div class="col-md-5 pix_no_padding"><div class=" "><div class="input-group input-component"><input type="text" pix-type="' + o + '" pix-dest="' + i + '" value="' + a + '" class="form-control pix_right_input pix_sidebar_value" id="el_' + n + '" placeholder="' + t + '"/></div></div></div></div></div>', n++, s
            },
            pix_textarea_input: function(e, t, i = "", o = "overlay", a = "") {
                var s = "";
                return s += '<div class="pix_sidebar_elem"><div class="pix_el_inner"><div class="col-md-12 pix_no_padding"><label for="el_' + n + '" class="pix_line_label">' + e + '</label></div><div class="col-md-12 pix_no_padding"><div class=" "><div class="input-group input-component"><textarea pix-type="' + o + '" pix-dest="' + i + '" class="form-control pix_right_input pix_sidebar_value" rows="6" id="el_' + n + '" placeholder="' + t + '">' + a + "</textarea></div></div></div></div></div>", n++, s
            },
            pix_accordion: function(e, t, i = "", o = "overlay", a = "") {
                var s = "";
                return s += '<div class="pix_sidebar_elem"><div class="pix_el_inner"><div class="col-md-12 pix_no_padding"><label for="el_' + n + '" class="pix_line_label">' + e + '</label></div><div class="col-md-12 pix_no_padding"><div class=" "><div class="panel-group" id="accordion">\n  <div class="panel panel-default">\n    <div class="panel-heading">\n      <h4 class="panel-title">\n        <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">\n        Collapsible Group 1</a>\n      </h4>\n    </div>\n    <div id="collapse1" class="panel-collapse collapse in">\n      <div class="panel-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit,\n      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad\n      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\n      commodo consequat.</div>\n    </div>\n  </div>\n  <div class="panel panel-default">\n    <div class="panel-heading">\n      <h4 class="panel-title">\n        <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">\n        Collapsible Group 2</a>\n      </h4>\n    </div>\n    <div id="collapse2" class="panel-collapse collapse">\n      <div class="panel-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit,\n      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad\n      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\n      commodo consequat.</div>\n    </div>\n  </div>\n  <div class="panel panel-default">\n    <div class="panel-heading">\n      <h4 class="panel-title">\n        <a data-toggle="collapse" data-parent="#accordion" href="#collapse3">\n        Collapsible Group 3</a>\n      </h4>\n    </div>\n    <div id="collapse3" class="panel-collapse collapse">\n      <div class="panel-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit,\n      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad\n      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\n      commodo consequat.</div>\n    </div>\n  </div>\n</div></div></div></div></div>', n++, s
            },
            pix_date_input: function(e, t, i = "", o = "overlay", a = "") {
                var s = "";
                return s += '<div class="pix_sidebar_elem"><div class="pix_el_inner"><div class="col-md-12 pix_no_padding"><label for="el_' + n + '" class="pix_line_label">' + e + '</label></div><div class="col-md-12 pix_no_padding"><div class=" "><div class="input-group input-component"><input type="datetime-local" pix-type="' + o + '" pix-dest="' + i + '" value="' + a + '" class="form-control pix_right_input pix_sidebar_value" id="el_' + n + '" placeholder="' + t + '"/></div></div></div></div></div>', n++, s
            },
            pix_padding: function(e = "", t = "") {
                var i = "";
                return i += '<div class="pix_sidebar_elem"><div class="pix_el_inner"><div class="pix_no_padding pix_padding_el"><label>Padding</label><div><div class="col-md-6 pix_left_col"><div class="input-group" id=""><input type="text" pix-type="paddingTop" pix-dest="bg" class="form-control pix_sidebar_value" id="" placeholder="Top" value="' + e + '"><span class="input-group-addon"><i class="material-icons">arrow_upward</i></span></div></div><div class="col-md-6 pix_right_col"><div class="input-group" id="pix_sec_padding_b"><input type="text" pix-type="paddingBottom" pix-dest="bg" class="form-control pix_sidebar_value" id="" placeholder="Bottom" value="' + t + '"><span class="input-group-addon"><i class="material-icons">arrow_downward</i></span></div></div></div></div></div></div>', n++, i
            },
            pix_padding_margin: function(e) {
                var t = "";
                return t += '<div class="pix_sidebar_elem"><div class="pix_el_inner"><div class="pix_no_padding pix_padding_el"><label>Spacing</label><div><div class="form-group"><div class="pix_pm_div"><div class="pix_margin_div"><div class="pix_margin_title pix_noselect">Margin</div><input pix-type="marginTop" pix-dest="bg" type="text" class="form-control pix_pm_input pix_sidebar_value" id="pix_elm_margin_t" placeholder="" value="' + e.margin_top + '"><input pix-type="marginRight" pix-dest="bg" type="text" class="form-control pix_pm_input pix_sidebar_value" id="pix_elm_margin_r" placeholder="" value="' + e.margin_right + '"><input pix-type="marginBottom" pix-dest="bg" type="text" class="form-control pix_pm_input pix_sidebar_value" id="pix_elm_margin_b" placeholder="" value="' + e.margin_bottom + '"><input pix-type="marginLeft" pix-dest="bg" type="text" class="form-control pix_pm_input pix_sidebar_value" id="pix_elm_margin_l" placeholder="" value="' + e.margin_left + '"><span class="pix_m_t_px pix_pm_px pix_noselect">px</span><span class="pix_m_b_px pix_pm_px pix_noselect">px</span><span class="pix_m_l_px pix_pm_px pix_noselect">px</span><span class="pix_m_r_px pix_pm_px pix_noselect">px</span></div><div class="pix_padding_div"><div class="pix_padding_title pix_noselect">Padding</div><input pix-type="paddingTop" pix-dest="bg" type="text" class="form-control pix_pm_input pix_sidebar_value" id="pix_elm_padding_t" placeholder="" value="' + e.padding_top + '"><input pix-type="paddingRight" pix-dest="bg" type="text" class="form-control pix_pm_input pix_sidebar_value" id="pix_elm_padding_r" placeholder="" value="' + e.padding_right + '"><input pix-type="paddingBottom" pix-dest="bg" type="text" class="form-control pix_pm_input pix_sidebar_value" id="pix_elm_padding_b" placeholder="" value="' + e.padding_bottom + '"><input pix-type="paddingLeft" pix-dest="bg" type="text" class="form-control pix_pm_input pix_sidebar_value" id="pix_elm_padding_l" placeholder="" value="' + e.padding_left + '"><span class="pix_p_t_px pix_pm_px pix_noselect">px</span><span class="pix_p_b_px pix_pm_px pix_noselect">px</span><span class="pix_p_l_px pix_pm_px pix_noselect">px</span><span class="pix_p_r_px pix_pm_px pix_noselect">px</span><div class="pix_padding_logo_div"><?xml version="1.0" encoding="utf-8"?> \x3c!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --\x3e <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"> <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="33px" height="33px" viewBox="0 0 33 33" enable-background="new 0 0 33 33" xml:space="preserve"> <rect y="24" fill="#777777" width="9" height="9"/> <rect y="12" fill="#777777" width="9" height="9"/> <rect fill="#777777" width="9" height="9"/> <rect x="12" y="12" fill="#777777" width="9" height="9"/> <rect x="12" fill="#777777" width="9" height="9"/> <rect x="24" fill="#777777" width="9" height="9"/> </svg></div></div></div></div></div></div></div>', n++, t
            },
            pix_link: function(e, t, i, o, a, s, r) {
                var l = "";
                return l += '<div class="pix_sidebar_elem"><div class="pix_el_inner"><div class="pix_no_padding pix_padding_el"><label>Choose link type</label><div><ul class="nav nav-justified pix_link_type_tab"><li class="active"><a href="#" data-target="#pix_type_link" data-toggle="tab"><span><i class="material-icons">link</i></span>Link</a></li><li><a href="#" data-target="#pix_type_page" data-toggle="tab"><span><i class="material-icons">layers</i></span>Page</a></li><li><a href="#" data-target="#pix_type_section" data-toggle="tab"><span><i class="material-icons">dashboard</i></span>Section</a></li><li><a href="#" data-target="#pix_type_popup" data-toggle="tab"><span><i class="material-icons">library_books</i></span>Popup</a></li></ul><div class="tab-content pix_tab_pane_div"><div class="tab-pane active" id="pix_type_link"><div class="form-group"><label>Link</label><input type="text" pix-dest="link" pix-type="href" class="form-control pix_linked_value pix_sidebar_value" id="pix_link_url" placeholder="http://www.yourlink.com" data-linked="link" value="' + e + '"></div></div><div class="tab-pane" id="pix_type_page">' + this.pix_select("Select a Page", t, i, "link", "page", "link") + '</div><div class="tab-pane" id="pix_type_section">' + this.pix_select("Select a Section", o, a, "link", "href", "link") + '</div><div class="tab-pane" id="pix_type_popup">' + this.pix_select("Select a Popup", s, r, "link", "popup", "link") + "</div></div></div></div></div></div>", n++, l
            },
            pix_form: function() {
                var e = "";
                return e += '<div class="pix_sidebar_elem"><div class="pix_el_inner"><div class="pix_no_padding pix_padding_el"><label>Drag & Drop Form element</label><div id="pix_form_builder"><div id="pix_form_builder_elms"><div data-content=\'<div class="form-group"><input type="text" class="form-control" id="name" name="name" placeholder="Enter Your Full Name"></div>\' class="pix_field_drag_elm">Text Input <i class="material-icons">short_text</i></div><div data-content=\'<div class="form-group"><input type="email" class="form-control" name="email" id="email" placeholder="Enter Your Email Address"></div>\' class="pix_field_drag_elm">Email Address <i class="material-icons">mail_outline</i></div><div data-content=\'<div class="form-group"><textarea class="form-control" rows="5" id="message" name="message" placeholder="Enter Your Message Here..."></textarea></div>\' class="pix_field_drag_elm">Message <i class="material-icons">message</i></div><div data-content=\'<div class="checkbox"><label><input type="checkbox"> <span class="pix-gray"><span class="pix_edit_text">Check me out</span></span></label></div>\' class="pix_field_drag_elm">Checkbox <i class="material-icons">check_box</i></div><div data-content=\'<div class="form-group"><select class="form-control input-lg" name="select_field"><option value="">Choose a plan</option><option>2</option><option>3</option><option>4</option></select></div>\' class="pix_field_drag_elm">Select <i class="material-icons">keyboard_arrow_down</i></div><div data-content=\'<div class="radio"><label><input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked><span class="pix-gray"><span class="pix_edit_text">Option one</span></span></label></div><div class="radio"><label><input type="radio" name="optionsRadios" id="optionsRadios2" value="option2"><span class="pix-gray"><span class="pix_edit_text">Option two</span></span></label></div>\' class="pix_field_drag_elm">Radio <i class="material-icons">radio_button_checked</i></div><div data-content=\'<div class="form-group"><input type="date" class="form-control" name="date_field"></div>\' class="pix_field_drag_elm">Date <i class="material-icons">date_range</i></div><div data-content=\'<div class="checkbox"><label><input type="checkbox"> <span class="pix-gray"><span class="pix_edit_text">Accept Terms of use.</span></span></label></div>\' class="pix_field_drag_elm">Accept Terms <i class="material-icons">check</i></div></div></div></div></div></div>', n++, e
            },
            pix_btn_style: function(e, t, i) {
                var o = "";
                return o += '<div class="pix_sidebar_elem"><div class="pix_el_inner"><div class="pix_no_padding pix_padding_el"><label>Button Size</label><div><ul class="pix_img_radio pix_img_radio_s1 nav-justified">', $.each([{
                    key: "Small",
                    value: "btn-sm"
                }, {
                    key: "Normal",
                    value: "btn"
                }, {
                    key: "Medium",
                    value: "btn-md"
                }, {
                    key: "Large",
                    value: "btn-lg"
                }, {
                    key: "XL",
                    value: "btn-xl"
                }], function(t, i) {
                    var n = i.value === e ? 'checked="true"' : "";
                    i.value;
                    o += '<li><label><input type="radio" name="pix_btn_size" class="pix_sidebar_value" value="' + i.value + '" ' + n + ' pix-rtype="btnsize" pix-type="radio" pix-dest="btn" pix-value="' + i.value + '" /><span class="pix_radio_main_span">' + i.key + "</span></label></li>"
                }), o += '</ul></div><div><label>Button Style</label><ul class="pix_img_radio pix_img_radio_s1 nav-justified">', $.each([{
                    key: "normal",
                    title: "Normal",
                    value: "core/images/button-normal.png"
                }, {
                    key: "btn-flat",
                    title: "Flat",
                    value: "core/images/button-flat.png"
                }, {
                    key: "pix-line",
                    title: "Line",
                    value: "core/images/button-line.png"
                }], function(e, i) {
                    var n = i.key === t ? 'checked="true"' : "";
                    o += '<li><label><input type="radio" name="pix_btn_style" class="pix_sidebar_value" value="' + i.key + '" ' + n + ' pix-rtype="btnstyle" pix-type="radio" pix-dest="btn" pix-value="' + i.key + '" /><span class="pix_radio_main_span"><span class="pix_radion_img_inner"><img src="' + i.value + '" class="pix_img_half_2"></span>' + i.title + "</span></label></li>"
                }), o += '</ul></div><div><label>Button Corners</label><ul class="pix_img_radio pix_img_radio_s1 nav-justified">', $.each([{
                    key: "normal",
                    title: "Normal",
                    value: "core/images/normal-corner.png"
                }, {
                    key: "btn-round-lg",
                    title: "Round",
                    value: "core/images/round-corner.png"
                }], function(e, t) {
                    var n = t.key === i ? 'checked="true"' : "";
                    o += '<li><label><input type="radio" name="pix_btn_corners" class="pix_sidebar_value" value="' + t.key + '" ' + n + ' pix-rtype="btncorners" pix-type="radio" pix-dest="btn" pix-value="' + t.key + '" /><span class="pix_radio_main_span"><span class="pix_radion_img_inner"><img src="' + t.value + '"></span>' + t.title + "</span></label></li>"
                }), o += "</ul></div></div></div></div>", n++, o
            },
            pix_menu: function(e, t, i) {
                var n = "";
                return n += '<div class="pix_sidebar_elem2"><div class="pix_el_inner">', n += '<div class="pix_right_slide inner_tab-content" id="pix_menu_edit_slide"><form class="" id="menu-editor"><div class="form-group"><label for="addInputName">Name</label><input type="text" class="form-control" id="editInputName" placeholder="Item name" required></div><label>Choose link type</label><div><ul class="nav nav-justified pix_link_type_tab pix_menu_sidebar_ul"><li class="pix_menu_link_li active"><a href="#" data-target="#pix_type_link" data-toggle="tab"><span><i class="material-icons">link</i></span>Link</a></li><li><a href="#" data-target="#pix_type_page" data-toggle="tab"><span><i class="material-icons">layers</i></span>Page</a></li><li><a href="#" data-target="#pix_type_section" data-toggle="tab"><span><i class="material-icons">dashboard</i></span>Section</a></li><li><a href="#" data-target="#pix_type_popup" data-toggle="tab"><span><i class="material-icons">library_books</i></span>Popup</a></li></ul><div class="tab-content pix_tab_pane_div pix_menu_sidebar_tabs"><div class="tab-pane active" id="pix_type_link"><div class="form-group"><label>Link</label><input type="text" class="form-control pix_linked_value" id="editInputSlug" placeholder="http://www.yourlink.com" data-linked="link" value=""></div></div><div class="tab-pane" id="pix_type_page">' + this.pix_select("Select a Page", e, "", "menulink", "page", "link") + '</div><div class="tab-pane" id="pix_type_section">' + this.pix_select("Select a Section", t, "", "menulink", "page", "link") + '</div><div class="tab-pane" id="pix_type_popup">' + this.pix_select("Select a Popup", i, "", "menulink", "popup", "link") + '</div></div></div><button class="pix-btn-primary pix_green_bg pix_md_btn" id="editButton">Edit</button> <a href="#" class="pix-btn-primary pix_gray_bg pix_md_btn pix_close_slide">Cancel</a></form></div>', n += '<div class="pix_right_slide inner_tab-content" id="pix_menu_add_slide"><h6>Add new menu item</h6><form class="" id="pix-menu-add"><div class="form-group"><label for="addInputName">Name</label><input type="text" class="form-control" id="addInputName" placeholder="Item name" required></div><div class="form-group"><label for="addInputSlug">Link</label><input type="text" class="form-control" id="addInputSlug" placeholder="Link" required></div><button class="pix-btn-primary pix_green_bg pix_md_btn" id="addButton">Add</button> <a href="#" class="pix-btn-primary pix_gray_bg pix_md_btn pix_close_slide">Cancel</a></form></div>', n += '<div class="pix_right_main"><div class="pix_sortable_div"><div class="dd nestable" id="nestable"></div><div class="inner_tab-content"><a href="#" class="pix-btn-primary pix_green_bg pix_md_btn pix_side_btn" style="display: block; width: 100%;" id="pix_navbar_add_btn">Add new Link</a></div></div></div>', n += "</div></div>"
            },
            pix_menu2: function() {
                var e = "";
                return e += '<div class="pix_sidebar_elem2"><div class="pix_el_inner">', e += '<div class="pix_right_slide inner_tab-content" id="pix_menu_edit_slide"><h6>Editing <span id="currentEditName"></span></h6><form class="" id="menu-editor"><div class="form-group"><label for="addInputName">Name</label><input type="text" class="form-control" id="editInputName" placeholder="Item name" required></div><div class="form-group"><label for="addInputSlug">Link</label><input type="text" class="form-control" id="editInputSlug" placeholder="item-slug"></div><div class="form-group"><label>Link to section: </label><select id="p111" data-placeholder="Header Style" class="selectpicker"><option value="asd">Normal</option><option value="pix-fixed-top">Fixed Top</option><option value="pix-over-header">Transparent</option><option value="nn">Normal + Scroll</option><option value="normal4">Transparent</option><option value="normal5">Transparent + Scroll</option></select></div><div class="form-group"><label>Link to page: </label><select id="p112" data-placeholder="Header Style" class="selectpicker"><option value="asd">Normal</option><option value="pix-fixed-top">Fixed Top</option><option value="pix-over-header">Transparent</option><option value="nn">Normal + Scroll</option><option value="normal4">Transparent</option><option value="normal5">Transparent + Scroll</option></select></div><div class="form-group"><label>Link to popup: </label><select id="p113" data-placeholder="Header Style" class="selectpicker"><option value="asd">Normal</option><option value="pix-fixed-top">Fixed Top</option><option value="pix-over-header">Transparent</option><option value="nn">Normal + Scroll</option><option value="normal4">Transparent</option><option value="normal5">Transparent + Scroll</option></select></div><button class="pix-btn-primary pix_green_bg pix_md_btn" id="editButton">Edit</button> <a href="#" class="pix-btn-primary pix_gray_bg pix_md_btn pix_close_slide">Cancel</a></form></div>', e += '<div class="pix_right_slide inner_tab-content" id="pix_menu_add_slide"><h6>Add new menu item</h6><form class="" id="pix-menu-add"><div class="form-group"><label for="addInputName">Name</label><input type="text" class="form-control" id="addInputName" placeholder="Item name" required></div><div class="form-group"><label for="addInputSlug">Link</label><input type="text" class="form-control" id="addInputSlug" placeholder="item-slug" required></div><button class="pix-btn-primary pix_green_bg pix_md_btn" id="addButton">Add</button> <a href="#" class="pix-btn-primary pix_gray_bg pix_md_btn pix_close_slide">Cancel</a></form></div>', e += '<div class="pix_right_main"><div class="pix_sortable_div"><div class="dd nestable" id="nestable"></div><div class="inner_tab-content"><a href="#" class="pix-btn-primary pix_green_bg pix_md_btn pix_side_btn" style="display: block; width: 100%;" id="pix_navbar_add_btn">Add new Link</a></div></div></div>', e += "</div></div>"
            },
            pix_save: function() {
                var e = "";
                return e += '<div class="" id="pix_side_save"><a href="#" class="pix-btn-primary pix_green_bg pix_md_btn pix_side_btn pix_side_save" id="pix_save_btn22">Apply</a><a href="#" class="pix-btn-primary pix_gray_bg pix_md_btn pix_side_btn pix_side_cancel">Cancel</a></div>', n++, e
            }
        };
    return window.onresize = function(e) {
        t.resize()
    }, $("#pix-right-sidebar .panel_title .close, #pix-right-sidebar .pix_side_cancel").on("click", function(e) {
        return e.preventDefault(), t.close(), 0
    }), t.init()
}();
window.sidebar = Sidebar;
var app = function() {
    var e = {
            pixGrid: $("#pixGrid"),
            init: function() {
                return t.get_templates(), t.select_template(), this
            },
            count_init: function() {
                $(".pix-countdown").each(function() {
                    var e = $(this),
                        t = $(this).attr("data-date");
                    e.countdown({
                        date: t,
                        render: function(t) {
                            $.each(t, function(t, i) {
                                e.find(".pix-count-" + t).html(i)
                            })
                        }
                    }), e.data("countdown").update(t).start()
                })
            }
        },
        t = {
            get_templates: function() {
                $.ajax({
                    type: "GET",
                    accepts: {
                        json: "application/json"
                    },
                    url: "demo/get_templates/",
                    dataType: "json",
                    success: function(e) {
                        if (e) {
                            var t = "";
                            $.each(e, function(e, i) {
                                "Popups" != i.name && (t += '<div class="template_div">', t += '<div class="t_img"><img src="' + window.base_url + i.thumb + '"></div>', t += '<div class="t_info"><span class="t_name">' + i.name + '</span><a class="t_choose pix_animate_ease pix_select_template" data-template-id="' + i.id + '" href="#">Choose</a><span class="t_preview"><a target="_blank" href="' + i.preview + '" class="pixbuilder_out_link"><i class="pix_animate_ease material-icons">remove_red_eye</i></a></span></div>', t += "</div>")
                            })
                        }
                        $("#pix_templates_list").html(t)
                    },
                    error: function(e) {
                        alert("Error: Couldn't load templates!"), console.log(e)
                    }
                })
            },
            select_template: function() {
                var e = "demo/get_template/";
                $("body").on("click", ".pix_select_template", function(t) {
                    t.preventDefault();
                    var i = $(this).attr("data-template-id");
                    return !!i && ($.trim($("#pixGrid").html()).length ? $.confirm({
                        title: "Are you sure you want to use the template?",
                        boxWidth: "600px",
                        useBootstrap: !1,
                        backgroundDismiss: !0,
                        theme: "pix-default-modal",
                        content: "The current content of the page will be replaced with the selected template.",
                        buttons: {
                            cancel: {
                                text: "CANCEL",
                                btnClass: "btn-cancel"
                            },
                            Choose_template: {
                                text: "USE THIS TEMPLATE",
                                btnClass: "btn-blue",
                                keys: ["enter", "shift"],
                                action: function() {
                                    $("#pixGrid").fadeOut(), $.ajax({
                                        url: e + i,
                                        dataType: "json",
                                        success: function(e) {
                                            e && ($("#pixGrid").pixbuilder("deinit"), $("#pixGrid").html(e.code), $("#pixGrid").pixbuilder("init"), $("#pix_start_panel").hide(), fixed_header_update(), preview_btn_check(), $("form.pixfort-form").sortable({
                                                handle: ".pix_handle",
                                                start: pix_sortStart
                                            }))
                                        },
                                        error: function(e) {
                                            alert("Error: Couldn't load template!"), console.log(e)
                                        }
                                    }), $("#pixGrid").fadeIn()
                                }
                            }
                        }
                    }) : $.ajax({
                        url: e + i,
                        dataType: "json",
                        success: function(e) {
                            e && ($("#pixGrid").pixbuilder("deinit"), $("#pixGrid").html(e.code), $("#pixGrid").pixbuilder("init"), fixed_header_update(), $("#pix_start_panel").fadeOut("slow"), preview_btn_check(), $("form.pixfort-form").sortable({
                                handle: ".pix_handle",
                                start: pix_sortStart
                            }))
                        },
                        error: function(e) {
                            alert("Error: Couldn't load template!"), console.log(e)
                        }
                    }), !1)
                })
            }
        };
    return e
}();
! function(e) {
    "use strict";
    e.fn.filer = function(t) {
        return this.each(function(i, n) {
            var o = e(n),
                a = e(),
                s = e(),
                r = e(),
                l = [],
                c = e.isFunction(t) ? t(o, e.fn.filer.defaults) : t,
                d = c && e.isPlainObject(c) ? e.extend(!0, {}, e.fn.filer.defaults, c) : e.fn.filer.defaults,
                u = {
                    init: function() {
                        o.wrap('<div class="jFiler"></div>'), u._set("props"), o.prop("jFiler").boxEl = a = o.closest(".jFiler"), u._changeInput()
                    },
                    _bindInput: function() {
                        d.changeInput && s.length > 0 && s.on("click", u._clickHandler), o.on({
                            focus: function() {
                                s.addClass("focused")
                            },
                            blur: function() {
                                s.removeClass("focused")
                            },
                            change: u._onChange
                        }), d.dragDrop && (d.dragDrop.dragContainer.on("drag dragstart dragend dragover dragenter dragleave drop", function(e) {
                            e.preventDefault(), e.stopPropagation()
                        }), d.dragDrop.dragContainer.on("drop", u._dragDrop.drop), d.dragDrop.dragContainer.on("dragover", u._dragDrop.dragEnter), d.dragDrop.dragContainer.on("dragleave", u._dragDrop.dragLeave)), d.uploadFile && d.clipBoardPaste && e(window).on("paste", u._clipboardPaste)
                    },
                    _unbindInput: function(t) {
                        d.changeInput && s.length > 0 && s.off("click", u._clickHandler), t && (o.off("change", u._onChange), d.dragDrop && (d.dragDrop.dragContainer.off("drop", u._dragDrop.drop), d.dragDrop.dragContainer.off("dragover", u._dragDrop.dragEnter), d.dragDrop.dragContainer.off("dragleave", u._dragDrop.dragLeave)), d.uploadFile && d.clipBoardPaste && e(window).off("paste", u._clipboardPaste))
                    },
                    _clickHandler: function() {
                        if (!d.uploadFile && d.addMore && 0 != o.val().length) {
                            u._unbindInput(!0);
                            var t = e('<input type="file" />'),
                                i = o.prop("attributes");
                            e.each(i, function() {
                                "required" != this.name && t.attr(this.name, this.value)
                            }), o.after(t), l.push(t), o = t, u._bindInput(), u._set("props")
                        }
                        o.click()
                    },
                    _applyAttrSettings: function() {
                        var e = ["name", "limit", "maxSize", "fileMaxSize", "extensions", "changeInput", "showThumbs", "appendTo", "theme", "addMore", "excludeName", "files", "uploadUrl", "uploadData", "options"];
                        for (var t in e) {
                            var i = "data-jfiler-" + e[t];
                            if (u._assets.hasAttr(i)) {
                                switch (e[t]) {
                                    case "changeInput":
                                    case "showThumbs":
                                    case "addMore":
                                        d[e[t]] = ["true", "false"].indexOf(o.attr(i)) > -1 ? "true" == o.attr(i) : o.attr(i);
                                        break;
                                    case "extensions":
                                        d[e[t]] = o.attr(i).replace(/ /g, "").split(",");
                                        break;
                                    case "uploadUrl":
                                        d.uploadFile && (d.uploadFile.url = o.attr(i));
                                        break;
                                    case "uploadData":
                                        d.uploadFile && (d.uploadFile.data = JSON.parse(o.attr(i)));
                                        break;
                                    case "files":
                                    case "options":
                                        d[e[t]] = JSON.parse(o.attr(i));
                                        break;
                                    default:
                                        d[e[t]] = o.attr(i)
                                }
                                o.removeAttr(i)
                            }
                        }
                    },
                    _changeInput: function() {
                        if (u._applyAttrSettings(), null != d.beforeRender && "function" == typeof d.beforeRender && d.beforeRender(a, o), d.theme && a.addClass("jFiler-theme-" + d.theme), "input" != o.get(0).tagName.toLowerCase() && "file" != o.get(0).type) s = o, (o = e('<input type="file" name="' + d.name + '" />')).css({
                            position: "absolute",
                            left: "-9999px",
                            top: "-9999px",
                            "z-index": "-9999"
                        }), a.prepend(o), u._isGn = o;
                        else if (d.changeInput) {
                            switch (typeof d.changeInput) {
                                case "boolean":
                                    s = e('<div class="jFiler-input"><div class="jFiler-input-caption"><span>' + d.captions.feedback + '</span></div><div class="jFiler-input-button">' + d.captions.button + '</div></div>"');
                                    break;
                                case "string":
                                case "object":
                                    s = e(d.changeInput);
                                    break;
                                case "function":
                                    s = e(d.changeInput(a, o, d))
                            }
                            o.after(s), o.css({
                                position: "absolute",
                                left: "-9999px",
                                top: "-9999px",
                                "z-index": "-9999"
                            })
                        }
                        o.prop("jFiler").newInputEl = s, d.dragDrop && (d.dragDrop.dragContainer = d.dragDrop.dragContainer ? e(d.dragDrop.dragContainer) : s), (!d.limit || d.limit && d.limit >= 2) && (o.attr("multiple", "multiple"), "[]" != o.attr("name").slice(-2) && o.attr("name", o.attr("name") + "[]")), o.attr("disabled") || d.disabled ? (d.disabled = !0, u._unbindInput(!0), a.addClass("jFiler-disabled")) : (d.disabled = !1, u._bindInput(), a.removeClass("jFiler-disabled")), d.files && u._append(!1, {
                            files: d.files
                        }), null != d.afterRender && "function" == typeof d.afterRender && d.afterRender(r, a, s, o)
                    },
                    _clear: function() {
                        u.files = null, o.prop("jFiler").files = null, d.uploadFile || d.addMore || u._reset(), u._set("feedback", u._itFl && u._itFl.length > 0 ? u._itFl.length + " " + d.captions.feedback2 : d.captions.feedback), null != d.onEmpty && "function" == typeof d.onEmpty && d.onEmpty(a, s, o)
                    },
                    _reset: function(t) {
                        if (!t) {
                            if (!d.uploadFile && d.addMore) {
                                for (var i = 0; i < l.length; i++) l[i].remove();
                                l = [], u._unbindInput(!0), o = u._isGn ? u._isGn : e(n), u._bindInput()
                            }
                            u._set("input", "")
                        }
                        u._itFl = [], u._itFc = null, u._ajFc = 0, u._set("props"), o.prop("jFiler").files_list = u._itFl, o.prop("jFiler").current_file = u._itFc, u._itFr = [], a.find("input[name^='jfiler-items-exclude-']:hidden").remove(), r.fadeOut("fast", function() {
                            e(this).remove()
                        }), o.prop("jFiler").listEl = r = e()
                    },
                    _set: function(e, t) {
                        switch (e) {
                            case "input":
                                o.val(t);
                                break;
                            case "feedback":
                                s.length > 0 && s.find(".jFiler-input-caption span").html(t);
                                break;
                            case "props":
                                o.prop("jFiler") || o.prop("jFiler", {
                                    options: d,
                                    listEl: r,
                                    boxEl: a,
                                    newInputEl: s,
                                    inputEl: o,
                                    files: u.files,
                                    files_list: u._itFl,
                                    current_file: u._itFc,
                                    append: function(e) {
                                        return u._append(!1, {
                                            files: [e]
                                        })
                                    },
                                    enable: function() {
                                        d.disabled && (d.disabled = !1, o.removeAttr("disabled"), a.removeClass("jFiler-disabled"), u._bindInput())
                                    },
                                    disable: function() {
                                        d.disabled || (d.disabled = !0, a.addClass("jFiler-disabled"), u._unbindInput(!0))
                                    },
                                    remove: function(e) {
                                        return u._remove(null, {
                                            binded: !0,
                                            data: {
                                                id: e
                                            }
                                        }), !0
                                    },
                                    reset: function() {
                                        return u._reset(), u._clear(), !0
                                    },
                                    retry: function(e) {
                                        return u._retryUpload(e)
                                    }
                                })
                        }
                    },
                    _filesCheck: function() {
                        var t = 0;
                        if (d.limit && u.files.length + u._itFl.length > d.limit) return d.dialogs.alert(u._assets.textParse(d.captions.errors.filesLimit)), !1;
                        for (var i = 0; i < u.files.length; i++) {
                            var n = u.files[i],
                                o = n.name.split(".").pop().toLowerCase(),
                                a = {
                                    name: n.name,
                                    size: n.size,
                                    size2: u._assets.bytesToSize(n.size),
                                    type: n.type,
                                    ext: o
                                };
                            if (null != d.extensions && -1 == e.inArray(o, d.extensions) && -1 == e.inArray(a.type, d.extensions)) return d.dialogs.alert(u._assets.textParse(d.captions.errors.filesType, a)), !1;
                            if (null != d.maxSize && u.files[i].size > 1048576 * d.maxSize || null != d.fileMaxSize && u.files[i].size > 1048576 * d.fileMaxSize) return d.dialogs.alert(u._assets.textParse(d.captions.errors.filesSize, a)), !1;
                            if (4096 == n.size && 0 == n.type.length) return d.dialogs.alert(u._assets.textParse(d.captions.errors.folderUpload, a)), !1;
                            if (null != d.onFileCheck && "function" == typeof d.onFileCheck ? !1 === d.onFileCheck(a, d, u._assets.textParse) : null) return !1;
                            if ((d.uploadFile || d.addMore) && !d.allowDuplicates) {
                                if ((a = u._itFl.filter(function(e, t) {
                                        if (e.file.name == n.name && e.file.size == n.size && e.file.type == n.type && (!n.lastModified || e.file.lastModified == n.lastModified)) return !0
                                    })).length > 0) {
                                    if (1 == u.files.length) return !1;
                                    n._pendRemove = !0
                                }
                            }
                            t += u.files[i].size
                        }
                        return !(null != d.maxSize && t >= Math.round(1048576 * d.maxSize) && (d.dialogs.alert(u._assets.textParse(d.captions.errors.filesSizeAll)), 1))
                    },
                    _thumbCreator: {
                        create: function(t) {
                            var i = u.files[t],
                                n = u._itFc ? u._itFc.id : t,
                                o = i.name,
                                a = i.size,
                                s = i.file,
                                l = i.type ? i.type.split("/", 1) : "".toString().toLowerCase(),
                                c = -1 != o.indexOf(".") ? o.split(".").pop().toLowerCase() : "",
                                p = d.uploadFile ? '<div class="jFiler-jProgressBar">' + d.templates.progressBar + "</div>" : "",
                                h = {
                                    id: n,
                                    name: o,
                                    size: a,
                                    size2: u._assets.bytesToSize(a),
                                    url: s,
                                    type: l,
                                    extension: c,
                                    icon: u._assets.getIcon(c, l),
                                    icon2: u._thumbCreator.generateIcon({
                                        type: l,
                                        extension: c
                                    }),
                                    image: '<div class="jFiler-item-thumb-image fi-loading"></div>',
                                    progressBar: p,
                                    _appended: i._appended
                                },
                                m = "";
                            return i.opts && (h = e.extend({}, i.opts, h)), m = e(u._thumbCreator.renderContent(h)).attr("data-jfiler-index", n), m.get(0).jfiler_id = n, u._thumbCreator.renderFile(i, m, h), i.forList ? m : (u._itFc.html = m, m.hide()[d.templates.itemAppendToEnd ? "appendTo" : "prependTo"](r.find(d.templates._selectors.list)).show(), void(i._appended || u._onSelect(t)))
                        },
                        renderContent: function(e) {
                            return u._assets.textParse(e._appended ? d.templates.itemAppend : d.templates.item, e)
                        },
                        renderFile: function(t, i, n) {
                            if (0 == i.find(".jFiler-item-thumb-image").length) return !1;
                            if (t.file && "image" == n.type) {
                                var o = '<img src="' + t.file + '" draggable="false" />',
                                    a = i.find(".jFiler-item-thumb-image.fi-loading");
                                return e(o).error(function() {
                                    o = u._thumbCreator.generateIcon(n), i.addClass("jFiler-no-thumbnail"), a.removeClass("fi-loading").html(o)
                                }).load(function() {
                                    a.removeClass("fi-loading").html(o)
                                }), !0
                            }
                            if (window.File && window.FileList && window.FileReader && "image" == n.type && n.size < 1e7) {
                                var s = new FileReader;
                                s.onload = function(e) {
                                    var t = i.find(".jFiler-item-thumb-image.fi-loading");
                                    if (d.templates.canvasImage) {
                                        var o = document.createElement("canvas"),
                                            a = o.getContext("2d"),
                                            s = new Image;
                                        s.onload = function() {
                                            var e = t.height(),
                                                i = t.width(),
                                                n = s.height / e,
                                                r = s.width / i,
                                                l = n < r ? n : r,
                                                c = s.height / l,
                                                d = s.width / l,
                                                u = Math.ceil(Math.log(s.width / d) / Math.log(2));
                                            if (o.height = e, o.width = i, s.width < o.width || s.height < o.height || u <= 1) {
                                                var p = s.width < o.width ? o.width / 2 - s.width / 2 : s.width > o.width ? -(s.width - o.width) / 2 : 0,
                                                    h = s.height < o.height ? o.height / 2 - s.height / 2 : 0;
                                                a.drawImage(s, p, h, s.width, s.height)
                                            } else {
                                                var m = document.createElement("canvas"),
                                                    f = m.getContext("2d");
                                                m.width = .5 * s.width, m.height = .5 * s.height, f.fillStyle = "#fff", f.fillRect(0, 0, m.width, m.height), f.drawImage(s, 0, 0, m.width, m.height), f.drawImage(m, 0, 0, .5 * m.width, .5 * m.height), a.drawImage(m, d > o.width ? d - o.width : 0, 0, .5 * m.width, .5 * m.height, 0, 0, d, c)
                                            }
                                            t.removeClass("fi-loading").html('<img src="' + o.toDataURL("image/png") + '" draggable="false" />')
                                        }, s.onerror = function() {
                                            i.addClass("jFiler-no-thumbnail"), t.removeClass("fi-loading").html(u._thumbCreator.generateIcon(n))
                                        }, s.src = e.target.result
                                    } else t.removeClass("fi-loading").html('<img src="' + e.target.result + '" draggable="false" />')
                                }, s.readAsDataURL(t)
                            } else {
                                var o = u._thumbCreator.generateIcon(n),
                                    a = i.find(".jFiler-item-thumb-image.fi-loading");
                                i.addClass("jFiler-no-thumbnail"), a.removeClass("fi-loading").html(o)
                            }
                        },
                        generateIcon: function(t) {
                            var i = new Array(3);
                            if (t && t.type && t.type[0] && t.extension) switch (t.type[0]) {
                                case "image":
                                    i[0] = "f-image", i[1] = '<i class="icon-jfi-file-image"></i>';
                                    break;
                                case "video":
                                    i[0] = "f-video", i[1] = '<i class="icon-jfi-file-video"></i>';
                                    break;
                                case "audio":
                                    i[0] = "f-audio", i[1] = '<i class="icon-jfi-file-audio"></i>';
                                    break;
                                default:
                                    i[0] = "f-file f-file-ext-" + t.extension, i[1] = t.extension.length > 0 ? "." + t.extension : "", i[2] = 1
                            } else i[0] = "f-file", i[1] = t.extension && t.extension.length > 0 ? "." + t.extension : "", i[2] = 1;
                            var n = '<span class="jFiler-icon-file ' + i[0] + '">' + i[1] + "</span>";
                            if (1 == i[2]) {
                                if (u._assets.text2Color(t.extension)) {
                                    var o = e(n).appendTo("body");
                                    o.css("background-color", u._assets.text2Color(t.extension)), n = o.prop("outerHTML"), o.remove()
                                }
                            }
                            return n
                        },
                        _box: function(t) {
                            if (null != d.beforeShow && "function" == typeof d.beforeShow && !d.beforeShow(u.files, r, a, s, o)) return !1;
                            if (r.length < 1) {
                                if (d.appendTo) i = e(d.appendTo);
                                else var i = a;
                                i.find(".jFiler-items").remove(), r = e('<div class="jFiler-items jFiler-row"></div>'), o.prop("jFiler").listEl = r, r.append(u._assets.textParse(d.templates.box)).appendTo(i), r.on("click", d.templates._selectors.remove, function(i) {
                                    i.preventDefault();
                                    var n = [t ? t.remove.event : i, t ? t.remove.el : e(this).closest(d.templates._selectors.item)],
                                        o = function(e) {
                                            u._remove(n[0], n[1])
                                        };
                                    d.templates.removeConfirmation ? d.dialogs.confirm(d.captions.removeConfirmation, o) : o()
                                })
                            }
                            for (var n = 0; n < u.files.length; n++) u.files[n]._appended || (u.files[n]._choosed = !0), u._addToMemory(n), u._thumbCreator.create(n)
                        }
                    },
                    _upload: function(t) {
                        var i = u._itFl[t],
                            n = i.html,
                            a = new FormData;
                        if (a.append(o.attr("name"), i.file, !!i.file.name && i.file.name), null != d.uploadFile.data && e.isPlainObject("function" == typeof d.uploadFile.data ? d.uploadFile.data(i.file) : d.uploadFile.data))
                            for (var s in d.uploadFile.data) a.append(s, d.uploadFile.data[s]);
                        u._ajax.send(n, a, i)
                    },
                    _ajax: {
                        send: function(t, i, n) {
                            return n.ajax = e.ajax({
                                url: d.uploadFile.url,
                                data: i,
                                type: d.uploadFile.type,
                                enctype: d.uploadFile.enctype,
                                xhr: function() {
                                    var i = e.ajaxSettings.xhr();
                                    return i.upload && i.upload.addEventListener("progress", function(e) {
                                        u._ajax.progressHandling(e, t)
                                    }, !1), i
                                },
                                complete: function(e, t) {
                                    n.ajax = !1, u._ajFc++, d.uploadFile.synchron && n.id + 1 < u._itFl.length && u._upload(n.id + 1), u._ajFc >= u.files.length && (u._ajFc = 0, o.get(0).value = "", null != d.uploadFile.onComplete && "function" == typeof d.uploadFile.onComplete && d.uploadFile.onComplete(r, a, s, o, e, t))
                                },
                                beforeSend: function(e, i) {
                                    return null == d.uploadFile.beforeSend || "function" != typeof d.uploadFile.beforeSend || d.uploadFile.beforeSend(t, r, a, s, o, n.id, e, i)
                                },
                                success: function(e, i, l) {
                                    n.uploaded = !0, null != d.uploadFile.success && "function" == typeof d.uploadFile.success && d.uploadFile.success(e, t, r, a, s, o, n.id, i, l)
                                },
                                error: function(e, i, l) {
                                    n.uploaded = !1, null != d.uploadFile.error && "function" == typeof d.uploadFile.error && d.uploadFile.error(t, r, a, s, o, n.id, e, i, l)
                                },
                                statusCode: d.uploadFile.statusCode,
                                cache: !1,
                                contentType: !1,
                                processData: !1
                            }), n.ajax
                        },
                        progressHandling: function(e, t) {
                            if (e.lengthComputable) {
                                var i = Math.round(100 * e.loaded / e.total).toString();
                                null != d.uploadFile.onProgress && "function" == typeof d.uploadFile.onProgress && d.uploadFile.onProgress(i, t, r, a, s, o), t.find(".jFiler-jProgressBar").find(d.templates._selectors.progressBar).css("width", i + "%")
                            }
                        }
                    },
                    _dragDrop: {
                        dragEnter: function(e) {
                            clearTimeout(u._dragDrop._drt), d.dragDrop.dragContainer.addClass("dragged"), u._set("feedback", d.captions.drop), null != d.dragDrop.dragEnter && "function" == typeof d.dragDrop.dragEnter && d.dragDrop.dragEnter(e, s, o, a)
                        },
                        dragLeave: function(e) {
                            clearTimeout(u._dragDrop._drt), u._dragDrop._drt = setTimeout(function(e) {
                                return u._dragDrop._dragLeaveCheck(e) ? (d.dragDrop.dragContainer.removeClass("dragged"), u._set("feedback", d.captions.feedback), void(null != d.dragDrop.dragLeave && "function" == typeof d.dragDrop.dragLeave && d.dragDrop.dragLeave(e, s, o, a))) : (u._dragDrop.dragLeave(e), !1)
                            }, 100, e)
                        },
                        drop: function(e) {
                            clearTimeout(u._dragDrop._drt), d.dragDrop.dragContainer.removeClass("dragged"), u._set("feedback", d.captions.feedback), e && e.originalEvent && e.originalEvent.dataTransfer && e.originalEvent.dataTransfer.files && e.originalEvent.dataTransfer.files.length > 0 && u._onChange(e, e.originalEvent.dataTransfer.files), null != d.dragDrop.drop && "function" == typeof d.dragDrop.drop && d.dragDrop.drop(e.originalEvent.dataTransfer.files, e, s, o, a)
                        },
                        _dragLeaveCheck: function(t) {
                            var i = e(t.currentTarget);
                            return !(!i.is(s) && s.find(i).length > 0)
                        }
                    },
                    _clipboardPaste: function(e, t) {
                        if ((t || e.originalEvent.clipboardData || e.originalEvent.clipboardData.items) && (!t || e.originalEvent.dataTransfer || e.originalEvent.dataTransfer.items) && !u._clPsePre) {
                            var i = t ? e.originalEvent.dataTransfer.items : e.originalEvent.clipboardData.items,
                                n = function(e, t, i) {
                                    t = t || "", i = i || 512;
                                    for (var n = atob(e), o = [], a = 0; a < n.length; a += i) {
                                        for (var s = n.slice(a, a + i), r = new Array(s.length), l = 0; l < s.length; l++) r[l] = s.charCodeAt(l);
                                        var c = new Uint8Array(r);
                                        o.push(c)
                                    }
                                    return new Blob(o, {
                                        type: t
                                    })
                                };
                            if (i)
                                for (var o = 0; o < i.length; o++)
                                    if (-1 !== i[o].type.indexOf("image") || -1 !== i[o].type.indexOf("text/uri-list")) {
                                        if (t) try {
                                            window.atob(e.originalEvent.dataTransfer.getData("text/uri-list").toString().split(",")[1])
                                        } catch (e) {
                                            return
                                        }
                                        var a = t ? n(e.originalEvent.dataTransfer.getData("text/uri-list").toString().split(",")[1], "image/png") : i[o].getAsFile();
                                        a.name = Math.random().toString(36).substring(5), a.name += -1 != a.type.indexOf("/") ? "." + a.type.split("/")[1].toString().toLowerCase() : ".png", u._onChange(e, [a]), u._clPsePre = setTimeout(function() {
                                            delete u._clPsePre
                                        }, 1e3)
                                    }
                        }
                    },
                    _onSelect: function(t) {
                        d.uploadFile && !e.isEmptyObject(d.uploadFile) && (!d.uploadFile.synchron || d.uploadFile.synchron && 0 == e.grep(u._itFl, function(e) {
                            return e.ajax
                        }).length) && u._upload(u._itFc.id), u.files[t]._pendRemove && (u._itFc.html.hide(), u._remove(null, {
                            binded: !0,
                            data: {
                                id: u._itFc.id
                            }
                        })), null != d.onSelect && "function" == typeof d.onSelect && d.onSelect(u.files[t], u._itFc.html, r, a, s, o), t + 1 >= u.files.length && null != d.afterShow && "function" == typeof d.afterShow && d.afterShow(r, a, s, o)
                    },
                    _onChange: function(t, i) {
                        if (i) {
                            if (!i || 0 == i.length) return u._set("input", ""), u._clear(), !1;
                            u.files = i
                        } else {
                            if (!o.get(0).files || void 0 === o.get(0).files || 0 == o.get(0).files.length) return d.uploadFile || d.addMore || (u._set("input", ""), u._clear()), !1;
                            u.files = o.get(0).files
                        }
                        if (d.uploadFile || d.addMore || u._reset(!0), o.prop("jFiler").files = u.files, !u._filesCheck() || null != d.beforeSelect && "function" == typeof d.beforeSelect && !d.beforeSelect(u.files, r, a, s, o)) return u._set("input", ""), u._clear(), d.addMore && l.length > 0 && (u._unbindInput(!0), l[l.length - 1].remove(), l.splice(l.length - 1, 1), o = l.length > 0 ? l[l.length - 1] : e(n), u._bindInput()), !1;
                        if (u._set("feedback", u.files.length + u._itFl.length + " " + d.captions.feedback2), d.showThumbs) u._thumbCreator._box();
                        else
                            for (var c = 0; c < u.files.length; c++) u.files[c]._choosed = !0, u._addToMemory(c), u._onSelect(c)
                    },
                    _append: function(e, t) {
                        var i = !!t && t.files;
                        if (i && !(i.length <= 0) && (u.files = i, o.prop("jFiler").files = u.files, d.showThumbs)) {
                            for (var n = 0; n < u.files.length; n++) u.files[n]._appended = !0;
                            u._thumbCreator._box()
                        }
                    },
                    _getList: function(e, t) {
                        var i = !!t && t.files;
                        if (i && !(i.length <= 0) && (u.files = i, o.prop("jFiler").files = u.files, d.showThumbs)) {
                            for (var n = [], l = 0; l < u.files.length; l++) u.files[l].forList = !0, n.push(u._thumbCreator.create(l));
                            t.callback && t.callback(n, r, a, s, o)
                        }
                    },
                    _retryUpload: function(t, i) {
                        var n = parseInt("object" == typeof i ? i.attr("data-jfiler-index") : i),
                            a = u._itFl.filter(function(e, t) {
                                return e.id == n
                            });
                        return a.length > 0 && (!d.uploadFile || e.isEmptyObject(d.uploadFile) || a[0].uploaded ? void 0 : (u._itFc = a[0], o.prop("jFiler").current_file = u._itFc, u._upload(n), !0))
                    },
                    _remove: function(t, n) {
                        if (n.binded) {
                            if (void 0 !== n.data.id && 0 == (n = r.find(d.templates._selectors.item + "[data-jfiler-index='" + n.data.id + "']")).length) return !1;
                            n.data.el && (n = n.data.el)
                        }
                        var l = function(t, n) {
                                var s = u._itFl[n],
                                    r = [];
                                if (s.file._choosed || s.file._appended || s.uploaded) {
                                    u._itFr.push(s);
                                    for (var l = u._itFl.filter(function(e) {
                                            return e.file.name == s.file.name
                                        }), c = 0; c < u._itFr.length; c++) d.addMore && u._itFr[c] == s && l.length > 0 && (u._itFr[c].remove_name = l.indexOf(s) + "://" + u._itFr[c].file.name), r.push(u._itFr[c].remove_name ? u._itFr[c].remove_name : u._itFr[c].file.name)
                                }(function(t) {
                                    var n = a.find("input[name^='jfiler-items-exclude-']:hidden").first();
                                    0 == n.length && (n = e('<input type="hidden" name="jfiler-items-exclude-' + (d.excludeName ? d.excludeName : ("[]" != o.attr("name").slice(-2) ? o.attr("name") : o.attr("name").substring(0, o.attr("name").length - 2)) + "-" + i) + '">')).appendTo(a), t && e.isArray(t) && (t = JSON.stringify(t), n.val(t))
                                })(r), u._itFl.splice(n, 1), u._itFl.length < 1 ? (u._reset(), u._clear()) : u._set("feedback", u._itFl.length + " " + d.captions.feedback2), t.fadeOut("fast", function() {
                                    e(this).remove()
                                })
                            },
                            c = n.get(0).jfiler_id || n.attr("data-jfiler-index"),
                            p = null;
                        for (var h in u._itFl) "length" !== h && u._itFl.hasOwnProperty(h) && u._itFl[h].id == c && (p = h);
                        return !!u._itFl.hasOwnProperty(p) && (u._itFl[p].ajax ? (u._itFl[p].ajax.abort(), void l(n, p)) : void(null != d.onRemove && "function" == typeof d.onRemove && !1 === d.onRemove(n, u._itFl[p].file, p, r, a, s, o) || l(n, p)))
                    },
                    _addToMemory: function(t) {
                        u._itFl.push({
                            id: u._itFl.length,
                            file: u.files[t],
                            html: e(),
                            ajax: !1,
                            uploaded: !1
                        }), (d.addMore || u.files[t]._appended) && (u._itFl[u._itFl.length - 1].input = o), u._itFc = u._itFl[u._itFl.length - 1], o.prop("jFiler").files_list = u._itFl, o.prop("jFiler").current_file = u._itFc
                    },
                    _assets: {
                        bytesToSize: function(e) {
                            if (0 == e) return "0 Byte";
                            var t = Math.floor(Math.log(e) / Math.log(1e3));
                            return (e / Math.pow(1e3, t)).toPrecision(3) + " " + ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"][t]
                        },
                        hasAttr: function(e, t) {
                            var i = (t = t || o).attr(e);
                            return !(!i || void 0 === i)
                        },
                        getIcon: function(t, i) {
                            return e.inArray(i, ["audio", "image", "text", "video"]) > -1 ? '<i class="icon-jfi-file-' + i + " jfi-file-ext-" + t + '"></i>' : '<i class="icon-jfi-file-o jfi-file-type-' + i + " jfi-file-ext-" + t + '"></i>'
                        },
                        textParse: function(t, i) {
                            switch (i = e.extend({}, {
                                limit: d.limit,
                                maxSize: d.maxSize,
                                fileMaxSize: d.fileMaxSize,
                                extensions: d.extensions ? d.extensions.join(",") : null
                            }, i && e.isPlainObject(i) ? i : {}, d.options), typeof t) {
                                case "string":
                                    return t.replace(/\{\{fi-(.*?)\}\}/g, function(e, t) {
                                        return (t = t.replace(/ /g, "")).match(/(.*?)\|limitTo\:(\d+)/) ? t.replace(/(.*?)\|limitTo\:(\d+)/, function(e, t, n) {
                                            var o = (t = i[t] ? i[t] : "").substring(0, n);
                                            return o = t.length > o.length ? o.substring(0, o.length - 3) + "..." : o
                                        }) : i[t] ? i[t] : ""
                                    });
                                case "function":
                                    return t(i);
                                default:
                                    return t
                            }
                        },
                        text2Color: function(e) {
                            if (!e || 0 == e.length) return !1;
                            for (var t = 0, i = 0; t < e.length; i = e.charCodeAt(t++) + ((i << 5) - i));
                            for (var t = 0, n = "#"; t < 3; n += ("00" + (i >> 2 * t++ & 255).toString(16)).slice(-2));
                            return n
                        }
                    },
                    files: null,
                    _itFl: [],
                    _itFc: null,
                    _itFr: [],
                    _itPl: [],
                    _ajFc: 0
                };
            return o.on("filer.append", function(e, t) {
                u._append(e, t)
            }).on("filer.remove", function(e, t) {
                t.binded = !0, u._remove(e, t)
            }).on("filer.reset", function(e) {
                return u._reset(), u._clear(), !0
            }).on("filer.generateList", function(e, t) {
                return u._getList(e, t)
            }).on("filer.retry", function(e, t) {
                return u._retryUpload(e, t)
            }), u.init(), this
        })
    }, e.fn.filer.defaults = {
        limit: null,
        maxSize: null,
        fileMaxSize: null,
        extensions: null,
        changeInput: !0,
        showThumbs: !1,
        appendTo: null,
        theme: "default",
        templates: {
            box: '<ul class="jFiler-items-list jFiler-items-default"></ul>',
            item: '<li class="jFiler-item"><div class="jFiler-item-container"><div class="jFiler-item-inner"><div class="jFiler-item-icon pull-left">{{fi-icon}}</div><div class="jFiler-item-info pull-left"><div class="jFiler-item-title" title="{{fi-name}}">{{fi-name | limitTo:30}}</div><div class="jFiler-item-others"><span>size: {{fi-size2}}</span><span>type: {{fi-extension}}</span><span class="jFiler-item-status">{{fi-progressBar}}</span></div><div class="jFiler-item-assets"><ul class="list-inline"><li><a class="icon-jfi-trash jFiler-item-trash-action"></a></li></ul></div></div></div></div></li>',
            itemAppend: '<li class="jFiler-item"><div class="jFiler-item-container"><div class="jFiler-item-inner"><div class="jFiler-item-icon pull-left">{{fi-icon}}</div><div class="jFiler-item-info pull-left"><div class="jFiler-item-title">{{fi-name | limitTo:35}}</div><div class="jFiler-item-others"><span>size: {{fi-size2}}</span><span>type: {{fi-extension}}</span><span class="jFiler-item-status"></span></div><div class="jFiler-item-assets"><ul class="list-inline"><li><a class="icon-jfi-trash jFiler-item-trash-action"></a></li></ul></div></div></div></div></li>',
            progressBar: '<div class="bar"></div>',
            itemAppendToEnd: !1,
            removeConfirmation: !0,
            canvasImage: !0,
            _selectors: {
                list: ".jFiler-items-list",
                item: ".jFiler-item",
                progressBar: ".bar",
                remove: ".jFiler-item-trash-action"
            }
        },
        files: null,
        uploadFile: null,
        dragDrop: null,
        addMore: !1,
        allowDuplicates: !1,
        clipBoardPaste: !0,
        excludeName: null,
        beforeRender: null,
        afterRender: null,
        beforeShow: null,
        beforeSelect: null,
        onSelect: null,
        onFileCheck: null,
        afterShow: null,
        onRemove: null,
        onEmpty: null,
        options: null,
        dialogs: {
            alert: function(e) {
                return alert(e)
            },
            confirm: function(e, t) {
                confirm(e) && t()
            }
        },
        captions: {
            button: "Choose Files",
            feedback: "Choose files To Upload",
            feedback2: "files were chosen",
            drop: "Drop file here to Upload",
            removeConfirmation: "Are you sure you want to remove this file?",
            errors: {
                filesLimit: "Only {{fi-limit}} files are allowed to be uploaded.",
                filesType: "Only Images are allowed to be uploaded.",
                filesSize: "{{fi-name}} is too large! Please upload file up to {{fi-fileMaxSize}} MB.",
                filesSizeAll: "Files you've choosed are too large! Please upload files up to {{fi-maxSize}} MB.",
                folderUpload: "You are not allowed to upload folders."
            }
        }
    }
}(jQuery), $(document).ready(function() {
    $("#filer_input2").filer({
        showThumbs: !0,
        uploadFile: {
            url: "core/php/upload.php",
            data: null,
            type: "POST",
            enctype: "multipart/form-data",
            beforeSend: function() {},
            success: function(e, t) {
                var i = t.find(".jFiler-jProgressBar").parent();
                t.find(".jFiler-jProgressBar").fadeOut("slow", function() {
                    $('<div class="jFiler-item-others text-success"><i class="icon-jfi-check-circle"></i> Success</div>').hide().appendTo(i).fadeIn("slow")
                })
            },
            error: function(e) {
                var t = e.find(".jFiler-jProgressBar").parent();
                e.find(".jFiler-jProgressBar").fadeOut("slow", function() {
                    $('<div class="jFiler-item-others text-error"><i class="icon-jfi-minus-circle"></i> Error</div>').hide().appendTo(t).fadeIn("slow")
                })
            },
            statusCode: null,
            onProgress: null,
            onComplete: null
        }
    });
    var e = $("#filer_input").filer({
            limit: null,
            maxSize: null,
            extensions: ["jpg", "jpeg", "png", "gif"],
            changeInput: '<div class="jFiler-input-dragDrop"><div class="jFiler-input-inner"><div class="jFiler-input-icon"><i class="icon-jfi-cloud-up-o"></i></div><div class="jFiler-input-text"><h3>Drag&Drop files here</h3> <span style="display:inline-block; margin: 15px 0">or</span></div><a class="jFiler-input-choose-btn blue">Browse Files</a></div></div>',
            showThumbs: !1,
            theme: "dragdropbox",
            appendTo: "#pix_img_edit_gallery",
            templates: {
                box: '<ul class="jFiler-items-list jFiler-items-grid"></ul>',
                item: '<li class="jFiler-item">                        <div class="jFiler-item-container">                            <div class="jFiler-item-inner">                                <div class="jFiler-item-thumb">                                    <div class="jFiler-item-status"></div>                                    <div class="jFiler-item-info">                                        <span class="jFiler-item-title"><b title="{{fi-name}}">{{fi-name | limitTo: 25}}</b></span>                                        <span class="jFiler-item-others">{{fi-size2}}</span>                                    </div>                                    {{fi-image}}                                </div>                                <div class="jFiler-item-assets jFiler-row">                                    <ul class="list-inline pull-left">                                        <li>{{fi-progressBar}}</li>                                    </ul>                                    <ul class="list-inline pull-right">                                        <li><a class="icon-jfi-trash jFiler-item-trash-action"></a></li>                                    </ul>                                </div>                            </div>                        </div>                    </li>',
                itemAppend: '<div class="col-xs-6 col-md-15 pix_img_div"><a href="#" class="thumbnail clicked"><li class="jFiler-item">                            <div class="jFiler-item-container">                                <div class="jFiler-item-inner">                                    <div class="jFiler-item-thumb">                                        <div class="jFiler-item-status"></div>                                        <div class="jFiler-item-info">                                            <span class="jFiler-item-title"><b title="{{fi-name}}">{{fi-name | limitTo: 25}}</b></span>                                            <span class="jFiler-item-others">{{fi-size2}}</span>                                        </div>                                        {{fi-image}}                                    </div>                                    <div class="jFiler-item-assets jFiler-row">                                        <ul class="list-inline pull-left">                                            <li><span class="jFiler-item-others">{{fi-icon}}</span></li>                                        </ul>                                        <ul class="list-inline pull-right">                                            <li><a class="icon-jfi-trash jFiler-item-trash-action"></a></li>                                        </ul>                                    </div>                                </div>                            </div>                        </li></a></div>',
                progressBar: '<div class="bar"></div>',
                itemAppendToEnd: !1,
                removeConfirmation: !0,
                _selectors: {
                    list: ".jFiler-items-list",
                    item: ".jFiler-item",
                    progressBar: ".bar",
                    remove: ".jFiler-item-trash-action"
                }
            },
            dragDrop: {
                dragEnter: null,
                dragLeave: null,
                drop: null
            },
            uploadFile: {
                url: "upload_image",
                data: null,
                type: "POST",
                enctype: "multipart/form-data",
                beforeSend: function() {},
                success: function(e, t) {
                    console.log("test ok");
                    var i = t.find(".jFiler-jProgressBar").parent();
                    t.find(".jFiler-jProgressBar").fadeOut("slow", function() {
                        $('<div class="jFiler-item-others text-success"><i class="icon-jfi-check-circle"></i> Success</div>').hide().appendTo(i).fadeIn("slow")
                    });
                    var n = JSON.parse(e);
                    $("#pix_img_edit_gallery a").removeClass("clicked");
                    var o = $('<div class="col-xs-6 col-md-15 pix_img_div"><a href="#" class="pix_g_img clicked"><img src="uploads/' + n.metas[0].name + '"></a><a href="#" class="pix_del_img_btn" data-name="' + n.metas[0].name + '">DELETE</a></div>');
                    $("#pix_img_edit_gallery").prepend(o), $('#edit_image_tabs a[href="#pix_imgedit_gallery"]').tab("show"), gallery_click_img(), gallery_delete_img()
                },
                error: function(t) {
                    console.log("reset"), e.reset();
                    var i = t.find(".jFiler-jProgressBar").parent();
                    t.find(".jFiler-jProgressBar").fadeOut("slow", function() {
                        $('<div class="jFiler-item-others text-error"><i class="icon-jfi-minus-circle"></i> Error</div>').hide().appendTo(i).fadeIn("slow")
                    })
                },
                statusCode: null,
                onProgress: null,
                onComplete: null
            },
            files: null,
            addMore: !1,
            clipBoardPaste: !0,
            excludeName: null,
            beforeRender: null,
            afterRender: null,
            beforeShow: null,
            beforeSelect: null,
            onSelect: null,
            afterShow: null,
            onRemove: function(e, t, i, n, o, a, s) {
                t = t.name
            },
            onEmpty: null,
            options: null,
            captions: {
                button: "Choose Files",
                feedback: "Choose files To Upload",
                feedback2: "files were chosen",
                drop: "Drop file here to Upload",
                removeConfirmation: "Are you sure you want to remove this file?",
                errors: {
                    filesLimit: "Only {{fi-limit}} files are allowed to be uploaded.",
                    filesType: "Only Images are allowed to be uploaded.",
                    filesSize: "{{fi-name}} is too large! Please upload file up to {{fi-maxSize}} MB.",
                    filesSizeAll: "Files you've choosed are too large! Please upload files up to {{fi-maxSize}} MB."
                }
            }
        }),
        t = $("#filer_gallery_input").filer({
            limit: null,
            maxSize: null,
            extensions: null,
            changeInput: '<div class="jFiler-input-dragDrop"><div class="jFiler-input-inner"><div class="jFiler-input-icon"><i class="icon-jfi-cloud-up-o"></i></div><div class="jFiler-input-text"><h3>Drag&Drop files here</h3> <span style="display:inline-block; margin: 15px 0">or</span></div><a class="jFiler-input-choose-btn blue">Browse Files</a></div></div>',
            showThumbs: !0,
            theme: "dragdropbox",
            appendTo: "#pix_img_edit_gallery",
            templates: {
                box: '<ul class="jFiler-items-list jFiler-items-grid"></ul>',
                item: '<li class="jFiler-item">                        <div class="jFiler-item-container">                            <div class="jFiler-item-inner">                                <div class="jFiler-item-thumb">                                    <div class="jFiler-item-status"></div>                                    <div class="jFiler-item-info">                                        <span class="jFiler-item-title"><b title="{{fi-name}}">{{fi-name | limitTo: 25}}</b></span>                                        <span class="jFiler-item-others">{{fi-size2}}</span>                                    </div>                                    {{fi-image}}                                </div>                                <div class="jFiler-item-assets jFiler-row">                                    <ul class="list-inline pull-left">                                        <li>{{fi-progressBar}}</li>                                    </ul>                                    <ul class="list-inline pull-right">                                        <li><a class="icon-jfi-trash jFiler-item-trash-action"></a></li>                                    </ul>                                </div>                            </div>                        </div>                    </li>',
                itemAppend: '<div class="col-xs-6 col-md-15 pix_img_div"><a href="#" class="thumbnail clicked"><li class="jFiler-item">                            <div class="jFiler-item-container">                                <div class="jFiler-item-inner">                                    <div class="jFiler-item-thumb">                                        <div class="jFiler-item-status"></div>                                        <div class="jFiler-item-info">                                            <span class="jFiler-item-title"><b title="{{fi-name}}">{{fi-name | limitTo: 25}}</b></span>                                            <span class="jFiler-item-others">{{fi-size2}}</span>                                        </div>                                        {{fi-image}}                                    </div>                                    <div class="jFiler-item-assets jFiler-row">                                        <ul class="list-inline pull-left">                                            <li><span class="jFiler-item-others">{{fi-icon}}</span></li>                                        </ul>                                        <ul class="list-inline pull-right">                                            <li><a class="icon-jfi-trash jFiler-item-trash-action"></a></li>                                        </ul>                                    </div>                                </div>                            </div>                        </li></a></div>',
                progressBar: '<div class="bar"></div>',
                itemAppendToEnd: !1,
                removeConfirmation: !0,
                _selectors: {
                    list: ".jFiler-items-list",
                    item: ".jFiler-item",
                    progressBar: ".bar",
                    remove: ".jFiler-item-trash-action"
                }
            },
            dragDrop: {
                dragEnter: null,
                dragLeave: null,
                drop: null
            },
            uploadFile: {
                url: "upload_image",
                data: null,
                type: "POST",
                enctype: "multipart/form-data",
                beforeSend: function() {},
                success: function(e, t) {
                    var i = t.find(".jFiler-jProgressBar").parent();
                    t.find(".jFiler-jProgressBar").fadeOut("slow", function() {
                        $('<div class="jFiler-item-others text-success"><i class="icon-jfi-check-circle"></i> Success</div>').hide().appendTo(i).fadeIn("slow")
                    });
                    var n = JSON.parse(e);
                    $("#pix_gallery_imgs a").removeClass("clicked");
                    var o = $('<div class="col-xs-6 col-md-15 pix_img_div"><a href="#" class="pix_g_img clicked"><img src="uploads/' + n.metas[0].name + '"></a><a href="#" class="pix_del_img_btn" data-name="' + n.metas[0].name + '">DELETE</a></div>');
                    $("#pix_gallery_imgs").prepend(o), o.toggleClass("clicked"), $('#pix_gallery_image_tabs a[href="#pix_gallery_gallery"]').tab("show"), gallery_click_img(), gallery_delete_img()
                },
                error: function(e) {
                    t.reset();
                    var i = e.find(".jFiler-jProgressBar").parent();
                    e.find(".jFiler-jProgressBar").fadeOut("slow", function() {
                        $('<div class="jFiler-item-others text-error"><i class="icon-jfi-minus-circle"></i> Error</div>').hide().appendTo(i).fadeIn("slow")
                    })
                },
                statusCode: null,
                onProgress: null,
                onComplete: null
            },
            files: null,
            addMore: !1,
            clipBoardPaste: !0,
            excludeName: null,
            beforeRender: null,
            afterRender: null,
            beforeShow: null,
            beforeSelect: null,
            onSelect: null,
            afterShow: null,
            onRemove: function(e, t, i, n, o, a, s) {
                t = t.name;
                $.post("core/php/remove_file.php", {
                    file: t
                })
            },
            onEmpty: null,
            options: null,
            captions: {
                button: "Choose Files",
                feedback: "Choose files To Upload",
                feedback2: "files were chosen",
                drop: "Drop file here to Upload",
                removeConfirmation: "Are you sure you want to remove this file?",
                errors: {
                    filesLimit: "Only {{fi-limit}} files are allowed to be uploaded.",
                    filesType: "Only Images are allowed to be uploaded.",
                    filesSize: "{{fi-name}} is too large! Please upload file up to {{fi-maxSize}} MB.",
                    filesSizeAll: "Files you've choosed are too large! Please upload files up to {{fi-maxSize}} MB."
                }
            }
        })
});
var pix_menu_section, updateOutput = function(e) {
        var t = e.length ? e : $(e.target),
            i = t.data("output");
        window.JSON ? i && i.val(window.JSON.stringify(t.nestable("serialize"))) : alert("JSON browser support required for this page.")
    },
    updateSection = function(e, t, i) {
        var n = e.length ? e : $(e.target),
            o = n.data("output");
        window.JSON ? o && (o.val(window.JSON.stringify(n.nestable("serialize"))), t.find(".pix-header-nav") && t.find(".pix-header-nav").html(pix_gen_navbar(JSON.parse(window.JSON.stringify(n.nestable("serialize")))))) : alert("JSON browser support required for this page.")
    },
    nestableList = $("#nestable > .dd-list"),
    deleteFromMenuHelper = function(e) {
        1 == e.data("new") ? e.fadeOut(function() {
            e.remove()
        }) : (e.appendTo(nestableList), e.data("deleted", "1"), e.fadeOut())
    },
    deleteFromMenu = function() {
        var e = $(this).data("owner-id"),
            t = $('[data-menu-id="' + e + '"]');
        $.confirm({
            title: "Delete Menu Link",
            boxWidth: "600px",
            theme: "pix-default-modal",
            useBootstrap: !1,
            backgroundDismiss: !0,
            content: "Delete " + t.data("name") + " and all its subitems ?",
            buttons: {
                cancel: function() {},
                confirmDelete: {
                    text: "Delete",
                    btnClass: "btn-blue",
                    keys: ["enter"],
                    action: function() {
                        t.find("li").each(function() {
                            deleteFromMenuHelper($(this))
                        }), deleteFromMenuHelper(t)
                    }
                }
            }
        })
    },
    prepareEdit = function() {
        var e = $(this).data("owner-id"),
            t = $('[data-menu-id="' + e + '"]'),
            i = $("#menu-editor"),
            n = $("#editButton"),
            o = $("#editInputName"),
            a = $("#editInputSlug"),
            s = $("#currentEditName");
        o.val(t.data("name")), a.val(t.data("slug")), a.trigger("change"), s.html(t.data("name")), n.data("owner-id", t.data("menu-id")), $(".pix_menu_sidebar_ul li").removeClass("active"), $(".pix_menu_sidebar_tabs .tab-pane").removeClass("active"), $(".pix_menu_sidebar_ul li.pix_menu_link_li").addClass("active"), $(".pix_menu_sidebar_tabs #pix_type_link").addClass("active"), console.log("[INFO] Editing Menu Item " + n.data("owner-id")), i.fadeIn(), $("#pix-right-sidebar .pix_right_main").addClass("slided"), $("#pix-right-sidebar #pix_menu_edit_slide").addClass("opened")
    },
    editMenuItem = function() {
        var e = $("#menu-editor"),
            t = $("#editInputName"),
            i = $("#editInputSlug"),
            n = $(this).data("owner-id"),
            o = $('[data-menu-id="' + n + '"]'),
            a = t.val(),
            s = i.val();
        o.data("name", a), o.data("slug", s), o.find("> .dd-handle").html(a), e.fadeOut(), updateOutput($("#nestable").data("output", $("#json-output"))), $("#pix-right-sidebar #pix_menu_edit_slide").removeClass("opened"), $("#pix-right-sidebar .pix_right_main").removeClass("slided")
    },
    newIdCount = 1,
    addToMenu = function(e) {
        nestableList = $("#nestable > .dd-list");
        var t = $("#addInputName").val(),
            i = $("#addInputSlug").val(),
            n = "new-" + newIdCount;
        nestableList.append('<li class="dd-item" data-menu-id="' + n + '" data-class="pix-gray pix-nav-link"data-name="' + t + '" data-slug="' + i + '" data-new="1" data-deleted="0"><div class="dd-handle">' + t + '</div> <span class="button-delete btn btn-default btn-xs pull-right" data-owner-id="' + n + '"> <i class="material-icons">delete</i> </span><span class="button-edit btn btn-default btn-xs pull-right" data-owner-id="' + n + '"><i class="material-icons">edit</i></span></li>'), newIdCount++, $("#nestable .button-delete").on("click", deleteFromMenu), $("#nestable .button-edit").on("click", prepareEdit), $("#pix-right-sidebar #pix_menu_add_slide").removeClass("opened"), $("#pix-right-sidebar .pix_right_main").removeClass("slided")
    };
$(function() {
    $("#pix-right-sidebar #pix_menu_add_slide").removeClass("opened"), $("#pix-right-sidebar .pix_right_main").removeClass("slided")
}), $(window).load(function() {
    $("#pix_popups .pix_img_div").on("click", "a", function(e) {
        $("#pix_popups a").not(this).removeClass("clicked"), $(this).toggleClass("clicked"), e.preventDefault()
    }), $("#pix_add_popup").on("click", function(e) {
        if (e.preventDefault(), $("#pix_popups a.clicked").length > 0) {
            var t = $("#pix_popups a.clicked").attr("data-popup-id");
            $.ajax({
                url: "demo/get_popup/" + t,
                success: function(e) {
                    if (e && "logout" != e) {
                        var t = /<body.*?>([\s\S]*)<\/body>/.exec(e)[1],
                            i = $("<div>").append($(t)),
                            n = "popup_" + find_new_id("popup", "num");
                        i.find(".modal").attr("id", n), i.find(".modal").attr("data-name", n), t = "\n" + i.html(), $("#pixGrid").pixbuilder("deinit"), $("#pixGrid").append(t), $("#pixGrid").pixbuilder("init"), $("form.pixfort-form").sortable({
                            handle: ".pix_handle",
                            start: pix_sortStart
                        }), preview_btn_check()
                    } else login_popup()
                }
            })
        }
    })
});