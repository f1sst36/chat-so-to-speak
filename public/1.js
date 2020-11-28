(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./resources/js/Application.tsx":
/*!**************************************!*\
  !*** ./resources/js/Application.tsx ***!
  \**************************************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ "./resources/js/components/index.ts");
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages */ "./resources/js/pages/index.ts");
/* harmony import */ var _stores_useStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stores/useStore */ "./resources/js/stores/useStore.tsx");






var HomeRoutes = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", { className: "home" },
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["AppBar"], null),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], { exact: true, path: "/call-history", component: _pages__WEBPACK_IMPORTED_MODULE_4__["ErrorPage"] }),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], { exact: true, path: "/contacts", component: _pages__WEBPACK_IMPORTED_MODULE_4__["ErrorPage"] }),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], { exact: true, path: "/chat/:type", component: _pages__WEBPACK_IMPORTED_MODULE_4__["ChatPage"] }),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], { exact: true, path: "/notifications", component: _pages__WEBPACK_IMPORTED_MODULE_4__["ErrorPage"] }),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], { exact: true, path: "/settings", component: _pages__WEBPACK_IMPORTED_MODULE_4__["ErrorPage"] }))); };
var App = Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__["observer"])(function () {
    var userStore = Object(_stores_useStore__WEBPACK_IMPORTED_MODULE_5__["useStores"])().userStore;
    var currentUser = userStore.currentUser, pending = userStore.pending, fetchUser = userStore.fetchUser;
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (localStorage.getItem("accessToken")) {
            fetchUser();
        }
    }, [fetchUser]);
    if (pending) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Backdrop"], null);
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], { exact: true, path: "/sign-in", render: function () {
                return currentUser ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], { to: "/chat/direct" }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages__WEBPACK_IMPORTED_MODULE_4__["SignInPage"], null);
            } }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], { exact: true, path: [
                "/call-history",
                "/contacts",
                "/chat/:type",
                "/notifications",
                "/settings"
            ], render: function () {
                return currentUser ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HomeRoutes, null) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], { to: "/sign-in" });
            } }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], { render: function () {
                return currentUser ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], { to: "/chat/direct" })) : (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], { to: "/sign-in" }));
            } })));
});


/***/ }),

/***/ "./resources/js/components/AppBar/AppBar.tsx":
/*!***************************************************!*\
  !*** ./resources/js/components/AppBar/AppBar.tsx ***!
  \***************************************************/
/*! exports provided: AppBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBar", function() { return AppBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Avatar */ "./resources/js/components/Avatar.tsx");
/* harmony import */ var _AppBarMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AppBarMenu */ "./resources/js/components/AppBar/AppBarMenu.tsx");
/* harmony import */ var _stores_useStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../stores/useStore */ "./resources/js/stores/useStore.tsx");






var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) { return ({
    appBar: {
        background: theme.palette.background.dark,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    },
    appBarAvatar: {
        padding: "20px"
    }
}); });
var AppBar = Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__["observer"])(function () {
    var classes = useStyles();
    var userStore = Object(_stores_useStore__WEBPACK_IMPORTED_MODULE_5__["useStores"])().userStore;
    var currentUser = userStore.currentUser, doLogout = userStore.doLogout;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("aside", { className: classes.appBar },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: classes.appBarAvatar },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Avatar__WEBPACK_IMPORTED_MODULE_3__["Avatar"], { src: currentUser === null || currentUser === void 0 ? void 0 : currentUser.avatar, alt: currentUser === null || currentUser === void 0 ? void 0 : currentUser.name, size: "large", isOnline: true }, currentUser === null || currentUser === void 0 ? void 0 : currentUser.name[0])),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AppBarMenu__WEBPACK_IMPORTED_MODULE_4__["AppBarMenu"], { doLogout: doLogout })));
});


/***/ }),

/***/ "./resources/js/components/AppBar/AppBarMenu.tsx":
/*!*******************************************************!*\
  !*** ./resources/js/components/AppBar/AppBarMenu.tsx ***!
  \*******************************************************/
/*! exports provided: AppBarMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBarMenu", function() { return AppBarMenu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");





var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) { return ({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "calc(100vh - 150px)"
    },
    listItemSelected: {
        overflow: "hidden",
        "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            width: "6px",
            background: theme.palette.primary.main,
            boxShadow: "0px 0px 20px 2px " + theme.palette.primary.main
        }
    },
    listItemIcon: {
        justifyContent: "center",
        width: "100%",
        alignItems: "center",
        height: "40px",
        color: "#686d81"
    },
    listItemIconSelected: {
        color: "#f8f8f8"
    }
}); });
var ListItemLink = function (_a) {
    var to = _a.to, paths = _a.paths, icon = _a.icon;
    var classes = useStyles();
    var location = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useLocation"])();
    var isSelected = paths
        ? paths.includes(location.pathname)
        : location.pathname === to;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItem"], { button: true, classes: { selected: classes.listItemSelected }, selected: isSelected, component: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], to: to },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItemIcon"], { className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(classes.listItemIcon, isSelected && classes.listItemIconSelected) }, icon)));
};
var AppBarMenu = function (_a) {
    var doLogout = _a.doLogout;
    var classes = useStyles();
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", { className: classes.root },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["List"], null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListItemLink, { to: "/call-history", icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__["Call"], null) }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListItemLink, { to: "/contacts", icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__["PeopleAlt"], null) }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListItemLink, { to: "/chat/direct", paths: ["/chat/direct", "/chat/groups"], icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__["Chat"], null) }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListItemLink, { to: "/notifications", icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__["Notifications"], null) })),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["List"], null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListItemLink, { to: "/settings", icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__["Settings"], null) }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItem"], { button: true, onClick: doLogout },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItemIcon"], { className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(classes.listItemIcon) },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__["ExitToApp"], null))))));
};


/***/ }),

/***/ "./resources/js/components/AppBar/index.ts":
/*!*************************************************!*\
  !*** ./resources/js/components/AppBar/index.ts ***!
  \*************************************************/
/*! exports provided: AppBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppBar */ "./resources/js/components/AppBar/AppBar.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppBar", function() { return _AppBar__WEBPACK_IMPORTED_MODULE_0__["AppBar"]; });




/***/ }),

/***/ "./resources/js/components/Avatar.tsx":
/*!********************************************!*\
  !*** ./resources/js/components/Avatar.tsx ***!
  \********************************************/
/*! exports provided: Avatar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Avatar", function() { return Avatar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};


var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function () { return ({
    small: {
        width: "36px",
        height: "36px"
    },
    large: {
        width: "48px",
        height: "48px"
    }
}); });
var StyledBadge = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(function () { return ({
    badge: {
        backgroundColor: "#44b700",
        color: "#44b700",
        boxShadow: "0 0 0 2px #fff",
        "&::after": {
            position: "absolute",
            top: "-1px",
            left: "-1px",
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            animation: "$ripple 1.2s infinite ease-in-out",
            border: "1px solid currentColor",
            content: '""'
        }
    },
    "@keyframes ripple": {
        "0%": {
            transform: "scale(.8)",
            opacity: 1
        },
        "100%": {
            transform: "scale(2.4)",
            opacity: 0
        }
    }
}); })(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Badge"]);
var Avatar = function (_a) {
    var isOnline = _a.isOnline, size = _a.size, props = __rest(_a, ["isOnline", "size"]);
    var classes = useStyles();
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledBadge, { invisible: !isOnline, overlap: "circle", anchorOrigin: {
            vertical: "bottom",
            horizontal: "right"
        }, variant: "dot" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Avatar"], __assign({ className: size === "small"
                ? classes.small
                : size === "large"
                    ? classes.large
                    : "" }, props))));
};


/***/ }),

/***/ "./resources/js/components/Backdrop.tsx":
/*!**********************************************!*\
  !*** ./resources/js/components/Backdrop.tsx ***!
  \**********************************************/
/*! exports provided: Backdrop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Backdrop", function() { return Backdrop; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spinners */ "./node_modules/react-spinners/index.js");
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_spinners__WEBPACK_IMPORTED_MODULE_2__);



var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) { return ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: theme.palette.background.light
    }
}); });
var Backdrop = function () {
    var classes = useStyles();
    var theme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["useTheme"])();
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Backdrop"], { className: classes.backdrop, transitionDuration: 500, open: true },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spinners__WEBPACK_IMPORTED_MODULE_2__["ClockLoader"], { size: 70, color: theme.palette.primary.main })));
};


/***/ }),

/***/ "./resources/js/components/Chat/Dialog.tsx":
/*!*************************************************!*\
  !*** ./resources/js/components/Chat/Dialog.tsx ***!
  \*************************************************/
/*! exports provided: Dialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dialog", function() { return Dialog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Avatar */ "./resources/js/components/Avatar.tsx");
/* harmony import */ var _utils_formatDate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/formatDate */ "./resources/js/utils/formatDate.ts");






var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) { return ({
    dialog: {
        padding: "12px 16px",
        display: "flex",
        alignItems: "center",
        textDecoration: "none",
        backgroundColor: "#fff",
        marginBottom: "8px",
        borderRadius: "8px",
        boxShadow: "1px 2px 3px 0px rgba(0, 0, 0, 0.08)",
        overflow: "hidden",
        transition: "0.2s ease",
        "&:hover": {
            backgroundColor: "#efefef"
        }
    },
    dialogSelected: {
        position: "relative",
        backgroundColor: theme.palette.background.dark,
        "&:hover": {
            backgroundColor: "#383d58"
        },
        "&:before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            backgroundColor: theme.palette.primary.main,
            width: "7px"
        }
    },
    dialogAvatar: {
        marginRight: "12px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    dialogContent: {
        width: "100%",
        display: "grid"
    },
    dialogHeader: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "2px"
    },
    dialogName: function (isSelected) { return ({
        color: isSelected && "#f8f8f8"
    }); },
    dialogDate: function (isSelected) { return ({
        color: !isSelected ? "#565656" : "#dcdcdc"
    }); },
    dialogMessage: function (isSelected) { return ({
        color: !isSelected ? "#6c6f80" : "#dcdcdc",
        textOverflow: "ellipsis",
        overflow: "hidden",
        whiteSpace: "nowrap",
        paddingRight: "30px"
    }); },
    dialogBadge: {
        width: "100%"
    },
    dialogBadgeCircle: {
        right: "12px",
        bottom: "10px"
    }
}); });
var Dialog = function (_a) {
    var _b, _c, _d, _e;
    var dialog = _a.dialog, type = _a.type, isSelected = _a.isSelected;
    var classes = useStyles(isSelected);
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { to: "/chat/" + type + "?p=" + dialog.id, className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(classes.dialog, isSelected && classes.dialogSelected) },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Badge"], { classes: {
                root: classes.dialogBadge,
                badge: classes.dialogBadgeCircle
            }, badgeContent: 0, max: 9, color: "primary", anchorOrigin: {
                vertical: "bottom",
                horizontal: "right"
            } },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: classes.dialogAvatar },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Avatar__WEBPACK_IMPORTED_MODULE_4__["Avatar"], { src: dialog.type === 0 ? (_b = dialog.user) === null || _b === void 0 ? void 0 : _b.avatar : dialog.avatar, alt: ((_c = dialog.user) === null || _c === void 0 ? void 0 : _c.name) || dialog.name, isOnline: false }, ((_d = dialog.user) === null || _d === void 0 ? void 0 : _d.name[0]) || (dialog.name && dialog.name[0]))),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: classes.dialogContent },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: classes.dialogHeader },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], { className: classes.dialogName, variant: "h6" }, dialog.name),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], { className: classes.dialogDate, variant: "caption" }, dialog.messages.length > 0
                        ? Object(_utils_formatDate__WEBPACK_IMPORTED_MODULE_5__["formatDate"])(dialog.messages[0].updated_at)
                        : "")),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], { className: classes.dialogMessage, variant: "body2" }, dialog.messages.length > 0
                    ? (_e = dialog.messages[0]) === null || _e === void 0 ? void 0 : _e.text : "Нет сообщений")))));
};


/***/ }),

/***/ "./resources/js/components/Chat/Dialogs.tsx":
/*!**************************************************!*\
  !*** ./resources/js/components/Chat/Dialogs.tsx ***!
  \**************************************************/
/*! exports provided: Dialogs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dialogs", function() { return Dialogs; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _DialogsHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DialogsHeader */ "./resources/js/components/Chat/DialogsHeader.tsx");
/* harmony import */ var _DialogsTabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DialogsTabs */ "./resources/js/components/Chat/DialogsTabs.tsx");
/* harmony import */ var _DialogsSearch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DialogsSearch */ "./resources/js/components/Chat/DialogsSearch.tsx");
/* harmony import */ var _DialogsList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DialogsList */ "./resources/js/components/Chat/DialogsList.tsx");
/* harmony import */ var _stores_useStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../stores/useStore */ "./resources/js/stores/useStore.tsx");








var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) { return ({
    dialogs: {
        background: theme.palette.background.light,
        maxWidth: "380px",
        width: "100%",
        padding: "20px"
    }
}); });
var Dialogs = function () {
    var classes = useStyles();
    var type = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useParams"])().type;
    var dialogStore = Object(_stores_useStore__WEBPACK_IMPORTED_MODULE_7__["useStores"])().dialogStore;
    var setCurrentTab = dialogStore.setCurrentTab, fetchDialogs = dialogStore.fetchDialogs;
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (type) {
            setCurrentTab(type);
            fetchDialogs();
        }
    }, [type, setCurrentTab, fetchDialogs]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: classes.dialogs },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DialogsHeader__WEBPACK_IMPORTED_MODULE_3__["DialogsHeader"], null),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DialogsTabs__WEBPACK_IMPORTED_MODULE_4__["DialogsTabs"], null),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DialogsSearch__WEBPACK_IMPORTED_MODULE_5__["DialogsSearch"], null),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], { exact: true, path: "/chat/direct", render: function () { return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DialogsList__WEBPACK_IMPORTED_MODULE_6__["DialogsList"], { type: "direct" }); } }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], { exact: true, path: "/chat/groups", render: function () { return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DialogsList__WEBPACK_IMPORTED_MODULE_6__["DialogsList"], { type: "groups" }); } }))));
};


/***/ }),

/***/ "./resources/js/components/Chat/DialogsEmpty.tsx":
/*!*******************************************************!*\
  !*** ./resources/js/components/Chat/DialogsEmpty.tsx ***!
  \*******************************************************/
/*! exports provided: DialogsEmpty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogsEmpty", function() { return DialogsEmpty; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _images_dialogs_empty_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/dialogs-empty.png */ "./resources/js/images/dialogs-empty.png");
/* harmony import */ var _images_dialogs_empty_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_dialogs_empty_png__WEBPACK_IMPORTED_MODULE_2__);



var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function () { return ({
    dialogsEmpty: {
        textAlign: "center"
    },
    dialogsEmptyImage: {
        marginBottom: "6px"
    },
    dialogsEmptyText: {}
}); });
var DialogsEmpty = function (_a) {
    var text = _a.text, disableImage = _a.disableImage;
    var classes = useStyles();
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: classes.dialogsEmpty },
        !disableImage && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: classes.dialogsEmptyImage },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", { src: _images_dialogs_empty_png__WEBPACK_IMPORTED_MODULE_2___default.a, alt: "" }))),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], { className: classes.dialogsEmptyText, variant: "body2" }, text)));
};


/***/ }),

/***/ "./resources/js/components/Chat/DialogsHeader.tsx":
/*!********************************************************!*\
  !*** ./resources/js/components/Chat/DialogsHeader.tsx ***!
  \********************************************************/
/*! exports provided: DialogsHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogsHeader", function() { return DialogsHeader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var _stores_useStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../stores/useStore */ "./resources/js/stores/useStore.tsx");




var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function () { return ({
    dialogsHeader: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "16px"
    },
    addDialogBtn: {
        borderRadius: "50%",
        height: "42px",
        minWidth: "42px",
        padding: "0"
    }
}); });
var DialogsHeader = function () {
    var classes = useStyles();
    var createGroupStore = Object(_stores_useStore__WEBPACK_IMPORTED_MODULE_3__["useStores"])().createGroupStore;
    var setCreateModalIsOpen = createGroupStore.setCreateModalIsOpen;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: classes.dialogsHeader },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], { variant: "h1" }, "\u0427\u0430\u0442\u044B"),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], { title: "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0433\u0440\u0443\u043F\u043F\u0443", placement: "left" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], { className: classes.addDialogBtn, variant: "contained", color: "primary", onClick: function () { return setCreateModalIsOpen(true); }, disableElevation: true },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["Add"], null)))));
};


/***/ }),

/***/ "./resources/js/components/Chat/DialogsList.tsx":
/*!******************************************************!*\
  !*** ./resources/js/components/Chat/DialogsList.tsx ***!
  \******************************************************/
/*! exports provided: DialogsList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogsList", function() { return DialogsList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _Dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Dialog */ "./resources/js/components/Chat/Dialog.tsx");
/* harmony import */ var _DialogsEmpty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DialogsEmpty */ "./resources/js/components/Chat/DialogsEmpty.tsx");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Loader */ "./resources/js/components/Loader.tsx");
/* harmony import */ var _stores_useStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../stores/useStore */ "./resources/js/stores/useStore.tsx");








var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function () { return ({
    dialogsList: {
        height: "calc(100vh - 197px)",
        overflowY: "auto",
        paddingRight: "7px"
    }
}); });
var DialogsList = Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__["observer"])(function (_a) {
    var type = _a.type;
    var classes = useStyles();
    var query = new URLSearchParams(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useLocation"])().search);
    var dialogStore = Object(_stores_useStore__WEBPACK_IMPORTED_MODULE_7__["useStores"])().dialogStore;
    var dialogs = dialogStore.dialogs, pending = dialogStore.pending, searchText = dialogStore.searchText, searchDialogs = dialogStore.searchDialogs;
    var renderList = function (list) {
        return list === null || list === void 0 ? void 0 : list.map(function (dialog) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Dialog__WEBPACK_IMPORTED_MODULE_4__["Dialog"], { key: dialog.id, dialog: dialog, type: type, isSelected: query.get("p") === dialog.id.toString() })); });
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: classes.dialogsList }, pending ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Loader__WEBPACK_IMPORTED_MODULE_6__["Loader"], { size: 30, isCenter: true })) : searchText ? (searchDialogs.length > 0 ? (renderList(searchDialogs)) : (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DialogsEmpty__WEBPACK_IMPORTED_MODULE_5__["DialogsEmpty"], { text: "\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E", disableImage: true }))) : dialogs[type].length > 0 ? (renderList(dialogs[type])) : (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DialogsEmpty__WEBPACK_IMPORTED_MODULE_5__["DialogsEmpty"], { text: "\u0427\u0430\u0442\u043E\u0432 \u043D\u0435\u0442" }))));
});


/***/ }),

/***/ "./resources/js/components/Chat/DialogsSearch.tsx":
/*!********************************************************!*\
  !*** ./resources/js/components/Chat/DialogsSearch.tsx ***!
  \********************************************************/
/*! exports provided: DialogsSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogsSearch", function() { return DialogsSearch; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var _stores_useStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../stores/useStore */ "./resources/js/stores/useStore.tsx");





var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) { return ({
    dialogsSearch: {
        marginBottom: "20px"
    },
    dialogsSearchInput: {
        fontSize: "14px",
        fontWeight: 500,
        background: "#fff",
        boxShadow: "0px 1px 6px 2px rgba(0, 0, 0, 0.08)",
        "&:hover, &.Mui-focused": {
            background: "#fff"
        }
    },
    searchSvg: {
        color: theme.palette.text.secondary
    }
}); });
var DialogsSearch = Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__["observer"])(function () {
    var classes = useStyles();
    var dialogStore = Object(_stores_useStore__WEBPACK_IMPORTED_MODULE_4__["useStores"])().dialogStore;
    var searchText = dialogStore.searchText, setSearchText = dialogStore.setSearchText;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: classes.dialogsSearch },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], { variant: "filled", placeholder: "\u041F\u043E\u0438\u0441\u043A", value: searchText, onChange: function (e) { return setSearchText(e.target.value); }, InputProps: {
                classes: { root: classes.dialogsSearchInput },
                startAdornment: (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["InputAdornment"], { position: "start" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__["Search"], { classes: { root: classes.searchSvg } })))
            }, fullWidth: true })));
});


/***/ }),

/***/ "./resources/js/components/Chat/DialogsTabs.tsx":
/*!******************************************************!*\
  !*** ./resources/js/components/Chat/DialogsTabs.tsx ***!
  \******************************************************/
/*! exports provided: DialogsTabs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogsTabs", function() { return DialogsTabs; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _stores_useStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../stores/useStore */ "./resources/js/stores/useStore.tsx");





var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function () { return ({
    dialogsTabs: {
        display: "flex",
        alignItems: "center",
        marginBottom: "15px"
    },
    dialogsTabsLink: {
        textDecoration: "none"
    },
    dialogsTabsItem: {
        marginRight: "20px",
        paddingRight: "20px"
    },
    dialogsTabsItemBadge: {
        top: "6px"
    }
}); });
var DialogsTabs = Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__["observer"])(function () {
    var classes = useStyles();
    var dialogStore = Object(_stores_useStore__WEBPACK_IMPORTED_MODULE_4__["useStores"])().dialogStore;
    var currentTab = dialogStore.currentTab;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: classes.dialogsTabs },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { to: "/chat/direct", className: classes.dialogsTabsLink },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Badge"], { classes: {
                    root: classes.dialogsTabsItem,
                    badge: classes.dialogsTabsItemBadge
                }, overlap: "circle", anchorOrigin: {
                    vertical: "top",
                    horizontal: "right"
                }, variant: "dot", color: "primary", invisible: true },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], { variant: "h6", color: currentTab === "direct" ? "textPrimary" : "textSecondary" }, "\u041B\u0438\u0447\u043D\u044B\u0435"))),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { to: "/chat/groups", className: classes.dialogsTabsLink },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Badge"], { classes: {
                    root: classes.dialogsTabsItem,
                    badge: classes.dialogsTabsItemBadge
                }, overlap: "circle", anchorOrigin: {
                    vertical: "top",
                    horizontal: "right"
                }, variant: "dot", color: "primary", invisible: true },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], { variant: "h6", color: currentTab === "groups" ? "textPrimary" : "textSecondary" }, "\u0413\u0440\u0443\u043F\u043F\u044B")))));
});


/***/ }),

/***/ "./resources/js/components/Chat/Message.tsx":
/*!**************************************************!*\
  !*** ./resources/js/components/Chat/Message.tsx ***!
  \**************************************************/
/*! exports provided: Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Avatar */ "./resources/js/components/Avatar.tsx");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Loader */ "./resources/js/components/Loader.tsx");
/* harmony import */ var _utils_formatDate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/formatDate */ "./resources/js/utils/formatDate.ts");






var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) { return ({
    message: {
        position: "relative",
        maxWidth: "450px",
        wordBreak: "break-word",
        padding: "6px 46px 6px 16px",
        marginTop: "6px",
        marginRight: "auto",
        boxShadow: "1px 1px 4px 0px rgba(0, 0, 0, 0.1)",
        background: theme.palette.secondary.main
    },
    myMessage: {
        marginLeft: "auto",
        marginRight: "unset",
        background: theme.palette.primary.main
    },
    marginBottom: {
        marginBottom: "12px"
    },
    startMessage: function (isMyMessage) { return ({
        borderRadius: isMyMessage ? "30px 30px 0 30px" : "30px 30px 30px 0"
    }); },
    middleMessage: function (isMyMessage) { return ({
        borderRadius: isMyMessage ? "30px 0 0 30px" : "0 30px 30px 0"
    }); },
    endMessage: function (isMyMessage) { return ({
        borderRadius: isMyMessage ? "30px 0 0 30px" : "0 30px 30px 0",
        "&::after": {
            content: '""',
            position: "absolute",
            left: isMyMessage ? "unset" : "-14px",
            right: isMyMessage ? "-14px" : "unset",
            bottom: "0px",
            borderTop: "10px solid transparent",
            borderRight: isMyMessage
                ? "none"
                : "14px solid " + theme.palette.secondary.main,
            borderLeft: isMyMessage
                ? "14px solid " + theme.palette.primary.main
                : "none"
        }
    }); },
    messageText: function (isMyMessage) { return ({
        color: isMyMessage ? "#fff" : "unset",
        fontWeight: 500
    }); },
    messageDate: function (isMyMessage) { return ({
        position: "absolute",
        right: "12px",
        bottom: "5px",
        color: isMyMessage ? "#fff" : "unset",
        fontWeight: 500
    }); },
    avatar: function (isMyMessage) { return ({
        position: "absolute",
        left: isMyMessage ? "unset" : "-50px",
        right: isMyMessage ? "-50px" : "unset",
        bottom: "0"
    }); },
    messageLoader: {
        position: "absolute",
        left: "-20px",
        bottom: 0
    }
}); });
var Message = function (_a) {
    var message = _a.message, type = _a.type, pending = _a.pending, currentUser = _a.currentUser;
    var isMyMessage = (currentUser === null || currentUser === void 0 ? void 0 : currentUser.id) === message.user.id;
    var classes = useStyles(isMyMessage);
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: Object(clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(classes.message, isMyMessage && classes.myMessage, type === "start" && classes.startMessage, type === "middle" && classes.middleMessage, type === "end" && classes.endMessage, type === "end" && classes.marginBottom) },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], { className: classes.messageText, variant: "body1" }, message.text),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], { className: classes.messageDate, variant: "caption" }, Object(_utils_formatDate__WEBPACK_IMPORTED_MODULE_5__["formatDate"])(message.updated_at)),
        type === "end" && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: classes.avatar },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Avatar__WEBPACK_IMPORTED_MODULE_3__["Avatar"], { src: message.user.avatar, alt: message.user.name }, message.user.name[0]))),
        pending && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: classes.messageLoader },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Loader__WEBPACK_IMPORTED_MODULE_4__["Loader"], { size: 16 })))));
};


/***/ }),

/***/ "./resources/js/components/Chat/Messages.tsx":
/*!***************************************************!*\
  !*** ./resources/js/components/Chat/Messages.tsx ***!
  \***************************************************/
/*! exports provided: Messages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Messages", function() { return Messages; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _MessagesEmpty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MessagesEmpty */ "./resources/js/components/Chat/MessagesEmpty.tsx");
/* harmony import */ var _MessagesHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MessagesHeader */ "./resources/js/components/Chat/MessagesHeader.tsx");
/* harmony import */ var _MessagesList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MessagesList */ "./resources/js/components/Chat/MessagesList.tsx");
/* harmony import */ var _MessagesInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MessagesInput */ "./resources/js/components/Chat/MessagesInput.tsx");
/* harmony import */ var _stores_useStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../stores/useStore */ "./resources/js/stores/useStore.tsx");









var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function () { return ({
    messages: {
        position: "relative",
        width: "100%",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    }
}); });
var Messages = Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__["observer"])(function () {
    var classes = useStyles();
    var location = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useLocation"])();
    var dialogStore = Object(_stores_useStore__WEBPACK_IMPORTED_MODULE_8__["useStores"])().dialogStore;
    var pending = dialogStore.pending, currentDialog = dialogStore.currentDialog, setCurrentDialogById = dialogStore.setCurrentDialogById;
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (!pending) {
            var queryParams = new URLSearchParams(location.search);
            setCurrentDialogById(queryParams.get("p"));
        }
    }, [location, pending, setCurrentDialogById]);
    return currentDialog ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: classes.messages },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MessagesHeader__WEBPACK_IMPORTED_MODULE_5__["MessagesHeader"], { currentDialog: currentDialog }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MessagesList__WEBPACK_IMPORTED_MODULE_6__["MessagesList"], null),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MessagesInput__WEBPACK_IMPORTED_MODULE_7__["MessagesInput"], null))) : (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MessagesEmpty__WEBPACK_IMPORTED_MODULE_4__["MessagesEmpty"], null));
});


/***/ }),

/***/ "./resources/js/components/Chat/MessagesEmpty.tsx":
/*!********************************************************!*\
  !*** ./resources/js/components/Chat/MessagesEmpty.tsx ***!
  \********************************************************/
/*! exports provided: MessagesEmpty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesEmpty", function() { return MessagesEmpty; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");


var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function () { return ({
    messagesEmpty: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    messagesEmptyText: {
        background: "#f8f8f8",
        color: "#1b1b1b",
        padding: "3px 12px",
        borderRadius: "30px",
        boxShadow: "0px 0px 7px -1px rgba(0, 0, 0, 0.35)"
    }
}); });
var MessagesEmpty = function () {
    var classes = useStyles();
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: classes.messagesEmpty },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], { className: classes.messagesEmptyText, variant: "body2" }, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435, \u043A\u043E\u043C\u0443 \u0445\u043E\u0442\u0435\u043B\u0438 \u0431\u044B \u043D\u0430\u043F\u0438\u0441\u0430\u0442\u044C")));
};


/***/ }),

/***/ "./resources/js/components/Chat/MessagesHeader.tsx":
/*!*********************************************************!*\
  !*** ./resources/js/components/Chat/MessagesHeader.tsx ***!
  \*********************************************************/
/*! exports provided: MessagesHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesHeader", function() { return MessagesHeader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Avatar */ "./resources/js/components/Avatar.tsx");




var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) { return ({
    messagesHeader: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 15px",
        borderBottom: "2px solid rgba(0, 0, 0, 0.1)"
    },
    messagesHeaderLeft: {
        display: "flex",
        alignItems: "center"
    },
    messagesHeaderRight: {
        display: "flex",
        alignItems: "center"
    },
    messagesUserInfo: {
        marginLeft: "12px"
    },
    iconButton: {
        marginLeft: "8px",
        color: theme.palette.text.secondary
    },
    iconButtonSvg: {
        width: "28px",
        height: "28px"
    }
}); });
var MessagesHeader = function (_a) {
    var _b, _c;
    var currentDialog = _a.currentDialog;
    var classes = useStyles();
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: classes.messagesHeader },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: classes.messagesHeaderLeft },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Avatar__WEBPACK_IMPORTED_MODULE_3__["Avatar"], { src: currentDialog.avatar, alt: currentDialog.name, size: "large" }, currentDialog.name && currentDialog.name[0]),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: classes.messagesUserInfo },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], { variant: "h6" }, currentDialog.name),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], { variant: "body2", color: "textSecondary" }, currentDialog.type === 0
                    ? "Был(а) 2 часа назад"
                    : ((_b = currentDialog.users) === null || _b === void 0 ? void 0 : _b.length) === 1
                        ? "1 участник"
                        : ((_c = currentDialog.users) === null || _c === void 0 ? void 0 : _c.length) + " \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u0432"))),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: classes.messagesHeaderRight },
            currentDialog.type === 1 && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], { className: classes.iconButton },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["Add"], { classes: { root: classes.iconButtonSvg } }))),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], { className: classes.iconButton },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["Videocam"], { classes: { root: classes.iconButtonSvg } })),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], { className: classes.iconButton },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["MoreHoriz"], { classes: { root: classes.iconButtonSvg } })))));
};


/***/ }),

/***/ "./resources/js/components/Chat/MessagesInput.tsx":
/*!********************************************************!*\
  !*** ./resources/js/components/Chat/MessagesInput.tsx ***!
  \********************************************************/
/*! exports provided: MessagesInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesInput", function() { return MessagesInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var _stores_useStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../stores/useStore */ "./resources/js/stores/useStore.tsx");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/constants */ "./resources/js/utils/constants.ts");






var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) { return ({
    messagesBottom: {
        display: "flex",
        alignItems: "center",
        padding: "12px 15px",
        borderTop: "2px solid rgba(0, 0, 0, 0.1)"
    },
    messagesInput: {
        padding: "0",
        fontSize: "14px",
        fontWeight: 500,
        background: "#f5f5f5",
        "&:hover, &.Mui-focused": {
            background: "#f5f5f5"
        }
    },
    messagesInputInner: {
        padding: "14.5px 0"
    },
    inputSvg: {
        color: theme.palette.text.secondary
    },
    iconBtn: {
        marginLeft: "4px"
    },
    sendMessageBtn: {
        marginLeft: "12px",
        borderRadius: "50%",
        height: "46px",
        minWidth: "46px",
        padding: "0"
    }
}); });
var MessagesInput = Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__["observer"])(function () {
    var classes = useStyles();
    var messageStore = Object(_stores_useStore__WEBPACK_IMPORTED_MODULE_4__["useStores"])().messageStore;
    var messageText = messageStore.messageText, setMessageText = messageStore.setMessageText, sendMessage = messageStore.sendMessage;
    var onKeyDown = function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            event.stopPropagation();
            sendMessage();
        }
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: classes.messagesBottom },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], { multiline: true, rowsMax: 3, variant: "filled", placeholder: "\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435...", value: messageText, onChange: function (e) { return setMessageText(e.target.value); }, onKeyDown: onKeyDown, InputProps: {
                classes: {
                    root: classes.messagesInput,
                    input: classes.messagesInputInner
                },
                startAdornment: (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["InputAdornment"], { position: "start" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__["AttachFile"], { classes: { root: classes.inputSvg } })))),
                endAdornment: (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["InputAdornment"], { position: "end" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], { variant: "h6", color: "textSecondary" },
                        messageText.length,
                        "/",
                        _utils_constants__WEBPACK_IMPORTED_MODULE_5__["MAX_MESSAGE_COUNT"]),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], { className: classes.iconBtn },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__["EmojiEmotions"], { classes: { root: classes.inputSvg } })),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], { className: classes.iconBtn },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__["Mic"], { classes: { root: classes.inputSvg } }))))
            }, fullWidth: true }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], { className: classes.sendMessageBtn, variant: "contained", color: "primary", onClick: sendMessage, disableElevation: true },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__["Send"], null))));
});


/***/ }),

/***/ "./resources/js/components/Chat/MessagesList.tsx":
/*!*******************************************************!*\
  !*** ./resources/js/components/Chat/MessagesList.tsx ***!
  \*******************************************************/
/*! exports provided: MessagesList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesList", function() { return MessagesList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _Message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Message */ "./resources/js/components/Chat/Message.tsx");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Loader */ "./resources/js/components/Loader.tsx");
/* harmony import */ var _stores_useStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../stores/useStore */ "./resources/js/stores/useStore.tsx");






var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function () { return ({
    messagesList: {
        display: "flex",
        flexDirection: "column-reverse",
        height: "100%",
        padding: "0 62px 20px",
        borderRadius: "30px",
        overflowY: "auto"
    },
    loader: {
        position: "absolute",
        top: "100px",
        left: "50%",
        transform: "translateX(-50%)",
        background: "#fff",
        borderRadius: "50%",
        border: "3px solid #fff",
        boxShadow: "0px 0px 6px -3px #000",
        zIndex: 10
    }
}); });
var MessagesList = Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__["observer"])(function () {
    var classes = useStyles();
    var _a = Object(_stores_useStore__WEBPACK_IMPORTED_MODULE_5__["useStores"])(), userStore = _a.userStore, dialogStore = _a.dialogStore;
    var currentUser = userStore.currentUser;
    var currentDialog = dialogStore.currentDialog, messagesPending = dialogStore.messagesPending, hasMore = dialogStore.hasMore, fetchMessages = dialogStore.fetchMessages;
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (currentDialog && currentDialog.messages.length === 1) {
            fetchMessages();
        }
    }, [currentDialog, fetchMessages]);
    var handleScrollList = function (e) {
        if (e.currentTarget.scrollTop < 100 && hasMore && !messagesPending) {
            fetchMessages();
        }
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
        messagesPending && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: classes.loader },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Loader__WEBPACK_IMPORTED_MODULE_4__["Loader"], { size: 40, isCenter: true }))),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { onScroll: handleScrollList, className: classes.messagesList }, currentDialog === null || currentDialog === void 0 ? void 0 : currentDialog.messages.map(function (message, index) {
            var _a, _b;
            var prevMessageFromThisUser = ((_a = currentDialog === null || currentDialog === void 0 ? void 0 : currentDialog.messages[index + 1]) === null || _a === void 0 ? void 0 : _a.user.id) ===
                message.user.id;
            var nextMessageFromThisUser = ((_b = currentDialog === null || currentDialog === void 0 ? void 0 : currentDialog.messages[index - 1]) === null || _b === void 0 ? void 0 : _b.user.id) ===
                message.user.id;
            var isStart = !prevMessageFromThisUser && nextMessageFromThisUser;
            var isMiddle = prevMessageFromThisUser && nextMessageFromThisUser;
            return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Message__WEBPACK_IMPORTED_MODULE_3__["Message"], { key: message.id, message: message, type: isMiddle ? "middle" : isStart ? "start" : "end", pending: message.pending, currentUser: currentUser }));
        }))));
});


/***/ }),

/***/ "./resources/js/components/Chat/index.ts":
/*!***********************************************!*\
  !*** ./resources/js/components/Chat/index.ts ***!
  \***********************************************/
/*! exports provided: Dialogs, Messages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dialogs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dialogs */ "./resources/js/components/Chat/Dialogs.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dialogs", function() { return _Dialogs__WEBPACK_IMPORTED_MODULE_0__["Dialogs"]; });

/* harmony import */ var _Messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Messages */ "./resources/js/components/Chat/Messages.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Messages", function() { return _Messages__WEBPACK_IMPORTED_MODULE_1__["Messages"]; });





/***/ }),

/***/ "./resources/js/components/Loader.tsx":
/*!********************************************!*\
  !*** ./resources/js/components/Loader.tsx ***!
  \********************************************/
/*! exports provided: Loader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loader", function() { return Loader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-spinners */ "./node_modules/react-spinners/index.js");
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_spinners__WEBPACK_IMPORTED_MODULE_3__);




var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function () { return ({
    loader: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
}); });
var Loader = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 50 : _b, isCenter = _a.isCenter;
    var classes = useStyles();
    var theme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["useTheme"])();
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: Object(clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(isCenter && classes.loader) },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spinners__WEBPACK_IMPORTED_MODULE_3__["ClockLoader"], { size: size, color: theme.palette.primary.main })));
};


/***/ }),

/***/ "./resources/js/components/Modals/CreateGroupModal.tsx":
/*!*************************************************************!*\
  !*** ./resources/js/components/Modals/CreateGroupModal.tsx ***!
  \*************************************************************/
/*! exports provided: CreateGroupModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateGroupModal", function() { return CreateGroupModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Loader */ "./resources/js/components/Loader.tsx");
/* harmony import */ var _stores_useStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../stores/useStore */ "./resources/js/stores/useStore.tsx");






var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function () { return ({
    dialogPaper: {
        width: "100%",
        maxWidth: "380px"
    },
    dialogContent: {
        display: "flex",
        alignItems: "center"
    },
    avatarAttachmentWrapper: {
        position: "relative",
        marginRight: "20px"
    },
    avatarAttachment: {
        width: "80px",
        height: "80px"
    },
    avatarUploadButton: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius: "50%",
        border: "none",
        background: "rgba(0, 0, 0, 0.6)",
        "&:hover": {
            background: "rgba(0, 0, 0, 0.3)"
        }
    },
    groupNameInput: {
        marginBottom: "10px"
    },
    groupNameInputLabel: {
        fontSize: "15px"
    },
    groupNameInputHelper: {
        fontWeight: 500
    },
    loader: {
        width: "100%",
        marginBottom: "15px"
    }
}); });
var CreateGroupModal = Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__["observer"])(function () {
    var classes = useStyles();
    var createGroupStore = Object(_stores_useStore__WEBPACK_IMPORTED_MODULE_5__["useStores"])().createGroupStore;
    var createGroupForm = createGroupStore.createGroupForm, avatarObjectUrl = createGroupStore.avatarObjectUrl, createModalIsOpen = createGroupStore.createModalIsOpen, pending = createGroupStore.pending, createCroupError = createGroupStore.createCroupError, setGroupName = createGroupStore.setGroupName, setGroupAvatar = createGroupStore.setGroupAvatar, createCroup = createGroupStore.createCroup, setCreateModalIsOpen = createGroupStore.setCreateModalIsOpen;
    var handleCloseModal = function () {
        setCreateModalIsOpen(false);
    };
    var handleFileAttachment = function (files) {
        if (files && files.length !== 0) {
            setGroupAvatar(files[0]);
        }
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Dialog"], { classes: { paper: classes.dialogPaper }, open: createModalIsOpen, onClose: handleCloseModal },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["DialogTitle"], null, "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0433\u0440\u0443\u043F\u043F\u044B"),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["DialogContent"], { className: classes.dialogContent },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: classes.avatarAttachmentWrapper },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Avatar"], { className: classes.avatarAttachment, src: createGroupForm.avatar ? avatarObjectUrl : undefined }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], { component: "label", variant: "outlined", className: classes.avatarUploadButton },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__["Photo"], { style: { color: "#fff" } }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", { type: "file", style: { display: "none" }, accept: "image/png, image/jpg, image/jpeg", onChange: function (event) {
                            return handleFileAttachment(event.target.files);
                        } }))),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], { className: classes.groupNameInput, label: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0433\u0440\u0443\u043F\u043F\u044B", value: createGroupForm.name, onChange: function (e) { return setGroupName(e.target.value); }, error: createCroupError, helperText: createCroupError && "Ошибка создания группы", InputLabelProps: {
                    classes: { root: classes.groupNameInputLabel }
                }, FormHelperTextProps: {
                    classes: { root: classes.groupNameInputHelper }
                }, fullWidth: true, autoFocus: true })),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["DialogActions"], null, pending ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: classes.loader },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Loader__WEBPACK_IMPORTED_MODULE_4__["Loader"], { size: 40, isCenter: true }))) : (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], { color: "primary", onClick: handleCloseModal }, "\u041E\u0442\u043C\u0435\u043D\u0430"),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], { color: "primary", onClick: createCroup, disabled: createGroupForm.name.length === 0 }, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C"))))));
});


/***/ }),

/***/ "./resources/js/components/Modals/index.ts":
/*!*************************************************!*\
  !*** ./resources/js/components/Modals/index.ts ***!
  \*************************************************/
/*! exports provided: CreateGroupModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CreateGroupModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateGroupModal */ "./resources/js/components/Modals/CreateGroupModal.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateGroupModal", function() { return _CreateGroupModal__WEBPACK_IMPORTED_MODULE_0__["CreateGroupModal"]; });




/***/ }),

/***/ "./resources/js/components/index.ts":
/*!******************************************!*\
  !*** ./resources/js/components/index.ts ***!
  \******************************************/
/*! exports provided: AppBar, Dialogs, Messages, Backdrop, Loader, CreateGroupModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppBar */ "./resources/js/components/AppBar/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppBar", function() { return _AppBar__WEBPACK_IMPORTED_MODULE_0__["AppBar"]; });

/* harmony import */ var _Chat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Chat */ "./resources/js/components/Chat/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dialogs", function() { return _Chat__WEBPACK_IMPORTED_MODULE_1__["Dialogs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Messages", function() { return _Chat__WEBPACK_IMPORTED_MODULE_1__["Messages"]; });

/* harmony import */ var _Backdrop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Backdrop */ "./resources/js/components/Backdrop.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Backdrop", function() { return _Backdrop__WEBPACK_IMPORTED_MODULE_2__["Backdrop"]; });

/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Loader */ "./resources/js/components/Loader.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Loader", function() { return _Loader__WEBPACK_IMPORTED_MODULE_3__["Loader"]; });

/* harmony import */ var _Modals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Modals */ "./resources/js/components/Modals/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateGroupModal", function() { return _Modals__WEBPACK_IMPORTED_MODULE_4__["CreateGroupModal"]; });








/***/ }),

/***/ "./resources/js/images/dialogs-empty.png":
/*!***********************************************!*\
  !*** ./resources/js/images/dialogs-empty.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/dialogs-empty.png?1c57c6f9331c9603bf3e758d27c42c4a";

/***/ }),

/***/ "./resources/js/images/error-page.jpg":
/*!********************************************!*\
  !*** ./resources/js/images/error-page.jpg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/error-page.jpg?7cda18cbe41aa5a0d2cb4cd149062ce5";

/***/ }),

/***/ "./resources/js/pages/ChatPage.tsx":
/*!*****************************************!*\
  !*** ./resources/js/pages/ChatPage.tsx ***!
  \*****************************************/
/*! exports provided: ChatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPage", function() { return ChatPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components */ "./resources/js/components/index.ts");


var ChatPage = function () {
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "content" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__["Dialogs"], null),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__["Messages"], null),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__["CreateGroupModal"], null)));
};


/***/ }),

/***/ "./resources/js/pages/ErrorPage.tsx":
/*!******************************************!*\
  !*** ./resources/js/pages/ErrorPage.tsx ***!
  \******************************************/
/*! exports provided: ErrorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPage", function() { return ErrorPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _images_error_page_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/error-page.jpg */ "./resources/js/images/error-page.jpg");
/* harmony import */ var _images_error_page_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_error_page_jpg__WEBPACK_IMPORTED_MODULE_2__);



var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function () { return ({
    errorPage: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        textAlign: "center"
    },
    errorImage: {
        maxWidth: "350px",
        margin: "0 auto 20px",
        "& img": {
            width: "100%"
        }
    },
    errorPageTitle: {
        fontWeight: 500,
        marginBottom: "14px"
    }
}); });
var ErrorPage = function () {
    var classes = useStyles();
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: classes.errorPage },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: classes.errorImage },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", { src: _images_error_page_jpg__WEBPACK_IMPORTED_MODULE_2___default.a, alt: "" })),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], { className: classes.errorPageTitle, variant: "h2" }, "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u0432 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0435"),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], { variant: "h4" }, "\u0421\u043A\u043E\u0440\u043E \u0432\u0441\u0435 \u0437\u0430\u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 - \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0439\u0442\u0435\u0441\u044C :)"))));
};


/***/ }),

/***/ "./resources/js/pages/SignInPage.tsx":
/*!*******************************************!*\
  !*** ./resources/js/pages/SignInPage.tsx ***!
  \*******************************************/
/*! exports provided: SignInPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPage", function() { return SignInPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spinners */ "./node_modules/react-spinners/index.js");
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_spinners__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var _stores_useStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../stores/useStore */ "./resources/js/stores/useStore.tsx");






var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) { return ({
    auth: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        backgroundColor: theme.palette.background.dark
    },
    authHeader: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100px",
        backgroundColor: theme.palette.primary.main
    },
    authContent: {
        padding: "40px 50px",
        backgroundColor: "#fff"
    },
    authTitle: {
        fontWeight: "bold",
        color: "#fff"
    },
    authForm: {
        overflow: "hidden",
        width: "500px",
        margin: "10px",
        borderRadius: "16px"
    },
    authInput: {
        marginBottom: "18px"
    },
    authBtnWrapper: {
        position: "relative",
        marginTop: "25px"
    },
    authBtn: {
        borderRadius: "30px",
        fontSize: "18px"
    },
    authLoader: {
        position: "absolute",
        top: "50%",
        right: 0,
        transform: "translate(-50%, -50%)"
    },
    authErrorText: {
        marginTop: "15px",
        textAlign: "center",
        fontSize: "14px",
        color: "red"
    }
}); });
var SignInPage = Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__["observer"])(function () {
    var classes = useStyles();
    var theme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["useTheme"])();
    var loginStore = Object(_stores_useStore__WEBPACK_IMPORTED_MODULE_5__["useStores"])().loginStore;
    var loginForm = loginStore.loginForm, loginSubmissionError = loginStore.loginSubmissionError, pending = loginStore.pending, setLoginFormValue = loginStore.setLoginFormValue, doLogin = loginStore.doLogin;
    var onKeyDown = function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            event.stopPropagation();
            doLogin();
        }
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: classes.auth },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: classes.authForm },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: classes.authHeader },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], { className: classes.authTitle, variant: "h3" }, "\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C!")),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: classes.authContent },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], { className: classes.authInput, label: "\u041B\u043E\u0433\u0438\u043D", placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 \u043B\u043E\u0433\u0438\u043D", value: loginForm.name, onChange: function (event) {
                        return setLoginFormValue("name", event.target.value);
                    }, onKeyDown: onKeyDown, InputProps: {
                        startAdornment: (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["InputAdornment"], { position: "start" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__["PersonOutlineOutlined"], null)))
                    }, fullWidth: true }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], { className: classes.authInput, type: "password", label: "\u041F\u0430\u0440\u043E\u043B\u044C", placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 \u043F\u0430\u0440\u043E\u043B\u044C", value: loginForm.password, onChange: function (event) {
                        return setLoginFormValue("password", event.target.value);
                    }, onKeyDown: onKeyDown, InputProps: {
                        startAdornment: (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["InputAdornment"], { position: "start" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__["LockOutlined"], null)))
                    }, fullWidth: true }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: classes.authBtnWrapper },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], { className: classes.authBtn, variant: "contained", color: "primary", onClick: doLogin, disabled: pending, fullWidth: true, disableElevation: true }, "\u0412\u043E\u0439\u0442\u0438"),
                    pending && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: classes.authLoader },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spinners__WEBPACK_IMPORTED_MODULE_2__["ClockLoader"], { size: 30, color: theme.palette.primary.main })))),
                loginSubmissionError && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], { className: classes.authErrorText }, loginSubmissionError))))));
});


/***/ }),

/***/ "./resources/js/pages/index.ts":
/*!*************************************!*\
  !*** ./resources/js/pages/index.ts ***!
  \*************************************/
/*! exports provided: SignInPage, ChatPage, ErrorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SignInPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SignInPage */ "./resources/js/pages/SignInPage.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SignInPage", function() { return _SignInPage__WEBPACK_IMPORTED_MODULE_0__["SignInPage"]; });

/* harmony import */ var _ChatPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatPage */ "./resources/js/pages/ChatPage.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChatPage", function() { return _ChatPage__WEBPACK_IMPORTED_MODULE_1__["ChatPage"]; });

/* harmony import */ var _ErrorPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ErrorPage */ "./resources/js/pages/ErrorPage.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorPage", function() { return _ErrorPage__WEBPACK_IMPORTED_MODULE_2__["ErrorPage"]; });






/***/ }),

/***/ "./resources/js/stores/useStore.tsx":
/*!******************************************!*\
  !*** ./resources/js/stores/useStore.tsx ***!
  \******************************************/
/*! exports provided: StoreProvider, useStores */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreProvider", function() { return StoreProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStores", function() { return useStores; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var StoreContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});
var StoreProvider = function (_a) {
    var children = _a.children, store = _a.store;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StoreContext.Provider, { value: store }, children);
};
var useStores = function () { return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(StoreContext); };


/***/ }),

/***/ "./resources/js/utils/constants.ts":
/*!*****************************************!*\
  !*** ./resources/js/utils/constants.ts ***!
  \*****************************************/
/*! exports provided: MAX_MESSAGE_COUNT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_MESSAGE_COUNT", function() { return MAX_MESSAGE_COUNT; });
var MAX_MESSAGE_COUNT = 320;


/***/ }),

/***/ "./resources/js/utils/formatDate.ts":
/*!******************************************!*\
  !*** ./resources/js/utils/formatDate.ts ***!
  \******************************************/
/*! exports provided: formatDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");

var formatDate = function (date, type) {
    if (type === void 0) { type = "HH:mm"; }
    return Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["format"])(new Date(date), type);
};


/***/ })

}]);