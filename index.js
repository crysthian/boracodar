const uploadarea = document.getElementById("upload-area")

uploadarea.addEventListener("dragenter", (e) =>
  e.target.classList.add("drag-over")
)
uploadarea.addEventListener("dragleave", (e) =>
  e.target.classList.remove("drag-over")
)
