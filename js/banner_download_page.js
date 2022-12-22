function load_function()
{
  var f=document.querySelector("#loading_front");
  f.style.display="none";
}
//download banner function============================
$(document).ready(function (){
  $("#banner_download_main_button").on('click', function () {
        html2canvas(document.getElementById("Img_div")).then(function (canvas) {
            var anchorTag = document.createElement("a");
            document.body.appendChild(anchorTag);
            anchorTag.download = "filename.jpg";
            anchorTag.href = canvas.toDataURL();
            anchorTag.target = '_blank';
            anchorTag.click();
        });
        $('#google_ads_download_btn_div').css("display", "none");
        $('#main_container').css("display", "block");
        $('#banner_download_main_button').css("display", "none");
        $('#timer_text').css("display", "block");
        $('#banner_download_main_button').css("display", "none");
});
});
//End//download banner function============================
//photo replace
      img_div=document.querySelector('.photo_div')
      img=document.querySelector('#photo')
      file=document.querySelector('#choose_photo')
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
//validation==================
document.querySelector('.submit_btn').addEventListener('click',function()
{
             let name=document.querySelector('.name_input').value;
             let  chose_photo=document.querySelector('#photo').getAttribute('src');
             console.log(chose_photo)
             
             if(name=='')
             {
              document.querySelector('#error').innerHTML='Plz Enter Name'
              document.querySelector('#enter_name').style.background="red"
             }
             else if(chose_photo=='/static/media/person.png')
             {
              document.querySelector('#error').innerHTML='Plz Choose Photo'
              document.querySelector('#photo_upload_btn').style.background="red"
             }
          
             
             else{
                 
                  document.querySelector('#error').innerHTML=''
                  document.querySelector('#banner_ads_btn').style.display='block'
             }
})

document.querySelector('#photo_upload_btn').addEventListener('click',function()

{     


  document.querySelector('#photo_upload_btn').style.background="#d7b70a96"

})

document.querySelector('#enter_name').addEventListener('keyup',function()
{
  document.querySelector('#enter_name').style.background="white"
  let name=document.querySelector('#enter_name').value
  document.querySelector('#name_span').innerHTML=name
  console.log(name)
})



//=================add more text
document.querySelector('#enter_more_text').addEventListener('keyup',function()
{

  let name=document.querySelector('#enter_more_text').value
  document.querySelector('#span_more_text_2').innerHTML=name
  console.log(name)
})
//==============================

//validation End
    
      //=========================increment_decrement_name=======================================
      document.querySelector('#name_tb_dec_btn').addEventListener('click',function()
      {
          var val=document.querySelector('#name_input_tp').value
          val--;
          document.querySelector('#name_input_tp').value=val
          var chang=document.querySelector('#name_input_tp').value
          document.querySelector('#name_span').style.marginTop = chang+'px'
          console.log(chang)
      })
      document.querySelector('#name_tb_inc_btn').addEventListener('click',function()
      {
          var val=document.querySelector('#name_input_tp').value
          val++;
          document.querySelector('#name_input_tp').value=val
          var chang=document.querySelector('#name_input_tp').value
          document.querySelector('#name_span').style.marginTop = chang+'px'
          console.log(chang)
      })
///left-right
      document.querySelector('#name_lf_dec_btn').addEventListener('click',function()
      {
          var val=document.querySelector('#name_input_lf').value
          val--;
          document.querySelector('#name_input_lf').value=val
          var chang=document.querySelector('#name_input_lf').value
          document.querySelector('#name_span').style.marginLeft = chang+'px'
          console.log(chang)
      })
      document.querySelector('#name_lf_inc_btn').addEventListener('click',function()
      {
          var val=document.querySelector('#name_input_lf').value
          val++;
          document.querySelector('#name_input_lf').value=val
          var chang=document.querySelector('#name_input_lf').value
          document.querySelector('#name_span').style.marginLeft = chang+'px'
          console.log(chang)
      })

       //========================================Name_text color change=========
  let color1=document.querySelector('#color_picker').value
  document.querySelector('#name_span').style.color=color1
document.querySelector('#color_picker').addEventListener('change',function()
{
  let color1=document.querySelector('#color_picker').value
  document.querySelector('#name_span').style.color=color1
})

//==================Name_font-size============================
document.querySelector('#font_dec').addEventListener('click',function()
      {
          var val=document.querySelector('#font_size').value
          val--;
          document.querySelector('#font_size').value=val
          var chang=document.querySelector('#font_size').value
          document.querySelector('#name_span').style.fontSize  = chang+'px'

          console.log(chang)
      })
      document.querySelector('#font_inc').addEventListener('click',function()
      {
          let val=document.querySelector('#font_size').value
          val++;
          document.querySelector('#font_size').value=val
          let chang=document.querySelector('#font_size').value
          document.querySelector('#name_span').style.fontSize  = chang+'px'
          console.log(chang)
      })
//========================end==================================================
  //=============================================End Name- Inpute====================================

  //==================more textin dec=================

  document.querySelector('#name_tb_dec_btn_more_text').addEventListener('click',function()
  {
      var val=document.querySelector('#name_input_tp_more_text').value
      val--;
      document.querySelector('#name_input_tp_more_text').value=val
      var chang=document.querySelector('#name_input_tp_more_text').value
      document.querySelector('#span_more_text').style.marginTop = chang+'px'
      console.log(chang)
  })
  document.querySelector('#name_tb_inc_btn_more_text').addEventListener('click',function()
  {
      var val=document.querySelector('#name_input_tp_more_text').value
      val++;
      document.querySelector('#name_input_tp_more_text').value=val
      var chang=document.querySelector('#name_input_tp_more_text').value
      document.querySelector('#span_more_text').style.marginTop = chang+'px'
      console.log(chang)
  })
///left-right
  document.querySelector('#name_lf_dec_btn_more_text').addEventListener('click',function()
  {
      var val=document.querySelector('#name_input_lf_more_text').value
      val--;
      document.querySelector('#name_input_lf_more_text').value=val
      var chang=document.querySelector('#name_input_lf_more_text').value
      document.querySelector('#span_more_text').style.marginLeft = chang+'px'
      console.log(chang)
  })
  document.querySelector('#name_lf_inc_btn_more_text').addEventListener('click',function()
  {
      var val=document.querySelector('#name_input_lf_more_text').value
      val++;
      document.querySelector('#name_input_lf_more_text').value=val
      var chang=document.querySelector('#name_input_lf_more_text').value
      document.querySelector('#span_more_text').style.marginLeft = chang+'px'
      console.log(chang)
  })

   //========================================more text color change=========
  
 document.querySelector('#color_picker_more_text').addEventListener('change',function()
 {

   let color1=document.querySelector('#color_picker_more_text').value
   document.querySelector('#span_more_text').style.color=color1
 })

 //==================more_text_font-size============================
document.querySelector('#font_dec_more_text').addEventListener('click',function()
{
    var val=document.querySelector('#font_size_more_text').value
    val--;
    document.querySelector('#font_size_more_text').value=val
    let chang=document.querySelector('#font_size_more_text').value
    document.querySelector('#span_more_text').style.fontSize  = chang+'px'

    console.log(chang)
})
document.querySelector('#font_inc_more_text').addEventListener('click',function()
{
    var val=document.querySelector('#font_size_more_text').value
    val++;
    document.querySelector('#font_size_more_text').value=val
    let chang=document.querySelector('#font_size_more_text').value
    console.log(chang)
    document.querySelector('#span_more_text').style.fontSize=chang+'px'
  
   
})
//========================end==================================================
//=============================================End more text====================================

      //=========================increment_decrement_photo=======================================
      document.querySelector('#photo_tb_dec_btn').addEventListener('click',function()
      {
          var val=document.querySelector('#photo_input_tp').value
          val--;
          document.querySelector('#photo_input_tp').value=val
          var chang=document.querySelector('#photo_input_tp').value
          document.querySelector('#main_photo').style.marginTop = chang+'px'
          console.log(chang)
      })
      document.querySelector('#photo_tb_inc_btn').addEventListener('click',function()
      {
          var val=document.querySelector('#photo_input_tp').value
          val++;
          document.querySelector('#photo_input_tp').value=val
          var chang=document.querySelector('#photo_input_tp').value
          document.querySelector('#main_photo').style.marginTop = chang+'px'
          console.log(chang)
      })
///left-right
      document.querySelector('#photo_lf_dec_btn').addEventListener('click',function()
      {
          var val=document.querySelector('#photo_input_lf').value
          val--;
          document.querySelector('#photo_input_lf').value=val
          var chang=document.querySelector('#photo_input_lf').value
          document.querySelector('#main_photo').style.marginLeft = chang+'px'
          console.log(chang)
      })
      document.querySelector('#photo_lf_inc_btn').addEventListener('click',function()
      {
          var val=document.querySelector('#photo_input_lf').value
          val++;
          document.querySelector('#photo_input_lf').value=val
          var chang=document.querySelector('#photo_input_lf').value
          document.querySelector('#main_photo').style.marginLeft = chang+'px'
          console.log(chang)

      })
  //=============================================End Name- photo=============================================================
 
//==========shadow color====================
document.querySelector('#shadow_color').addEventListener('change',function()
{
      let col=document.querySelector('#shadow_color').value
      console.log(col)
      document.querySelector("#name_span").style.textShadow = "2px 2px 3px"+col;
})
document.querySelector('#remove_shadow').addEventListener('click',function(){

  document.querySelector("#name_span").style.textShadow = "";
})
//===============shadow end===============

    //================photo height width=====================================
    document.querySelector('#photo_height_dec').addEventListener('click',function()
      {
        var val=document.querySelector('#main_photo').clientHeight
          console.log(val)
          val--;
          document.querySelector('#main_photo').style.height  = val+'px'
      })
      document.querySelector('#photo_height_inc').addEventListener('click',function()
      {
        var val=document.querySelector('#main_photo').clientHeight
          console.log(val)
          val++;
          document.querySelector('#main_photo').style.height  = val+'px'
      })
///////////////////////width
      document.querySelector('#photo_width_dec').addEventListener('click',function()
      {
        let val=document.querySelector('#main_photo').clientWidth
          console.log(val)
          val--;
          document.querySelector('#main_photo').style.width  = val+'px'
      })
      document.querySelector('#photo_width_inc').addEventListener('click',function()
      {
        let val=document.querySelector('#main_photo').clientWidth
          console.log(val)
          val++;
          document.querySelector('#main_photo').style.width= val+'px'
          console.log(val)
      })
      //=========================end hright width==============
      //select font=================================
      document.querySelector('#select_font').addEventListener('change',function()
      {
        let font=document.querySelector('#select_font').value
        document.querySelector('#name_span').style.fontFamily=font
      })
      //end font======================================
  //photo border===================================================================
      document.querySelector('#photo_border').addEventListener('click',function()
      {
        document.querySelector('#photo').style.border="5px groove white";
      })


//photo remove===============
document.querySelector('#photo_border_remove').addEventListener('click',function()
      {
        document.querySelector('#photo').style.border="";
      })

//==========color change border photo
document.querySelector('#photo_border_color').addEventListener('change',function()
{
  let size=document.querySelector('#photo_border_size').value
  let color=document.querySelector('#photo_border_color').value
  console.log(size)
  document.querySelector('#photo').style.border=size+"px"+ " " + "groove" + " "+color;

})

//size photo border
document.querySelector('#photo_border_size').addEventListener('change',function()
{
  let size=document.querySelector('#photo_border_size').value
  let color=document.querySelector('#photo_border_color').value
  console.log(size)
  document.querySelector('#photo').style.border=size+"px"+ " " + "groove" + " "+color;

})



////////border end////////////////