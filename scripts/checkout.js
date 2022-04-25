// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
var balance =JSON.parse(localStorage.getItem("amount")) 

  document.querySelector("#wallet").innerText=balance


    var movie =JSON.parse(localStorage.getItem("movie")) 
    
    console.log(movie)


    
    
    show()
    

    function show(){
      var box = document.createElement("div")

      var name = document.createElement("p")
      name.innerText=movie[0].Title;
      var poster= document.createElement("img")
      poster.src =movie[0].Poster;
      // console.log(movie)

    

    box.append(name,poster)
    document.querySelector("#movie").append(box)
    
    
    }

    

    
    function addUser(){
      let username = document.getElementById("user_name").value
      let numSeats= document.getElementById("number_of_seats").value

        if(balance/numSeats>=100){
            alert("booked")
            balance=balance -(numSeats*100)
            document.querySelector("#wallet").innerText=balance
            localStorage.setItem("amount",JSON.stringify(balance))
        }else{
          alert("Insuffiecient balance!")
        }
    }