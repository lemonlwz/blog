var waterfall = function(opt){
  if(!(this instanceof waterfall)){
    return new waterfall(opt);
  }
  this.opt = opt;
  this.init(opt);
};

waterfall.prototype = {
  constructor: waterfall,
  init: function(opt){
    var el = this.get(opt.el),
        itemsEl = this.get(opt.itemSelector, el),
        elWidth = el.offsetWidth,
        columnWidth = opt.columnWidth,
        columnCount = parseInt((elWidth / columnWidth), 10),
        gutterWidth = opt.gutterWidth,
        gutterHeight = opt.gutterHeight;
    this.el = el;
    if(!this.colArr){
      this.colArrInit(columnCount);
    }
    this.layout(itemsEl, columnWidth, columnCount, gutterWidth, gutterHeight);
  },
  colArrInit: function(columnCount){
    var i;
    this.colArr = [];
    for(i=0; i< columnCount ; i++){
      this.colArr[i] = 0;
    }
  },
  layout: function(itemsEl, columnWidth, columnCount, gutterWidth, gutterHeight){
    var _this = this,
        colArr = this.colArr,
        minHeight, left, top,
        i = 0, l, j = 0;

    if(!itemsEl.length){
      return false;
    }
    minHeight = Math.min.apply({}, colArr);
    while(minHeight !== colArr[j] && j < columnCount){
      j++;
    }

    left = j * (columnWidth + gutterWidth);
    top = colArr[j] || 0;

    this.position(itemsEl.shift(), left, top, function(el){
      colArr[j] += el.offsetHeight + gutterHeight;
      _this.el.style.height = Math.max.apply({}, colArr) + 'px';
      _this.layout(itemsEl, columnWidth, columnCount, gutterWidth, gutterHeight);
    });

  },
  position: function(el, left, top, cb){
    el.style.display = 'none';
    this.imagesLoaded(el, function(){
      el.style.position = 'absolute';
      el.style.left = left + 'px';
      el.style.top = top + 'px';
      el.style.display = 'block';
      cb&&cb(el);
    });
  },
  imagesLoaded: function(container, cb){
    var blank = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==',
        images, img, src, attr, i, l ;
    images = this.get('img', container);
    if(!images.length){
      cb&&cb();
      return;
    }
    for(i=0,l=images.length; i<l ; i++){
      img = images.shift()
      attr = img.getAttribute('data-src')
      src = img.src;
      if(attr){
        src = attr;
      }
      img.src = blank;
      img.src = src;
      img.onload = function(evt){
        if(!images.length){
          setTimeout(function(){
            cb&&cb();
          });
        }
      }
      img.onerror = function(evt){
        if(!images.length){
          setTimeout(function(){
            cb&&cb();
          });
        }
      }
    }
  },
  get: function(str, parentEl){
    var el, type, sel,
        elArr , reg, i, l;
    if(typeof str !== 'string'){
      return null;
    }

    sel = str.substring(1);

    type = str.substring(0, 1);
    switch(type){
      case '#':
        el = document.getElementById(sel);
        break;
      case '.':
        parentEl = parentEl || document;
        elArr = parentEl.getElementsByTagName('*');
        reg = new RegExp('(^|\\s)' + sel + '(\\s|$)');
        el = [];
        for(i=0,l=elArr.length; i<l ; i++){
          if(reg.test(elArr[i].className)){
            el.push(elArr[i]);
          }
        }
        break;
      default:
        el = Array.prototype.slice.call(parentEl.getElementsByTagName(str));
    }

    return el;
  }
};
