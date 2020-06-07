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

document.getElementById("searchbtn").addEventListener('click',
	function()
	{
		alert("GG");
	});