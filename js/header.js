// 头部js文件
// window.addEventListener("load", function () {
//     // 头部搜索框
//     let header_search_input = document.querySelector(".header-search input");
//     let keywordList = document.querySelector(".keywordList");
//     header_search_input.addEventListener("focus", function () {
//         keywordList.style.display = "block";
//         keywordList.style.borderTop = 0;
//     });
//     header_search_input.addEventListener("blur", function () {
//         keywordList.style.display = "none";
//     });
// });

(() => {
    // 头部搜索框
    const header_search_input = document.querySelector(".header-search .search-text");
    const keywordList = document.querySelector(".keywordList");
    header_search_input.addEventListener("focus", () => {
        keywordList.style.display = "block";
        keywordList.style.borderTop = "none";
    });
    header_search_input.addEventListener("blur", () => {
        keywordList.style.display = "none";
    })
})()