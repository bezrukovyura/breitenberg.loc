<script id="tpl_Js_page" type="text/template">
  <a href="/" class="back">Назад</a>
  <div class="title">{{title}}</div>
  <div class="text">У компании «Брайтерберг» вы можете приобрести следующие виды {{type}}:</div>
  <div class="content">
    <div class="itemsConteiner">
    {{#items}}
      <div class="itemWrapper">
        <div class="item">
        <div style="display: none" class="mobileTitle">{{title}}</div>
          <div class="imagesWrapper">
            <div class="images sliderFour">
              <div class="bigImage" style="background-image: url({{images.0.url}});">
                <div class="zoom">
                  <svg>
                  <rect style="fill:#181717" width="40" height="40"/>
                    <g style="stroke:#ffe000;fill:#ffe000">
                      <polygon  points="21.4,14.1 19.4,14.1 19.4,18.2 15.3,18.2 15.3,20.2 19.4,20.2 19.4,24.3 21.4,24.3 21.4,20.2 
                        25.5,20.2 25.5,18.2 21.4,18.2 	"/>
                      <path  d="M20.4,9c-5.6,0-10.2,4.6-10.2,10.2c0,2.5,0.9,4.7,2.4,6.5l-4.2,4.2l1.5,1.5l4.2-4.2c1.7,1.4,3.9,2.2,6.3,2.2
                        c5.6,0,10.2-4.6,10.2-10.2C30.6,13.6,26,9,20.4,9z M20.4,27.3c-4.5,0-8.1-3.7-8.1-8.1c0-4.5,3.7-8.1,8.1-8.1s8.1,3.7,8.1,8.1
                        C28.5,23.7,24.9,27.3,20.4,27.3z"/>
                    </g>
                  </svg>
                </div>
              </div>
              <div class="imgLine">
                <div class="imgFourWrapper">
                  <div class="imgFour" style="width: calc(92px * {{images.0.count}});">
                    {{#images}}
                    <div>
                      <div data-number="{{i}}" class="substruct {{class}}"></div>
                      <img data-number="{{i}}" class="{{class}}" src="{{url}}" alt="{{alt}}">
                    </div>
                    {{/images}}
                  </div>
                </div>
                <div class="imgArrow">
                  <div class="right">
                  <svg>
                    <path style="stroke:#181717;fill:#ffe000;stroke-width:4px" d="M1,1.1l12.6,11.5L1,24.1"/>
                  </svg>
                  </div>
                  <div class="left">
                    <svg>
                      <path style="stroke:#181717;fill:#ffe000;stroke-width:4px" class="cls-1" d="M14.86,24.11,2.23,12.61,14.86,1.11"/>
                    </svg>
                  </div>
                </div>
              </div>

            </div>
          </div>
        
          <div class="info">
            <div class="title">{{title}}</div>
            <div class="titleOption">{{titleOption}}</div>
            <div class="addTextInfo">
              {{{addTextInfo}}}
            </div>
            <div class="text">
              {{#lines}}
              <b>{{title}}</b> {{text}}<br>
              {{/lines}}
            </div>

            <div class="actionPhone bhp button">Заказать</div>
              
          </div>


        <div class="addTextInfoPost">
          {{{addTextInfoPost}}}
        </div>

        </div>
      </div>
    {{/items}}
    </div>

      <div class="additionContent">
    <div class="text">{{{rightText}}}</div>
    <div class="blockInfo">
      {{#rightBlock}}
      <b>{{i}}</b> {{{text}}}</br>
      {{/rightBlock}}
    </div>
  </div>

  
  </div>


</script>
