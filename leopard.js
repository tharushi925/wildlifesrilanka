const leopardData = {
          "titlesinharaja":'',
          "paragraphsinharaja":'',
          "titleknuckles":'',
          "paragraphknuckles":'',
          "titlehorton":'',
          "paragraphhorton":'',
          "titlethree":'',
          "titlefour": '',
          "parathree":'',
          "listtitleconsequences":'',
          "listtextone": '',
          "listtexttwo": '',
          "listtextthree": '',
          "listtextfour": '',
          "listtextfive": '',
          "listtextsix": '',
          "listtitlemitigation": '',
          "Consequenceslistone" : [],
          "mitigationlist": [],
          "titlewildlifeconflict":'',
          "titledescription":'',
          "parawildlifeconflict":'',
          "listtitleconsequencestwo":'',
          "Consequenceslisttwo":[],
          "listtextseven":'',
          "listtexteight":'',
          "listtextnine":'',
          "titlemechanismstoreduse":'',
          "mechnismslist":[],
          "listtextten":'',
          "listtexteleven":'',
          "listtexttwelve":'',
          
          
          
          

        };
        fetch('leopard.json')
        .then(response => response.json())
        .then(data=>{
          leopardData.titlesinharaja = data.titlesinharaja;
          leopardData.paragraphsinharaja = data.paragraphsinharaja;
          leopardData.titleknuckles = data.titleknuckles;
          leopardData.paragraphknuckles = data.paragraphknuckles;
          leopardData.titlehorton = data.titlehorton;
          leopardData.paragraphhorton = data.paragraphhorton;
          leopardData.titlethree = data.titlethree;
          leopardData.titlefour = data.titlefour;
          leopardData.parathree = data.parathree;
          leopardData.listtitleconsequences = data.listtitleconsequences;
          leopardData.listtextone = data.listtextone;
          leopardData.listtexttwo = data.listtexttwo;
          leopardData.listtextthree = data.listtextthree;
          leopardData.listtextfour = data.listtextfour;
          leopardData.listtextfive = data.listtextfive;
          leopardData.listtextsix = data.listtextsix;
          leopardData.listtitlemitigation = data.listtitlemitigation;
          leopardData.Consequenceslistone = data.Consequenceslistone;
          leopardData.mitigationlist = data.mitigationlist;
          leopardData.titlewildlifeconflict = data.titlewildlifeconflict;
          leopardData.titledescription = data.titledescription;
          leopardData.parawildlifeconflict = data.parawildlifeconflict;
          leopardData.listtitleconsequencestwo = data.listtitleconsequencestwo;
          leopardData.Consequenceslisttwo = data.Consequenceslisttwo;
          leopardData.listtextseven = data.listtextseven;
          leopardData.listtexteight = data.listtexteight;
          leopardData.listtextnine = data.listtextnine;
          leopardData.titlemechanismstoreduse = data.titlemechanismstoreduse;
          leopardData.mechnismslist = data.mechnismslist;
          leopardData.listtextten = data.listtextten;
          leopardData.listtexteleven = data.listtexteleven;
          leopardData.listtexttwelve = data.listtexttwelve;

          const editleopardsinharajaparaone = document.getElementById("leopardsinharajabuttonedit");
          const submitleopardsinharajaparaone = document.getElementById("leopardsinharajabuttonsubmit");
          const contenteditleopardsinharajaparaone = document.getElementById("lscontent");
          const contenteditarealeopardsinharajaparaone = document.getElementById("lsparaeditarea");

          editleopardsinharajaparaone.addEventListener("click", showlscontent);
          submitleopardsinharajaparaone.addEventListener("click", savelscontent);

          function showlscontent() {
            contenteditarealeopardsinharajaparaone.value = data.paragraphsinharaja;
          }
          function savelscontent() {
            contenteditleopardsinharajaparaone.innerText = contenteditarealeopardsinharajaparaone.value;
            localStorage.setItem("user.edit-lspara", contenteditarealeopardsinharajaparaone.value);
          }

          const editleopardknucklesparatwo= document.getElementById("leopardknucklesbuttonedit");
          const submitleopardknucklesparatwo = document.getElementById("leopardknucklesbuttonsubmit");
          const contentleopardknucklesparatwo = document.getElementById("lkcontent");
          const contenteditarealeopardknucklesparatwo = document.getElementById("lkparaeditarea");

          editleopardknucklesparatwo.addEventListener("click", showlkcontent);
          submitleopardknucklesparatwo.addEventListener("click", savelkcontent);

          function showlkcontent() {
            contenteditarealeopardknucklesparatwo.value = data.paragraphknuckles;
          }
          function savelkcontent() {
            contentleopardknucklesparatwo.innerText = contenteditarealeopardknucklesparatwo.value;
            localStorage.setItem("user.edit-lkpara", contenteditarealeopardknucklesparatwo.value);
          }

          const editleopardhortonparathree = document.getElementById("leopardhortbuttonedit");
          const submitleopardhortonparathree = document.getElementById("leopardhortbuttonsubmit");
          const contentleopardhortonparathree = document.getElementById("lhcontent");
          const contenteditarealeopardhortonparathree = document.getElementById("lhparaeditarea");

          editleopardhortonparathree.addEventListener("click", showlhcontent);
          submitleopardhortonparathree.addEventListener("click", savelhcontent);

          function showlhcontent() {
            contenteditarealeopardhortonparathree.value = data.paragraphhorton;
          }
          function savelhcontent() {
            contentleopardhortonparathree.innerText = contenteditarealeopardhortonparathree.value;
            localStorage.setItem("user.edit-lhpara", contenteditarealeopardhortonparathree.value);

          }


          const editLdescription = document.getElementById("descriptioneditbuttonL");
          const submitLdescription = document.getElementById("descriptionsubmitbuttonL");
          const contentLdescription = document.getElementById("contentL");
          const editareaLdescription = document.getElementById("editareaL");

          editLdescription.addEventListener("click", showdescriptionparaL);
          submitLdescription.addEventListener("click", savedescriptionparaL);

          function showdescriptionparaL() {
            editareaLdescription.value = data.parathree;
          }
          function savedescriptionparaL() {
            contentLdescription.innerText = editareaLdescription.value;
            localStorage.setItem("user.edit-descriptionparaL", editareaLdescription.value);
          }


          const editdescriptiontwo = document.getElementById("editbuttondecriptiontwo");
          const submitdescriptiontwo = document.getElementById("submitbuttondescriptiontwo");
          const contentdescriptiontwo = document.getElementById("contentdescriptiontwo");
          const editareadescription = document.getElementById("editareadescriptiontwo");

          editdescriptiontwo.addEventListener("click", showdescriptiontwopara);
          submitdescriptiontwo.addEventListener("click", savedescriptiontwopara);

          function showdescriptiontwopara() {
            editareadescription.value = data.parawildlifeconflict;
            
          }
          function savedescriptiontwopara() {
            contentdescriptiontwo.innerText = editareadescription.value;
            localStorage.setItem("user.edit-descriptiontwopara", editareadescription.value);
            
          }









          
          
          
          

        })

        .catch(error => console.error('Error fetching data;', error));