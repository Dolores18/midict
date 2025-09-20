// 光标默认可输入
$(document).ready(function (e) {
    $('#word').focus();
    
    // 初始化清空按钮状态
    toggleClearButton();
}
);

// 查询mdx
function queryMdx(word, lang) {
    $('#mdx-resp').html('查询中...');
    let requestData = { 'word': word };
    
    // 如果指定了语言且不是默认英语，则添加语言参数
    if (lang && lang !== 'en') {
        requestData.lang = lang;
    }
    
    $.ajax({
        url: './query',
        type: 'POST',
        data: requestData,
        dataType: 'html',
        success: function (data) {
            if (data !== '') {
                $('#mdx-resp').html(data).show();
                // Initialize lm6 functionality after content is loaded
                if (typeof main === 'function') {
                    main();
                }
            } else {
                $('#mdx-resp').hide();
            }
        }
    });
}

function postQuery() {
    let word = $('#word').val().trim();
    if (!validInput(word)) {
        return;
    }
    let selectedLang = $('#lang-select').val() || 'en';
    queryMdx(word, selectedLang);
}

// 特殊字符不查询
function validInput(word) {
    return word
        && word !== '.'
        && word !== '#'
        && word !== '?'
        && word !== '/';
}

// 切换清空按钮显示状态
function toggleClearButton() {
    const searchContainer = $('.search-container');
    const wordInput = $('#word');
    
    if (wordInput.val().trim().length > 0) {
        searchContainer.addClass('has-content');
    } else {
        searchContainer.removeClass('has-content');
    }
}

// 清空搜索框
function clearSearchInput() {
    $('#word').val('').focus();
    toggleClearButton();
    $('#mdx-resp').html('Ctrl + L 开始搜索');
}

// 监听回车键
$(document).keydown(function (e) {
    if (e.keyCode === 13) {
        postQuery();
    }
});

// 监听牛津8解释页面的外部单词链接
$(document).on('click', 'a', function (e) {
    console.log($(this).attr('href'));
    let href = $(this).attr('href');// '/cool'
    if (href.startsWith('/') && !href.startsWith('/#')) {
        $('#word').val(href.slice(1)) // 'cool'
        postQuery();
        e.preventDefault()
    }
});

// 监听搜索框输入变化
$(document).on('input', '#word', function() {
    toggleClearButton();
});

// 监听清空按钮点击
$(document).on('click', '#clear-btn', function(e) {
    e.preventDefault();
    clearSearchInput();
});

// 捕获ctrl+L快捷键
$(window).bind('keyup keydown', function (e) {
    if ((e.ctrlKey || e.metaKey)
        && String.fromCharCode(e.which).toLowerCase() === 'l') {
        e.preventDefault();
        clearSearchInput();
        scrollTo(0, 0);
    }
});

// 试试手气按钮
$(document).on('click', '#lucky-btn', function (e) {
    $.ajax({
        url: './lucky',
        type: 'GET',
        dataType: 'html',
        success: function (data) {
            if (data !== '') {
                $('#mdx-resp').html(data).show();
                // Initialize lm6 functionality after content is loaded
                if (typeof main === 'function') {
                    main();
                }
            } else {
                $('#mdx-resp').hide();
            }
            // $('#word').val(parserWordFromResp(data))
        }
    });
});

// 不同词典返回html不一样，无法通用
// function parserWordFromResp(data) {
//     let el = document.createElement('html');
//     el.innerHTML = data;
//     let top_g = el.getElementsByClassName("top-g")[0]
//     if (top_g == null) {
//         console.log("top-g is null");
//         return "";
//     }
//
//     return top_g.firstElementChild.innerHTML.split('·').join('')
//
// }