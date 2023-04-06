function showUserCreateBox() {
    Swal.fire({
      title: "Create user",
      html:
        '<input id="id" type="hidden">' +
        '<input id="name" class="swal2-input" placeholder="NAME">' +
        '<input id="date" class="swal2-input" placeholder="DATE">' ,
        // '<input id="username" class="swal2-input" placeholder="Username">' +
        // '<input id="email" class="swal2-input" placeholder="Email">',
    //   focusConfirm: false,
    //   preConfirm: () => {
    //     userCreate();
    //   },
    });
  }

  