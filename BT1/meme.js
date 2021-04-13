export class MeMe {
  id;
  name;
  image;
  dataModified;

  constructor(id, name, image, dataModified) {
    super(id, name, image, dataModified);
    this.id = id;
    this.name = name;
    this.image = image;
    this.dataModified = dataModified;
  }

  update(data) {
    this.id = data.id;
    this.name = data.name;
    this.image = data.image;
    this.dataModified = data.dataModified;
  }

  show() {
    let content = document.getElementById("container");
    let html = ``;
    content.innerHTML =
      html +
      `<div id="container">
    <div class="ID">
        <p>${this.id}ID</p>
    <div class="Name">
        <p>${this.name}.Name</p>
    </div>    
    <div class="img">
        <img src="${this.image}" alt="">
    </div>    
    <div class="dataModified">
        <p>${this.dataModified}dataModified</p>
    </div>    
</div>`;
  }
}
