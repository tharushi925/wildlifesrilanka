 const introductionData = {
        "title1": '',
        "para1": '',
        "title2": '',
        "para2": '',
        "title3": '',
        "para3": '',
      };
      fetch('introduction.json')
        .then(response => response.json())
        .then(data => {
          introductionData.title1 = data.title1;
          introductionData.para1 = data.para1;
          introductionData.title2 = data.title2;
          introductionData.para2 = data.para2;
          introductionData.title3 = data.title3;
          introductionData.para3 = data.para3;

          const editsinharaja = document.getElementById("editparasinharaja");
          const submitsinharaja = document.getElementById("submitparasinharaja");
          const contenteditsinharaja = document.getElementById("contentsinharaja");
          const editareasinharaja = document.getElementById("editareaone");

          editsinharaja.addEventListener("click", showparasinharaja);
          submitsinharaja.addEventListener("click", saveparasinharaja);

          function showparasinharaja() {
            editareasinharaja.value = data.para1;
          }
          function saveparasinharaja() {
            contenteditsinharaja.innerText = editareasinharaja.value;
            localStorage.setItem("user.edit-paragraphsinharaja", editareasinharaja.value);
          }

          const edithorton = document.getElementById("editparahorton");
          const submithorton = document.getElementById("submitparahorton");
          const contentedithorton = document.getElementById("contenthorton");
          const editareahorton = document.getElementById("editareatwo");

          edithorton.addEventListener("click", showparahorton);
          submithorton.addEventListener("click", saveparahorton);

        
          function showparahorton() {
            editareahorton.value = data.para2;
          }
          function saveparahorton() {
            contentedithorton.innerText = editareahorton.value;
            localStorage.setItem("user,edit-paragraphhorton", editareahorton.value);
          }


          const editknuckles = document.getElementById("editparaknuckles");
          const submitknuckles = document.getElementById("submitparaknuckles");
          const contenteditknuckles = document.getElementById("contentknuckles");
          const editareaknuckles = document.getElementById("editareathree");

          editknuckles.addEventListener("click", showparaknuckles);
          submitknuckles.addEventListener("click", saveparaknuckles);

        
          function showparaknuckles() {
            editareaknuckles.value = data.para3;
          }
          function saveparaknuckles() {
            contenteditknuckles.innerText = editareaknuckles.value;
            localStorage.setItem("user,edit-paragraphhorton", editareaknuckles.value);
          }

        

        })

        .catch(error => console.error('Error fetching data;', error));