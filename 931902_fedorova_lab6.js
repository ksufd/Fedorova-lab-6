showOne = (id_block_to_appear,id_block_to_hide,id_image_to_hide,id_image_to_appear) =>{

    document.getElementById(id_image_to_hide).style.display = 'none';
    document.getElementById(id_block_to_hide).style.width = '0%';
 
    document.getElementById(id_image_to_appear).style.display = 'block';
    document.getElementById(id_image_to_appear).style.width = '75%';
    document.getElementById(id_block_to_appear).style.width = '100%';
 }
 showBoth = () =>{
     document.querySelectorAll('.block').forEach(element => {
         element.style.width = "50%";
         element.querySelector("img").style.display="block";
         element.querySelector("img").style.width="100%";})
 }