/* ===== MOBILE NAV TOGGLE ===== */
document.addEventListener('DOMContentLoaded',function(){
  var toggle=document.querySelector('.nav-toggle');
  var nav=document.querySelector('.main-nav');
  if(toggle&&nav){
    toggle.addEventListener('click',function(){
      nav.classList.toggle('open');
      var expanded=toggle.getAttribute('aria-expanded')==='true';
      toggle.setAttribute('aria-expanded',!expanded);
    });
    nav.querySelectorAll('a').forEach(function(link){
      link.addEventListener('click',function(){nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');});
    });
  }

  /* ===== BEFORE/AFTER SLIDER ===== */
  document.querySelectorAll('.ba-slider').forEach(function(slider){
    var handle=slider.querySelector('.ba-handle');
    var afterImg=slider.querySelector('.ba-after');
    var dragging=false;
    function move(x){
      var rect=slider.getBoundingClientRect();
      var pos=Math.max(0,Math.min(x-rect.left,rect.width));
      var pct=(pos/rect.width)*100;
      handle.style.left=pct+'%';
      afterImg.style.clipPath='inset(0 0 0 '+pct+'%)';
    }
    slider.addEventListener('mousedown',function(e){dragging=true;move(e.clientX);});
    window.addEventListener('mousemove',function(e){if(dragging)move(e.clientX);});
    window.addEventListener('mouseup',function(){dragging=false;});
    slider.addEventListener('touchstart',function(e){dragging=true;move(e.touches[0].clientX);},{passive:true});
    window.addEventListener('touchmove',function(e){if(dragging)move(e.touches[0].clientX);},{passive:true});
    window.addEventListener('touchend',function(){dragging=false;});
  });

  /* ===== FAQ ACCORDION ===== */
  document.querySelectorAll('.faq-question').forEach(function(btn){
    btn.addEventListener('click',function(){
      var item=btn.closest('.faq-item');
      var wasOpen=item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(function(el){el.classList.remove('open');});
      if(!wasOpen)item.classList.add('open');
    });
  });

  /* ===== STICKY HEADER SHADOW ===== */
  var header=document.querySelector('.site-header');
  if(header){
    window.addEventListener('scroll',function(){
      if(window.scrollY>10){header.classList.add('scrolled');}
      else{header.classList.remove('scrolled');}
    },{passive:true});
  }
});
