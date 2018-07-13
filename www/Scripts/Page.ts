/// <reference path="types/jquery.d.ts" />

var pageName: string;
var Mustache: { to_html: (template: string, data: any) => string };



class Template {
  constructor(targetContainer: string, templateId: string, objJsonData: any) {
    let template = $(templateId).html();
    debugger
    let html = Mustache.to_html(template, objJsonData);
    $(targetContainer).html(html);
  }
}

class Page {

  private data: any;

  constructor(private jsonUrl: string, private dataInner?: string) {
    try{
      this.getData();
    }
    catch {
    document.location.href = "/pages/404.php";
    }
    


  }

  private getData() {
    if(this.dataInner){
      this.data = JSON.parse(this.dataInner);
      this.init()
    }

    $.get(this.jsonUrl, data => {
      this.data = JSON.parse(data);
    }).done(x => {
      this.init();
    })
    
  }

  private init() {
    new Template(".mainPage", "#tpl_Js_page", this.data);
  }

   static isPage():boolean{
    return $(".pageTpl").length === 1;
   }

}

class SliderFour {

  constructor(private selector: string) {

    $(".mainPage").on("click", ".imgFour>div>div", arg => {
      this.click(arg);
    });

    $(".mainPage").on("click", ".bigImage .zoom", arg => {
      this.zoom(arg);
    });

    $(".mainPage").on("click", ".imgArrow .right", arg => {
      debugger
      this.next(arg);
    });

    $(".mainPage").on("click", ".imgArrow .left", arg => {
      debugger
      this.prev(arg);
    });

    $(".mainPage").on("click", ".zoom", arg => {
      debugger
      this.zoom(arg);
    });
  }


  zoom(arg: JQueryEventObject) {
    debugger
    let url: string = $(arg.currentTarget).parent()[0].style.backgroundImage;
    url = url.replace('url("', "").replace('")',"");
    ModalWindow.setStatus(true, url);
  }

  next(arg: JQueryEventObject) {
    this.changeActive(arg, false);

  }

  prev(arg: JQueryEventObject) {
    this.changeActive(arg, true);
  }

  changeActive(arg: JQueryEventObject, reverse: boolean) {
    debugger
    let numb: number;
    let parentDiv = $(arg.currentTarget).parent().parent().parent().parent();
    let countImg = +parentDiv.find(".imgFour img").length;
    let activeImg = parentDiv.find(".active");
    if (activeImg.length === 0) {
      activeImg = $(arg.currentTarget).parent().parent().find('img[data-number="1"]')
      parentDiv.find('*[data-number="1"]').addClass("active");
      numb = 1;
    }
    numb = +activeImg[0].dataset.number;

    if (numb === countImg && !reverse)
      return;

    parentDiv.find('*[data-number="' + numb + '"]').removeClass("active");
    numb = reverse ? numb - 1 : numb + 1;
    numb = numb == 0 ? 1 : numb;
    parentDiv.find('*[data-number="' + numb + '"]').addClass("active");
    let url = (<any>parentDiv.find('img[data-number="' + numb + '"]')[0]).currentSrc;
    parentDiv.find(".bigImage").css("background-image", "url(" + url + ")")

    if(numb < countImg - 2)
      parentDiv.find(".imgFour").css("margin-left", "-" + 90 * (numb-1)+"px");


    

  }

  click(arg: JQueryEventObject) {
    debugger
    let parentDiv = $(arg.currentTarget).parent().parent().parent().parent().parent();
    parentDiv.find(".active").removeClass("active");
    let numb = (<any>arg.currentTarget).dataset.number;
    parentDiv.find('*[data-number="' + numb + '"]').addClass("active");
    let url = (<any>$(arg.currentTarget).parent() .find("img")[0]).currentSrc;
    $(arg.currentTarget).parent().parent().parent().parent().parent().find(".bigImage").css("background-image", "url(" + url + ")");
  }


}


class ModalWindow{
  static init(){

    ModalWindow.needInit = false

    $(".modalWindow .close").on("click", ()=>{
      ModalWindow.setStatus(false);
    });
  }

  static needInit: boolean = true;

  static setStatus(status: boolean, url?: string){
    ModalWindow.needInit && ModalWindow.init();
    debugger
    if(status){
      $(".modalWindow img").attr("src", url);
      $(".modalWindow").removeClass("displayNone");
      setTimeout(() => {
        $(".modalWindow").addClass("active");
      }, 0.1);
    }
    else{
      $(".modalWindow").removeClass("active");
      setTimeout(() => {
        $(".modalWindow").addClass("displayNone");
      }, 500);
    }

  }
}



var url: string;
//var dataInner: string;


debugger

url = "/jsonData/"+pageName+".js";
let page = new Page(url);

setTimeout(function () {
  new SliderFour(".sliderFour");
}, 1000);


