function calculate() {
    let todayDate = new Date();
    let totalDays = 0;
    let pakages = document.getElementById("pakages").value;
    let rolls = document.getElementById("rolls").value;
    let persons = document.getElementById("person").value;
    let bathroom = document.getElementById("bathroom").value;
    let sheets = document.getElementById("sheet").value;

    if (pakages == "" || rolls == "" ||  persons == "" ||
        bathroom == "" || sheets == "") {
            alert("Form must be filled out");
        return false;
    } else {
        totalDays = (pakages * rolls * 100) /(bathroom * sheets );
        todayDate.setDate(todayDate.getDate() + totalDays);
        document.getElementById("myresult").innerHTML =
        "You have TP for " + totalDays + " days!!!  " + 
        "</br>Up to: " +  todayDate.toLocaleDateString() ;
    }
  }