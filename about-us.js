const aboutusData = {
            "aboutustitle": '',
            "aboutusparagraph": '',
            
          };
          fetch('about-us.json')
            .then(response => response.json())
            .then(data => {
              aboutusData.aboutustitle = data.aboutustitle;
              aboutusData.aboutusparagraph = data.aboutusparagraph;

              const editdow = document.getElementById("editbuttondow");
              const submitdow = document.getElementById("submitbuttondow");
              const contenteditdow = document.getElementById("contentdow");
              const editareadow = document.getElementById("editareadow");

              editdow.addEventListener("click", showparadow);
              submitdow, addEventListener("click", saveparadow);

              function showparadow() {
                editareadow.value = data.aboutusparagraph;
               
              }

              function saveparadow() {
                contenteditdow.innerText = editareadow.value;
                localStorage.setItem("user.edit-dow", editareadow.value);
              }


            
              
            })

            .catch(error => console.error('Error fetching data;', error));