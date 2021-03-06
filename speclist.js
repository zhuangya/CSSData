
var specList = {
    'Alarm API': {
        name : 'Web Alarms API',
        url  : 'https://www.w3.org/2012/sysapps/web-alarms/',
    },
    'AmbientLight':{
        name : "Ambient Light Events",
        url  : "https://w3c.github.io/ambient-light/"
    },
    'Background Sync': {
        name : "Web Background Synchronization",
        url  : "https://wicg.github.io/BackgroundSync/spec/"
    },
    'Background Tasks':{
        name : "Cooperative Scheduling of Background Tasks",
        url  : "https://w3c.github.io/requestidlecallback/"
    },
    'Battery API':{
        name : "Battery Status API",
        url  : "https://dvcs.w3.org/hg/dap/raw-file/default/battery/Overview.html"
    },
    'Beacon':{
        name : 'Beacon',
        url  : 'https://w3c.github.io/beacon/'
    },
    'Clipboard API':{
        name : "Clipboard API and events",
        url  : "https://w3c.github.io/clipboard-apis/"
    },
    'Compositing':{
        name : "Compositing and blending Level 1",
        url  : "https://drafts.fxtf.org/compositing-1/"
    },
    'Console API':{
        name : "Console API",
        url  : "https://github.com/DeveloperToolsWG/console-object/blob/master/api.md"
    },
    'Contacts':{
        name : "Contacts Manager API",
        url  : "https://www.w3.org/2012/sysapps/contacts-manager-api/"
    },
    'CORS':{
        name : "CORS",
        url  : "http://www.w3.org/TR/cors/"
    },
    'CSP 1.0':{
        name : "Content Security Policy 1.0",
        url  : "http://www.w3.org/TR/2012/CR-CSP-20121115/"
    },
    'CSP 1.1':{
        name : "Content Security Policy Level 2",
        url  : "https://w3c.github.io/webappsec/specs/CSP2/"
    },
    'CSS1':{
        name : "CSS Level&nbsp;1",
        url  : "http://www.w3.org/TR/CSS1/"
    },
    'CSS2.1':{
        name : "CSS Level&nbsp;2 (Revision&nbsp;1)",
        url  : "http://www.w3.org/TR/CSS2/"
    },
    'CSS3 Animations':{
        name : "CSS Animations",
        url  : "https://drafts.csswg.org/css-animations/"
    },
    'CSS3 Backgrounds':{ // Backgrounds & Borders
        name : 'CSS Backgrounds and Borders Module Level&nbsp;3',
        url  : "https://drafts.csswg.org/css-backgrounds-3/"
    },
    'CSS3 Basic UI':{
        name : 'CSS Basic User Interface Module Level&nbsp;3',
        url  : "https://drafts.csswg.org/css-ui-3/"
    },
    'CSS3 Box':{
        name : 'CSS Basic Box Model',
        url  : "https://drafts.csswg.org/css-box-3/"
    },
    'CSS3 Box Alignment':{
        name : 'CSS Box Alignment Module',
        url  : "https://drafts.csswg.org/css-align/"
    },
    'CSS3 Cascade':{
        name : 'CSS Cascading and Inheritance Level&nbsp;3',
        url  : "https://drafts.csswg.org/css-cascade-3/"
    },
    'CSS3 Colors':{
        name : 'CSS Color Module Level&nbsp;3',
        url  : "https://drafts.csswg.org/css-color-3/"
    },
    'CSS3 Conditional':{
        name : 'CSS Conditional Rules Module Level&nbsp;3',
        url  : "https://drafts.csswg.org/css-conditional-3/"
    },
    'CSS3 Content':{
        name : 'CSS Generated Content Module Level&nbsp;3',
        url  : "https://drafts.csswg.org/css-content-3/",
    },
    'CSS3 Counter Styles':{
        name : "CSS Counter Styles Level&nbsp;3",
        url  : "https://drafts.csswg.org/css-counter-styles-3/",
    },
    'CSS3 Device':{
        name : 'CSS Device Adaptation',
        url  : "https://drafts.csswg.org/css-device-adapt/",
    },
    'CSS3 Display':{
        name : 'CSS Display Module Level&nbsp;3',
        url  : "https://drafts.csswg.org/css-display/",
    },
    'CSS3 Flexbox':{
        name : 'CSS Flexible Box Layout Module',
        url  : "https://drafts.csswg.org/css-flexbox-1/",
    },
    'CSS3 Font Loading':{
        name : 'CSS Font Loading Module Level&nbsp;3',
        url  : 'https://drafts.csswg.org/css-font-loading/',
    },
    'CSS3 Fonts':{
        name : 'CSS Fonts Module Level&nbsp;3',
        url  : "https://drafts.csswg.org/css-fonts-3/",
    },
    'CSS3 Fragmentation':{
        name : 'CSS Fragmentation Module Level&nbsp;3',
        url  : "https://drafts.csswg.org/css-break-3/"
    },
    'CSS3 GCPM':{
        name : 'CSS Generated Content for Paged Media Module',
        url  : "https://drafts.csswg.org/css-gcpm-3/"
    },
    'CSS3 Grid':{ /* This is 'grid layout' and not 'grid positioning' which has been abandoned */
        name : 'CSS Grid Layout',
        url  : "https://drafts.csswg.org/css-grid/"
    },
    'CSS3 Images':{
        name : 'CSS Image Values and Replaced Content Module Level&nbsp;3',
        url  : "https://drafts.csswg.org/css-images-3/"
    },
    'CSS3 Inline':{
        name : 'CSS Inline Layout',
        url  : "https://drafts.csswg.org/css-inline/"
    },
    'CSS3 Lists':{
        name : 'CSS Lists and Counters Module Level&nbsp;3',
        url  : "https://drafts.csswg.org/css-lists-3/"
    },
    'CSS3 Media Queries':{
        name : 'Media Queries',
        url  : "https://drafts.csswg.org/mediaqueries-3/"
    },
    'CSS3 Multicol':{
        name : 'CSS Multi-column Layout Module',
        url  : "https://drafts.csswg.org/css-multicol-1/"
    },
    'CSS3 Overflow':{
        name : 'CSS Overflow Module Level 3',
        url  : "https://drafts.csswg.org/css-overflow-3/"
    },  
    'CSS3 Namespaces':{
        name : 'CSS Namespaces Module',
        url  : "https://drafts.csswg.org/css-namespaces-3/"
    },
    'CSS3 Paged Media':{
        name : 'CSS Paged Media Module Level&nbsp;3',
        url  : "https://drafts.csswg.org/css-page-3/"
    },
    'CSS3 Positioning':{
        name : 'CSS Positioned Layout Module Level&nbsp;3',
        url  : "https://drafts.csswg.org/css-position-3/"
    },
    'CSS3 Regions':{
        name : 'CSS Regions Module Level&nbsp;1',
        url  : "https://drafts.csswg.org/css-regions-1/"
    },
    'CSS3 Ruby':{
        name : 'CSS Ruby Layout Module Level&nbsp;1',
        url  : 'https://drafts.csswg.org/css-ruby/'
    },
    'CSS3 Selectors':{
        name : 'Selectors Level&nbsp;3',
        url  : "https://drafts.csswg.org/selectors-3/"
    },
    'CSS3 Sizing':{
        name : 'CSS Intrinsic &amp; Extrinsic Sizing Module Level&nbsp;3',
        url  : "https://drafts.csswg.org/css-sizing-3/"
    },
    'CSS3 Speech':{
        name : 'CSS Speech Module',
        url  : "https://drafts.csswg.org/css-speech-1/"
    },
    'CSS3 Style':{
        name : 'CSS Style Attributes',
        url  : "https://drafts.csswg.org/css-style-attr/"
    },
    'CSS3 Syntax':{
        name : 'CSS Syntax Level&nbsp;3',
        url  : 'https://drafts.csswg.org/css-syntax/'
    },
    'CSS3 Text':{
        name : 'CSS Text Level&nbsp;3',
        url  : "https://drafts.csswg.org/css-text-3/"
    },
    'CSS3 Text Decoration':{
        name : 'CSS Text Decoration Level&nbsp;3',
        url  : "https://drafts.csswg.org/css-text-decor-3/"
    },
    'CSS3 Transforms':{
        name : 'CSS Transforms Level&nbsp;1',
        url  : "https://drafts.csswg.org/css-transforms/"
    },
    'CSS3 Transitions':{
        name : 'CSS Transitions',
        url  : "https://drafts.csswg.org/css-transitions/"
    },
    'CSS3 Transitions Level 2':{
        name : 'CSS Transitions Level 2',
        url  : "https://drafts.csswg.org/css-transitions-2/"
    },
    'CSS3 Values':{
        name : 'CSS Values and Units Module Level&nbsp;3',
        url  : "https://drafts.csswg.org/css-values-3/"
    },
    'CSS3 Variables':{
        name : 'CSS Custom Properties for Cascading Variables Module Level&nbsp;1',
        url  : "https://drafts.csswg.org/css-variables/"
    },
    'CSS3 Writing Modes':{
        name : 'CSS Writing Modes Module Level&nbsp;3',
        url  : "https://drafts.csswg.org/css-writing-modes-3/"
    },
    'CSS4 Cascade':{
        name : 'CSS Cascading and Inheritance Level&nbsp;4',
        url  : "https://drafts.csswg.org/css-cascade/"
    },
    'CSS4 Colors':{
        name : 'CSS Color Module Level&nbsp;4',
        url  : "https://drafts.csswg.org/css-color/" 
    },
    'CSS4 Images':{
        name : 'CSS Image Values and Replaced Content Module Level&nbsp;4',
        url  : "https://drafts.csswg.org/css-images-4/"
    },
    'CSS4 Media Queries':{
        name : 'Media Queries Level&nbsp;4',
        url  : "https://drafts.csswg.org/mediaqueries-4/"
    },
    'CSS4 Pseudo-Elements':{
        name : 'CSS Pseudo-Elements Level&nbsp;4',
        url  : "https://drafts.csswg.org/css-pseudo-4/"
    },
    'CSS4 Selectors':{
        name : 'Selectors Level&nbsp;4',
        url  : "https://drafts.csswg.org/selectors-4/"
    },
    'CSS4 Text':{
        name : 'CSS Text Level&nbsp;4',
        url  : "https://drafts.csswg.org/css-text-4/"
    },
    'CSS Exclusions':{
        name : 'CSS Exclusions Module Level&nbsp;1',
        url  : "https://drafts.csswg.org/css-exclusions/"
    },
    'CSS Masks':{
        name : 'CSS Masking Level&nbsp;1',
        url  : 'https://drafts.fxtf.org/css-masking-1/'
    },
    'CSS Non-element Selectors':{
        name : 'Non-element Selectors Module Level&nbsp;1',
        url  : 'https://drafts.csswg.org/selectors-nonelement/'
    },
    'CSS Line Grid':{
        name : 'CSS Line Grid Module Level&nbsp;1',
        url  : 'https://drafts.csswg.org/css-line-grid/'
    },
    'CSS Logical Properties':{
        name : 'CSS Logical Properties Level&nbsp;1',
        url  : 'https://drafts.csswg.org/css-logical-props/'
    },
    'CSS Scope':{
        name : 'CSS Scoping Module Level&nbsp;1',
        url  : 'http://drafts.csswg.org/css-scoping/'
    },
    'CSS Scroll Snap Points':{
        name : 'CSS Scroll Snap Points Module Level&nbsp;1',
        url  : 'https://drafts.csswg.org/css-snappoints/'
    },
    'CSS Shapes':{
        name : 'CSS Shapes Module Level&nbsp;1',
        url  : 'https://drafts.csswg.org/css-shapes/',
    },
    'CSS Text Size Adjust':{
        name : 'CSS Mobile Text Size Adjustment Module Level&nbsp;1',
        url  : 'https://drafts.csswg.org/css-size-adjust/',
    },
    'CSS Will Change':{
        name : 'CSS Will Change Module Level&nbsp;1',
        url  : 'https://drafts.csswg.org/css-will-change/'
    },
    'CSSOM':{
        name : 'CSS Object Model (CSSOM)',
        url  : 'https://drafts.csswg.org/cssom/'
    },
    'CSSOM View':{
        name : 'CSS Object Model (CSSOM) View Module',
        url  : 'https://drafts.csswg.org/cssom-view/'
    },
    'Custom Elements':{
        name : 'Custom Elements',
        url  : 'https://w3c.github.io/webcomponents/spec/custom/'
    },
    'Custom Scroll Restoration':{
        name : 'Custom Scroll Restoration - History-based API',
        url  : 'https://majido.github.io/scroll-restoration-proposal/history-based-api.html'
    },
    'Data Store API':{
        name : 'Data Store API',
        url  : 'https://airpingu.github.io/data-store-api/index.html'
    },
    'Device Orientation':{
        name : 'Device Orientation Events',
        url  : 'https://w3c.github.io/deviceorientation/spec-source-orientation.html'
    },
    'DOM Parsing':{
        name : 'DOM Parsing and Serialization',
        url  : 'https://w3c.github.io/DOM-Parsing/'
    },
    'DOM WHATWG':{
        name : 'DOM',
        url  : 'https://dom.spec.whatwg.org/'
    },
    'DOM1': {
        name : 'Document Object Model (DOM) Level 1 Specification',
        url  : 'http://www.w3.org/TR/REC-DOM-Level-1/'
    },
    'DOM2 Core': {
        name : 'Document Object Model (DOM) Level 2 Core Specification',
        url  : 'http://www.w3.org/TR/DOM-Level-2-Core/'
    },
    'DOM2 Events':{
        name : 'Document Object Model (DOM) Level 2 Events Specification',
        url  : 'http://www.w3.org/TR/DOM-Level-2-Events/events.html'
    },
    'DOM2 HTML':{
        name : 'Document Object Model (DOM) Level 2 HTML Specification',
        url  : 'http://www.w3.org/TR/DOM-Level-2-HTML/'
    },
    'DOM2 Style':{
        name : 'Document Object Model (DOM) Level 2 Style Specification',
        url  : 'http://www.w3.org/TR/DOM-Level-2-Style/'
    },
    'DOM2 Traversal_Range':{
        name : 'Document Object Model (DOM) Level 2 Traversal and Range Specification',
        url  : 'http://www.w3.org/TR/DOM-Level-2-Traversal-Range/'
    },
    'DOM3 Core':{
        name : 'Document Object Model (DOM) Level 3 Core Specification',
        url  : 'http://www.w3.org/TR/DOM-Level-3-Core/'
    },
    'DOM3 Events':{
        name : 'Document Object Model (DOM) Level 3 Events Specification',
        url  : 'https://w3c.github.io/uievents/'
    },
    'DOM3 XPath':{
        name : 'Document Object Model (DOM) Level 3 XPath Specification',
        url  : 'http://www.w3.org/TR/DOM-Level-3-XPath/'
    },
    'DOM4': {
        name : 'DOM4',
        url  : 'http://www.w3.org/TR/dom/'
    },
    'Element Traversal':{
        name : 'Element Traversal Specification',
        url  : 'http://www.w3.org/TR/ElementTraversal/'
    },
    'EME':{
        name : 'Encrypted Media Extensions',
        url  : 'https://w3c.github.io/encrypted-media/'
    },
    'Encoding':{
        name : 'Encoding',
        url  : 'http://www.w3.org/TR/encoding/'
    },
    'ES1':{
        name : 'ECMAScript 1st Edition (ECMA-262)',
        url  : 'http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%201st%20edition,%20June%201997.pdf'
    },
    'ES3':{
        name : 'ECMAScript 3rd Edition (ECMA-262)',
        url  : 'http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%203rd%20edition,%20December%201999.pdf'
    },
    'ES5.1':{
        name : 'ECMAScript 5.1 (ECMA-262)',
        url  : 'http://www.ecma-international.org/ecma-262/5.1/'
    },
    'ES6':{
        name : 'ECMAScript 2015 (6th Edition, ECMA-262)',
        url  : 'http://www.ecma-international.org/ecma-262/6.0/'
    },
    'ESDraft':{
        name : 'ECMAScript 2016 Draft (7th Edition, ECMA-262)',
        url  : 'https://tc39.github.io/ecma262/'
    },
    'ES Int 1.0':{
        name : 'ECMAScript Internationalization API 1.0 (ECMA-402)',
        url  : 'http://www.ecma-international.org/ecma-402/1.0/'
    },
    'ES Int 2.0':{
        name : 'ECMAScript Internationalization API 2.0 (ECMA-402)',
        url  : 'http://www.ecma-international.org/ecma-402/2.0/'
    },
    'ES Int Draft':{
        name : 'ECMAScript Internationalization API 3.0 (ECMA-402)',
        url  : 'http://tc39.github.io/ecma402/'
    },
    'Fetch':{
        name : 'Fetch',
        url  : 'https://fetch.spec.whatwg.org/'
    },
    'File API':{
        name : 'File API',
        url  : 'https://w3c.github.io/FileAPI/'
    },
    'FileSystem':{
        name : 'FileSystem API',
        url  : 'http://w3c.github.io/filesystem-api/'
    },
    'Filters 1.0':{
        name : "Filter Effects Module Level 1",
        url  : "https://drafts.fxtf.org/filters/"
    },
    'Filters 2.0':{
        name : "Filter Effects Module Level 2",
        url  : "https://drafts.fxtf.org/filters-2/"
    },
    'Frame Timing':{
        name : 'Frame Timing',
        url  : 'https://w3c.github.io/frame-timing/'
    },
    'Fullscreen':{
        name : 'Fullscreen API',
        url  : 'https://fullscreen.spec.whatwg.org/'
    },
    'Gamepad':{
        name : 'Gamepad',
        url  : 'https://w3c.github.io/gamepad/'
    },
    'Geolocation': {
        name : 'Geolocation API',
        url  : 'https://dev.w3.org/geo/api/spec-source.html'
    },
    'Geometry Interfaces': {
        name : 'Geometry Interfaces Module Level 1',
        url  : 'https://drafts.fxtf.org/geometry/'
    },
    'Highres Time':{
        name : 'High Resolution Time',
        url  : 'http://www.w3.org/TR/hr-time/'
    },
    'Highres Time Level 2':{
        name : 'High Resolution Time Level 2',
        url  : 'https://w3c.github.io/hr-time/'
    },
    'HSTS': {
        name : 'HTTP Strict Transport Security (HSTS)',
        url  : 'https://tools.ietf.org/html/rfc6797/'
    },
    'HTML Canvas 2D Context W3C': {
        name : 'HTML Canvas 2D Context (W3C)',
        url  : 'http://www.w3.org/html/wg/drafts/2dcontext/html5_canvas_CR/'
    },
    'HTML Editing': {
        name : 'HTML Editing APIs',
        url  : 'https://w3c.github.io/editing/'
    },
    'HTML Imports': {
        name : 'HTML Imports',
        url  : 'http://w3c.github.io/webcomponents/spec/imports/'
    },
    'HTML Templates': { /* the draft has been merged in the HTML spec */
        name : 'HTML Templates',
        url  : 'http://www.w3.org/TR/html5/scripting-1.html#the-template-element'
    },
    'HTML4.01':{
        name : 'HTML 4.01 Specification',
        url  : 'http://www.w3.org/TR/html401/'
    },
    'HTML5 Web Messaging':{
        name : 'HTML5 Web Messaging',
        url  : 'https://w3c.github.io/webmessaging/'
    },
    'HTML5 Web application':{ /* This is a subset of HTML5/HTML5.1 and must replaced by these */
        name : 'HTML5 Web application',
        url  : 'http://www.w3.org/html/wg/drafts/html/master/webappapis.html'
    },
    'HTML5 W3C':{
        name : 'HTML5',
        url  : 'http://www.w3.org/TR/html5/'
    },
    'HTML5.1':{
        name : 'HTML5.1',
        url  : 'http://www.w3.org/html/wg/drafts/html/master/'
    },
    'HTML WHATWG':{
        name : 'WHATWG HTML Living Standard',
        url  : 'https://html.spec.whatwg.org/multipage/'
    },
    'IndexedDB':{
        name : 'Indexed Database API',
        url  : 'http://www.w3.org/TR/IndexedDB/'
    },
    'IndexedDB2': {
        name : 'Indexed Database API (Second Edition)',
        url  : 'https://w3c.github.io/IndexedDB/'
    },
    'InputDeviceCapabilities': {
        name : 'InputDeviceCapabilities',
        url  : 'http://rbyers.github.io/InputDevice/index.html'
    },
    'JavaScript': {
        name : 'JavaScript, a.k.a. Web ECMAScript',
        url  : 'https://javascript.spec.whatwg.org/'
    },
    'Manifest': {
        name : 'Manifest for web application',
        url : 'http://www.w3.org/TR/appmanifest/'
    },
    'MathML2':{
        name : 'MathML 2.0',
        url : 'http://www.w3.org/TR/MathML2/'
    },
    'MathML3':{
        name : 'MathML 3.0',
        url : 'http://www.w3.org/TR/MathML3/'
    },
    'Media Capture':{
        name : 'Media Capture and Streams',
        url  : 'http://w3c.github.io/mediacapture-main/'
    },
    'Media Capture DOM Elements':{
        name : 'Media Capture from DOM Elements',
        url  : 'https://w3c.github.io/mediacapture-fromelement/'
    },
    'Media Source Extensions':{
        name : 'Media Source Extensions',
        url  : 'https://w3c.github.io/media-source/'
    },
    'MediaStream Recording':{
        name : 'MediaStream Recording',
        url  : 'https://w3c.github.io/mediacapture-record/MediaRecorder.html'
    },
    'Messaging':{
        name : 'Messaging API',
        url  : 'https://www.w3.org/2012/sysapps/messaging/'
    },
    'Motion Path Level 1':{
        name : 'Motion Path Module Level 1',
        url  : 'https://drafts.fxtf.org/motion-1/'
    },
    'Navigation Timing':{
        name : 'Navigation Timing',
        url  : 'http://www.w3.org/TR/navigation-timing/'
    },
    'Navigation Timing Level 2':{
        name : 'Navigation Timing Level 2',
        url  : 'https://w3c.github.io/navigation-timing/'
    },
    'Network Information':{
        name : 'Network Information API',
        url  : 'https://w3c.github.io/netinfo/'
    },
    'OpenGL ES 2.0':{
        name : 'OpenGL ES 2.0',
        url  : 'https://www.khronos.org/opengles/sdk/docs/man/xhtml/'
    },
    'Page Visibility API':{
        name : 'Page Visibility (Second Edition)',
        url  : 'http://www.w3.org/TR/page-visibility/'
    },
    'Permissions API':{
        name : 'Permissions API',
        url  : 'https://w3c.github.io/permissions/'
    },
    'Performance Timeline':{
        name : 'Performance Timeline',
        url  : 'http://www.w3.org/TR/performance-timeline/'
    },
    'Performance Timeline Level 2':{
        name : 'Performance Timeline Time Level 2',
        url  : 'https://w3c.github.io/performance-timeline/'
    },
    'Pointer Events': {
        name : 'Pointer Events',
        url  : 'http://www.w3.org/TR/pointerevents/'
    },
    'Pointer Events 2': {
        name : 'Pointer Events – Level 2',
        url  : 'https://w3c.github.io/pointerevents/'
    },
    'Pointer Lock':{
        name : 'Pointer Lock',
        url  : 'https://w3c.github.io/pointerlock/'
    },
    'Preload':{
        name : 'Preload',
        url  : 'http://www.w3.org/TR/preload/'
    },
    'Progress Events':{ /* Merged in XHR, we need to remove these entries */
        name : 'Progress Events',
        url  : 'https://xhr.spec.whatwg.org/'
    },
    'Proximity Events':{
        name : 'Proximity Events',
        url  : 'https://w3c.github.io/proximity/'
    },
    'Push API':{
        name : 'Push API',
        url  : 'https://w3c.github.io/push-api/'
    },
    'Referrer Policy':{
        name : 'Referrer Policy',
        url  : 'https://w3c.github.io/webappsec-referrer-policy/'
    },
    'RequestAnimationFrame':{
        name : 'Timing control for script-based animations',
        url  : 'http://www.w3.org/TR/animation-timing/'
    },
    'Resource Hints':{
        name : 'Resource Hints',
        url  : 'http://www.w3.org/TR/resource-hints/'
    },
    'Resource Timing':{
        name : 'Resource Timing',
        url  : 'https://w3c.github.io/resource-timing/'
    },
    'Screen Orientation':{
        name : 'Screen Orientation API',
        url  : 'https://w3c.github.io/screen-orientation/'
    },
    'Secure Contexts':{
        name : "Secure Contexts",
        url  : 'https://w3c.github.io/webappsec-secure-contexts/'
    },
    'Selection API':{
        name : "Selection API",
        url  : 'http://w3c.github.io/selection-api/'
    },
    'Server-sent events':{
        name : 'Server-Sent Events',
        url  : 'http://www.w3.org/TR/eventsource/'
    },
    'Server-sent events 2':{
        name : 'Server-Sent Events (2nd edition)',
        url  : 'http://www.w3.org/TR/eventsource/'
    },
    'Service Workers':{
        name : 'Service Workers',
        url  : 'https://slightlyoff.github.io/ServiceWorker/spec/service_worker/'
    },
    'Selectors API Level 1':{
        name : 'Selectors API Level 1',
        url  : 'http://www.w3.org/TR/selectors-api/'
    },
    'Selectors API Level 2':{
        name : 'Selectors API Level 2',
        url  : 'http://dev.w3.org/2006/webapi/selectors-api2/'
    },
    'Shadow DOM':{
        name : 'Shadow DOM',
        url  : 'https://w3c.github.io/webcomponents/spec/shadow/'
    },
    'SIMD': {
        name : 'SIMD',
        url  : 'https://tc39.github.io/ecmascript_simd/'
    },
    'Subresource Integrity':{
        name : 'Subresource Integrity',
        url  : 'https://w3c.github.io/webappsec/specs/subresourceintegrity/'
    },
    'SVG and HTML':{
        name : 'Inline SVG in HTML5 and XHTML',
        url  : 'http://dev.w3.org/SVG/proposals/svg-html/svg-html-proposal.html'
    },
    'SVG1.1':{
        name : 'Scalable Vector Graphics (SVG) 1.1 (Second Edition)',
        url  : 'http://www.w3.org/TR/SVG11/'
    },
    'SVG2':{
        name : 'Scalable Vector Graphics (SVG) 2',
        url  : 'https://svgwg.org/svg2-draft/'
    },
    'Telephony API':{
        name : 'Web Telephony API',
        url  : 'https://wiki.mozilla.org/WebAPI/WebTelephony'
    },
    'Touch Events':{
        name : 'Touch Events',
        url  : 'http://www.w3.org/TR/touch-events/'
    },
    'Touch Events 2': {
        name : 'Touch Events – Level 2',
        url  : 'https://w3c.github.io/touch-events/'
    },
    'Tracking':{
        name : 'Tracking Preference Expression (DNT)',
        url  : 'http://www.w3.org/2011/tracking-protection/drafts/tracking-dnt.html'
    },
    'Typed Array':{
        name : 'Typed Array Specification',
        url  : 'https://www.khronos.org/registry/typedarray/specs/latest/'
    },
    'UI Events':{
        name : 'UI Events',
        url  : 'https://w3c.github.io/uievents/'
    },
    'Undo Manager':{
        name : 'UndoManager and DOMTransaction',
        url  : 'https://dvcs.w3.org/hg/undomanager/raw-file/tip/undomanager.html'
    },
    'Unhandled Promise Rejection': {
        name : 'Unhandled Rejection Tracking Browser Events',
        url  : 'https://github.com/domenic/unhandled-rejections-browser-spec'
    },
    'Upgrade Insecure Requests': {
        name : 'Upgrade Insecure Requests',
        url  : 'https://w3c.github.io/webappsec/specs/upgrade/'
    },
    'URL':{
        name : 'URL',
        url  : 'https://url.spec.whatwg.org/'
    },
    'User Timing':{
        name : 'User Timing',
        url  : 'http://www.w3.org/TR/user-timing/'
    },
    'User Timing Level 2':{
        name : 'User Timing',
        url  : 'https://w3c.github.io/user-timing/'
    },
    'vCard':{
        name : 'vCard Format Specification',
        url  : 'https://tools.ietf.org/html/rfc6350'
    },
    'Vibration API':{
        name : 'Vibration API',
        url  : 'http://dev.w3.org/2009/dap/vibration/'
    },
    'Web Animations':{
        name : 'Web Animations',
        url  : 'https://w3c.github.io/web-animations/'
    },
    'Web Audio API':{
        name : 'Web Audio API',
        url  : 'https://webaudio.github.io/web-audio-api/'
    },
    'Web Background Sync':{
        name : 'Web Background Synchronization',
        url  : 'https://wicg.github.io/BackgroundSync/spec/'
    },
    'Web Bluetooth':{
        name : 'Web Bluetooth',
        url  : 'https://webbluetoothcg.github.io/web-bluetooth/'
    },
    'Web Crypto API':{
        name : 'Web Cryptography API',
        url  : 'https://dvcs.w3.org/hg/webcrypto-api/raw-file/tip/spec/Overview.html'
    },
    'WebGL':{
        name : 'WebGL 1.0',
        url  : 'https://www.khronos.org/registry/webgl/specs/latest/1.0/'
    },
    'WebGL2':{
        name : 'WebGL 2.0',
        url  : 'https://www.khronos.org/registry/webgl/specs/latest/2.0/'
    },
    'WEBGL_debug_renderer_info':{
        name : 'WEBGL_debug_renderer_info',
        url  : 'https://www.khronos.org/registry/webgl/extensions/WEBGL_debug_renderer_info/'
    },
    'WEBGL_debug_shaders':{
        name : 'WEBGL_debug_shaders',
        url  : 'https://www.khronos.org/registry/webgl/extensions/WEBGL_debug_shaders/'
    },
    'WEBGL_lose_context':{
        name : 'WEBGL_lose_context',
        url  : 'https://www.khronos.org/registry/webgl/extensions/WEBGL_lose_context/'
    },
    'EXT_disjoint_timer_query':{
        name : 'EXT_disjoint_timer_query',
        url  : 'https://www.khronos.org/registry/webgl/extensions/EXT_disjoint_timer_query/'
    },
    'WebIDL':{
        name : 'Web IDL (Second Edition)',
        url  : 'https://heycam.github.io/webidl/'
    },
    'WebMIDI API':{
        name : 'Web MIDI API',
        url: 'https://webaudio.github.io/web-midi-api/'
    },
    'Web Notifications':{
        name : 'Notifications API',
        url  : 'https://notifications.spec.whatwg.org/'
    },
    'WebRTC 1.0':{
        name : 'WebRTC 1.0: Real-time Communication Between Browser',
        url  : 'https://w3c.github.io/webrtc-pc/'
    },
    'Websockets':{
        name : 'The WebSocket API',
        url  : 'https://w3c.github.io/websockets/'
    },
    'Web Speech API':{
        name : 'Web Speech API',
        url  : 'https://dvcs.w3.org/hg/speech-api/raw-file/tip/webspeechapi.html'
    },
    'Web Storage':{
        name : 'Web Storage (Second edition)',
        url  : 'https://w3c.github.io/webstorage/'
    },
    'Web Telephony':{
        name : 'Web Telephony',
        url  : 'https://wiki.mozilla.org/WebAPI/WebTelephony'
    },
    'Web USB':{
        name : 'WebUSB',
        url  : 'http://reillyeon.github.io/webusb/'
    },
    'WebVR':{
        name : 'WebVR',
        url  : 'https://mozvr.github.io/webvr-spec/webvr.html'
    },
    'WebVTT':{
        name : 'WebVTT: The Web Video Text Tracks Format',
        url  : 'http://dev.w3.org/html5/webvtt/'
    },
    'Web Workers':{
        name : 'Web Workers',
        url  : 'https://w3c.github.io/workers/'
    },
    'WOFF1.0':{
        name : 'WOFF File Format 1.0',
        url  : 'http://www.w3.org/TR/WOFF/'
    },
    'WOFF2.0':{
        name : 'WOFF File Format 2.0',
        url  : 'http://dev.w3.org/webfonts/WOFF2/spec/'
    },
    'XMLHttpRequest':{
        name : 'XMLHttpRequest',
        url  : 'https://xhr.spec.whatwg.org'
    }
};

// Some APIs share specifications. Here we attend to that.

specList['Blending'] = specList['Compositing'];
specList['CSS3 2D Transforms'] = specList['CSS3 3D Transforms'] = specList['CSS3 Transforms'];
specList['CSS3 Break'] = specList['CSS3 Fragmentation'];
specList['CSS3 UI'] = specList['CSS3 Basic UI'];
specList['WebSMS'] = specList['Messaging'];
specList['CSS3 Template'] = specList['CSS3 Grid'];

console.log(JSON.stringify(specList, null, 4));
