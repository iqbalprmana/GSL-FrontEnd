$(document).ready(function(){
    
    
    
var timeout         = 500;
var closetimer		= 0;
var ddmenuitem      = 0;

function menu_open()
{	menu_canceltimer();
	menu_close();
	ddmenuitem = $(this).find('ul').eq(0).css("display","block");
}

function menu_close()
{	if(ddmenuitem) ddmenuitem.css("display","none");}

function menu_timer()
{	closetimer = window.setTimeout(menu_close, timeout);}

function menu_canceltimer()
{	if(closetimer)
	{	window.clearTimeout(closetimer);
		closetimer = null;}}
                

document.onclick = menu_close;


    $('#nav > li').bind('mouseover', menu_open);
    $('#nav > li').bind('mouseout',  menu_timer);
    
    $("img.fade").hover(function(){
    $(this).stop().animate({opacity: "1"},"fast");
    },function(){
    $(this).stop().animate({opacity: "0.55"},"fast");
    });
    
    $("div.thumb a").lightBox();
    
});