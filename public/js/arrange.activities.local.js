let xhttp = new XMLHttpRequest();

let url_local = new URL("https://2627-96-44-161-9.ngrok.io/api/featured_activities");
xhttp.open("GET", url_local.toString(), true); 

xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let response = this.responseText;
    let elArrangeActivitiesJs = document.getElementById("arrange-activities-js");
    let wrapper = document.createElement("div");
    wrapper.innerHTML = response;
    elArrangeActivitiesJs.parentNode.insertBefore(wrapper, elArrangeActivitiesJs.nextSibling);
  }
};
xhttp.send();
