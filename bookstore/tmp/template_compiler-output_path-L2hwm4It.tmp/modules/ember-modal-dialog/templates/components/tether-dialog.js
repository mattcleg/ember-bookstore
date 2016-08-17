export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@2.7.0",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 2
            },
            "end": {
              "line": 7,
              "column": 2
            }
          },
          "moduleName": "modules/ember-modal-dialog/templates/components/tether-dialog.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
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
          ["inline","modal-dialog-overlay",[],["action","close","class",["subexpr","concat",[["subexpr","if",[["get","overlayClassNamesString",[],0,0,0,0],["subexpr","-normalize-class",["overlayClassNamesString",["get","overlayClassNamesString",[],0,0,0,0]],[],[],0,0]],[],[],0,0]," ",["subexpr","if",[["get","translucentOverlay",[],0,0,0,0],"translucent"],[],[],0,0]," ",["subexpr","if",[["get","overlay-class",[],0,0,0,0],["subexpr","-normalize-class",["overlay-class",["get","overlay-class",[],0,0,0,0]],[],[],0,0]],[],[],0,0]," "],[],[],0,0]],["loc",[null,[3,4],[6,6]]],0,0]
        ],
        locals: [],
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
            "line": 8,
            "column": 0
          }
        },
        "moduleName": "modules/ember-modal-dialog/templates/components/tether-dialog.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","if",[["get","hasOverlay",["loc",[null,[2,8],[2,18]]],0,0,0,0]],[],0,null,["loc",[null,[2,2],[7,9]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }());
  var child1 = (function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@2.7.0",
          "loc": {
            "source": null,
            "start": {
              "line": 10,
              "column": 2
            },
            "end": {
              "line": 16,
              "column": 2
            }
          },
          "moduleName": "modules/ember-modal-dialog/templates/components/tether-dialog.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
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
          ["content","yield",["loc",[null,[15,4],[15,13]]],0,0,0,0]
        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@2.7.0",
        "loc": {
          "source": null,
          "start": {
            "line": 9,
            "column": 0
          },
          "end": {
            "line": 17,
            "column": 0
          }
        },
        "moduleName": "modules/ember-modal-dialog/templates/components/tether-dialog.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","ember-modal-dialog-positioned-container",[],["targetAttachment",["subexpr","@mut",[["get","targetAttachment",["loc",[null,[11,23],[11,39]]],0,0,0,0]],[],[],0,0],"target",["subexpr","@mut",[["get","target",["loc",[null,[12,13],[12,19]]],0,0,0,0]],[],[],0,0],"renderInPlace",["subexpr","@mut",[["get","renderInPlace",["loc",[null,[13,20],[13,33]]],0,0,0,0]],[],[],0,0],"class",["subexpr","concat",[["subexpr","if",[["get","containerClassNamesString",[],0,0,0,0],["subexpr","-normalize-class",["containerClassNamesString",["get","containerClassNamesString",[],0,0,0,0]],[],[],0,0]],[],[],0,0]," ",["subexpr","if",[["get","targetAttachmentClass",[],0,0,0,0],["subexpr","-normalize-class",["targetAttachmentClass",["get","targetAttachmentClass",[],0,0,0,0]],[],[],0,0]],[],[],0,0]," ",["subexpr","if",[["get","container-class",[],0,0,0,0],["subexpr","-normalize-class",["container-class",["get","container-class",[],0,0,0,0]],[],[],0,0]],[],[],0,0]," "],[],[],0,0]],0,null,["loc",[null,[10,2],[16,46]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }());
  var child2 = (function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@2.7.0",
          "loc": {
            "source": null,
            "start": {
              "line": 18,
              "column": 2
            },
            "end": {
              "line": 29,
              "column": 2
            }
          },
          "moduleName": "modules/ember-modal-dialog/templates/components/tether-dialog.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
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
          ["content","yield",["loc",[null,[28,4],[28,13]]],0,0,0,0]
        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@2.7.0",
        "loc": {
          "source": null,
          "start": {
            "line": 17,
            "column": 0
          },
          "end": {
            "line": 30,
            "column": 0
          }
        },
        "moduleName": "modules/ember-modal-dialog/templates/components/tether-dialog.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","ember-tether",[],["target",["subexpr","@mut",[["get","target",["loc",[null,[19,13],[19,19]]],0,0,0,0]],[],[],0,0],"attachment",["subexpr","@mut",[["get","attachment",["loc",[null,[20,17],[20,27]]],0,0,0,0]],[],[],0,0],"targetAttachment",["subexpr","@mut",[["get","targetAttachment",["loc",[null,[21,23],[21,39]]],0,0,0,0]],[],[],0,0],"targetModifier",["subexpr","@mut",[["get","targetModifier",["loc",[null,[22,21],[22,35]]],0,0,0,0]],[],[],0,0],"classPrefix",["subexpr","@mut",[["get","tetherClassPrefix",["loc",[null,[23,18],[23,35]]],0,0,0,0]],[],[],0,0],"offset",["subexpr","@mut",[["get","offset",["loc",[null,[24,13],[24,19]]],0,0,0,0]],[],[],0,0],"targetOffset",["subexpr","@mut",[["get","targetOffset",["loc",[null,[25,19],[25,31]]],0,0,0,0]],[],[],0,0],"constraints",["subexpr","@mut",[["get","constraints",["loc",[null,[26,18],[26,29]]],0,0,0,0]],[],[],0,0],"class",["subexpr","concat",[["subexpr","if",[["get","containerClassNamesString",[],0,0,0,0],["subexpr","-normalize-class",["containerClassNamesString",["get","containerClassNamesString",[],0,0,0,0]],[],[],0,0]],[],[],0,0]," ",["subexpr","if",[["get","container-class",[],0,0,0,0],["subexpr","-normalize-class",["container-class",["get","container-class",[],0,0,0,0]],[],[],0,0]],[],[],0,0]," "],[],[],0,0]],0,null,["loc",[null,[18,2],[29,19]]]]
      ],
      locals: [],
      templates: [child0]
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
          "line": 31,
          "column": 0
        }
      },
      "moduleName": "modules/ember-modal-dialog/templates/components/tether-dialog.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var morphs = new Array(2);
      morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
      morphs[1] = dom.createMorphAt(fragment,1,1,contextualElement);
      dom.insertBoundary(fragment, 0);
      dom.insertBoundary(fragment, null);
      return morphs;
    },
    statements: [
      ["block","ember-wormhole",[],["to",["subexpr","@mut",[["get","destinationElementId",["loc",[null,[1,21],[1,41]]],0,0,0,0]],[],[],0,0],"renderInPlace",["subexpr","@mut",[["get","renderInPlace",["loc",[null,[1,56],[1,69]]],0,0,0,0]],[],[],0,0]],0,null,["loc",[null,[1,0],[8,19]]]],
      ["block","if",[["get","renderInPlace",["loc",[null,[9,6],[9,19]]],0,0,0,0]],[],1,2,["loc",[null,[9,0],[30,7]]]]
    ],
    locals: [],
    templates: [child0, child1, child2]
  };
}()));