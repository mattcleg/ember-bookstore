export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "revision": "Ember@2.7.0",
            "loc": {
              "source": null,
              "start": {
                "line": 7,
                "column": 6
              },
              "end": {
                "line": 12,
                "column": 6
              }
            },
            "moduleName": "modules/ember-modal-dialog/templates/components/modal-dialog.hbs"
          },
          isEmpty: false,
          arity: 0,
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
            ["content","yield",["loc",[null,[11,8],[11,17]]],0,0,0,0]
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
              "line": 3,
              "column": 4
            },
            "end": {
              "line": 13,
              "column": 4
            }
          },
          "moduleName": "modules/ember-modal-dialog/templates/components/modal-dialog.hbs"
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
          ["block","ember-modal-dialog-positioned-container",[],["targetAttachment",["subexpr","@mut",[["get","targetAttachment",["loc",[null,[8,27],[8,43]]],0,0,0,0]],[],[],0,0],"target",["subexpr","@mut",[["get","target",["loc",[null,[9,17],[9,23]]],0,0,0,0]],[],[],0,0],"class",["subexpr","concat",[["subexpr","if",[["get","containerClassNamesString",[],0,0,0,0],["subexpr","-normalize-class",["containerClassNamesString",["get","containerClassNamesString",[],0,0,0,0]],[],[],0,0]],[],[],0,0]," ",["subexpr","if",[["get","targetAttachmentClass",[],0,0,0,0],["subexpr","-normalize-class",["targetAttachmentClass",["get","targetAttachmentClass",[],0,0,0,0]],[],[],0,0]],[],[],0,0]," ",["subexpr","if",[["get","container-class",[],0,0,0,0],["subexpr","-normalize-class",["container-class",["get","container-class",[],0,0,0,0]],[],[],0,0]],[],[],0,0]," "],[],[],0,0]],0,null,["loc",[null,[7,6],[12,50]]]]
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
            "line": 15,
            "column": 0
          }
        },
        "moduleName": "modules/ember-modal-dialog/templates/components/modal-dialog.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("  ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [1]);
        var morphs = new Array(2);
        morphs[0] = dom.createAttrMorph(element0, 'class');
        morphs[1] = dom.createMorphAt(element0,1,1);
        return morphs;
      },
      statements: [
        ["attribute","class",["concat",[["get","wrapperClassNamesString",["loc",[null,[2,16],[2,39]]],0,0,0,0]," ",["get","wrapper-class",["loc",[null,[2,44],[2,57]]],0,0,0,0]],0,0,0,0,0],0,0,0,0],
        ["block","modal-dialog-overlay",[],["action","close","class",["subexpr","concat",[["subexpr","if",[["get","overlayClassNamesString",[],0,0,0,0],["subexpr","-normalize-class",["overlayClassNamesString",["get","overlayClassNamesString",[],0,0,0,0]],[],[],0,0]],[],[],0,0]," ",["subexpr","if",[["get","translucentOverlay",[],0,0,0,0],"translucent"],[],[],0,0]," ",["subexpr","if",[["get","overlay-class",[],0,0,0,0],["subexpr","-normalize-class",["overlay-class",["get","overlay-class",[],0,0,0,0]],[],[],0,0]],[],[],0,0]," "],[],[],0,0]],0,null,["loc",[null,[3,4],[13,29]]]]
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
          "line": 16,
          "column": 0
        }
      },
      "moduleName": "modules/ember-modal-dialog/templates/components/modal-dialog.hbs"
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
      ["block","ember-wormhole",[],["to",["subexpr","@mut",[["get","destinationElementId",["loc",[null,[1,21],[1,41]]],0,0,0,0]],[],[],0,0],"renderInPlace",["subexpr","@mut",[["get","renderInPlace",["loc",[null,[1,56],[1,69]]],0,0,0,0]],[],[],0,0]],0,null,["loc",[null,[1,0],[15,19]]]]
    ],
    locals: [],
    templates: [child0]
  };
}()));