
    var historyId = 0;
    var result;
    function insert(n) {
      document.calTxt.display.value += n;
    }
    
    function equal() {
                            if (isNaN(eval(document.calTxt.display.value))) {
                                document.calTxt.display.value = "";
                               }
                       else { 
                              
                                historyId++;
                                $("#history").append("<li id='history-"+ historyId + "'>" + document.calTxt.display.value + "</li>");
                                document.calTxt.display.value=eval(document.calTxt.display.value);
                                result =document.calTxt.display.value;
                                $("#history-" + historyId).append(" = " + result);
                             }  
                       }
    function clr() {
      document.calTxt.display.value = "";
    }
    function backSpace(){
                            var number = document.calTxt.display.value;
                            var len = number.length - 1;
                            var newNumber = number.substring( 0, len );
                            document.calTxt.display.value = newNumber;
                         } 
