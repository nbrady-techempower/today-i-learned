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
      var g = n(3),
        d = {
          blogTitle: "Today I Learned",
          author: "Nate Brady",
          authorImg: "/assets/images/author.png",
          authorQuote: "Today I learned everything I forgot yesterday.",
          twitterLink: "https://twitter.com/natebrady23",
          githubLink: "https://github.com/nbrady-techempower"
        },
        h = [
          {
            title: "AWS S3 Website with HTTPS",
            date: "June 23, 2019",
            preview: "Simple setup to serve your static site over https.",
            slug: "aws-s3-https",
            tags: ["aws", "s3", "ssl"]
          },
          {
            title: "Oh, I Didn't See You There",
            date: "June 22, 2019",
            preview: "Just kidding; I did see you.",
            slug: "i-did-see-you",
            tags: ["potpourri"]
          }
        ];
      function f() {
        var e = Object(i.a)([
          "\n  margin-bottom: 5rem;\n  img {\n    margin-right: 0.875rem;\n    margin-bottom: 0;\n    width: 3.5rem;\n    height: 3.5rem;\n    border-radius: 50%;\n  }\n"
        ]);
        return (
          (f = function() {
            return e;
          }),
          e
        );
      }
      function p() {
        return r.a.createElement(
          b,
          { className: "flex-row colored-links" },
          r.a.createElement("img", { src: d.authorImg, alt: d.author }),
          r.a.createElement(
            "div",
            { className: "flex-col flex-jcc" },
            r.a.createElement(
              "div",
              { className: "mb-5" },
              "A blog by ",
              r.a.createElement("a", { href: d.twitterLink }, d.author)
            ),
            r.a.createElement("div", null, d.authorQuote)
          )
        );
      }
      var b = g.a.div(f());
      function v() {
        var e = Object(i.a)([
          "\n  header {\n    color: white;\n    font-size: 2rem;\n    line-height: 2.6rem;\n    margin-bottom: 2.25rem;\n    img {\n      height: 38px;\n      margin-top: 10px;\n    }\n  }\n  .post {\n    margin-bottom: 3.5rem;\n    .post-title {\n      color: #d47ee9;\n      font-size: 1.65rem;\n      margin-bottom: 0.6rem;\n    }\n    .post-stats {\n      font-size: 0.8rem;\n      margin-bottom: 0.6rem;\n    }\n  }\n"
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
          x,
          null,
          r.a.createElement(
            "header",
            { className: "flex-row flex-jcc flex-aic" },
            r.a.createElement(
              "div",
              { className: "title-font blog-name flex-1" },
              d.blogTitle
            ),
            r.a.createElement(
              m.a,
              { to: "/light-theme" },
              r.a.createElement("img", {
                src: "/assets/images/theme-toggle.png",
                alt: "theme toggle"
              })
            )
          ),
          r.a.createElement(p, null),
          h.map(function(e, t) {
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
      var x = g.a.div(v()),
        w = n(11),
        N = n.n(w),
        y = n(17),
        k = n(18),
        j = n.n(k);
      function T() {
        var e = Object(i.a)([
          "\n  .blog-title {\n    color: #d47ee9;\n    font-size: 1.3rem;\n    margin-bottom: 4.5rem;\n  }\n  .blog-title-bottom {\n    margin-bottom: 2rem;\n  }\n  .post-header {\n    margin-bottom: 3rem;\n    .post-title {\n      font-size: 2.3rem;\n      margin-bottom: 0.5rem;\n      color: white;\n    }\n    .date {\n      font-size: 0.8rem;\n    }\n  }\n  .post-text {\n    line-height: 1.8rem;\n    margin-bottom: 4.5rem;\n    img {\n      display: flex;\n      margin-left: auto;\n      margin-right: auto;\n      margin-top: 2rem;\n      margin-bottom: 2rem;\n      max-width: 90%;\n    }\n    code {\n      font-size: 1.2rem;\n      background-color: #373c49;\n      border-radius: 3px;\n      padding: 0.2rem 0.4rem;\n    }\n  }\n"
        ]);
        return (
          (T = function() {
            return e;
          }),
          e
        );
      }
      function O(e) {
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
            I,
            null,
            r.a.createElement(
              "div",
              { className: "blog-title title-font" },
              r.a.createElement(m.a, { to: "/" }, d.blogTitle)
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
              r.a.createElement(m.a, { to: "/" }, d.blogTitle)
            ),
            r.a.createElement(p, null),
            r.a.createElement(
              "div",
              { className: "more-posts flex-row-wrap colored-links" },
              o &&
                r.a.createElement(
                  "div",
                  { className: "flex-1" },
                  r.a.createElement(
                    m.a,
                    { to: "/" + o.slug },
                    "\u2190 ",
                    o.title
                  )
                ),
              n &&
                r.a.createElement(
                  "div",
                  { className: "flex-1" },
                  r.a.createElement(
                    m.a,
                    { to: "/" + n.slug },
                    n.title,
                    " \u2192"
                  )
                )
            )
          )
        );
      }
      var I = g.a.div(T());
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
      var S = g.a.div(L());
      l.a.render(
        r.a.createElement(function(e) {
          return r.a.createElement(
            u,
            null,
            r.a.createElement(
              S,
              { className: "h-100 flex-col" },
              r.a.createElement(
                m.b,
                { className: "flex-1" },
                r.a.createElement(E, { path: "/" }),
                r.a.createElement(O, {
                  key: -1,
                  path: "/light-theme",
                  blog: {
                    title: "A Light Theme?",
                    date: "Never",
                    slug: "light-theme"
                  }
                }),
                h.map(function(e, t, n) {
                  return r.a.createElement(O, {
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
                r.a.createElement("a", { href: d.twitterLink }, "Twitter"),
                " \u2022 ",
                r.a.createElement("a", { href: d.githubLink }, "GitHub")
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
//# sourceMappingURL=main.6d01f649.chunk.js.map
