// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page


var oldbalance = localStorage.getItem("amount")

  document.querySelector("#wallet").innerText=oldbalance


  let id;

  async function searchMovies(){
    try{

      const search = document.getElementById("search").value

      const res = await fetch( `https://www.omdbapi.com/?s=${search}&apikey=4516ab55`)

      const data = await res.json();

      console.log(data.search)

      const movies = data.Search;
      console.log(movies)

      return movies



     

    }
    catch(err){
      console.log(err)
    }


  }

  function AppendMovies(data1){
    data1.forEach(function(el,index){


      let box = document.createElement("div")

      let poster= document.createElement("img")
      poster.src = el.Poster

      let name = document.createElement("p")
      name.innerText= el.Title

      let addMovie= document.createElement("button")
      addMovie.innerText="select Movie"
      addMovie.addEventListener("click",function(){
            BookNow(el,index)
      })
      

      box.append(poster,name,addMovie)

      document.getElementById("movies").append(box)

      
    });

  }

  async function main(){
    let data = await searchMovies();

    if(data===undefined){
      return false
    }
    AppendMovies(data);
  }

  
    function debounce(func,delay){
      if(id){
        clearTimeout(id)
      }
      id=setTimeout(function(){
        func()
      },delay)
    }



  
  
  var moviedata=[]

  function BookNow(el,index){
     
      moviedata.push(el)


      console.log(moviedata)
      // localStorage.setItem("movie",JSON.stringify(moviedata))
      localStorage.setItem("movie",JSON.stringify(moviedata))
      window.location.href="checkout.html"
  }
