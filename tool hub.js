function downloadYoutube() {
  const url = document.getElementById("yt-url").value;
  const format = document.getElementById("yt-format").value;
  const status = document.getElementById("yt-status");

  if (!url) {
    status.innerHTML = "<span style='color:red'>Please enter a URL</span>";
    return;
  }

  status.innerHTML =
    "<span style='color:yellow'>Processing... (Backend required)</span>";

  console.log("Download:", url, format);
}

function fetchWhatsappDP() {
  const number = document.getElementById("wa-number").value;
  const result = document.getElementById("wa-result");
  const img = document.getElementById("wa-img");

  if (!number) {
    alert("Enter phone number");
    return;
  }

  result.classList.remove("hidden");
  img.src = `https://ui-avatars.com/api/?name=${number}&background=random`;
}