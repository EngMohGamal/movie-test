let rowData = document.getElementById("rowData"),
    searchItem = document.getElementById("allMovies"),
    word = document.getElementById("word"),
    sidenavLinks = document.getElementsByClassName("sidenav-links");


// get category from  html element
for (let i = 0; i < sidenavLinks.length; i++)
    sidenavLinks[i].addEventListener("click", function (e) {
        let x = e.target;
        current = x.innerHTML;
        console.log(current)
    })
    


// get data from Api
async function getMovieData(current = 'trending') {
    apiResponse = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=8613e4e1776af4e8633cc311d67b3e09&language=en-US&page=1`)
    responseData = await apiResponse.json()
    trendingMovie = (responseData.results)
    // console.log(trendingMovie)
    displayFilms();
    return trendingMovie;
    
}
getMovieData();




function displayFilms() {
    cartona = ``;
    for (let i = 0; i < trendingMovie.length; i++) {
        cartona += `<div class="col-md-4 my-3 shadow ">
        <div class="post">
        <img src="https://image.tmdb.org/t/p/w500${trendingMovie[i].poster_path}" alt=""  class="img-fluid rounded">
            <div class="layer d-flex align-items-center ">
                 <div class="info p-5">
                    <h2> ${trendingMovie[i].original_title}  </h2>
                    <p> ${trendingMovie[i].overview}  </p>
                    <p>rate:${trendingMovie[i].vote_average}  </p>
                    <p>${trendingMovie[i].release_date} </p>
                </div>
             </div>
        </div>
    </div>
        `
    }
    document.getElementById('rowData').innerHTML = cartona;



}


searchItem.addEventListener("keyup",function  () {
 
   
    let currentFilm = searchItem.value,
        cartoona = ``;
      
    for (let i = 0; i < trendingMovie.length ; i++) 
        
        if (trendingMovie[i].original_name.toLowerCase().includes(currentFilm)== true){

            console.log(trendingMovie[i].original_name)
               cartoona += `<div class="col-md-4 pb-4 ">
               <div class="posts">
                   <img src="https://image.tmdb.org/t/p/w500${trendingMovie[j].poster_path}" alt=""  class="img-fluid rounded">
                   
               </div>
       
           </div>
               `
        } 
         
       
       // console.log("cartoona");
        //  document.getElementById('rowData').innerHTML = cartoona;


    
    
})






// contact us 
let userName = document.getElementById("name"),
    userEmail = document.getElementById("email"),
    userPhone = document.getElementById("phone"),
    userAge = document.getElementById("age"),
    userPassword = document.getElementById("password"),
    userRePassword = document.getElementById("rePassword"),
    userNameAlert = document.getElementById("namealert"),
    userEmailAlert = document.getElementById("emailalert"),
    userPhoneAlert = document.getElementById("phonealert"),
    userAgeAlert = document.getElementById("agealert"),
    userpasswordAlert = document.getElementById("passwordalert"),
    userRepasswordAlert = document.getElementById("repasswordalert");



// validation function 
userName.addEventListener("keyup", function usernameValidation() {

    let regex = /^[A-Za-z]{3,10}(\s?[A-Za-z]{3,10})?$/
    if (regex.test(userName.value) == true && userName.value != "") {
        userName.classList.add("is-valid");
        userName.classList.remove("is-invalid");
        userNameAlert.classList.replace("d-block", "d-none");
        console.log(true)
        return true
    }
    else {

        userName.classList.add("is-invalid");
        userName.classList.remove("is-valid");
        usernameAlert.classList.replace("d-none", "d-block");

        return false
    }
})


userEmail.addEventListener("keyup", function userEmailValidation() {
    let regex = /@[a-z]{5,10}(\.com)$/;
    if (regex.test(userEmail.value) == true && userEmail.value != "") {
        userEmail.classList.add("is-valid");
        userEmail.classList.remove("is-invalid");
        userEmailAlert.classList.replace("d-block", "d-none");

        return true
    }
    else {

        userEmail.classList.add("is-invalid");
        userEmail.classList.remove("is-valid");
        userEmailAlert.classList.replace("d-none", "d-block");

        return false
    }
})


userPhone.addEventListener("keyup", function userPhoneValidation() {
    let regex = /^(002){0,1}01[0125][0-9]{8}$/;
    if (regex.test(userPhone.value) == true && userPhone.value != "") {
        userPhone.classList.add("is-valid");
        userPhone.classList.remove("is-invalid");
        userPhoneAlert.classList.replace("d-block", "d-none");

        return true
    }
    else {

        userPhone.classList.add("is-invalid");
        userPhone.classList.remove("is-valid");
        userPhoneAlert.classList.replace("d-none", "d-block");

        return false
    }
})


userAge.addEventListener("keyup", function userAgeValidation() {
    let regex = /^[1-9][0-9]?$|^100$/;
    if (regex.test(userAge.value) == true && userAge.value != "") {
        userAge.classList.add("is-valid");
        userAge.classList.remove("is-invalid");
        userAgeAlert.classList.replace("d-block", "d-none");

        return true
    }
    else {

        userAge.classList.add("is-invalid");
        userAge.classList.remove("is-valid");
        userAgeAlert.classList.replace("d-none", "d-block");

        return false
    }
})


userPassword.addEventListener("keyup", function userPasswordValidation() {
    let regex = /^.{5,15}$/;
    if (regex.test(userPassword.value) == true && userPassword.value != "") {
        userPassword.classList.add("is-valid");
        userPassword.classList.remove("is-invalid");
        userpasswordAlert.classList.replace("d-block", "d-none");

        return true
    }
    else {

        userPassword.classList.add("is-invalid");
        userPassword.classList.remove("is-valid");
        userpasswordAlert.classList.replace("d-none", "d-block");

        return false
    }
})


userRePassword.addEventListener("keyup", function userRePasswordValid() {
    if (userPassword.value == userRePassword.value) {
        userRePassword.classList.add("is-valid");
        userRePassword.classList.remove("is-invalid");
        userRePasswordAlert.classList.replace("d-block", "d-none");

        return true
    }


    else {

        userRePassword.classList.add("is-invalid");
        userRePassword.classList.remove("is-valid");
        userRePasswordAlert.classList.replace("d-none", "d-block");

        return false
    }

}
)
