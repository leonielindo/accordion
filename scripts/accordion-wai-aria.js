(function () {
  
  function accordion(){
    // accordion
      var accordionTrigger = document.getElementsByClassName("accordion-title");
      var i;


      for (i = 0; i < accordionTrigger.length; i++) {

        //Set wai-aria attributes
        accordionTrigger[i].setAttribute("id", "accordionLink"+ [i+1]);
        accordionTrigger[i].setAttribute("aria-controls", "sect"+ [i+1]);
        accordionTrigger[i].setAttribute("aria-expanded", "false");
        accordionTrigger[i].nextElementSibling.setAttribute("id", "sect"+ [i+1]);

        var accordionTriggerId = accordionTrigger[i].getAttribute("id");
        accordionTrigger[i].nextElementSibling.setAttribute("aria-labelledby", accordionTriggerId);

        //Event: onclick
        accordionTrigger[i].onclick = function() {
        var accordionContent = this.nextElementSibling;

          // Toggle the declared class on the scoped element
          this.classList.toggle("open");

          // Toggle aria-expanded value
          if(this.classList.contains("open")){
            this.setAttribute("aria-expanded", "true");
          } else {
            this.setAttribute("aria-expanded", "false");
          }

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
