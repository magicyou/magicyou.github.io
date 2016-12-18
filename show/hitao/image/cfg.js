
var apiLink,baseurl,appkey, pcapihost, payLink;
var hostnameUrl = window.location.hostname;
var inviteLink = 'http://act.api.hitao.top';
//console.log(hostnameUrl);
switch (hostnameUrl){
    // case 'www.hitao.top':
    //     baseurl="http://www.hitao.top"; //\u8bbf\u95ee\u5730\u5740
    //     apiLink = "http://pubapi.hitao.top/index.php?method="; //api\u5e73\u53f0\u5730\u5740
    //     //token = 'db0c0ad3a959e935385839e259346ed01c9fd46ad8153e476963bc97032fff4a';
    //     appkey="H5KKJ6D3SD5";
    //     pcapihost = '';
    //     payLink = 'http://payment.hitao.top:4080';
    //     break;
    // case 'go.hitao.com':
    //     baseurl="http://www.hitao.top";
    //     apiLink = "http://pubapi.hitao.top/index.php?method=";
    //     //token = 'db0c0ad3a959e935385839e259346ed01c9fd46ad8153e476963bc97032fff4a';
    //     appkey="H5KKJ6D3SD5";
    //     break;
	case 'dolphin.hitao.top':
		baseurl="http://115.29.209.148:8088";
        apiLink = "http://115.29.209.148/index.php?method=";
        //token = 'db0c0ad3a959e935385839e259346ed01c9fd46ad8153e476963bc97032fff4a';
        appkey="HTML65W23K7";
        pcapihost = '';
        payLink = 'http://114.215.197.33:4080';
		break;
    default:
        baseurl="http://www.hitao.top"; //\u8bbf\u95ee\u5730\u5740
        apiLink = "http://pubapi.hitao.top/index.php?method="; //api\u5e73\u53f0\u5730\u5740
        token = '115f7bc6234416991282eeff9390ef8efc0f7c3c1af5e8a4a1bc165605e87122';
        appkey="H5KKJ6D3SD5";
        pcapihost = '';
        payLink = 'http://payment.hitao.top:4080';
        break;


        // \u6d4b\u8bd5\u73af\u5883
        // baseurl="http://115.29.209.148:8088";
        // apiLink = "http://115.29.209.148/index.php?method=";
        // token = '115f7bc6234416991282eeff9390ef8efc0f7c3c1af5e8a4a1bc165605e87122';//\u97e9\u6d41\u7f8e\u89c6\u9700\u8981\u52a0\u5bc6\u7684sign\u53c2\u6570
        // appkey="HTML65W23K7";
        // pcapihost = '';
        // payLink = 'http://121.40.211.233:4080';
        // break;
}

var Common = function (){
    this.fromtype;
    var thisTime = new Date();
    this.urlTime =thisTime.getTime();
    // this.thisYear = thisTime.getFullYear();
    // this.thisMoth = thisTime.getMonth() + 1;
    // this.thisDate = thisTime.getDate();
    // this.thisHours = thisTime.getHours();
    // this.thisMin = thisTime.getMinutes();
    // this.thiSec = thisTime.getSeconds();
    //this.urlTime = this.thisYear+"-"+this.thisMoth+"-"+this.thisDate+" "+this.thisHours+":"+this.thisMin+":"+this.thiSec   //2015-03-04 16:00:35
}

var commonjs = new Common();
//\u83b7\u53d6\u5730\u5740\u680f\u53c2\u6570
Common.prototype.getUrlKye_name_com = function(name){
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}
Common.prototype.getUrlGotoUrl_fn = function(idName,childName){
    $(idName).on('click',childName,function(){
        var thisUrl_SG = $(this).attr("data-href");
        window.location.href = urlLink+thisUrl_SG;
    })
}
//Common.prototype.appkey='HTML65W23K7'; // \u6d4b\u8bd5\u73af\u5883
Common.prototype.appkey=appkey; //\u6b63\u5f0f\u73af\u5883
Common.prototype.v='1.0';
//\u83b7\u53d6url\u4e2d\u7684\u4ea7\u54c1ID
Common.prototype.getUrl_product_id = function(){
    var str = window.location.href;
    if (str != null) return str.substr(str.lastIndexOf("/")+1).split('.html')[0]; return null; 
}

//\u63a5\u53e3\u6821\u5e94  \u97e9\u6d41\u7f8e\u89c6\u9700\u8981\u52a0\u5bc6\u7684sign\u53c2\u6570
var valueSort_md5 = function(wind_J){
    var arr_j = wind_J.split("?")[1].split("&");
    var arr_k=[''];
    var arr_t = [''];
    for(var i = 0; i<arr_j.length ; i++)
    {
        arr_k[i] = arr_j[i].split("=")[0];
    }
    //\u5b57\u6bcd\u6bd4\u5927\u5c0f
    this.letterSort = function(a,b){
        var s = a.toLowerCase();
        var t = b.toLowerCase();
        if(s < t){return -1};
        if(s > t){return 1};
        return 0;
    }
    //\u83b7\u53d6\u5bf9\u5e94\u7684value\u503c
     this.getQueryString = function(name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
            var r = wind_J.split("?")[1].match(reg);
            if (r != null) return unescape(r[2]); return null;
    }
    //\u5f97\u5230KEY\u5bf9\u5e94\u7684VALUE\u503c
    this.md5Value = function(){
        var that = this ;
        arr_k = arr_k.sort(this.letterSort);
        for(var x=0 ; x<arr_k.length ; x++)
        {
            arr_t[x] = that.getQueryString(arr_k[x]);
        }

        var hash = hex_md5(arr_t.join('')+token);
        return hash;
    }
}
