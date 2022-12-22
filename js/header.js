
document.querySelector('#navbar_logo').addEventListener('click',function()
{   document.querySelector("#navbar_div").style.display = "block"; 
})

document.querySelector('#navbar_close_btn').addEventListener('click',function()
{   document.querySelector("#navbar_div").style.display = "none"; 
})


//horizontal scroll category

function clickme(elem)
{
  var val=elem.value
  
    document.querySelector("#search_input").value=val;
     document.querySelector('#search_btn').click();
}

//end horizontal scroll category