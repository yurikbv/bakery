(function () {
  class Carousel{
    constructor({width,count}){
      this.width = width;
      this.count = count;
      this.position = 0;
      this.elements = document.body.querySelectorAll('.slider__item');
      this.list = document.body.querySelector('.slider__container');
      this.prevButton = document.body.querySelector('.slider__button--left');
      this.nextButton = document.body.querySelector('.slider__button--right');
      this.prevButton.onclick =  this.prevImage.bind(this);
      this.nextButton.onclick =  () => this.nextImage();
    }
    prevImage(){
      this.position = Math.min(this.position + this.width * this.count,0);
      this.list.style.marginLeft = this.position + 'px'
    }
    nextImage(){
      this.position = Math.max(this.position - this.width * this.count , (-this.width * this.elements.length) + (this.width * this.count));
      this.list.style.marginLeft = this.position + 'px'
    }
  }

  let widthItem = 122,countItem = 3;
  if(document.body.offsetWidth < 1100){
    countItem = 2;
  }
  if(document.body.offsetWidth < 960){
    // widthItem = 102;
  }
  let carousel = new Carousel({
    width: widthItem,
    count: countItem
  });
})();