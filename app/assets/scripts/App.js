import $ from 'jquery';
import WOW from 'wowjs';

new WOW.WOW().init();

$(".bg-image").css("background",function(){var a="url("+$(this).data("image-src")+") no-repeat center center";return a}),$(".bg-image").css("background-size","cover")