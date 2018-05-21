import { MessageBox } from 'element-ui'

/**
 * 图片预览
 * @param {*} url 
 */
let imagePreview = function (url) {
  MessageBox.alert('<img src="' + url + '" style="max-width:90vw;max-height:85vh;"/>', {
    dangerouslyUseHTMLString: true,
    showConfirmButton: false,
    closeOnClickModal: true,
    showClose: true,
    center: true,
    customClass: 'el-message-preview-box',
    callback: () => { console.log("") }
  });
}

let downloadFile = function (sUrl) {
  if (/(iP)/g.test(navigator.userAgent)) {
    alert('Your device does not support files downloading. Please try again in desktop browser.');
    return false;
  }
  if (downloadFile.isChrome || downloadFile.isSafari) {
    //Creating new link node.
    var link = document.createElement('a');
    link.href = sUrl;

    if (link.download !== undefined) {
      //Set HTML5 download attribute. This will prevent file from opening if supported.
      var fileName = sUrl.substring(sUrl.lastIndexOf('/') + 1, sUrl.length);
      link.download = fileName;
    }
    //Dispatching click event.
    if (document.createEvent) {
      var e = document.createEvent('MouseEvents');
      e.initEvent('click', true, true);
      link.dispatchEvent(e);
      return true;
    }
  }

  // Force file download (whether supported by server).
  if (sUrl.indexOf('?') === -1) {
    sUrl += '?download';
  }

  window.open(sUrl, '_self');
  return true;
};

downloadFile.isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
downloadFile.isSafari = navigator.userAgent.toLowerCase().indexOf('safari') > -1;

/**
 * @param {*} number 数字
 * @param {*} places 小数后几位
 * @param {*} symbol 货币符号  $
 * @param {*} thousand 千分位符号   ,
 * @param {*} decimal 小数点符号   .
 */
let formatMoney = function (number, places, symbol, thousand, decimal) {
  // console.log('number',number)
  number = number || 0;
  places = !isNaN(places = Math.abs(places)) ? places : 2;
  symbol = symbol !== undefined ? symbol : "¥";
  thousand = thousand || ",";
  decimal = decimal || ".";
  var negative = number < 0 ? "-" : "",
    i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + "",
    j = (j = i.length) > 3 ? j % 3 : 0;
  return symbol + negative + (j ? i.substr(0, j) + thousand : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousand) + (places ? decimal + Math.abs(number - i).toFixed(places).slice(2) : "");
};

/**
 * @param {*} date 
 * @param {*} fmt  yyyy-MM-dd
 * 对时间格式化
 */
let formatDate = function (date, fmt) {
  var o = {
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "h+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds(),
    "q+": Math.floor((date.getMonth() + 3) / 3),
    "S": date.getMilliseconds()
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    }
  }
  return fmt;
}


let getUrl = function(value) {
  let url = '';
  if (process.env.NODE_ENV == 'production') {
      url = "https://libbgit.github.io/person" + value;
  } else {
      url = value;
  }
  return url;
}

//作为插件必须定义公开的 install 方法
export default function install(Vue, options) {
  // 1. 添加全局方法或属性
  Vue.myGlobalMethod = function () {
    // 逻辑...
  }
  // 2. 添加全局资源
  Vue.directive('my-directive', {
    bind(el, binding, vnode, oldVnode) {
      // 逻辑...
    }
  }),

  // 3. 使用minxin混入组件
  Vue.mixin({
    created: function () {
        // 逻辑...
    }
  })

  // 4. 添加实例方法

  Vue.previewImage = Vue.prototype.$previewImage = imagePreview;
  Vue.downloadFile = Vue.prototype.$downloadFile = downloadFile;
  Vue.formatMoney = Vue.prototype.$formatMoney = formatMoney;
  Vue.formatDate = Vue.prototype.$formatDate = formatDate;
  Vue.getUrl = Vue.prototype.$getUrl = getUrl;
  
}

