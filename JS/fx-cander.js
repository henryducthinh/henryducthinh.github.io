var createCalendarWidget = function(a) {
        var b = this,
            f = a.width || 0,
            h = a.height || 0,
            k = parseInt(a.mode) || 1,
            d = a.dateformat,
            g, e = "";
        b.lang = "en";
        b.containerId = a.id || "economicCalendarWidget";
        if (a = a.lang || document.documentElement.lang) a = a.replace(/\s/g, "").substring(0, 2).toLowerCase(), -1 !== "ru,en,zh,es,pt,ja,de,tr".indexOf(a) && (b.lang = a);
        e = window.location.hostname;
        this.createSrc = function() { return "https://www.tradays.com/" + b.lang + "/economic-calendar/widget?mode=" + k + (d ? "&dateFormat=" + d : "") };
        this.createFrame = function() {
            var a =
                document.createElement("iframe");
            a.setAttribute("scrolling", "no");
            a.setAttribute("allowtransparency", !0);
            a.setAttribute("frameborder", 0);
            a.width = f;
            a.height = h;
            a.setAttribute("src", b.createSrc() + "&utm_source=" + e);
            return a
        };
        this.create = function() {
            function a() {
                if (!f) {
                    g = document.getElementById(b.containerId);
                    if (!g) return !1;
                    c = g.parentNode;
                    "head" === c.tagName.toLowerCase() ? (document.body ? c = document.body : (c = document.createElement("body"), document.documentElement.appendChild(c)), c.appendChild(b.createFrame())) :
                        c.insertBefore(b.createFrame(), g);
                    clearInterval(d);
                    f = !0
                }
            }
            var f = !1,
                c, d;
            if (document.addEventListener) document.addEventListener("DOMContentLoaded", a, !1), window.addEventListener("load", a, !1);
            else if (window.attachEvent) {
                window.attachEvent("onload", a);
                var e = document.createElement("div");
                try { var h = null === window.frameElement } catch (l) {}
                e.doScroll && h && window.external && (d = setInterval(function() { try { e.doScroll(), a() } catch (l) {} }, 30))
            }
            "complete" === document.readyState && a()
        }
    },
    economicCalendar = function(a) {
        createCalendarWidget.apply(this,
            arguments);
        this.create()
    },
    economicCalendarEvent = function(a) {
        createCalendarWidget.apply(this, arguments);
        var b = this;
        this.mode = parseInt(a.mode) || 0;
        this.showTitle = parseInt(a.showTitle) || !1;
        this.id = parseInt(a.id) || 0;
        this.containerId = "economicCalendarEventWidget";
        this.createSrc = function() {
            var a = "";
            b.mode && (a += "?displayMode=" + b.mode);
            b.showTitle && (a += (b.mode ? "&" : "?") + "showTitle=1");
            return "https://www.tradays.com/" + b.lang + "/economic-calendar/widget/event/" + b.id + a
        };
        this.create()
    };