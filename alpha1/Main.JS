var url="http://api.giphy.com/v1/gifs/search?q=cat&api_key=P4w0NzDB3U61uwvGa0dx4K51Rk2VdJEZ";



function dark() 
{
   var element = document.body;
   element.classList.toggle("dark-mode");
}


function getinput()
{

	var text=document.getElementById("inputtext").value;
	console.log(text);

	

}; 


document.getElementById("inputtext").addEventListener('keyup',
	function(e)
	{
		if(e.which==13)
		{
			getinput();
			giphy();
			

		}
	});

function giphy()
{
	var GiphyAjaxCall=new XMLHttpRequest();
	GiphyAjaxCall.open('GET',url);
	GiphyAjaxCall.send();

	GiphyAjaxCall.addEventListener('load',
		function(e)
		{
			var data=e.target.response;
			var response=JSON.parse(data);
			console.log(response);
			
			document.getElementById("demo").innerHTML = response;
		});
}