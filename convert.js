	function convertCurrency(){
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    const xmlhttp = new XMLHttpRequest();
	const query = from + '_' + to;
    const url = 'https://free.currencyconverterapi.com/api/v5/convert?q='+ query + '&compact=ultra';
    
    
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    xmlhttp.onreadystatechange =function(){
         if(xmlhttp.readyState == 4 && xmlhttp.status==200){
            var result = xmlhttp.responseText;
            var jsResult = JSON.parse(result);
			 var val = jsResult[query];
			var math=document.getElementById("amount").value;
			document.getElementById("resultfinal").value=(val * math).toFixed(2);
        
		 }
    }
} 


if ('serviceWorker' in navigator) {

  navigator.serviceWorker.register('./service-worker.js') .then(function(registration) {
      console.log("Service Worker Registered");
    })
    .catch(function(err) {
      console.log("Service Worker Failed to Register");
    })

}