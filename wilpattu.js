 const wilpattuData ={
      "firsttitlewilpattu":'',
      "firstparawilpattu":'',
      "secondtitlewilpattu":'',
      "secondparawilpattu":'',
      "thirdtitlewilpattu":'',
      "thirdparawilpattu":'',
    };
    fetch('wilpattu.json')
    .then(response =>response.json())
    .then(data =>{
      wilpattuData.firsttitlewilpattu=data.firsttitlewilpattu;
      wilpattuData.firstparawilpattu=data.firstparawilpattu;
      wilpattuData.secondtitlewilpattu=data.secondtitlewilpattu;
      wilpattuData.secondparawilpattu=data.secondparawilpattu;
      wilpattuData.thirdtitlewilpattu=data.thirdtitlewilpattu;
      wilpattuData.thirdparawilpattu = data.thirdparawilpattu;
      
      const editBiodiversityofWilpattuNationalparkpara = document.getElementById("editbuttonBiodiversityofWilpattuNationalpark");
      const submitBiodiversityofWilpattuNationalparkpara = document.getElementById("submitbuttonBiodiversityofWilpattuNationalpark");
      const contentBiodiversityofWilpattuNationalparkpara = document.getElementById("contentBiodiversityofWilpattuNationalpark");
      const editareaBiodiversityofWilpattuNationalparkpara = document.getElementById("editareaBiodiversityofWilpattuNationalpark");

      editBiodiversityofWilpattuNationalparkpara.addEventListener("click", showBiodiversityofWilpattuNationalparkpara);
      submitBiodiversityofWilpattuNationalparkpara.addEventListener("click", saveBiodiversityofWilpattuNationalparkpara);

      function showBiodiversityofWilpattuNationalparkpara() {
        editareaBiodiversityofWilpattuNationalparkpara.value = data.firstparawilpattu;

      }
      function saveBiodiversityofWilpattuNationalparkpara() {
        contentBiodiversityofWilpattuNationalparkpara.innerText = editareaBiodiversityofWilpattuNationalparkpara.value;
        localStorage.setItem("user.edit-BiodiversityofWilpattuNationalpark", editareaBiodiversityofWilpattuNationalparkpara.value);
      }

      const editSafariExperienceofwillpattunationalparkpara = document.getElementById("editbuttonSafariExperienceofwillpattunationalpark");
      const submitSafariExperienceofwillpattunationalparkpara = document.getElementById("submitbuttonSafariExperienceofwillpattunationalpark");
      const contentSafariExperienceofwillpattunationalparkpara = document.getElementById("contentSafariExperienceofwillpattunationalpark");
      const editareaSafariExperienceofwillpattunationalparkpara = document.getElementById("editareaSafariExperiencewillpattunationalpark");

      editSafariExperienceofwillpattunationalparkpara.addEventListener("click", showSafariExperienceofwillpattunationalpark);
      submitSafariExperienceofwillpattunationalparkpara.addEventListener("click", saveSafariExperienceofwillpattunationalparkpara);
      

      function showSafariExperienceofwillpattunationalpark() {
        editareaSafariExperienceofwillpattunationalparkpara.value = data.secondparawilpattu;
      }

      function saveSafariExperienceofwillpattunationalparkpara() {
        contentSafariExperienceofwillpattunationalparkpara.innerText = editareaSafariExperienceofwillpattunationalparkpara.value;
        localStorage.setItem("user.edit-SafariExperienceofwillpattunationalpark", editareaSafariExperienceofwillpattunationalparkpara.value);

      }


      const editLeopardDensityofWilpattuNationalParkpara = document.getElementById("editbuttonLeopardDensityofWilpattuNationalPark");
      const submitLeopardDensityofWilpattuNationalParkpara = document.getElementById("submitbuttonLeopardDensityofWilpattuNationalPark");
      const contentLeopardDensityofWilpattuNationalParkpara = document.getElementById("contentLeopardDensityofWilpattuNationalPark");
      const editareaLeopardDensityofWilpattuNationalParkpara = document.getElementById("editareaLeopardDensityofWilpattuNationalPark");

      editLeopardDensityofWilpattuNationalParkpara.addEventListener("click", showLeopardDensityofWilpattuNationalPark);
      submitLeopardDensityofWilpattuNationalParkpara.addEventListener("click", saveLeopardDensityofWilpattuNationalPark);
      

      function showLeopardDensityofWilpattuNationalPark() {
        editareaLeopardDensityofWilpattuNationalParkpara.value = data.thirdparawilpattu;
      }

      function saveLeopardDensityofWilpattuNationalPark() {
        contentLeopardDensityofWilpattuNationalParkpara.innerText = editareaLeopardDensityofWilpattuNationalParkpara.value;
        localStorage.setItem("user.edit-LeopardDensityofWilpattuNationalPark", editareaLeopardDensityofWilpattuNationalParkpara.value);

      }




    })

    .catch(error => console.error('Error fetching data;', error));