const oppoStatus = [
    {
      "K_OPPO_STATUS": 1,
      "STATUS": "1. Initial Contact",
      "SUCCESS": 0
    },
    {
      "K_OPPO_STATUS": 2,
      "STATUS": "2. Demonstration",
      "SUCCESS": 25
    },
    {
      "K_OPPO_STATUS": 3,
      "STATUS": "3. Proposal",
      "SUCCESS": 50
    },
    {
      "K_OPPO_STATUS": 4,
      "STATUS": "4. Negotiation",
      "SUCCESS": 75
    },
    {
      "K_OPPO_STATUS": 5,
      "STATUS": "5. Order",
      "SUCCESS": 100
    }
  ];
  
  const Module = class {
    constructor() {
  
    }
    start() {
        // Start modifying the form elements here!

        let select = document.getElementsByName("status"); //simplification of variables for lisibility

        for (var i=0; i < oppoStatus.length; i++) { //Add of options to the selector - 1st request
            var opt = document.createElement('option');
            opt.value = oppoStatus[i].STATUS;
            opt.innerHTML = oppoStatus[i].STATUS;
            select[0].add(opt);
        }

        document.getElementsByName("success")[0].value = oppoStatus[0].SUCCESS //start the page at value 0

        select[0].addEventListener("change", function(){ //change the values of success on input - 2nd request
            var stat = select[0].value;
            for (var y=0;y <oppoStatus.length; y++){
                if (stat == oppoStatus[y].STATUS){
                    document.getElementsByName("success")[0].value = oppoStatus[y].SUCCESS
                }
            }
        });

        document.getElementsByTagName("button")[0].addEventListener("click", function(event){ //give the result as JSON - 3rd request
            event.preventDefault(); //prevent the refresh

             var statusValue = Number.parseInt(select[0].value.charAt(0), 10)
             var successValue = Number.parseInt(document.getElementsByName("success")[0].value, 10)

            console.log(JSON.stringify({status : statusValue, successValue : successValue })); //not mandatory

            document.getElementsByClassName('output')[0].innerHTML = JSON.stringify({status : statusValue, success : successValue }); //charAT(0) gives the first Character, in our situation the numeric value only
        })
    }
  }
  
  const main = new Module();
  main.start();