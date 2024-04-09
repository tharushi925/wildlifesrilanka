const yalaData = {
          "firsttitleyala": '',
          "firstparayala": '',
          "secondtitleyala": '',
          "secondparayala": '',
          "thirdtitleyala": '',
          "thirdparayala": '',
        };
        fetch('yala.json')
          .then(response => response.json())
          .then(data => {
            yalaData.firsttitleyala = data.firsttitleyala;
            yalaData.firstparayala = data.firstparayala;
            yalaData.secondtitleyala = data.secondtitleyala;
            yalaData.secondparayala = data.secondparayala;
            yalaData.thirdtitleyala = data.thirdtitleyala;
            yalaData.thirdparayala = data.thirdparayala;

            const editBiodiversityofYalaNationalparkpara = document.getElementById("editbuttonBiodiversityofYalaNationalpark");
            const submitBiodiversityofYalaNationalparkpara = document.getElementById("submitbuttonBiodiversityofYalaNationalpark");
            const contentBiodiversityofYalaNationalparkpara = document.getElementById("contentBiodiversityofYalaNationalpark");
            const editareaBiodiversityofYalaNationalparkpara = document.getElementById("editareaBiodiversityofYalaNationalpark");

            editBiodiversityofYalaNationalparkpara.addEventListener("click", showBiodiversityofYalaNationalparkpara);
            submitBiodiversityofYalaNationalparkpara.addEventListener("click", saveBiodiversityofYalaNationalparkpara);

            function showBiodiversityofYalaNationalparkpara() {
              editareaBiodiversityofYalaNationalparkpara.value = data.firstparayala;

            }
            function saveBiodiversityofYalaNationalparkpara() {
              contentBiodiversityofYalaNationalparkpara.innerText = editareaBiodiversityofYalaNationalparkpara.value;
              localStorage.setItem("user.edit-BiodiversityofYalaNationalparkpara", editareaBiodiversityofYalaNationalparkpara.value)
            }


            const editSafariExperienceofYalaNationalParkpara = document.getElementById("editbuttonSafariExperienceofYalaNationalPark");
            const submitSafariExperienceofYalaNationalParkpara = document.getElementById("submitbuttonSafariExperienceofYalaNationalPark");
            const contentSafariExperienceofYalaNationalParkpara = document.getElementById("contentSafariExperienceofYalaNationalPark");
            const editareaSafariExperienceofYalaNationalParkpara = document.getElementById("editareaSafariExperienceofYalaNationalPark");

            editSafariExperienceofYalaNationalParkpara.addEventListener("click", showSafariExperienceofYalaNationalParkpara);
            submitSafariExperienceofYalaNationalParkpara.addEventListener("click", saveSafariExperienceofYalaNationalParkpara);

            function showSafariExperienceofYalaNationalParkpara() {
              editareaSafariExperienceofYalaNationalParkpara.value = data.secondparayala;

            }
            function saveSafariExperienceofYalaNationalParkpara() {
              contentSafariExperienceofYalaNationalParkpara.innerText = editareaSafariExperienceofYalaNationalParkpara.value;
              localStorage.setItem("user.edit-SafariExperienceofYalaNationalParkpara", editareaSafariExperienceofYalaNationalParkpara.value)
            }


            const editLeopardDensityofYalaNationalParkpara = document.getElementById("editbuttonLeopardDensityofYalaNationalPark");
            const submitLeopardDensityofYalaNationalParkpara = document.getElementById("submitbuttonLeopardDensityofYalaNationalPark");
            const contentLeopardDensityofYalaNationalParkpara = document.getElementById("contentLeopardDensityofYalaNationalPark");
            const editareaLeopardDensityofYalaNationalParkpara = document.getElementById("editareaLeopardDensityofYalaNationalPark");

            editLeopardDensityofYalaNationalParkpara.addEventListener("click", showLeopardDensityofYalaNationalParkpara);
            submitLeopardDensityofYalaNationalParkpara.addEventListener("click", saveLeopardDensityofYalaNationalParkpara);

            function showLeopardDensityofYalaNationalParkpara() {
              editareaLeopardDensityofYalaNationalParkpara.value = data.thirdparayala;

            }
            function saveLeopardDensityofYalaNationalParkpara() {
              contentLeopardDensityofYalaNationalParkpara.innerText = editareaLeopardDensityofYalaNationalParkpara.value;
              localStorage.setItem("user.edit-LeopardDensityofYalaNationalParkpara", editareaLeopardDensityofYalaNationalParkpara.value)
            }

          })

          .catch(error => console.error('Error fetching data;', error));