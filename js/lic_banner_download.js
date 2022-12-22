
//name=============
document.querySelector('#lic_name_input').addEventListener('keyup',function()
{   
   
    let val=document.querySelector('#lic_name_input').value;
    document.querySelector('#lic_person_name span').innerHTML=val;
    if(val!="")
    {
        document.querySelector('#lic_name_input').style.background="white"
    document.querySelector('#error').innerHTML=""
    }

})
//change name

// color chang

document.querySelector('#lic_name_color').addEventListener('change',function()
{
    let color=document.querySelector('#lic_name_color').value;

    document.querySelector('#lic_person_name span').style.color=color;
})

//

// name font-size
document.querySelector('#lic_name_font_size_dec').addEventListener('click',function()
{
        let size=document.querySelector("#lic_name_font_size_input").value
        size--
        document.querySelector("#lic_name_font_size_input").value=size
        document.querySelector('#lic_person_name').style.fontSize= size +'px';
        
})


document.querySelector('#lic_name_font_size_inc').addEventListener('click',function()
{
        let size=document.querySelector("#lic_name_font_size_input").value
        size++
        document.querySelector("#lic_name_font_size_input").value=size
        document.querySelector('#lic_person_name').style.fontSize= size +'px';
        
})
//========================

//top bottm name===================================
document.querySelector('#lic_name_top_btn').addEventListener('click',function()
{

    let size=document.querySelector('#lic_name_input_tb').value
    size--
    document.querySelector('#lic_name_input_tb').value=size;
    document.querySelector('#lic_person_name').style.marginTop = size+'px'

})

document.querySelector('#lic_name_bottom_btn').addEventListener('click',function()
{

    let size=document.querySelector('#lic_name_input_tb').value
    size++
    document.querySelector('#lic_name_input_tb').value=size;
    document.querySelector('#lic_person_name').style.marginTop = size+'px'

})
//=========================

//left right name
document.querySelector('#lic_name_left_btn').addEventListener('click',function()
{

    let size=document.querySelector('#lic_name_input_lr').value
    size--
    document.querySelector('#lic_name_input_lr').value=size;
    document.querySelector('#lic_person_name').style.marginLeft = size+'px'

})

document.querySelector('#lic_name_right_btn').addEventListener('click',function()
{

    let size=document.querySelector('#lic_name_input_lr').value
    size++
    document.querySelector('#lic_name_input_lr').value=size;
    document.querySelector('#lic_person_name').style.marginLeft = size+'px'

})

//name end


//mobile=============
document.querySelector('#lic_mobile_input').addEventListener('keyup',function()
{   
   
    let val=document.querySelector('#lic_mobile_input').value;
    document.querySelector('#lic_person_mobile span').innerHTML=val;

    if(val.toString().length==10 || val!="")
    {
        document.querySelector('#lic_mobile_input').style.background="white"
    document.querySelector('#error').innerHTML=""
    }

})
//change mobile

// color chang

document.querySelector('#lic_mobile_color').addEventListener('change',function()
{
    let color=document.querySelector('#lic_mobile_color').value;

    document.querySelector('#lic_person_mobile span').style.color=color;
})

//

// mobile font-size
document.querySelector('#lic_mobile_font_size_dec').addEventListener('click',function()
{
        let size=document.querySelector("#lic_mobile_font_size_input").value
        size--
        document.querySelector("#lic_mobile_font_size_input").value=size
        document.querySelector('#lic_person_mobile').style.fontSize= size +'px';
        
})


document.querySelector('#lic_mobile_font_size_inc').addEventListener('click',function()
{
        let size=document.querySelector("#lic_mobile_font_size_input").value
        size++
        document.querySelector("#lic_mobile_font_size_input").value=size
        document.querySelector('#lic_person_mobile').style.fontSize= size +'px';
        
})
//========================

//top bottm mobile===================================
document.querySelector('#lic_mobile_top_btn').addEventListener('click',function()
{

    let size=document.querySelector('#lic_mobile_input_tb').value
    size--
    document.querySelector('#lic_mobile_input_tb').value=size;
    document.querySelector('#lic_person_mobile').style.marginTop = size+'px'

})

document.querySelector('#lic_mobile_bottom_btn').addEventListener('click',function()
{

    let size=document.querySelector('#lic_mobile_input_tb').value
    size++
    document.querySelector('#lic_mobile_input_tb').value=size;
    document.querySelector('#lic_person_mobile').style.marginTop = size+'px'

})
//=========================

//left right mobile
document.querySelector('#lic_mobile_left_btn').addEventListener('click',function()
{

    let size=document.querySelector('#lic_mobile_input_lr').value
    size--
    document.querySelector('#lic_mobile_input_lr').value=size;
    document.querySelector('#lic_person_mobile').style.marginLeft = size+'px'

})

document.querySelector('#lic_mobile_right_btn').addEventListener('click',function()
{

    let size=document.querySelector('#lic_mobile_input_lr').value
    size++
    document.querySelector('#lic_mobile_input_lr').value=size;
    document.querySelector('#lic_person_mobile').style.marginLeft = size+'px'

})

//mobile end

//email=============
document.querySelector('#lic_email_input').addEventListener('keyup',function()
{   
   
    let val=document.querySelector('#lic_email_input').value;
    document.querySelector('#lic_person_email span').innerHTML=val;

    if(val.includes("@") && (val.includes(".")))
    {

        document.querySelector('#lic_email_input').style.background="white"
    document.querySelector('#error').innerHTML=""

    }

})
//change email

// color chang

document.querySelector('#lic_email_color').addEventListener('change',function()
{
    let color=document.querySelector('#lic_email_color').value;
    console.log(color)

    document.querySelector('#lic_person_email span').style.color=color;
})

//

// email font-size
document.querySelector('#lic_email_font_size_dec').addEventListener('click',function()
{
        let size=document.querySelector("#lic_email_font_size_input").value
        size--
        document.querySelector("#lic_email_font_size_input").value=size
        document.querySelector('#lic_person_email').style.fontSize= size +'px';
        
})


document.querySelector('#lic_email_font_size_inc').addEventListener('click',function()
{
        let size=document.querySelector("#lic_email_font_size_input").value
        size++
        document.querySelector("#lic_email_font_size_input").value=size
        document.querySelector('#lic_person_email').style.fontSize= size +'px';
        
})
//========================

//top bottm email===================================
document.querySelector('#lic_email_top_btn').addEventListener('click',function()
{

    let size=document.querySelector('#lic_email_input_tb').value
    size--
    document.querySelector('#lic_email_input_tb').value=size;
    document.querySelector('#lic_person_email').style.marginTop = size+'px'

})

document.querySelector('#lic_email_bottom_btn').addEventListener('click',function()
{

    let size=document.querySelector('#lic_email_input_tb').value
    size++
    document.querySelector('#lic_email_input_tb').value=size;
    document.querySelector('#lic_person_email').style.marginTop = size+'px'

})
//=========================

//left right email
document.querySelector('#lic_email_left_btn').addEventListener('click',function()
{

    let size=document.querySelector('#lic_email_input_lr').value
    size--
    document.querySelector('#lic_email_input_lr').value=size;
    document.querySelector('#lic_person_email').style.marginLeft = size+'px'

})

document.querySelector('#lic_email_right_btn').addEventListener('click',function()
{

    let size=document.querySelector('#lic_email_input_lr').value
    size++
    document.querySelector('#lic_email_input_lr').value=size;
    document.querySelector('#lic_person_email').style.marginLeft = size+'px'

})

//email end

//photo================
//photo replace
img=document.querySelector('#lic_person_img_tag')
file=document.querySelector('#lic_person_photo_input')
file.addEventListener('change',function()
{
  const choosedFile=this.files[0];
  if(choosedFile)
  {
    const reader=new FileReader;
    reader.addEventListener('load',function()
    {
      img.setAttribute('src',reader.result);
    })
    reader.readAsDataURL(choosedFile)
  }


  
})
//======photh replace_end

// photo border
document.querySelector('#border_size_photo').addEventListener('change',function()
{
    let color =document.querySelector("#photo_border_color").value;
    let size=document.querySelector('#border_size_photo').value;
    document.querySelector('#lic_person_img_tag').style.border=size+"px"+ " " + "groove" + " "+color;
})

//photo border radius
document.querySelector('#photo_border_radius').addEventListener('change',function()
{
    let radius =document.querySelector("#photo_border_radius").value;
    let color =document.querySelector("#photo_border_color").value;
    let size=document.querySelector('#border_size_photo').value;
    console.log(size)
    

    if(size==0)
    {
        document.querySelector('#lic_person_img_tag').style.border=1+"px"+ " " + "groove" + " "+color;
    document.querySelector("#lic_person_img_tag").style.borderRadius = radius+"px";

    }
    else{
    
    document.querySelector('#lic_person_img_tag').style.border=size+"px"+ " " + "groove" + " "+color;
    document.querySelector("#lic_person_img_tag").style.borderRadius = radius+"px"; 
    }
    
   

})

//photo border color

    document.querySelector('#photo_border_color').addEventListener('change',function()
{
    let radius =document.querySelector("#photo_border_radius").value;
    let color =document.querySelector("#photo_border_color").value;
    let size=document.querySelector('#border_size_photo').value;
    console.log(size)
    

    if(size==0)
    {
        document.querySelector('#lic_person_img_tag').style.border=1+"px"+ " " + "groove" + " "+color;
    document.querySelector("#lic_person_img_tag").style.borderRadius = radius+"px";

    }
    else{
    
    document.querySelector('#lic_person_img_tag').style.border=size+"px"+ " " + "groove" + " "+color;
    document.querySelector("#lic_person_img_tag").style.borderRadius = radius+"px"; 
    }
    
   
   

})

document.querySelector("#photo_border_none_btn").addEventListener('click',function()
{
    document.querySelector('#lic_person_img_tag').style.border="none";
})

    //================photo height width=====================================
    document.querySelector('#photo_height_dec').addEventListener('click',function()
      {
        var val=document.querySelector('#lic_person_img_tag').clientHeight
          console.log(val)
          val--;
          document.querySelector('#lic_person_img_tag').style.height  = val+'px'
      })
      document.querySelector('#photo_height_inc').addEventListener('click',function()
      {
        var val=document.querySelector('#lic_person_img_tag').clientHeight
          console.log(val)
          val++;
          document.querySelector('#lic_person_img_tag').style.height  = val+'px'
      })
///////////////////////width
      document.querySelector('#photo_width_dec').addEventListener('click',function()
      {
        let val=document.querySelector('#lic_person_img_tag').clientWidth
          console.log(val)
          val--;
          document.querySelector('#lic_person_img_tag').style.width  = val+'px'
      })
      document.querySelector('#photo_width_inc').addEventListener('click',function()
      {
        let val=document.querySelector('#lic_person_img_tag').clientWidth
          console.log(val)
          val++;
          document.querySelector('#lic_person_img_tag').style.width= val+'px'
          console.log(val)
      })
      //=========================end hright width==============


//Top Bottm photo
document.querySelector('#lic_photo_top_btn').addEventListener('click',function()
{
    var val=document.querySelector('#lic_photo_input_tb').value
    val--;
    document.querySelector('#lic_photo_input_tb').value=val
    document.querySelector('#lic_person_img_tag').style.marginTop = val+'px'
    console.log(chang)
})
document.querySelector('#lic_photo_bottom_btn').addEventListener('click',function()
{
    var val=document.querySelector('#lic_photo_input_tb').value
    val++;
    document.querySelector('#lic_photo_input_tb').value=val
   
    document.querySelector('#lic_person_img_tag').style.marginTop = val+'px'
    console.log(chang)
})

//left right photo
document.querySelector('#lic_photo_left_btn').addEventListener('click',function()
{
    var val=document.querySelector('#lic_photo_input_lr').value
    val--;
    document.querySelector('#lic_photo_input_lr').value=val
    document.querySelector('#lic_person_img_tag').style.marginLeft = val+'px'
    console.log(chang)
})
document.querySelector('#lic_photo_right_btn').addEventListener('click',function()
{
    var val=document.querySelector('#lic_photo_input_lr').value
    val++;
    document.querySelector('#lic_photo_input_lr').value=val
   
    document.querySelector('#lic_person_img_tag').style.marginLeft = val+'px'
    console.log(chang)
})

//end photo=====


// download btn validaton
document.querySelector('#lic_validate_download_btn').addEventListener('click',function(){

    let email =document.querySelector('#lic_email_input').value
    let mobile =document.querySelector('#lic_mobile_input').value
    let name =document.querySelector('#lic_name_input').value
    if(name=="")
    {   
        document.querySelector('#lic_name_input').style.background="#ee080870"
        document.querySelector('#error').innerHTML="Plz Enter Name"
    }
    else if(mobile=="")

{   
    document.querySelector('#lic_mobile_input').style.background="#ee080870"
    document.querySelector('#error').innerHTML="Plz Enter Mobile Number"
    
    
}
else if(mobile.toString().length<10){

    document.querySelector('#lic_mobile_input').style.background="#ee080870"
    document.querySelector('#error').innerHTML="Plz Enter 10 Digit Mobile"
}
else if(email=="")

{   
    document.querySelector('#lic_email_input').style.background="#ee080870"
    document.querySelector('#error').innerHTML="Plz Enter Email"
    
}

else if(!(email.includes("@")) || (!(email.includes("."))))
{
    document.querySelector('#lic_email_input').style.background="#ee080870"
    document.querySelector('#error').innerHTML="Plz Enter Valid Email"
}

else{
    document.querySelector("#lic_details_div").style.display="none";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    document.querySelector('#ads_container').style.display="block"
    function myMessage() {
       document.querySelector('#timer_para').style.visibility="hidden"
       document.querySelector('#main_download_btn').style.display="block"
       
      }
      setTimeout(myMessage, 15000);
}
    
})


//download_banner
$(document).ready(function (){
    $("#main_download_btn").on('click', function () {
          html2canvas(document.getElementById("lic_img_div")).then(function (canvas) {
              var anchorTag = document.createElement("a");
              document.body.appendChild(anchorTag);
              anchorTag.download = "filename.jpg";
              anchorTag.href = canvas.toDataURL();
              anchorTag.target = '_blank';
              anchorTag.click();
          });
          $('#ads_container').css("display", "none");
          $('#lic_details_div').css("display",'block')
  });
  });

  //end download