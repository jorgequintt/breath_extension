/*
Square
Breathe in 4 - Breathe Hold 4 - Breathe out 4 - Breathe hold 4

Pranayama
Breathe in 7 - Breathe Hold 4 - Breathe out 8

Ujjyi
Breathe in 7 - Breathe out 7
*/

class BreathApp {
   constructor(type) {
      this.animationStep = 0;
      this.animationType = 0;
   }

   triggerAnimationStep(seconds) {
      let animSettings = { duration: (1000 * seconds), easing: $.easie(.7, .24, .23, .71) };
      if (this.animationType === 0) {
         switch (this.animationStep) {
            case 0:
               document.querySelector('.square.square-1').style = ('width: 100%');
               if (true) {
                  document.querySelector('.square.square-1').style = (`animation: square-1-step-1 ${seconds}s ease-in-out forwards;`);
               }
               break;
            case 1:
               document.querySelector('.square.square-2').style = ('heigth: 100%');
               if (true) {
                  document.querySelector('.square.square-2').style = (`animation: square-2-step-1 ${seconds}s ease-in-out forwards;`);
               }
               break;
            case 2:
               document.querySelector('.square.square-3').style = ('width: 100%');
               if (true) {
                  document.querySelector('.square.square-3').style = (`animation: square-3-step-1 ${seconds}s ease-in-out forwards;`);
               }
               break;
            case 3:
               document.querySelector('.square.square-4').style = ('height: 100%');
               if (true) {
                  document.querySelector('.square.square-4').style = (`animation: square-4-step-1 ${seconds}s ease-in-out forwards;`);
               }
               break;
            case 4:
               document.querySelector('.square.square-1').style = ('width: 0%');
               if (true) {
                  document.querySelector('.square.square-1').style = (`animation: square-1-step-2 ${seconds}s ease-in-out forwards;`);
               }
               break;
            case 5:
               document.querySelector('.square.square-2').style = ('height: 0%');
               if (true) {
                  document.querySelector('.square.square-2').style = (`animation: square-2-step-2 ${seconds}s ease-in-out forwards;`);
               }
               break;
            case 6:
               document.querySelector('.square.square-3').style = ('width: 0%');
               if (true) {
                  document.querySelector('.square.square-3').style = (`animation: square-3-step-2 ${seconds}s ease-in-out forwards;`);
               }
               break;
            case 7:
               document.querySelector('.square.square-4').style = ('height: 0%');
               if (true) {
                  document.querySelector('.square.square-4').style = (`animation: square-4-step-2 ${seconds}s ease-in-out forwards;`);
               }
               break;

            /*
         case 0:
            $('.square.square-1').css('left', '0%');
            $('.square.square-1').animate({ width: '100%', left: '0%' }, animSettings);
            break;
         case 1:
            $('.square.square-2').css('top', '0%');
            $('.square.square-2').animate({ height: '100%', top: '0%' }, animSettings);
            break;
         case 2:
            $('.square.square-3').css('left', '100%');
            $('.square.square-3').animate({ width: '100%', left: '0%' }, animSettings);
            break;
         case 3:
            $('.square.square-4').css('top', '100%');
            $('.square.square-4').animate({ height: '100%', top: '0%' }, animSettings);
            break;
         case 4:
            $('.square.square-1').animate({ width: '0%', left: '100%' }, animSettings);
            break;
         case 5:
            $('.square.square-2').animate({ height: '0%', top: '100%' }, animSettings);
            break;
         case 6:
            $('.square.square-3').css('left', '0%');
            $('.square.square-3').animate({ width: '0%', left: '0%' }, animSettings);
            break;
         case 7:
            $('.square.square-4').css('top', '0%');
            $('.square.square-4').animate({ height: '0%', top: '0%' }, animSettings);
            break;
            */
         }
         if (this.animationStep === 7) {
            this.animationStep = 0;
         } else {
            this.animationStep += 1;
         }
      } else if (this.animationType === 1) {
         let path_length = 816.164794921875;
         let path_length_end = 408;
         let path_length_end_bottom = 450;
         switch (this.animationStep) {
            case 0:
               document.querySelector('.triangle-1').setAttribute('style', '');
               document.querySelector('.triangle-2').setAttribute('style', '');
               document.querySelector('.triangle-3').setAttribute('style', '');
               document.querySelector('.triangle-4').setAttribute('style', '');
               document.querySelector('.triangle-5').setAttribute('style', '');
               document.querySelector('.triangle-6').setAttribute('style', '');

               if (true) {

                  $('.triangle-1').animate({ 'stroke-dashoffset': path_length_end }, animSettings);
               }

               break;
            case 1:
               document.querySelector('.triangle-6').setAttribute('style', '');
               if (true) {

                  $('.triangle-2').animate({ 'stroke-dashoffset': path_length_end }, animSettings);
               }

               break;
            case 2:
               document.querySelector('.triangle-6').setAttribute('style', '');
               if (true) {

                  $('.triangle-3').animate({ 'stroke-dashoffset': path_length_end_bottom }, animSettings);
               }

               break;
            case 3:
               if (true) {

                  $('.triangle-4').animate({ 'stroke-dashoffset': path_length_end }, animSettings);
               }

               break;
            case 4:
               if (true) {

                  $('.triangle-5').animate({ 'stroke-dashoffset': path_length_end }, animSettings);
               }

               break;
            case 5:
               if (true) {

                  $('.triangle-6').animate({ 'stroke-dashoffset': path_length_end_bottom }, animSettings);
               }

               break;

         }
         if (this.animationStep === 5) {
            this.animationStep = 0;
         } else {
            this.animationStep += 1;
         }
      }
   }

   ///////////
   // breaths types
   ///////////
   displaySquare() {
      $('.square-holder').show();
      $('.triangle-background').hide();
      this.animationType = 0;
   }

   displayTriangle() {
      $('.square-holder').hide();
      $('.triangle-background').show();
      this.animationType = 1;

   }

   square() {
      this.displaySquare();

      this.breathIn(4).then(() => {
         return this.breathHold(4);
      }).then(() => {
         return this.breathOut(4);
      }).then(() => {
         return this.breathHold(4);
      }).then(() => {
         return this.square();
      });
   }

   pranayama() {
      this.displayTriangle();

      this.breathIn(4).then(() => {
         return this.breathHold(7);
      }).then(() => {
         return this.breathOut(8);
      }).then(() => {
         return this.pranayama();
      });
   }

   ujjyi() {
      this.displaySquare();

      this.breathIn(7).then(() => {
         return this.breathOut(7);
      }).then(() => {
         return this.ujjyi();
      });
   }

   ///////////
   // breaths
   ///////////
   breathIn(seconds) {
      let breath_step = "Breath in";
      document.title = breath_step;
      document.querySelector('#breath-step').innerHTML = breath_step;
      return this._breath(seconds);
   }

   breathHold(seconds) {
      let breath_step = "Hold";
      document.title = breath_step;
      document.querySelector('#breath-step').innerHTML = breath_step;
      return this._breath(seconds);
   }

   breathOut(seconds) {
      let breath_step = "Breath out";
      document.title = breath_step;
      document.querySelector('#breath-step').innerHTML = breath_step;
      return this._breath(seconds);
   }

   _breath(seconds) {
      return new Promise((resolve, reject) => {
         this.triggerAnimationStep(seconds);
         setTimeout(() => {
            resolve();
         }, (1000 * seconds));
      });
   }
}

let breathApp = new BreathApp();

const url = new URL(window.location.href);
const breathing_type = url.searchParams.get("type");

switch (breathing_type) {
   case "square":
      breathApp.square();
      break;
   case "pranayama":
      breathApp.pranayama();
      break;
   case "ujjyi":
      breathApp.ujjyi();
      break;
   default:
      breathApp.square();
      break;
}

let blurred = false;
window.onblur = function() { blurred = true; };
window.onfocus = function() { blurred && (location.reload()); };
