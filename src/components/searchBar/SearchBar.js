"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchBar = void 0;
const react_1 = __importDefault(require("react"));
const SearchBar = () => {
    return (react_1.default.createElement("div", { className: "searchBarContainer" },
        react_1.default.createElement("div", { className: "searchBarTitle" },
            react_1.default.createElement("h1", null, "Weather Dashboard")),
        react_1.default.createElement("div", { className: "searchBar" },
            react_1.default.createElement("input", { type: "text", id: "search", placeholder: "Enter city name" }),
            react_1.default.createElement("button", { id: "searchButton", type: "submit" }, "Search"))));
};
exports.SearchBar = SearchBar;
