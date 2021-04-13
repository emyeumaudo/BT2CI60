import MeMe from "./meme.js";

export class MemMeCollection extends MeMe {
  id;
  name;
  image;
  dataModified;
  ower;
  memes;
  constructor(id, name, image, dataModified, ower, memes) {
    super(id, name, image, dataModified, ower, memes);
    this.id = id;
    this.name = name;
    this.image = image;
    this.dataModified = dataModified;
    this.ower = ower;
    this.memes = memes;
  }

  add(data) {
    if (data instanceof MeMe) {
      this.memes.push(data);
      console.log(this.memes);
    }
  }

  delete(id) {
    for (let i = 0; i < this.memes.length; i++) {
      if (this.memes[i].id == id) {
        this.memes.splice(i, 1);
      } else {
        console.log("xoa id");
      }
    }
  }

  update(id, data) {
    for (let i = 0; i < this.memes.length; i++) {
      if (this.memes[i].id == id) {
        this.memes[i].name = data.name;
        this.memes[i].image = data.image;
        this.memes[i].dataModified = data.dataModified;
      } else {
        continue;
      }
    }
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
    <div class="owner">
        <p>${this.owner}owner</p>
    </div>
    <div class="memes">
        <p>${this.memes}memes</p> 
    </div>    
      
</div>`;
  }
}

let Collection1 = new Collection(1, "gái", "/BT1/img/899.PNG", "13/4/2000");
let Collection2 = new Collection(
  2,
  "giầy",
  "/BT1/img/Capture888.PNG",
  "20/5/2005"
);
let Collection3 = new MemMeCollection(1, "collection", []);
Collection3.add(Collection1);
Collection3.add(Collection2);
console.log(Collection3);
Collection3.show();
