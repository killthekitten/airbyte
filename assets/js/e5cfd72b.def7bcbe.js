"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[1730],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),h=r,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||o;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},12204:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={},s="Google Sheets",u={unversionedId:"integrations/destinations/google-sheets",id:"integrations/destinations/google-sheets",title:"Google Sheets",description:"Sync overview",source:"@site/../docs/integrations/destinations/google-sheets.md",sourceDirName:"integrations/destinations",slug:"/integrations/destinations/google-sheets",permalink:"/integrations/destinations/google-sheets",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/destinations/google-sheets.md",tags:[],version:"current",frontMatter:{}},p={},d=[{value:"Sync overview",id:"sync-overview",level:2},{value:"Output schema",id:"output-schema",level:3},{value:"Note:",id:"note",level:4},{value:"Data type mapping",id:"data-type-mapping",level:3},{value:"Features",id:"features",level:3},{value:"Performance considerations",id:"performance-considerations",level:3},{value:'<a name="limitations"></a>Google Sheets Limitations',id:"google-sheets-limitations",level:3},{value:"Getting Started (Airbyte Cloud Only)",id:"getting-started-airbyte-cloud-only",level:2},{value:'<a name="oauth"></a> Authorize your Google account via OAuth',id:"-authorize-your-google-account-via-oauth",level:3},{value:'<a name="sheetlink"></a>Spreadsheet Link',id:"spreadsheet-link",level:3},{value:"Future improvements:",id:"future-improvements",level:4},{value:"Changelog",id:"changelog",level:2}],c={toc:d};function h(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"google-sheets"},"Google Sheets"),(0,o.kt)("h2",{id:"sync-overview"},"Sync overview"),(0,o.kt)("p",null,"The Google Sheets Destination is configured to push data to a single Google Sheets spreadsheet with multiple Worksheets as streams. To replicate data to multiple spreadsheets, you can create multiple instances of the Google Sheets Destination in your Airbyte instance.\nPlease be aware of the ",(0,o.kt)("a",{parentName:"p",href:"#limitations"},"Google Spreadsheet limitations")," before you configure your airbyte data replication using Destination Google Sheets"),(0,o.kt)("h3",{id:"output-schema"},"Output schema"),(0,o.kt)("p",null,"Each worksheet in the selected spreadsheet will be the output as a separate source-connector stream. The data is coerced to string before the output to the spreadsheet. The nested data inside of the source connector data is normalized to the ",(0,o.kt)("inlineCode",{parentName:"p"},"first-level-nesting")," and represented as string, this produces nested lists and objects to be a string rather than normal lists and objects, the further data processing is required if you need to analyze the data."),(0,o.kt)("p",null,"Airbyte only supports replicating ",(0,o.kt)("inlineCode",{parentName:"p"},"Grid Sheets"),", which means the text raw data only could be replicated to the target spreadsheet. See the ",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets/sheets#SheetType"},"Google Sheets API docs")," for more info on all available sheet types."),(0,o.kt)("h4",{id:"note"},"Note:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The output columns are ordered alphabetically. The output columns should not be reordered manually after the sync, this could cause the data corruption for all next syncs."),(0,o.kt)("li",{parentName:"ul"},"The underlying process of record normalization is applied to avoid data corruption during the write process. This handles two scenarios:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"UnderSetting - when record has less keys (columns) than catalog declares"),(0,o.kt)("li",{parentName:"ol"},"OverSetting - when record has more keys (columns) than catalog declares")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"EXAMPLE:\n\n- UnderSetting:\n    * Catalog:\n        - has 3 entities:\n            [ 'id', 'key1', 'key2' ]\n                        ^\n    * Input record:\n        - missing 1 entity, compare to catalog\n            { 'id': 123,    'key2': 'value' }\n                            ^\n    * Result:\n        - 'key1' has been added to the record, because it was declared in catalog, to keep the data structure.\n            {'id': 123, 'key1': '', {'key2': 'value'} }\n                            ^\n- OverSetting:\n    * Catalog:\n        - has 3 entities:\n            [ 'id', 'key1', 'key2',   ]\n                                    ^\n    * Input record:\n        - doesn't have entity 'key1'\n        - has 1 more enitity, compare to catalog 'key3'\n            { 'id': 123,     ,'key2': 'value', 'key3': 'value' }\n                            ^                      ^\n    * Result:\n        - 'key1' was added, because it expected be the part of the record, to keep the data structure\n        - 'key3' was dropped, because it was not declared in catalog, to keep the data structure\n            { 'id': 123, 'key1': '', 'key2': 'value',   }\n                            ^                          ^\n")),(0,o.kt)("h3",{id:"data-type-mapping"},"Data type mapping"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Integration Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Airbyte Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Any Type"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"string"))))),(0,o.kt)("h3",{id:"features"},"Features"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Supported?","(","Yes/No",")"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Ful-Refresh Overwrite"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Ful-Refresh Append"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Incremental Append"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Incremental Append-Deduplicate"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Yes")))),(0,o.kt)("h3",{id:"performance-considerations"},"Performance considerations"),(0,o.kt)("p",null,"At the time of writing, the ",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/sheets/api/limits"},"Google API rate limit")," is 100 requests per 100 seconds per user and 500 requests per 100 seconds per project. Airbyte batches requests to the API in order to efficiently pull data and respects these rate limits. It is recommended that you use the same service user ","(",'see the "Creating a service user" section below for more information on how to create one',")"," for no more than 3 instances of the Google Sheets Destination to ensure high transfer speeds."),(0,o.kt)("h3",{id:"google-sheets-limitations"},(0,o.kt)("a",{name:"limitations"}),"Google Sheets Limitations"),(0,o.kt)("p",null,"During the upload process and from the data storage perspective there are some limitations that should be considered beforehands:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Maximum of 5 Million Cells"))),(0,o.kt)("p",null,"A Google Sheets document can have a maximum of 5 million cells. These can be in a single worksheet or in multiple sheets.\nIn case you already have the 5 million limit reached in fewer columns, it will not allow you to add more columns (and vice versa, i.e., if 5 million cells limit is reached with a certain number of rows, it will not allow more rows)."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Maximum of 18,278 Columns"))),(0,o.kt)("p",null,"At max, you can have 18,278 columns in Google Sheets in a worksheet."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Up to 200 Worksheets in a Spreadsheet"))),(0,o.kt)("p",null,"You cannot create more than 200 worksheets within single spreadsheet."),(0,o.kt)("h2",{id:"getting-started-airbyte-cloud-only"},"Getting Started (Airbyte Cloud Only)"),(0,o.kt)("p",null,"To configure the connector you'll need to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#oauth"},"Authorize your Google account via OAuth")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#sheetlink"},"The Full URL or Spreadsheet ID you'd like to sync"))),(0,o.kt)("h3",{id:"-authorize-your-google-account-via-oauth"},(0,o.kt)("a",{name:"oauth"})," Authorize your Google account via OAuth"),(0,o.kt)("p",null,'Click on the "Sign in with Google" button and authorize via your Google account.'),(0,o.kt)("h3",{id:"spreadsheet-link"},(0,o.kt)("a",{name:"sheetlink"}),"Spreadsheet Link"),(0,o.kt)("p",null,"You will need the link of the Spreadsheet you'd like to sync. To get it, click Share button in the top right corner of Google Sheets interface, and then click Copy Link in the dialog that pops up.\nThese two steps are highlighted in the screenshot below:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(42970).Z,width:"737",height:"585"})),(0,o.kt)("h4",{id:"future-improvements"},"Future improvements:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Handle multiple spreadsheets to split big amount of data into parts, once the main spreadsheet is full and cannot be extended more, due to ",(0,o.kt)("a",{parentName:"li",href:"#limitations"},"limitations"),".")),(0,o.kt)("h2",{id:"changelog"},"Changelog"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Version"),(0,o.kt)("th",{parentName:"tr",align:null},"Date"),(0,o.kt)("th",{parentName:"tr",align:null},"Pull Request"),(0,o.kt)("th",{parentName:"tr",align:null},"Subject"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"0.1.0"),(0,o.kt)("td",{parentName:"tr",align:null},"2022-04-26"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12135"},"12135")),(0,o.kt)("td",{parentName:"tr",align:null},"Initial Release")))))}h.isMDXComponent=!0},42970:function(e,t,n){t.Z=n.p+"assets/images/google_spreadsheet_url-7354b5c8d9abfc9935e62a092dddeba4.png"}}]);