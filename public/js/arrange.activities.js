let xhttp = new XMLHttpRequest();
let url = new URL("http://arrange.ciuneaev.xyz/api/featured_activities");
xhttp.open("GET", url.toString(), true);

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
