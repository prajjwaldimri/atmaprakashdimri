"use strict";var adminMenu=document.getElementById("adminMenu");if(adminMenu){var adminMenuCurrentChildren=adminMenu.querySelector("[href="+CSS.escape(window.location.pathname)+"]");adminMenuCurrentChildren.classList.add("is-active")}
"use strict";
"use strict";
"use strict";var notifications=document.querySelectorAll(".notification");notifications.forEach(function(o){var n=o.querySelector(".delete");console.log(n),n.onclick=function(){o.style.display="none"}});