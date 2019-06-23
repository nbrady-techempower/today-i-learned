(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    21: function(e, t, n) {
      e.exports = n(37);
    },
    26: function(e, t, n) {},
    37: function(e, t, n) {
      "use strict";
      n.r(t);
      var a = n(0),
        r = n.n(a),
        o = n(13),
        l = n.n(o),
        i = (n(26), n(2)),
        m = n(1),
        c = n(5),
        s = r.a.createContext();
      function u(e) {
        var t = Object(a.useState)({}),
          n = Object(c.a)(t, 2),
          o = n[0];
        n[1];
        return r.a.createElement(s.Provider, { value: o }, e.children);
      }
      var d = n(3),
        g = {
          blogTitle: "Today I Learned",
          author: "Nate Brady",
          authorImg: "/assets/images/author.png",
          authorQuote: "Today I learned everything I forgot yesterday.",
          twitterLink: "https://twitter.com/natebrady23",
          githubLink: "https://github.com/nbrady-techempower"
        },
        f = [
          {
            title: "Oh, I Didn't See You There",
            date: "June 22, 2019",
            preview: "Just kidding; I did see you.",
            slug: "i-did-see-you"
          }
        ];
      function b() {
        var e = Object(i.a)([
          "\n  margin-bottom: 5rem;\n  img {\n    margin-right: 0.875rem;\n    margin-bottom: 0;\n    width: 3.5rem;\n    height: 3.5rem;\n    border-radius: 50%;\n  }\n"
        ]);
        return (
          (b = function() {
            return e;
          }),
          e
        );
      }
      function h() {
        return r.a.createElement(
          p,
          { className: "flex-row colored-links" },
          r.a.createElement("img", { src: g.authorImg, alt: g.author }),
          r.a.createElement(
            "div",
            { className: "flex-col flex-jcc" },
            r.a.createElement(
              "div",
              { className: "mb-5" },
              "A blog by ",
              r.a.createElement("a", { href: g.twitterLink }, g.author)
            ),
            r.a.createElement("div", null, g.authorQuote)
          )
        );
      }
      var p = d.a.div(b());
      function v() {
        var e = Object(i.a)([
          "\n  .blog-name {\n    color: white;\n    font-size: 2rem;\n    line-height: 2.6rem;\n    margin-bottom: 2.25rem;\n  }\n  .post {\n    margin-bottom: 3.5rem;\n    .post-title {\n      color: #d47ee9;\n      font-size: 1.65rem;\n      margin-bottom: 0.6rem;\n    }\n    .post-stats {\n      font-size: 0.8rem;\n      margin-bottom: 0.6rem;\n    }\n  }\n"
        ]);
        return (
          (v = function() {
            return e;
          }),
          e
        );
      }
      function E(e) {
        return r.a.createElement(
          w,
          null,
          r.a.createElement(
            "div",
            { className: "title-font blog-name" },
            g.blogTitle
          ),
          r.a.createElement(h, null),
          f.map(function(e, t) {
            return r.a.createElement(
              "div",
              { className: "post", key: t },
              r.a.createElement(
                "div",
                { className: "title-font post-title" },
                r.a.createElement(m.a, { to: "/" + e.slug }, e.title)
              ),
              r.a.createElement(
                "div",
                { className: "post-stats flex-row flex-aic" },
                r.a.createElement("div", { className: "date" }, e.date)
              ),
              r.a.createElement("div", { className: "preview" }, e.preview)
            );
          })
        );
      }
      var w = d.a.div(v()),
        x = n(11),
        N = n.n(x),
        y = n(17),
        k = n(18),
        j = n.n(k);
      function O() {
        var e = Object(i.a)([
          "\n  .blog-title {\n    color: #d47ee9;\n    font-size: 1.3rem;\n    margin-bottom: 4.5rem;\n  }\n  .blog-title-bottom {\n    margin-bottom: 2rem;\n  }\n  .post-header {\n    margin-bottom: 3rem;\n    .post-title {\n      font-size: 2.3rem;\n      margin-bottom: 0.5rem;\n      color: white;\n    }\n    .date {\n      font-size: 0.8rem;\n    }\n  }\n  .post-text {\n    line-height: 1.8rem;\n    margin-bottom: 4.5rem;\n    img {\n      display: flex;\n      margin-left: auto;\n      margin-right: auto;\n      margin-top: 2rem;\n      margin-bottom: 2rem;\n    }\n  }\n"
        ]);
        return (
          (O = function() {
            return e;
          }),
          e
        );
      }
      function I(e) {
        var t = e.blog,
          n = e.nextBlog,
          o = e.prevBlog,
          l = Object(a.useState)(),
          i = Object(c.a)(l, 2),
          s = i[0],
          u = i[1];
        return (
          Object(a.useEffect)(
            function() {
              function e() {
                return (e = Object(y.a)(
                  N.a.mark(function e() {
                    var n;
                    return N.a.wrap(function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              fetch(
                                "/assets/blogs/".concat(t.slug, "/index.md")
                              )
                            );
                          case 2:
                            return (
                              (n = e.sent), (e.t0 = u), (e.next = 6), n.text()
                            );
                          case 6:
                            (e.t1 = e.sent), (0, e.t0)(e.t1);
                          case 8:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )).apply(this, arguments);
              }
              !(function() {
                e.apply(this, arguments);
              })();
            },
            [t.slug]
          ),
          r.a.createElement(
            T,
            null,
            r.a.createElement(
              "div",
              { className: "blog-title title-font" },
              r.a.createElement(m.a, { to: "/" }, g.blogTitle)
            ),
            r.a.createElement(
              "div",
              { className: "post-header" },
              r.a.createElement(
                "div",
                { className: "post-title title-font" },
                t.title
              ),
              r.a.createElement("div", { className: "date" }, t.date)
            ),
            s &&
              r.a.createElement("div", {
                className: "post-text colored-links",
                dangerouslySetInnerHTML: { __html: j()(s) }
              }),
            r.a.createElement(
              "div",
              { className: "blog-title title-font blog-title-bottom" },
              r.a.createElement(m.a, { to: "/" }, g.blogTitle)
            ),
            r.a.createElement(h, null),
            r.a.createElement(
              "div",
              { className: "more-posts flex-row-wrap colored-links" },
              o &&
                r.a.createElement(
                  "div",
                  { className: "flex-1" },
                  r.a.createElement(m.a, { to: o.slug }, "\u2190 ", o.title)
                ),
              n &&
                r.a.createElement(
                  "div",
                  { className: "flex-1" },
                  r.a.createElement(m.a, { to: n.slug }, n.title, " \u2192")
                )
            )
          )
        );
      }
      var T = d.a.div(O());
      function L() {
        var e = Object(i.a)([
          "\n  .colored-links {\n    a {\n      color: #d47ee9;\n      box-shadow: 0 1px 0 0 #d47ee9;\n    }\n  }\n  footer {\n    margin-top: 3rem;\n    margin-bottom: 3rem;\n  }\n"
        ]);
        return (
          (L = function() {
            return e;
          }),
          e
        );
      }
      var z = d.a.div(L());
      l.a.render(
        r.a.createElement(function(e) {
          return r.a.createElement(
            u,
            null,
            r.a.createElement(
              z,
              { className: "h-100 flex-col" },
              r.a.createElement(
                m.b,
                { className: "flex-1" },
                r.a.createElement(E, { path: "/" }),
                f.map(function(e, t, n) {
                  return r.a.createElement(I, {
                    key: t,
                    path: "/".concat(e.slug),
                    blog: e,
                    nextBlog: n[t - 1],
                    prevBlog: n[t + 1]
                  });
                })
              ),
              r.a.createElement(
                "footer",
                { className: "colored-links" },
                r.a.createElement("a", { href: g.twitterLink }, "Twitter"),
                " \u2022 ",
                r.a.createElement("a", { href: g.githubLink }, "GitHub")
              )
            )
          );
        }, null),
        document.getElementById("root")
      );
    }
  },
  [[21, 1, 2]]
]);
//# sourceMappingURL=main.05aa080b.chunk.js.map