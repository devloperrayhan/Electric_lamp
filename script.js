alert("One problem with this lamp is that it gets damaged if left on for more than 5 seconds at a time. So turn off the light before 5 seconds.         {All Right Reserved By Developer Rayhan}")
const bulbControl = document.querySelector("section.lamp_section .bulb");
const lampControl = document.querySelector("section.lamp_control .btn");

let fuse_lamp;
let go_lamp;

lampControl.addEventListener("click", () => {
    clearInterval(fuse_lamp);
    clearTimeout(go_lamp);
    bulbControl.classList.toggle("click_bulb");
    setTimeout(() => {
        fuse_lamp = setInterval(() => {
            bulbControl.classList.toggle("click_bulb");
        }, 10);
        go_lamp = setTimeout(() => {
                bulbControl.classList.add("bulb_animation");
        },5 * 1000);
        setTimeout(() => {
            clearInterval(fuse_lamp);
        },7 * 1000);
    },5 * 1000);
});