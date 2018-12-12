import $ from "jquery";
import "bootstrap";
import { Clock } from "./clock";

// C'est cet import qui lance l'ajout de la balise <style type="text/css">
import css from "./style.scss";

var $mainBtn = $("#main-btn");

$mainBtn.tooltip({
  title: "Click me !",
  placement: "right"
});

const clockElt = document.querySelector("#clock");
const clock = new Clock({
  container: clockElt
});

clock.start();
