window.siteData={
    MenuItems:getMenuItems(),
    SiteInfo:getSiteInfo(),
}
initTongJi()
function getMenuItems(){
    return [
        {
            Key: '100',
            MenuName: '快速导航',
            MenuUrl: '/home'
        },
        {
            Key: '208',
            MenuName: '在线翻译',
            MenuUrl: '/fanyi'
        },
        {
            Key: '207',
            MenuName: '二维码生成',
            MenuUrl: '/qrcode'
        },
        {
            Key: '201',
            MenuName: '加密/解密',
            MenuUrl: '/encrypt'
        },
        {
            Key: '202',
            MenuName: '编码/解码',
            MenuUrl: '/encode'
        },
        {
            Key: '203',
            MenuName: '图片转base64',
            MenuUrl: '/tobase64'
        },
        {
            Key: '204',
            MenuName: '字符串替换',
            MenuUrl: '/strsplit'
        },
        {
            Key: '205',
            MenuName: '人民币转换',
            MenuUrl: '/rmbconvert'
        },
        {
            Key: '206',
            MenuName: 'Markdown转换',
            MenuUrl: '/mdconvert'
        }
    ];
}
function getSiteInfo(){
    return {
        SiteName:'工具箱',
        LogoUrl:'',//http://www.yimo.link/static/imgs/logo.png',
        ShowMsg:true,
        FooterLinks:[
            {
                Title: 'OSChina 工具',
                Url: 'https://tool.oschina.net/',
            }
        ]
    }
}
//需替换为自己的统计代码
function initTongJi(){
    if(location.host.indexOf('localhost')==0){
        return;
    }

}