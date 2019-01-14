document.getElementById("name").onkeydown = e => {
		  if (e.key.length>1 && e.key != "Backspace")
			e.preventDefault();
	  }

    var socket = io();

    document.getElementById("nameSubmit").onclick = event => {
      var name = document.getElementById("name").value;
      socket.emit("recieveName", name);
      socket.on("redirect", data=>{
        switch (data) {
          case "admin":
            window.location.replace('admin/index.html');
            break;
          case "user":
            window.location.replace('user/index.html');
            break;
          case "active":
            window.location.replace('error/active.html');
            break;
        }
      });
    };
