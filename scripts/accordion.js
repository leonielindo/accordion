(function () {

  function accordion(){
    // accordion
      var accordionTrigger = document.getElementsByClassName("accordion-title");
      var i;


      for (i = 0; i < accordionTrigger.length; i++) {

        //Event: onclick
        accordionTrigger[i].onclick = function() {
        var accordionContent = this.nextElementSibling;

          // Toggle the declared class on the scoped element
          this.classList.toggle("open");


          // Show content
          if (accordionContent.style.display === "block") {
              accordionContent.style.display = "none";
          } else {
              accordionContent.style.display = "block";
          }
        }
      }

      // Set first accordion section as open by default
      var openDefault = accordionTrigger[0],
      openEvent = openDefault.onclick;

      //If the typeof event is a function call the event to trigger on the target element
      if (typeof(openEvent) == "function") {
          openEvent.call(openDefault);
      }
  }

  accordion();

} ());
