

const indexData = {
      "title1section1": '',
      "parasection1": '',
      "title2section2":'',
      "parasection2":'',
      "title3section3":'',
      "parasection3":'',
    };
    fetch('index.json')
      .then(response => response.json())
      .then(data => {
        indexData.title1section1 = data.title1section1;
        indexData.parasection1 = data.parasection1;
        indexData.title2section2=data.title2section2;
        indexData.parasection2=data.parasection2;
        indexData.title3section3=data.title3section3;
        indexData.parasection3 = data.parasection3;
        
        const edit = document.getElementById("edit");
        const area = document.getElementById("area");
        const content = document.getElementById("contentedit");
        const submit = document.getElementById("submit");
        

        edit.addEventListener("click", show);
        submit.addEventListener("click", save);
        
        const edittwo = document.getElementById("edit1");
        const areatwo = document.getElementById("area1");
        const contenttwo = document.getElementById("contentedit1");
        const submittwo = document.getElementById("submit1");

        edittwo.addEventListener("click", showone);
        submittwo.addEventListener("click", saveone);

        const editthree = document.getElementById("edit2");
        const areathree = document.getElementById("area2");
        const contentthree = document.getElementById("contentedit2");
        const submitthree = document.getElementById("submit2");

        editthree.addEventListener("click", showtwo);
        submitthree.addEventListener("click", savetwo);
        



        function show() {
          area.value = data.parasection1;
        }

        function save() {
          content.innerText = area.value;
          localStorage.setItem("user.edit-parasection1", area.value);
        }

        function showone() {
          areatwo.value = data.parasection2;
        }
        function saveone() {
          contenttwo.innerText = areatwo.value;
          localStorage.setItem("user.edit-parasection2", areatwo.value);
        }

        function showtwo() {
          areathree.value = data.parasection3;
        }
        function savetwo() {
          contentthree.innerText = areathree.value;
          localStorage.setItem("user.edit-parasection3", areathree.value);
        }

      })

      .catch(error => console.error('Error fetching data;', error));