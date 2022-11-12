document.querySelectorAll(".g-img-container").forEach(function (el) {
  el.addEventListener("click", showPreview);
});

var curImg;

function showPreview() {
  curImg && curImg.css("border", "none");
  curImg = $(this).children("img");
  var src = curImg.attr("src");
  $("#previewImg").children("img").attr("src", src);

  curImg.css("border", "3px solid #896eff");

  document
    .getElementById("previewContainer")
    .classList.add("preview-container-show");

  document.getElementById("gallery").style.width = "75%";
}

function closePreview() {
  document.getElementById("gallery").style.width = "100%";
  curImg.css("border", "none");
  document
    .getElementById("previewContainer")
    .classList.remove("preview-container-show");
}
