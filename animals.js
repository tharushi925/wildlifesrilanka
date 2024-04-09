const animalsData ={
          "maintitle":'',
          "subtitleyala":'',
          "yalaparagraph":'',
          "subtitlewilpattu":'',
          "wilpattuparagraph":'',
          "animalpicturestitle":'',
          "elephanttitle":'',
          "elephantpara":'',
          "frogmouthtitle":'',
          "frogmouthpara":'',
          "kangarootitle":'',
          "kangaroopara":'',
          "birdwingtitle":'',
          "birdwingpara":'',
          "pitvipertitle":'',
          "pitviperpara":'',
          "woodpigeontitle":'',
          "woodpigeonpara":'',
          "leopardtitle":'',
          "leopardpara":'',
          "humplizardtitle":'',
          "humplizardpara":'',
          "bluemormontitle":'',
          "bluemormonpara":'',
          "langurtitle":'',
          "langurpara":'',
          "junglefowltitle":'',
          "junglefowlpara":'',
          "fishingcattitle":'',
          "fishingcatpara":'',
          "russelltitle":'',
          "russellpara":'',
          "treenymphtitle":'',
          "treenymphpara":'',
          "slothbeartitle":'',
          "slothbearpara":'',
          "wolfsnaketitle":'',
          "wolfsnakepara":'',
          "parakeettitle":'',
          "parakeetpara":'',
          "sambardeertitle":'',
          "sambardeerpara":'',
          "wildboartitle":'',
          "wildboarpara":'',
          "spottedcattitle":'',
          "spottedcatpara":'',
          "nosedvipertitle":'',
          "nosedviperpara":'',
          "spotteddeartitle":'',
          "spotteddearpara":'',
          "commonkaraittitle":'',
          "commonkaraitpara":'',
          "indianmuntjactitle":'',
          "indianmuntjacpara":'',
          "rumpedsunbirdtitle":'',
          "rumpedsunbirdpara":'',
          "GreenGardenLizardtitle":'',
          "GreenGardenLizardpara":'',
          "greyhornbilltitle":'',
          "greyhornbillpara":'',
          "scimitartitle":'',
          "scimitarpara":'',
          "liplizardtitle":'',
          "liplizardpara":'',
          "commonhousegeckotitle":'',
          "commonhousegeckopara":'',


        };
        fetch('animals.json')
        .then(response => response.json())
        .then(data =>{
          animalsData.maintitle=data.maintitle;
          animalsData.subtitleyala=data.subtitleyala;
          animalsData.yalaparagraph=data.yalaparagraph;
          animalsData.subtitlewilpattu=data.subtitlewilpattu;
          animalsData.wilpattuparagraph=data.wilpattuparagraph;
          animalsData.animalpicturestitle=data.animalpicturestitle;
          animalsData.elephanttitle=data.elephanttitle;
          animalsData.elephantpara=data.elephantpara;
          animalsData.frogmouthtitle=data.frogmouthtitle;
          animalsData.frogmouthpara=data.frogmouthpara;
          animalsData.kangarootitle=data.kangarootitle;
          animalsData.kangaroopara=data.kangaroopara;
          animalsData.birdwingtitle=data.birdwingtitle;
          animalsData.birdwingpara=data.birdwingpara;
          animalsData.pitvipertitle=data.pitvipertitle;
          animalsData.pitviperpara=data.pitviperpara;
          animalsData.woodpigeontitle=data.woodpigeontitle;
          animalsData.woodpigeonpara=data.woodpigeonpara;
          animalsData.leopardtitle=data.leopardtitle;
          animalsData.leopardpara=data.leopardpara;
          animalsData.humplizardtitle=data.humplizardtitle;
          animalsData.humplizardpara=data.humplizardpara;
          animalsData.bluemormontitle=data.bluemormontitle;
          animalsData.bluemormonpara=data.bluemormonpara;
          animalsData.langurtitle=data.langurtitle;
          animalsData.langurpara=data.langurpara;
          animalsData.junglefowltitle=data.junglefowltitle;
          animalsData.junglefowlpara=data.junglefowlpara;
          animalsData.fishingcattitle=data.fishingcattitle;
          animalsData.fishingcatpara=data.fishingcatpara;
          animalsData.russelltitle=data.russelltitle;
          animalsData.russellpara=data.russellpara;
          animalsData.treenymphtitle=data.treenymphtitle;
          animalsData.treenymphpara=data.treenymphpara;
          animalsData.slothbeartitle=data.slothbeartitle;
          animalsData.slothbearpara=data.slothbearpara;
          animalsData.wolfsnaketitle=data.wolfsnaketitle;
          animalsData.wolfsnakepara=data.wolfsnakepara;
          animalsData.parakeettitle=data.parakeettitle;
          animalsData.parakeetpara=data.parakeetpara;
          animalsData.sambardeertitle=data.sambardeertitle;
          animalsData.sambardeerpara=data.sambardeerpara;
          animalsData.wildboartitle=data.wildboartitle;
          animalsData.wildboarpara=data.wildboarpara;
          animalsData.spottedcattitle=data.spottedcattitle;
          animalsData.spottedcatpara=data.spottedcatpara;
          animalsData.nosedvipertitle=data.nosedvipertitle;
          animalsData.nosedviperpara=data.nosedviperpara;
          animalsData.commonkaraittitle=data.commonkaraittitle;
          animalsData.commonkaraitpara=data.commonkaraitpara;
          animalsData.indianmuntjactitle=data.indianmuntjactitle;
          animalsData.indianmuntjacpara=data.indianmuntjacpara;
          animalsData.rumpedsunbirdtitle=data.rumpedsunbirdtitle;
          animalsData.rumpedsunbirdpara=data.rumpedsunbirdpara;
          animalsData.GreenGardenLizardtitle=data.GreenGardenLizardtitle;
          animalsData.GreenGardenLizardpara=data.GreenGardenLizardpara;
          animalsData.greyhornbilltitle=data.greyhornbilltitle;
          animalsData.greyhornbillpara=data.greyhornbillpara;
          animalsData.scimitartitle=data.scimitartitle;
          animalsData.scimitarpara=data.spottedcatpara;
          animalsData.liplizardtitle=data.liplizardtitle;
          animalsData.liplizardpara=data.liplizardpara;
          animalsData.commonhousegeckotitle=data.commonhousegeckotitle;
          animalsData.commonhousegeckopara = data.commonhousegeckopara;


          const edityalapara = document.getElementById("yalaparabuttonedit");
          const submityalapara = document.getElementById("yalaparabuttonsubmit");
          const contentyala = document.getElementById("yalacontent");
          const editareayalapara = document.getElementById("yalaeditarea");

          edityalapara.addEventListener("click", showyalapara);
          submityalapara.addEventListener("click", saveyalapara);

          function showyalapara() {
            editareayalapara.value = data.yalaparagraph;
          }
          function saveyalapara() {
            contentyala.innerText = editareayalapara.value;
            localStorage.setItem("user.edit-ayalapara", editareayalapara.value);
          }

          const editwilpattupara = document.getElementById("wilpattuparabuttonedit");
          const submitwilpattupara = document.getElementById("wilpattuparabuttonsubmit");
          const contentwilpattu = document.getElementById("wilpattucontent");
          const editareawilpattupara = document.getElementById("wilpattueditarea");

          editwilpattupara.addEventListener("click", showwilpattupara);
          submitwilpattupara.addEventListener("click", savewilpattupara);

          function showwilpattupara() {
            editareawilpattupara.value = data.wilpattuparagraph;
          }
          function savewilpattupara() {
            contentwilpattu.innerText = editareawilpattupara.value;
            localStorage.setItem("user.edit-awilpattupara", editareawilpattupara.value);

          }

          const editelephantpara = document.getElementById("editbuttonelephant");
          const submitelephantpara = document.getElementById("submitbuttonelephant");
          const contentelephantpara = document.getElementById("contentelephant");
          const editareaelephantpara = document.getElementById("editareaelephant");

          editelephantpara.addEventListener("click", showelephantpara);
          submitelephantpara.addEventListener("click", saveelephantpara);

          function showelephantpara() {
            editareaelephantpara.value = data.elephantpara;
          }
          function saveelephantpara() {
            contentelephantpara.innerText = editareaelephantpara.value;
            localStorage.setItem("user.edit-elephantpara", editareaelephantpara.value);

          }

          const editfrogmouthpara = document.getElementById("editbuttonfrogmouth");
          const submitfrogmouthpara = document.getElementById("submitbuttonfrogmouth");
          const contentfrogmouthpara = document.getElementById("contentfrogmouth");
          const editareafrogmouthpara = document.getElementById("editareafrogmouth");

          editfrogmouthpara.addEventListener("click", showfrogmouthpara);
          submitfrogmouthpara.addEventListener("click", savefrogmouthpara);

          function showfrogmouthpara() {
            editareafrogmouthpara.value = data.frogmouthpara;
          }
          function savefrogmouthpara() {
            contentfrogmouthpara.innerText = editareafrogmouthpara.value;
            localStorage.setItem("user.edit-frogmouthpara", editareafrogmouthpara.value);
          }

          const editkangaroopara = document.getElementById("editbuttonkangaroo");
          const submitkangaroopara = document.getElementById("submitbuttonkangaroo");
          const contentkangaroopara = document.getElementById("contentkagaroo");
          const editareakangaroopara = document.getElementById("editareakangaroo");

          editkangaroopara.addEventListener("click", showkangaroopara);
          submitkangaroopara.addEventListener("click", savekangaroopara);

          function showkangaroopara() {
            editareakangaroopara.value = data.kangaroopara;
          }
          function savekangaroopara() {
            contentkangaroopara.innerText = editareakangaroopara.value;
            localStorage.setItem("user.edit-kangaroopara", editareakangaroopara.value);
          }

          const editbirdwingpara = document.getElementById("editbuttonbirdwing");
          const submitbirdwingpara  = document.getElementById("submitbuttonbirdwing");
          const contentbirdwingpara  = document.getElementById("contentbirdwing");
          const editareabirdwingpara = document.getElementById("editareabirdwing");
          
          editbirdwingpara.addEventListener("click", showbirdwingpara);
          submitbirdwingpara.addEventListener("click", savebirdwingpara);

          function showbirdwingpara() {
            editareabirdwingpara.value = data.birdwingpara;
          }
          function savebirdwingpara() {
            contentbirdwingpara.innerText = editareabirdwingpara.value;
            localStorage.setItem("user.edit-birdwing", editareabirdwingpara.value);
          }

          const editpitviperpara = document.getElementById("editbuttonpitviper");
          const submitpitviperpara = document.getElementById("submitbuttonpitviper");
          const contentpitviperpara = document.getElementById("contentpitviper");
          const editareapitviperpara = document.getElementById("editareapitviper");

          editpitviperpara.addEventListener("click", showpitviperpara);
          submitpitviperpara.addEventListener("click", savepitviperpara);

          function showpitviperpara() {
            editareapitviperpara.value = data.pitviperpara;
            
          }
          function savepitviperpara() {
            contentpitviperpara.innerText = editareapitviperpara.value;
            localStorage.setItem("user.edit-pitviper", editareapitviperpara.value);

          }

          const editwoodpigeonpara = document.getElementById("editbuttonwoodpigeon");
          const submitwoodpigeonpara = document.getElementById("submitbuttonwoodpigeon");
          const contentwoodpigeonpara = document.getElementById("cotentwoodpigeon");
          const editareawoodpigeonpara = document.getElementById("editareawoodpigeon");

          editwoodpigeonpara.addEventListener("click", showwoodpigeonpara);
          submitwoodpigeonpara.addEventListener("click", savewoodpigeonpara);

          function showwoodpigeonpara() {
            editareawoodpigeonpara.value = data.woodpigeonpara;

          }
          function savewoodpigeonpara() {
            contentwoodpigeonpara.innerText = editareawoodpigeonpara.value;
            localStorage.setItem("user.edit-woodpigeon", editareawoodpigeonpara.value);

          }

          const editleopardpara = document.getElementById("editbuttonleopard");
          const submitleopardpara = document.getElementById("submitbuttonleopard");
          const contentleopardpara = document.getElementById("contentleopard");
          const editarealeopardpara = document.getElementById("editarealeopard");

          editleopardpara.addEventListener("click", showleopardpara);
          submitleopardpara.addEventListener("click", saveleopardpara);

          function showleopardpara() {
            editarealeopardpara.value = data.leopardpara;

          }
          function saveleopardpara() {
            contentleopardpara.innerText = editarealeopardpara.value;
            localStorage.setItem("user.edit-leopard", editarealeopardpara.value);

          }


          const edithumplizardpara = document.getElementById("editbuttonhumplizard");
          const submithumplizardpara = document.getElementById("submitbuttonhumplizard");
          const contenthumplizardpara = document.getElementById("contenthumplizard");
          const editareahumplizardpara = document.getElementById("editareahumplizard");

          edithumplizardpara.addEventListener("click", showhumplizardpara);
          submithumplizardpara.addEventListener("click", savehumplizardpara);

          function showhumplizardpara() {
            editareahumplizardpara.value = data.humplizardpara;

          }
          function savehumplizardpara() {
            contenthumplizardpara.innerText = editareahumplizardpara.value;
            localStorage.setItem("user.edit-humplizard", editareahumplizardpara.value);

          }


          const editbluemormonpara = document.getElementById("editbuttonbluemormon");
          const submitbluemormonpara = document.getElementById("submitbuttonbluemormon");
          const contentbluemormonpara = document.getElementById("contentbluemormon");
          const editareabluemormonpara = document.getElementById("editareabluemormon");

          editbluemormonpara.addEventListener("click", showbluemormonpara);
          submitbluemormonpara.addEventListener("click", savebluemormonpara);

          function showbluemormonpara() {
            editareabluemormonpara.value = data.bluemormonpara;

          }
          function savebluemormonpara() {
            contentbluemormonpara.innerText = editareabluemormonpara.value;
            localStorage.setItem("user.edit-bluemormon", editareabluemormonpara.value);

          }

          const editlangurpara = document.getElementById("editbuttonlangur");
          const submitlangurpara = document.getElementById("submitbuttonlangur");
          const contentlangurpara = document.getElementById("contentlangur");
          const editarealangurpara = document.getElementById("editarealanguar");

          editlangurpara.addEventListener("click", showlangurpara);
          submitlangurpara.addEventListener("click", savelangurpara);

          function showlangurpara() {
            editarealangurpara.value = data.langurpara;

          }
          function savelangurpara() {
            contentlangurpara.innerText = editarealangurpara.value;
            localStorage.setItem("user.edit-langur", editarealangurpara.value);

          }


          const editjunglefowlpara = document.getElementById("editbuttonjunglefowl");
          const submitjunglefowlpara = document.getElementById("submitbuttonjunglefowl");
          const contentjunglefowlrpara = document.getElementById("contentjunglefowl");
          const editareajunglefowlpara = document.getElementById("editareajunglefowl");

          editjunglefowlpara.addEventListener("click", showjunglefowlpara);
          submitjunglefowlpara.addEventListener("click", savejunglefowlpara);

          function showjunglefowlpara() {
            editareajunglefowlpara.value = data.junglefowlpara;

          }
          function savejunglefowlpara() {
            contentjunglefowlrpara.innerText = editareajunglefowlpara.value;
            localStorage.setItem("user.edit-junglefowl", editareajunglefowlpara.value);

          }


          const editfishingcatpara = document.getElementById("editbuttonfishingcat");
          const submitfishingcatpara = document.getElementById("submitbuttonfishingcat");
          const contentfishingcatrpara = document.getElementById("contentfishingcat");
          const editareafishingcatpara = document.getElementById("editareafishingcat");

          editfishingcatpara.addEventListener("click", showfishingcatpara);
          submitfishingcatpara.addEventListener("click", savefishingcatpara);

          function showfishingcatpara() {
            editareafishingcatpara.value = data.fishingcatpara;

          }
          function savefishingcatpara() {
            contentfishingcatrpara.innerText = editareafishingcatpara.value;
            localStorage.setItem("user.edit-fishingcat", editareafishingcatpara.value);

          }


          const editrussellpara = document.getElementById("editbuttonrussell");
          const submitrussellpara = document.getElementById("submitbuttonrussell");
          const contentrussellrpara = document.getElementById("contentrussell");
          const editarearussellpara = document.getElementById("editarearussell");

          editrussellpara.addEventListener("click", showrusselltpara);
          submitrussellpara.addEventListener("click", saverussellpara);

          function showrusselltpara() {
            editarearussellpara.value = data.russellpara;

          }
          function saverussellpara() {
            contentrussellrpara.innerText = editarearussellpara.value;
            localStorage.setItem("user.edit-russell", editarearussellpara.value);

          }


          const edittreenymphpara = document.getElementById("editbuttontreenymph");
          const submittreenymphpara = document.getElementById("submitbuttontreenymph");
          const contenttreenymphpara = document.getElementById("contenttreenymph");
          const editareatreenymphpara = document.getElementById("editareatreenymph");

          edittreenymphpara.addEventListener("click", showtreenymphtpara);
          submittreenymphpara.addEventListener("click", savetreenymphpara);

          function showtreenymphtpara() {
            editareatreenymphpara.value = data.treenymphpara;

          }
          function savetreenymphpara() {
            contenttreenymphpara.innerText = editareatreenymphpara.value;
            localStorage.setItem("user.edit-treenymph", editareatreenymphpara.value);

          }


          const editslothbearpara = document.getElementById("editbuttonslothbear");
          const submitslothbearpara = document.getElementById("submitbuttonslothbear");
          const contentslothbearpara = document.getElementById("contentslothbear");
          const editareaslothbearhpara = document.getElementById("editareaslothbear");

          editslothbearpara.addEventListener("click", showslothbearpara);
          submitslothbearpara.addEventListener("click", saveslothbearpara);

          function showslothbearpara() {
            editareaslothbearhpara.value = data.slothbearpara;

          }
          function saveslothbearpara() {
            contentslothbearpara.innerText = editareaslothbearhpara.value;
            localStorage.setItem("user.edit-slothbear", editareaslothbearhpara.value);

          }


          const editwolfsnakepara = document.getElementById("editbuttonwolfsnake");
          const submitwolfsnakepara = document.getElementById("submitbuttonwolfsnake");
          const contentwolfsnakepara = document.getElementById("contentwolfsnake");
          const editareawolfsnakepara = document.getElementById("editareawolfsnake");

          editwolfsnakepara.addEventListener("click", showwolfsnakepara);
          submitwolfsnakepara.addEventListener("click", savewolfsnakepara);

          function showwolfsnakepara() {
            editareawolfsnakepara.value = data.wolfsnakepara;

          }

          function savewolfsnakepara() {
            contentwolfsnakepara.innerText = editareawolfsnakepara.value;
            localStorage.setItem("user.edit-wolfsnake", editareawolfsnakepara.value);
          }


          const editparakeetpara = document.getElementById("editbuttonparakeet");
          const submitparakeetpara = document.getElementById("submitbuttonparakeet");
          const contentparakeetpara = document.getElementById("contentparakeet");
          const editareaparakeetpara = document.getElementById("editareaparakeet");

          editparakeetpara.addEventListener("click", showparakeetpara);
          submitparakeetpara.addEventListener("click", saveparakeetpara);

          function showparakeetpara() {
            editareaparakeetpara.value = data.parakeetpara;

          }

          function saveparakeetpara() {
            contentparakeetpara.innerText = editareaparakeetpara.value;
            localStorage.setItem("user.edit-parakeet", editareaparakeetpara.value);
          }


          const editsambardeerpara = document.getElementById("editbuttonsambardeer");
          const submitsambardeerpara = document.getElementById("submitbuttonsambardeer");
          const contentsambardeerpara = document.getElementById("contentsambardeer");
          const editareasambardeerpara = document.getElementById("editareasumbardeer");

          editsambardeerpara.addEventListener("click", showsambardeerpara);
          submitsambardeerpara.addEventListener("click", savesambardeerpara);

          function showsambardeerpara() {
            editareasambardeerpara.value = data.sambardeerpara;

          }

          function savesambardeerpara() {
            contentsambardeerpara.innerText = editareasambardeerpara.value;
            localStorage.setItem("user.edit-sambardeer", editareasambardeerpara.value);
          }


          const editwildboarpara = document.getElementById("editbuttonwildboar");
          const submitwildboarpara = document.getElementById("submitbuttonwildboar");
          const contentwildboarpara = document.getElementById("contentwildboar");
          const editareawildboarpara = document.getElementById("editareawildboar");

          editwildboarpara.addEventListener("click", showwildboarpara);
          submitwildboarpara.addEventListener("click", savewildboarpara);

          function showwildboarpara() {
            editareawildboarpara.value = data.wildboarpara;

          }

          function savewildboarpara() {
            contentwildboarpara.innerText = editareawildboarpara.value;
            localStorage.setItem("user.edit-wildboar", editareawildboarpara.value);
          }


          const editspottedcatpara = document.getElementById("editbuttonspottedcat");
          const submitspottedcatpara = document.getElementById("submitbuttonspottedcat");
          const contentspottedcatpara = document.getElementById("contentspottedcat");
          const editareaspottedcatpara = document.getElementById("editareaspottedcat");

          editspottedcatpara.addEventListener("click", showspottedcatpara);
          submitspottedcatpara.addEventListener("click", savespottedcatpara);

          function showspottedcatpara() {
            editareaspottedcatpara.value = data.spottedcatpara;

          }

          function savespottedcatpara() {
            contentspottedcatpara.innerText = editareaspottedcatpara.value;
            localStorage.setItem("user.edit-spottedcat", editareaspottedcatpara.value);
          }


          const editnosedviperpara = document.getElementById("editbuttonnosedviper");
          const submitnosedviperpara = document.getElementById("submitbuttonnosedviper");
          const contentnosedviperpara = document.getElementById("contentnosedviper");
          const editareanosedviperpara = document.getElementById("editareanosedviper");

          editnosedviperpara.addEventListener("click", shownosedviperpara);
          submitnosedviperpara.addEventListener("click", savenosedviperpara);

          function shownosedviperpara() {
            editareanosedviperpara.value = data.nosedviperpara;

          }

          function savenosedviperpara() {
            contentnosedviperpara.innerText = editareanosedviperpara.value;
            localStorage.setItem("user.edit-nosedviper", editareanosedviperpara.value);
          }


          const editspotteddearpara = document.getElementById("editbuttonspotteddear");
          const submitspotteddearpara = document.getElementById("submitbuttonspotteddear");
          const contentspotteddearpara = document.getElementById("contentspotteddear");
          const editareaspotteddearpara = document.getElementById("editareaspotteddear");

          editspotteddearpara.addEventListener("click", showspotteddearpara);
          submitspotteddearpara.addEventListener("click", savespotteddearpara);

          function showspotteddearpara() {
            editareaspotteddearpara.value = data.spotteddearpara;

          }

          function savespotteddearpara() {
            contentspotteddearpara.innerText = editareaspotteddearpara.value;
            localStorage.setItem("user.edit-spotteddear", editareaspotteddearpara.value);
          }


          const editcommonkaraitpara = document.getElementById("editbuttoncommonkarait");
          const submitcommonkaraitpara = document.getElementById("submitbuttoncommonkarait");
          const contentcommonkaraitpara = document.getElementById("contentcommonkarait");
          const editareacommonkaraitpara = document.getElementById("editareacommonkarait");

          editcommonkaraitpara.addEventListener("click", showcommonkaraitpara);
          submitcommonkaraitpara.addEventListener("click", savecommonkaraitpara);

          function showcommonkaraitpara() {
            editareacommonkaraitpara.value = data.commonkaraitparapara;

          }

          function savecommonkaraitpara() {
            contentcommonkaraitpara.innerText = editareacommonkaraitpara.value;
            localStorage.setItem("user.edit-commonkarait", editareacommonkaraitpara.value);
          }


          const editindianmuntjacpara = document.getElementById("editbuttonindianmuntjac");
          const submitindianmuntjacpara = document.getElementById("submitbuttonindianmuntjac");
          const contentindianmuntjacpara = document.getElementById("contentindianmuntjac");
          const editareaindianmuntjacpara = document.getElementById("editareaindianmuntjac");

          editindianmuntjacpara.addEventListener("click", showindianmuntjacpara);
          submitindianmuntjacpara.addEventListener("click", saveindianmuntjacpara);

          function showindianmuntjacpara() {
            editareaindianmuntjacpara.value = data.indianmuntjacpara;

          }

          function saveindianmuntjacpara() {
            contentindianmuntjacpara.innerText = editareaindianmuntjacpara.value;
            localStorage.setItem("user.edit-indianmuntjac", editareaindianmuntjacpara.value);
          }


          const editrumpedsunbirdpara = document.getElementById("editbuttonrumpedsunbird");
          const submitrumpedsunbirdpara = document.getElementById("submitbuttonrumpedsunbird");
          const contentrumpedsunbirdpara = document.getElementById("contentrumpedsunbird");
          const editarearumpedsunbirdpara = document.getElementById("editarearumpedsunbird");

          editrumpedsunbirdpara.addEventListener("click", showrumpedsunbirdpara);
          submitrumpedsunbirdpara.addEventListener("click", saverumpedsunbirdpara);

          function showrumpedsunbirdpara() {
            editarearumpedsunbirdpara.value = data.rumpedsunbirdpara;

          }

          function saverumpedsunbirdpara() {
            contentrumpedsunbirdpara.innerText = editarearumpedsunbirdpara.value;
            localStorage.setItem("user.edit-rumpedsunbird", editarearumpedsunbirdpara.value);
          }


          const editgreengardenlizardpara = document.getElementById("editbuttongreengardenlizard");
          const submitgreengardenlizardpara = document.getElementById("submitbuttongreengardenlizard");
          const contentgreengardenlizardpara = document.getElementById("contentgreengardenlizard");
          const editareagreengardenlizardpara = document.getElementById("editareagreengardenlizard");

          editgreengardenlizardpara.addEventListener("click", showgreengardenlizardpara);
          submitgreengardenlizardpara.addEventListener("click", savegreengardenlizardpara);

          function showgreengardenlizardpara() {
            editareagreengardenlizardpara.value = data.GreenGardenLizardpara;

          }

          function savegreengardenlizardpara() {
            contentgreengardenlizardpara.innerText = editareagreengardenlizardpara.value;
            localStorage.setItem("user.edit-greengardenlizard", editareagreengardenlizardpara.value);
          }


          const editgreyhornbillpara = document.getElementById("editbuttongreyhornbill");
          const submitgreyhornbillpara = document.getElementById("submitbuttongreyhornbill");
          const contentgreyhornbillpara = document.getElementById("contentgreyhornbill");
          const editareagreyhornbillpara = document.getElementById("editareagreyhornbill");

          editgreyhornbillpara.addEventListener("click", showgreyhornbillpara);
          submitgreyhornbillpara.addEventListener("click", savegreyhornbillpara);

          function showgreyhornbillpara() {
            editareagreyhornbillpara.value = data.greyhornbillpara;

          }

          function savegreyhornbillpara() {
            contentgreyhornbillpara.innerText = editareagreyhornbillpara.value;
            localStorage.setItem("user.edit-greyhornbill", editareagreyhornbillpara.value);
          }


          const editscimitarpara = document.getElementById("editbuttonscimitar");
          const submitscimitarpara = document.getElementById("submitbuttonscimitar");
          const contentscimitarpara = document.getElementById("contentscimitar");
          const editareascimitarpara = document.getElementById("editareascimitar");

          editscimitarpara.addEventListener("click", showscimitarpara);
          submitscimitarpara.addEventListener("click", savescimitarpara);

          function showscimitarpara() {
            editareascimitarpara.value = data.scimitarpara;

          }

          function savescimitarpara() {
            contentscimitarpara.innerText = editareascimitarpara.value;
            localStorage.setItem("user.edit-scimitar", editareascimitarpara.value);
          }


          const editliplizardpara = document.getElementById("editbuttonliplizard");
          const submitliplizardpara = document.getElementById("submitbuttonliplizard");
          const contentliplizardrpara = document.getElementById("contentliplizard");
          const editarealiplizardpara = document.getElementById("editarealiplizard");

          editliplizardpara.addEventListener("click", showliplizardpara);
          submitliplizardpara.addEventListener("click", saveliplizardpara);

          function showliplizardpara() {
            editarealiplizardpara.value = data.liplizardpara;

          }

          function saveliplizardpara() {
            contentliplizardrpara.innerText = editarealiplizardpara.value;
            localStorage.setItem("user.edit-liplizard", editarealiplizardpara.value);
          }


          const editcommonhousegeckopara = document.getElementById("editbuttoncommonhousegecko");
          const submitcommonhousegeckopara = document.getElementById("submitbuttoncommonhousegecko");
          const contentcommonhousegeckopara = document.getElementById("contentcommonhousegecko");
          const editareacommonhousegeckopara = document.getElementById("editareacommonhousegecko");

          editcommonhousegeckopara.addEventListener("click", showcommonhousegeckopara);
          submitcommonhousegeckopara.addEventListener("click", savecommonhousegeckopara);

          function showcommonhousegeckopara() {
            editareacommonhousegeckopara.value = data.commonhousegeckopara;

          }

          function savecommonhousegeckopara() {
            contentcommonhousegeckopara.innerText = editareacommonhousegeckopara.value;
            localStorage.setItem("user.edit-commonhousegeck", editareacommonhousegeckopara.value);
          }
          
         })
        .catch(error => console.error('Error fetching data;', error));