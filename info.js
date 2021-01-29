function resizeGridItem(item){
    grid = document.getElementsByClassName("grid")[0];
    rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
    rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
    rowSpan = Math.ceil((item.querySelector('.content').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
      item.style.gridRowEnd = "span "+rowSpan;
  }

  function resizeAllGridItems(){
    allItems = document.getElementsByClassName("item");
    for(x=0;x<allItems.length;x++){
      resizeGridItem(allItems[x]);
    }
  }

  function resizeInstance(instance){
    item = instance.elements[0];
    resizeGridItem(item);
  }

  window.onload = resizeAllGridItems();
  window.addEventListener("resize", resizeAllGridItems);

  allItems = document.getElementsByClassName("item");
  for(x=0;x<allItems.length;x++){
    imagesLoaded( allItems[x], resizeInstance);
  }


  (function($){
  $(".close").css("display","none")

  $(".more").click(function(){
    $(this).css("display","none");
    var close = $(this).parents('div').find('.close');
    close.css("display","block");
    var text = $(this).parents('div').find('.text');
    var h = text.height();
    text.css({display: "block", height: "auto"});
    var hreal = text.height();
    text.css({height: h+"px"});
    text.animate({
        height: hreal+"px"
     },300);
  });
  });

  (function($){
  $(".close").click(function(){
    $(this).css("display","none");
    $(".more").css("display","block");
    $(".text").css("display","-webkit-box");
     $(".text").animate({
     height:"80px"
   },300);
  });
  });



	function showElementAnimation() {

	  var element = document.getElementsByClassName('js-animation');
	  if(!element) return; // 要素がなかったら処理をキャンセル

	  var showTiming = window.innerHeight > 768 ? 200 : 40; // 要素が出てくるタイミングはここで調整
	  var scrollY = window.pageYOffset;
	  var windowH = window.innerHeight;

	  for(var i=0;i<element.length;i++) { var elemClientRect = element[i].getBoundingClientRect(); var elemY = scrollY + elemClientRect.top; if(scrollY + windowH - showTiming > elemY) {
	      element[i].classList.add('is-show');
	    } else if(scrollY + windowH < elemY) {
	      // 上にスクロールして再度非表示にする場合はこちらを記述
	      element[i].classList.remove('is-show');
	    }
	  }
	}
	showElementAnimation();
	window.addEventListener('scroll', showElementAnimation);
