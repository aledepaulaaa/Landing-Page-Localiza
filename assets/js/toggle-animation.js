let navbar = document.querySelector(".header .navbar");

      function handleToggle() {
      const buttonToggle = document.querySelector(".btn-toggle");
      const navigation = document.querySelector(".navbar-nav");
      buttonToggle.classList.toggle("active");
      navigation.classList.toggle("active");

			window.onscroll = () => {
				navbar.classList.remove("active");

				if (window.scrollY > 0) {
					document.querySelector(".header").classList.add("active");
				} else {
					{
						document.querySelector(".header").classList.remove("active");
					}
				}
			};

			window.onload = () => {
				if (window.scrollY > 0) {
					document.querySelector(".header").classList.add("active");
				} else {
					{
						document.querySelector(".header").classList.remove("active");
					}
				}
      }
			};