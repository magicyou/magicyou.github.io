// VECN1WS1 at 01/08/2016 04:16:37
'use strict';
if (typeof veTagData === 'undefined') {
    var veTagData = (function () {
        var b,
            tag = document.getElementById('veConnect'),
            d = {
                journeycode: '72DC38F2-A03D-4A0D-BCE6-637B9F5B9BEF',
                captureConfigUrl: 'cdscn.ve-interactive.cn/CaptureConfigService.asmx/CaptureConfig',
                appsServicesUrl: 'appsapicn.ve-interactive.cn',
                veHostDomain: '//configcn.ve-interactive.cn',
                promoteLanding: 'cn.findrz.cn',
                evaDomain: 'cookie.ve-interactive.cn',

                captureConfig: {
  CaptureUrl: "cdscn.ve-interactive.cn/CaptureConfigService.asmx/CaptureConfig",
  customerid: 3000247,
  datareceiverurl: "cdscn.ve-interactive.cn/DataReceiverService.asmx/DataReceiver",
  Forms: [
    {
      ChatAgentId: null,
      EmailOptOut: false,
      FormFields: [],
      FormId: 3000634,
      FormTypeId: 1,
      FormURLs: [
        "hitao.top/"
      ],
      IdentifyAbandonmentOr: true,
      NumberIdentifiedFields: 0,
      Name: null,
      OptOuts: [],
      Paremeter: []
    },
    {
      ChatAgentId: null,
      EmailOptOut: false,
      FormFields: [
        {
          ClientFieldName: ".goods img",
          DomEvent: "OnLoad",
          FieldTypeName: "RawSeries",
          FormMappingId: 3001801,
          HtmlAttributeTag: "src",
          HtmlType: "img",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 13,
          HtmlPath: null
        },
        {
          ClientFieldName: ".goods_info a",
          DomEvent: "OnLoad",
          FieldTypeName: "RawSeries",
          FormMappingId: 3001802,
          HtmlAttributeTag: "Value",
          HtmlType: "a",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 11,
          HtmlPath: null
        },
        {
          ClientFieldName: ".goods_info a",
          DomEvent: "OnLoad",
          FieldTypeName: "RawSeries",
          FormMappingId: 3001803,
          HtmlAttributeTag: "href",
          HtmlType: "a",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 29,
          HtmlPath: null
        },
        {
          ClientFieldName: ".mod_tb_cart .price",
          DomEvent: "OnLoad",
          FieldTypeName: "RawSeries",
          FormMappingId: 3001804,
          HtmlAttributeTag: "Value",
          HtmlType: "font",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 16,
          HtmlPath: null
        },
        {
          ClientFieldName: ".buy_quantity",
          DomEvent: "OnloadOnChange",
          FieldTypeName: "RawSeries",
          FormMappingId: 3001805,
          HtmlAttributeTag: "Value",
          HtmlType: ":text",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 1,
          HtmlPath: null
        },
        {
          ClientFieldName: "pay_amount",
          DomEvent: "OnloadOnChange",
          FieldTypeName: "Id",
          FormMappingId: 3001806,
          HtmlAttributeTag: "Value",
          HtmlType: "span",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 8,
          HtmlPath: ""
        },
        {
          ClientFieldName: "veConnect",
          DomEvent: "OnLoad",
          FieldTypeName: "Id",
          FormMappingId: 3001807,
          HtmlAttributeTag: "Id",
          HtmlType: "div",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 1,
          HtmlPath: null
        }
      ],
      FormId: 3000647,
      FormTypeId: 1,
      FormURLs: [
        "hitao.top/cart"
      ],
      IdentifyAbandonmentOr: true,
      NumberIdentifiedFields: 0,
      Name: null,
      OptOuts: [],
      Paremeter: []
    },
    {
      ChatAgentId: null,
      EmailOptOut: false,
      FormFields: [
        {
          ClientFieldName: "login_username",
          DomEvent: "DynamicActivity",
          FieldTypeName: "Id",
          FormMappingId: 3001808,
          HtmlAttributeTag: "Value",
          HtmlType: ":text",
          IdentifyAbandonment: false,
          isEmail: true,
          FormMappingTypeId: 2,
          HtmlPath: null
        }
      ],
      FormId: 3000650,
      FormTypeId: 1,
      FormURLs: [
        "hitao.top/login/",
        "hitao.top/login/index"
      ],
      IdentifyAbandonmentOr: true,
      NumberIdentifiedFields: 0,
      Name: null,
      OptOuts: [],
      Paremeter: []
    },
    {
      ChatAgentId: null,
      EmailOptOut: false,
      FormFields: [
        {
          ClientFieldName: ".payment_max span",
          DomEvent: "OnLoad",
          FieldTypeName: "Raw",
          FormMappingId: 3001809,
          HtmlAttributeTag: "Value",
          HtmlType: "span",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 8,
          HtmlPath: null
        },
        {
          ClientFieldName: "veConnect",
          DomEvent: "OnLoad",
          FieldTypeName: "Id",
          FormMappingId: 3001810,
          HtmlAttributeTag: "Id",
          HtmlType: "div",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 1,
          HtmlPath: null
        }
      ],
      FormId: 3000651,
      FormTypeId: 1,
      FormURLs: [
        "hitao.top/settle/index"
      ],
      IdentifyAbandonmentOr: true,
      NumberIdentifiedFields: 0,
      Name: null,
      OptOuts: [],
      Paremeter: []
    },
    {
      ChatAgentId: null,
      EmailOptOut: false,
      FormFields: [
        {
          ClientFieldName: "window.location.href",
          DomEvent: "OnLoad",
          FieldTypeName: "Raw",
          FormMappingId: 3001811,
          HtmlAttributeTag: "href",
          HtmlType: "a",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 9,
          HtmlPath: ""
        }
      ],
      FormId: 3000652,
      FormTypeId: 2,
      FormURLs: [
        "hitao.top/settleOrder"
      ],
      IdentifyAbandonmentOr: true,
      NumberIdentifiedFields: 0,
      Name: null,
      OptOuts: [],
      Paremeter: []
    }
  ],
  IdentifyAbandonmentOr: true,
  JourneyCode: "72DC38F2-A03D-4A0D-BCE6-637B9F5B9BEF",
  JourneyId: 3000247,
  JourneyTimeOut: 1800,
  NumberIdentifiedFields: 0,
  OptOutField: 0
},
                /*
                 * The custom settings are based on the standard defined on Settings.js.
                 */
                settings: { domainsToIgnore: ['hitao.top' ], consoleMessagesEnabled: true,
 elementsStoppingAppsOnClick: [ ],
 autocompleteInputsHandler: [ ],
 keywordsRegExp: [ { source: 'Example', regexp: / /, notSearchEngine: false, replaceCharactersBySpace: '-', storeSearchTerm: false, showNoProducts: false, ignoreCloses: false } ],
 cookies: { enabled: true , timeToLive: 60},
appsForms:[{
	appName: 'chat',
	appAgents: ['3000131','3000133'],
	priority: 1,
	blackListUseRegex: false,
	whiteListUseRegex: false,
	FormBlackListURLs: [],
	FormId: 123456,
	FormTypeId: 6,
	FormURLs: ['hitao.top/cart','hitao.top/settle/index'],
	Paremeter: []
}],
elementsStoppingAppsOnEvent: [
    {
        elementQuery : '#btn_settle',
        eventType : 'mousedown',
        doesElementExistOnLoad: true,
}]
}
,

                /*
                 * Custom events that allow custom behavior per journey. The standard is defined on CustomEvents.js.
                 */
                customEvents: {},

                /*
                 * Criteria filters that are setup by tech team. The types of Criteria filters possible are:
                 *       * Personality - The matching of this criteria filters will defined the personality that the chat will have
                 *       * Variation
                 */
                criteriaFilters: {
  chat: [
    {
      value: "3000142",
      criteria: [
        {
          formMappingId: 3001806,
          value: "499",
          operator: ">=",
          typeName: "Number",
          innerGrouping: []
        },
        {
          formMappingId: 3001809,
          value: "499",
          operator: ">=",
          typeName: "Number",
          innerGrouping: []
        }
      ]
    },
    {
      value: "3000140",
      criteria: [
        {
          formMappingId: 3001806,
          value: "299",
          operator: ">=",
          typeName: "Number",
          innerGrouping: []
        },
        {
          formMappingId: 3001809,
          value: "299",
          operator: ">=",
          typeName: "Number",
          innerGrouping: []
        }
      ]
    },
    {
      value: "3000138",
      criteria: [
        {
          formMappingId: 3001806,
          value: "299",
          operator: "<",
          typeName: "Number",
          innerGrouping: []
        },
        {
          formMappingId: 3001809,
          value: "299",
          operator: "<",
          typeName: "Number",
          innerGrouping: []
        }
      ]
    }
  ],
  assist: [],
  promote: [],
  panel: []
},

                /*
                 * All the apps that Ve Interactive has with the events
                 */
                appsMappings: {},

                /*
                 * All the apps that Ve Interactive has with the events
                 */
                apps: [
  {
    name: "Chat",
    exit: true,
    inactivity: false,
    backButton: true,
    load: false,
    enabled: true,
    maxActivationsPerSession: null,
    activateOnlyOnLastTab: true,
    minTimeBetweenActivations: null,
    exitIntent: false
  }
]
            };

        if (!tag) {

            // Adding the Capture-apps file to the DOM
            tag = document.createElement('script');
            tag.type = 'text/javascript';
            tag.id = 'veConnect';
            tag.async = true;
            tag.src = window.location.protocol + d.veHostDomain + '/scripts/4.9/capture-apps-4.9.1.js';
            b = document.getElementsByTagName('script')[0];
            b.parentNode.insertBefore(tag, b);
        }
        return d;
    }());
}
