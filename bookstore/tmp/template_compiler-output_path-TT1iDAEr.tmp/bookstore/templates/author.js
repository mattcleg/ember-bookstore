export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      meta: {
        "revision": "Ember@2.7.0",
        "loc": {
          "source": null,
          "start": {
            "line": 7,
            "column": 4
          },
          "end": {
            "line": 9,
            "column": 4
          }
        },
        "moduleName": "bookstore/templates/author.hbs"
      },
      isEmpty: false,
      arity: 1,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("        ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
        return morphs;
      },
      statements: [
        ["inline","book-cover",[],["book",["subexpr","@mut",[["get","book",["loc",[null,[8,26],[8,30]]],0,0,0,0]],[],[],0,0],"blurBackground",["subexpr","route-action",["<blurBackground></blurBackground>"],[],["loc",[null,[8,46],[8,96]]],0,0]],["loc",[null,[8,8],[8,98]]],0,0]
      ],
      locals: ["book"],
      templates: []
    };
  }());
  return {
    meta: {
      "revision": "Ember@2.7.0",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 10,
          "column": 5
        }
      },
      "moduleName": "bookstore/templates/author.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("h3");
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("strong");
      var el2 = dom.createTextNode("Biography: ");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode(" Nam facilisi, nam donec quisque arcu. Ullamcorper sollicitudin et sollicitudin diam sociosqu suspendisse vel fringilla ullamcorper ridiculus. Nibh mollis leo phasellus. Accumsan mauris mattis habitasse varius faucibus tempor ante odio sollicitudin maecenas. Rhoncus, lobortis amet elit habitasse diam porttitor erat donec. Vel nunc quisque nibh eleifend bibendum. Fames tortor odio torquent fusce ipsum id tempor molestie facilisi. Vivamus netus sociosqu lacus ornare dictum magna gravida, augue in. Lectus enim mollis aenean curae;. Mus justo rutrum massa pulvinar dapibus non habitant eros sodales sem. Iaculis tortor pharetra amet sit, senectus.\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("h4");
      var el2 = dom.createTextNode("Published Titles: ");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("ul");
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var morphs = new Array(2);
      morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]),0,0);
      morphs[1] = dom.createMorphAt(dom.childAt(fragment, [6]),1,1);
      return morphs;
    },
    statements: [
      ["content","model.name",["loc",[null,[1,4],[1,18]]],0,0,0,0],
      ["block","each",[["get","model.books",["loc",[null,[7,12],[7,23]]],0,0,0,0]],[],0,null,["loc",[null,[7,4],[9,13]]]]
    ],
    locals: [],
    templates: [child0]
  };
}()));